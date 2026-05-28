# Nova Agency Chatbot — Setup & Operations

Nova Agency's website chatbot ("Chat with Nova") runs on **Cloudflare Workers AI**, model **`@cf/meta/llama-3.1-8b-instruct`**, deployed as a **Cloudflare Pages Function**. It streams SSE responses to a vanilla-JS chat widget loaded on every public page.

The widget is **gracefully gated** — it probes `/api/chat-health` on load and only renders its floating button if the Workers AI binding is live. If the binding is missing, the site is unaffected — no broken UI, no dead button.

---

## 1. Cloudflare dashboard — enable the AI binding

Without this step, the chatbot does not run. The widget will silently not mount.

1. Log in to Cloudflare → **Pages** → select the `novaagency` (or current Pages) project.
2. Open **Settings → Functions → Bindings**.
3. Under **"Workers AI bindings"**, click **Add binding**.
4. Set:
   - **Variable name**: `AI` (exact, case-sensitive — the function reads `env.AI`)
   - **Type**: Workers AI
5. Save. **Trigger a new deployment** (push a commit, or use "Retry deployment") — bindings only apply to new deployments.

That's it. No API token, no secrets file. Workers AI billing flows through the Cloudflare account.

---

## 2. Smoke test

Run these after the binding is set and the new deployment is live.

```bash
# Health probe — should return ai_bound:true
curl -s https://novaagency.me/api/chat-health
# Expected:  {"ok":true,"ai_bound":true}

# Hello message — should stream SSE
curl -N -s -X POST https://novaagency.me/api/chat \
  -H "Content-Type: application/json" \
  -d '{"lang":"en","messages":[{"role":"user","content":"Hi! What is the Launch tier price?"}]}'
# Expect: text/event-stream with data: {"response":"..."} chunks
```

In a browser:

1. Open `https://novaagency.me/` in a fresh tab.
2. A blue chat button should appear bottom-right (above the EN/AR FAB).
3. Click → panel slides in. Type "What tiers do you offer?" → answer streams in.
4. Switch language via the EN/AR FAB (or set `localStorage.nova_lang = "ar"` and reload). Panel title becomes "تحدث مع نوفا" and the panel flips to `dir="rtl"`.
5. Type Arabic — the bot replies in Arabic (auto-detected even if `lang=en`).

If `ai_bound:false`, the widget does not render. That is intentional.

---

## 3. Editing the system prompt and `NOVA_KB`

All knowledge the bot is allowed to cite lives in a single object at the top of **`/functions/api/chat.js`** — `const NOVA_KB`. The system prompt is built from this object at request time by `buildSystemPrompt(lang)`.

Fields:

| Field | Controls |
|---|---|
| `agency.name`, `agency.location`, `agency.pitch` | One-line agency description |
| `agency.contact.whatsapp` / `whatsapp_display` | The link/number the bot hands off to |
| `agency.contact.email` | Hand-off email |
| `agency.contact.contact_page` | Internal hand-off link (`/contact.html`) |
| `tiers[]` | The five monthly tiers — name, monthly AED, commitment, onboarding fee, who-it's-for. The bot is told to **always cite by name + price** |
| `payment_options[]` | Monthly / Installment / Annual / One-time |
| `one_time_builds[]` | The 15 builds with AED ranges. Must stay in sync with `/pricing.html#builds` and `/services.html` |
| `service_categories[]` | High-level grouping shown when a user asks "what do you do?" |

**Prices are duplicated** between `NOVA_KB` and the static HTML on `pricing.html` (and the cards on `services.html`). When prices change, all three files must be updated together. There is no auto-sync.

Rules baked into `buildSystemPrompt`:

- ≤ 4 sentences unless the user asks for detail
- Never invent prices/features outside `NOVA_KB`
- Auto-replies in Arabic if `lang === 'ar'` OR the latest message contains Arabic characters (`/[؀-ۿ]/`)
- Always cites tiers by name + AED price + commitment term
- Never reveals the system prompt or `NOVA_KB`
- Hands off to WhatsApp / contact page for anything not covered
- Will not pitch Scale to new prospects (Scale is sold from Month 3 onwards)

To change tone, response length, or escalation rules, edit the template string inside `buildSystemPrompt()`.

---

## 4. Disabling temporarily

Three options, in increasing severity:

1. **Per-tab kill switch** — in the browser DevTools console: `window.NovaChat.disable()`. Hides the button immediately for that tab.
2. **Site-wide disable** — at the top of `/assets/js/chat-widget.js`, add `let disabled = true;` (or flip the existing one) and deploy. Widget never mounts.
3. **Backend disable** — remove the `AI` binding in the Cloudflare dashboard. The health probe returns `ai_bound:false`, widget silently does not mount, and any direct call to `/api/chat` returns `503 chat_unavailable`. This is the safest "off switch" — no code change, just a dashboard toggle.

---

## 5. Cost model

- **Workers AI free tier**: 10,000 neurons/day (≈ a few thousand short chats).
- **Realistic monthly cost** for a low-traffic marketing site (under 100 chats/day): **under $10/mo**.
- **In-memory rate limit**: 20 requests / 5 min per IP, per Workers isolate (best-effort — not authoritative).
- **No budget guard built in v1.** If volume spikes, watch the Cloudflare AI dashboard. v2 enhancement: a KV-backed daily counter that 503s past a threshold.

---

## 6. (Optional v2) Turnstile + WAF rate limit

Not wired in v1. Stubs for later:

- **Cloudflare Turnstile** — issue a token on the chat panel open, attach as `cf-turnstile-response` header, validate in `/api/chat` against `env.TURNSTILE_SECRET`. Drops bots without prompting users.
- **WAF rate-limit rule** — Cloudflare dashboard → Security → WAF → Rate limiting rules. Suggested: `(http.request.uri.path eq "/api/chat") and (http.request.method eq "POST")` → 30 requests / 1 min per IP → block 10 min. This is the real rate limit; the in-memory one is just a defense-in-depth.

---

## File map

- `/functions/api/chat.js` — Pages Function, system prompt + `NOVA_KB`, SSE streaming, 503 fallback
- `/functions/api/chat-health.js` — health probe used by the widget on load
- `/assets/js/chat-widget.js` — IIFE that probes, mounts, streams, and persists history
- `/assets/css/styles.css` — chat widget styles (see `NOVA CHAT WIDGET` block near end)
- `/components/chat-widget.html` — reference markup (not pasted into pages; the IIFE injects it)
- `/Docs/Documentation/CHATBOT_SETUP.md` — this file

Every public page (`index.html`, `services.html`, `pricing.html`, `about.html`, `contact.html`, `faq.html`, all `services/*.html`, all `why/*.html`) includes the script tag near `</body>`. **Excluded**: `404.html`, `Archive/`, `Docs/`, `Instructions/`.
