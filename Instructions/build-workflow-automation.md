# Build: Workflow Automation (n8n / Make / Zapier)

## What the client gets
A set of custom-built automations that eliminate manual work — connecting the client's tools (CRM, email, payment, social, calendar, etc.) so things happen automatically. Build price AED 6,000–40,000 depending on workflow count + complexity. Retainer AED 800–3,000/mo (see `workflow-automation-management.md`).

## What Worker does — step by step

1. **Discovery — Claude.ai + client interview.** List every manual repetitive task the client or their team does. Prompt to client: "What do you do every Monday? Every time a new lead comes in? Every time a customer pays?" Document in `automation-targets.md`.

2. **Prioritization — Claude.ai.** Rank by: hours saved/month × wage cost vs. build effort. Top 5-10 enter the build.

3. **Platform pick:**
   - **n8n (self-hosted, recommended for Nova)** — most flexible, no per-op cost
   - **Make.com** — visual, good for non-tech clients to inspect
   - **Zapier** — simplest but pricey at volume

4. **Architecture — Claude.ai.** Per workflow:
   > "Design an n8n workflow for: {{TRIGGER}} → {{STEPS}} → {{OUTCOME}}. Identify: trigger type (webhook/poll/schedule), each node type, error handling at each step, retry policy, logging, edge cases (what if API down, what if data missing). Output as a node-by-node spec."

5. **Build — Claude Code with the n8n API or visual builder.** Worker:
   - Builds in a staging instance
   - Imports credentials via 1Password
   - Adds error notifications (Slack/email on fail)
   - Adds idempotency (don't double-process same record)

6. **Testing — happy path + 3 edge cases per workflow.** Document each test in `tests/`.

7. **Deploy — production n8n instance.** Worker confirms credentials migrated, schedules enabled, monitoring connected.

8. **Documentation — Claude.ai.** Per workflow:
   > "Write a workflow runbook for {{NAME}}. Cover: purpose, trigger, steps, expected execution time, common failure modes + fixes, escalation contact. Output as markdown."

9. **Handoff + train.**

## Tools used
- n8n (recommended) / Make / Zapier — platform
- Claude Code — workflow build via API, credential management, tests
- Claude.ai Project — design + runbooks
- 1Password — credentials
- Slack — error notifications
- GitHub — version control for n8n workflow JSON exports

## Time required
- Discovery: 4-8 hours
- Per workflow: 4-15 hours depending on complexity
- 5-10 workflow build: 40-100 hours total
- Testing + docs: 10-20 hours
- **Total: 50-120 hours**

## What to send the client
- Automation target list for prioritization
- Per-workflow runbooks
- Loom walkthroughs (one per workflow or one omnibus)
- Login to n8n self-host (if client wants access)
- Hand-off + 30-day check-in

## Quality check - CTO & COO review
- Every workflow has error handling
- Idempotency confirmed (no duplicates on retry)
- Credentials in vault, not plaintext
- Workflows exported to git repo
- Monitoring alerts work (test by causing a fail)
- Documentation matches reality (re-read after 2 weeks — still accurate?)

## Tier availability
Scale (1 custom workflow build included). One-time build standalone (AED 6,000–40,000).
