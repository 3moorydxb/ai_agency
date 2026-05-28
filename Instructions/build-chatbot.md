# Build: Chatbot (Web / WhatsApp / Messenger)

## What the client gets
A custom-built chatbot deployed on the client's website (and/or WhatsApp + Messenger) that answers FAQs, qualifies leads, books appointments, and hands off to humans when needed. Built on Claude API (via Claude Code) with a RAG knowledge base. Client owns the build. Optional monthly maintenance after delivery (AED 1,000–2,500/mo).

**Build price: AED 7,500–35,000** depending on integrations + channels + RAG complexity.

## What Worker does — step by step

1. **Discovery — Claude.ai Project, 1 call + 1 doc.** Capture: business overview, top 30 customer questions, qualification criteria, hand-off rules, integrations needed (CRM, calendar, payments), brand voice, channels (web only? + WhatsApp? + Messenger?). Output: `chatbot-spec-{{CLIENT}}.md`.

2. **Knowledge base build — Claude Code.** Ingest sources (website, FAQ docs, product catalog, policies) into vector store. See `build-rag-assistant.md` for the RAG pipeline (this build often includes RAG inside chatbot scope).

3. **System prompt + persona — Claude.ai.** Prompt:
   > "Write a system prompt for {{CLIENT_NAME}}'s chatbot. Cover: persona, scope (what it can/can't answer), tone, hand-off triggers, format rules (responses under 80 words for chat), tool-call rules (when to query RAG, when to book a meeting, when to escalate), refusal patterns. Output ready for Claude API."

4. **Tool implementations — Claude Code.** Build tools the bot can call:
   - `search_knowledge_base(query)` — RAG
   - `book_meeting(name, email, time)` — Calendly / Cal.com API
   - `create_lead(name, email, intent)` — CRM API
   - `escalate_to_human(reason, transcript)` — Slack / WhatsApp alert

5. **Web widget — choose stack:**
   - **Fastest:** Chatbase / Voiceflow / Botpress (templated, fast deploy, less customizable)
   - **Customest:** Custom React widget + Claude API on Cloudflare Workers / Vercel. Persistence in Supabase. Recommended for Foundation+ clients who want full control.

6. **WhatsApp deploy — via Twilio / 360dialog / WATI.** Connect the same backend to WhatsApp Business API. Worker registers templates with Meta for outbound.

7. **Messenger deploy — via Meta App.** Same backend.

8. **Testing — 50-question battery.** Worker writes 50 test questions covering: easy FAQs, edge cases, ambiguous, off-topic, complaint, sales-intent, escalation triggers. Run all, score. Iterate prompt + KB until > 95% pass.

9. **Launch — staged.** Soft-launch with internal team. After 48h with no critical issues, open to public.

10. **Handoff doc — Claude.ai.** Generate:
    > "Write a chatbot handoff document for {{CLIENT_NAME}} covering: architecture overview, where the system prompt lives, how to update the KB, escalation routing, cost monitoring, common issues + fixes, support contact."

## Tools used
- Claude Code — entire build
- Claude API (Anthropic SDK) — chatbot brain
- Vector DB (Supabase pgvector recommended for cost)
- Cloudflare Workers / Vercel — hosting backend
- Twilio / 360dialog / WATI — WhatsApp BSP
- Meta Developer console — Messenger
- Supabase or Postgres — conversation persistence
- Sentry — error monitoring

## Time required
- Discovery: 4-6 hours
- Build: 30-60 hours depending on complexity + channels
- Testing: 8-12 hours
- Launch + first-week monitoring: 10 hours
- **Total: 50-90 hours for a typical Foundation-tier build**

## What to send the client
- Spec doc for approval before build
- Staging URL for client testing
- Loom walkthrough on launch
- Handoff doc + admin access
- 30-day post-launch check-in
- Maintenance proposal (separate retainer)

## Quality check - CTO & COO review
- Hallucination rate < 1% on test battery
- All hand-off triggers fire correctly
- Tools (booking, lead capture) write to the right systems
- Cost per conversation logged + within budget
- No PII leaked in logs without consent
- Mobile responsive web widget
- WhatsApp templates approved by Meta

## Tier availability
Foundation (basic web chatbot — FAQ + lead capture). Scale (advanced). One-time build standalone (AED 7,500–35,000).
