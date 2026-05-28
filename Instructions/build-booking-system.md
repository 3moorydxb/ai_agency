# Build: Booking Automation System

## What the client gets
A custom booking system with automated reminders, qualification questions, payment collection (if needed), CRM sync, and SMS/WhatsApp reminders. Built on Cal.com (recommended) or Calendly, with custom logic added via n8n / Claude Code where the off-the-shelf doesn't cut it. Build price AED 5,000–15,000. Retainer AED 600/mo (see `booking-automation-management.md`).

## What Worker does — step by step

1. **Discovery — Claude.ai.** Capture: services/event types, durations, prices (if paid bookings), buffer times, availability per team member, qualification questions, payment flow, cancellation policy, reminder cadence.

2. **Platform choice — Cal.com (open source, self-host or cloud) vs. Calendly (cloud, fastest).** Default Cal.com for builds we want to deeply customize; Calendly for simple setups.

3. **Event types + availability — configure in platform.** Per-service event types, per-host availability rules, buffer times.

4. **Qualification questions — Claude.ai drafts, configure on event form.**
   > "Write the 4-5 qualification questions for {{CLIENT_NAME}}'s {{EVENT_TYPE}}. Each: question, type (multi-choice/short text), why we ask. Disqualify-routing rules (e.g. if answer to Q2 = 'no budget' → route to nurture page)."

5. **Reminder flow — n8n + Twilio + Claude.ai.** Build:
   - Email confirmation immediately
   - SMS/WhatsApp 24h before
   - SMS/WhatsApp 1h before
   - Reschedule link in every reminder
   Claude drafts copy for each reminder per brand voice. Prompt:
   > "Write the full reminder copy set for {{CLIENT_NAME}}'s {{EVENT_TYPE}} bookings. Voice per BRAND_BIBLE. Output 4 messages: (1) confirmation email — subject (under 50 char), preview, body with date/time/location/reschedule link/host name, (2) 24h-before SMS — under 160 char with `{{name}}`, `{{time}}`, reschedule link, (3) 1h-before SMS — under 160 char with location/dial-in + reschedule link, (4) WhatsApp template equivalents for (2) and (3), formatted for Meta template approval with `{{1}}`, `{{2}}` variables. Tone: warm but efficient. Include opt-out instruction in SMS per UAE TRA rules."

6. **Payment collection (if applicable) — Stripe or Cal.com's native integration.** Configure deposit % vs. full payment, refund rules.

7. **CRM sync — HubSpot/Pipedrive/Salesforce via Zapier or n8n.** Confirmed booking → CRM contact + deal + activity.

8. **Calendar integration — Google Calendar / Outlook / Apple Calendar.** Test two-way sync per host.

9. **No-show recovery — n8n flow.** If status = no-show, trigger an SMS + email 1 hour after with reschedule link.

10. **Testing — book a real appointment end-to-end.** Verify: confirmation, reminders fire, CRM record, calendar block, reschedule, cancel.

11. **Handoff doc.**

## Tools used
- Cal.com / Calendly — booking platform
- n8n — reminder + recovery flows
- Twilio — SMS / WhatsApp
- Stripe — payment (if needed)
- CRM API (HubSpot / Pipedrive / Salesforce)
- Claude Code — custom logic
- Claude.ai — copy + qualification questions

## Time required
- Discovery: 2-4 hours
- Platform setup: 4-6 hours
- Flows + integrations: 15-30 hours
- Testing: 4-6 hours
- **Total: 25-50 hours**

## What to send the client
- Test event for client to book
- Spec doc + flowchart
- Loom walkthrough
- Handoff doc

## Quality check - CTO & COO review
- Real booking tested end-to-end across one of each event type
- Reminders fire reliably (test 5 bookings)
- Time zones correct
- Reschedule + cancel both work
- Payment flow tested with real card (refund tested too)
- No double-booking possible

## Tier availability
Scale (via voice agent flows). One-time build standalone (AED 5,000–15,000).
