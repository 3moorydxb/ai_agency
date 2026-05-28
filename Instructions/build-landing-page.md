# Build: Landing Page Sprint (48-72hr)

## What the client gets
A single high-conversion landing page built and shipped in 48-72 hours. Used for product launches, ad campaign destinations, event signups, lead magnets. Build price AED 4,500–8,000. No maintenance retainer.

## What Worker does — step by step

1. **Brief — Claude.ai, 30-min intake call.** Single goal, single audience, single CTA, copy inputs, brand assets, deadline. Output: `lp-brief-{{CAMPAIGN}}.md`.

2. **Conversion architecture — Claude.ai.** Prompt:
   > "Design a landing page for {{OFFER}} targeting {{AUDIENCE}}. Single CTA: {{CTA}}. Output section order (hero → social proof → benefits → how-it-works → objection-handling → secondary social proof → final CTA → FAQ). Per section: purpose, copy direction, visual direction, what to test. Use proven conversion frameworks (PAS / AIDA / before-after-bridge — pick best fit)."

3. **Copy — Claude.ai.** Per section:
   > "Write copy for the {{SECTION}} of this landing page. Headline (under 12 words, benefit-led), subhead, body (under 80 words), CTA copy (3 variants). Voice: BRAND_BIBLE."

4. **Design — direct in Claude Code with Tailwind, or Framer for client-editable.**
   - **Claude Code (Tailwind):** fastest, cheapest, perfect for static
   - **Framer:** when client wants to A/B headlines themselves
   - Pull brand kit from `build-brand-identity.md`

5. **Hero visual — pick fastest path:**
   - Stock photo from Pexels / Unsplash if generic
   - AI-generated via Midjourney + product mockup
   - Product photo + lifestyle scene via `ai-product-photography.md`
   - Animated hero (Lottie or simple CSS) for premium feel

6. **Form integration — n8n or direct webhook → CRM + email (Klaviyo/HubSpot).** Confirmation email goes out immediately. Lead in CRM with source tagged.

7. **Tracking — GA4 + Meta pixel + conversion API + TikTok pixel.** Set goal events: form submit, video play (if hero video), scroll depth.

8. **A/B testing setup — VWO or Google Optimize successor (Optimize XL, or just multiple URLs via paid ads splits).** Configure headline + hero + CTA tests.

9. **Speed — Lighthouse 95+.** Critical CSS inline. Hero image preload + AVIF/WebP. No janky animations.

10. **Deploy — Cloudflare Pages or Vercel.** Subdomain like `offer.client.com` or `client.com/offer`.

11. **Handoff Loom.**

## Tools used
- Claude Code — build (default)
- Framer — alternative when CMS needed
- Tailwind CSS — styling
- Midjourney / ChatGPT image gen — hero visuals
- n8n + Klaviyo + CRM — form processing
- GA4 + Meta pixel + TikTok pixel — tracking
- Cloudflare Pages / Vercel — hosting

## Time required
- Brief + arch: 3 hours
- Copy: 3-4 hours
- Design + build: 12-18 hours
- Tracking + tests: 3-4 hours
- QA + deploy: 2-3 hours
- **Total: 25-35 hours over 2-3 calendar days**

## What to send the client
- Brief + arch for sign-off before build starts
- Staging URL within 24h
- Final URL within 72h
- Tracking verification screenshots
- Loom walkthrough

## Quality check - CTO & COO review
- Single CTA — no competing actions
- Hero clearly states value prop within 3 seconds of scan
- Lighthouse > 95
- Form writes to CRM (test 3 submissions)
- Pixels firing — verify in Events Manager
- Mobile rendering flawless (most landing page traffic is mobile)
- No broken links, no Lorem Ipsum left in

## Tier availability
One-time build standalone (AED 4,500–8,000).
