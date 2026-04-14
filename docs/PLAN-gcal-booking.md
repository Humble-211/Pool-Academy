# PLAN-gcal-booking.md — Google Calendar Booking Integration

## Overview

When a customer submits a booking request on Pool Academy, the system currently:
1. Validates the form data
2. Sends an email notification to `poolacademy.club@gmail.com`

**Goal:** After a successful email send, automatically create a Google Calendar event in the `appointmentpedinnails@gmail.com` account — so the owner sees every booking appear directly in their calendar with full details.

---

## Project Type

**WEB** — Next.js 14+ App Router, TypeScript, server-side API Route modification only.  
No new pages or UI components are required.

---

## Success Criteria

- [ ] A new Google Calendar event is created in `appointmentpedinnails@gmail.com` every time a booking form is submitted successfully
- [ ] Event contains: customer name, date/time, end time (start + duration), table type, group size, special requests
- [ ] If Google Calendar API fails, the booking still returns `{ success: true }` (email was sent) and the error is logged server-side
- [ ] Service account credentials are stored securely in `.env.local` — never committed to git
- [ ] No regressions in the existing email notification flow

---

## Tech Stack

| Technology | Purpose | Rationale |
|---|---|---|
| `googleapis` (npm) | Official Google API Node.js client | First-party, well-maintained, handles auth + Calendar v3 |
| GCP Service Account | Server-side auth with no token expiry | No OAuth refresh loop; one-time setup; best for server-side automation |
| Google Calendar API v3 | Create calendar events | Standard REST API via googleapis wrapper |
| `.env.local` | Credential storage | Never committed; Next.js native support |

---

## Architecture Decision: Service Account Auth

```
[Booking Form Submit]
        │
        ▼
[/api/booking POST route]
        │
        ├──► [1] Validate form (zod) ──► 400 on failure
        │
        ├──► [2] Send email via Nodemailer (Gmail SMTP)
        │         └── if fail → 500
        │
        └──► [3] Create Google Calendar event (googleapis)
                  └── if fail → log error, still return 200 ✅
```

**Service Account Flow:**
```
GCP Console → Create Service Account → Download JSON key
     ↓
Share appointmentpedinnails@gmail.com calendar WITH the service account email
     ↓
Service account has write access → creates events server-side, no OAuth popup
```

---

## File Structure (Changes Only)

```
Pool-Academy/
├── .env.local                          ← ADD: 3 new env vars
├── docs/
│   └── PLAN-gcal-booking.md            ← This file
└── src/
    ├── lib/
    │   └── googleCalendar.ts           ← NEW: Google Calendar helper module
    └── app/
        └── api/
            └── booking/
                └── route.ts            ← MODIFY: Call calendar helper after email
```

---

## Task Breakdown

---

### PHASE 0 — GCP Setup (Manual, one-time, done by you)

