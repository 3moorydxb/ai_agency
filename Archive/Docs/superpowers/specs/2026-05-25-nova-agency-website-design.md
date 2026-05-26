# Nova Agency Website — Design Spec
**Date:** 2026-05-25  
**Status:** Approved — ready for implementation  
**Build target:** `/Users/omar/ai_agency/index.html`  
**Domain:** novaagency.me  

---

## 1. Project Overview

Single-page marketing website for Nova Agency, a Dubai-based AI agency targeting SMB clients (ecommerce, dropshipping, clothing brands, resellers). Primary goal: lead generation. Secondary goal: establish credibility as a premium, Dubai-native AI agency.

**Pricing strategy:** All prices visible. No "request a quote" hiding. Transparency builds trust faster than anything else for a new agency with no portfolio.

**Tech stack:** Pure HTML/CSS/JS — single file, no frameworks, no build tools. Google Fonts via CDN. Lightweight canvas JS for particle animation. Netlify Forms for the contact form. Fully responsive (mobile-first).

---

## 2. Brand

### Logo (circle variant)
Recreated inline in HTML from `/Users/omar/ai_agency/Logos & Names/nova_logo.html`:
- Dark circle (`#050510` background) with subtle conic blue glow rim
- "NOVA" in Bebas Neue + blue right-pointing triangle (arrow accent, `#2952D9`)
- "AGENCY" subtitle in Montserrat 700, letter-spacing 5px, `#2952D9`
- Box shadow: `0 0 0 1.5px #1a3a8a44, 0 0 40px #1e3fb822`

### Color palette
| Token | Hex | Usage |
|---|---|---|
| Nova Black | `#050510` | Page background, card backgrounds |
| Deep Navy | `#0D1F6E` | Section dividers, subtle borders |
| Brand Blue | `#1E3FB8` | Section headings, borders, callouts |
| Bright Blue | `#2952D9` | Primary buttons, logo arrow, hover glows, badges |
| Light Blue | `#6B8FFF` | Subtitles, secondary text, gradient accents |
| White | `#FFFFFF` | Body text, card text |

### Typography
- **Bebas Neue** — all display headings (H1, H2, section titles, tier names)
- **Montserrat 300/400/700/900** — body copy, subtitles, bullet points, buttons
- Both loaded from Google Fonts CDN

---

## 3. Page Sections (in order)

1. Navbar
2. Hero
3. Services — 6 anchor cards (overview)
4. Pricing — 5 tier cards
5. Individual Services — full catalog with AED prices
6. One-Time Builds — build pricing
7. Audit Quiz — interactive recommendation tool
8. Why Nova — 3 value props
9. Contact — form + WhatsApp + email + socials
10. Footer

---

## 4. Section Details

### Section 1 — Navbar
- **Position:** fixed, full width, `z-index: 100`
- **Background:** `#050510ee` with `backdrop-filter: blur(12px)` on scroll past 80px
- **Left:** Circle logo (60px) + "NOVA AGENCY" wordmark in Bebas Neue
- **Center:** Nav links — Services · Pricing · À La Carte · Quiz · Contact
- **Right:** "WhatsApp Us" CTA button (`#2952D9` fill, glow shadow)
- **Mobile:** hamburger menu, full-screen overlay nav

### Section 2 — Hero
- **Height:** 100vh
- **Background:** `#050510` with animated blue particle field (canvas, ~60 dots, connecting lines ≤120px, `#2952D9` at 0.4 opacity) + centered-left blue glow orb (radial gradient, `#1e3fb8` at 15% opacity)
- **Content (centered):**
  - Eyebrow: `NOVA AGENCY · DUBAI` — Montserrat 700, letter-spacing 6px, `#6B8FFF`, 12px
  - H1: `"AI Marketing That Actually Works"` — Bebas Neue, ~80px desktop / 48px mobile, white
  - Subheadline: `"AI-powered. Human-executed. Built for Dubai businesses."` — Montserrat 400, 18px, `#6B8FFF`
  - CTA row: `"WhatsApp Us"` (primary, `#2952D9`) + `"See Our Services"` (ghost, white border)
- **Animated counters** (scroll-triggered, count up from 0, 1.5s easeOut):
  - `21 AI Services`
  - `5 Tiers — AED 1,200 to 32,000`
  - `Dubai-Based`

