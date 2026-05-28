# Google Business Profile Optimization

## What the client gets
A fully optimized Google Business Profile (GBP) that ranks in the local 3-pack, displays accurate info, has weekly posts, responds to all reviews, and converts searchers into customers. For local businesses (restaurants, clinics, service businesses, retail).

## What Worker does — step by step

1. **Audit & cleanup (one-time) — manual + Claude.ai.** Open the client's GBP. Document gaps in a checklist:
   - NAP (name, address, phone) — exact match across web
   - Categories — primary correct, 5-9 secondary
   - Hours including holidays
   - Service area / service list
   - Attributes (women-led, wheelchair, free wifi, etc.)
   - Photos — minimum 10 categories (exterior, interior, team, product, etc.)
   - Q&A — seed 5 common questions and answer them
   Drop the audit into Claude:
   > "Here is the current GBP info and gaps. Generate a fix list with concrete copy for each gap. For categories, recommend primary + secondary. For attributes, list everything that likely applies. For the business description, write a 750-character version targeting {{LOCAL_KEYWORD}}."

2. **Weekly posts — Claude.ai.** GBP posts boost local rank:
   > "Plan 2 GBP posts this week for {{CLIENT_NAME}} ({{BUSINESS_TYPE}} in {{CITY}}). Type: 1 offer/promo, 1 update/event. Each: headline under 58 chars, body under 1500 chars, CTA button (Order / Book / Learn More / Call), image brief. Include local keyword '{{LOCAL_KEYWORD}}'."
   Worker posts via GBP web interface.

3. **Photo additions — monthly batch.** Add 5-10 fresh photos per month. Use product photography pipeline (`ai-product-photography.md`) for product/service shots; client provides team/location photos.

4. **Review responses — daily check.** All new reviews replied within 24 hours. Claude.ai prompt:
   > "Reply to this {{STAR_COUNT}}-star Google review for {{CLIENT_NAME}}. Thank by name, reference what they mentioned specifically, add a subtle keyword ('{{LOCAL_KEYWORD}}') naturally, invite return. For negative reviews: empathize, never argue, offer offline contact. Output reply only."

5. **Review acquisition campaign — monthly.** Generate a review request via Claude, sent via WhatsApp or email to recent customers (use the `whatsapp-broadcast-campaigns.md` or `email-sms-marketing.md` pipeline). Include the direct GBP review link.

6. **Q&A management — weekly.** Add new questions clients commonly ask; answer them as the business. This populates the Q&A section and boosts SEO.

7. **Monthly insights report — Claude.ai with GBP Insights export.** Searches, views, calls, direction requests, website clicks, top search queries, rank changes. Recommendations.

## Tools used
- Google Business Profile (web + mobile) — primary
- Claude.ai Project — copy, replies, audits, reports
- Local Falcon (optional) — rank tracking
- Whitespark or BrightLocal (optional) — citation building

## Time required
- Audit: 2-3 hours one-time
- Weekly posts: 1 hour
- Review replies: 30 min/week (varies by review volume)
- Photo/Q&A additions: 1 hour/month
- Report: 1 hour/month
- **Total: ~10-12 hours/month**

## What to send the client
- Audit Doc + completion checklist (month 1)
- Monthly insights report
- Confirmation that all reviews replied within SLA

## Quality check - CTO & COO review
- NAP consistent across GBP, website, and key directories
- Primary category correct (highest-impact lever)
- Review responses unique, never templated
- Posts include the local keyword
- Photos rotated — no months-old "fresh" content

## Tier availability
Scale (implicit under SEO/GEO/AEO). Standalone add-on AED 800/mo.
