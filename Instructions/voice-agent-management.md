# Voice Agent Management

## What the client gets
Ongoing management of a deployed voice agent (inbound/outbound phone calls): updates conversation paths, refines voice/tone, monitors call logs for misroutes and hallucinations, and reports on conversions. Pricing: AED 1,200/mo base + AED 0.33 per minute of call time.

## What Worker does — step by step

1. **Daily call review — Claude.ai with Vapi/Retell/Bland transcript export.** Sample 10% of calls per day. Prompt:
   > "Review these voice agent transcripts. Flag: (a) hallucinated information, (b) calls that should have transferred to a human, (c) unnatural phrasing or robotic moments, (d) calls where the caller hung up early (find pattern). For each, recommend system prompt or flow fix."

2. **System prompt iteration — Claude.ai.** Edit the agent's system prompt based on findings. Test against 5 simulated calls before deploying. Keep version history in `voice-agent/system-prompt-v{{N}}.md`.

3. **Voice + tuning — ElevenLabs.** Pick voice carefully (clone if budget allows). Adjust stability/clarity/style sliders. Test on sample scripts in target language and dialect.

4. **Knowledge updates — RAG-backed if applicable.** See `rag-knowledge-base-management.md`. Add new info as client launches.

5. **Escalation routing — weekly verification.** Confirm "I need a human" triggers route correctly. Confirm after-hours fallback works.

6. **Compliance — for regulated industries (healthcare, finance):** ensure disclosure at call start ("This is an AI assistant"), recording consent if required by jurisdiction, no PII stored beyond retention policy.

7. **Monthly report — Claude.ai.** Total calls, total minutes, automation rate, top 5 call reasons, conversion rate (if booking/sales), cost breakdown (Nova + per-minute + provider).

## Tools used
- Vapi / Retell / Bland.ai — voice agent platform
- ElevenLabs — voice generation
- Twilio — phone numbers
- Claude.ai Project — transcript review + prompt iteration
- Claude Code — flow logic, function calls

## Time required
- Daily review: 30 min × 22 = ~11 hours/month
- System prompt iteration: 3-4 hours/month
- Knowledge updates: 2 hours/month
- Reporting: 1.5 hours/month
- **Total: ~17-19 hours/month**

## What to send the client
- Monthly report with call samples (anonymized)
- Cost reconciliation (base + per-minute)
- Iteration changelog

## Quality check - CTO & COO review
- Hallucination rate < 1% — sample weekly
- Voice sounds natural, not synthetic-tinny
- Latency < 1.5s response time
- All escalation triggers fire correctly
- PII handling compliant

## Tier availability
Scale (bundled). Standalone retainer AED 1,200/mo + AED 0.33/min after build.
