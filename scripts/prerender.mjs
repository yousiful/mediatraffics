// Post-build: give every real route its own static HTML so crawlers that don't run
// JavaScript (most AI crawlers, Bing often, link previews) see the real page.
// Same approach as kenjiwebsite/scripts/blog_static.mjs.
//
// Before this, every SPA route served the empty #root shell with the homepage
// title. This script:
//   - renders "/" and the legal pages with react-dom/server into #root of
//     dist/index.html, dist/privacy.html, dist/terms.html, dist/refund-policy.html,
//     each with its own title, description, canonical, OG tags and JSON-LD.
//     main.tsx then mounts React over that markup as before.
//   - writes the guide pages (scripts/content/guides.mjs) to dist/<slug>.html as
//     plain static pages: same <head> (GTM, Meta pixel, tracking), no React bundle.
// Netlify serves /privacy from privacy.html, so no rewrite rule is needed, and
// unknown URLs still fall through to /404.html with a real 404 (public/_redirects).
//
// Runs as part of `npm run build`. The build fails loudly if a route is missing
// its title, canonical or body text, so a broken prerender never ships silently.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { guides as guideContent } from './content/guides.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://mediatraffics.com';
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const UPDATED = '2026-11-08';
const BOOKING_URL = 'https://safeclick.kenjiai.com/widget/booking/jB82SG2CBq9Nh8103IfC';

// Bundle the SSR entry (TSX + React) to a temp ESM file and import it.
// Written under node_modules so its bare imports (react, lucide-react) resolve.
const tmp = path.join(ROOT, 'node_modules', '.cache', `mt-prerender-${process.pid}.mjs`);
fs.mkdirSync(path.dirname(tmp), { recursive: true });
await build({
  entryPoints: [path.join(ROOT, 'scripts/prerender-entry.tsx')],
  bundle: true, platform: 'node', format: 'esm', outfile: tmp, logLevel: 'error',
  jsx: 'automatic', loader: { '.css': 'empty' }, packages: 'external',
});
let ssr;
try {
  ssr = await import(pathToFileURL(tmp).href);
} finally {
  fs.rmSync(tmp, { force: true });
}
const { renderRoute, homeFaq, guides, businessInfo } = ssr;

const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (shell.includes('data-static-seo')) throw new Error('prerender: dist/index.html is already processed; run a fresh vite build');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ld = (graph) => `<script type="application/ld+json" data-static-seo>${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url })),
});
const faqPage = (url, faq) => ({
  '@type': 'FAQPage', '@id': `${url}#faq`,
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