### Section 3 — Services (Anchor Overview)
- **Heading:** `"What We Do"` — Bebas Neue, `#1E3FB8`
- **Subheading:** `"6 core services. AI tools. Real people delivering results."`
- **Layout:** 3×2 grid desktop, 2×3 tablet, 1×6 mobile
- **Each card:** dark background, SVG icon, service name (Bebas Neue), 1-line description, hover glow
- **6 services:**
  1. AI Workflow Automation — n8n / Make / Zapier
  2. WhatsApp + Website Chatbot — Capture leads 24/7
  3. AI Voice Agent — Inbound & outbound calling
  4. Cold Email Lead Gen — 500 qualified prospects/mo
  5. UGC Video Ads — TikTok / Reels / Shorts
  6. AI SEO + Content Engine — Rank on Google & AI search

### Section 4 — Pricing (5 Tiers)
- **Heading:** `"Simple, Transparent Pricing"`
- **Subheading:** `"No hidden fees. Ad spend always paid by you, directly to the platform."`
- **Payment options note** (above cards): `"Monthly · Installment (+5%) · Annual prepay (−10%) · One-time builds available"`

**Tier cards (5-column flex desktop, horizontal scroll mobile):**

| Tier | Price/mo | Commitment | Onboarding | Treatment |
|---|---|---|---|---|
| Launch | AED 1,200 | Month-to-month | +AED 500 | Standard card |
| Spark | AED 3,000 | Month-to-month | +AED 500 | Standard card |
| Foundation | AED 6,000 | 3-month min | +AED 1,500 | `#2952D9` border + "Most Popular" badge |
| Growth | AED 14,000 | 6-month min | +AED 1,500 | Standard card |
| Scale | AED 32,000 | 12-month min | +AED 1,500 | "Apply to Qualify" — no signup button, WhatsApp + email CTA only |

**Each card includes:**
- Tier name (Bebas Neue 28px), price (Bebas Neue 42px), USD equiv (`#6B8FFF`)
- Commitment + onboarding fee line
- 3–4 condensed deliverables from Part 3 of v2 PDF
- CTA: "Get Started" (all except Scale) / "Apply on WhatsApp" (Scale)

**Sales pitch line below cards:** `"Launch = AED 40/day. Foundation = cheaper than hiring a social media manager."`

**Tier deliverable summaries (condensed from v2 PDF Part 3):**

- **Launch:** 1 platform, 10 posts/mo, AI captions, content calendar, 1 video/mo, 5 product descriptions, monthly report
- **Spark:** Everything in Launch + 2nd platform, 15 posts/mo, DM responses
- **Foundation:** Everything in Spark + 3rd platform, 20 posts, 4 videos/mo, 4 blogs/scripts, web chatbot, email flows, monthly strategy call
- **Growth:** Everything in Foundation + 4th platform, 30 posts, 10 videos, paid ads (Meta+TikTok), WhatsApp automation, cold email 500 prospects, analytics dashboard, 3 UGC creators, bi-weekly call
- **Scale:** Everything in Growth + all platforms incl. LinkedIn/Snapchat/TikTok Shop, unlimited posts, 20+ videos, AI SEO+GEO+AEO, TikTok Shop mgmt, 1 custom automation build, voice agents, RAG assistant, dedicated strategist, weekly call, quarterly review

### Section 5 — Individual Services (À La Carte)
- **Heading:** `"À La Carte Services"`
- **Subheading:** `"On any tier or standalone. Add what you need, skip what you don't."`
- **Layout:** grouped by category, each group is a table or card grid. Category heading in Bebas Neue `#1E3FB8`, rows in Montserrat.

**All prices from v2 PDF Part 5:**

**Content & Social**
| Service | AED/mo |
|---|---|
| Social media management — 2 platforms | 2,000 |
| Social media management — 4 platforms | 3,500 |
| UGC / short-form video ads (20 variants/mo) | 2,500 |
| Long-form video editing + 20 clips/mo | 2,000 |
| AI content engine (blogs, scripts, copy) | 1,800 |
| AI image generation for content | 500 |
| Personal branding management | 2,500 |

**Platform Management**
| Service | AED/mo |
|---|---|
| LinkedIn growth and management | 1,500 |
| Snapchat management | 1,200 |
| TikTok Shop management | 2,000 |
| Google Business Profile optimization | 800 |

**Performance Marketing**
| Service | AED/mo |
|---|---|
| Paid ads management (Meta + TikTok) + 10% of ad spend | 3,500 |
| AI creative production for paid ads | 2,500 |
| Email and SMS marketing (flows + campaigns) | 2,500 |
| Cold email / outbound lead gen (500 prospects/mo) | 3,000 |
| AI SDR / sales agent deployment | 2,500 |
| Influencer and UGC sourcing (3 creators/mo) | 2,000 |
| SEO + GEO + AEO combined | 4,000 |
| Analytics dashboard management | 1,500 |

