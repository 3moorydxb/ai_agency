#!/usr/bin/env node
/**
 * SEO audit — walks root HTML + /services/*.html and checks per-file SEO health.
 *
 * Checks:
 *  - Exactly one <h1>
 *  - Has <title>
 *  - Has <meta name="description">
 *  - Has <link rel="canonical">
 *  - Has at least one og:title
 *  - Has a <main> tag
 *  - Every <img> has alt=""
 *  - Has a JSON-LD script tag
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function listHtml(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.html'))
    .map(f => path.join(dir, f));
}

const files = [
  ...listHtml(ROOT),
  ...listHtml(path.join(ROOT, 'services')),
];

const checks = [
  {
    key: 'h1',
    label: 'Exactly one <h1>',
    test: (html) => (html.match(/<h1[\s>]/gi) || []).length === 1,
  },
  {
    key: 'title',
    label: '<title>',
    test: (html) => /<title>[\s\S]*?<\/title>/i.test(html),
  },
  {
    key: 'desc',
    label: 'meta description',
    test: (html) => /<meta[^>]+name=["']description["'][^>]*>/i.test(html),
  },
  {
    key: 'canonical',
    label: 'canonical',
    test: (html) => /<link[^>]+rel=["']canonical["'][^>]*>/i.test(html),
  },
  {
    key: 'og',
    label: 'og:title',
    test: (html) => /<meta[^>]+property=["']og:title["'][^>]*>/i.test(html),
  },
  {
    key: 'main',
    label: '<main>',
    test: (html) => /<main[\s>]/i.test(html),
  },
  {
    key: 'alt',
    label: 'all <img> have alt',
    test: (html) => {
      const imgs = html.match(/<img\b[^>]*>/gi) || [];
      return imgs.every(tag => /\balt\s*=/.test(tag));
    },
  },
  {
    key: 'jsonld',
    label: 'JSON-LD',
    test: (html) => /<script[^>]+type=["']application\/ld\+json["'][^>]*>/i.test(html),
  },
];

let passingFiles = 0;
const rows = [];

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const html = fs.readFileSync(file, 'utf8');
  const results = checks.map(c => ({ key: c.key, label: c.label, ok: !!c.test(html) }));
  const allOk = results.every(r => r.ok);
  if (allOk) passingFiles++;
  rows.push({ rel, results, allOk });
}

// Build report
const colWidth = Math.max(...rows.map(r => r.rel.length), 30) + 2;

let out = '';
out += `SEO AUDIT — ${files.length} files scanned\n`;
out += '='.repeat(80) + '\n\n';

const header = 'FILE'.padEnd(colWidth) + checks.map(c => c.key.padEnd(10)).join('');
out += header + '\n';
out += '-'.repeat(header.length) + '\n';

for (const row of rows) {
  let line = row.rel.padEnd(colWidth);
  for (const r of row.results) {
    line += (r.ok ? 'PASS' : 'FAIL').padEnd(10);
  }
  out += line + '\n';
}

out += '\n' + '='.repeat(80) + '\n';
out += `SUMMARY: ${passingFiles}/${files.length} files pass all checks\n`;

// Per-check pass counts
out += '\nPer-check pass rates:\n';
for (const c of checks) {
  const passCount = rows.filter(r => r.results.find(x => x.key === c.key).ok).length;
  out += `  ${c.label.padEnd(30)} ${passCount}/${files.length}\n`;
}

// Failures detail
const failing = rows.filter(r => !r.allOk);
if (failing.length) {
  out += '\nFAILURES (per file):\n';
  for (const row of failing) {
    const failed = row.results.filter(r => !r.ok).map(r => r.label).join(', ');
    out += `  ${row.rel}: ${failed}\n`;
  }
}

console.log(out);
