# Workflow Automation Management

## What the client gets
Ongoing management of deployed n8n / Make / Zapier workflows: monitors runs, fixes breaks, expands logic as business changes, and reports on time saved. Assumes the build exists (see `build-workflow-automation.md`).

## What Worker does — step by step

1. **Daily health check — 10 min.** Open n8n/Make dashboard. Filter to last 24h, "failed" status. Investigate every failure. Common causes: API rate limit, schema change, expired token. Fix immediately.

2. **Weekly review — Claude Code (with workflow JSON exports).** Pipe each workflow definition into Claude:
   > "Review this n8n workflow. Identify: (a) brittle steps (no error handling, no retry), (b) redundant nodes, (c) opportunities to simplify, (d) missing logging. Suggest specific node additions or refactors."

3. **Change requests — Claude Code in the n8n self-host or via API.** When client requests new logic (e.g. "also add the lead to our CRM"), Claude drafts the node config in a sandbox workflow. Prompt:
   > "I need to add this logic to {{CLIENT_NAME}}'s n8n workflow `{{WORKFLOW_NAME}}` (JSON attached): {{CHANGE_REQUEST}}. Output: (a) the exact JSON for the new nodes, (b) where they slot into the existing flow (parent node name + position), (c) any new credentials or env vars required, (d) a test case to verify it works, (e) rollback plan if it breaks. Match the existing workflow's error-handling pattern."

4. **Credential rotation — quarterly.** OAuth tokens, API keys. Document in 1Password.

5. **Cost monitoring — monthly.** n8n self-host: server cost stable. Make/Zapier: op count + tier. Recommend upgrade or refactor if hitting ceiling.

6. **Time-saved report — Claude.ai.** Pull execution count × estimated manual time per execution. Prompt:
   > "Build a time-saved report for {{CLIENT_NAME}} for {{MONTH}}. Inputs: workflow execution counts (CSV attached), estimated manual time per workflow run (mapping doc attached), Dubai market hourly wage benchmark for the role replaced ({{ROLE}}). Output: total executions, hours saved (per workflow + total), AED labor cost equivalent, top 3 highest-value workflows, any workflows running but unused. Tone: confident, data-led, 1 page."

## Tools used
- n8n (self-hosted) / Make / Zapier — automation platform
- Claude.ai Project — review + change requests
- Claude Code — workflow JSON edits, custom node logic
- 1Password — credential vault

## Time required
- Daily health: 10 min × 22 = ~4 hours/month
- Weekly review: 1.5 hours × 4 = 6 hours/month
- Changes: 4-6 hours/month average
- Reporting: 1 hour/month
- **Total: ~15-17 hours/month**

## What to send the client
- Monthly health + time-saved report
- Change-log of what was deployed

## Quality check - CTO & COO review
- Zero workflows in failed state at end of week
- Logging present on every critical workflow
- No credentials in plaintext anywhere
- Backup/export of all workflow JSONs in version control
- Changes tested in sandbox before production

## Tier availability
Scale (1 build included). Standalone retainer AED 1,500/mo after build.