**AI Automation (monthly management, after build)**
| Service | AED/mo |
|---|---|
| WhatsApp automation management | 1,500 |
| Workflow automation management | 1,500 |
| Voice agent management | 1,200 + AED 0.33/min |
| Booking automation management | 600 |
| RAG knowledge base management | 800 |

*Cold email footnote: client is solely responsible for legal compliance with applicable anti-spam laws.*

### Section 6 — One-Time Builds
- **Heading:** `"One-Time Builds"`
- **Subheading:** `"Pay once. Own it forever. Optional monthly maintenance after delivery."`
- **Layout:** same table/card grid style as individual services

**All prices from v2 PDF Part 6:**

| Build | Price (AED) | Maintenance/mo |
|---|---|---|
| ★ Shopify Starter Pack (store + brand kit + chatbot + 1 month Launch free) | 4,500 flat | AED 1,500–3,500 |
| Chatbot (web / WhatsApp / Messenger) | 7,500–35,000 | AED 1,000–2,500 |
| WhatsApp Business automation setup | 7,500–25,000 | AED 1,000–2,000 |
| Voice agent setup | 8,000–30,000 | AED 1,200 + /min |
| Workflow automation (n8n / Make / Zapier) | 6,000–40,000 | AED 800–3,000 |
| Booking automation system | 5,000–15,000 | AED 600 |
| RAG knowledge base assistant | 9,000–40,000 | AED 800 |
| Analytics dashboard setup | 4,500–22,000 | AED 500–1,500 |
| Website (Claude Code / Framer / Webflow) | 9,000–40,000 | AED 400–1,200 |
| Custom app build (Claude Code) | 12,000–75,000 | AED 500–2,000 |
| Shopify store build (standard) | 6,000–18,000 | AED 1,500–3,500 |
| Brand identity and design system | 5,000–18,000 | N/A |
| Landing page sprint (48–72hr) | 4,500–8,000 | N/A |

★ Shopify Starter Pack callout card: highlighted with `#2952D9` border, "Best for first stores" badge.

### Section 7 — Audit Quiz ("What Do You Need?")
- **Heading:** `"Not Sure Where to Start?"`
- **Subheading:** `"Answer 3 questions and we'll tell you exactly what you need."`
- **Implementation:** pure JS, no backend, no data sent anywhere. State held in JS object.
- **Visual:** card-style step container, dark background, progress bar (`#2952D9`), smooth transition between steps

**Step 1 — Business type** (single select, 6 options as clickable tiles):
- Ecommerce Store
- Dropshipping
- Clothing Brand
- Reseller
- Local Business
- Other

**Step 2 — Main goal** (single select, 5 options):
- Get more customers
- Automate my operations
- Grow my social media
- Build a chatbot or AI tool
- All of the above

**Step 3 — Monthly budget** (single select, 4 options):
- Under AED 3,000
- AED 3,000–7,000
- AED 7,000–15,000
- AED 15,000+

**Recommendation logic (pure JS):**

Budget → Tier:
- Under AED 3,000 → **Launch** (AED 1,200/mo)
- AED 3,000–7,000 → **Spark** (AED 3,000) or **Foundation** (AED 6,000) — show both, highlight the one that fits better based on goal
- AED 7,000–15,000 → **Foundation** (AED 6,000) or **Growth** (AED 14,000)
- AED 15,000+ → **Growth** (AED 14,000) or **Scale** (AED 32,000)

Goal → Services (2–3 recommended):
- Get more customers → Cold Email Lead Gen, UGC Video Ads, AI SEO + Content Engine
- Automate my operations → AI Workflow Automation, WhatsApp + Website Chatbot, AI Voice Agent
- Grow my social media → UGC Video Ads, AI SEO + Content Engine, Social Media Management
- Build a chatbot or AI tool → WhatsApp + Website Chatbot, AI Voice Agent, AI Workflow Automation
- All of the above → Top 3 based on business type (ecom/dropship/clothing → UGC Ads + Chatbot + Cold Email; local business → Voice Agent + Chatbot + Social; other → Workflow + Chatbot + SEO)

**Results screen shows:**
- Recommended tier name + price + "why this fits you" one-liner
- 2–3 specific services with name + brief description
- WhatsApp CTA button with pre-filled message:  
  `"Hi Nova Agency, I completed the audit — I'm a [business type] looking to [goal]. Budget: [budget]. Interested in the [tier] plan."`
