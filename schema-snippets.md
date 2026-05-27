# Nova Agency — JSON-LD Schema Snippets

Reference file for structured data. Paste into the `<head>` of the relevant page inside a `<script type="application/ld+json">` tag.

---

### 1. LocalBusiness — paste into `<head>` of `/index.html`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://novaagency.me/#business",
  "name": "Nova Agency",
  "alternateName": "Nova Agency Dubai",
  "description": "AI-powered marketing agency in Dubai. Chatbots, social media, automation, paid ads, content. From AED 1,200/mo.",
  "url": "https://novaagency.me",
  "telephone": "+971544285018",
  "priceRange": "AED 1,200 - AED 75,000",
  "address": {"@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE"},
  "areaServed": [{"@type": "Country", "name": "AE"}, {"@type": "Place", "name": "GCC"}],
  "sameAs": ["https://wa.me/971544285018"],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
    "opens": "09:00",
    "closes": "19:00"
  }]
}
```

---

### 2. Organization — alternative for `/index.html` if LocalBusiness feels too narrow

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nova Agency",
  "url": "https://novaagency.me",
  "logo": "https://novaagency.me/assets/img/logo.png",
  "sameAs": ["https://wa.me/971544285018"],
  "contactPoint": {"@type": "ContactPoint", "telephone": "+971544285018", "contactType": "customer service", "areaServed": "AE"}
}
```

---

### 3. FAQPage — paste into `<head>` of `/faq.html` (replace placeholder Q&A with the 10 real entries)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION 1 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 1 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 2 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 2 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 3 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 3 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 4 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 4 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 5 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 5 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 6 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 6 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 7 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 7 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 8 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 8 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 9 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 9 TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "QUESTION 10 TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER 10 TEXT HERE"
      }
    }
  ]
}
```

---

### 4. Service — paste into `<head>` of each `/services/<slug>.html` (replace placeholder fields)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SERVICE NAME HERE",
  "name": "SERVICE NAME HERE",
  "description": "SHORT SERVICE DESCRIPTION HERE",
  "url": "https://novaagency.me/services/SLUG-HERE.html",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://novaagency.me/#business",
    "name": "Nova Agency",
    "url": "https://novaagency.me",
    "telephone": "+971544285018",
    "address": {"@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE"}
  },
  "areaServed": [{"@type": "Country", "name": "AE"}, {"@type": "Place", "name": "GCC"}],
  "offers": {
    "@type": "Offer",
    "price": "PRICE-NUMBER-HERE",
    "priceCurrency": "AED",
    "url": "https://novaagency.me/services/SLUG-HERE.html",
    "availability": "https://schema.org/InStock"
  }
}
```

---

### 5. WebSite + SearchAction — paste into `<head>` of `/index.html` (enables Google sitelinks search box)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://novaagency.me",
  "name": "Nova Agency"
}
```
