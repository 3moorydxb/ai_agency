# Build: Shopify Store (Standard)

## What the client gets
A full Shopify store: theme customized to brand, products imported with optimized listings, checkout configured, payment + shipping set up, essential apps installed, key automations live, and analytics tracking working. Build price AED 6,000–18,000. Maintenance AED 1,500–3,500/mo.

## What Worker does — step by step

1. **Discovery + audit — Claude.ai.** Capture: niche, product count, target market, brand assets, content sources (product copy, photos, videos), payment + shipping needs, target markets (geos), tax requirements, currencies.

2. **Theme pick + customize:**
   - **Free themes:** Dawn, Sense, Crave (best for budget)
   - **Premium:** Impulse, Prestige (for editorial brands)
   - **Custom:** only when client warrants — adds 30+ hours
   - Customize via Theme Editor and code (Liquid) — Claude Code can write Liquid sections

3. **Brand identity — apply or build from `build-brand-identity.md`.** Logo, colors, fonts, image style.

4. **Product import — via CSV.** Claude.ai writes optimized listings:
   > "Write Shopify product listings for these {{N}} products. Per product: title (60 char with keyword), 6-8 bullet benefits, 200-word description (conversion copy + SEO), tags (5-10), SEO title + meta description, alt text per image. Output as Shopify CSV format."

5. **Product photos — see `ai-product-photography.md`.** Hero shot white-bg + 4 lifestyle per product minimum.

6. **Collections + navigation.** Build collection logic (automated rules where possible). Nav menu: max 5 top-level items, mega-menu for category-heavy stores.

7. **Pages — Home, About, Contact, FAQ, Shipping, Returns, Privacy, Terms.** Claude writes per page. Per-page prompt (Claude.ai with BRAND_BIBLE.md in the project):
   > "Write the {{PAGE_NAME}} page for {{CLIENT_NAME}}'s Shopify store (niche: {{NICHE}}, brand voice per BRAND_BIBLE). Structure: H1, subhead, 3-5 sections with H2s, CTA blocks. Word count: Home 350-500, About 400-600, Contact 150-200, FAQ 8-12 Q&A pairs, Shipping/Returns/Privacy/Terms use UAE-compliant legal templates and customize per {{CLIENT_NAME}}'s policy ({{POLICY_NOTES}}). Plus: meta title (60 char), meta description (155 char), OG title + description. Output as markdown ready to paste into Shopify's page editor."

8. **Apps install — minimal essential stack:**
   - Klaviyo (email) — see `email-sms-marketing.md`
   - Judge.me or Loox (reviews)
   - Shopify Inbox / Tidio (chat) or Nova-built chatbot — see `build-chatbot.md`
   - Recharge or Bold (subscriptions, if applicable)
   - PageFly (visual page builder, optional)

9. **Checkout config.** Payments (Stripe + local: Tabby, Tamara, Mada for GCC), shipping zones, tax, currency conversion.

10. **Automations:**
    - Abandoned cart (Klaviyo + Shopify)
    - Welcome flow
    - Post-purchase review request
    - Back-in-stock alerts

11. **Analytics + pixels.** GA4, Meta pixel + CAPI, TikTok pixel, Klaviyo events, Triple Whale (if ecom Growth+ client).

12. **Speed + SEO.** Image optimization, lazy-load, kill unused apps. Sitemap auto-generated, schema markup via theme.

13. **Test orders — end-to-end.** Real card, real shipping label generated, real refund tested.

14. **Launch + handoff doc + 30-day post-launch check-in.**

## Tools used
- Shopify — platform
- Claude Code — Liquid customizations + product CSV gen
- Klaviyo — email
- Judge.me / Loox — reviews
- Stripe + local payment gateways
- GA4 + Meta pixel + TikTok pixel
- Claude.ai — product copy + pages
- Midjourney / ChatGPT image gen — visuals

## Time required
- Discovery: 4-6 hours
- Theme customization: 10-15 hours
- Products: 8-20 hours (depends on count)
- Pages + content: 6-10 hours
- Apps + automations: 8-12 hours
- Pixels + analytics: 4-6 hours
- Testing + launch: 6-10 hours
- **Total: 50-90 hours**

## What to send the client
- Discovery doc for approval
- Staging password-protected URL for review
- Test order screenshots
- Loom walkthrough at launch
- Handoff doc + admin access
- Maintenance proposal

## Quality check - CTO & COO review
- Test order succeeds end-to-end with real payment
- Mobile checkout flow flawless
- Pixels firing — verify in Events Manager
- Page speed Lighthouse > 80 (Shopify caps lower than custom)
- Inventory tracking accurate
- Refund tested
- All policy pages present (legal)

## Tier availability
One-time build standalone (AED 6,000–18,000).
