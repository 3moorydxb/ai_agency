# Nova Agency Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Nova Agency marketing website as a single responsive HTML file at `/Users/omar/ai_agency/index.html`.

**Architecture:** One self-contained HTML file with embedded `<style>` and `<script>` blocks. Each task adds one section top-to-bottom. Quiz recommendation logic is pure JS with testable functions. Netlify Forms handles contact form submissions at deploy time with no backend code.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (IntersectionObserver, Canvas API), Google Fonts CDN (Bebas Neue + Montserrat), Netlify Forms

**Spec:** `/Users/omar/ai_agency/docs/superpowers/specs/2026-05-25-nova-agency-website-design.md`

---

## File Structure

| File | Responsibility |
|---|---|
| `/Users/omar/ai_agency/index.html` | Entire website — markup + embedded `<style>` + embedded `<script>` |

Internal structure of the file:
1. `<head>` — meta, Google Fonts, `<style>` block (all CSS)
2. `<body>` — `<nav>`, 10 `<section>` tags, `<footer>`
3. `<script>` at end of `<body>` — all JS (particles, counters, quiz, nav scroll, fade-in)

---

## Task 1: HTML Skeleton + CSS Foundations

**Files:**
- Create: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Create the base HTML file**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Agency — AI Marketing Dubai</title>
  <meta name="description" content="AI-powered marketing agency in Dubai. Social media, chatbots, automation, ads and more. From AED 1,200/mo.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;700;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --nova-black: #050510;
      --deep-navy: #0D1F6E;
      --brand-blue: #1E3FB8;
      --bright-blue: #2952D9;
      --light-blue: #6B8FFF;
      --white: #FFFFFF;
      --card-bg: #07070f;
      --border-subtle: #1a3a8a33;
    }
    body {
      background: var(--nova-black);
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      overflow-x: hidden;
      padding-top: 72px;
    }
    h1, h2, h3 { font-family: 'Bebas Neue', sans-serif; }
    .full-section { padding: 80px 5%; max-width: 1280px; margin: 0 auto; }
    .section-heading {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 5vw, 56px);
      color: var(--brand-blue);
      margin-bottom: 8px;
    }
    .section-sub {
      font-size: 16px;
      color: var(--light-blue);
      margin-bottom: 48px;
      line-height: 1.6;
    }
    .btn-primary {
      background: var(--bright-blue);
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
      padding: 14px 28px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .btn-primary:hover {
      box-shadow: 0 0 20px #2952d966;
      transform: translateY(-1px);
    }
    .btn-ghost {
      background: transparent;
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
      padding: 13px 28px;
      border: 1px solid var(--white);
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s, color 0.2s;
    }
    .btn-ghost:hover { background: var(--white); color: var(--nova-black); }
    .gradient-divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--brand-blue), transparent);
    }
    /* Scroll fade-in */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>
  <!-- Sections added in subsequent tasks -->
  <script>
    // JS added in subsequent tasks
  </script>
</body>
</html>
```

- [ ] **Step 2: Open in Live Server and verify**

Open `/Users/omar/ai_agency/index.html` with VS Code Live Server (right-click → Open with Live Server).
Expected: blank dark page (`#050510` background), no console errors, Google Fonts loaded (check Network tab).

---

## Task 2: Navbar

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add navbar HTML at the top of `<body>` (before the closing `</body>` tag)**

```html
<nav id="navbar">
  <div class="nav-inner">
    <a href="#" class="nav-logo">
      <div class="logo-circle-small">
        <div class="logo-circle-glow"></div>
        <div class="logo-wordmark-wrap">
          <span class="logo-text-nova">NOVA</span>
          <div class="logo-arrow-small"></div>
        </div>
        <span class="logo-sub-small">AGENCY</span>
      </div>
      <span class="nav-brand-text">NOVA AGENCY</span>
    </a>
    <ul class="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#alacarte">À La Carte</a></li>
      <li><a href="#quiz">Audit Quiz</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="https://wa.me/YOURNUMBER" class="btn-primary nav-cta" target="_blank" rel="noopener">WhatsApp Us</a>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <ul>
      <li><a href="#services" class="mobile-link">Services</a></li>
      <li><a href="#pricing" class="mobile-link">Pricing</a></li>
      <li><a href="#alacarte" class="mobile-link">À La Carte</a></li>
      <li><a href="#quiz" class="mobile-link">Audit Quiz</a></li>
      <li><a href="#contact" class="mobile-link">Contact</a></li>
    </ul>
    <a href="https://wa.me/YOURNUMBER" class="btn-primary" target="_blank" rel="noopener">WhatsApp Us</a>
  </div>
</nav>
```

- [ ] **Step 2: Add navbar CSS inside the `<style>` block**

```css
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 5%;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
#navbar.scrolled {
  background: rgba(5, 5, 16, 0.92);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--border-subtle);
}
.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.logo-circle-small {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--nova-black);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  position: relative;
  box-shadow: 0 0 0 1px #1a3a8a44, 0 0 20px #1e3fb822;
  overflow: hidden;
  flex-shrink: 0;
}
.logo-circle-glow {
  position: absolute; inset: 2px;
  border-radius: 50%;
  background: conic-gradient(from 200deg, #0d1f6e00 0%, #1e3fb8 20%, #2952d9 35%, #0d1f6e00 50%);
  opacity: 0.3;
}
.logo-wordmark-wrap { display: flex; align-items: center; z-index: 1; }
.logo-text-nova {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px; color: var(--white);
  letter-spacing: -0.5px; line-height: 1;
}
.logo-arrow-small {
  width: 0; height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--bright-blue);
  margin-left: 2px; margin-top: 2px;
  filter: drop-shadow(0 0 3px var(--bright-blue));
}
.logo-sub-small {
  font-family: 'Montserrat', sans-serif;
  font-size: 5px; font-weight: 700;
  letter-spacing: 3px; color: var(--bright-blue);
  z-index: 1; margin-top: 2px;
}
.nav-brand-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px; color: var(--white);
  letter-spacing: 2px;
}
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a {
  color: var(--white); text-decoration: none;
  font-size: 13px; font-weight: 600;
  letter-spacing: 0.5px; opacity: 0.8;
  transition: opacity 0.2s, color 0.2s;
}
.nav-links a:hover { opacity: 1; color: var(--light-blue); }
.nav-cta { font-size: 13px; padding: 10px 20px; }
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 24px; height: 2px;
  background: var(--white);
  transition: transform 0.3s, opacity 0.3s;
}
.mobile-menu {
  display: none; flex-direction: column;
  align-items: center; justify-content: center; gap: 32px;
  position: fixed; inset: 0;
  background: rgba(5, 5, 16, 0.98);
  backdrop-filter: blur(16px);
  z-index: 99;
}
.mobile-menu.open { display: flex; }
.mobile-menu ul { list-style: none; text-align: center; display: flex; flex-direction: column; gap: 24px; }
.mobile-menu a {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px; color: var(--white);
  text-decoration: none; letter-spacing: 2px;
  transition: color 0.2s;
}
.mobile-menu a:hover { color: var(--light-blue); }
@media (max-width: 900px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
}
```

- [ ] **Step 3: Add navbar JS inside the `<script>` block**

```javascript
// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});
```

- [ ] **Step 4: Verify in Live Server**

Expected: dark navbar fixed at top, logo circle + "NOVA AGENCY" text + nav links + WhatsApp button. Scrolling makes it frosted-glass. On mobile (< 900px), nav links hide and hamburger appears. Tapping hamburger opens full-screen overlay with large nav links.

---

## Task 3: Hero Section (HTML + CSS)

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add hero HTML after `<nav>`**

