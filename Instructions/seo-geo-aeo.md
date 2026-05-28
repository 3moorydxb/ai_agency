# SEO + GEO + AEO Combined

## What the client gets
Traditional SEO (rank on Google), GEO (Generative Engine Optimization — rank in ChatGPT, Perplexity, Gemini AI Overviews), and AEO (Answer Engine Optimization — featured snippets, People Also Ask). Output: organic traffic growth + AI assistant citations.

## What Worker does — step by step

1. **Audit (one-time) — Claude.ai + Ahrefs / SEMrush.** Drop in: technical audit data (Screaming Frog crawl), backlink profile, current rank report, competitor content audit, page speed (PageSpeed Insights). Claude prompt:
   > "Build a 90-day SEO/GEO/AEO action plan for {{CLIENT_NAME}}. Cover: 10 technical fixes (priority-ranked), 20 content opportunities (keyword + intent + estimated traffic), 5 link-building targets, GEO opportunities (ChatGPT/Perplexity citation gaps), AEO opportunities (PAA + featured snippet targets). Output as `SEO_PLAN.md`."

2. **Technical fixes — Claude Code on the website repo.** Page speed, schema, sitemap, broken links, canonicals, internal linking. For non-Nova-built sites: deliver a fix doc the client's developer implements. For Nova-built sites: implement directly.

3. **Content pipeline — see `ai-content-engine.md`.** SEO content is the same pipeline but with stricter keyword targeting, schema markup, and entity coverage.

4. **GEO — specific tactics.** [Key insight: GEO is about being citation-worthy by AI engines.]
   - Publish original research / unique data (LLMs cite primary sources)
   - Create comparison content that LLMs reference for "X vs Y" queries
   - Build Wikipedia-style entity pages on owned domain
   - Get cited on Reddit, Quora, and forums LLMs train on
   - Claude.ai prompt:
     > "For {{KEYWORD}}, simulate what ChatGPT, Perplexity, and Gemini currently return. Identify the sources they cite. Find 3 gaps {{CLIENT_NAME}} could fill with original content that would likely get cited. Output as a brief per opportunity."

5. **AEO — featured snippets + PAA.** Per target keyword:
   > "Write the perfect 40-60 word featured snippet for the query '{{QUERY}}'. Plus 5 PAA questions and 40-60 word answers each, formatted with proper HTML schema (FAQPage). Output ready to embed."

6. **Backlinks — Claude.ai + manual outreach.** Generate guest post pitches, broken-link replacement opportunities, HARO/Connectively-style pitches via Claude. Send manually.

7. **Monthly rank + traffic tracking — Ahrefs + GSC + LLM citation tracking tool (Profound, Otterly, or manual Claude.ai checks).**

8. **Monthly report — Claude.ai.** Organic traffic, rank movements, featured snippets won, LLM citations earned, backlinks added, technical fixes shipped, next month plan.

## Tools used
- Ahrefs or SEMrush — keyword + rank + backlinks
- Google Search Console — owned data
- Screaming Frog — technical crawl
- PageSpeed Insights / WebPageTest — performance
- Profound / Otterly — LLM visibility (or manual Claude checks)
- Claude.ai Project — audit, planning, content, GEO/AEO strategy
- Claude Code — technical fixes on Nova-built sites

## Time required
- Audit: 8-12 hours one-time
- Monthly: 30-40 hours (content + technical + outreach + reporting)

## What to send the client
- 90-day plan (month 1)
- Monthly traffic + rank report
- Live Google Sheet with content pipeline + status
- LLM citation log

## Quality check - CTO & COO review
- Core Web Vitals green
- Schema validates (Rich Results Test)
- Content E-E-A-T signals present (author bios, expertise markers)
- LLM citation tracking actually happening, not skipped
- Backlinks from real sites, not PBNs or paid networks

## Tier availability
Scale (bundled). Standalone add-on AED 4,000/mo.
