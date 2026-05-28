# Build: Analytics Dashboard Setup

## What the client gets
A custom analytics dashboard pulling data from every relevant source (ads, social, ecom, CRM, email) into a single live view. Auto-updating, with mobile + web access, branded to the client. Build price AED 4,500–22,000. Retainer AED 500–1,500/mo (see `analytics-dashboard-management.md`).

## What Worker does — step by step

1. **Source + KPI scoping — Claude.ai + client.** Define: what data sources, what KPIs matter (north-star + supporting metrics), how often updated, who views it, what's the decision the dashboard enables.

2. **Platform pick:**
   - **Looker Studio (free, recommended for most)** — fast, embeds anywhere, Supermetrics handles ad platform connectors
   - **Metabase / Apache Superset (self-hosted)** — if client needs to write custom SQL
   - **Triple Whale (ecom only)** — pre-built ecom dashboards
   - **Custom (React + Recharts on Cloudflare)** — only if budget supports it

3. **Data piping — Supermetrics / Funnel.io / Stitch / Fivetran.** Connect Meta Ads, TikTok Ads, Google Ads, GA4, Shopify, Klaviyo, HubSpot, etc. into either BigQuery (best) or directly into Looker.

4. **Schema design — Claude.ai + Claude Code.** Prompt:
   > "Design a star schema for {{CLIENT_NAME}}'s marketing data with these sources: {{LIST}}. Output: fact tables, dimension tables, aggregation tables, refresh cadence per table, joins. Plus SQL for each derived metric ({{KPI_LIST}})."

5. **Dashboard build — in Looker Studio or chosen platform.** Pages: Overview (north-star + top-line), Paid (channel + creative + audience), Organic Social (per-platform), Email/SMS, Site (traffic + conversion funnel), Revenue (cohorts + LTV if ecom). Use brand colors.

6. **Mobile-friendly layout — Looker has native; for custom, ensure responsive.**

7. **Permissions + sharing — restrict edit, allow view.** Generate share URL with passcode if sensitive.

8. **Alerting — set thresholds.** ROAS dips below X, CPA above Y, daily spend exceeds Z → email/Slack alert. Use Looker's built-in or n8n on top of BigQuery queries.

9. **Documentation — Claude.ai.** Generate a "How to read your dashboard" doc covering: what each metric means, what action to take when it moves, what's a healthy vs. unhealthy range.

10. **Handoff + train.**

## Tools used
- Looker Studio (primary) — visualization
- Supermetrics / Funnel.io — connectors
- BigQuery — warehouse (if building scale)
- Claude Code — schema, SQL, custom logic
- Claude.ai — KPI definitions + docs
- n8n — alerts

## Time required
- Scoping: 3-5 hours
- Connectors + schema: 8-15 hours
- Build: 15-30 hours
- Alerts + docs: 4-6 hours
- **Total: 30-60 hours**

## What to send the client
- KPI list for approval
- Dashboard URL + mobile-saved-as-app instructions
- "How to read your dashboard" PDF
- Loom walkthrough
- Handoff doc

## Quality check - CTO & COO review
- All connectors updating daily — no stale data
- KPI calculations match raw source (spot-check 3)
- Mobile rendering tested
- Alerts fire correctly (test by lowering threshold)
- Date ranges work (week / month / quarter / custom)
- Currency consistent

## Tier availability
Growth (basic). Scale (advanced + alerts). One-time build standalone (AED 4,500–22,000).
