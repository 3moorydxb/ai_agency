# Build: Website (Claude Code / Framer / Webflow)

## What the client gets
A custom website — static or full CMS — built fast with Claude Code (best margin) or Framer/Webflow (when client wants ongoing self-edit). Build price AED 9,000–40,000. Maintenance AED 400–1,200/mo.

## What Worker does — step by step

1. **Discovery — Claude.ai.** Capture: business goals, pages needed, brand assets, content sources, integrations (forms → CRM, ecom, booking, chatbot), tech preference (static vs. CMS), SEO targets, performance targets.

2. **Sitemap + wireframe — Claude.ai.** Prompt:
   > "Build a sitemap and wireframe spec for {{CLIENT_NAME}}'s website. Pages: {{PAGES}}. For each: purpose, primary CTA, key content blocks, sections in order. Output as markdown tree + per-page wireframe (text-based layout)."

3. **Stack pick:**
   - **Claude Code (static HTML/CSS/JS on Cloudflare Pages)** — Nova's default. Fast, cheap, performant. No CMS means Nova handles edits.
   - **Framer** — when client wants drag-and-drop edits. Slightly more expensive licensing.
   - **Webflow** — for content-heavy with CMS collections. Higher monthly cost.
   - **Next.js (Vercel)** — only when dynamic features warrant it.

4. **Content + copy — `ai-content-engine.md` pipeline + Claude.ai per-page.** Per page:
   > "Write copy for {{PAGE_NAME}}. Sections: {{SECTIONS}}. Voice: BRAND_BIBLE. SEO target keyword: {{KEYWORD}}. CTA: {{CTA}}. Word count: {{WC}}. Plus meta title (60 char), meta description (155 char), and Open Graph title/description."

5. **Design + assets — Figma (if heavy custom) or direct in Claude Code with Tailwind.** Use brand identity from `build-brand-identity.md` or client's existing kit. Generate images via `ai-image-generation.md`.

6. **Build — Claude Code session per major component.** Modular: header, footer, hero, sections, CTA blocks, contact form. Tailwind for styling. Vanilla JS or Alpine for interactivity. Form to webhook → n8n → CRM.

7. **SEO build-time — see `seo-geo-aeo.md`.** Schema markup (Organization, LocalBusiness, Product if applicable), sitemap.xml, robots.txt, canonical tags, OG images per page.

8. **Performance — target Lighthouse 95+ across the board.** Image optimization (WebP, lazy load), critical CSS inline, defer non-critical JS, font preload.

9. **Integrations — embed chatbot, booking, analytics (GA4 + GSC), Meta pixel, TikTok pixel, etc.**

10. **Testing — manual + Lighthouse + axe (accessibility).** Mobile + desktop + tablet. All major browsers. Form submissions verified end-to-end.

11. **Deploy — Cloudflare Pages (Nova default) or Vercel.** Custom domain, SSL, DNS, redirects from old site.

12. **Handoff + train. 30-day post-launch check-in.**

## Tools used
- Claude Code — entire build (when static)
- Framer / Webflow — alternative when CMS needed
- Tailwind CSS — styling
- Cloudflare Pages — hosting (free + fast)
- Figma — design files (optional)
- Lighthouse / WebPageTest — performance
- axe — accessibility
- GA4 + GSC — analytics setup

## Time required
- Discovery + spec: 6-10 hours
- Design: 10-20 hours (depends on custom level)
- Build: 30-60 hours
- SEO + performance: 8-12 hours
- Testing + deploy: 8-15 hours
- **Total: 60-120 hours**

## What to send the client
- Spec + wireframes for approval
- Staging URL for review
- Final QA report (Lighthouse, accessibility, form tests)
- Loom walkthrough at launch
- Handoff doc + admin access where applicable
- Maintenance proposal

## Quality check - CTO & COO review
- Lighthouse > 95 on all 4 (Performance, Accessibility, Best Practices, SEO)
- All forms submit + write to CRM
- Mobile rendering perfect (test on real phone, not just simulator)
- No broken links (use Screaming Frog)
- Analytics firing (verify in real-time view)
- 301 redirects from old URLs in place (if rebuild)
- SSL valid, HTTP → HTTPS forced

## Tier availability
One-time build standalone (AED 9,000–40,000). Often bundled with Foundation onboarding for SaaS/services clients.
