# CLIENT_KB.md — Per-client knowledge base template

> This is a **template**. For each new Nova client, copy this file to
> `Instructions/clients/<client-slug>.md` and fill in the placeholders.
> The per-client file becomes the single source of truth for that account —
> any Worker or Claude prompt that touches the client reads from it.

> Keep entries terse. No marketing fluff. Facts only.

---

## Basics

- **Client name:** {{LEGAL_NAME}}
- **Trading as:** {{BRAND_NAME}}
- **Slug:** {{client-slug}} (lowercase, dash-separated, used in file paths and Drive folders)
- **Niche:** {{NICHE}} — e.g. "luxury watch reseller", "Dubai real estate agency", "Lebanese restaurant Jumeirah"
- **Nova tier:** Launch · Spark · Foundation · Growth · Scale (pick one; bold the active one)
- **Start date:** YYYY-MM-DD
- **Minimum term ends:** YYYY-MM-DD (if Foundation+; leave blank for month-to-month)
- **Onboarding fee paid:** AED ___ on YYYY-MM-DD
- **Payment plan:** Monthly standard / Installment +5% / Annual −10%
- **Account Manager:** {{AM_NAME}}
- **Status:** active · paused · churned

## Brand

- **Logo files:** Google Drive path → `clients/{{client-slug}}/brand/`
- **Primary colors:** `#RRGGBB`, `#RRGGBB` — hex values, not names
- **Fonts:** family names (e.g. "Inter / Cairo / Tajawal")
- **Tone of voice:** 3-5 adjectives + 1 anti-example (what they sound like vs. what they don't)
- **Approved hashtag stack:** `#tag1 #tag2 #tag3` (max 15)
- **Banned words / topics:** {{LIST}} — competitors, political subjects, anything client explicitly vetoed
- **Reference accounts:** Instagram/TikTok handles whose style is approved as direction

## Account ownership

> Per Nova policy: every account is in the client's name. Nova has access, not ownership.

- **Meta Business Manager:** Client BM ID `{{BM_ID}}`. Nova added as Admin/Editor (note role).
- **Instagram:** `@{{handle}}` — username, password manager link, 2FA method
- **TikTok:** `@{{handle}}`
- **YouTube:** channel URL
- **X / Twitter:** `@{{handle}}`
- **LinkedIn:** company page URL
- **Google Ads:** account ID `{{ID}}` linked via MCC
- **Google Business Profile:** verified · unverified — link
- **Shopify / WooCommerce:** admin URL + staff role for Nova
- **CRM:** which system (HubSpot / Zoho / Pipedrive / Notion / Sheets) + Nova access
- **WhatsApp Business:** number + WABA ID if Cloud API
- **Domain registrar + DNS:** where it's hosted + Nova access level

## Schedule

- **Posting cadence:** N posts/week per platform. Specify days.
- **Posting times:** 24h format in Dubai time (GMT+4)
- **Approval cycle:** how content gets approved (Drive folder, WhatsApp thread, weekly call)
- **SLA on revisions:** Nova → client (X hours) and client → Nova approval (Y hours)
- **Reporting cadence:** weekly / monthly. Format: Loom + PDF / Notion / email.

## People

- **Primary contact:** {{NAME}}, {{ROLE}}, WhatsApp `+971...`, email
- **Billing contact:** {{NAME}}, accounting email
- **Approvers:** who can sign off on creative without escalation
- **Decision-makers:** who has final say on strategy

## Brief history

> Append to this section after each milestone. Don't overwrite.

- YYYY-MM-DD — onboarded at {{TIER}}. Initial scope: {{SCOPE}}.
- YYYY-MM-DD — major deliverable / change / escalation
- ...

## Active deliverables

> What's in-flight right now. Update at the start of each sprint.

| Deliverable | Owner | Due | Status | Notes |
|---|---|---|---|---|
| {{e.g. Aug content calendar}} | {{Worker name}} | YYYY-MM-DD | drafting · review · published | link to Drive |

## Open issues / decisions needed

> Things blocked on the client or on Nova. Date everything.

- [ ] YYYY-MM-DD — {{description}} (blocked on {{CLIENT / NOVA}})

## Retention notes

> What keeps this account renewing. What threatens it.

- **Why they signed:** {{1-2 sentences from the discovery call}}
- **Top win to date:** {{measurable outcome with numbers}}
- **Renewal risk:** {{red flags — slow payment, unresponsive, scope creep, unrealistic expectations}}
- **Upsell candidate:** {{next tier? specific add-on? when to ask?}}

## Contract + payments

- **Contract signed:** YYYY-MM-DD via DocuSign / Adobe Sign — Drive link
- **Invoice cadence:** 1st of month
- **Last paid:** YYYY-MM-DD
- **Outstanding:** AED ___ (if any)
- **Bank receiving account:** {{Nova account; client-side IBAN if relevant}}

---

> Last updated: YYYY-MM-DD by {{NAME}}
