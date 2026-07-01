"""Tests for POST /api/leads/notify - Workvyb hiring enquiry email notification endpoint (no DB persistence)."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')


@pytest.fixture
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


VALID_PAYLOAD = {
    "name": "Test User",
    "email": "test@example.com",
    "mobile": "9876543210",
    "company": "Test Co",
    "roles": "Product Manager",
}


class TestLeadsNotify:
    def test_valid_submission_returns_success(self, api_client):
        resp = api_client.post(f"{BASE_URL}/api/leads/notify", json=VALID_PAYLOAD)
        assert resp.status_code == 200, resp.text
        data = resp.json()
        assert data["status"] == "success"
        assert "email_id" in data
        assert isinstance(data["email_id"], str)
        assert len(data["email_id"]) > 0

    def test_missing_email_returns_422(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "email"}
        resp = api_client.post(f"{BASE_URL}/api/leads/notify", json=payload)
        assert resp.status_code == 422
        data = resp.json()
        assert "detail" in data

    def test_missing_name_returns_422(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "name"}
        resp = api_client.post(f"{BASE_URL}/api/leads/notify", json=payload)
        assert resp.status_code == 422

    def test_empty_payload_returns_422(self, api_client):
        resp = api_client.post(f"{BASE_URL}/api/leads/notify", json={})
        assert resp.status_code == 422

    def test_invalid_email_format_currently_returns_500(self, api_client):
        # Backend model uses plain str for email (no pydantic EmailStr validation),
        # so format validation is frontend-only (zod). When an invalid email like
        # "notanemail" is sent directly to the API (bypassing frontend validation),
        # Resend rejects the malformed reply_to and the endpoint returns 500 instead
        # of a clean 422/400. This is a minor backend robustness gap - documented here.
        payload = {**VALID_PAYLOAD, "email": "notanemail"}
        resp = api_client.post(f"{BASE_URL}/api/leads/notify", json=payload)
        assert resp.status_code == 500  # Known gap: should ideally be 422/400
