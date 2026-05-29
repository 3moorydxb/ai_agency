# YouTube Shorts

## What the client gets
Shorts-only YouTube channel operation. 60-second vertical (9:16) videos, 3-5 uploads per week, hook-engineered for the 3-second retention spike, thumbnail covers, comment management, and weekly growth analysis. No long-form. No chapter markers. Descriptions stay short (~150 chars). Goal: subscriber growth + watch-time hours toward monetization, optimized for the Shorts feed (not the home feed).

## What Worker does — step by step

1. **Channel audit (one-time) — Claude.ai + YouTube Studio.** Pull last 30 Shorts. Identify 3-second retention pattern, swipe-away rate, top-performing hooks, replays. Prompt:
   > "Audit {{CLIENT_NAME}}'s YouTube Shorts channel ({{NICHE}}, {{SUB_COUNT}} subs). Analyze the last 30 Shorts. For each, estimate: 3-second retention (% who kept watching past frame 90), swipe-away rate, average view duration vs 60s. Group winners by hook type (visual surprise, voiceover question, on-screen claim, motion). Recommend: 5 content pillars, the 3 hook formats that earn the highest 3-second retention, posting cadence. Output as `SHORTS_PLAYBOOK.md`."

2. **Topic + hook research — weekly, Claude.ai.** Prompt:
   > "Generate 10 Shorts ideas for {{CLIENT_NAME}} this week. Each: working title (under 40 char, mobile-truncation safe), pillar, hook line spoken in the first 1.5 seconds (≤8 words), visual gimmick in frame 1-90 (what's literally on screen), retention bait at the 30s mark (what reason to keep watching), on-screen text overlay (≤6 words), CTA at the end (subscribe / next short / comment prompt — pick one only). Rank by expected 3-second retention. No long-form ideas."

3. **Shorts production — see `ugc-short-form-video-ads.md`** for the edit pipeline. YT Shorts specifics:
   - 9:16 vertical, exported at 1080×1920
   - Hard cut or motion change before frame 90 (the 3-second retention test)
   - On-screen text large enough to read on the smallest phone, top-third placement (bottom third is covered by YT UI)
   - Hook spoken in first 1.5 seconds
   - Cap at 60 seconds — anything longer pushes into long-form feed and tanks reach
   - Trending audio when relevant — credit honored automatically by YT
   - **No** "subscribe before I tell you" gating — kills retention on the Shorts feed
   - **No** chapter markers, no end screens, no cards (Shorts UI doesn't surface them)

4. **Cover thumbnails — Canva, light touch.** Shorts cover images show on the channel grid, not in the feed itself. One legible word + a high-contrast face/object. 1080×1920. Claude:
   > "Write 3 Shorts cover concepts for the Short titled '{{TITLE}}'. Each: the single word or 2-word phrase shown big on the cover (max 2 words), the visual subject in frame, contrast palette (background vs text), mobile-grid legibility check (would this read at thumbnail size in the channel's Shorts shelf). Output as markdown table."

5. **Captions / description — Claude.ai, kept short.** Each upload:
   > "Write the title and description for this Short. Title: under 40 characters, hook-aligned, mobile-truncation safe (the first 30 chars must carry the meaning). Description: under 150 characters total, one line of context + 3 hashtags. Hashtags: 1 `#shorts`, 1 niche tag (`{{NICHE_TAG}}`), 1 trending-or-evergreen tag. No timestamps, no long summaries, no links beyond a single channel handle if relevant."

6. **Comment management — daily, Claude.ai.** Reply to the top 10 comments per Short in the first 24h (algorithm weights early comment engagement on Shorts). Heart top comments. Pin one strategic comment — usually a question that drives reply chains.

7. **Weekly recap + monthly report — Claude.ai with YT Analytics export.** Weekly: top Short, worst Short, lesson. Monthly: Shorts views, average view duration vs 60s ceiling, subs gained from Shorts, traffic source split (Shorts feed vs browse vs external), watch-time hours added.

## Tools used
- YouTube Studio — uploads, Shorts analytics, comments
- Claude.ai Project — ideas, hooks, titles, descriptions, comment replies, reports
- CapCut Pro — vertical edits, on-screen text, motion
- Canva — cover thumbnails
- VidIQ (optional) — trending niche tags

## Time required
- Audit: 2 hours one-time
- Per Short: 1.5-2.5 hours (script + shoot/source + edit + upload + caption)
- Comments + community: 4 hours/month
- **Total: ~20-35 hours/month for 3-5 Shorts/week**

## What to send the client
- Weekly Loom recap (this week's Shorts, top performer, next week's hooks)
- Monthly Shorts report (PDF or Google Doc)

## Quality check - CTO & COO review
- Hook spoken or shown in first 1.5 seconds — no slow intros
- 3-second retention test: something changes on screen before frame 90
- Vertical 9:16, 60s or under
- On-screen text in top third, legible at phone size
- No chapter markers, no long descriptions, no end screens
- Pinned comment set, top-10 replies done within 24h

## Tier availability
Standalone add-on under Social Media Management — 1 Platform. See `platform-management.md`. AED 1,200–1,800/mo (varies by cadence — 3/week vs 5/week).
