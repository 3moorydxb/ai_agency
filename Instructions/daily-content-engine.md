# Daily Content Engine

## What the client gets
Daily lifestyle / luxury content posted on the client's own account so the feed never goes dark. Faceless dark aesthetic by default — cars, hotels, watches, fashion, travel, interiors. Each piece is sourced (from Pinterest or Nova's in-house clip pack), captioned in the client's voice, scheduled, and published on cadence. Choose photo or video, 1/day or 2/day. Nova owns sourcing → captioning → scheduling → publishing. The client owns the account and approves the aesthetic spec once at kickoff.

## What Worker does — step by step

1. **Kickoff — aesthetic spec (one-time).** With the client, lock the niche (luxury car dealer, hotel, fashion brand, jewellery, F&B, etc.) and the visual lane (e.g. "Miami-night neons + matte black supercars, no people in frame"). Save as `AESTHETIC.md` in the client's Drive folder. This is the bible — every sourced asset must match it.

2. **Sourcing — Claude.ai, weekly batch (7-14 days at a time).** Prompt:
   > "You are sourcing daily lifestyle content for {{CLIENT_NAME}}, a {{CLIENT_NICHE}} brand. Aesthetic spec: {{PASTE AESTHETIC.md}}. Output two things:
   > 1. A list of 25 Pinterest search terms ranked from most-on-aesthetic to most-experimental. Each term: the search string, why it fits the aesthetic, and what to filter out if results drift off-brand.
   > 2. A short visual-style note (≤120 words) the worker can paste into the Pinterest brief: dominant colors, lighting, framing, subjects to include, subjects to exclude, mood references.
   > Output as markdown. No preamble."
   Worker then runs the searches in Pinterest, downloads ~30 candidates, and cross-checks against `AESTHETIC.md`. Drop anything off-brand. Top up from Nova's in-house clip pack (lifestyle, cars, luxury) if a category is thin.

3. **Captioning — Claude.ai, per post.** For each shortlisted asset:
   > "Write 3 caption variants for an Instagram/TikTok post. Asset: {{ONE-LINE DESCRIPTION OF IMAGE OR CLIP}}. Client persona: {{CLIENT_PERSONA — voice, target buyer, city, language mix}}. Tone: {{TONE — e.g. understated luxury, aspirational, blunt, playful}}. Variants:
   > • Short — under 12 words, statement style.
   > • Medium — 25-40 words, two beats: hook + close.
   > • Hook-heavy — opens with a scroll-stopper line ≤8 words on its own line, then 2-3 lines body, then a CTA.
   > Each variant: caption, then a hashtag block of 8 on-brand tags (mix of niche + city + aesthetic). No emoji unless the persona explicitly uses them. Output as a markdown table."
   Worker picks one variant per post. Keep the rejected ones in a `caption-bank.md` for reuse.

4. **Scheduling — Claude.ai, weekly.** Prompt:
   > "Build a 7-day posting calendar for {{CLIENT_NAME}}. Inputs:
   > • Posts queued for the next 7 days: {{LIST — asset filename + chosen caption + format (photo/video)}}.
   > • Client's audience timezone: {{TZ}}.
   > • Best-posting-time data for the platform: {{PASTE FROM METRICOOL/LATER ANALYTICS}}.
   > • Cadence: {{1/day OR 2/day}}.
   > Output a CSV with columns: date, time (local), platform, format, asset_filename, caption, hashtags. If cadence is 2/day, space the slots ≥4 hours apart and put the stronger asset at the higher-traffic slot. No preamble."
   Worker pastes the CSV into Metricool / Later for the week.

5. **Publish + monitor — daily, ~10 min.** Confirm yesterday's post went out. Reply to comments in client voice (reuse the captioning prompt's tone field). Note any post that overperforms — flag for the asset library.

6. **Monthly report — Claude.ai.** Reach, follower delta, top-3 posts by saves, top-3 by shares, any aesthetic drift to correct next month.

## Tools used
- Claude.ai Project — sourcing, captioning, scheduling, replies, reports
- Pinterest — primary source
- Nova in-house clip pack — fallback / top-up (luxury / cars / lifestyle)
- Metricool or Later — scheduling + analytics
- Google Drive — `AESTHETIC.md`, asset folder, caption bank per client

## Time required
- Kickoff (aesthetic spec + first batch): 4-6 hours one-time
- Weekly: ~3-4 hours (sourcing batch + captions + schedule)
- Daily: 10 min monitor / reply
- **Total ongoing: ~16-20 hours/month per client**

## What to send the client
- `AESTHETIC.md` link on kickoff
- Weekly preview CSV (next 7 days, optional approve/edit)
- Scheduled posts visible in their account
- Monthly performance report (PDF or Google Doc)

## Quality check - CTO & COO review
- Every asset matches `AESTHETIC.md` — no drift
- Captions read in client voice, not generic Claude voice
- No two consecutive days post the same subject (e.g. two car shots back-to-back) unless deliberate
- Platform AI-content labels applied if the asset is AI-generated
- Post times respect the client's audience timezone, not the worker's

## Tier availability
Standalone add-ons. Not Nova-tier-locked — a Launch client can buy Daily Content Engine on top, and a Scale client can stack it as one more deliverable.

- **Photo · 1/day** — AED 1,200/mo
- **Photo · 2/day** — AED 2,000/mo
- **Video · 1/day** — AED 1,500/mo
- **Video · 2/day** — AED 2,500/mo
