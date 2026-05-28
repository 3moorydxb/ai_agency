# LARP Content Automation

## What the client gets
"LARP content" = high-frequency, faceless, automation-built content streams. Examples: theme pages, niche aesthetic accounts, AI-character accounts, repost/curation pages, generated lifestyle pages. Nova builds the automation pipeline AND runs it daily, producing 1-3 posts/day on autopilot.

## What Worker does — step by step

1. **Persona + theme design — Claude.ai.** Prompt:
   > "Design a faceless content persona for {{NICHE}}. Cover: handle/name, bio under 150 chars, aesthetic moodboard (colors, mood, era, references), 5 content pillars, post format (image/video/carousel), voice/captions style, hashtag clusters, target follower count and how to monetize at scale. Output as `PERSONA.md`."

2. **Asset library build (one-time, heavy lift) — Midjourney / Sora / Runway + Claude Code.** Generate 100-300 on-brand visual assets following the persona. Save to a tagged folder. This is the LARP fuel — pull from this library forever.
   > Claude.ai prompt for asset generation: "Write 50 Midjourney prompts that produce assets matching this PERSONA. Vary subject, time of day, framing, mood. Cohesive set. Output as a list ready to batch."

3. **Caption + hook engine — Claude.ai Project.** Per content batch:
   > "Generate 30 captions in {{PERSONA}} voice. Each: hook line, body, hashtags. Mix: aspirational, philosophical, story, statement, quote. Output as markdown table."

4. **Posting automation — Metricool / Buffer / Later.** Bulk-upload 30 days of content in one sitting. Schedule across IG, TikTok, X, Pinterest depending on persona.

5. **Daily engagement (low-touch) — Claude.ai.** Reply to comments and DMs in persona voice. 15 min/day.

6. **Monetization layer — affiliate links, drop merch, sponsorships.** Once page hits scale (>50K followers), Claude generates outreach to potential sponsors and drafts merch concepts.

7. **Monthly report — Claude.ai.** Growth, reach, engagement, monetization revenue.

## Tools used
- Claude.ai Project — persona, captions, replies
- Midjourney / Sora / Runway — asset generation
- Metricool / Buffer — scheduling
- Beacons / Linktree — link aggregator
- Claude Code — bulk file ops, batch uploading

## Time required
- Persona + asset library setup: 12-20 hours one-time
- Monthly ops: 15-20 hours (refill library + caption batches + engagement)
- **Total ongoing: ~20 hours/month per LARP page** (Nova can run 5-10 pages with the same time as 1 hands-on personal brand)

## What to send the client
- Persona Doc
- Asset library access (Drive)
- Monthly performance + monetization report

## Quality check - CTO & COO review
- Aesthetic is cohesive — no off-brand visuals slip through
- Captions in persona voice
- No platform terms violations (AI labeling on IG/TikTok when required)
- Disclose AI-generated where mandated
- Engagement organic-looking — no comment bots

## Tier availability
Add-on / standalone. [NEEDS CLARIFICATION: not in PDF price list. Website has `larp-content.html`. Suggest AED 1,500-3,000/mo per page given low marginal cost. Confirm with Omar.]
