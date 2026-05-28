# Reputation Management

## What the client gets
Proactive monitoring and management of the client's online reputation: review responses across Google / Trustpilot / Tripadvisor / Yelp / sector-specific platforms, brand-mention monitoring, sentiment alerts, and review-generation campaigns to push average rating up.

## What Worker does — step by step

1. **Audit (one-time) — Claude.ai.** Pull current ratings across every relevant platform (Google, Trustpilot, Tripadvisor, Yelp, sector-specific). Export all reviews from the past 12 months as CSV. Drop into Claude.ai with this prompt:
   > "Audit {{CLIENT_NAME}}'s online reputation. Inputs: CSV of {{N}} reviews from {{PLATFORMS}} with rating, text, date, platform. Output: (1) per-platform average + review count + trend (improving/flat/declining), (2) top 10 recurring complaint themes (cluster by topic, include % of negative reviews mentioning each + 2 verbatim quotes per theme), (3) top 10 recurring praise themes (same format), (4) response-rate audit (% replied, avg response time, % unreplied negative), (5) risk areas — anything mentioning legal threats, health/safety, fraud, or staff misconduct. Output as `reputation-snapshot-{{CLIENT}}.md` with a 1-page exec summary at the top."

2. **Mention monitoring — Brand24 / Mention / Google Alerts.** Set up alerts for: brand name, founder names, product names, common misspellings. Daily digest.

3. **Daily review queue — Claude.ai.** Every morning:
   > "Reply to each of these reviews for {{CLIENT_NAME}}. By rating:
   > - 5-star: thank by name, reference specific praise, invite return, subtle keyword '{{LOCAL_KEYWORD}}'
   > - 4-star: thank, acknowledge what could have been better, invite back
   > - 3-star: empathize, ask what we could improve, offer offline contact
   > - 1-2 star: never argue, never defend; empathize, take responsibility for the experience, offer offline channel, never quote pricing or legal in public
   > Voice: BRAND_BIBLE."

4. **Escalation — for serious complaints.** Any review mentioning: legal threat, food poisoning, injury, fraud — escalate to client and management within 1 hour. Do NOT respond without legal review.

5. **Review generation — see `google-business-profile.md` for GBP and bake into email/SMS post-purchase flows.** Run quarterly review-push campaigns to recent happy customers.

6. **Crisis protocol — documented.** If a viral negative thread hits (Reddit, X, news), worker pauses scheduled content, alerts management, drafts a holding statement (Claude with crisis comms framing), and coordinates response across all channels.

7. **Monthly report — Claude.ai.** Average rating trend, new reviews count, response rate, response SLA hit rate, top complaint themes, sentiment trend, brand mentions volume.

## Tools used
- Brand24 / Mention / Google Alerts — monitoring
- Birdeye / Podium / Trustpilot dashboard / native platforms — review management
- Claude.ai Project — replies, audits, reports, crisis drafts
- Slack — internal alerts channel

## Time required
- Audit: 3-4 hours one-time
- Daily review + monitoring: 30 min × 22 = ~11 hours/month
- Generation campaigns: 2 hours/month
- Reporting: 2 hours/month
- **Total: ~15-18 hours/month**

## What to send the client
- Monthly reputation report
- Crisis alerts in real-time (Slack / WhatsApp)
- Quarterly trend analysis

## Quality check - CTO & COO review
- Every review responded within 24h
- No defensive language in negative-review replies
- Brand voice consistent across platforms
- Escalations triggered for legal/health/safety mentions
- Review-gen campaigns comply with platform TOS (no incentivized 5-stars)

## Tier availability
Add-on. [NEEDS CLARIFICATION: not in PDF price list. Website has `reputation-management.html`. Suggest AED 1,500-3,000/mo depending on review volume. Confirm with Omar.]