```html
<section id="hero">
  <canvas id="particle-canvas"></canvas>
  <div class="hero-glow"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">NOVA AGENCY · DUBAI</p>
    <h1 class="hero-h1">AI Marketing<br>That Actually Works</h1>
    <p class="hero-sub">AI-powered. Human-executed. Built for Dubai businesses.</p>
    <div class="hero-ctas">
      <a href="https://wa.me/YOURNUMBER" class="btn-primary" target="_blank" rel="noopener">WhatsApp Us</a>
      <a href="#services" class="btn-ghost">See Our Services</a>
    </div>
    <div class="hero-stats">
      <div class="stat-block">
        <span class="stat-num" data-target="21">0</span>
        <span class="stat-label">AI Services</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-block">
        <span class="stat-text">5 Tiers</span>
        <span class="stat-label">AED 1,200 to 32,000</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-block">
        <span class="stat-text">🇦🇪</span>
        <span class="stat-label">Dubai-Based</span>
      </div>
    </div>
  </div>
</section>
<div class="gradient-divider"></div>
```

- [ ] **Step 2: Add hero CSS inside `<style>`**

```css
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 5% 80px;
  margin-top: -72px;
  overflow: hidden;
}
#particle-canvas {
  position: absolute;
  inset: 0; width: 100%; height: 100%;
  z-index: 0;
}
.hero-glow {
  position: absolute;
  left: -15%; top: 50%; transform: translateY(-50%);
  width: 600px; height: 600px;
  background: radial-gradient(circle, #1e3fb826 0%, transparent 70%);
  z-index: 0; pointer-events: none;
}
.hero-content {
  position: relative; z-index: 1;
  text-align: center; max-width: 800px;
}
.hero-eyebrow {
  font-size: 11px; font-weight: 700;
  letter-spacing: 6px; color: var(--light-blue);
  margin-bottom: 16px;
}
.hero-h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(52px, 9vw, 96px);
  color: var(--white);
  line-height: 1; margin-bottom: 20px;
  letter-spacing: 1px;
}
.hero-sub {
  font-size: 18px; color: var(--light-blue);
  margin-bottom: 36px; line-height: 1.6;
}
.hero-ctas {
  display: flex; gap: 16px;
  justify-content: center; flex-wrap: wrap;
  margin-bottom: 56px;
}
.hero-stats {
  display: flex; align-items: center;
  justify-content: center; gap: 32px; flex-wrap: wrap;
}
.stat-block { text-align: center; }
.stat-num, .stat-text {
  display: block;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 42px; color: var(--white); line-height: 1;
}
.stat-label {
  display: block; font-size: 12px;
  color: var(--light-blue); letter-spacing: 1px; margin-top: 4px;
}
.stat-divider { width: 1px; height: 48px; background: var(--border-subtle); }
@media (max-width: 600px) {
  .stat-divider { display: none; }
  .hero-stats { flex-direction: column; gap: 16px; }
  .hero-h1 { font-size: 52px; }
}
```

- [ ] **Step 3: Verify in Live Server**

Expected: full-height dark hero, eyebrow text, large heading, subheadline, two CTA buttons, three stat blocks. Canvas is blank (particles added in Task 4).

---

## Task 4: Hero Animations (Particles + Counter)

**Files:**
- Modify: `/Users/omar/ai_agency/index.html` — `<script>` block only

- [ ] **Step 1: Add particle canvas animation**

Add inside `<script>` block:

```javascript
// ── Particle Canvas ──────────────────────────────────────────────────────────
(function () {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  const COUNT = 60, CONNECT = 120, RGB = '41,82,217';
  let pts = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function mkPt() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1
    };
  }

  function init() { resize(); pts = Array.from({ length: COUNT }, mkPt); }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${RGB},0.5)`;
      ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(${RGB},${0.4 * (1 - d / CONNECT)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', init);
  init();
  draw();
})();
```

- [ ] **Step 2: Add counter animation + IntersectionObserver**

Add inside `<script>` block (after particles):

```javascript
// ── Counter Animation ────────────────────────────────────────────────────────
function animateCounter(el, target, duration) {
  duration = duration || 1500;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      animateCounter(el, parseInt(el.dataset.target));
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObs.observe(el));
```

- [ ] **Step 3: Add scroll fade-in observer**

Add inside `<script>` block (after counter):

```javascript
// ── Scroll Fade-In ───────────────────────────────────────────────────────────
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));
```

- [ ] **Step 4: Test counter in browser console**

```javascript
// Paste in browser console
const testEl = document.querySelector('.stat-num[data-target]');
const expected = parseInt(testEl.dataset.target);
animateCounter(testEl, expected, 500);
setTimeout(() => {
  console.assert(parseInt(testEl.textContent) === expected,
    'FAIL: counter is ' + testEl.textContent + ', expected ' + expected);
  console.log('Counter test: PASS — reached ' + testEl.textContent);
}, 600);
```

Expected console output: `Counter test: PASS — reached 21`

- [ ] **Step 5: Verify in Live Server**

Expected: blue particles drifting with connecting lines on the hero. Scrolling to the stat blocks triggers the "21" counter animating up from 0.

---

## Task 5: Services Section

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add services HTML after the first `.gradient-divider`**

```html
<section id="services" class="full-section">
  <h2 class="section-heading fade-in">What We Do</h2>
  <p class="section-sub fade-in">6 core services. AI tools. Real people delivering results.</p>
  <div class="services-grid">

    <div class="service-card fade-in">
      <div class="service-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16h6l4-8 4 16 4-12 4 4h6" stroke="#2952D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3>AI Workflow Automation</h3>
      <p>n8n / Make / Zapier — automate your operations end-to-end</p>
    </div>

    <div class="service-card fade-in">
      <div class="service-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="24" height="16" rx="3" stroke="#2952D9" stroke-width="2.5"/>
          <circle cx="11" cy="14" r="1.5" fill="#2952D9"/>
          <circle cx="16" cy="14" r="1.5" fill="#2952D9"/>
          <circle cx="21" cy="14" r="1.5" fill="#2952D9"/>
          <path d="M10 22v4M22 22v4M8 26h16" stroke="#2952D9" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>WhatsApp + Website Chatbot</h3>
      <p>Capture leads and answer customers 24/7 — no human needed</p>
    </div>

    <div class="service-card fade-in">
      <div class="service-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="10" stroke="#2952D9" stroke-width="2.5"/>
          <path d="M12 20c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#2952D9" stroke-width="2" stroke-linecap="round"/>
          <circle cx="16" cy="12" r="2" fill="#2952D9"/>
        </svg>
      </div>
      <h3>AI Voice Agent</h3>
      <p>Inbound and outbound calling — answers, qualifies, and books</p>
    </div>

    <div class="service-card fade-in">
      <div class="service-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 26L14 18M18 8l-4 10 4-10z" stroke="#2952D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 18h8l-4-10" stroke="#2952D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="26" cy="8" r="2.5" stroke="#2952D9" stroke-width="2"/>
        </svg>
      </div>
      <h3>Cold Email Lead Gen</h3>
      <p>500 qualified prospects/mo — AI writes, sends, and books meetings</p>
    </div>

    <div class="service-card fade-in">
      <div class="service-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="4" width="13" height="24" rx="2" stroke="#2952D9" stroke-width="2.5"/>
          <path d="M19 10h4a2 2 0 012 2v8" stroke="#2952D9" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M10 12h5M10 16h5M10 20h3" stroke="#2952D9" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>UGC Video Ads</h3>
      <p>TikTok / Reels / Shorts — 20+ scroll-stopping video variants/mo</p>
    </div>

    <div class="service-card fade-in">
      <div class="service-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="10" stroke="#2952D9" stroke-width="2.5"/>
          <path d="M8 20c2-5 10-9 16-4" stroke="#2952D9" stroke-width="2" stroke-linecap="round"/>
          <path d="M16 6v4M16 22v4M6 16H2M30 16h-4" stroke="#2952D9" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>AI SEO + Content Engine</h3>
      <p>Rank on Google AND ChatGPT, Perplexity, Gemini</p>
    </div>

  </div>