**Task 0.1 — Create GCP Project & Enable Calendar API**
- **Input:** Google account with access to GCP Console
- **Steps:**
  1. Go to [console.cloud.google.com](https://console.cloud.google.com)
  2. Create a new project (e.g., `pool-academy-booking`)
  3. Go to **APIs & Services → Library**
  4. Search for **Google Calendar API** → Enable it
- **Output:** GCP project with Calendar API enabled
- **Verify:** API appears in "Enabled APIs" dashboard

---

**Task 0.2 — Create Service Account & Download JSON Key**
- **Input:** GCP project from Task 0.1
- **Steps:**
  1. Go to **IAM & Admin → Service Accounts**
  2. Click **Create Service Account** → Name: `pool-academy-calendar-bot`
  3. Skip role assignment (roles set via Calendar sharing, not IAM)
  4. Click the created account → **Keys tab → Add Key → JSON**
  5. Download the JSON file — keep it safe!
- **Output:** `service-account.json` downloaded locally
- **Verify:** JSON contains `client_email`, `private_key`, `project_id`

---

**Task 0.3 — Share Calendar with Service Account**
- **Input:** Service account `client_email` from the JSON (looks like `bot@your-project.iam.gserviceaccount.com`)
- **Steps:**
  1. Log into Google Calendar as `appointmentpedinnails@gmail.com`
  2. Find your main calendar in left sidebar → click ⋮ → **Settings and sharing**
  3. Under **Share with specific people** → **Add people**
  4. Enter the service account `client_email`
  5. Set permission to **Make changes to events** → Save
- **Output:** Service account can write events to the calendar
- **Verify:** Service account email appears in shared users list

---

**Task 0.4 — Configure Env Vars**
- **Input:** Downloaded `service-account.json`
- **Add to `.env.local`:**
  ```env
  GOOGLE_SERVICE_ACCOUNT_EMAIL=pool-academy-calendar-bot@your-project.iam.gserviceaccount.com
  GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
  GOOGLE_CALENDAR_ID=appointmentpedinnails@gmail.com
  ```
  > ⚠️ Wrap the private key in double quotes. The `\n` characters must be preserved exactly as-is.
- **Output:** Three new env vars in `.env.local`
- **Verify:** Dev server starts without errors; vars accessible via `process.env`

---

### PHASE 1 — Code Implementation

**Task 1.1 — Install googleapis package**
- **Agent:** `backend-specialist`
- **Skill:** `nodejs-best-practices`
- **Command:** `npm install googleapis`
- **Output:** `googleapis` added to `dependencies` in `package.json`
- **Verify:** `node_modules/googleapis` exists; TypeScript types available

---

**Task 1.2 — Create `src/lib/googleCalendar.ts`**
- **Agent:** `backend-specialist`
- **Skill:** `api-patterns`, `clean-code`
- **Input:** `BookingRequestFormData` from `src/lib/types.ts`
- **Output:** Helper module exporting `addBookingToCalendar(data)` async function
- **Implementation:**
  - Auth: `google.auth.JWT` with service account email + private key
  - Scope: `https://www.googleapis.com/auth/calendar`
  - Event payload:
    - `summary`: `🎱 {name} — Pool Booking`
    - `description`: Table type, group size, special requests
    - `start`: ISO datetime from `date` + `time`
    - `end`: start datetime + `duration` hours
    - `location`: Pool Academy address
  - Target calendar: `process.env.GOOGLE_CALENDAR_ID`
  - Return created event ID on success
- **Verify:** TypeScript compiles without errors; function importable

---

**Task 1.3 — Modify `src/app/api/booking/route.ts`**
- **Agent:** `backend-specialist`
- **Skill:** `clean-code`
- **Input:** Existing `route.ts` (email flow working)
- **Output:** Updated route calling `addBookingToCalendar` after email send
- **Implementation:**
  - Import `addBookingToCalendar` from `@/lib/googleCalendar`
  - After `await transporter.sendMail(...)` succeeds, add:
    ```ts
    try {
      const eventId = await addBookingToCalendar(data);
      console.log(`[booking/route] Calendar event created: ${eventId}`);
    } catch (calErr) {
      console.error("[booking/route] Calendar event failed (non-blocking):", calErr);
    }
    ```
  - Return `{ success: true }` regardless of calendar outcome
- **Verify:** Submit form → `200 { success: true }` even if Calendar throws

---

### PHASE 2 — Verification

**Task 2.1 — End-to-End Test (Happy Path)**
1. `npm run dev`
2. Submit booking form with real test data
3. ✅ Email arrives at `poolacademy.club@gmail.com`
4. ✅ Calendar event appears in `appointmentpedinnails@gmail.com`
5. ✅ Event title, time, end time, description are correct

**Task 2.2 — Failure-Path Test (Graceful Degradation)**
1. Temporarily set `GOOGLE_PRIVATE_KEY=invalid` in `.env.local`
2. Submit booking form
3. ✅ Email still arrives
4. ✅ API returns `200 { success: true }`
5. ✅ Terminal logs show `[booking/route] Calendar event failed (non-blocking): ...`

**Task 2.3 — Build Check**
- Run: `npm run build`
- ✅ No TypeScript errors, no build failures

---

## Risk Register

| Risk | Likelihood | Mitigation |
|---|---|---|
| Private key newlines malformed in env vars | Medium | Code uses `.replace(/\\n/g, '\n')` to normalize; document format |
| Calendar not shared with service account | Medium | Task 0.3 explicit steps with verify checkpoint |
| `googleapis` API quota exceeded | Very Low | Free tier = 1M requests/day — negligible for this use case |
| `.env.local` accidentally committed | Low | Already in `.gitignore`; add service-account.json to `.gitignore` too |

---

## Environment Variables Summary

| Variable | Source | Example |
|---|---|---|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | JSON key → `client_email` | `bot@project.iam.gserviceaccount.com` |
| `GOOGLE_PRIVATE_KEY` | JSON key → `private_key` | `"-----BEGIN PRIVATE KEY-----\n..."` |
| `GOOGLE_CALENDAR_ID` | Target calendar address | `appointmentpedinnails@gmail.com` |

---

## Phase X: Verification Checklist

- [ ] `npm install googleapis` — installed
- [ ] `src/lib/googleCalendar.ts` — created, TypeScript-clean
- [ ] `src/app/api/booking/route.ts` — updated with non-blocking calendar call
- [ ] `.env.local` — 3 new Google vars added
- [ ] Calendar shared with service account email (Task 0.3)
- [ ] `npm run build` — passes with no errors
- [ ] End-to-end test: form submit → ✅ email + ✅ calendar event
- [ ] Failure-path test: bad key → ✅ email still sends + ✅ `200` response + ✅ graceful log
