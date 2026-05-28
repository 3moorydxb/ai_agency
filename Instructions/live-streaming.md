# Live Streaming Management (TikTok Live / Instagram Live)

## What the client gets
Production and operation of regular live shopping or content streams on TikTok Live and/or Instagram Live. Nova handles scripting, run-of-show, on-stream moderation, promo code drops, post-stream clip generation, and growth strategy.

## What Worker does — step by step

1. **Stream strategy (one-time) — Claude.ai.** Set cadence (daily / weekly / monthly), format (shopping / Q&A / tutorial / interview), target watch time, conversion goal. Document in `LIVE_PLAYBOOK.md`.

2. **Per-stream prep — Claude.ai.** Day before:
   > "Build a 60-minute live shopping run-of-show for {{CLIENT_NAME}}. Product focus: {{SKUS}}. Hook (first 2 min), 4 product segments (10 min each: feature → demo → social proof → discount drop → CTA), Q&A break (10 min), close with urgency push. Output: minute-by-minute script with host lines, what to show on camera, when to drop promo code, what banner to display."

3. **Pre-stream promo — 24h, 6h, 1h, 5min countdown.** Worker schedules these via Metricool/Buffer. Claude writes the copy. Prompt:
   > "Write the full pre-stream promo pack for {{CLIENT_NAME}}'s {{STREAM_TOPIC}} live on {{PLATFORM}} at {{TIME_DUBAI}}. Output: (1) 24h-before feed post (caption + visual brief + 15 hashtags), (2) 6h-before story sequence (4 frames: tease product, countdown sticker, swipe-up CTA, behind-the-scenes), (3) 1h-before story (countdown + reminder to set notification), (4) 5min countdown story + push notification copy (under 80 char) if client has an app. Tone per BRAND_BIBLE. Hook each piece with one of: scarcity, exclusivity, FOMO, value-stack."

4. **Stream day — 2-person setup ideal (host on camera + worker behind the scenes):**
   - Worker manages comments, pins key questions, drops promo codes on cue, manages product overlays in TikTok Shop, mutes/bans trolls.
   - Claude.ai live tab open — paste any tricky audience questions, get instant draft answers for host's earpiece if Bluetooth comms used. [NEEDS CLARIFICATION: realistic without audio comms gear? May need to relay via on-screen monitor.]

5. **Post-stream — within 6 hours.** Pull replay, send to `long-form-video-editing.md` pipeline for clip generation (target 5-10 clips per stream). Generate "missed it?" recap post via Claude. Calculate session metrics.

6. **Reporting — weekly.** Concurrent viewers peak, watch time avg, GMV (if shopping), new follows, top moments. Adjust playbook.

## Tools used
- TikTok / Instagram native live tools
- Streamyard or OBS (if multi-camera or guest)
- Claude.ai Project — scripts, comment triage, recaps
- Phone tripod, ring light, lavalier mic (or full kit if budget allows)
- CapCut Pro — post-stream clip cuts

## Time required
- Per stream: 3 hrs prep + 1-2 hrs live + 4 hrs post = ~8-9 hours
- Weekly streamer: ~32-36 hours/month
- Daily streamer: not realistic at this price — escalate to higher tier

## What to send the client
- Stream calendar
- Run-of-show Doc per stream
- Replay + clips folder
- Weekly performance memo

## Quality check - CTO & COO review
- Audio is clean (kill streams with bad mic — viewers leave)
- Promo codes work — test before going live
- Inventory available before pushing products
- Trolls handled fast — they kill watch time
- Hook in first 30 seconds: viewer must understand value immediately

## Tier availability
Add-on. [NEEDS CLARIFICATION: not in PDF price list. Website has the page. Suggest AED 3,000-6,000/mo depending on cadence. Confirm with Omar.]
