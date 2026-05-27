# Nova Agency — Shared Components

Static HTML site (no build system). Every page assembles itself by pasting these snippets together. CSS lives at `/assets/css/styles.css`. JS lives at `/assets/js/main.js` + `/assets/js/counter.js`.

## How to assemble a page

```html
[contents of components/head.html with {{TITLE}}, {{DESCRIPTION}}, {{CANONICAL_PATH}}, {{EXTRA_HEAD}} substituted]
<body>
  [contents of components/nav.html]

  <main id="main">
    <!-- page-specific content here -->
  </main>

  [contents of components/footer.html]
  [contents of components/whatsapp-fab.html]
  [contents of components/cookie-banner.html]

  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/counter.js" defer></script>
</body>
</html>
```

## head.html placeholders

Replace these strings before writing the page out:

| Token | Example |
|---|---|
| `{{TITLE}}` | `Pricing — Nova Agency Dubai` |
| `{{DESCRIPTION}}` | `Transparent monthly pricing from AED 1,200. No discovery calls — every price is on the website.` |
| `{{CANONICAL_PATH}}` | `pricing.html` (path only, no leading slash) |
| `{{EXTRA_HEAD}}` | Page-specific JSON-LD, additional preloads, etc. Leave empty string if none. |

Also: set `<html lang="en" dir="ltr">` (the JS handles flipping these for Arabic).

## Available utility classes

From `styles.css` — every page may use these freely:

**Layout** — `.full-section` (1280px max, padded), `.page-hero`, `.page-container`

**Typography** — `.section-pill`, `.section-heading`, `.section-sub`, `.grad` (gradient text)

**Buttons** — `.btn-primary`, `.btn-ghost`, `.btn-primary.large`, `.tier-cta`

**Cards** — `.service-card`, `.build-card`, `.pricing-card`, `.featured-pricing`, `.featured-build`

**Animation** — `.fade-in` (IntersectionObserver fades it in on scroll, handled by main.js)

**State** — `.skeleton`, `.skeleton-card`, `.skeleton-text`, `.skeleton-on-load`

**Comparison** — `.compare-table`, `.nova-col` (highlighted column)

**FAQ** — `.faq-item`, `.faq-question`, `.faq-answer`

**Timeline** — `.how-timeline`, `.how-step`

**Service detail** — `.service-detail-hero`, `.how-it-works-steps`, `.who-its-for`, `.examples-grid`

**Counter** — `.stat-num` with `data-target="50"` triggers 0→50 animation in counter.js

## Bilingual (AR/EN) toggle

The `#lang-toggle` button (in nav) flips `html[lang]` and `html[dir]` and replaces text on any element with `data-en` and `data-ar` attributes. Add both attributes to user-visible text wherever practical:

```html
<h1 data-en="From Sign-Up to Results in 48 Hours"
    data-ar="من التسجيل إلى النتائج في 48 ساعة">
  From Sign-Up to Results in 48 Hours
</h1>
```

The initial text content should be English. The toggle is persisted in `localStorage` under `nova_lang`.

## Internal link policy

This site is served as static HTML, so every internal link uses an `.html` extension:

- `/` → home (index.html)
- `/services.html`
- `/services/<slug>.html` for individual service pages
- `/pricing.html`, `/work.html`, `/contact.html`, `/faq.html`, `/404.html`

Do NOT use clean URLs (`/services` without `.html`) — they won't work on plain static hosting.

## WhatsApp link convention

All WhatsApp CTAs point to `https://wa.me/971544285018`. Per-page or per-service CTAs may append a pre-filled message:

```
https://wa.me/971544285018?text=Hi+Nova,+I'm+interested+in+the+Chatbot+build
```

URL-encode spaces as `+` and other characters with `%XX`.

## File ownership (multi-agent build)

- Agent 1 (this folder + `/assets/`) — shared design system. Done.
- Agent 2 — `/index.html`
- Agent 3 — `/services.html` + `/services/*.html` (50 pages)
- Agent 4 — `/pricing.html`, `/work.html`, `/contact.html`, `/faq.html`, `/404.html`
- Agent 5 — `/robots.txt`, `/sitemap.xml`, JSON-LD schema for home (handed to Agent 2)

No agent should edit a file owned by another agent.
