# Build: Voice Agent Setup

## What the client gets
A deployed voice agent that handles inbound and/or outbound phone calls in the client's voice. Use cases: appointment booking, lead qualification, customer support tier-1, after-hours reception. Build price AED 8,000–30,000. Retainer AED 1,200/mo + AED 0.33/min (see `voice-agent-management.md`).

## What Worker does — step by step

1. **Use case definition — Claude.ai.** Pin down: inbound only / outbound only / both, languages (Arabic, English, both), call volume estimate, conversion goal (booking / lead / info-only), integration with CRM and calendar.

2. **Platform selection:**
   - **Vapi** — best devex, OpenAI/Anthropic backend, lowest latency
   - **Retell** — solid, similar
   - **Bland.ai** — turnkey, less customization
   - **ElevenLabs Conversational AI** — best voice quality, newer

3. **Phone numbers — Twilio.** Provision number in target country (UAE +971, KSA +966, US, UK etc.). Configure SIP routing to chosen voice platform.

4. **Voice selection — ElevenLabs.** Pick voice carefully. For Arabic clients, test Arabic voices specifically. Optional: clone the client's own voice (requires their consent + 1 min of clean audio).

5. **System prompt — Claude.ai.** Prompt:
   > "Write a voice agent system prompt for {{CLIENT_NAME}} doing {{USE_CASE}} in {{LANGUAGE}}. Constraints: voice is conversational not robotic, max 2 sentences per turn before pausing, never hallucinate prices/policies, use the `query_kb` tool for facts, ask one question at a time, recognize hang-up signals (silence > 3s = wrap up). Hand-off triggers: 'human', 'manager', 'I'll wait for a callback'. Tone: {{TONE}}. Output ready for Vapi/Retell."

6. **Tools — Claude Code.** Build:
   - `query_kb(question)` — RAG lookup
   - `book_appointment(name, phone, time)` — calendar API
   - `create_lead(name, phone, summary)` — CRM API
   - `transfer_to_human(reason)` — SIP transfer to human queue

7. **Knowledge base — see `build-rag-assistant.md`** if RAG-backed.

8. **Testing — 30-call battery.** Worker calls the number with scripted scenarios + curveballs (mumbled words, language switching, hostile caller, silence). Score against rubric: did it answer, did it not hallucinate, did it hand off correctly, did it sound natural. Iterate until > 90% pass.

9. **Latency tuning — target < 1.5s response.** This is the make-or-break UX. Profile and reduce.

10. **Compliance — recording disclosure (if recorded), AI disclosure if jurisdiction requires, opt-out from calls.** Have client's legal review.

11. **Launch + handoff doc.**

## Tools used
- Vapi / Retell / Bland.ai / ElevenLabs CAI — voice platform
- Twilio — phone numbers + SIP
- ElevenLabs — voice generation (often included in Vapi)
- Claude API — agent brain
- Claude Code — tool implementations
- Supabase or Postgres — call logs

## Time required
- Use case + design: 4-6 hours
- Voice selection + tuning: 2-3 hours
- Build + tool wiring: 25-40 hours
- Testing + iteration: 10-15 hours
- Compliance review: 2-4 hours
- **Total: 50-70 hours**

## What to send the client
- Test number for client to call during build
- Sample call recordings (anonymized)
- Spec + system prompt for approval
- Loom walkthrough at launch
- Handoff doc

## Quality check - CTO & COO review
- Response latency < 1.5s
- Natural voice — pass the "would you trust this is a person" test on first 30 sec
- No hallucinations on test battery
- Hand-off works (test by triggering)
- Recording / disclosure compliant
- Logs accessible to client

## Tier availability
Scale (voice agent included). One-time build standalone (AED 8,000–30,000).
