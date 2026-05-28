# Community Management

## What the client gets
Active management of the client's owned community — Discord server, Telegram group, WhatsApp community, Skool, Circle, or Facebook Group. Daily moderation, engagement seeding, event ops, onboarding new members, and member-of-the-month spotlights.

## What Worker does — step by step

1. **Community ops manual (one-time) — Claude.ai.** Build a per-client `COMMUNITY_OPS.md` covering: server/group structure, channels, rules, moderation thresholds, voice/tone, escalation tree, weekly cadence (welcome Mondays, AMA Wednesdays, recap Fridays — adjust to client). Prompt:
   > "Design a 30-day community engagement plan for {{CLIENT_NAME}}'s {{PLATFORM}} community ({{MEMBER_COUNT}} members, niche: {{NICHE}}). Cover daily engagement prompts, weekly rituals, monthly events, member recognition program, content schedule. Output as markdown calendar."

2. **Daily engagement prompts — Claude.ai.** Each morning:
   > "Generate 3 conversation starters for {{CLIENT_NAME}}'s community today. Topics tied to {{TODAY_EVENT_OR_THEME}}. Each: question, why it sparks discussion, expected length of replies. One should be a poll. Tone per BRAND_BIBLE."
   Worker posts in the main chat.

3. **Onboarding new members — automated where possible.** Set up auto-DM on join (Discord bot, Skool's built-in, WhatsApp Business). Use Claude to write the welcome flow: 3 messages over 3 days walking them through best channels to engage. Worker monitors who hasn't engaged in week 1 and sends a personal nudge.

4. **Moderation — daily, manual.** Remove spam, warn rule-breakers, escalate disputes. Document in a moderation log.

5. **Events — weekly AMA / monthly workshop.** Worker preps: announcement copy (Claude), reminder pings, event itinerary, post-event recap and recording upload.

6. **Member spotlights — weekly Friday.** Claude:
   > "Generate a member spotlight post for {{MEMBER_NAME}}. They {{ACHIEVEMENT}}. Format: 1 photo, 3-paragraph story, tag, call out 2 things others can learn from them. Voice: warm, peer-to-peer."

7. **Weekly recap email/post — Claude.ai.** Summary of best discussions, top contributors, upcoming events.

8. **Monthly report — Claude.ai.** Active member rate, new joins, churn, top contributors, top threads, sentiment trend.

## Tools used
- Discord / Telegram / WhatsApp / Skool / Circle (per client)
- Claude.ai Project — prompts, DMs, recaps, reports
- Native bots (MEE6, Carl, Skool auto) — automation
- Notion or Sheets — moderation log

## Time required
- Setup: 4 hours one-time
- Daily ops: 45 min/day = ~20 hours/month
- Events: 4 hours/month
- Reporting: 2 hours/month
- **Total: ~25-30 hours/month**

## What to send the client
- Weekly Loom recap (3 min: what shipped, what's trending, what needs your attention)
- Monthly report Doc

## Quality check - CTO & COO review
- Engagement prompts get responses — track reply count, kill formats that flop
- Spam removed within 1 hour during work hours
- New members onboarded — track activation rate
- Tone consistent with brand
- Events have actual attendance, not vanity scheduling

## Tier availability
Add-on.

Pricing: Contact for pricing — quoted case-by-case based on scope. The Nova website lists this service as "Contact for pricing" rather than a published number. Standard quote turnaround: 24h after a scoping call.
