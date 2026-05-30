# Social Media Management (1 / 2 / 3 / 4 / All Platforms)

## What the client gets
A fully managed social media presence on the platforms they buy. Nova writes captions, plans the content calendar 30 days ahead, sources or generates the visuals, schedules every post, and reports on performance monthly. Cadence and platform count depend on the tier or add-on purchased.

**Quantities (from PDF):**
- Launch: 1 platform, 10 posts/mo
- Spark: 2 platforms, 15 posts/mo
- Foundation: 3 platforms, 20 posts/mo
- Growth: 4 platforms, 30 posts/mo
- Scale: all platforms, unlimited posts (target 40+/mo)
- Standalone add-on: 2 platforms = AED 2,000/mo, 4 platforms = AED 3,500/mo

**Per-platform playbooks** — when a client picks specific platforms, read the matching deep-dive for platform-specific cadence, formats, and prompts (this file covers the shared engine):
- Instagram → `instagram-management.md`
- TikTok → `tiktok-management.md`
- YouTube Shorts → `youtube-shorts.md`
- X (Twitter) → `twitter-x-management.md`
- LinkedIn → `linkedin-growth.md`

## What Worker does — step by step

1. **Onboarding (once per client) — Claude Code with the client's website and any existing social handles.** Worker creates a folder at `~/clients/{{CLIENT_SLUG}}/` and drops in: brand voice notes, target audience, products/services list, competitor handles, banned topics. Then runs in Claude Code:
   > "Read every file in this folder. Build a `BRAND_BIBLE.md` covering: 1-paragraph brand voice, 5 pillar topics, target customer profile, 10 hashtag clusters per platform, posting time windows for {{CITY}}, and 10 example hook formats this brand should use. Output to `BRAND_BIBLE.md` in this folder."

2. **Monthly content calendar — Claude.ai Project (or Claude Code if you want files).** Create a Project per client. Upload `BRAND_BIBLE.md`, last month's analytics CSV, and any product launches/promotions for the month. Prompt:
   > "You are the social media planner for {{CLIENT_NAME}} ({{NICHE}}). Plan {{POST_COUNT}} posts for {{MONTH_YEAR}} across {{PLATFORMS}}. For each post output: date, time (Dubai), platform, pillar, hook, full caption with line breaks, 15 hashtags, visual brief (1-2 sentences describing the image or video), and CTA. Mix the 5 pillars evenly. No two consecutive posts on the same pillar. Output as a markdown table I can paste into Notion."

3. **Visuals — pick path per post:**
   - **Image post → Midjourney or ChatGPT image gen.** Paste the visual brief from step 2.
   - **Carousel → Canva.** Use the client's brand template. Generate copy in Claude first with: *"Turn this caption into a 7-slide carousel. Slide 1 = hook. Slides 2-6 = one point each. Slide 7 = CTA."*
   - **Short-form video → see `ugc-short-form-video-ads.md` or `long-form-video-editing.md`** for production; this service only handles scheduling.
   - **Product image → see `ai-product-photography.md`.**

4. **Scheduling — Metricool, Later, or Buffer.** Bulk-upload the calendar. Worker pastes each caption + hashtags + visual into the scheduler. Set times to match `BRAND_BIBLE.md`. For platforms the scheduler does not support natively (TikTok carousels, IG collabs), schedule a phone reminder and post manually.

5. **Comment + DM responses (Spark and up) — Claude.ai Project, twice daily.** Worker copies the day's unanswered comments/DMs into the project. Prompt:
   > "Reply to each of these in {{CLIENT_NAME}}'s voice per BRAND_BIBLE.md. Friendly, on-brand, no emojis unless the user uses them first. If a message is a sales lead, flag it `[LEAD]` and draft a hand-off message instead of replying. If a message is a complaint, flag it `[ESCALATE]` and draft a holding reply."
   Worker pastes replies back.

6. **Monthly performance report — Claude.ai or Claude Code.** Export analytics from each platform (or pull via Metricool's report export). Drop the CSVs into Claude with:
   > "Build a 1-page performance report for {{CLIENT_NAME}} for {{MONTH}}. Cover: reach, engagement rate, follower growth, top 3 posts (why they worked), bottom 3 posts (why they did not), and 3 concrete recommendations for next month. Tone: confident, data-led, no fluff. Output as markdown ready to paste into a Google Doc."

## Tools used
- Claude.ai Projects — calendar generation, comment/DM replies, monthly report
- Claude Code — brand bible build, bulk file ops
- Metricool / Later / Buffer — scheduling
- Midjourney / ChatGPT — image generation
- Canva — carousels and templated graphics
- Native platform apps — for posts the scheduler can't handle

## Time required
- Onboarding: 3-4 hours one-time
- Calendar build: 1.5 hours/client/month
- Visuals: 2-4 hours/client/month (varies by post count)
- Scheduling: 1 hour/client/month
- Daily DM/comment ops: 15 min/day = ~7 hours/client/month at Spark+
- Reporting: 45 min/client/month
- **Launch: ~5 hrs/mo. Spark: ~12 hrs/mo. Foundation: ~16 hrs/mo. Growth: ~22 hrs/mo. Scale: ~30+ hrs/mo.**

## What to send the client
- Google Doc link with the approved monthly calendar (1st of each month)
- Scheduled posts visible in their accounts (they can audit anytime)
- PDF performance report on the last working day of each month

## Quality check - CTO & COO review
- Every caption matches `BRAND_BIBLE.md` voice — no generic AI cadence
- No two consecutive posts on the same pillar
- All hashtags rotated — no copy-paste blocks across posts
- Visuals are on-brand (correct colors, logo placement, fonts)
- No banned topics, no competitor handles tagged
- Scheduled times match the brand's audience timezone, not Dubai by default

## Tier availability
Launch (1 platform) / Spark (2) / Foundation (3) / Growth (4) / Scale (all). Standalone add-on: 2 or 4 platforms.
