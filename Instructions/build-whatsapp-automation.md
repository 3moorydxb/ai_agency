# Build: WhatsApp Business Automation Setup

## What the client gets
Full WhatsApp Business automation: official WhatsApp Business API account, message templates approved, automated reply flows, broadcast capability, CRM integration, and analytics. Build price AED 7,500–25,000. Optional retainer AED 1,000–2,000/mo (see `whatsapp-automation-management.md`).

## What Worker does — step by step

1. **BSP selection — Twilio (broadest), 360dialog (cleanest), WATI (least dev work), Wassenger.** Choose based on client tech maturity + budget. Document choice.

2. **Account verification — Meta Business Manager + chosen BSP.** Client provides: business registration docs, phone number (must be new — cannot have been used on WhatsApp before), domain ownership. Verification can take 3-14 days. Plan accordingly.

3. **Number provisioning + display name approval.** Submit official display name to Meta. Wait for approval.

4. **Conversation flow design — Claude.ai.** Prompt:
   > "Design WhatsApp automation flows for {{CLIENT_NAME}} ({{BUSINESS_TYPE}}). Cover: (1) inbound greeting + menu, (2) FAQ branches with intent detection, (3) lead capture flow, (4) appointment booking flow if applicable, (5) order/delivery status flow if ecom, (6) escalation to human triggers, (7) opt-out handling. Output as flowchart + per-node copy."

5. **Implementation — Claude Code or via BSP visual builder.**
   - **WATI / Wassenger:** drag-and-drop builder, fast.
   - **Twilio / 360dialog:** code-driven, use Claude Code with Claude API as the brain. Build on Cloudflare Workers.

6. **Template creation + Meta approval — critical.** Draft 8-12 marketing/utility templates in Claude. Submit each in Business Manager. Wait for approval (each takes hours-days).

7. **Integrations — CRM (HubSpot/Pipedrive), Shopify (order status), Calendar (booking).** Build via n8n or direct API.

8. **Testing — 30-conversation battery.** Cover happy paths + edge cases. Verify opt-out works. Verify rate limits don't break sends.

9. **Launch — phased.** Internal test 48h, then small list, then full opt-in audience.

10. **Handoff doc + 30-day check-in.**

## Tools used
- Twilio / 360dialog / WATI / Wassenger — BSP
- Meta Business Manager — account + templates
- Claude Code — custom logic (if not using WATI visual)
- Claude API — agent brain
- n8n — integrations
- Sentry — monitoring

## Time required
- Verification + provisioning: 1-2 weeks calendar time (mostly Meta waiting)
- Flow design: 6-10 hours
- Build: 25-50 hours
- Templates + approval: 4-8 hours work, 1-2 weeks calendar
- Testing + launch: 10 hours
- **Total: 50-80 hours work, 3-5 weeks calendar**

## What to send the client
- Verification status updates weekly during the wait
- Spec doc + flowcharts for approval
- Staging test number for client testing
- Loom walkthrough at launch
- Handoff doc

## Quality check - CTO & COO review
- All templates Meta-approved before launch
- Opt-out instruction in every marketing template
- 24-hour customer-service window respected
- No PII written to logs without consent
- Backup/export of flows in version control
- Rate limits set to avoid spam-block

## Tier availability
Growth (basic WhatsApp Business AI automation included). Scale (advanced). One-time build standalone (AED 7,500–25,000).
