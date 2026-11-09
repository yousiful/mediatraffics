// Tell Bing, Yandex, Seznam, Naver (and through Bing, ChatGPT search / Copilot) about
// every URL in the live sitemap. Run after a deploy is live: `npm run indexnow`
// Optional args: specific URLs to submit instead of the whole sitemap.
// Same as kenjiwebsite/scripts/indexnow.mjs: posts to Bing directly (Bing shares with the others).
// Key file: public/ce2c25b47bad28bab70cbef7449b2907.txt (must stay deployed).
const SITE = 'https://mediatraffics.com';
const KEY = 'ce2c25b47bad28bab70cbef7449b2907';

let urls = process.argv.slice(2);
if (!urls.length) {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
const res = await fetch('https://www.bing.com/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'mediatraffics.com', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`indexnow: submitted ${urls.length} URLs -> HTTP ${res.status} ${await res.text()}`);
