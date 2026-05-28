# Build: CRM Setup (HubSpot / Zoho)

## What the client gets
A fully configured CRM — pipelines, custom properties, automations, integrations with web forms / email / calendar / Shopify, dashboards, and team workflows. Build covers HubSpot, Pipedrive, Zoho, or Salesforce. After build, see `crm-management.md` for retainer.

Pricing: Contact for pricing — quoted case-by-case based on scope. The Nova website lists this service as "Contact for pricing" rather than a published number. Standard quote turnaround: 24h after a scoping call.

## What Worker does — step by step

1. **Sales process mapping — Claude.ai + client interviews.** Capture every stage from lead to closed-won (and post-sale if applicable). Per stage: definition, entry criteria, exit criteria, owner, expected duration, % win rate, next action template. Output: `sales-process.md`.

2. **CRM choice:**
   - **HubSpot** — recommended default. Free tier is generous. Best UI.
   - **Pipedrive** — simpler, great for SMB sales teams.
   - **Zoho** — cheap at scale, ugly UI, integrates well with other Zoho.
   - **Salesforce** — only for enterprise. Heavy build cost.

3. **Pipeline build — in chosen CRM.** Stages, probabilities, deal rotting rules, required fields per stage.

4. **Custom properties — Claude.ai.** Prompt:
   > "Based on this sales process, list every custom property to create on Contact, Company, and Deal objects. Per property: name, type (text/picklist/date/number/etc.), required y/n, used in which workflow, picklist values if applicable."
   Worker creates each in CRM.

5. **Forms + lead capture.** Embed forms on the website (`build-website.md`). Map fields to CRM properties. Set up source attribution (UTM capture).

6. **Email integration.** Connect team mailboxes. Set up email templates + sequences.

7. **Calendar integration.** Connect Google/Outlook. Set up meeting types (15-min discovery, 30-min demo, etc.).

8. **Automations — HubSpot Workflows or Pipedrive Automations:**
   - New lead → assign by territory/round-robin
   - Lead → contact → enrichment via Apollo/Clay
   - Deal stage transition → tasks created, emails sent, slack alerts
   - Closed-won → onboarding workflow triggered, invoice generated
   - Closed-lost → lost-reason captured, added to nurture sequence
   - Inactive deal > X days → reassign or close

9. **Integrations:**
   - Shopify (if ecom): order → contact + deal
   - Klaviyo: bidirectional sync of list membership
   - Stripe: payments → deal + invoice
   - Slack: deal-stage notifications to channel

10. **Dashboards.** Pipeline by stage, velocity, win rate by source, salesperson activity, forecasted revenue.

11. **User accounts + training.** Create users, set permissions, run a 60-min training session.

12. **Handoff doc.**

## Tools used
- HubSpot / Pipedrive / Zoho / Salesforce — CRM
- Apollo / Clay — enrichment
- n8n — cross-tool automation (where native is insufficient)
- Claude.ai Project — sales process design, properties, automation logic
- Claude Code — custom integrations if needed

## Time required
- Process mapping: 6-10 hours
- CRM build + properties: 8-15 hours
- Automations: 10-20 hours
- Integrations: 8-15 hours
- Dashboards + training: 6-10 hours
- **Total: 40-70 hours**

## What to send the client
- Sales process doc for sign-off
- Loom walkthrough at launch
- Team training session
- Handoff doc + admin credentials
- 30-day post-launch check-in
- Management proposal (`crm-management.md`)

## Quality check - CTO & COO review
- Test lead created end-to-end, reaches the right owner, with all enrichment populated
- All automations tested (sample-run each)
- No duplicate contact creation on existing email
- Permissions: salespeople can't delete deals, can't see admin reports
- Reports reflect raw data (sample-verify)
- Backup + export schedule established

## Tier availability
One-time build standalone.

Pricing: Contact for pricing — quoted case-by-case based on scope. The Nova website lists this service as "Contact for pricing" rather than a published number. Standard quote turnaround: 24h after a scoping call.
