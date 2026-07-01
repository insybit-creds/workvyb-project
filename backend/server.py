from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend email configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL')
LEAD_NOTIFICATION_EMAIL = os.environ.get('LEAD_NOTIFICATION_EMAIL')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class LeadEnquiry(BaseModel):
    name: str
    email: EmailStr
    mobile: str
    company: str
    roles: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/leads/notify")
async def notify_new_lead(lead: LeadEnquiry):
    """Send an email notification for a new Workvyb hiring enquiry. No DB persistence."""
    submitted_at = datetime.now(timezone.utc).strftime('%d %b %Y, %I:%M %p UTC')
    html_content = f"""
    <table style="width:100%;max-width:520px;font-family:Arial,sans-serif;border-collapse:collapse;">
      <tr><td style="padding:16px 0;font-size:18px;font-weight:bold;color:#111827;">
        New Hiring Enquiry — Workvyb
      </td></tr>
      <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb;color:#374151;">
        <strong>Name:</strong> {lead.name}
      </td></tr>
      <tr><td style="padding:8px 0;color:#374151;">
        <strong>Email:</strong> {lead.email}
      </td></tr>
      <tr><td style="padding:8px 0;color:#374151;">
        <strong>Mobile Number:</strong> {lead.mobile}
      </td></tr>
      <tr><td style="padding:8px 0;color:#374151;">
        <strong>Company Name:</strong> {lead.company}
      </td></tr>
      <tr><td style="padding:8px 0;color:#374151;">
        <strong>Roles Hiring For:</strong> {lead.roles}
      </td></tr>
      <tr><td style="padding:12px 0 0 0;font-size:12px;color:#9ca3af;">
        Submitted on {submitted_at}
      </td></tr>
    </table>
    """
    params = {
        "from": SENDER_EMAIL,
        "to": [LEAD_NOTIFICATION_EMAIL],
        "reply_to": lead.email,
        "subject": f"New Workvyb Hiring Enquiry from {lead.company}",
        "html": html_content,
    }
    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        return {"status": "success", "email_id": email.get("id")}
    except Exception as e:
        logger.error(f"Failed to send lead notification email: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send lead notification email")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()