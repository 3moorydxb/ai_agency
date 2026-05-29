# PROMPTS_KB.md — Reusable Claude prompts library

> Library of cross-service Claude prompts. Service-specific prompts live in
> `Instructions/<service>.md`. This file is for prompts that apply across
> many services or to internal Nova operations.
>
> Format per entry: **Title** · when to use · which Claude surface · the prompt
> (verbatim, copy-pasteable, with `{{PLACEHOLDERS}}`) · expected output shape.

---

## Research

### 1. Niche teardown
**When:** before pitching a prospect or onboarding a new client. Produces a 1-page snapshot of their niche.

**Surface:** Claude.ai project (chat) — paste into a fresh chat with web access enabled.

**Prompt:**
```
You are a Dubai-based marketing strategist. Produce a 1-page niche teardown
for the following business:

Business: {{CLIENT_NAME}}
Niche: {{NICHE}}
Location: {{CITY, COUNTRY}}
Website (if any): {{URL}}

Output sections, in this exact order:

1. Niche in one sentence
2. Top 3 competitors in {{CITY}} — name, IG handle, follower count, what they post about
3. What the niche's customers are searching for on Google (5 specific queries with intent)
4. What the niche's customers are searching for on TikTok / Instagram (5 query patterns)
5. 3 content angles that are underused in this niche locally
6. 3 angles that are overused (and should be avoided)
7. Local nuance: language mix (EN/AR/Hindi/Urdu), price sensitivity, decision-makers, seasonality
8. One question I should ask the prospect on the discovery call that will reveal whether they're a good fit for Nova

No filler. No "certainly". One screen of text.
```

**Output:** ~600-word structured brief. Goes into the per-client KB.

---

### 2. Competitor account audit
**When:** onboarding a client and they name a specific competitor whose growth they envy.

**Surface:** Claude.ai (chat) with web access. Or paste in screenshots if web access doesn't reach the platform.

**Prompt:**
```
Audit this competitor's social media presence and find what's working:

Competitor: {{HANDLE}} on {{PLATFORM}}
Time window: last 60 days

Produce:
- 5 posts that outperformed the rest (engagement rate or comment volume) — describe each in one line
- The hook formula across those 5
- The visual aesthetic in one sentence
- Posting cadence (per week)
- 3 patterns we can borrow without ripping off
- 3 things they do that we should NOT copy and why
- One specific tactical play we can ship for our client in week 1

Concrete and specific. Numbers where possible.
```

**Output:** ~400 words. Used to seed the first month of content for the client.

---

## Content generation

### 3. Caption variant set (3 styles)
**When:** the Worker has a clip / image and needs 3 caption options for the client to pick.

**Surface:** Claude Code (project-level system prompt with brand voice loaded) OR Claude.ai project.

**Prompt:**
```
Generate 3 caption variants for an Instagram post.

Client: {{CLIENT_NAME}}
Brand voice: {{1-2 SENTENCES FROM CLIENT KB}}
Banned words: {{LIST FROM CLIENT KB}}
Post type: {{photo / reel / carousel}}
Topic: {{WHAT THE POST IS ABOUT}}
Goal: {{awareness / save / DM / click}}

Output three variants:
A) Short (≤80 chars, hook + CTA)
B) Medium (~150 chars, hook + value + CTA)
C) Hook-heavy (line break after the hook, then 3 lines of value, then CTA)

For each, include the approved hashtag stack on a new line. No fluff. No emojis unless brand voice requires them.
```

**Output:** 3 captions, ready to paste into Later / Buffer / Meta scheduler.

---

### 4. 7-day scheduling calendar
**When:** the Worker has approved posts and needs a publish schedule that hits the right local times.

**Surface:** Claude Code or Claude.ai.

**Prompt:**
```
Build a 7-day posting calendar.

Client: {{CLIENT_NAME}}
Platform: {{IG / TikTok / YouTube Shorts / X / LinkedIn}}
Posts to schedule (numbered list with brief description and asset link):
{{LIST}}

Client audience timezone: {{Asia/Dubai or other}}
Audience peak hours (if known): {{e.g. 12:00-14:00 and 19:00-22:00 weekdays, 11:00-15:00 Fri-Sat}}

Output a CSV with these columns (no other text, no markdown):
date,day_of_week,time_local,platform,post_title,asset_link,caption_variant

Use ISO 8601 dates. Use 24h time. Spread posts across the week — don't stack two on one day unless the brief says so. If no peak-hour data, default to 12:00 and 19:00.
```

**Output:** CSV ready to paste into the scheduler.

---

### 5. Hook ladder (10 variations)
**When:** writing video content and the first hook isn't landing.

**Surface:** Claude.ai (chat).

**Prompt:**
```
I have a video about {{TOPIC}} for {{NICHE}}. Current hook: "{{HOOK}}".

Give me 10 hook variations that target 3-second retention on TikTok / Reels. Mix:
- 3 question hooks (start with "What if...", "Why does...", "How come...")
- 3 statement hooks (one bold claim, max 8 words)
- 2 contrarian hooks ("Everyone says X. They're wrong.")
- 2 numbered hooks ("3 things nobody tells you about...")

Output the 10 lines, numbered. No commentary. After the list, pick your top 3 and say why in one sentence each.
```

