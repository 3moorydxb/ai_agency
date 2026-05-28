# AI Creative Production for Paid Ads

## What the client gets
A continuous pipeline of paid-ad creative: static images, motion graphics, UGC-style videos, and Spark Ads. Built in Nova's "concept → variant → test → kill" loop. Output: 20-40 ad variants per month per active campaign.

## What Worker does — step by step

1. **Winning patterns library (one-time, growing) — Claude.ai Project.** Maintain `CREATIVE_LIBRARY.md` per client: documented winning hooks, formats, angles. Updated monthly after report. New campaigns start from this library.

2. **Concept brief — Claude.ai.** Per campaign:
   > "Generate 12 ad creative concepts for {{CLIENT_NAME}} targeting {{AUDIENCE}} with {{OFFER}}. Mix formats: 3x static image, 3x carousel, 3x UGC-style video, 3x animated explainer. Each: hook (visual + copy), value prop, CTA, why this will outperform CREATIVE_LIBRARY.md baseline. Rank by predicted CTR."

3. **Production:**
   - **Static image:** Midjourney or ChatGPT image gen + Photoshop overlay (headline, CTA, brand)
   - **Carousel:** Canva with brand template, copy from Claude (5-7 slides)
   - **UGC video:** see `ugc-short-form-video-ads.md`
   - **Animated explainer:** Runway or AfterEffects template, Claude-written voiceover via ElevenLabs

4. **Copy variants — Claude.ai.** Per creative, 3-5 copy variants:
   > "Write 5 primary text variants for this {{PLATFORM}} ad. Hook-first. Under 125 chars for in-feed. Include 1 question hook, 1 stat hook, 1 problem-agitate hook, 1 social-proof hook, 1 direct-CTA hook."

5. **Naming convention — strict.** `{{Campaign}}_{{ConceptCode}}_{{Format}}_{{HookType}}_{{Variant}}.{{ext}}` — so analysis is easy.

6. **Delivery to ads manager — see `paid-ads-management.md`.**

7. **Post-mortem after 7 days — Claude.ai.** Identify winners, kill losers, update CREATIVE_LIBRARY.md.

## Tools used
- Claude.ai Project — concepts, copy, post-mortem
- Midjourney + ChatGPT image gen — statics
- Photoshop + Canva — overlays and carousels
- Runway / AfterEffects — motion
- ElevenLabs — voiceovers
- CapCut Pro — UGC video assembly

## Time required
- 20-40 variants/month: ~25-35 hours
- Heavier for UGC video-heavy campaigns

## What to send the client
Drive folder with all variants, naming-convention CSV, and a 1-page strategy memo. Plus the variants pushed live in the ad accounts.

## Quality check - CTO & COO review
- Hook is in first frame / first 3 chars of copy
- Brand colors + logo (where required) consistent
- Aspect ratios per placement (9:16, 1:1, 4:5, 16:9)
- File weight under platform limits
- No banned imagery (alcohol, before/after, sensitive claims) unless approved per market
- CREATIVE_LIBRARY.md updated post-test

## Tier availability
Growth, Scale (bundled with paid ads). Standalone add-on AED 2,500/mo.
