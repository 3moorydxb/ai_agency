# AI Content Engine (Blogs, Scripts, Copy)

## What the client gets
A monthly pipeline of long-form written content: SEO blog posts, video scripts, email copy, ad copy, landing page copy, or product descriptions. Foundation tier includes 4 pieces/mo. Standalone retainer is broader scope.

## What Worker does — step by step

1. **Topic ideation — Claude.ai Project.** Maintain one Project per client with their `BRAND_BIBLE.md`, target keywords (from Ahrefs/SEMrush export), competitor blog list, and previous content. Prompt:
   > "Generate 8 blog post ideas for {{CLIENT_NAME}} this month optimized for {{TARGET_KEYWORDS}}. For each: working title, primary keyword, secondary keywords, search intent (informational / commercial / transactional), target word count, content gap vs competitors, suggested CTA. I will pick 4. Output as markdown table."

2. **Outline phase — Claude.ai, per chosen piece.** Prompt:
   > "Outline a {{WORD_COUNT}}-word blog post titled '{{TITLE}}' for {{CLIENT_NAME}}. Target keyword: {{KEYWORD}}. Search intent: {{INTENT}}. Structure: H1, intro hook, 5-7 H2 sections with H3 subsections, FAQ block (5 questions from People Also Ask), and CTA. Per section, list bullet points of what to cover. Cite the kind of sources I should pull in."

3. **Research pass — Claude.ai with web search OR Claude Code with WebFetch.** For factual claims, statistics, quotes — search live sources. Save URLs.

4. **Draft — Claude.ai.** Prompt:
   > "Write the full blog post from this outline. Voice: {{BRAND_VOICE}}. Avoid AI-tells (no 'in today's fast-paced world', no em-dashes everywhere, no 'it's worth noting'). Use the data from these sources: {{URLS}}. Add internal links to {{CLIENT_BLOG_URLS}}. Output with proper H1/H2/H3 markdown."

5. **Edit pass — Claude.ai, separate session.** Prompt:
   > "You are a brutal editor. Review this draft. Flag every sentence that sounds AI-generated, every empty paragraph, every claim without evidence, every weak verb. Rewrite the weakest 20% line-by-line. Keep voice intact."

6. **SEO check — Surfer SEO or Claude.ai with the SERP top 10 pasted in.** Verify keyword density, headings hit target keywords, meta description under 160 chars, title tag under 60 chars.

7. **Format + publish — depends on client CMS.** WordPress: paste into Gutenberg, add featured image (Midjourney brief in Claude), set meta. Shopify blog: same. Webflow: paste into CMS collection. Webflow/Framer: client publishes if they prefer to keep CMS access closed.

## Tools used
- Claude.ai Project — ideation, outline, draft, edit
- Ahrefs or SEMrush — keyword data (or use Google Keyword Planner free)
- Surfer SEO — SEO scoring (optional)
- Midjourney — featured images
- Client CMS (WordPress / Shopify / Webflow / Framer) — publish

## Time required
- Ideation: 30 min/month
- Per piece (outline → published): 2.5-3.5 hours
- 4 pieces/month: ~12-14 hours
- Standalone retainer with broader scope: 20-25 hours/month

## What to send the client
Google Doc draft for approval before publishing. Once approved, publish to the client's CMS and send a Loom + URL. Monthly recap: pieces published, indexed, early traffic data.

## Quality check - CTO & COO review
- Read the first paragraph aloud — does it sound human?
- No em-dash overuse, no AI cadence ("not just X but Y" overuse)
- Every statistic has a source link
- Internal links to client's other content present
- Meta title + description set, under char limits
- Featured image on-brand

## Tier availability
Foundation (4/mo), Growth, Scale. Standalone add-on AED 1,800/mo.
