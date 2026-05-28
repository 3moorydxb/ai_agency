# AI SDR / Sales Agent Deployment

## What the client gets
A deployed AI SDR — an autonomous agent that qualifies inbound leads, books meetings, follows up with cold prospects, and handles top-of-funnel conversations across email, LinkedIn, and chat. Runs 24/7, books meetings into the client's calendar.

## What Worker does — step by step

1. **Sales playbook ingestion — Claude.ai Project.** Get the client's: ICP doc, product/service details, common objections + answers, pricing, qualification criteria (BANT, MEDDIC, or custom), competitor positioning. Build `SDR_PLAYBOOK.md`.

2. **Choose the stack:** Tool: Smartlead. Sequences live in Smartlead; warm-up handled by Smartlead's built-in warm-up; reply detection routes to a dedicated inbox.
   - Default recommendation: Smartlead as the cold-email engine, Claude API as the reply-classification brain, Calendly for booking, HubSpot/Pipedrive as CRM. n8n optional for custom orchestration where Smartlead doesn't cover the step.

3. **Build the agent flows — Claude Code + n8n.** Core flows:
   - **Inbound web chat reply** → see `build-chatbot.md` for chatbot; SDR layer adds: qualification questions, calendar offer if qualified, hand-off to human if not.
   - **Email reply auto-handler** → ingest inbound email, classify (interested / question / objection / not-now), respond per playbook, escalate edge cases.
   - **LinkedIn DM auto-reply** → similar logic via LinkedIn API or Phantombuster.
   - **Follow-up cadence** → on no-reply, re-engage after 3, 7, 14 days with different angle.

4. **System prompt build — Claude.ai.** Prompt:
   > "Write a system prompt for an AI SDR for {{CLIENT_NAME}}. The agent: knows SDR_PLAYBOOK.md, qualifies via {{CRITERIA}}, books meetings if qualified, never invents pricing or features, hands off to {{HUMAN_NAME}} if confidence < 0.8 or if prospect requests human. Tone: {{TONE}}. Length: chat = under 80 words, email = under 120 words."

5. **Knowledge base — RAG.** Put product docs, pricing, FAQs into a vector store (see `build-rag-assistant.md`). SDR queries it for accurate info.

6. **Deploy + monitor — first 2 weeks.** Worker reads every conversation, flags hallucinations, refines system prompt and playbook. After 2 weeks, sample 10% / week.

7. **Monthly report — Claude.ai.** Conversations handled, qualification rate, meetings booked, hand-offs to human, mistakes flagged + fixed.

## Tools used
- Claude API — agent brain
- n8n or Make — orchestration
- Calendly / Cal.com — booking
- HubSpot / Pipedrive / Salesforce — CRM
- Vector DB (Pinecone / Supabase pgvector) — RAG knowledge
- Claude Code — agent build + iteration
- Slack — escalation channel

## Time required
- Build: 30-50 hours one-time (depends on integration count)
- Monitoring: 8-10 hours/month
- Iteration + tuning: 4-6 hours/month
- **Ongoing: ~12-16 hours/month per deployed agent**

## What to send the client
- Build completion Loom (full walk-through)
- Live dashboard with conversation logs
- Monthly performance Doc

## Quality check - CTO & COO review
- Agent never invents pricing, features, or commitments
- Hand-off triggers fire correctly
- Calendar bookings actually create CRM records
- Hallucination rate < 1% (sample audit weekly)
- Conversation logs accessible to client for trust

## Tier availability
Scale (implicit). Standalone retainer AED 2,500/mo (after build). Build pricing: see `build-custom-app.md` or workflow build.