</section>
<div class="gradient-divider"></div>
```

- [ ] **Step 2: Add services CSS**

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service-card {
  background: var(--card-bg);
  border: 1px solid var(--border-subtle);
  padding: 32px 28px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.service-card:hover {
  border-color: var(--bright-blue);
  box-shadow: 0 0 24px #2952d920;
}
.service-icon { width: 40px; height: 40px; margin-bottom: 16px; }
.service-icon svg { width: 100%; height: 100%; }
.service-card h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px; color: var(--white);
  letter-spacing: 1px; margin-bottom: 8px;
}
.service-card p { font-size: 13px; color: var(--light-blue); line-height: 1.6; }
@media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Verify in Live Server**

Expected: 3×2 grid of dark cards with SVG icons, Bebas Neue headings, light-blue descriptions. Cards glow blue on hover. Grid becomes 2-column on tablet, 1-column on mobile.

---

## Task 6: Pricing Section (5 Tiers)

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add pricing HTML after services `gradient-divider`**

```html
<section id="pricing" class="full-section">
  <h2 class="section-heading fade-in">Simple, Transparent Pricing</h2>
  <p class="section-sub fade-in">No hidden fees. Ad spend always paid by you, directly to the platform.</p>
  <p class="payment-note fade-in">Monthly · Installment (+5%) · Annual prepay (−10%) · One-time builds available</p>

  <div class="pricing-grid">

    <div class="pricing-card fade-in">
      <div class="tier-name">Launch</div>
      <div class="tier-price">AED 1,200<span class="per-mo">/mo</span></div>
      <div class="tier-usd">~$327/mo</div>
      <div class="tier-commit">Month-to-month</div>
      <div class="tier-onboard">+ AED 500 onboarding</div>
      <ul class="tier-features">
        <li>1 platform (IG or TikTok)</li>
        <li>10 posts/mo, AI captions</li>
        <li>Content calendar (30 days)</li>
        <li>1 short-form video/mo</li>
        <li>5 product descriptions/mo</li>
        <li>Monthly performance report</li>
      </ul>
      <a href="https://wa.me/YOURNUMBER?text=Hi+Nova+Agency,+interested+in+the+Launch+plan" class="btn-primary tier-cta" target="_blank" rel="noopener">Get Started</a>
    </div>

    <div class="pricing-card fade-in">
      <div class="tier-name">Spark</div>
      <div class="tier-price">AED 3,000<span class="per-mo">/mo</span></div>
      <div class="tier-usd">~$817/mo</div>
      <div class="tier-commit">Month-to-month</div>
      <div class="tier-onboard">+ AED 500 onboarding</div>
      <ul class="tier-features">
        <li>Everything in Launch</li>
        <li>2nd platform added</li>
        <li>15 posts/mo</li>
        <li>Comment + DM responses</li>
        <li>Monthly performance report</li>
      </ul>
      <a href="https://wa.me/YOURNUMBER?text=Hi+Nova+Agency,+interested+in+the+Spark+plan" class="btn-primary tier-cta" target="_blank" rel="noopener">Get Started</a>
    </div>

    <div class="pricing-card featured fade-in">
      <div class="popular-badge">Most Popular</div>
      <div class="tier-name">Foundation</div>
      <div class="tier-price">AED 6,000<span class="per-mo">/mo</span></div>
      <div class="tier-usd">~$1,635/mo</div>
      <div class="tier-commit">3-month minimum</div>
      <div class="tier-onboard">+ AED 1,500 onboarding</div>
      <ul class="tier-features">
        <li>Everything in Spark</li>
        <li>3rd platform, 20 posts/mo</li>
        <li>4 short-form videos/mo</li>
        <li>4 blogs or video scripts/mo</li>
        <li>Web chatbot (FAQs + lead capture)</li>
        <li>Email flows + weekly campaign</li>
        <li>Monthly strategy call (30 min)</li>
      </ul>
      <a href="https://wa.me/YOURNUMBER?text=Hi+Nova+Agency,+interested+in+the+Foundation+plan" class="btn-primary tier-cta" target="_blank" rel="noopener">Get Started</a>
    </div>

    <div class="pricing-card fade-in">
      <div class="tier-name">Growth</div>
      <div class="tier-price">AED 14,000<span class="per-mo">/mo</span></div>
      <div class="tier-usd">~$3,815/mo</div>
      <div class="tier-commit">6-month minimum</div>
      <div class="tier-onboard">+ AED 1,500 onboarding</div>
      <ul class="tier-features">
        <li>Everything in Foundation</li>
        <li>4th platform, 30 posts/mo</li>
        <li>10 short-form videos/mo</li>
        <li>Paid ads (Meta + TikTok)</li>
        <li>WhatsApp AI automation</li>
        <li>Cold email — 500 prospects/mo</li>
        <li>Analytics dashboard</li>
        <li>3 UGC creators/mo</li>
        <li>Bi-weekly strategy call</li>
      </ul>
      <a href="https://wa.me/YOURNUMBER?text=Hi+Nova+Agency,+interested+in+the+Growth+plan" class="btn-primary tier-cta" target="_blank" rel="noopener">Get Started</a>
    </div>

    <div class="pricing-card scale-card fade-in">
      <div class="scale-badge">Apply to Qualify</div>
      <div class="tier-name">Scale</div>
      <div class="tier-price">AED 32,000<span class="per-mo">/mo</span></div>
      <div class="tier-usd">~$8,715/mo</div>
      <div class="tier-commit">12-month minimum</div>
      <div class="tier-onboard">+ AED 1,500 onboarding</div>
      <ul class="tier-features">
        <li>Everything in Growth</li>
        <li>All platforms + TikTok Shop</li>
        <li>Unlimited posts, 20+ videos/mo</li>
        <li>AI SEO + GEO + AEO</li>
        <li>Voice agent + RAG assistant</li>
        <li>1 custom automation build</li>
        <li>Dedicated strategist</li>
        <li>Weekly call + quarterly review</li>
      </ul>
      <div class="scale-ctas">
        <a href="https://wa.me/YOURNUMBER?text=Hi+Nova+Agency,+interested+in+the+Scale+plan" class="btn-primary tier-cta" target="_blank" rel="noopener">Apply on WhatsApp</a>
        <a href="mailto:hello@novaagency.me?subject=Scale%20Plan%20Enquiry" class="btn-ghost tier-cta">Email Us</a>
      </div>
    </div>

  </div>
  <p class="pricing-footnote">Launch = AED 40/day · Foundation = cheaper than hiring a social media manager (AED 8,000–12,000/mo salary)</p>
