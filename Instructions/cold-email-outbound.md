# Cold Email / Outbound Lead Gen (500 Qualified Prospects/mo)

## What the client gets
A fully managed cold outbound system: 500 qualified prospects sourced, multi-step email sequences sent, replies handled, and meetings booked into the client's calendar. **Client is legally responsible for compliance with anti-spam laws in their jurisdiction (UAE, KSA, EU, US, etc.).**

## What Worker does — step by step

1. **ICP + offer doc (one-time) — Claude.ai.** Prompt:
   > "Build an ICP document for {{CLIENT_NAME}}. Cover: industry, company size, geography, job titles to target, day-to-day pains, what success looks like for them, what they currently use, what would make them switch. Also: write {{CLIENT_NAME}}'s positioning statement and 3 hook angles to test (curiosity, problem, social proof)."

2. **Infrastructure setup — one-time, critical.** Provision:
   - 3-5 secondary domains (e.g. `try-novaagency.com`, `get-novaagency.com`) — don't burn primary domain
   - 2-3 inboxes per domain (10-15 total)
   - DKIM, SPF, DMARC on every domain
   - Warm-up via Instantly or Smartlead (4-6 weeks before sending)
   - SendGrid or Google Workspace for sending

3. **Prospect sourcing — Apollo + Clay + Claude.** Pull 500-1000 raw prospects from Apollo matching ICP. Pipe through Clay for enrichment (LinkedIn, recent activity, company news). Claude scores and dedupes:
   > "Score each of these prospects 1-10 against the ICP. Score 8+: high-fit. Score 5-7: maybe. Below 5: drop. For high-fit, identify the strongest personalization hook from their LinkedIn / company news. Output as CSV."

4. **Email sequence — 3-4 step, Claude.ai.** Per persona:
   > "Write a 4-step cold email sequence for {{ICP}} promoting {{OFFER}}. Each email: under 80 words, one ask, one CTA. Email 1: pattern interrupt + curiosity. Email 2: case study or social proof. Email 3: direct ask. Email 4: breakup. Hyper-personalized hook line per prospect goes at top of email 1 — leave `{{HOOK}}` placeholder."

5. **Personalization at scale — Claude Code or Clay.** Per prospect, generate `{{HOOK}}` line from their LinkedIn:
   > "Read this prospect's LinkedIn profile. Write a 1-sentence opener referencing something specific (recent post, role change, company news). Personal, not creepy. Under 20 words."
   Bulk-generate via Claude API or Clay's AI columns.

6. **Send — Smartlead or Instantly.** Upload sequence + prospects. Set daily send limit (30-50/inbox/day max). Spread across inboxes. Inbox rotation built-in.

7. **Reply handling — daily, Claude.ai.** Classify replies:
   - Interested → draft a meeting-booking reply, send Calendly link, alert client
   - Need more info → draft answer
   - Not now → log + add to nurture list
   - Hard no → remove + suppress
   - Out-of-office → re-queue

8. **Weekly + monthly report — Claude.ai.** Sent, delivered, open rate, reply rate (positive vs. negative), meetings booked, pipeline value if disclosed.

## Tools used
- Apollo + Clay — prospect data + enrichment
- Smartlead / Instantly — sending + warm-up
- Google Workspace / SendGrid — inboxes
- Claude.ai Project — ICP, sequences, personalization, reply handling
- Claude Code — bulk personalization via API
- Calendly — booking link

## Time required
- Setup: 6-8 weeks lead time (warmup + tooling)
- Monthly ops: 25-35 hours/client (sourcing + sequence iteration + reply handling)

## What to send the client
- Weekly memo: prospects contacted, replies, meetings booked
- Calendly invites land directly on client's calendar
- Monthly report Doc
- Legal disclaimer signed at onboarding — client responsible for compliance

## Quality check - CTO & COO review
- Sending domains warmed > 4 weeks before going live
- Bounce rate < 4%, spam complaint rate < 0.1%
- Reply classification accurate — no missed positives
- Sequence cadence sane (3-5 days between steps)
- Suppression list honored across campaigns
- **Legal disclaimer in client agreement is in force**

## Tier availability
Growth, Scale. Standalone add-on AED 3,000/mo.
