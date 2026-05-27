#!/usr/bin/env node
// Inject JSON-LD into pages that don't already have it.
// Idempotent: skips pages that already contain `application/ld+json`.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function inject(file, ldBlock) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) return `skip (missing): ${file}`;
  let html = fs.readFileSync(full, 'utf8');
  if (html.includes('application/ld+json')) return `skip (has LD): ${file}`;
  if (!html.includes('</head>')) return `skip (no </head>): ${file}`;
  html = html.replace('</head>', `${ldBlock}\n</head>`);
  fs.writeFileSync(full, html);
  return `injected: ${file}`;
}

const ORG = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization","name":"Nova Agency","url":"https://novaagency.me","description":"Dubai's AI Marketing Agency. We build AI marketing systems, automations, and creative for ambitious brands.","telephone":"+971544285018","email":"hello@novaagency.me","address":{"@type":"PostalAddress","addressLocality":"Dubai","addressCountry":"AE"},"founder":[{"@type":"Person","name":"Omar Abusalem","jobTitle":"CTO"},{"@type":"Person","name":"Nizar","jobTitle":"CEO"}],"sameAs":["https://wa.me/971544285018"]}
</script>`;

const FAQ_PRICING = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What's the cheapest tier?","acceptedAnswer":{"@type":"Answer","text":"Launch at AED 1,200/mo — pick any single service, month-to-month."}},{"@type":"Question","name":"Can I switch tiers?","acceptedAnswer":{"@type":"Answer","text":"Yes, anytime. Upgrade or downgrade between billing cycles."}},{"@type":"Question","name":"Do I get a discount for paying annually?","acceptedAnswer":{"@type":"Answer","text":"Yes — 10% off if you prepay 12 months."}},{"@type":"Question","name":"What's the installment option?","acceptedAnswer":{"@type":"Answer","text":"Split a tier into 3 monthly payments at +5%."}},{"@type":"Question","name":"Is there a setup fee?","acceptedAnswer":{"@type":"Answer","text":"No. Every price you see is monthly. No hidden fees."}},{"@type":"Question","name":"Can I cancel?","acceptedAnswer":{"@type":"Answer","text":"Launch and Spark: month-to-month, cancel anytime. Foundation/Growth/Scale: cancel after minimum commitment."}}]}
</script>`;

const CONTACT = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"ContactPage","name":"Contact Nova Agency","url":"https://novaagency.me/contact.html","mainEntity":{"@type":"Organization","name":"Nova Agency","telephone":"+971544285018","email":"hello@novaagency.me","address":{"@type":"PostalAddress","addressLocality":"Dubai","addressCountry":"AE"}}}
</script>`;

const WEBSITE = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","name":"Nova Agency","url":"https://novaagency.me","publisher":{"@type":"Organization","name":"Nova Agency","url":"https://novaagency.me"}}
</script>`;

const log = [];
log.push(inject('about.html', ORG));
log.push(inject('pricing.html', FAQ_PRICING));
log.push(inject('contact.html', CONTACT));
log.push(inject('work.html', WEBSITE));
log.push(inject('services.html', WEBSITE));

// Service detail pages — Service schema per file
const servicesDir = path.join(ROOT, 'services');
const serviceFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));
for (const f of serviceFiles) {
  const full = path.join(servicesDir, f);
  let html = fs.readFileSync(full, 'utf8');
  if (html.includes('application/ld+json')) { log.push(`skip (has LD): services/${f}`); continue; }
  const slug = f.replace(/\.html$/, '');
  // Extract <h1> for name
  const h1m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const name = h1m ? h1m[1].replace(/<[^>]+>/g, '').trim() : slug.replace(/-/g, ' ');
  // Extract meta description
  const dm = html.match(/<meta name="description" content="([^"]+)"/);
  const desc = dm ? dm[1] : `${name} — Nova Agency Dubai`;
  const ld = `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Service","name":${JSON.stringify(name)},"description":${JSON.stringify(desc)},"url":"https://novaagency.me/services/${slug}.html","provider":{"@type":"Organization","name":"Nova Agency","url":"https://novaagency.me","telephone":"+971544285018"},"areaServed":{"@type":"Country","name":"United Arab Emirates"}}
</script>`;
  html = html.replace('</head>', `${ld}\n</head>`);
  fs.writeFileSync(full, html);
  log.push(`injected: services/${f}`);
}

console.log(log.join('\n'));
console.log(`\nTotal: ${log.length} files processed`);
