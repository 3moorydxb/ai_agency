# WhatsApp Automation Management

## What the client gets
Ongoing management of a deployed WhatsApp Business automation: keeps flows current, updates knowledge base, expands intents, monitors deliverability, and reports on volume + conversion. Assumes the build exists (see `build-whatsapp-automation.md`).

## What Worker does — step by step

1. **Health check — daily, 10 min.** Confirm: WhatsApp Business API connection active, message templates approved by Meta, no flow errors, response times under 30 sec. Check via Twilio / 360dialog / WATI console.

2. **Conversation review — Claude.ai, daily.** Pull yesterday's transcripts. Prompt:
   > "Review these WhatsApp conversations. Flag: (a) any hallucinations or wrong info, (b) any users who escalated to human but weren't routed, (c) any new question categories the bot didn't handle well, (d) any sentiment red flags. For each, recommend fix: knowledge base entry, intent expansion, or escalation rule update."

3. **Knowledge base updates — weekly.** Add new FAQs as the business launches products/changes hours/runs promos. See `rag-knowledge-base-management.md` if the bot uses RAG.

4. **Template messages — keep approved.** Meta requires pre-approval for outbound templates. Worker drafts new templates in Claude:
   > "Write a WhatsApp utility/marketing template for {{USE_CASE}}. Under 1024 chars. Body in {{LANGUAGE}}. Variables {{1}}, {{2}}. Quick reply buttons. Submit-ready format for Meta Business Manager."

5. **Broadcast campaigns — when run.** See `whatsapp-broadcast-campaigns.md`.

6. **Monthly performance + cost report — Claude.ai.** Conversations handled, automation rate (% no-human-touch), CSAT proxy (response sentiment), Meta WhatsApp cost (conversation-based pricing), conversions attributed.

## Tools used
- Twilio / 360dialog / WATI / Wassenger — WhatsApp Business API provider
- Claude.ai Project — review + KB + templates + reports
- Meta Business Manager — template submission
- Claude Code — code changes if custom-built

## Time required
- Daily health + review: 30 min × 22 = ~11 hours/month
- KB + templates: 4 hours/month
- Reporting: 2 hours/month
- **Total: ~17 hours/month**

## What to send the client
- Monthly performance Doc
- Flagged conversations summary
- Cost breakdown (Nova fee + Meta conversation cost)

## Quality check - CTO & COO review
- All Meta templates current and approved
- Hallucination rate < 1% — pull sample weekly
- Escalation routing works (test by triggering escalation phrase)
- 24-hour response window respected (Meta policy)
- Opt-out honored within 1 hour

## Tier availability
Growth, Scale (bundled with WhatsApp Business AI automation). Standalone retainer AED 1,500/mo after build.
