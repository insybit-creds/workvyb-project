# Workvyb — AI-Powered Recruitment Landing Page

## Original Problem Statement
Create a complete, modern, high-converting landing page for a recruitment agency named
**Workvyb** — an AI-enabled recruitment agency helping startups and MNCs hire across Sales,
Marketing, Tech, Finance, Product Management, GTM, and other business-critical roles. The page
must be conversion-focused, mobile-first, premium, and built to generate hiring enquiries via a
lead form and WhatsApp. Full section-by-section copy, CTAs, and design direction were provided
by the user (see original full spec for exact section copy/content — implemented in full).

## User Choices Gathered (Initial Ask)
1. Lead form: **Frontend-only** for now — no backend DB persistence yet (to be connected later).
2. Logo: No image provided — using a clean text-based "Workvyb" wordmark.
3. Company references in "Recent Closures": kept **generic** (no real company names).
4. Color theme: initially dark navy + electric blue/violet (design agent's choice) — **later
   changed to a LIGHT theme** per explicit user feedback (see Change Log).
5. Contact info: WhatsApp 8010545225, email contact@workvyb.com.

## Architecture
- **Frontend only** — React (CRA + craco), Tailwind CSS, shadcn/ui components, framer-motion,
  react-hook-form + zod for form validation, lucide-react icons.
- No backend/database work needed for this feature — form submission is simulated client-side
  with a success state and toast notification. Ready to be wired to a real API later.
- Single page (`/`) rendering `LandingPage.jsx` which assembles all sections.

## Core Requirements (Static)
- Primary CTA: "Submit Hiring Requirement" | Secondary CTA: "Chat on WhatsApp"
- WhatsApp: `https://wa.me/918010545225?text=...` (prefilled message)
- Trust markers: 100+ roles filled, shortlists in as fast as 4 days, startup + MNC experience
- Enquiry form fields: Name, Mobile Number (Indian 10-digit validation), Company Name, Roles

## What's Been Implemented (as of Feb 2026)

### Initial Build
- Full single-page landing site with all 14 requested sections: Header/Nav, Hero (+ dashboard
  visual + embedded enquiry form), Problem, Solution, Roles We Hire, Why Workvyb, Recent
  Closures, Process (timeline), Comparison table, Metrics, FAQ (accordion), Final CTA, Bottom
  contact form, Footer, Floating WhatsApp button.
- Custom-built AI recruitment "dashboard visual" for hero (no stock photos) — pipeline bars, AI
  match score badge, shortlisted avatars, offer-accepted card, using framer-motion floating
  animation.
- Reusable `EnquiryForm.jsx` (variant='hero'|'bottom') with zod validation incl. Indian mobile
  regex `^[6-9]\d{9}$`, success state, and shadcn toast notification.
- All interactive elements tagged with `data-testid` (see `constants/testIds/workvyb.js`).

### Change Log (user feedback round 1)
1. **Removed** the "Numbers That Speak for Themselves" Metrics section entirely (file deleted).
2. **Reordered** "Recent Roles We Helped Companies Close" to appear immediately after the Hero
   section (2nd section on the page) instead of near the bottom.
3. **Switched entire theme from dark navy to a light theme** — white/slate-50 backgrounds,
   slate-900/slate-600 text, blue-600/violet-600 accents. Final CTA kept as a vibrant
   blue→violet gradient banner for visual contrast. Hero dashboard visual kept as a dark card
   for premium "tech mockup on light page" contrast.

### Change Log (user feedback round 2) — Email Lead Notifications
- Added `POST /api/leads/notify` FastAPI endpoint using **Resend** to send a transactional
  email whenever the enquiry form is submitted (Name, Mobile, Company, Roles). **No database
  used** per user's request (low expected volume, ~2 leads/day).
- Recipient: `saurabh@insybit.com`. Sender: `onboarding@resend.dev` (Resend sandbox).
- `EnquiryForm.jsx` now calls this real endpoint via axios instead of a simulated submission;
  shows success state + toast on success, destructive toast on failure.
- Credentials stored in `/app/backend/.env` (`RESEND_API_KEY`, `SENDER_EMAIL`,
  `LEAD_NOTIFICATION_EMAIL`) — see `/app/memory/test_credentials.md`.

### Testing
- Full E2E frontend test pass completed (test_reports/iteration_1.json): 100% pass rate.
  Verified section order, both enquiry forms (validation + success + toast), header nav +
  mobile menu, FAQ accordion, recent closures (7 cards), roles we hire (6 cards), comparison
  table, footer, floating WhatsApp button, responsiveness (1920/768/390px). No contrast issues.
  Added missing `data-testid` on individual Recent Closures cards per minor suggestion.

## Prioritized Backlog / Next Steps
- **P1**: Add WhatsApp Business API notification when a new lead is submitted (in addition to email).
- **P1**: Add basic analytics (form submissions, WhatsApp click tracking) for conversion
  measurement.
- **P2**: Add real client logos / testimonials once available (currently generic per user
  request).
- **P2**: If lead volume grows beyond a few/day, revisit adding MongoDB persistence + admin view.

## Key Files
- `/app/frontend/src/pages/LandingPage.jsx` — section assembly/order
- `/app/frontend/src/components/workvyb/*` — all section components
- `/app/frontend/src/components/workvyb/EnquiryForm.jsx` — reusable lead form
- `/app/frontend/src/data/workvybData.js` — all static copy/content
- `/app/frontend/src/constants/testIds/workvyb.js` — data-testid registry
