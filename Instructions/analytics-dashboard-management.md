# Analytics Dashboard Management

## What the client gets
A single live dashboard pulling data from all the client's marketing channels (ads, social, email, web, CRM) — updated daily, available on web/mobile. Plus weekly insights and monthly strategy memo from the data.

## What Worker does — step by step

1. **Source mapping (one-time) — Claude.ai.** List every data source the client cares about: Meta Ads, TikTok Ads, Google Ads, GA4, Shopify, Klaviyo, HubSpot, etc. Confirm API access or read-only credentials.

2. **Build or update the dashboard — see `build-analytics-dashboard.md`** for the build. This management retainer assumes the dashboard exists.

3. **Daily sanity check — 10 min.** Worker confirms all sources updated, no broken connectors. Flag stale data immediately.

4. **Weekly insight memo — Claude.ai.** Drop the past 7 days' export in:
   > "Analyze {{CLIENT_NAME}}'s marketing data for this week. Identify: 3 trends (positive or negative), 3 anomalies (with hypothesis), 3 recommendations for next week. Tone: confident, data-led, action-oriented, 1 page max."

5. **Monthly strategy memo — Claude.ai.** Same but over 30 days, plus MoM comparison and forward forecast.

6. **New metric requests — adapt the dashboard as client KPIs evolve.** Use Claude Code to add chart blocks, modify queries, or add filters.

7. **Stakeholder views — duplicate dashboard with permissions for client's investors / board if requested.**

## Tools used
- Looker Studio (free, recommended for SMB) — primary visualization
- Supermetrics or Funnel.io — data piping (handles Meta/TikTok/Google connectors)
- Triple Whale (ecom) — alternative if heavy Shopify
- Whatagraph / Databox — alternative
- Claude.ai Project — insights, memos
- Claude Code — dashboard build + modifications

## Time required
- Daily check: 10 min × 22 = ~4 hours/month
- Weekly memo: 1.5 hours × 4 = 6 hours/month
- Monthly memo: 2 hours
- Adjustments: 2-3 hours/month
- **Total: ~14-16 hours/month**

## What to send the client
- Dashboard URL (always live)
- Weekly memo PDF delivered every Monday 9am client-time
- Monthly strategy memo

## Quality check - CTO & COO review
- All data sources updating daily — no stale data shown
- KPIs labeled clearly with definitions (no confusion about what's measured)
- Memo recommendations are concrete (not "consider testing more")
- MoM and YoY comparisons present when relevant
- No vanity-only metrics in main view

## Tier availability
Growth, Scale. Standalone add-on AED 1,500/mo (requires dashboard to exist — buildout priced separately).
