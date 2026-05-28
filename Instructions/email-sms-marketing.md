# Email & SMS Marketing (Flows + Campaigns)

## What the client gets
Automated email + SMS flows (welcome, abandoned cart, post-purchase, win-back) plus weekly broadcast campaigns. Built on Klaviyo (ecom) or HubSpot/Mailchimp (B2B). Goal: 25-40% of total revenue from owned channels.

## What Worker does — step by step

1. **Audit + ESP setup — Klaviyo or chosen tool.** Confirm: list health, deliverability domain (DKIM, SPF, DMARC), Shopify/store integration, segments, list of existing flows. Document gaps in `EMAIL_AUDIT.md`.

2. **Core flow build (one-time, then maintain) — 3 flows for Foundation, more for Growth:**
   - Welcome (4-6 emails over 14 days)
   - Abandoned cart (3 emails over 24h)
   - Post-purchase (4-6 emails over 30 days — review request, cross-sell, repeat purchase nudge)
   - Browse abandonment (Growth+)
   - Win-back 60/90 days (Growth+)
   - SMS variants of abandoned cart + welcome (Growth+)

3. **Email copy — Claude.ai Project.** Per email:
   > "Write the {{N}}th email in {{CLIENT_NAME}}'s {{FLOW_TYPE}} flow. Goal: {{GOAL}}. Voice per BRAND_BIBLE. Subject line (under 50 char), preview text (under 90 char), body (max 200 words, conversion-focused, one CTA). Plus 4 subject line variants for A/B."

4. **Design — Klaviyo's editor or Figma → HTML.** Use the brand template established at onboarding. Mobile-first. Single CTA above the fold.

5. **Weekly campaign — Claude.ai.** Plan:
   > "Plan this week's broadcast for {{CLIENT_NAME}}. Theme: {{THEME}}. Segment: {{SEGMENT}}. Goal: {{GOAL}}. Output: subject (4 variants), preview, body, image direction, send time (based on past open data), exclusion rules. Include 1 SMS variant (under 160 char with link)."

6. **Send + monitor.** Worker schedules sends, monitors deliverability (bounce rate < 2%, complaint rate < 0.1%). Pauses sends if metrics deteriorate.

7. **Flow optimization — monthly, Claude.ai.** Drop in flow performance export:
   > "Analyze each step of this flow. Identify lowest open rate (subject issue), lowest click rate (copy/CTA issue), drop-off points. Recommend 5 A/B tests for next month."

8. **Monthly report — Claude.ai.** Revenue from email/SMS, % of total revenue, list growth, top campaigns, deliverability metrics.

## Tools used
- Klaviyo (ecom) / HubSpot or Mailchimp (B2B) — ESP
- Postscript or Klaviyo SMS — SMS sending
- Claude.ai Project — copy, planning, optimization, reports
- Figma — custom email templates (optional)
- Mailgenius or Glockapps — deliverability testing

## Time required
- Flow build: 8-12 hours per flow
- Weekly campaign: 2-3 hours
- Monthly: 4 flows running + 4 campaigns + reporting = ~25-30 hours/month

## What to send the client
- Flow build screenshots + Loom walkthrough on completion
- Weekly campaign preview link (Klaviyo's preview URL) for sign-off before send
- Monthly revenue + deliverability report

## Quality check - CTO & COO review
- Every email mobile-rendered correctly
- One CTA per email, above the fold
- Subject + preview tell a coherent story
- Unsubscribe link + physical address present (legal)
- Send segmentation excludes recent purchasers from promo blasts
- SMS messages have STOP / opt-out language

## Tier availability
Foundation (3 flows + 1 weekly campaign). Growth, Scale (expanded). Standalone add-on AED 2,500/mo.
