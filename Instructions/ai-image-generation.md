# AI Image Generation for Content

## What the client gets
On-demand AI-generated images for social posts, blogs, ads, and presentations — produced in the client's brand style with consistent colors, mood, and composition. Typically 30-50 images per month at this price point.

## What Worker does — step by step

1. **Build the style reference (one-time per client) — Claude.ai + Midjourney.** Collect 10-15 reference images the client loves (their own, competitors', moodboards). Drop them in Claude:
   > "Analyze these reference images. Write a Midjourney style prompt suffix that captures the common visual language: lighting, color palette (hex codes), composition, mood, subject framing, lens/depth-of-field cues. Output a single reusable suffix I can paste at the end of every prompt for {{CLIENT_NAME}}."
   Save the suffix to `~/clients/{{CLIENT_SLUG}}/style-suffix.txt`.

2. **Prompt batch — Claude.ai.** Each week or per request, prompt:
   > "Generate {{N}} Midjourney prompts for {{CLIENT_NAME}} based on this brief: {{BRIEF}}. Each prompt: subject + action + setting + composition + lighting + STYLE_SUFFIX. Aspect ratio: {{AR}}. Output as a numbered list ready to paste into Midjourney."

3. **Generate — Midjourney (Discord or web).** Run prompts. Upscale the best variant per prompt. For variations: use `--seed` to maintain consistency across a set.

4. **Background remove / cleanup — Photoshop or remove.bg.** For products on transparent backgrounds, brand placements, etc.

5. **Brand overlays — Canva or Photoshop.** Add logo, text overlays, CTAs. Use the brand template set up during onboarding.

6. **Delivery — Google Drive.** Folder per request or per month: `~/{{CLIENT_NAME}}/Images/{{YYYY-MM}}/`. Include raw, upscaled, and any branded variants.

## Tools used
- Claude.ai — style analysis, prompt batching
- Midjourney — generation
- ChatGPT image gen — fallback for in-context edits (text on images, product placement)
- remove.bg / Photoshop — background work
- Canva — brand overlays

## Time required
- One-time style setup: 1 hour
- Per request: 15-30 min depending on count
- Monthly volume (~30-50 images): 4-6 hours/month

## What to send the client
Drive folder link with all images delivered, labeled by use case. For one-off requests: link within 24 hours.

## Quality check - CTO & COO review
- Style suffix applied — set looks cohesive, not random
- Hands, text, and faces don't have AI artifacts
- Brand colors match (use eyedropper to check)
- File formats correct (PNG for transparency, JPG for compression)
- Resolution adequate for use case (no IG-quality images for billboards)

## Tier availability
Standalone add-on AED 500/mo. Included implicitly in Foundation+ as part of post production.
