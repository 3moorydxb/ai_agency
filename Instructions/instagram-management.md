# Instagram Management (Instagram-Only)

## What the client gets
Focused Instagram-only management: feed posts, Reels, Stories, DMs, and growth strategy. For clients who only want to operate on IG and don't want to pay for multi-platform overhead.

## What Worker does — step by step

1. **Audit + niche positioning — Claude.ai.** Pull current profile, top 30 posts, follower count. Prompt:
   > "Audit this Instagram profile for {{CLIENT_NAME}}. Identify: positioning gap, content pillars currently working vs flopping, profile optimization (bio under 150 chars, link strategy, story highlight order). Recommend 5 pillars and a 30-day reset plan."

2. **Content mix (per month):**
   - 12 feed posts (single image or carousel)
   - 8 Reels
   - Daily Stories (1-3/day)
   - 4 collab/UGC reposts
   Adjust ratios by tier — see `social-media-management.md` for counts.

3. **Calendar — Claude.ai Project, monthly.** Use same prompt structure as `social-media-management.md` with Instagram-specific tweaks (carousel-first thinking, Reels hook in 1 sec, Stories sticker engagement).

4. **Reels production — see `ugc-short-form-video-ads.md`.** IG Reels specifically: 9:16, hook < 1 sec, on-screen text big enough for the smallest phone, trending audio when relevant.

5. **Stories — daily, Claude.ai.** Each morning:
   > "Plan today's Stories arc for {{CLIENT_NAME}} (5-7 frames). Mix: BTS, product, poll/question sticker, customer feature, CTA. Each frame: visual brief, sticker copy, time of day to post."
   Worker captures via phone camera and adds stickers in IG app.

6. **DMs + comments — twice daily, Claude.ai.** Same as `social-media-management.md`.

7. **Growth tactics — weekly:**
   - Collab posts (with complementary brands)
   - Carousel hooks tested A/B (post one to grid, second variant to broadcast channel)
   - Hashtag refresh — Claude generates 30 hashtags per pillar, rotate sets. Prompt:
     > "Generate 30 Instagram hashtags for {{CLIENT_NAME}}'s pillar `{{PILLAR}}` in {{NICHE}}, {{CITY}}. Mix: 10 small (under 100k posts — discoverable), 15 medium (100k–1M — competitive but reachable), 5 large (1M+ — branding only). No banned or shadowbanned tags. Output 3 rotation sets of 30 so we never reuse the exact same set twice in a row. Format: one set per code block, lowercase, space-separated."
   - Story-to-feed funnel (tease in story, drop in feed)

8. **Monthly report — Claude.ai.** Reach, profile visits, follower growth, top Reel by reach, top post by saves (key signal), DM volume, sales attribution if shoppable.

## Tools used
- Claude.ai Project — calendar, captions, DMs, reports
- Instagram app — Stories (post natively, never via scheduler if possible)
- Metricool / Later — feed + Reels scheduling
- Canva — carousels
- CapCut — Reels

## Time required
- Audit: 2 hours one-time
- Monthly: ~16-20 hours

## What to send the client
- Calendar Google Doc on day 1 of month
- Scheduled posts visible in account
- Monthly report PDF

## Quality check - CTO & COO review
- Bio hooks and link works
- Story Highlights organized, current cover art
- Saves rate trending up (most reliable IG metric)
- No two posts back-to-back on same pillar
- Reels native (no TikTok watermarks)

## Tier availability
Standalone add-on under Social Media Management — 1 Platform. See `platform-management.md`. AED 1,200–1,800/mo (varies by platform — see the 1-Platform overview).
