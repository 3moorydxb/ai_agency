/* ═══════════════════════════════════════════════════════════════════════
   NOVA AGENCY — Chat Widget
   - Probes /api/chat-health on load. Renders only if Workers AI is bound.
   - Floating button (bottom-right) opens a slide-out panel.
   - Streams Llama 3.1 responses from /api/chat (SSE).
   - Bilingual: respects localStorage.nova_lang ('en' | 'ar').
   - Persists conversation in localStorage.nova_chat_history (last 12 turns).
   - Emergency disable: window.NovaChat.disable().
═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  // ── i18n strings ──
  const STR = {
    en: {
      title: "Chat with Nova",
      placeholder: "Type a message...",
      send: "Send",
      close: "Close",
      welcome: "Hi! I'm Nova's website concierge. Ask about pricing, services, or builds — I'll point you to the right tier.",
      err_unavailable: "Chat is being set up — please use the contact form: ",
      err_rate: "Too many messages, please wait a minute.",
      err_network: "Connection lost, please retry.",
      err_generic: "Something went wrong. Please try again.",
      contact_link: "contact form"
    },
    ar: {
      title: "تحدث مع نوفا",
      placeholder: "اكتب رسالة...",
      send: "إرسال",
      close: "إغلاق",
      welcome: "مرحباً! أنا مساعد نوفا على الموقع. اسألني عن الأسعار أو الخدمات أو المشاريع — وسأوجهك للباقة المناسبة.",
      err_unavailable: "الدردشة قيد الإعداد — يرجى استخدام نموذج التواصل: ",
      err_rate: "رسائل كثيرة، يرجى الانتظار دقيقة.",
      err_network: "انقطع الاتصال، حاول مجدداً.",
      err_generic: "حدث خطأ. حاول مجدداً من فضلك.",
      contact_link: "نموذج التواصل"
    }
  };

  // ── State ──
  const STORAGE_KEY = "nova_chat_history";
  const LANG_KEY = "nova_lang";
  const MAX_TURNS = 12;
  let lang = "en";
  let messages = [];
  let isOpen = false;
  let isSending = false;
  let panel, fab, msgList, input, form, closeBtn, titleEl;
  let disabled = false;

  // ── Public API ──
  window.NovaChat = window.NovaChat || {};
  window.NovaChat.disable = function () {
    disabled = true;
    if (fab) fab.style.display = "none";
    if (panel) panel.hidden = true;
  };
  window.NovaChat.open = function () {
    if (disabled || !panel) return;
    setOpen(true);
  };
  window.NovaChat.close = function () {
    if (!panel) return;
    setOpen(false);
  };

  // ── Boot ──
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  async function boot() {
    if (disabled) return;
    // Probe health
    let bound = false;
    try {
      const r = await fetch("/api/chat-health", { method: "GET", cache: "no-store" });
      if (r.ok) {
        const j = await r.json();
        bound = !!j.ai_bound;
      }
    } catch (e) { bound = false; }
    if (!bound) return;
    inject();
  }

  function inject() {
    lang = readLang();
    messages = readHistory();
    const html = widgetHTML();
    const wrap = document.createElement("div");
    wrap.innerHTML = html;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

    fab      = document.getElementById("nova-chat-fab");
    panel    = document.getElementById("nova-chat-panel");
    msgList  = document.getElementById("nova-chat-messages");
    input    = document.getElementById("nova-chat-text");
    form     = document.getElementById("nova-chat-form");
    closeBtn = panel.querySelector(".nova-chat-close");
    titleEl  = document.getElementById("nova-chat-title");

    applyLangChrome();
    renderHistory();

    fab.addEventListener("click", togglePanel);
    closeBtn.addEventListener("click", () => setOpen(false));
    form.addEventListener("submit", onSubmit);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });
    // Keep widget in sync with the lang FAB
    window.addEventListener("storage", function (e) {
      if (e.key === LANG_KEY) { lang = readLang(); applyLangChrome(); }
    });
  }

  function widgetHTML() {
    return [
      '<button type="button" id="nova-chat-fab" class="nova-chat-fab" aria-haspopup="dialog" aria-expanded="false" aria-controls="nova-chat-panel" aria-label="Chat with Nova">',
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">',
          '<path d="M4 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3h-6l-5 4v-4H7a3 3 0 01-3-3V6z" stroke="white" stroke-width="1.8" stroke-linejoin="round"/>',
        '</svg>',
      '</button>',
      '<div id="nova-chat-panel" class="nova-chat-panel" role="dialog" aria-modal="false" aria-labelledby="nova-chat-title" hidden>',
        '<header class="nova-chat-header">',
          '<h3 id="nova-chat-title" class="nova-chat-title"></h3>',
          '<button type="button" class="nova-chat-close" aria-label="Close chat">',
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">',
              '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
            '</svg>',
          '</button>',
        '</header>',
        '<div class="nova-chat-messages" id="nova-chat-messages" aria-live="polite"></div>',
        '<form class="nova-chat-input" id="nova-chat-form">',
          '<textarea id="nova-chat-text" rows="1" maxlength="1500"></textarea>',
          '<button type="submit" class="nova-chat-send" aria-label="Send">',
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">',
              '<path d="M4 12l16-8-6 18-3-8-7-2z" stroke="white" stroke-width="1.8" stroke-linejoin="round" fill="white"/>',
            '</svg>',
          '</button>',
        '</form>',
        // Meta Llama 3.1 Community License Agreement — mandatory attribution on UIs deployed using Llama as the underlying model.
        '<div class="nova-chat-attribution" aria-hidden="false">Built with Llama</div>',
      '</div>'
    ].join("");
  }

  function applyLangChrome() {
    const t = STR[lang] || STR.en;
    titleEl.textContent = t.title;
    input.placeholder   = t.placeholder;
    fab.setAttribute("aria-label", t.title);
    closeBtn.setAttribute("aria-label", t.close);
    panel.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  function readLang() {
    try {
      const v = localStorage.getItem(LANG_KEY);
      return v === "ar" ? "ar" : "en";
    } catch (e) { return "en"; }
  }

  function readHistory() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) return [];
      const arr = JSON.parse(v);
      if (!Array.isArray(arr)) return [];
      return arr.slice(-MAX_TURNS).filter(function (m) {
        return m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string";
      });
    } catch (e) { return []; }
  }

  function writeHistory() {
    try {
      const trimmed = messages.slice(-MAX_TURNS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch (e) {}
  }

  function renderHistory() {
    msgList.innerHTML = "";
    if (messages.length === 0) {
      addBubble("assistant", (STR[lang] || STR.en).welcome, { ephemeral: true });
    } else {
      messages.forEach(function (m) { addBubble(m.role, m.content); });
    }
    scrollToBottom();
  }

  function togglePanel() { setOpen(!isOpen); }
  function setOpen(open) {
    isOpen = open;
    panel.hidden = !open;
    fab.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      panel.classList.add("is-open");
      setTimeout(function () { input.focus(); }, 50);
    } else {
      panel.classList.remove("is-open");
    }
  }

  function addBubble(role, text, opts) {
    opts = opts || {};
    const el = document.createElement("div");
    el.className = "nova-chat-bubble nova-chat-bubble--" + role + (opts.ephemeral ? " nova-chat-bubble--ephemeral" : "");
    el.textContent = text || "";
    msgList.appendChild(el);
    scrollToBottom();
    return el;
  }

  function scrollToBottom() {
    // Use requestAnimationFrame to handle streaming growth
    requestAnimationFrame(function () { msgList.scrollTop = msgList.scrollHeight; });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (isSending) return;
    const raw = input.value.trim();
    if (!raw) return;
    if (raw.length > 1500) return;

    // Strip welcome bubble on first real message
    const eph = msgList.querySelector(".nova-chat-bubble--ephemeral");
    if (eph) eph.remove();

    input.value = "";
    messages.push({ role: "user", content: raw });
    writeHistory();
    addBubble("user", raw);

    const assistantEl = addBubble("assistant", "");
    assistantEl.classList.add("nova-chat-bubble--streaming");

    isSending = true;
    try {
      await streamChat(assistantEl);
    } catch (err) {
      assistantEl.classList.remove("nova-chat-bubble--streaming");
      handleError(assistantEl, err);
    } finally {
      isSending = false;
    }
  }

  async function streamChat(assistantEl) {
    const payload = { messages: messages.slice(-MAX_TURNS), lang: lang };
    let resp;
    try {
      resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      throw { kind: "network" };
    }

    if (!resp.ok) {
      if (resp.status === 429) throw { kind: "rate" };
      if (resp.status === 503) throw { kind: "unavailable" };
      throw { kind: "generic", status: resp.status };
    }

    const ct = (resp.headers.get("content-type") || "").toLowerCase();
    if (!ct.includes("text/event-stream")) {
      // Unexpected JSON (shouldn't happen on success)
      throw { kind: "generic" };
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    let accumulated = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });

      // Parse SSE: split on double newlines
      let idx;
      while ((idx = buf.indexOf("\n\n")) !== -1) {
        const event = buf.slice(0, idx);
        buf = buf.slice(idx + 2);
        const lines = event.split("\n");
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim();
          if (!data || data === "[DONE]") continue;
          try {
            const j = JSON.parse(data);
            // Workers AI streams { response: "<token>" } per event
            const tok = j.response || j.delta || "";
            if (tok) {
              accumulated += tok;
              assistantEl.textContent = accumulated;
              scrollToBottom();
            }
          } catch (e) { /* ignore non-JSON heartbeat */ }
        }
      }
    }

    assistantEl.classList.remove("nova-chat-bubble--streaming");
    if (accumulated.trim().length === 0) {
      throw { kind: "generic" };
    }
    messages.push({ role: "assistant", content: accumulated });
    writeHistory();
  }

  function handleError(assistantEl, err) {
    const t = STR[lang] || STR.en;
    let msg;
    if (err && err.kind === "unavailable") {
      assistantEl.innerHTML = "";
      assistantEl.appendChild(document.createTextNode(t.err_unavailable));
      const a = document.createElement("a");
      a.href = "/contact.html";
      a.textContent = t.contact_link;
      a.className = "nova-chat-link";
      assistantEl.appendChild(a);
      return;
    } else if (err && err.kind === "rate") {
      msg = t.err_rate;
    } else if (err && err.kind === "network") {
      msg = t.err_network;
    } else {
      msg = t.err_generic;
    }
    assistantEl.textContent = msg;
  }
})();
