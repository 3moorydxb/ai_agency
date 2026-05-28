# Paid Ads Management (Meta + TikTok)

## What the client gets
End-to-end paid advertising on Meta (Facebook + Instagram) and TikTok: account setup, pixel/CAPI install, creative production, campaign architecture, daily optimization, weekly reporting. Nova charges management fee + 10% of ad spend. Ad spend is paid by client directly to the platforms.

## What Worker does — step by step

1. **Account audit + setup — Meta Business Manager, TikTok Ads Manager.** Confirm pixel installed, CAPI/Events API live, conversions firing, domain verified, identity verified. Document everything in `AD_ACCOUNT.md`.

2. **Strategy doc — Claude.ai.** Prompt:
   > "Build a paid ads strategy for {{CLIENT_NAME}}, monthly budget AED {{BUDGET}}, goal: {{CONVERSION_GOAL}}. Define: campaign structure (TOF/MOF/BOF split), audiences (cold lookalikes, retargeting, custom), placements, bid strategy, KPI targets (CPM, CTR, CPC, CPA, ROAS). Output as a Notion-ready strategy doc."

3. **Creative production — see `ai-creative-ads.md`.** Always produce a creative batch before launching (minimum 6 variants per campaign for iteration).

4. **Campaign build — Meta Ads Manager + TikTok Ads Manager.** Worker builds in the platforms manually. For Meta: use Advantage+ where appropriate, manual audiences for retargeting. TikTok: Spark Ads from organic content where possible (higher CTR than dark posts).

5. **Daily monitoring — 15-30 min/day.** Worker checks: spend pacing, CPA vs. target, fatigue (frequency > 2 = swap creative), audience saturation. Pause underperformers > 1.5x target CPA after 100+ impressions.

6. **Weekly optimization — Claude.ai with last-7-day export.** Drop CSV in Claude:
   > "Analyze this paid performance data for {{CLIENT_NAME}}. By campaign and ad set, identify: top-spending winners (scale them), top-spending losers (kill them), creative fatigue signals, audience overlap, recommendations for next week. Output as a 1-page memo."

7. **Creative refresh — every 2 weeks.** 6 new creatives minimum.

8. **Monthly report — Claude.ai.** Spend, impressions, clicks, conversions, CPA, ROAS, top creative, top audience. Forecast for next month. Compare to MoM.

## Tools used
- Meta Business Manager + Ads Manager
- TikTok Ads Manager + Spark Ads
- Claude.ai Project — strategy, weekly memo, monthly report
- Triple Whale or Northbeam (recommended for ecom clients) — attribution
- Claude Code — bulk CSV analysis

## Time required
- Setup: 4-6 hours one-time
- Daily monitoring: 30 min × 22 = ~11 hours/month
- Weekly optimization + new creatives kickoff: 4 hours/week = 16 hours/month
- Reporting: 2 hours/month
- **Total: ~30-35 hours/month per client**

## What to send the client
- Weekly Loom + 1-page memo
- Monthly performance Doc
- Real-time dashboard access (see `analytics-dashboard-management.md`)
- Invoice for 10% of spend separately

## Quality check - CTO & COO review
- Pixel + CAPI firing correctly (events visible in Events Manager)
- No competitor name in copy unless permitted
- Creative iteration cadence honored (no campaign running > 2 weeks unchanged)
- Budget pacing within ±10% of plan
- ROAS or CPA hitting target — if not, what's the test plan
- Disclaimer compliance (especially for restricted verticals: finance, supplements)

## Tier availability
Growth (Meta + TikTok). Scale (all platforms). Standalone add-on AED 3,500/mo + 10% of ad spend.
