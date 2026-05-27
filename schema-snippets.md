# JSON-LD Schema Snippets — Nova Agency Dubai

Reference blocks to paste into the relevant pages. Each is a complete, drop-in
`<script type="application/ld+json">` block.

---

## 1. LocalBusiness — paste into `index.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nova Agency",
  "description": "Dubai's AI Marketing Agency",
  "url": "https://novaagency.me",
  "telephone": "+971544285018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "priceRange": "AED 1,200 - AED 32,000",
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": ["https://wa.me/971544285018"],
  "image": "https://novaagency.me/assets/img/og-default.jpg",
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  }
}
</script>
```

---

## 2. Organization — paste into `about.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nova Agency",
  "url": "https://novaagency.me",
  "logo": "https://novaagency.me/assets/img/logo.png",
  "description": "Dubai's AI Marketing Agency. We build AI marketing systems, automations, and creative for ambitious brands.",
  "telephone": "+971544285018",
  "email": "hello@novaagency.me",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Omar Abusalem",
      "jobTitle": "CTO"
    },
    {
      "@type": "Person",
      "name": "Nizar",
      "jobTitle": "CEO"
    }
  ],
  "sameAs": ["https://wa.me/971544285018"]
}
</script>
```

---

## 3. FAQPage — paste into `faq.html` and `pricing.html`

Replace the `mainEntity` array items with the actual Q&A pairs on the page.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can Nova Agency launch a campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most campaigns launch within 5–10 business days from signed agreement. Builds (apps, RAG assistants, full systems) ship in 2–6 weeks depending on scope."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work outside the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We're Dubai-based but serve clients across the GCC and globally. All work is delivered remotely with WhatsApp and email as the primary channels."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in the AED 1,200 starter tier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The starter tier covers a single-channel campaign or a focused automation — full scope is listed on the pricing page."
      }
    }
  ]
}
</script>
```

---

## 4. Service — template for each `/services/*.html`

Replace `{{SERVICE_NAME}}`, `{{SERVICE_DESCRIPTION}}`, `{{SERVICE_SLUG}}`, and
`{{PRICE}}` per page. Drop the `offers` block if pricing is on-request.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{{SERVICE_NAME}}",
  "description": "{{SERVICE_DESCRIPTION}}",
  "url": "https://novaagency.me/services/{{SERVICE_SLUG}}.html",
  "provider": {
    "@type": "Organization",
    "name": "Nova Agency",
    "url": "https://novaagency.me",
    "telephone": "+971544285018"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "offers": {
    "@type": "Offer",
    "price": "{{PRICE}}",
    "priceCurrency": "AED"
  }
}
</script>
```

---

## 5. WebSite — site-wide (safe to include on every page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nova Agency",
  "url": "https://novaagency.me",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://novaagency.me/services.html?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nova Agency",
    "url": "https://novaagency.me"
  }
}
</script>
```