</section>
<div class="gradient-divider"></div>
```

- [ ] **Step 2: Add pricing CSS**

```css
.payment-note {
  font-size: 13px; color: var(--light-blue);
  margin-bottom: 32px; letter-spacing: 0.5px;
}
.pricing-grid {
  display: flex; gap: 16px;
  overflow-x: auto; padding-bottom: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.pricing-card {
  background: var(--card-bg);
  border: 1px solid var(--border-subtle);
  padding: 28px 20px;
  min-width: 210px; flex: 1;
  display: flex; flex-direction: column;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  scroll-snap-align: start;
}
.pricing-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px #2952d918; }
.pricing-card.featured { border-color: var(--bright-blue); box-shadow: 0 0 32px #2952d922; }
.popular-badge, .scale-badge {
  font-size: 10px; font-weight: 700;
  letter-spacing: 2px; padding: 4px 10px;
  margin-bottom: 12px; display: inline-block;
  align-self: flex-start;
}
.popular-badge { background: var(--bright-blue); color: var(--white); }
.scale-badge { border: 1px solid var(--light-blue); color: var(--light-blue); }
.tier-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px; color: var(--white);
  letter-spacing: 2px; margin-bottom: 8px;
}
.tier-price {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 34px; color: var(--white); line-height: 1; margin-bottom: 4px;
}
.per-mo { font-size: 16px; color: var(--light-blue); }
.tier-usd { font-size: 12px; color: var(--light-blue); margin-bottom: 12px; }
.tier-commit { font-size: 12px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.tier-onboard {
  font-size: 11px; color: var(--light-blue);
  margin-bottom: 20px; padding-bottom: 20px;
  border-bottom: 1px solid var(--border-subtle);
}
.tier-features {
  list-style: none; flex: 1;
  display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;
}
.tier-features li {
  font-size: 12px; color: rgba(255,255,255,0.75);
  padding-left: 14px; position: relative; line-height: 1.4;
}
.tier-features li::before {
  content: '→'; position: absolute; left: 0;
  color: var(--bright-blue); font-size: 10px;
}
.tier-cta { width: 100%; text-align: center; font-size: 12px; padding: 12px; }
.scale-ctas { display: flex; flex-direction: column; gap: 8px; }
.pricing-footnote {
  font-size: 13px; color: var(--light-blue);
  text-align: center; margin-top: 28px; font-style: italic;
}
```

- [ ] **Step 3: Verify in Live Server**

Expected: 5 pricing cards in a row. Foundation has blue border + "Most Popular" badge. Scale has "Apply to Qualify" badge and two CTAs (WhatsApp + Email) with no single-action button. All cards lift on hover. Horizontal scroll on mobile.

---

## Task 7: Individual Services + One-Time Builds

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add à la carte + builds HTML after pricing `gradient-divider`**

```html
<section id="alacarte" class="full-section">
  <h2 class="section-heading fade-in">À La Carte Services</h2>
  <p class="section-sub fade-in">On any tier or standalone. Add what you need, skip what you don't.</p>

  <div class="service-group fade-in">
    <h3 class="group-heading">Content &amp; Social</h3>
    <div class="service-table">
      <div class="st-row"><span>Social media management — 2 platforms</span><span class="st-price">AED 2,000/mo</span></div>
      <div class="st-row"><span>Social media management — 4 platforms</span><span class="st-price">AED 3,500/mo</span></div>
      <div class="st-row"><span>UGC / short-form video ads (20 variants/mo)</span><span class="st-price">AED 2,500/mo</span></div>
      <div class="st-row"><span>Long-form video editing + 20 clips/mo</span><span class="st-price">AED 2,000/mo</span></div>
      <div class="st-row"><span>AI content engine (blogs, scripts, copy)</span><span class="st-price">AED 1,800/mo</span></div>
      <div class="st-row"><span>AI image generation for content</span><span class="st-price">AED 500/mo</span></div>
      <div class="st-row"><span>Personal branding management</span><span class="st-price">AED 2,500/mo</span></div>
    </div>
  </div>

  <div class="service-group fade-in">
    <h3 class="group-heading">Platform Management</h3>
    <div class="service-table">
      <div class="st-row"><span>LinkedIn growth and management</span><span class="st-price">AED 1,500/mo</span></div>
      <div class="st-row"><span>Snapchat management</span><span class="st-price">AED 1,200/mo</span></div>
      <div class="st-row"><span>TikTok Shop management</span><span class="st-price">AED 2,000/mo</span></div>
      <div class="st-row"><span>Google Business Profile optimization</span><span class="st-price">AED 800/mo</span></div>
    </div>
  </div>

  <div class="service-group fade-in">
    <h3 class="group-heading">Performance Marketing</h3>
    <div class="service-table">
      <div class="st-row"><span>Paid ads management (Meta + TikTok) + 10% of ad spend</span><span class="st-price">AED 3,500/mo</span></div>
      <div class="st-row"><span>AI creative production for paid ads</span><span class="st-price">AED 2,500/mo</span></div>
      <div class="st-row"><span>Email and SMS marketing (flows + campaigns)</span><span class="st-price">AED 2,500/mo</span></div>
      <div class="st-row"><span>Cold email / outbound lead gen (500 prospects/mo)*</span><span class="st-price">AED 3,000/mo</span></div>
      <div class="st-row"><span>AI SDR / sales agent deployment</span><span class="st-price">AED 2,500/mo</span></div>
      <div class="st-row"><span>Influencer and UGC sourcing (3 creators/mo)</span><span class="st-price">AED 2,000/mo</span></div>
      <div class="st-row"><span>SEO + GEO + AEO combined</span><span class="st-price">AED 4,000/mo</span></div>
      <div class="st-row"><span>Analytics dashboard management</span><span class="st-price">AED 1,500/mo</span></div>
    </div>
  </div>

  <div class="service-group fade-in">
    <h3 class="group-heading">AI Automation (monthly management, after build)</h3>
    <div class="service-table">
      <div class="st-row"><span>WhatsApp automation management</span><span class="st-price">AED 1,500/mo</span></div>
      <div class="st-row"><span>Workflow automation management</span><span class="st-price">AED 1,500/mo</span></div>
      <div class="st-row"><span>Voice agent management</span><span class="st-price">AED 1,200 + AED 0.33/min</span></div>
      <div class="st-row"><span>Booking automation management</span><span class="st-price">AED 600/mo</span></div>
      <div class="st-row"><span>RAG knowledge base management</span><span class="st-price">AED 800/mo</span></div>
    </div>
  </div>
  <p class="footnote-small">*Cold email: client is solely responsible for legal compliance with applicable anti-spam laws.</p>

  <!-- One-Time Builds -->
  <h2 class="section-heading fade-in" style="margin-top:64px">One-Time Builds</h2>
  <p class="section-sub fade-in">Pay once. Own it forever. Optional monthly maintenance after delivery.</p>

  <div class="builds-grid">
    <div class="build-card featured-build fade-in">
      <div class="build-star">★ Best for first stores</div>
      <div class="build-name">Shopify Starter Pack</div>
      <div class="build-desc">Store + brand kit + chatbot + 1 month Launch free</div>
      <div class="build-price">AED 4,500 flat</div>
      <div class="build-maint">Maintenance: AED 1,500–3,500/mo</div>
    </div>
    <div class="build-card fade-in"><div class="build-name">Chatbot (web / WhatsApp / Messenger)</div><div class="build-price">AED 7,500–35,000</div><div class="build-maint">Maint: AED 1,000–2,500/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">WhatsApp Business Automation</div><div class="build-price">AED 7,500–25,000</div><div class="build-maint">Maint: AED 1,000–2,000/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Voice Agent Setup</div><div class="build-price">AED 8,000–30,000</div><div class="build-maint">Maint: AED 1,200 + /min</div></div>
    <div class="build-card fade-in"><div class="build-name">Workflow Automation (n8n / Make / Zapier)</div><div class="build-price">AED 6,000–40,000</div><div class="build-maint">Maint: AED 800–3,000/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Booking Automation System</div><div class="build-price">AED 5,000–15,000</div><div class="build-maint">Maint: AED 600/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">RAG Knowledge Base Assistant</div><div class="build-price">AED 9,000–40,000</div><div class="build-maint">Maint: AED 800/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Analytics Dashboard Setup</div><div class="build-price">AED 4,500–22,000</div><div class="build-maint">Maint: AED 500–1,500/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Website Build (Claude Code / Framer / Webflow)</div><div class="build-price">AED 9,000–40,000</div><div class="build-maint">Maint: AED 400–1,200/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Custom App Build (Claude Code)</div><div class="build-price">AED 12,000–75,000</div><div class="build-maint">Maint: AED 500–2,000/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Shopify Store Build (Standard)</div><div class="build-price">AED 6,000–18,000</div><div class="build-maint">Maint: AED 1,500–3,500/mo</div></div>
    <div class="build-card fade-in"><div class="build-name">Brand Identity &amp; Design System</div><div class="build-price">AED 5,000–18,000</div><div class="build-maint">N/A</div></div>
    <div class="build-card fade-in"><div class="build-name">Landing Page Sprint (48–72hr)</div><div class="build-price">AED 4,500–8,000</div><div class="build-maint">N/A</div></div>
  </div>
</section>
<div class="gradient-divider"></div>
```

- [ ] **Step 2: Add à la carte + builds CSS**

```css
.service-group { margin-bottom: 40px; }
.group-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px; color: var(--brand-blue);
  letter-spacing: 2px; margin-bottom: 12px;
  padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle);
}
.service-table { display: flex; flex-direction: column; }
.st-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 16px; border-bottom: 1px solid #1a3a8a1a;
  transition: background 0.15s;
}
.st-row:hover { background: #0d1f6e18; }
.st-row span { font-size: 14px; color: rgba(255,255,255,0.8); }
.st-price { color: var(--light-blue); font-weight: 700; white-space: nowrap; padding-left: 16px; }
.footnote-small { font-size: 11px; color: rgba(255,255,255,0.35); margin-top: 8px; }
.builds-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.build-card {
  background: var(--card-bg);
  border: 1px solid var(--border-subtle);
  padding: 20px;
  transition: border-color 0.2s;
}
.build-card:hover { border-color: var(--brand-blue); }
.featured-build { border-color: var(--bright-blue); box-shadow: 0 0 20px #2952d920; }
.build-star { font-size: 11px; font-weight: 700; color: var(--bright-blue); letter-spacing: 1px; margin-bottom: 8px; }
.build-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px; color: var(--white); letter-spacing: 1px; margin-bottom: 4px;
}
.build-desc { font-size: 12px; color: var(--light-blue); margin-bottom: 8px; }
.build-price {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px; color: var(--white); margin-bottom: 4px;
}
.build-maint { font-size: 11px; color: rgba(255,255,255,0.4); }
@media (max-width: 900px) { .builds-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .builds-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Verify in Live Server**

Expected: 4 service category tables with correct AED prices from the PDFs. Rows highlight on hover. Below, 13 build cards in a 3-column grid. Shopify Starter Pack has blue border and "★ Best for first stores" label.

---

## Task 8: Audit Quiz

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add quiz HTML after à la carte `gradient-divider`**

```html
<section id="quiz" class="full-section">
  <h2 class="section-heading fade-in">Not Sure Where to Start?</h2>
  <p class="section-sub fade-in">Answer 3 questions and we'll tell you exactly what you need.</p>

  <div class="quiz-container fade-in">
    <div class="quiz-progress">
      <div class="quiz-progress-bar" id="quiz-progress-bar"></div>
    </div>
    <div class="quiz-step-label" id="quiz-step-label">Step 1 of 3</div>

    <div class="quiz-step active" id="step-1">
      <h3 class="quiz-question">What's your business type?</h3>
      <div class="quiz-options">
        <button class="quiz-opt" data-step="1" data-value="ecommerce">Ecommerce Store</button>
        <button class="quiz-opt" data-step="1" data-value="dropshipping">Dropshipping</button>
        <button class="quiz-opt" data-step="1" data-value="clothing">Clothing Brand</button>
        <button class="quiz-opt" data-step="1" data-value="reseller">Reseller</button>
        <button class="quiz-opt" data-step="1" data-value="local">Local Business</button>
        <button class="quiz-opt" data-step="1" data-value="other">Other</button>
      </div>
    </div>

    <div class="quiz-step" id="step-2">
      <h3 class="quiz-question">What's your main goal?</h3>
      <div class="quiz-options">
        <button class="quiz-opt" data-step="2" data-value="customers">Get more customers</button>
        <button class="quiz-opt" data-step="2" data-value="automate">Automate my operations</button>
        <button class="quiz-opt" data-step="2" data-value="social">Grow my social media</button>
        <button class="quiz-opt" data-step="2" data-value="chatbot">Build a chatbot or AI tool</button>
        <button class="quiz-opt" data-step="2" data-value="all">All of the above</button>
      </div>
    </div>

    <div class="quiz-step" id="step-3">
      <h3 class="quiz-question">What's your monthly budget?</h3>
      <div class="quiz-options" style="grid-template-columns: repeat(2,1fr)">
        <button class="quiz-opt" data-step="3" data-value="under3k">Under AED 3,000</button>
        <button class="quiz-opt" data-step="3" data-value="3k7k">AED 3,000–7,000</button>
        <button class="quiz-opt" data-step="3" data-value="7k15k">AED 7,000–15,000</button>
        <button class="quiz-opt" data-step="3" data-value="15kplus">AED 15,000+</button>
      </div>
    </div>

    <div class="quiz-step" id="quiz-results">
      <div class="result-tier-name" id="result-tier-name"></div>
      <div class="result-price" id="result-price"></div>
      <p class="result-why" id="result-why"></p>
      <div class="result-services">
        <h4>Recommended for you:</h4>
        <ul id="result-services-list"></ul>
      </div>
      <a id="result-wa-btn" class="btn-primary" target="_blank" rel="noopener" href="#">WhatsApp Us With Your Results</a>
      <button class="btn-ghost" id="quiz-restart" style="margin-top:12px;width:100%;text-align:center">Start Over</button>
    </div>
  </div>
</section>
<div class="gradient-divider"></div>
```

- [ ] **Step 2: Add quiz CSS**

```css
.quiz-container {
  max-width: 680px; margin: 0 auto;
  background: var(--card-bg);
  border: 1px solid var(--border-subtle);
  padding: 40px;
}
.quiz-progress {
  width: 100%; height: 3px;
  background: var(--border-subtle);
  margin-bottom: 8px; border-radius: 2px; overflow: hidden;
}
.quiz-progress-bar {
  height: 100%; background: var(--bright-blue);
  width: 0%; transition: width 0.4s ease;
  box-shadow: 0 0 8px var(--bright-blue);
}
.quiz-step-label {
  font-size: 11px; color: var(--light-blue);
  letter-spacing: 2px; margin-bottom: 28px;
}
.quiz-step { display: none; }
.quiz-step.active { display: block; }
.quiz-question {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px; color: var(--white);
  letter-spacing: 1px; margin-bottom: 24px;
}
.quiz-options {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}
.quiz-opt {
  background: var(--nova-black);
  border: 1px solid var(--border-subtle);
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px; font-weight: 600;
  padding: 16px 20px; cursor: pointer; text-align: left;
  transition: border-color 0.2s, background 0.2s;
}
.quiz-opt:hover { border-color: var(--bright-blue); background: #2952d912; }
.result-tier-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 52px; color: var(--white);
  letter-spacing: 2px; margin-bottom: 4px;
}
.result-price {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px; color: var(--bright-blue); margin-bottom: 16px;
}
.result-why { font-size: 14px; color: var(--light-blue); margin-bottom: 24px; line-height: 1.6; }
.result-services { margin-bottom: 28px; }
.result-services h4 { font-size: 13px; font-weight: 700; color: var(--white); margin-bottom: 12px; letter-spacing: 1px; }
.result-services ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.result-services li { font-size: 13px; color: rgba(255,255,255,0.8); padding-left: 16px; position: relative; }
.result-services li::before { content: '→'; position: absolute; left: 0; color: var(--bright-blue); }
#result-wa-btn { width: 100%; text-align: center; }
@media (max-width: 600px) {
  .quiz-options { grid-template-columns: 1fr; }
  .quiz-container { padding: 24px; }
}
```

- [ ] **Step 3: Add quiz JS inside `<script>` block**

```javascript
// ── Audit Quiz ────────────────────────────────────────────────────────────────
const quizState = { business: null, goal: null, budget: null };

const QUIZ_TIERS = {
  under3k:      { name: 'Launch',     price: 'AED 1,200/mo', why: 'Launch is perfect for your budget — AED 40/day gets you a full social media presence with AI-powered content.' },
  '3k7k_social':  { name: 'Spark',   price: 'AED 3,000/mo', why: 'Spark gives you two platforms and more posts — great for testing what works before committing longer.' },
  '3k7k_auto':    { name: 'Foundation', price: 'AED 6,000/mo', why: 'Foundation unlocks the chatbot, email flows, and video content you need for automation.' },
  '7k15k_low':    { name: 'Foundation', price: 'AED 6,000/mo', why: 'Foundation covers social, video, chatbot, email, and a monthly strategy call — the full toolkit.' },
  '7k15k_high':   { name: 'Growth',  price: 'AED 14,000/mo', why: 'Growth adds paid ads, WhatsApp automation, and cold email lead gen — your full-stack growth engine.' },
  '15kplus':      { name: 'Growth',  price: 'AED 14,000/mo', why: 'Growth gives you everything — ads, automation, lead gen, analytics, and strategy calls.' },
  '15kplus_all':  { name: 'Scale',   price: 'AED 32,000/mo', why: 'Scale is your full outsourced AI marketing department — unlimited content, all platforms, voice agents, and a dedicated strategist.' }
};

const QUIZ_SERVICES = {
  customers: ['Cold Email Lead Gen — 500 qualified prospects/mo', 'UGC Video Ads — TikTok / Reels / Shorts', 'AI SEO + Content Engine — rank on Google & AI search'],
  automate:  ['AI Workflow Automation — n8n / Make / Zapier', 'WhatsApp + Website Chatbot — 24/7 lead capture', 'AI Voice Agent — inbound & outbound calling'],
  social:    ['UGC Video Ads — TikTok / Reels / Shorts', 'AI SEO + Content Engine', 'Social Media Management — AI captions + scheduling'],
  chatbot:   ['WhatsApp + Website Chatbot — 24/7 lead capture', 'AI Voice Agent — inbound & outbound calling', 'AI Workflow Automation — automate the follow-up'],
  all: {
    ecommerce:    ['UGC Video Ads', 'WhatsApp + Website Chatbot', 'Cold Email Lead Gen'],
    dropshipping: ['UGC Video Ads', 'Cold Email Lead Gen', 'AI Workflow Automation'],
    clothing:     ['UGC Video Ads', 'AI SEO + Content Engine', 'WhatsApp + Website Chatbot'],
    reseller:     ['Cold Email Lead Gen', 'AI Workflow Automation', 'WhatsApp + Website Chatbot'],
    local:        ['AI Voice Agent', 'WhatsApp + Website Chatbot', 'AI SEO + Content Engine'],
    other:        ['AI Workflow Automation', 'WhatsApp + Website Chatbot', 'AI SEO + Content Engine']
  }
};

function getRecommendation(business, goal, budget) {
  let tierKey;
  if (budget === 'under3k') {
    tierKey = 'under3k';
  } else if (budget === '3k7k') {
    tierKey = (goal === 'automate' || goal === 'chatbot') ? '3k7k_auto' : '3k7k_social';
  } else if (budget === '7k15k') {
    tierKey = (goal === 'customers' || goal === 'all') ? '7k15k_high' : '7k15k_low';
  } else {
    tierKey = (goal === 'all') ? '15kplus_all' : '15kplus';
  }

  const services = (goal === 'all')
    ? (QUIZ_SERVICES.all[business] || QUIZ_SERVICES.all.other)
    : (QUIZ_SERVICES[goal] || QUIZ_SERVICES.customers);

  return { tier: QUIZ_TIERS[tierKey], services };
}

function quizUpdateProgress(step) {
  const pct = step === 'results' ? 100 : ((step - 1) / 3) * 100;
  document.getElementById('quiz-progress-bar').style.width = pct + '%';
  document.getElementById('quiz-step-label').textContent =
    step === 'results' ? 'Your Results' : 'Step ' + step + ' of 3';
}

function quizShowStep(id) {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function quizShowResults() {
  const rec = getRecommendation(quizState.business, quizState.goal, quizState.budget);

  document.getElementById('result-tier-name').textContent = rec.tier.name;
  document.getElementById('result-price').textContent = rec.tier.price;
  document.getElementById('result-why').textContent = rec.tier.why;

  const ul = document.getElementById('result-services-list');
  ul.innerHTML = rec.services.map(s => '<li>' + s + '</li>').join('');

  const bLabels = { ecommerce:'Ecommerce Store', dropshipping:'Dropshipping', clothing:'Clothing Brand', reseller:'Reseller', local:'Local Business', other:'Business' };
  const gLabels = { customers:'get more customers', automate:'automate operations', social:'grow social media', chatbot:'build AI tools', all:'grow in every way' };
  const budLabels = { under3k:'Under AED 3,000', '3k7k':'AED 3,000–7,000', '7k15k':'AED 7,000–15,000', '15kplus':'AED 15,000+' };

  const msg = encodeURIComponent(
    'Hi Nova Agency, I completed the audit — I\'m a ' + bLabels[quizState.business] +
    ' looking to ' + gLabels[quizState.goal] +
    '. Budget: ' + budLabels[quizState.budget] +
    '. Interested in the ' + rec.tier.name + ' plan.'
  );
  document.getElementById('result-wa-btn').href = 'https://wa.me/YOURNUMBER?text=' + msg;

  quizUpdateProgress('results');
  quizShowStep('quiz-results');
}

document.querySelectorAll('.quiz-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = parseInt(btn.dataset.step);
    const val = btn.dataset.value;
    if (step === 1) { quizState.business = val; quizUpdateProgress(2); quizShowStep('step-2'); }
    else if (step === 2) { quizState.goal = val; quizUpdateProgress(3); quizShowStep('step-3'); }
    else { quizState.budget = val; quizShowResults(); }
  });
});

document.getElementById('quiz-restart').addEventListener('click', () => {
  quizState.business = quizState.goal = quizState.budget = null;
  quizUpdateProgress(1);
  quizShowStep('step-1');
});
```

- [ ] **Step 4: Test quiz logic in browser console**

```javascript
// Paste in browser console to validate recommendation logic
(function testQuizLogic() {
  const cases = [
    { b:'ecommerce',    g:'customers', budget:'under3k',  expect:'Launch' },
    { b:'clothing',     g:'social',    budget:'3k7k',     expect:'Spark' },
    { b:'local',        g:'automate',  budget:'3k7k',     expect:'Foundation' },
    { b:'dropshipping', g:'customers', budget:'7k15k',    expect:'Growth' },
    { b:'ecommerce',    g:'all',       budget:'15kplus',  expect:'Scale' },
  ];
  let passed = 0;
  cases.forEach(({ b, g, budget, expect }) => {
    const r = getRecommendation(b, g, budget);
    const ok = r.tier.name === expect;
    console.log((ok ? '✓' : '✗') + ' [' + b + '/' + g + '/' + budget + '] → ' + r.tier.name + ' (expected ' + expect + ')');
    if (ok) passed++;
  });
  console.log(passed + '/' + cases.length + ' tests passed');
})();
```

Expected: `5/5 tests passed`

- [ ] **Step 5: Verify quiz UX in Live Server**

Click through all paths:
- Step 1 → 2 → 3 → Results: progress bar fills, correct tier + services shown
- WhatsApp button href contains pre-filled message (inspect in DevTools → Elements)
- "Start Over" resets to Step 1 with empty progress bar

---

## Task 9: Why Nova Section

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add Why Nova HTML after quiz `gradient-divider`**

```html
<section id="why-nova" class="full-section">
  <h2 class="section-heading fade-in">Why Nova Agency</h2>
  <div class="why-grid">

    <div class="why-card fade-in">
      <div class="why-icon">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="#2952D9" stroke-width="2.5"/>
          <path d="M16 24l6 6 10-12" stroke="#2952D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3>AI-Powered, Human-Executed</h3>
      <p>Every service uses AI tools, but a real person manages and delivers it. No black boxes.</p>
    </div>

    <div class="why-card fade-in">
      <div class="why-icon">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#2952D9" stroke-width="2.5"/>
          <path d="M8 24h32M24 8c-5 4-8 10-8 16s3 12 8 16M24 8c5 4 8 10 8 16s-3 12-8 16" stroke="#2952D9" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Built for Dubai</h3>
      <p>WhatsApp-first, AED pricing, GCC timezone, Arabic support where needed.</p>
    </div>

    <div class="why-card fade-in">
      <div class="why-icon">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="32" height="18" rx="3" stroke="#2952D9" stroke-width="2.5"/>
          <path d="M16 34v6M32 34v6M12 40h24M8 24h32" stroke="#2952D9" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Retainer or One-Time</h3>
      <p>Monthly packages or single builds. No lock-in on Launch and Spark.</p>
    </div>

  </div>
</section>
<div class="gradient-divider"></div>
```

- [ ] **Step 2: Add Why Nova CSS**

```css
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.why-card { text-align: center; padding: 32px 16px; }
.why-icon { width: 56px; height: 56px; margin: 0 auto 20px; }
.why-icon svg { width: 100%; height: 100%; }
.why-card h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px; color: var(--white);
  letter-spacing: 1px; margin-bottom: 12px;
}
.why-card p { font-size: 14px; color: var(--light-blue); line-height: 1.7; }
@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr; gap: 24px; } }
```

- [ ] **Step 3: Verify in Live Server**

Expected: 3 centered value prop cards with SVG icons, Bebas Neue headings, and exact copy from spec. Single column on mobile.

---

## Task 10: Contact Section + Netlify Form

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add contact HTML after Why Nova `gradient-divider`**

```html
<section id="contact" class="full-section">
  <h2 class="section-heading fade-in">Ready to Grow?</h2>
  <p class="section-sub fade-in">Talk to us on WhatsApp, email, or fill in the form below.</p>

  <div class="contact-grid">

    <div class="contact-form-wrap fade-in">
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" id="contact-form">
        <input type="hidden" name="form-name" value="contact">
        <p style="display:none"><label>Skip: <input name="bot-field"></label></p>
        <div class="form-group">
          <label for="c-name">Your Name</label>
          <input type="text" id="c-name" name="name" required placeholder="Omar Al-Rashid">
        </div>
        <div class="form-group">
          <label for="c-wa">WhatsApp Number</label>
          <input type="tel" id="c-wa" name="whatsapp" required placeholder="+971 50 000 0000">
        </div>
        <div class="form-group">
          <label for="c-biz">Business Type</label>
          <select id="c-biz" name="business-type" required>
            <option value="" disabled selected>Select your business type</option>
            <option>Ecommerce Store</option>
            <option>Dropshipping</option>
            <option>Clothing Brand</option>
            <option>Reseller</option>
            <option>Local Business</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="c-msg">Message (optional)</label>
          <textarea id="c-msg" name="message" rows="4" placeholder="Tell us what you need..."></textarea>
        </div>
        <button type="submit" class="btn-primary" style="width:100%">Send Message</button>
      </form>
      <div id="form-success" style="display:none">
        <p class="form-success-msg">Thanks! We'll WhatsApp you shortly. 🙌</p>
      </div>
    </div>

    <div class="contact-info fade-in">
      <a href="https://wa.me/YOURNUMBER" class="btn-primary contact-wa" target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp Us
      </a>
      <a href="mailto:hello@novaagency.me" class="contact-link">hello@novaagency.me</a>
      <div class="contact-socials">
        <a href="https://instagram.com/novaagency.me" class="social-link" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          @novaagency.me
        </a>
        <a href="https://tiktok.com/@novaagency.me" class="social-link" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/></svg>
          @novaagency.me
        </a>
      </div>
    </div>

  </div>
</section>
```

- [ ] **Step 2: Add contact CSS**

```css
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: start;
}
.form-group { margin-bottom: 20px; }
.form-group label {
  display: block; font-size: 12px; font-weight: 700;
  letter-spacing: 1px; color: var(--light-blue);
  margin-bottom: 8px; text-transform: uppercase;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%; background: var(--card-bg);
  border: 1px solid var(--border-subtle);
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px; padding: 12px 16px;
  outline: none; transition: border-color 0.2s;
  -webkit-appearance: none; appearance: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--bright-blue); }
.form-group select { cursor: pointer; }
.form-group textarea { resize: vertical; min-height: 100px; }
.form-success-msg {
  font-size: 18px; color: var(--light-blue);
  text-align: center; padding: 40px;
  border: 1px solid var(--bright-blue); line-height: 1.6;
}
.contact-info { display: flex; flex-direction: column; gap: 20px; padding-top: 16px; }
.contact-wa {
  display: flex; align-items: center; gap: 10px;
  font-size: 15px; padding: 16px 28px; width: fit-content;
}
.contact-link {
  font-size: 15px; color: var(--light-blue);
  text-decoration: none; font-weight: 600;
  transition: color 0.2s;
}
.contact-link:hover { color: var(--white); }
.contact-socials { display: flex; flex-direction: column; gap: 14px; }
.social-link {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: var(--light-blue);
  text-decoration: none; font-weight: 600;
  transition: color 0.2s;
}
.social-link:hover { color: var(--white); }
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Add form AJAX submit to `<script>` block**

```javascript
// ── Contact Form (Netlify) ────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    try {
      await fetch('/', { method: 'POST', body: new FormData(contactForm) });
      contactForm.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } catch {
      alert('Something went wrong. Please WhatsApp us directly.');
    }
  });
}
```

- [ ] **Step 4: Verify in Live Server**

Expected: two-column layout — form on left with dark-styled inputs, contact info on right (WhatsApp button, email, Instagram + TikTok links). Submitting form locally shows the success message (Netlify submission will only work after deploy). Form fields have blue focus border.

---

## Task 11: Footer

**Files:**
- Modify: `/Users/omar/ai_agency/index.html`

- [ ] **Step 1: Add footer HTML before closing `</body>` tag**

```html
<footer id="footer">
  <div class="footer-inner">
    <div class="footer-left">
      <div class="logo-circle-small">
        <div class="logo-circle-glow"></div>
        <div class="logo-wordmark-wrap">
          <span class="logo-text-nova">NOVA</span>
          <div class="logo-arrow-small"></div>
        </div>
        <span class="logo-sub-small">AGENCY</span>
      </div>
      <span class="footer-brand">Nova Agency · Dubai</span>
    </div>
    <nav class="footer-nav">
      <a href="#services">Services</a>
      <a href="#pricing">Pricing</a>
      <a href="#alacarte">À La Carte</a>
      <a href="#quiz">Audit Quiz</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="footer-right">
      <a href="https://instagram.com/novaagency.me" class="footer-social" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
      <a href="https://tiktok.com/@novaagency.me" class="footer-social" target="_blank" rel="noopener" aria-label="TikTok">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z"/></svg>
      </a>
      <a href="mailto:hello@novaagency.me" class="footer-email">hello@novaagency.me</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Nova Agency. All rights reserved.</p>
  </div>
