#!/usr/bin/env node
/**
 * Regenerate /sitemap.xml by scanning root HTML files and /services/*.html.
 * Excludes 404.html. Writes to /Users/omar/ai_agency/sitemap.xml.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE_URL = 'https://novaagency.me';
const LASTMOD = '2026-05-28';
const CHANGEFREQ = 'weekly';

function listHtml(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.html'))
    .map(f => path.join(dir, f));
}

function priorityFor(relPath) {
  if (relPath === 'index.html') return '1.0';
  if (relPath.startsWith('services/')) return '0.7';
  // Top-level pages
  return '0.9';
}

function toUrl(absPath) {
  const rel = path.relative(ROOT, absPath).replace(/\\/g, '/');
  return { rel, loc: `${BASE_URL}/${rel}` };
}

const rootFiles = listHtml(ROOT).filter(f => !f.endsWith('404.html'));
const serviceFiles = listHtml(path.join(ROOT, 'services'));

const all = [...rootFiles, ...serviceFiles]
  .map(toUrl)
  // Stable order: index first, top-level alphabetical, then services alphabetical
  .sort((a, b) => {
    if (a.rel === 'index.html') return -1;
    if (b.rel === 'index.html') return 1;
    const aSvc = a.rel.startsWith('services/');
    const bSvc = b.rel.startsWith('services/');
    if (aSvc !== bSvc) return aSvc ? 1 : -1;
    return a.rel.localeCompare(b.rel);
  });

const entries = all.map(({ rel, loc }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${CHANGEFREQ}</changefreq>
    <priority>${priorityFor(rel)}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

const outPath = path.join(ROOT, 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Wrote ${all.length} URLs to ${outPath}`);
