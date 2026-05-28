# Booking Automation Management

## What the client gets
Ongoing management of a deployed booking automation (Calendly / Cal.com / custom + reminders + reschedule logic + CRM sync). Worker keeps it current, fixes breaks, and reports usage.

## What Worker does — step by step

1. **Daily check — 5 min.** Confirm last 24h of bookings synced to CRM and calendar. Spot-check 3 confirmations and 3 reminders went out.

2. **Weekly review — Claude.ai.** Pull no-show rate, reschedule rate, conversion rate (booked → showed → bought). Prompt:
   > "Analyze {{CLIENT_NAME}}'s booking data this week. No-show rate, reschedule rate, peak booking times. Identify any patterns suggesting reminder cadence change or qualification question additions. Output as 1-page memo."

3. **Reminder tuning — adjust copy or timing.** Common pattern: add a 1-hour-before SMS for high no-show rates. Claude rewrites reminder copy.

4. **Qualification question updates — when client's ICP shifts.** Add or modify booking-form questions.

5. **Failed booking review — daily.** Any abandoned bookings flagged. Worker reaches out (or triggers automation) to recover.

6. **Monthly report — Claude.ai.** Total bookings, show rate, source attribution, conversion to client (if disclosed).

## Tools used
- Cal.com / Calendly / SavvyCal / custom — booking platform
- HubSpot / Pipedrive / Sheets — CRM sync
- Twilio / WhatsApp Business — reminder channel
- Claude.ai Project — review + reports
- Claude Code — custom logic if needed

## Time required
- Daily check: 5 min × 22 = ~2 hours/month
- Weekly review: 1 hour × 4 = 4 hours/month
- Tuning: 1-2 hours/month
- Reporting: 1 hour/month
- **Total: ~8 hours/month**

## What to send the client
- Monthly report
- Any abandoned/no-show recovery actions taken

## Quality check - CTO & COO review
- All bookings sync to CRM within 1 min
- Reminders fire reliably (sample 5/day)
- Time zones correct per attendee
- Reschedule links work
- No double-booking incidents

## Tier availability
Scale (bundled). Standalone retainer AED 600/mo after build.
