/* ═══════════════════════════════════════════════════════════════════════════
   NOVA AGENCY — STAT COUNTER ANIMATION
   Animates any .stat-num[data-target] from 0 → target over 1600ms (ease-out).
   Triggers when the element enters the viewport.
   Self-contained. Safe to load on any page (no-op if no .stat-num present).
═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var DURATION = 1600;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el, target) {
    var start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / DURATION, 1);
      var v = Math.round(easeOutCubic(p) * target);
      el.textContent = String(v);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function init() {
    var els = document.querySelectorAll('.stat-num[data-target]');
    if (!els.length) return;

    // Reduced motion: jump straight to the target value
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) {
        el.textContent = String(parseInt(el.dataset.target, 10) || 0);
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) {
        animateCounter(el, parseInt(el.dataset.target, 10) || 0);
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animateCounter(e.target, parseInt(e.target.dataset.target, 10) || 0);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
