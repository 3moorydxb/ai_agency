# CRM Management

## What the client gets
Ongoing CRM operation: pipeline hygiene, contact enrichment, deal-stage discipline, sales-team workflow nudges, dashboards, automated sequences. Built on HubSpot / Pipedrive / Zoho / Salesforce.

## What Worker does — step by step

1. **Pipeline audit (weekly) — Claude.ai with CRM export.** Pull all open deals. Prompt:
   > "Review {{CLIENT_NAME}}'s pipeline. Flag deals with: no activity > 14 days, missing next-step date, stale stage (in-stage > stage avg duration), missing decision-maker. For each, suggest the salesperson's next action."

2. **Contact enrichment — Clay or Apollo + Claude.** Weekly batch: any new contact missing email/phone/title gets enriched.

3. **Sequence drafting — Claude.ai.** Per pipeline stage:
   > "Write a 5-step nurture sequence for prospects stuck in '{{STAGE}}'. Each touch: channel (email/LinkedIn/call), message body, cadence (days from last touch)."
   Worker loads into HubSpot/Pipedrive sequences.

4. **Workflow automation — HubSpot Workflows or n8n.** Build:
   - Auto-create deal from form submission
   - Auto-assign by territory/owner round-robin
   - Stage transition triggers (e.g. "Proposal Sent" → send proposal template)
   - Closed-won → trigger onboarding workflow
   - Lost-reason captured before deal close

5. **Reporting dashboards — native CRM or Looker.** Pipeline by stage, velocity, win rate by source, salesperson activity.

6. **Sales-team training nudges — Claude.ai weekly.** Per rep, identify their lowest-conversion stage, draft a 5-min coaching note.

7. **Monthly health report — Claude.ai.** Pipeline value, won/lost, conversion rates, leading indicators (activity volume), risks (deals concentrated in 1-2 reps, etc.).

## Tools used
- HubSpot / Pipedrive / Zoho / Salesforce — CRM
- Apollo / Clay — enrichment
- Claude.ai Project — analysis, sequences, training, reports
- n8n — cross-tool automation
- Looker Studio — dashboards

## Time required
- Weekly audit: 2 hours × 4 = 8 hours
- Enrichment: 2 hours/month
- Sequence + workflow tweaks: 3-4 hours/month
- Reporting: 2 hours/month
- **Total: ~16-18 hours/month**

## What to send the client
- Weekly pipeline memo (Loom + 1-page Doc)
- Monthly performance report
- Workflow + sequence changelog

## Quality check - CTO & COO review
- No deals "stuck" without intervention
- Activity logged on 100% of pipeline contacts
- Workflows tested before deploying to prod
- No unauthorized field changes (track via audit log)
- Reports reflect reality (sample-verify against raw data)

## Tier availability
Add-on.

Pricing: Contact for pricing — quoted case-by-case based on scope. The Nova website lists this service as "Contact for pricing" rather than a published number. Standard quote turnaround: 24h after a scoping call.
