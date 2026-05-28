# LinkedIn Growth & Management

## What the client gets
A managed LinkedIn presence for a personal account (founder/exec) or company page. Nova posts 3-5x per week, comments daily on industry posts, sends weekly connection batches, and runs warm DMs that turn into qualified meetings.

## What Worker does — step by step

1. **Profile audit & rewrite (one-time) — Claude.ai.** Get current profile screenshot + client positioning. Prompt:
   > "Audit this LinkedIn profile for {{CLIENT_NAME}} ({{ROLE}}, target audience: {{ICP}}). Rewrite headline, About, and Featured section. Headline: hook-first, under 220 chars. About: first 3 lines must hook (LinkedIn truncates). Target keywords: {{KEYWORDS}}. Output ready-to-paste markdown."

2. **Content batch — Claude.ai Project, weekly.** Use VOICE.md if it's a personal brand client. Prompt:
   > "Plan 4 LinkedIn posts for {{CLIENT_NAME}} this week. Mix: 1 personal story, 1 contrarian take, 1 data/insight, 1 client-result or how-to. Each post: hook line (must work as preview text under 220 chars), body with line breaks every 1-2 sentences for mobile, CTA, no hashtags or 3 max at end. Voice per VOICE.md."

3. **Carousels — Canva.** For data/insight posts. Generate slide copy in Claude first: *"Turn this post into an 8-slide carousel: slide 1 hook, slides 2-7 one point each with one supporting data point, slide 8 CTA."*

4. **Comment engagement — daily, 30 min, Claude.ai.** List 20 high-signal accounts the client wants to be visible to (CEOs, customers, partners). Each morning, open their recent posts, paste them in Claude:
   > "Write a comment on this LinkedIn post in {{CLIENT_NAME}}'s voice. Must add a specific insight or counterpoint — not 'great post!'. 1-3 sentences."
   Worker pastes the comment from the client's account.

5. **Connection requests — weekly batch, 50-100 per week.** Build target list in Sales Nav or manual search. Use Claude to write the connection note:
   > "Write a 2-line connection request from {{CLIENT_NAME}} to {{PROSPECT_NAME}} ({{PROSPECT_ROLE}} at {{PROSPECT_COMPANY}}). Reference one specific thing about them. Not salesy. Goal: accept."

6. **Warm DM sequence — only after connection accepted, never before.** Claude.ai per-prospect:
   > "Write the first DM to {{PROSPECT}} from {{CLIENT_NAME}}. They connected based on {{HOOK}}. Don't pitch. Open a conversation around {{TOPIC_OF_MUTUAL_INTEREST}}. End with a question."
   Track in a simple sheet: name, date connected, date messaged, replied y/n, status.

7. **Monthly report — Claude.ai.** Pull LinkedIn analytics + sheet metrics. Generate: impressions, profile views, connection accept rate, DM reply rate, meetings booked, top 3 posts.

## Tools used
- Claude.ai Project — profile rewrite, posts, comments, DMs, report
- LinkedIn Sales Navigator (recommended for prospecting) — search filters
- Canva — carousels
- Metricool or native LinkedIn — scheduling
- Google Sheet — DM pipeline tracking

## Time required
- Profile rewrite: 1.5 hours one-time
- Weekly content batch: 2 hours
- Daily comments: 30 min × 20 days = 10 hours/month
- Connection requests: 1 hour/week = 4 hours/month
- DM follow-ups: 2 hours/week = 8 hours/month
- Reporting: 1 hour/month
- **Total: ~30 hours/month**

## What to send the client
- Weekly scheduled posts visible in their account
- Monthly Doc: posts published, top performers, connections added, DMs sent, meetings booked
- Any inbound opportunities flagged within 24 hours

## Quality check - CTO & COO review
- Comments add value — none are "great post!" filler
- DM sequence is warm, not pitch-on-message-one
- Hashtag count is restrained (LinkedIn rewards 3 or fewer)
- Carousel slides are mobile-readable (large text)
- Posts have a clear hook in line 1

## Tier availability
Scale (LinkedIn included). Standalone add-on AED 1,500/mo.