- Secondary: "See full pricing" anchor link → Section 4

**Back/restart button:** always visible on results screen.

### Section 8 — Why Nova
- **Heading:** `"Why Nova Agency"`
- **Layout:** 3-column desktop, stacked mobile
- **3 value props (exact copy):**
  1. **AI-Powered, Human-Executed** — Every service uses AI tools, but a real person manages and delivers it. No black boxes.
  2. **Built for Dubai** — WhatsApp-first, AED pricing, GCC timezone, Arabic support where needed.
  3. **Retainer or One-Time** — Monthly packages or single builds. No lock-in on Launch and Spark.
- Each prop: SVG icon (`#2952D9`, 40px), bold title (Bebas Neue), body (Montserrat 400)

### Section 9 — Contact
- **Heading:** `"Ready to Grow?"`
- **Subheading:** `"Talk to us on WhatsApp, email, or fill in the form below."`

**Contact form (Netlify Forms):**
- `netlify` attribute + `data-netlify="true"` on the `<form>` tag
- `name="contact"` on the form
- Fields:
  - Name (text, required)
  - WhatsApp number (tel, required)
  - Business type (dropdown: Ecommerce / Dropshipping / Clothing Brand / Reseller / Local Business / Other)
  - Message (textarea, optional)
- Submit button: "Send Message" (`#2952D9`)
- Success state: hidden form, show "Thanks! We'll WhatsApp you shortly." message
- Form styling: dark inputs (`#07070f`), `#1a3a8a33` border, white text, focus border `#2952D9`

**Alongside the form (same row, desktop):**
- WhatsApp button — primary CTA
- `hello@novaagency.me` — email link
- Instagram `@novaagency.me` + TikTok `@novaagency.me` — icon + handle

### Section 10 — Footer
- **Background:** `#050510`, `border-top: 1px solid #1a3a8a33`
- **Left:** Circle logo (40px) + "Nova Agency · Dubai"
- **Center:** Nav links
- **Right:** Instagram icon + TikTok icon + `hello@novaagency.me`
- **Bottom bar:** `© 2026 Nova Agency. All rights reserved.` — Montserrat 400, 12px, `#ffffff44`

---

## 5. Animations & Interactions

| Element | Behavior |
|---|---|
| Hero particle field | Canvas, ~60 dots, slow drift, connecting lines ≤120px |
| Hero counters | Count up from 0 on scroll-into-view, 1.5s easeOut |
| Navbar | Transparent → blur/dark on scroll past 80px |
| Service cards | Border + glow on hover, 200ms CSS transition |
| Pricing cards | `translateY(-4px)` + shadow deepen on hover |
| Section headings | Fade + slide up 20px on scroll (IntersectionObserver, no library) |
| Audit quiz steps | Slide/fade transition between steps, progress bar fill |
| CTA buttons | Glow pulse on hover |

No GSAP, no AOS, no animation libraries — vanilla CSS + one IntersectionObserver block.

---

## 6. Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| ≥1200px | Full desktop layout |
| 768–1199px | Services 2×3, pricing horizontal scroll, 2-col service tables |
| <768px | All single-column, hamburger nav, hero text smaller, quiz full-width |

---

## 7. CTAs & Contact

| Channel | Value |
|---|---|
| WhatsApp | `https://wa.me/` — number to be filled in before launch |
| Email | `hello@novaagency.me` |
| Instagram | `@novaagency.me` |
| TikTok | `@novaagency.me` |

**Note:** WhatsApp number not confirmed — placeholder used. Owner must update before going live.

---

## 8. Netlify Forms Setup

- Form submission handled by Netlify at deploy time — no backend code needed
- Add `netlify` attribute to `<form>` tag
- Add a hidden `<input type="hidden" name="form-name" value="contact">` inside the form
- Submissions appear in the Netlify dashboard under Forms
- No AJAX needed — standard HTML form with Netlify's bot honeypot (`netlify-honeypot`)

---

## 9. Source Files

| File | Purpose |
|---|---|
| `/Users/omar/ai_agency/index.html` | The website (single file) |
| `/Users/omar/ai_agency/Logos & Names/nova_logo.html` | Logo reference — circle variant |
| `/Users/omar/ai_agency/Costs & Services/Nova_Agency_Pricing_Branded.pdf` | Pricing tiers, payment options, onboarding fees |
| `/Users/omar/ai_agency/Costs & Services/Nova_Agency_Pricing_v2.pdf` | Tier inclusions, individual services, one-time builds |
