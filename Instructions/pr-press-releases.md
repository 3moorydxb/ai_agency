# PR & Press Releases

## What the client gets
Press release drafting + distribution + journalist outreach. Goal: media coverage in target publications (regional press, industry trade outlets, Tier-1 international media when warranted). Includes founder positioning + thought-leadership pitches.

## What Worker does — step by step

1. **PR strategy (one-time) — Claude.ai.** Prompt:
   > "Build a 6-month PR plan for {{CLIENT_NAME}}. Cover: news pegs they can credibly own (funding, launches, hires, data, awards), target outlets (Tier 1/2/3, regional, trade), 5 journalist relationships to build, founder thought-leadership angles, awards to apply for. Output as PR_PLAN.md."

2. **Press release drafting — Claude.ai.** Per announcement:
   > "Draft a press release for {{CLIENT_NAME}} announcing {{NEWS}}. Format: dateline city + date, headline (under 12 words, news-first), subheading (max 25 words), lead paragraph (who/what/when/where/why), 3 body paragraphs with quote from founder + supporting data, boilerplate, contact. Tone: news-first, no marketing fluff. Output ready for journalist distribution."

3. **Distribution — multi-channel:**
   - **Owned:** publish on client's news/blog page, send to email list
   - **Wire:** PR Newswire / Business Wire / Khaleej Times wire (regional)
   - **Journalist direct:** personal pitches to 10-20 target journalists per release. Claude drafts the pitch per journalist:
     > "Write a personal pitch to {{JOURNALIST_NAME}} at {{OUTLET}} for {{NEWS}}. Reference their recent article on {{TOPIC}}. Subject under 50 chars. Body under 100 words. Lead with the news, not background."

4. **Thought-leadership pipeline — quarterly.** Claude generates op-ed pitches and ghostwrites op-eds for the founder:
   > "Write a 700-word op-ed in {{FOUNDER}}'s voice (per VOICE.md) on {{TOPIC}}, suitable for {{OUTLET}}. Contrarian angle, original data or anecdote, takeaway readers can act on."

5. **Awards — annual.** Identify 5 relevant awards per year, prepare submissions. Per award, prompt Claude.ai:
   > "Draft a submission for {{CLIENT_NAME}} to the {{AWARD_NAME}} ({{CATEGORY}}). Inputs: company background, key metrics for the period (revenue / growth / customer wins / hires — `{{METRICS}}`), founder bio, judging criteria from the award URL. Output sections per criterion: short narrative answer (within word limit), 3 supporting data points, 1 quotable line. Include suggested supporting docs to attach (testimonials, press, awards). Tone: confident, evidence-led, no superlatives without proof."

6. **HARO / Connectively / Featured — daily.** Worker pastes the day's journalist queries into Claude.ai with this prompt:
   > "Here are today's HARO/Connectively/Featured journalist queries (pasted below). Filter for matches to {{FOUNDER_NAME}}'s expertise: {{EXPERTISE_AREAS}}. For each match: (1) why it fits (1 line), (2) draft a 100-150 word founder response in their voice per VOICE.md with one specific data point or anecdote, (3) outlet credibility score (1-5), (4) deadline. Skip any query that needs a stat or claim {{FOUNDER_NAME}} can't credibly own. Output as a ranked table; we send the top 3."
   Worker sends the approved drafts from the founder's mailbox.

7. **Media coverage tracker — Sheets.** Log every mention, link, sentiment, reach.

8. **Monthly report — Claude.ai.** Coverage placements, total reach, sentiment, share of voice vs. competitors, upcoming releases.

## Tools used
- Claude.ai Project — releases, pitches, op-eds, monitoring
- Muckrack / Cision / Roxhill — journalist database
- HARO / Connectively / Featured — journalist requests
- PR Newswire / Business Wire — wire distribution
- Brand24 — coverage monitoring

## Time required
- Per release (draft → distribute → follow-up): 8-12 hours
- 1 release/month + 1 op-ed/month + daily HARO: ~25-30 hours/month
- Award applications (seasonal): batched 10-15 hours per cycle

## What to send the client
- Drafts for approval before distribution
- Coverage tracker Sheet (live)
- Monthly report

## Quality check - CTO & COO review
- News peg is real and credible (no fake "milestone" announcements)
- Founder quotes pre-approved
- No facts unsourced
- Journalist pitches personalized per recipient
- Embargoes respected

## Tier availability
Add-on. [NEEDS CLARIFICATION: not in PDF price list. Website has `pr-press-releases.html`. Suggest AED 4,000-8,000/mo depending on cadence. Confirm with Omar.]
