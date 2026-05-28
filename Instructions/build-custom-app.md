# Build: Custom App (Claude Code)

## What the client gets
A custom web or mobile app built with Claude Code — internal tools, customer portals, niche SaaS, ops dashboards, calculators, configurators. Build price AED 12,000–75,000. Optional retainer AED 500–2,000/mo.

## What Worker does — step by step

1. **Discovery + scoping — Claude.ai.** Tight definition matters. Prompt:
   > "Run a discovery for {{CLIENT_NAME}}'s app idea: {{IDEA}}. Output: user roles, core user stories (must-have only, no nice-to-have), data model, key flows, external integrations, success criteria. Plus: scope items to defer to v2."

2. **Architecture — Claude.ai + Claude Code.** Stack decision tree:
   - **Web app:** Next.js + Supabase + Tailwind + Vercel (default)
   - **Internal tool:** Retool / Tooljet — faster to ship than custom
   - **Mobile:** React Native + Expo if cross-platform; native Swift/Kotlin only if necessary
   - **Auth:** Supabase Auth (default) or Clerk
   - **Payments:** Stripe (default)

3. **Spec freeze — `SPEC.md`.** Client signs off on scope before any code. Out-of-scope items go to `BACKLOG.md`.

4. **Build — sub-agent + Claude Code session per feature.** Recommended pattern: writing-plans skill in Claude Code → break each feature into specs → implement with TDD → review checkpoints.

5. **Testing — automated + manual.** Per feature: unit tests for logic, integration tests for flows, manual QA on critical paths.

6. **Deploy — Vercel (web) or Expo EAS (mobile).** Set up staging + production environments. CI on push.

7. **Documentation — Claude.ai.** Per feature, generate user-facing docs + developer docs. Plus an admin runbook.

8. **Handoff + training session (30-60 min).**

## Tools used
- Claude Code — primary build environment
- Next.js / React Native / Supabase / Vercel / Stripe — common stack
- Retool / Tooljet — when scope fits no-code/low-code
- GitHub — version control + CI
- Sentry — error monitoring
- PostHog — product analytics

## Time required
- Discovery + spec: 10-20 hours
- Build: 80-300 hours (huge range — scope-dependent)
- Testing: 15-30 hours
- Deploy + docs: 10-15 hours
- **Total: 120-400 hours**

## What to send the client
- Signed SPEC.md before build starts
- Staging URL with weekly demo (Loom)
- v1.0 release notes
- User docs + admin runbook
- Loom walkthrough
- Handoff session + code repo access (if client owns code)
- Maintenance proposal

## Quality check - CTO & COO review
- All `SPEC.md` user stories shipped (or formally moved to BACKLOG with sign-off)
- Test coverage > 70% on critical paths
- Sentry catching errors in prod (test by triggering one)
- Auth + RLS rules audited — no unauthorized data access
- Stripe webhooks idempotent (no double-charge on retry)
- Mobile + desktop responsive
- Performance budget met (LCP < 2.5s for web; 60fps animations mobile)

## Tier availability
One-time build standalone (AED 12,000–75,000). Out of scope for monthly tiers.
