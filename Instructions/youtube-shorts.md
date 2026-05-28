# YouTube Management

## What the client gets
Full YouTube channel operation: weekly long-form uploads (edited), Shorts cadence (3-5/week), SEO-optimized titles/descriptions/tags, thumbnail design, community tab posts, comment management, and growth strategy aimed at watch time and subscriber growth.

## What Worker does — step by step

1. **Channel audit (one-time) — Claude.ai + YouTube Studio.** Review last 20 uploads. Identify: best-performing thumbnail/title patterns, retention drop-off points, watch time trends, subscriber sources. Prompt:
   > "Audit {{CLIENT_NAME}}'s YouTube channel ({{NICHE}}, {{SUB_COUNT}} subs). Analyze the last 20 videos: which thumbnails performed, which titles got CTR, where retention dropped. Recommend: 5 content pillars, 3 winning thumbnail formats, 3 winning title patterns, posting schedule. Output as `YT_PLAYBOOK.md`."

2. **Topic + title research — weekly, Claude.ai with TubeBuddy/VidIQ data.** Prompt:
   > "Generate 10 video ideas for {{CLIENT_NAME}} this month. Each: working title (under 60 char, hook-driven), thumbnail concept, search volume estimate, competitor coverage, hook line (first 15 seconds), retention bait at 30%, 60%, 90% marks. Rank by expected CTR × retention."

3. **Long-form pipeline — see `long-form-video-editing.md`** for the edit. YT-specific additions:
   - Chapter markers in description
   - End screen + cards setup
   - Pinned comment with CTA
   - SEO description: 150-word video summary + timestamps + relevant links + 3-5 hashtags at top
   - Tags: 10-15 from VidIQ recommendations

4. **Thumbnails — Photoshop or Canva.** A/B test 3 thumbnails per video. Claude:
   > "Write 3 thumbnail concepts for the video '{{TITLE}}'. Each: text on thumbnail (3-5 words max), facial expression, background/setting, contrast palette. Optimized for mobile CTR."
   Use YT's experiment feature for A/B.

5. **Shorts cadence — see `ugc-short-form-video-ads.md`.** YT Shorts feed differently than TikTok — first 1 second matters most. Don't gate Shorts behind subscribe asks (kills retention).

6. **Community tab — 2-3 posts/week.** Polls, behind-the-scenes images, Q&A teasers. Claude generates copy. Prompt:
   > "Plan {{CLIENT_NAME}}'s YouTube Community tab posts for this week (3 posts). Mix: 1 poll (4 options, tied to upcoming video topic `{{NEXT_VIDEO}}`), 1 BTS image post (image brief + 80-word caption referencing this week's upload `{{LAST_VIDEO}}`), 1 question post (open-ended, drives comments, tied to pillar `{{PILLAR}}`). Per post: post type, copy under 280 chars, image/asset brief if applicable, best post day/time given the channel's audience timezone `{{TZ}}`. Voice per YT_PLAYBOOK."

7. **Comment management — daily.** Claude.ai for replies. Heart top comments. Pin one strategic comment per video (often a question that boosts discussion).

8. **Monthly report — Claude.ai with YT Analytics export.** Watch time, CTR, AVD, subs gained, top videos, traffic sources, RPM (if monetized).

## Tools used
- YouTube Studio — uploads, analytics, community tab
- Claude.ai Project — ideas, titles, descriptions, comments, reports
- VidIQ or TubeBuddy — SEO data
- Photoshop / Canva — thumbnails
- Premiere Pro / DaVinci — long-form edits
- CapCut Pro — Shorts

## Time required
- Audit: 3 hours one-time
- Per long-form video: 8-12 hours (research, edit, thumbnail, upload, optimize)
- Shorts (5/week): see UGC pipeline timing
- Community + comments: 5 hours/month
- **Total: ~50-70 hours/month for 1 long-form/week + Shorts**

## What to send the client
- Weekly Loom recap (this week's upload, this week's Shorts, this week's wins)
- Monthly report

## Quality check - CTO & COO review
- Hook in first 15 seconds — viewer knows what they're getting
- Title + thumbnail tell same story (no clickbait mismatch)
- Audio levels normalized across whole video
- Chapter markers present and accurate
- Pinned comment set
- Tags + description SEO-optimized

## Tier availability
Add-on / standalone. [NEEDS CLARIFICATION: not in PDF price list. Website has `youtube-management.html`. Suggest AED 4,000-8,000/mo depending on cadence (Shorts-only vs. full long-form). Confirm with Omar.]