</footer>
```

- [ ] **Step 2: Add footer CSS**

```css
#footer { border-top: 1px solid var(--border-subtle); padding: 40px 5% 0; }
.footer-inner {
  max-width: 1280px; margin: 0 auto;
  display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap;
  gap: 24px; padding-bottom: 32px;
}
.footer-left { display: flex; align-items: center; gap: 12px; }
.footer-brand { font-size: 13px; color: var(--light-blue); font-weight: 600; }
.footer-nav { display: flex; gap: 24px; flex-wrap: wrap; }
.footer-nav a {
  font-size: 13px; color: rgba(255,255,255,0.6);
  text-decoration: none; transition: color 0.2s;
}
.footer-nav a:hover { color: var(--white); }
.footer-right { display: flex; align-items: center; gap: 16px; }
.footer-social { color: rgba(255,255,255,0.5); transition: color 0.2s; display: flex; }
.footer-social:hover { color: var(--white); }
.footer-email { font-size: 12px; color: var(--light-blue); text-decoration: none; transition: color 0.2s; }
.footer-email:hover { color: var(--white); }
.footer-bottom {
  border-top: 1px solid var(--border-subtle);
  padding: 16px 0; max-width: 1280px; margin: 0 auto;
}
.footer-bottom p { font-size: 12px; color: rgba(255,255,255,0.26); }
@media (max-width: 768px) {
  .footer-inner { flex-direction: column; align-items: flex-start; }
}
```

- [ ] **Step 3: Verify in Live Server**

Expected: footer with Nova logo + "Nova Agency · Dubai", nav links, Instagram/TikTok icons, email. Copyright line below divider.

---

## Task 12: Final Verification

**Files:**
- Modify: `/Users/omar/ai_agency/index.html` — no code changes, verification only

- [ ] **Step 1: Count all `YOURNUMBER` placeholders**

Search `index.html` for `YOURNUMBER`. Note the count. These need the real WhatsApp number before going live (format: `971XXXXXXXXX` — no `+`, no spaces, no dashes).

- [ ] **Step 2: Full section walkthrough in Live Server**

- [ ] Navbar: logo visible, all 5 links smooth-scroll correctly, hamburger works on mobile
- [ ] Hero: particles animate, H1 visible, "21" counter counts up on scroll
- [ ] Services: 6 cards, hover glow works
- [ ] Pricing: 5 cards correct — Foundation blue border + badge, Scale no signup button
- [ ] À La Carte: 4 categories, all prices match the PDFs
- [ ] One-Time Builds: 13 builds, Shopify Starter Pack highlighted
- [ ] Audit Quiz: all 3 steps work, results show tier + services + WhatsApp link, Start Over resets
- [ ] Why Nova: 3 exact value props render
- [ ] Contact: form styled correctly, WhatsApp + email + social links present
- [ ] Footer: logo, nav links, social icons, email, copyright

- [ ] **Step 3: Mobile check (Chrome DevTools — 375px width)**

- [ ] Hamburger opens/closes correctly
- [ ] Hero text readable, buttons not overflowing
- [ ] Pricing cards scroll horizontally
- [ ] Services grid is single column
- [ ] Quiz options are single column
- [ ] Contact layout is single column

- [ ] **Step 4: Run quiz tests one final time**

Open browser console, paste and run:

```javascript
(function testQuizLogic() {
  const cases = [
    { b:'ecommerce',    g:'customers', budget:'under3k',  expect:'Launch' },
    { b:'clothing',     g:'social',    budget:'3k7k',     expect:'Spark' },
    { b:'local',        g:'automate',  budget:'3k7k',     expect:'Foundation' },
    { b:'dropshipping', g:'customers', budget:'7k15k',    expect:'Growth' },
    { b:'ecommerce',    g:'all',       budget:'15kplus',  expect:'Scale' },
  ];
  let passed = 0;
  cases.forEach(({ b, g, budget, expect }) => {
    const r = getRecommendation(b, g, budget);
    const ok = r.tier.name === expect;
    console.log((ok ? '✓' : '✗') + ' ' + b + '/' + g + '/' + budget + ' → ' + r.tier.name);
    if (ok) passed++;
  });
  console.log(passed + '/5 tests passed');
})();
```

Expected: `5/5 tests passed`

---

## Post-Build: Netlify Deploy Notes

Before going live:
1. Replace every `YOURNUMBER` in `index.html` with the real WhatsApp number (e.g. `971501234567`)
2. Deploy: drag `/Users/omar/ai_agency/` folder onto Netlify dashboard (app.netlify.com)
3. Netlify Forms activates automatically after first real form submission on the deployed URL
4. Point `novaagency.me` DNS A record to Netlify's IP after deploy

---

## Plan Self-Review

**Spec coverage:**

| Spec requirement | Covered in |
|---|---|
| Fixed navbar, logo, links, WhatsApp CTA, hamburger | Task 2 |
| Hero: particles, counters "21", H1, 2 CTAs | Tasks 3, 4 |
| Scroll fade-in for all sections | Task 4 (Step 3) |
| 6 anchor service cards, 3×2 grid, hover glow | Task 5 |
| 5 tier cards, correct prices | Task 6 |
| Foundation "Most Popular", Scale "Apply to Qualify" | Task 6 |
| Sales pitch footnote | Task 6 |
| Individual services by category with AED prices | Task 7 |
| 13 one-time builds, Shopify Starter Pack highlighted | Task 7 |
| Audit quiz: 3 steps, JS logic, WhatsApp pre-fill | Task 8 |
| Why Nova: exact 3 value props | Task 9 |
| Contact form (Netlify): 4 fields + success state | Task 10 |
| WhatsApp + email + Instagram + TikTok in contact | Task 10 |
| Footer: logo, nav, socials, copyright | Task 11 |
| Responsive: mobile hamburger, single-column, pricing scroll | Tasks 2–11 |
| CSS custom properties for all brand colors | Task 1 |
| Bebas Neue + Montserrat fonts | Task 1 |

**Placeholder scan:** All code blocks are complete. `YOURNUMBER` is an intentional placeholder clearly flagged in Task 12 and Post-Build notes. No TBD, TODO, or vague instructions present.

**Type/name consistency:**
- `getRecommendation(business, goal, budget)` — defined Task 8 Step 3, tested Task 8 Step 4, re-tested Task 12 Step 4 ✓
- `animateCounter(el, target, duration)` — defined Task 4 Step 2, tested Task 4 Step 4 ✓
- `quizState` object — consistent across Task 8 ✓
- CSS classes: `.fade-in`, `.quiz-step`, `.quiz-opt`, `.pricing-card`, `.featured`, `.scale-card` — all defined in CSS and used in HTML consistently ✓
- `quizUpdateProgress`, `quizShowStep`, `quizShowResults` — all defined and called within Task 8 ✓
