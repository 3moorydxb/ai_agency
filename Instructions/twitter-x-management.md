# X (Twitter) Management (X-Only)

## What the client gets
Focused X-only management for a founder, operator, or brand: daily posts and weekly long-form threads written in the client's locked voice, profile + pinned-tweet optimisation, and reply/quote-tweet plays that compound reach. For clients who want to own a topic on the public-internet timeline where credibility builds through writing. No bot growth, no engagement pods — steady writing on a calendar.

## What Worker does — step by step

1. **Profile audit & rewrite (one-time) — Claude.ai.** Get current profile screenshot + client positioning. Prompt:
   > "Audit this X (Twitter) profile for {{CLIENT_NAME}} ({{ROLE}}, target audience: {{ICP}}). Rewrite: bio (under 160 chars, hook-first, one clear what-I-do + who-for line), name field (name + 2-3 word descriptor), and a pinned-tweet concept that states the client's core point of view. Recommend header image direction. Output ready-to-paste."

2. **Content batch — Claude.ai Project, weekly.** Use the client's `VOICE.md` (locked brand voice). X is text-led — writing discipline, not design. Prompt:
   > "Plan 7 standalone X posts for {{CLIENT_NAME}} this week. Mix: 2 sharp opinions/contrarian takes, 2 practical how-to or insight posts, 1 personal/behind-the-scenes, 1 question to the audience, 1 result or proof point. Each post: under 280 chars, hook in the first line, no thread. Voice per VOICE.md. No hashtags (X buries them). Output one post per code block."

3. **Long-form thread — Claude.ai Project, weekly (1x).** The reach engine for X. Prompt:
   > "Write one X thread (7-12 tweets) for {{CLIENT_NAME}} on {{TOPIC the client wants to own}}. Tweet 1 is the hook and must stand alone (it's what gets reposted) — promise a specific payoff. Each following tweet = one idea, under 280 chars, line breaks for skim-reading. Final tweet: soft CTA (follow for more / link / reply prompt). Voice per VOICE.md."

4. **Reply engagement — daily, 30 min, Claude.ai.** Build a list of 15-20 high-signal accounts in the client's niche (peers, customers, larger accounts the client wants visibility next to). Each morning open their recent posts, paste into Claude:
   > "Write a reply to this X post in {{CLIENT_NAME}}'s voice. Must add a specific insight, data point, or counterpoint that earns a profile click — never 'great post' or emoji-only. 1-2 sentences, no link unless directly relevant."
   Worker posts the reply from the client's account. Early replies on a larger account's fresh post are the cheapest reach on X.

5. **Quote-tweet plays — 2-3x per week.** Find a post in the niche worth building on. Claude:
   > "Write a quote-tweet for {{CLIENT_NAME}} reacting to this post. Add a distinct angle or extend the idea — don't just agree. Under 280 chars, hook-first. Voice per VOICE.md."

6. **Scheduling & publishing.** Load the week's standalone posts and the thread into Typefully (best for X threads) or Metricool. Stagger posts across peak windows (GST: 8-9am, 1pm, 7-9pm). Threads post manually or via Typefully to preserve formatting. Replies and quote-tweets are always done live from the account, never scheduled.

7. **Monthly report — Claude.ai.** Pull X analytics + the engagement sheet. Generate: impressions, profile visits, follower growth, top post by impressions, top thread by reposts/bookmarks (the truest X signal), reply-driven profile clicks, and any inbound conversations or DMs sparked.

## Tools used
- Claude.ai Project — profile rewrite, posts, threads, replies, quote-tweets, report
- Typefully — thread drafting + scheduling (preserves thread formatting)
- Metricool or native X scheduler — standalone post scheduling
- X Analytics (native) — impressions, profile visits, follower growth
- Google Sheet — reply/quote-tweet target list + inbound tracking

## Time required
- Profile rewrite: 1.5 hours one-time
- Weekly content batch (7 posts + 1 thread): 2.5 hours
- Daily replies: 30 min × 20 days = 10 hours/month
- Quote-tweets: ~1.5 hours/month
- Scheduling: 1 hour/week = 4 hours/month
- Reporting: 1 hour/month
- **Total: ~24 hours/month**

## What to send the client
- Weekly scheduled posts + the thread visible in their account (or in Typefully for approval if the client wants a review gate)
- Monthly Doc: posts published, top post, top thread, follower growth, profile visits, inbound flagged
- Any inbound opportunity (DM, reply from a relevant account) flagged within 24 hours

## Quality check - CTO & COO review
- Every post has a hook in line 1 — no slow openers (X gives ~1 line before the scroll)
- Thread tweet 1 stands alone and earns the repost
- Replies add value — none are "great post!" or emoji-only filler
- No hashtags stuffed into posts (X buries hashtag-heavy content)
- Voice matches `VOICE.md` — no generic LinkedIn-speak bleeding into X (X rewards a sharper, more conversational register)
- No bot growth, follow-for-follow, or engagement-pod behaviour — ever

## Tier availability
Standalone add-on under Social Media Management — 1 Platform. See `platform-management.md`. AED 1,500/mo.
