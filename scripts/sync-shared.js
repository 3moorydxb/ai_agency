#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   sync-shared.js  —  Agent 1 sync utility
   Brings every existing HTML page in line with the latest shared
   components by performing three deterministic transformations:

     (1) Replace `.footer-inner` markup with the new 4-column
         `.site-footer-inner` grid layout (and tag the outer <footer>
         with class="site-footer").
     (2) Remove the inline lang-toggle <button> from the nav and the
         standalone .lang-toggle button from the mobile menu.
     (3) Inject components/lang-toggle.html just before </body> if it
         is not already present.

   Idempotent — safe to run multiple times.
   ───────────────────────────────────────────────────────────────────── */

'use strict';
const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Pages to update
const PAGES = [
  'index.html',
  'pricing.html',
  'contact.html',
  'faq.html',
  'work.html',
  '404.html',
  'services.html',
].map(p => path.join(ROOT, p));

// All service detail pages
const servicesDir = path.join(ROOT, 'services');
if (fs.existsSync(servicesDir)) {
  for (const f of fs.readdirSync(servicesDir)) {
    if (f.endsWith('.html')) PAGES.push(path.join(servicesDir, f));
  }
}

// Read the lang-toggle snippet once
const LANG_TOGGLE_SNIPPET = fs.readFileSync(
  path.join(ROOT, 'components', 'lang-toggle.html'),
  'utf8'
).trim();

let totalChanged = 0;
let totalSkipped = 0;
const report = [];

for (const file of PAGES) {
  if (!fs.existsSync(file)) {
    report.push(`  SKIP (missing): ${path.relative(ROOT, file)}`);
    totalSkipped++;
    continue;
  }
  const before = fs.readFileSync(file, 'utf8');
  let html = before;

  // (1) Footer: tag <footer id="footer"> with class="site-footer" if missing,
  //     and rename inner div .footer-inner to .site-footer-inner.
  html = html.replace(
    /<footer\s+id="footer"(?![^>]*class=)([^>]*)>/g,
    '<footer id="footer" class="site-footer"$1>'
  );
  // If a class attr already exists on <footer id="footer"> but doesn't
  // include site-footer, add it.
  html = html.replace(
    /<footer\s+id="footer"\s+class="((?:(?!site-footer)[^"])*)"([^>]*)>/g,
    (m, cls, rest) => `<footer id="footer" class="site-footer ${cls.trim()}"${rest}>`
  );
  // Rename the inner div class
  html = html.replace(/class="footer-inner"/g, 'class="site-footer-inner"');

  // (2a) Strip the inline desktop lang-toggle <li> wrapper (with button
  //      id="lang-toggle"). Handles whitespace + multi-line.
  html = html.replace(
    /\s*<li>\s*<button[^>]*id="lang-toggle"[^>]*>[^<]*<\/button>\s*<\/li>/g,
    ''
  );
  // (2b) Strip a bare <button id="lang-toggle">...</button> if it exists
  //      without an <li> wrapper.
  html = html.replace(
    /\s*<button[^>]*id="lang-toggle"[^>]*>[^<]*<\/button>/g,
    ''
  );
  // (2c) Strip the mobile-menu's standalone <button class="lang-toggle">.
  html = html.replace(
    /\s*<button[^>]*class="lang-toggle"[^>]*>[^<]*<\/button>/g,
    ''
  );

  // (3) Inject lang-toggle snippet just before </body> if not present.
  if (html.indexOf('id="lang-fab"') === -1) {
    if (/<\/body>/i.test(html)) {
      html = html.replace(
        /<\/body>/i,
        '\n' + LANG_TOGGLE_SNIPPET + '\n</body>'
      );
    } else {
      // No </body> — append at end as a fallback
      html = html.trimEnd() + '\n' + LANG_TOGGLE_SNIPPET + '\n';
    }
  }

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    totalChanged++;
    report.push(`  UPDATED: ${path.relative(ROOT, file)}`);
  } else {
    report.push(`  unchanged: ${path.relative(ROOT, file)}`);
  }
}

console.log('sync-shared.js — results');
console.log('─'.repeat(50));
for (const line of report) console.log(line);
console.log('─'.repeat(50));
console.log(`Pages changed: ${totalChanged}`);
console.log(`Pages skipped: ${totalSkipped}`);
console.log(`Total processed: ${PAGES.length}`);
