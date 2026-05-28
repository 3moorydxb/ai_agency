# Long-Form Video Editing + 20 Clips/mo

## What the client gets
The client records one or more long-form videos (podcast, YouTube vlog, talking-head, livestream). Nova edits the full long-form piece AND repurposes it into 20 short-form clips for TikTok / Reels / Shorts.

## What Worker does — step by step

1. **Intake — client uploads raw footage to a shared Google Drive folder.** Worker confirms total duration, episode title, and key talking points.

2. **Transcript + clip discovery — Claude.ai or Claude Code with Whisper.** Run the audio through Whisper (or use Descript). Drop the transcript into Claude:
   > "This is the transcript of {{CLIENT_NAME}}'s {{EPISODE_TITLE}}. Find 20 standalone clip-worthy moments. For each: timestamp range (max 60 sec), a viral hook to use as the first 3 seconds, suggested title, on-screen text per beat, and why it works. Rank by viral potential. Output as markdown table."

3. **Long-form edit — Premiere Pro or DaVinci Resolve.** Cut filler, add lower thirds, intro/outro, chapter markers (for YouTube). Color and audio pass. Export 16:9 1080p.

4. **Short-form clips — CapCut Pro.** For each of the 20 clips:
   - Cut to timestamp range
   - Reframe to 9:16 (auto-reframe + manual fix)
   - Burn captions (auto-generate, proofread in CapCut)
   - Add the Claude-suggested hook as text overlay at 0:00
   - Add B-roll or zooms where attention drops
   - Export 1080x1920

5. **Titles + descriptions — Claude.ai.** Per clip:
   > "Write 3 title options for this clip (under 60 chars, hook-driven), a TikTok caption, and an Instagram caption. Plus 15 hashtags relevant to {{NICHE}}."

6. **Delivery — Google Drive.** Long-form MP4 + thumbnails (3 options) + clips folder + a `posting-schedule.csv` with platform, recommended time, and caption per clip.

## Tools used
- Whisper / Descript — transcription
- Claude.ai Project — clip discovery, titles, captions
- Premiere Pro / DaVinci Resolve — long-form edit
- CapCut Pro — short-form clip cuts
- Google Drive — delivery

## Time required
- Transcript + clip discovery: 1.5 hours
- Long-form edit: 4-6 hours (depends on raw length and quality)
- 20 clips: 20 min each = ~7 hours
- Titles, delivery: 1.5 hours
- **Total: ~14-16 hours per long-form piece.**

Default cadence: 1 long-form video per month per client at Foundation tier, 2/mo at Growth, 4/mo at Scale. Cadence can be increased as an add-on at AED 1,500 per additional video.

## What to send the client
Drive folder with long-form MP4, 3 thumbnail options, 20 vertical clips, captions CSV. YouTube upload optional — see Quality check.

## Quality check - CTO & COO review
- Long-form: clean cuts, no audio jumps, color matches across angles
- Thumbnails: face, hook text, contrasting colors — A/B-ready
- Clips: every clip stands alone (no missing context), captions accurate
- All clips have a hook at 0:00 — not buried
- Aspect ratios correct per destination

## Tier availability
Standalone add-on AED 2,000/mo (1 long-form/mo + 20 clips). Bundled into Foundation (1/mo), Growth (2/mo), and Scale (4/mo). Additional videos beyond the included cadence: AED 1,500 each.
