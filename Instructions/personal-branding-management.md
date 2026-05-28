# Personal Branding Management

## What the client gets
Full-service personal brand operation for a founder, executive, or public figure. Nova grows their LinkedIn / X / IG / TikTok, writes their posts in their voice, ghostwrites long-form (newsletter, articles, video scripts), and books PR opportunities. Output: a credible, growing personal brand without the client writing anything.

## What Worker does — step by step

1. **Voice extraction (one-time) — Claude.ai Project.** Get 10+ samples of the client speaking or writing: voice memos, old posts, interview transcripts, emails. Upload all. Prompt:
   > "Build a voice profile for {{CLIENT_NAME}}. Cover: typical sentence length, vocabulary patterns (formal vs. casual, favorite words and phrases, words they never use), rhetorical patterns (analogies, lists, questions), opinions they've stated publicly, topics they care about, and 5 'never write this' rules. Output as `VOICE.md`."

2. **Pillar strategy — Claude.ai.** Prompt:
   > "Given {{CLIENT_NAME}}'s expertise in {{FIELDS}} and goal of {{POSITIONING_GOAL}}, recommend 5 content pillars. For each pillar: 3 angles, why it builds their authority, and example post hooks. Output markdown."

3. **Weekly content batch — Claude.ai Project.** Every Monday:
   > "Plan {{CLIENT_NAME}}'s posts for this week: 5 LinkedIn, 3 X threads, 3 IG captions, 1 long-form newsletter. Use VOICE.md religiously. Source angles from their recent activity ({{WHAT_THEY_DID_THIS_WEEK}}), industry news ({{LINKS}}), and pillar rotation. For each piece: full text, hook variant, suggested visual, CTA. Output as a calendar."

4. **Visuals — headshots and personal photos.** Maintain a shared Drive with brand photos. For LinkedIn/X carousels, use Canva with their personal template. For B-roll on IG/TikTok, see `larp-content-automation.md` or use AI-gen B-roll from `ai-image-generation.md`.

5. **Scheduling — Metricool or Buffer.** Schedule LinkedIn + X via the tool. IG/TikTok manual post (auto-publish often degrades reach).

6. **Engagement — daily, Claude.ai.** Twice a day, paste DMs/comments/replies in Claude:
   > "Reply to each in {{CLIENT_NAME}}'s voice per VOICE.md. Be a real participant — agree, disagree, add insight. Never sound generic. Flag any media requests, speaking inquiries, or partnership pitches with `[INBOX]`."

7. **PR / opportunity hunting — Claude.ai with web search.** Weekly:
   > "Find 5 podcast invitation targets, 3 speaking events, and 3 press opportunities for {{CLIENT_NAME}} based on their pillars. For each: contact name, why this fits, draft pitch email."
   Worker sends the pitches from the client's mailbox.

## Tools used
- Claude.ai Project — voice profile, planning, drafting, engagement, PR hunt
- Metricool / Buffer — scheduling
- Canva — personal-brand templates
- Claude.ai web search — opportunity sourcing

## Time required
- Voice extraction: 3 hours one-time
- Weekly batch: 4 hours
- Daily engagement: 30 min/day = ~10 hours/month
- PR hunt + pitches: 2 hours/week = 8 hours/month
- **Total: ~35-40 hours/month**

## What to send the client
- Weekly Loom: "Here's what's posting this week, here's what you should be ready to respond to."
- Monthly: follower growth, top posts, inbound opportunities, PR wins.

## Quality check - CTO & COO review
- VOICE.md respected — read 3 random posts aloud
- No generic "thought leader" cliches
- Visual identity consistent
- Engagement replies feel like the client, not a VA
- Inbound flagged and handed to client within 6 hours

## Tier availability
Standalone add-on AED 2,500/mo.
