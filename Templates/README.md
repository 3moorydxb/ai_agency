# Templates/

> Every deliverable Nova builds gets saved here. Future projects start by
> copying from this folder, not from scratch. The point: reuse compounds,
> from-scratch does not.

## What goes where

| Folder | What it holds |
|---|---|
| `flyers/` | Static promo flyers — Snap, IG, TikTok, web banner. Standalone HTML/CSS. |
| `websites/` | Reusable website **components** and full-site templates — hero blocks, pricing tables, navbars, footers, full landing-page scaffolds. |
| `chatbots/` | Chatbot code — full system prompts, Pages Function templates, widget UI, RAG ingest scripts. |
| `captions/` | Caption packs — themed sets ready to drop into a client's calendar. Markdown files, one pack per file. |

## File naming

Format: `[platform]-[format]-[style].[ext]`

Examples:
- `snapchat-9x16-dark.html`
- `snapchat-9x16-blue-rental.html`
- `instagram-1x1-product.html`
- `tiktok-9x16-text-hook.html`
- `website-hero-glassmorphism.html`
- `chatbot-rag-shopify.js`
- `captions-luxury-watches.md`

Rules:
- Lowercase, dash-separated.
- `[platform]` first so listing groups naturally by surface.
- `[format]` second (aspect ratio for visual assets, function for code).
- `[style]` last — short, descriptive, one or two words.

## Two versions per deliverable: real + template

For every deliverable, save **both** the original-with-client-content and a
placeholder version next to it:

- `[name].html` — the **real delivered version** with the actual client
  content, branding, and prices. Acts as a reference for what shipped
  and what worked.
- `[name]-template.html` — the **placeholder version** for reuse. Same
  layout and styling, with all client-specific text replaced by
  `{{PLACEHOLDERS}}` and a comment block at the top of the file listing
  every placeholder and what it means.

Examples:
- `snapchat-9x16-blue-rental.html` — original UBJS Spark Trixx flyer
- `snapchat-9x16-blue-rental-template.html` — placeholder version, ready for the next rental client
- `snapchat-9x16-purple-rental.html` — original UBJS Sur-Ron flyer
- `snapchat-9x16-purple-rental-template.html` — placeholder version

To reuse: open the `-template.html`, find/replace every `{{PLACEHOLDER}}`,
save under the new client's working folder, screenshot at the target
viewport, upload. Do **not** edit the template in place.

## When you build something new

1. Build it for the client (in their working folder or wherever it lands first).
2. Strip identifiable client content (names, logos, real prices, addresses).
3. Replace with `{{PLACEHOLDER}}` variables that name what they are
   (e.g. `{{HEADLINE}}`, `{{PRICE_AED}}`, `{{CLIENT_LOGO}}`).
4. Save the stripped version here under the right folder with the naming rule above.
5. Commit before the session closes.

The doc-writer agent checks this folder at session close — if you built a deliverable
and didn't save a template, expect a flag.

## What's here right now

### flyers/

- `snapchat-9x16-blue-rental.html` — vertical Snap flyer, blue gradient background, rental/vehicle promotion layout. Built 2026-05-29 for UBJS (Spark Trixx).
- `snapchat-9x16-blue-rental-template.html` — placeholder version of the blue rental flyer. 12 placeholders covering brand, vehicle, location, 5 features, 3 prices + durations + currency labels, 3 includes, CTA. Drop in any rental client.
- `snapchat-9x16-purple-rental.html` — vertical Snap flyer, purple gradient background, rental/vehicle promotion layout. Built 2026-05-29 for UBJS (Sur-Ron).
- `snapchat-9x16-purple-rental-template.html` — placeholder version of the purple rental flyer. 13 placeholders (same as blue + an extra `{{BADGE_LABEL}}` for the top-right product badge — defaults to "100% Electric"; remove the `.electric-badge` div if not electric).

### websites/

(empty — populate as components get extracted)

### chatbots/

(empty — extract the Nova `functions/api/chat.js` + widget pair here once it's stable enough to template.)

### captions/

(empty)
