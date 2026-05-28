# Build: Affiliate / Referral Program

## What the client gets
A live affiliate or referral program: tracking links, commission tiers, payout system, affiliate dashboard, marketing materials for affiliates, recruitment landing page, and onboarding sequence. For ecom: Shopify Collabs / Refersion / Goaffpro. For SaaS: Rewardful / FirstPromoter / PartnerStack.

## What Worker does — step by step

1. **Program design — Claude.ai.** Prompt:
   > "Design an affiliate program for {{CLIENT_NAME}}. Cover: target affiliates (creators / publishers / customers / partners), commission structure (% / flat / tiered / recurring), cookie duration, payment threshold, payout schedule, terms (exclusivity, brand bidding, IP rules), legal disclaimers, recruitment plan. Output as `AFFILIATE_PROGRAM.md`."

2. **Platform pick:**
   - **Ecom (Shopify):** Shopify Collabs (free, native) or Refersion (premium, more features)
   - **SaaS:** Rewardful or FirstPromoter
   - **General:** Tapfiliate or Tolt
   - **Custom build with Claude Code** only if budget supports — typically not worth it for v1

3. **Set up — within chosen platform.** Configure: commission rates, tracking, payout method, affiliate dashboard branding, T&Cs.

4. **Marketing materials — Claude.ai.** Build affiliate-ready assets:
   > "Create a Notion-style affiliate resource hub for {{CLIENT_NAME}}. Sections: program overview, commission rates, how to apply, brand guidelines, approved messaging (3 sample posts per platform), banners + creative assets folder, FAQ, payment timing, contact for help."

5. **Recruitment landing page — `build-landing-page.md`** pattern. Sell the affiliate program to potential affiliates. Form → affiliate platform application.

6. **Outreach campaign — Claude.ai.** Identify 50-100 potential affiliates (creators, customers, niche publishers). Send personalized invites:
   > "Write an affiliate program invite to {{CONTACT}}. Reference why they're a good fit. Lead with what they earn. Make application 1 click."

7. **Customer-referral overlap — for ecom, auto-enroll happy customers.** Trigger: review > 4 stars + repeat purchase → invite to referral program. Claude writes the invite email.

8. **Tracking + attribution.** Verify tracking pixels fire, last-click attribution accurate, cross-device handled. Test by simulating a full purchase flow with affiliate link.

9. **Reporting.** Top affiliates, conversion rate per affiliate, average order value via affiliate, payout liability.

10. **Handoff doc + first-month review.**

## Tools used
- Shopify Collabs / Refersion (ecom) / Rewardful / FirstPromoter / PartnerStack / Tapfiliate — affiliate platform
- Claude.ai Project — program design, marketing materials, outreach
- Stripe / Wise — payouts
- Notion or website — affiliate resource hub
- Claude Code — if any custom logic needed

## Time required
- Program design: 6-10 hours
- Platform setup: 6-10 hours
- Marketing materials: 8-12 hours
- Recruitment LP: 8-12 hours
- Outreach campaign: 6-10 hours
- **Total: 35-55 hours**

## What to send the client
- Program design doc for sign-off
- Affiliate resource hub URL
- Recruitment LP URL
- Outreach tracker (Sheet)
- Loom walkthrough
- Handoff doc
- Optional ongoing management proposal

## Quality check - CTO & COO review
- Test purchase through affiliate link tracks correctly
- Payout flow tested with real payment
- T&Cs reviewed by legal
- Tracking handles refunds (no payout on refunded orders)
- No conflict with paid ads brand-bidding rules

## Tier availability
One-time build standalone.

Pricing: Contact for pricing — quoted case-by-case based on scope. The Nova website lists this service as "Contact for pricing" rather than a published number. Standard quote turnaround: 24h after a scoping call.
