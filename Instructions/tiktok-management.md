# TikTok Management

## What the client gets
Full TikTok account operation: feed posts (3-5/week), Stories cadence, on-trend Reels-equivalent short-form videos, hook engineering for the For You Page (FYP), trending-sound monitoring, hashtag stack rotation, comment seeding, DM triage, and weekly growth analysis. Optimized for FYP discovery — not for follower count alone.

## What Worker does — step by step

1. **Audit + niche positioning — Claude.ai + TikTok Analytics.** Pull last 30 posts. Identify hook patterns that drove the highest 3-second retention, sounds that earned the most traffic, FYP impressions vs follower-feed impressions. Prompt:
   > "Audit {{CLIENT_NAME}}'s TikTok ({{NICHE}}, {{FOLLOWER_COUNT}} followers). For each of the last 30 posts: hook type, sound used (trending vs original), 3-second retention rate, FYP impression share, completion rate. Group winners by hook format. Recommend: 5 content pillars, 3 hook formats with the highest 3-second retention, posting cadence, 1 sound-strategy rule (use trending sounds vs build original). Output as `TIKTOK_PLAYBOOK.md`."

2. **Hook + caption generation — Claude.ai, per batch.** TikTok-specific — captions are short, hooks are visual + audio first:
   > "Generate 10 TikTok posts for {{CLIENT_NAME}} this week. For each:
   > • Pillar (from `TIKTOK_PLAYBOOK.md`).
   > • Hook line spoken or shown on-screen in the first 1.5 seconds (≤8 words). Optimized for the FYP — assume the viewer has never seen this account.
   > • Visual gimmick in frame 1-90 (what literally changes on screen to pass the 3-second retention test).
   > • Trending-sound slot: yes/no. If yes, the sound should match this brief: {{TRENDING_SOUND_BRIEF — paste from research step}}.
   > • Caption: ≤150 characters. One line. Hook-aligned. Native to TikTok (no IG-flavored captions, no emoji walls).
   > • On-screen text overlay: ≤6 words, top-third placement (bottom third is covered by TikTok UI).
   > • CTA: comment-bait OR follow-bait OR rewatch-bait — pick one, never all three.
   > Output as a markdown table."

3. **Trending audio research — weekly, Claude.ai drafts the brief, worker executes.** Prompt:
   > "Draft a research task for a Nova worker who will look up trending TikTok sounds this week for {{CLIENT_NAME}} in {{NICHE}}, {{COUNTRY}}. Output:
   > 1. Three TikTok in-app searches the worker should run (exact search strings) — mix of niche-specific (`{{NICHE}} 2026`), trending-tag-based, and competitor-handle-based.
   > 2. The criteria for picking a sound: usage count between 5k and 500k (sweet spot — past discovery, before saturation), 7-day trend slope positive, audio length usable in a 15-60s edit, sound mood matches the client's brand voice ({{BRAND_VOICE}}).
   > 3. A note-taking template the worker fills out: sound title, original creator, current usage count, 7-day delta, mood tag, suggested post pillar it fits, embed link.
   > 4. A flag list: avoid sounds tied to a single specific event (will date), avoid sounds with copyright strikes outside TikTok's licensed library, avoid sounds the client used in the last 30 days.
   > Output as markdown. No preamble."

4. **Hashtag stack rotation — Claude.ai, weekly.** TikTok hashtags work differently from IG — they're a topic signal to the FYP algorithm, not a discovery feed in their own right. Prompt:
   > "Generate 3 hashtag stacks for {{CLIENT_NAME}}'s TikTok this week. Each stack: 5 hashtags total. Composition per stack: 1 broad pillar tag (`{{PILLAR}}`), 2 niche-specific tags in {{NICHE}}, 1 city/country tag (`{{CITY}}`), 1 trending tag from the current Discover page (`{{TRENDING_TAG}}`). Rules: no banned tags, no shadowbanned tags, no `#fyp` / `#foryou` / `#viral` (they're signal noise — TikTok devalues them), no hashtag the account used in the last 14 days. Output as 3 code blocks, one stack each, space-separated lowercase."

5. **Comment seeding — Claude.ai, first 30 min after each post.** TikTok rewards early comment engagement on the FYP. Prompt:
   > "Write 5 comment seeds for a TikTok post about `{{POST_TOPIC}}` by {{CLIENT_NAME}}. The seeds will be posted by Nova team members from secondary accounts within 30 minutes of the upload to spark a thread. Each seed:
   > • Reads as a real viewer, not an ad.
   > • One asks a question the creator can reply to (drives reply chain).
   > • One offers a counterpoint or playful disagreement (drives debate replies).
   > • One quotes a specific line / visual moment in the video (proves they watched it).
   > • One tags a niche-relevant @-mention if helpful (optional).
   > • One is a short reaction (≤4 words) that other viewers can like-pile onto.
   > Voice: {{BRAND_VOICE}}. No hashtags in comments. No emoji unless persona uses them. Output as a numbered list."

6. **DMs + comments — twice daily.** Same routine as `social-media-management.md`. Reply to top comments within 24h. Heart the rest. Pin one strategic comment per post.

7. **Posting + scheduling — Metricool or TikTok native scheduler.** Native scheduler beats third-party for FYP weighting. Worker uploads via desktop TikTok Studio for native sound rights.

8. **Weekly recap + monthly report — Claude.ai with TikTok Analytics export.** Weekly: top post, worst post, lesson, sound-strategy notes. Monthly: video views, FYP impression share, average watch time, follower delta, follow-from-FYP rate (key signal), top sound used.

## Tools used
- Claude.ai Project — hooks, captions, sound briefs, hashtag stacks, comment seeds, reports
- TikTok Studio (desktop) — uploads, scheduling, analytics
- Metricool — cross-platform calendar view (optional)
- CapCut Pro — vertical edits, on-screen text, motion
- TikTok Discover / Creative Center — trending sound + hashtag research

## Time required
- Audit: 2 hours one-time
- Per post: 1.5-2.5 hours (script + shoot/source + edit + upload + caption + seed)
- Sound + hashtag research: 2 hours/week
- Comments + DMs: 6 hours/month
- **Total: ~25-40 hours/month for 3-5 posts/week**

## What to send the client
- `TIKTOK_PLAYBOOK.md` link on kickoff
- Weekly Loom recap (this week's posts, top performer, next week's sound bets)
- Monthly TikTok report (PDF or Google Doc)

## Quality check - CTO & COO review
- Hook spoken or shown in first 1.5 seconds — no slow intros
- 3-second retention test: something changes on screen before frame 90
- Vertical 9:16, on-screen text top-third
- Sound used is on-trend AND on-brand — not a forced trend hijack
- Hashtag stack rotated — no repeat of last 14 days
- Comment seeds posted within 30 min of upload
- No `#fyp` / `#foryou` / `#viral` in tag stacks

## Tier availability
Standalone add-on under Platform Management — see `platform-management.md`. AED 1,200–2,000/mo (varies by cadence — 3/week vs 5/week).
