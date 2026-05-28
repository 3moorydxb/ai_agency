/* ═══════════════════════════════════════════════════════════════════════════
   NOVA AGENCY — SHARED CLIENT-SIDE BEHAVIOUR
   Loaded on every page. Self-contained. No dependencies.
═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // ── Helper: run when DOM is ready ─────────────────────────────────────────
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  // ── IntersectionObserver: fade-in on scroll ───────────────────────────────
  function initFadeIn() {
    var els = document.querySelectorAll('.fade-in');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }

  // ── Navbar scroll behaviour (.scrolled after 50px) ────────────────────────
  function initNavbarScroll() {
    var nav = document.getElementById('navbar');
    if (!nav) return;
    var update = function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // ── Mobile hamburger menu ─────────────────────────────────────────────────
  function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var menu = document.getElementById('mobile-menu');
    if (!hamburger || !menu) return;
    hamburger.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    menu.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Smooth scroll for in-page anchors ─────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      a.addEventListener('click', function (e) {
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ── Cookie banner (UAE PDPL) ──────────────────────────────────────────────
  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    var KEY = 'nova_cookies_accepted';
    var state = null;
    try { state = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
    if (!state) {
      // show after a small delay so it doesn't interrupt initial paint
      setTimeout(function () { banner.classList.add('visible'); }, 600);
    }
    var accept = document.getElementById('cookie-accept');
    var decline = document.getElementById('cookie-decline');
    if (accept) accept.addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
      banner.classList.remove('visible');
    });
    if (decline) decline.addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'declined'); } catch (e) {}
      banner.classList.remove('visible');
    });
  }

  // ── AR / EN language toggle (floating pill + popup) ───────────────────────
  // Re-enabled 2026-05-28: swap data-en/data-ar on every element with both
  // attributes, set <html lang> + dir, persist to localStorage. Partial
  // translation is acceptable — elements without data-ar stay English.
  var LANG_KEY = 'nova_lang';

  function applyLang(lang) {
    if (lang !== 'ar') lang = 'en';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Swap every element that has BOTH data-en and data-ar attributes.
    // Elements without data-ar stay in English by design.
    document.querySelectorAll('[data-en][data-ar]').forEach(function (el) {
      var next = el.getAttribute(lang === 'ar' ? 'data-ar' : 'data-en');
      if (next != null) el.textContent = next;
    });

    // Update the floating pill label + popup option state.
    var label = document.getElementById('lang-fab-label');
    if (label) label.textContent = lang === 'ar' ? 'عربية' : 'EN';
    document.querySelectorAll('.lang-fab-option').forEach(function (opt) {
      var isActive = opt.getAttribute('data-lang') === lang;
      opt.classList.toggle('active', isActive);
      opt.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (lang !== 'ar' && lang !== 'en') return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function getStoredLang() {
    try {
      var v = localStorage.getItem(LANG_KEY);
      return (v === 'ar' || v === 'en') ? v : null;
    } catch (e) { return null; }
  }

  function initLangToggle() {
    // Apply stored preference (default EN). Applied as early as DOM ready.
    var stored = getStoredLang() || 'en';
    applyLang(stored);

    var fab = document.getElementById('lang-fab');
    var popup = document.getElementById('lang-fab-popup');
    if (!fab || !popup) return;

    function closePopup() {
      popup.classList.remove('is-open');
      fab.setAttribute('aria-expanded', 'false');
    }
    function openPopup() {
      popup.classList.add('is-open');
      fab.setAttribute('aria-expanded', 'true');
    }
    function togglePopup() {
      if (popup.classList.contains('is-open')) closePopup();
      else openPopup();
    }

    fab.addEventListener('click', function (e) {
      e.stopPropagation();
      togglePopup();
    });

    // Popup options actually swap the language now.
    popup.querySelectorAll('.lang-fab-option').forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        var lang = opt.getAttribute('data-lang');
        if (lang) setLang(lang);
        closePopup();
      });
    });

    // Click outside closes the popup
    document.addEventListener('click', function (e) {
      if (!popup.classList.contains('is-open')) return;
      if (popup.contains(e.target) || fab.contains(e.target)) return;
      closePopup();
    });

    // Escape key closes the popup
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });
  }

  // ── Skeleton loader: remove class on window.load ──────────────────────────
  function initSkeletonOnLoad() {
    window.addEventListener('load', function () {
      document.querySelectorAll('.skeleton-on-load').forEach(function (el) {
        el.classList.remove('skeleton-on-load');
      });
    });
  }

  // ── FAQ accordion (used on faq.html and service pages) ────────────────────
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', function () {
        var isOpen = item.classList.toggle('open');
        q.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
  }

  // ── Init all on DOM ready ─────────────────────────────────────────────────
  onReady(function () {
    initNavbarScroll();
    initHamburger();
    initFadeIn();
    initSmoothScroll();
    initCookieBanner();
    initLangToggle();
    initSkeletonOnLoad();
    initFaq();
  });

  // Expose a small public API for pages that need it
  window.Nova = {
    applyLang: applyLang,
    setLang: setLang,
    initFadeIn: initFadeIn,
    initFaq: initFaq
  };

  /* ─────────────────────────────────────────────────────────────────────────
     ANALYTICS PLACEHOLDERS
     TODO: Insert real GA4 measurement ID and Meta Pixel ID before launch.
     These are loaded from the <head> snippet (commented out by default).
     Custom event helper below is safe to call even before tags load.
  ───────────────────────────────────────────────────────────────────────── */
  window.novaTrack = function (eventName, params) {
    // GA4
    if (typeof window.gtag === 'function') {
      try { window.gtag('event', eventName, params || {}); } catch (e) {}
    }
    // Meta Pixel
    if (typeof window.fbq === 'function') {
      try { window.fbq('trackCustom', eventName, params || {}); } catch (e) {}
    }
  };
})();