**Output:** 10 hooks + a top-3 pick.

---

## Customer comms

### 6. Discovery call follow-up
**When:** after a discovery call, send a recap + tier recommendation + next step.

**Surface:** Claude.ai (chat) — paste call notes.

**Prompt:**
```
Draft a follow-up message after a Nova Agency discovery call.

Call notes (raw):
{{NOTES}}

Tier I'm recommending: {{Launch / Spark / Foundation / Growth / Scale}}
Reason in one sentence: {{WHY}}

Output:
1. A WhatsApp message (≤150 words) — friendly, direct, no buzzwords, recap the 2-3 things they said matter most, name the tier with the price (AED X/mo), say what week-1 looks like, end with one clear question to confirm the next step.
2. An email version of the same message (≤200 words, slightly more formal, subject line included).

No "I hope this finds you well". No corporate filler.
```

**Output:** WhatsApp + email draft, ready to review and send.

---

### 7. Slow-payer nudge (escalation ladder)
**When:** invoice is N days overdue.

**Surface:** Claude.ai (chat).

**Prompt:**
```
Write the next message in the payment-reminder sequence.

Client: {{CLIENT_NAME}}
Amount due: AED {{AMOUNT}}
Days overdue: {{N}}
Previous messages sent: {{LIST: dates + 1-line summary of each}}
Relationship status: {{paying customer / new / strained}}

Tone progression by days overdue:
- 1-3 days: warm reminder, assume an oversight
- 4-10 days: direct, mention service-pause policy at day 15
- 11-20 days: formal, schedule the pause, copy {{AM_NAME}}
- 21+ days: final notice, pause is in effect, escalation to legal at day 30

Match the right rung for {{N}} days. ≤120 words. WhatsApp format.
```

**Output:** one nudge ready to send.

---

## Internal ops

### 8. Weekly status report (per client)
**When:** Friday afternoon, every client gets a status report.

**Surface:** Claude Code (project with client KB loaded) — most efficient.

**Prompt:**
```
Generate the weekly status report for client {{CLIENT_NAME}}.

Inputs:
- Posts published this week: {{LIST WITH LINKS AND PERFORMANCE NUMBERS}}
- Deliverables shipped: {{LIST}}
- Open items: {{LIST FROM CLIENT KB OPEN ITEMS}}
- Next week's planned posts / shoots / launches: {{LIST}}
- Notable wins or losses with numbers: {{LIST}}

Output a Loom script (≤2 minutes when read aloud) + a written summary (≤200 words). The written summary goes into the client's Drive; the Loom script is what the AM reads on camera.

Open with the most important number of the week. Close with the one thing we need from the client.
```

**Output:** Loom script + written summary.

---

### 9. Service description rewrite (when something feels generic)
**When:** auditing the website or instruction files and a service description reads as template marketing fluff.

**Surface:** Claude.ai (chat).

**Prompt:**
```
Rewrite this Nova Agency service description to be specific, opinionated, and Dubai-grounded.

Current copy:
"{{COPY}}"

Constraints:
- 70-95 words
- Answer three things: what is it, what does it produce, who is it for
- Include one concrete Dubai-specific insight (Arabic content, WhatsApp behaviour, Ramadan cadence, GCC nuance, etc.)
- No "we are passionate". No "transform your business". No "results-driven".
- Voice: direct, founder-written, one strong opinion

Output the new copy only.
```

**Output:** replacement copy.

---

### 10. Bug / regression triage (internal)
**When:** something breaks on the live site and the AM needs to know if it's a 5-min fix or a "wait for the engineer" issue.

**Surface:** Claude Code (in the repo).

**Prompt:**
```
Triage this Nova website issue:

Symptom (what the user sees): {{SYMPTOM}}
Page(s) affected: {{URLS}}
First noticed: {{TIME}}
What changed recently: paste output of `git log --oneline -10`

{{GIT_LOG}}

Output:
1. Severity: cosmetic / degraded / broken
2. Most likely root cause (one sentence)
3. The single most useful file to read first (path)
4. The minimal command to reproduce locally (or "not reproducible from code alone")
5. Estimated fix effort: <15 min, <1 hour, >1 hour

Be ruthless about scope. If it's cosmetic, say so. Don't pad.
```

**Output:** triage card. Goes into the engineer's queue with a clear priority.

---

## How to add a new prompt

1. Pick a clear title — verb-first if it's an action, noun-first if it's a reference.
2. Write the *when* in one sentence.
3. Name the Claude surface (Claude.ai chat vs. Claude.ai project vs. Claude Code vs. API).
4. Paste the prompt verbatim. Use `{{PLACEHOLDERS}}` for variables.
5. Describe the expected output in one line.

If a prompt becomes service-specific, move it to that service's instruction file. This file stays cross-cutting.