function setHead(html, { url, title, description, ogType = 'website' }) {
  const set = (h, re, tag) => {
    if (!re.test(h)) throw new Error(`prerender: index.html no longer has ${re}`);
    return h.replace(re, tag);
  };
  html = set(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = set(html, /<meta name="title"[^>]*>/, `<meta name="title" content="${esc(title)}" />`);
  html = set(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`);
  html = set(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  for (const [attr, key, val] of [
    ['property', 'og:type', ogType], ['property', 'og:url', url], ['property', 'og:title', title], ['property', 'og:description', description],
    ['name', 'twitter:url', url], ['name', 'twitter:title', title], ['name', 'twitter:description', description],
  ]) {
    html = set(html, new RegExp(`<meta ${attr}="${key}"[^>]*>`), `<meta ${attr}="${key}" content="${esc(val)}" />`);
  }
  return html;
}

function setRoot(html, inner) {
  if (!html.includes('<div id="root"></div>')) throw new Error('prerender: index.html no longer has an empty #root');
  return html.replace('<div id="root"></div>', `<div id="root">${inner}</div>`);
}

const written = [];
function write(rel, html, { minWords = 300 } = {}) {
  // Sanity checks so a broken prerender fails the build instead of shipping.
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const body = html.split('<div id="root">')[1] || '';
  const words = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  if (!title || !canonical) throw new Error(`prerender: ${rel} is missing title or canonical`);
  if (words < minWords) throw new Error(`prerender: ${rel} has only ${words} words of body text`);
  if (html.includes('\u2014')) throw new Error(`prerender: ${rel} contains an em dash`);
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  written.push(`${rel} (${words} words)`);
}

// ---- Homepage --------------------------------------------------------------
{
  const url = `${SITE}/`;
  let html = shell.replace('</head>', `${ld([
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: 'Media Traffics', isPartOf: { '@id': WEBSITE_ID }, about: { '@id': ORG_ID } },
    faqPage(url, homeFaq),
  ])}\n</head>`);
  html = setRoot(html, renderRoute('/'));
  write('index.html', html);
}

// ---- Legal pages (React components) ---------------------------------------
for (const [route, title, description] of [
  ['/privacy', `Privacy Policy | ${businessInfo.name}`, 'How Media Traffics LLC collects, uses and protects your information, including our FTC, CAN-SPAM, TCPA and CCPA practices.'],
  ['/terms', `Terms of Service | ${businessInfo.name}`, 'The terms that govern Media Traffics LLC paid advertising and lead generation services, billing and use of this website.'],
  ['/refund-policy', `Refund Policy | ${businessInfo.name}`, 'Media Traffics LLC refund and cancellation policy for paid advertising management and related services.'],
]) {
  const url = `${SITE}${route}`;
  let html = setHead(shell, { url, title, description });
  html = html.replace('</head>', `${ld([
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, isPartOf: { '@id': WEBSITE_ID }, publisher: { '@id': ORG_ID } },
    crumbs([['Home', `${SITE}/`], [title.split(' | ')[0], url]]),
  ])}\n</head>`);
  html = setRoot(html, renderRoute(route));
  write(`${route.slice(1)}.html`, html);
}

// ---- Guide pages (static, no React bundle) ---------------------------------
const listed = guides.map((g) => g.slug).sort().join();
const authored = guideContent.map((g) => g.slug).sort().join();
if (listed !== authored) throw new Error(`prerender: src/data/guides.ts (${listed}) and scripts/content/guides.mjs (${authored}) disagree`);

const linkTitles = {
  ...Object.fromEntries(guides.map((g) => [g.slug, g.title])),
  'case-studies': 'Media Traffics case studies',
  'is-media-traffics-legit': 'Is Media Traffics legit?',
  'media-traffics-reviews': 'Media Traffics reviews',
};

const GUIDE_CSS = `<style>
.mt-guide{background:#030712;color:#e5e7eb;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.65;min-height:100vh}
.mt-guide a{color:#22d3ee}
.mt-top{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 20px;border-bottom:1px solid #1f2937;max-width:1100px;margin:0 auto}
.mt-brand{display:flex;align-items:center;gap:10px;color:#fff!important;font-weight:800;text-decoration:none;font-size:18px}
.mt-btn{display:inline-block;background:linear-gradient(90deg,#06b6d4,#10b981);color:#fff!important;font-weight:700;padding:10px 18px;border-radius:999px;text-decoration:none;white-space:nowrap}
.mt-wrap{max-width:820px;margin:0 auto;padding:32px 20px 64px}
.mt-crumbs{font-size:14px;color:#6b7280;margin-bottom:20px}
.mt-guide h1{font-size:clamp(30px,5vw,44px);line-height:1.15;color:#fff;font-weight:900;margin:0 0 12px;letter-spacing:-.02em}
.mt-meta{color:#9ca3af;font-size:14px;margin:0 0 24px}
.mt-answer{background:#0f172a;border:1px solid #155e75;border-left:4px solid #06b6d4;border-radius:12px;padding:18px 20px;margin:0 0 36px}
.mt-answer strong{display:block;color:#22d3ee;text-transform:uppercase;font-size:13px;letter-spacing:.08em;margin-bottom:6px}
.mt-answer p{margin:0;font-size:18px;color:#f3f4f6}
.mt-guide h2{font-size:clamp(22px,3vw,28px);color:#fff;font-weight:800;margin:40px 0 12px;line-height:1.25}
.mt-guide h3{font-size:18px;color:#fff;font-weight:700;margin:20px 0 6px}
.mt-guide p{margin:0 0 14px;font-size:17px;color:#d1d5db}
.mt-guide ul,.mt-guide ol{margin:0 0 16px;padding-left:22px;color:#d1d5db;font-size:17px}
.mt-guide ul{list-style:disc}
.mt-guide ol{list-style:decimal}
.mt-guide li{margin:6px 0}
.mt-guide ul.check{list-style:none;padding-left:0}
.mt-guide ul.check li{padding-left:28px;position:relative}
.mt-guide ul.check li:before{content:"\\2713";position:absolute;left:4px;color:#10b981;font-weight:900}
.mt-guide code{background:#111827;padding:1px 6px;border-radius:4px;font-size:15px}
.mt-table{overflow-x:auto;margin:0 0 16px}
.mt-guide table{width:100%;border-collapse:collapse;font-size:15px;min-width:560px}
.mt-guide th,.mt-guide td{border:1px solid #1f2937;padding:10px 12px;text-align:left;vertical-align:top}
.mt-guide th{background:#0f172a;color:#fff}
.mt-guide td{color:#d1d5db}
.mt-faq h3{margin-top:24px}
.mt-sources li{font-size:15px}
.mt-book{margin-top:48px;background:#0f172a;border:1px solid #1f2937;border-radius:16px;padding:24px 20px}
.mt-book iframe{width:100%;border:none;min-height:700px;background:#fff;border-radius:12px;margin-top:12px}
.mt-foot{border-top:1px solid #1f2937;padding:28px 20px;text-align:center;color:#6b7280;font-size:14px}
.mt-foot a{color:#9ca3af;margin:0 6px}
</style>`;

for (const g of guideContent) {
  const url = `${SITE}/${g.slug}`;
  const list = guides.find((x) => x.slug === g.slug);
  let html = setHead(shell, { url, title: g.title, description: g.description, ogType: 'article' });
  // Static page: keep GTM, pixel, tracking and the stylesheet, drop the React bundle.
  html = html.replace(/\s*<script type="module"[^>]*><\/script>/g, '').replace(/\s*<link rel="modulepreload"[^>]*>/g, '');
  html = html.replace('</head>', `${GUIDE_CSS}\n${ld([
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: g.h1, description: g.description, isPartOf: { '@id': WEBSITE_ID }, inLanguage: 'en-US' },
    crumbs([['Home', `${SITE}/`], [list.title, url]]),
    {
      '@type': 'Article', '@id': `${url}#article`, headline: g.h1, description: g.description,
      datePublished: UPDATED, dateModified: UPDATED, inLanguage: 'en-US',
      author: { '@type': 'Person', name: 'Yousif Alias', url: `${SITE}/about-yousif-alias`, worksFor: { '@id': ORG_ID } },
      publisher: { '@id': ORG_ID }, mainEntityOfPage: { '@id': `${url}#webpage` },
      citation: g.sources.map((s) => s.url),
    },
    faqPage(url, g.faq),
  ])}\n</head>`);
  const sections = g.sections.map((s) => `<section><h2>${esc(s.h2)}</h2>\n${s.html.replace(/<table>/g, '<div class="mt-table"><table>').replace(/<\/table>/g, '</table></div>')}</section>`).join('\n');
  const body = `<div class="mt-guide" data-static-seo>
<header class="mt-top"><a class="mt-brand" href="/"><img src="/logo-320.webp" alt="Media Traffics logo" width="36" height="36" />Media Traffics</a><a class="mt-btn" href="#book">Book a strategy call</a></header>
<main class="mt-wrap">
<nav class="mt-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>${esc(list.title)}</span></nav>
<article>
<h1>${esc(g.h1)}</h1>
<p class="mt-meta">By <a href="/about-yousif-alias">Yousif Alias</a>, founder of Media Traffics. Updated November 8, 2026.</p>
<div class="mt-answer"><strong>Short answer</strong><p>${esc(g.answer)}</p></div>
${sections}
<section class="mt-faq"><h2>Frequently asked questions</h2>
${g.faq.map((f) => `<h3>${esc(f.q)}</h3>\n<p>${esc(f.a)}</p>`).join('\n')}
</section>
</article>
<section><h2>Related reading</h2><ul>
${g.related.map((slug) => `<li><a href="/${slug}">${esc(linkTitles[slug])}</a></li>`).join('\n')}
<li><a href="/">Media Traffics: paid ads for insurance agencies and home service companies</a></li>
</ul></section>
<section class="mt-sources"><h2>Sources</h2><ol>
${g.sources.map((s) => `<li><a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.label)}</a></li>`).join('\n')}
</ol></section>
<section id="book" class="mt-book"><h2 style="margin-top:0">Book a strategy call</h2>
<p>Media Traffics has run paid ads since 2013 for 500+ clients and generated $3.35M for them. On the call we look at your offer, your market and your numbers, and tell you straight whether paid ads make sense for you right now. Prefer the phone? Call <a href="tel:${businessInfo.contact.phone}">${esc(businessInfo.contact.phoneDisplay)}</a>.</p>
<iframe src="${BOOKING_URL}" scrolling="no" id="BcIemEVdNzY7eDxTJD3q_1764266989786" title="Book a strategy call with Media Traffics" loading="lazy"></iframe>
</section>
</main>
<footer class="mt-foot"><p>Media Traffics LLC. Paid advertising for insurance agencies and home service companies since 2013.</p>
<p><a href="tel:${businessInfo.contact.phone}">${esc(businessInfo.contact.phoneDisplay)}</a> <a href="mailto:${businessInfo.contact.email}">${esc(businessInfo.contact.email)}</a></p>
<p><a href="/">Home</a><a href="/case-studies">Case studies</a><a href="/media-traffics-reviews">Reviews</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/refund-policy">Refunds</a></p></footer>
</div>
<script src="https://safeclick.kenjiai.com/js/form_embed.js" async></script>`;
  html = setRoot(html, body);
  write(`${g.slug}.html`, html);
}

// ---- Sitemap check -----------------------------------------------------------
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const missing = guides.filter((g) => !sitemap.includes(`<loc>${SITE}/${g.slug}</loc>`)).map((g) => g.slug);
if (missing.length) throw new Error(`prerender: public/sitemap.xml is missing ${missing.join(', ')}`);

console.log(`prerender: wrote\n  ${written.join('\n  ')}`);
