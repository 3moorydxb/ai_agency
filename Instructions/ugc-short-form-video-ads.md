# UGC / Short-Form Video Ads (20 variants/mo)

## What the client gets
Twenty short-form video variants per month — Reels, TikToks, and Shorts — designed to either feel like authentic UGC (user-generated content) or run as paid ads. Includes hooks, scripts, captions, and edited final files ready to post or boost.

## What Worker does — step by step

1. **Brief intake — Claude.ai Project.** Upload product photos, brand bible, last month's top-performing organic videos, and the client's offer. Prompt:
   > "You are a short-form video strategist for {{CLIENT_NAME}}. Generate 20 distinct video concepts for {{MONTH}}. Each concept must include: hook (first 3 seconds, spoken or text), 30-second voiceover script, on-screen text per beat (timestamped), visual direction (B-roll / talking head / product shot / screen recording), suggested music genre, hashtags, and caption. Mix formats: 5x talking head, 5x product demo, 5x UGC-style testimonial, 5x trend-jack. Output as markdown table."

2. **Talent decision — per concept:**
   - **Pure AI / no face:** see `ai-product-photography.md` + Runway / Sora / Kling for motion. Generate voiceover with ElevenLabs from the Claude script. Edit in CapCut.
   - **UGC creator:** see `influencer-ugc-sourcing.md` to commission. Send the creator the brief from step 1 verbatim.
   - **Client-provided footage:** client uploads raw clips; worker edits.

3. **Editing — CapCut Pro (or Premiere if needed).** One template per pillar. Worker imports footage, drops in the on-screen text from the Claude script timestamp-by-timestamp, adds captions (auto-generate then proofread), music, transitions. Export 9:16 1080x1920, also 1:1 if running on Meta feed.

4. **Caption + hashtag pack — Claude.ai.** For each video:
   > "Write 3 caption variants for this video — A: hook-first, B: story format, C: pure CTA. Each under 150 chars for TikTok, plus 15 hashtags. Match {{CLIENT_NAME}} voice from BRAND_BIBLE."

5. **Delivery folder — Google Drive.** Folder per month: `/{{CLIENT_NAME}}/UGC/{{YYYY-MM}}/`. Inside: numbered MP4s, a `captions.md` with all 3 caption variants per video, and a `metadata.csv` with concept, format, suggested post time.

6. **Post-mortem — Claude.ai, end of month.** Drop performance data in:
   > "Rank these 20 videos by paid CTR (or organic reach if not boosted). For the top 5, identify what worked (hook type, format, music). For the bottom 5, what failed. Recommend 5 concept patterns to double down on next month."

## Tools used
- Claude.ai Project — concept generation, scripts, captions, post-mortem
- ElevenLabs — AI voiceover (for faceless variants)
- Runway / Sora / Kling — AI video gen (faceless variants)
- CapCut Pro — editing
- Google Drive — delivery
- Influencer/UGC sourcing pipeline (if using real creators)

## Time required
- Concepting: 1.5 hours
- Editing: 30-45 min per video × 20 = 10-15 hours
- Captions/delivery: 2 hours
- **Total: ~15-20 hours/month per client**

## What to send the client
Google Drive folder link with all 20 videos, captions file, and post-time recommendations. Plus a 1-page Claude-generated strategy memo at start of month.

## Quality check - CTO & COO review
- First 3 seconds of every video must hook — no slow intros
- Captions burned in (90%+ of viewers watch muted)
- Audio levels normalized — no clipping
- Brand colors and logo placement consistent
- Music is royalty-free or from TikTok's commercial library
- Aspect ratio correct per platform

## Tier availability
Standalone add-on AED 2,500/mo. Included as part of monthly video allowance in Foundation (4), Growth (10), Scale (20+).
