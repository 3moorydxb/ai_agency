# WhatsApp Broadcast Campaigns

## What the client gets
Outbound WhatsApp marketing campaigns (one-off and recurring) sent to the client's opted-in list — promos, new product drops, event invites, win-back. Compliant with Meta's marketing template rules and the WhatsApp Business policy.

## What Worker does — step by step

1. **List health — once + monthly.** Confirm all numbers opted in (legally critical). Dedupe. Segment by tags (recent buyer, lapsed, high-LTV, location).

2. **Campaign brief — Claude.ai.** Per campaign:
   > "Brief a WhatsApp broadcast campaign for {{CLIENT_NAME}}. Goal: {{GOAL}}. Segment: {{SEGMENT}}. Offer: {{OFFER}}. Output: campaign concept, message body (under 1024 chars, conversational, one CTA), 2 quick-reply buttons or 1 link button, image direction if media template, send time, expected reply volume, escalation plan if responses come in."

3. **Template approval — Meta Business Manager.** Submit the template (marketing category). Wait for approval (usually <24h). Templates with media or buttons take longer. Have 3 templates in approved-pool at all times so you don't get stuck.

4. **Send — via WhatsApp BSP (Twilio / 360dialog / WATI).** Schedule for optimal send time (often evening Dubai time for consumer brands). Throttle to avoid spam flagging — 1000-2000/hour max.

5. **Reply handling — Claude.ai, real-time during send window.** Inbound replies via the automation pipeline (`whatsapp-automation-management.md`) handle FAQs. Sales-intent replies escalate to client.

6. **Performance — Claude.ai.** Pull metrics:
   > "Analyze this WhatsApp campaign: delivery rate, read rate, reply rate, click-through (if link), opt-outs, conversions. Compare to baseline. Identify what drove performance. Recommend next campaign."

## Tools used
- Twilio / 360dialog / WATI — BSP for sending
- Meta Business Manager — template approval
- Claude.ai Project — copy, briefs, analysis
- Klaviyo / HubSpot — segment source if integrated

## Time required
- Per campaign: 3-4 hours (brief + template + send + monitor)
- Monthly (4 campaigns): ~14-16 hours

## What to send the client
- Campaign brief Doc for approval before send
- Performance report within 48h of send
- Opt-out count flagged immediately (deliverability signal)

## Quality check - CTO & COO review
- 100% opt-in confirmed for every recipient
- Template approved before send (no rejected templates sent)
- Send window respects Dubai labor law / quiet hours
- Opt-out instruction clear in every broadcast
- Reply handling capacity matches send volume

## Tier availability
Add-on / standalone. [NEEDS CLARIFICATION: not in PDF price list. Website has `whatsapp-broadcasts.html`. Suggest AED 1,500-2,500/mo for 4 campaigns. Confirm with Omar.]
