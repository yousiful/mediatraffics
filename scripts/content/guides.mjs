// Content for the guide pages written to dist/<slug>.html by scripts/prerender.mjs.
// Rules for anything added here:
// - Proof numbers: only 12+ years / since 2013, 500+ clients, $3.35M generated for
//   clients, $186K from a single funnel. Nothing else.
// - Every outside fact or number must link to a source that was actually fetched,
//   and the source goes in `sources`.
// - No client names, no guarantees of leads or revenue, no fake scarcity, no em dashes.
// `answer` is the 2-3 sentence direct answer shown at the top of the page.

const S = {
  metaSac: { label: 'Meta for Developers: Special Ad Category', url: 'https://developers.facebook.com/docs/marketing-api/audiences/special-ad-category' },
  metaFin: { label: 'Meta Transparency Center: Financial and Insurance Products and Services', url: 'https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services/' },
  loomer: { label: 'Jon Loomer Digital: Special Ad Categories, a Guide for Meta Ads', url: 'https://www.jonloomer.com/special-ad-categories-meta-ads/' },
  tpmo: { label: 'eCFR: 42 CFR 422.2267 (TPMO disclaimer, paragraph (e)(41))', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-422/subpart-V/section-422.2267' },
  soa: { label: 'Hall Render: CMS Revises Medicare Advantage Marketing Guidance for Scope of Appointment Forms (June 1, 2026)', url: 'https://hallrender.com/2026/06/01/cms-revises-medicare-advantage-marketing-guidance-for-scope-of-appointment-forms/' },
  tcpa: { label: 'Reed Smith: Eleventh Circuit Vacates FCC One-to-One Consent Rule (Jan 29, 2025)', url: 'https://www.reedsmith.com/our-insights/blogs/technology-law-dispatch/102k2uj/eleventh-circuit-vacates-fcc-one-to-one-consent-rule/' },
  searchBench: { label: 'LocaliQ: 2026 Search Advertising Benchmarks', url: 'https://localiq.com/blog/search-advertising-benchmarks/' },
  fbBench: { label: 'LocaliQ: Facebook Advertising Benchmarks for 2026', url: 'https://localiq.com/blog/facebook-advertising-benchmarks/' },
  lsa: { label: 'Google: Local Services Ads', url: 'https://business.google.com/us/ad-solutions/local-service-ads/' },
  partner: { label: 'Google Ads Help: How to become a Google Partner or Premier Partner', url: 'https://support.google.com/google-ads/answer/9702452?hl=en' },
};

const a = (s) => `<a href="${s.url}" rel="noopener" target="_blank">${s.label.split(':')[0]}</a>`;

export const guides = [
  {
    slug: 'facebook-ads-for-insurance-agencies',
    title: 'Facebook Ads for Insurance Agencies | Media Traffics',
    h1: 'Facebook ads for insurance agencies: final expense, Medicare and life',
    description: 'How to run Facebook ads for final expense, Medicare and life insurance under Meta\'s financial services ad rules and CMS marketing rules, from an agency running paid ads since 2013.',
    answer: 'Facebook ads work for final expense, Medicare and life insurance when the campaign is built around Meta\'s special ad category rules and every lead gets a call within minutes. Because insurance falls under Meta\'s financial products and services category, you lose age, gender and ZIP code targeting, so the creative and the lead form have to do the qualifying. Media Traffics has run paid ads since 2013 for 500+ clients and generated $3.35M for them.',
    sections: [
      {
        h2: 'What Meta\'s rules change for insurance ads',
        html: `<p>Meta puts insurance ads in a special ad category for financial products and services (${a(S.loomer)} lists insurance under it, and Meta's API calls the category <code>FINANCIAL_PRODUCTS_SERVICES</code>). Once a campaign is in that category, ${a(S.metaSac)} says:</p>
<ul>
<li>Age is generally fixed to 18 through 65+. You cannot target "65 and older" for Medicare.</li>
<li>You cannot choose a gender.</li>
<li>ZIP code targeting is not supported, and any location you pick has to cover at least a 15 mile radius in the US and Canada.</li>
<li>Some detailed targeting options disappear and you cannot exclude detailed targeting at all. Lookalike audiences are unavailable.</li>
</ul>
<p>The ${a(S.metaFin)} policy on financial and insurance ads also requires insurance ads to target people 18 or older. Agencies that skip the category get ads rejected or accounts restricted, which costs more than the targeting you give up.</p>
<p>Broad targeting by state or a large radius still works, paired with creative that calls out the buyer directly ("If you're over 60 and still don't have burial coverage...") and lead forms with questions that filter out people who don't qualify. Meta's delivery system learns who converts from your form submissions, so clean conversion data matters more than clever audiences.</p>`,
      },
      {
        h2: 'How we set up each product line',
        html: `<table>
<thead><tr><th>Product</th><th>Who the ad has to reach</th><th>What the creative says</th><th>Form and follow-up</th></tr></thead>
<tbody>
<tr><td>Final expense</td><td>Older adults worried about leaving funeral costs to family</td><td>Plain language, real faces, the monthly cost question answered up front</td><td>Ask age range, state and coverage amount. Call within 5 minutes, text if no answer.</td></tr>
<tr><td>Medicare (Advantage, Supplement, Part D)</td><td>People turning 65 and existing beneficiaries reviewing plans</td><td>Plan review and benefits questions, with the required TPMO disclaimer</td><td>Record the Scope of Appointment before the appointment. Disclaimer read on the call before benefits.</td></tr>
<tr><td>Life (term, mortgage protection, IUL)</td><td>Homeowners and parents with people depending on their income</td><td>Protecting the mortgage or the family, tied to a life event</td><td>Ask age, smoker status and coverage goal. Book a call slot on the thank-you page.</td></tr>
</tbody></table>
<p>These are the setups we start from. The ad account tells us within a few weeks which angle books appointments at the lowest cost, and we move budget there.</p>`,
      },
      {
        h2: 'Medicare ads have extra CMS rules',
        html: `<p>If you sell Medicare Advantage or Part D plans for more than one carrier, you are a third-party marketing organization (TPMO) under 42 CFR 422.2267 (${a(S.tpmo)}). The TPMO disclaimer ("We do not offer every plan available in your area...") has to be prominently displayed on your website, included in marketing materials and ads, sent in electronic communications, and read on sales calls before you discuss benefits. We put it on the landing page, the lead form and the ad itself.</p>
<p>CMS also changed the Scope of Appointment rules. ${a(S.soa)} reports that CMS eliminated the 48-hour wait between the Scope of Appointment and the appointment in its final rule published April 6, 2026. You still have to agree on and record the Scope of Appointment before the appointment. Confirm the effective date with your carrier or compliance team before you change your booking flow.</p>`,
      },
      {
        h2: 'Speed to lead decides whether the ads pay off',
        html: `<p>An insurance lead from Meta is someone who tapped an ad on their phone a minute ago. They are not sitting by the phone waiting for an agent. The agencies that win call first. We route every lead straight into your CRM, tag it by campaign and ad, and fire an instant text and email so the prospect hears from you while they still remember filling out the form.</p>
<p>If your agents can't call every lead within minutes, our sister platform <a href="https://kenjiai.com">KenjiAI</a> runs AI voice agents that call, qualify and book the appointment for you.</p>`,
      },
      {
        h2: 'Consent language on your own forms',
        html: `<p>In January 2025 the Eleventh Circuit vacated the FCC's "one-to-one consent" rule in <em>Insurance Marketing Coalition v. FCC</em> (${a(S.tcpa)}). That rule mainly hit agencies buying shared leads from comparison sites. Running your own ads gives you first-party leads with your agency's name on the consent checkbox, which is cleaner either way. Have your attorney approve the consent wording on every form. This page is not legal advice.</p>`,
      },
      {
        h2: 'Launch checklist for an insurance Facebook campaign',
        html: `<ul class="check">
<li>Campaign set to the financial products and services special ad category</li>
<li>Agency licensed in every state the ads reach</li>
<li>TPMO disclaimer on ads, landing page and call script (Medicare)</li>
<li>Lead form with 2 to 4 qualifying questions and attorney-approved consent text</li>
<li>Leads flow into the CRM in real time, tagged by campaign</li>
<li>Instant text and email, then a call within 5 minutes during business hours</li>
<li>Pixel and Conversions API sending lead and appointment events back to Meta</li>
<li>Weekly report on cost per lead, contact rate, appointments and policies written</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Can I target people over 65 with Facebook ads for Medicare?', a: 'No. Insurance ads run in Meta\'s financial products and services special ad category, where age is generally fixed to 18 through 65+. You reach Medicare buyers with creative and form questions that speak to them, and Meta\'s delivery learns from who converts.' },
      { q: 'Do Facebook insurance leads convert?', a: 'They convert when someone calls them fast. A Facebook lead is lower intent than a Google search, so the follow-up system matters as much as the ad. We track contact rate, appointment rate and policies written, so you see what the leads turn into.' },
      { q: 'Is it better to buy insurance leads or run my own ads?', a: 'Your own ads give you exclusive, first-party leads with your agency named in the consent language, and you control the volume. Bought leads are faster to start but are often shared with other agents. Many agencies run their own ads once they have a follow-up process that can handle the volume.' },
      { q: 'Do I need the TPMO disclaimer on my Facebook ads?', a: 'If you sell Medicare Advantage or Part D plans for more than one organization, 42 CFR 422.2267(e)(41) requires the TPMO disclaimer in marketing materials, on your website, in electronic communications and on sales calls. We include it on the ad, the landing page and the form.' },
    ],
    related: ['insurance-cost-per-lead', 'how-to-choose-a-paid-ads-agency', 'case-studies'],
    sources: [S.metaSac, S.loomer, S.metaFin, S.tpmo, S.soa, S.tcpa],
  },

  {
    slug: 'insurance-cost-per-lead',
    title: 'Insurance Cost Per Lead: 2026 Benchmarks | Media Traffics',
    h1: 'Insurance cost per lead: what leads cost and what to measure instead',
    description: 'Insurance cost per lead benchmarks for Google Ads in 2026, how to turn cost per lead into cost per policy, and what drives lead costs up or down for insurance agencies.',
    answer: 'LocaliQ\'s 2026 search advertising benchmarks put the average Google Ads cost per lead for Finance & Insurance at $74.44, with a $3.39 average click and a 2.64% conversion rate. Your number will move with product, state, season and lead form. The figure to manage is cost per policy written (cost per lead divided by your close rate), because a cheap lead nobody can reach costs more than an expensive one that buys.',
    sections: [
      {
        h2: 'Published benchmarks',
        html: `<table>
<thead><tr><th>Platform and category</th><th>Avg. cost per click</th><th>Avg. conversion rate</th><th>Avg. cost per lead</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Google Search, Finance &amp; Insurance</td><td>$3.39</td><td>2.64%</td><td>$74.44</td><td>${a(S.searchBench)}</td></tr>
<tr><td>Facebook, Finance &amp; Insurance (traffic campaigns)</td><td>$0.86</td><td>Not reported</td><td>Not reported</td><td>${a(S.fbBench)}</td></tr>
</tbody></table>
<p>LocaliQ groups insurance with finance and does not publish an insurance-only row, and its Facebook report has no lead-campaign figure for the category. Treat these as a sanity check. Final expense, Medicare and life leads all price differently, and a lead form with qualifying questions costs more per lead than a one-tap form while producing leads that answer the phone.</p>`,
      },
      {
        h2: 'Turn cost per lead into cost per policy',
        html: `<p>Cost per lead tells you what the platform charged. Cost per policy tells you whether you made money. The math is simple:</p>
<ul>
<li><strong>Cost per contact</strong> = cost per lead / contact rate</li>
<li><strong>Cost per appointment</strong> = cost per lead / appointment rate</li>
<li><strong>Cost per policy</strong> = cost per lead / close rate</li>
</ul>
<p>Worked example with made-up round numbers: if you pay $40 per lead and write 1 policy for every 10 leads, each policy costs you $400 in ad spend. If a tighter form raises your cost to $55 per lead but you now write 1 in 6, each policy costs about $330. The more expensive lead is the better buy. Compare that against the first-year commission on the policy and you know whether to scale.</p>`,
      },
      {
        h2: 'What pushes insurance lead costs up or down',
        html: `<ul>
<li><strong>Product and season.</strong> Medicare competition for attention climbs around enrollment periods.</li>
<li><strong>Geography.</strong> Licensed states, population and how many agents bid in that market.</li>
<li><strong>Form friction.</strong> More questions mean fewer, better leads.</li>
<li><strong>Creative fatigue.</strong> The same ad shown to the same people for weeks gets more expensive. We rotate new angles before costs climb.</li>
<li><strong>Conversion data quality.</strong> Sending appointments and sales back to Meta and Google teaches the algorithm who to find. Sending only raw form fills teaches it to find form-fillers.</li>
<li><strong>Special ad category limits</strong> on Meta remove age, gender and ZIP targeting (${a(S.metaSac)}), so qualifying shifts to the creative and form.</li>
</ul>`,
      },
      {
        h2: 'Exclusive leads from your own ads vs bought leads',
        html: `<table>
<thead><tr><th></th><th>Your own ads</th><th>Bought leads</th></tr></thead>
<tbody>
<tr><td>Who else gets the lead</td><td>Nobody. It's yours.</td><td>Often sold to several agents</td></tr>
<tr><td>Consent language</td><td>Names your agency</td><td>Names the vendor or a list of partners</td></tr>
<tr><td>Volume control</td><td>Raise or lower budget daily</td><td>Depends on vendor supply</td></tr>
<tr><td>Setup time</td><td>A few weeks to test and optimize</td><td>Immediate</td></tr>
<tr><td>Data you keep</td><td>Pixel, audiences and CRM history</td><td>The lead record only</td></tr>
</tbody></table>
<p>The FCC's one-to-one consent rule, which would have hit shared lead sellers hardest, was vacated by the Eleventh Circuit in January 2025 (${a(S.tcpa)}). Consent still matters, and first-party leads keep it simple.</p>`,
      },
      {
        h2: 'What we report every week',
        html: `<p>Every insurance client gets cost per lead, contact rate, appointments booked, cost per appointment and, once they share it, policies written and cost per policy. We have run paid ads since 2013 for 500+ clients and generated $3.35M for them. We judge our own work on cost per appointment and cost per policy.</p>`,
      },
    ],
    faq: [
      { q: 'What is a good cost per lead for insurance?', a: 'LocaliQ\'s 2026 Google Ads benchmark for Finance & Insurance is $74.44 per lead. A good number for you is one where cost per lead divided by your close rate comes in comfortably under the commission you earn on a policy.' },
      { q: 'Why are my Facebook insurance leads cheap but never answer?', a: 'One-tap lead forms with no qualifying questions attract people who barely remember submitting. Add 2 to 4 questions, call within minutes, and send appointment events back to Meta so it optimizes for people who book.' },
      { q: 'Are Google leads better than Facebook leads for insurance?', a: 'Google Search leads come from people actively looking, so they usually show higher intent. Facebook reaches people before they search and needs faster follow-up. Compare the two on cost per policy, not cost per lead.' },
      { q: 'How long until I know my real cost per lead?', a: 'Expect a few weeks of testing before costs settle, longer for small budgets. Judge the campaign on cost per appointment and cost per policy once enough leads have worked through your pipeline.' },
    ],
    related: ['facebook-ads-for-insurance-agencies', 'how-to-choose-a-paid-ads-agency', 'case-studies'],
    sources: [S.searchBench, S.fbBench, S.metaSac, S.tcpa],
  },

  {
    slug: 'google-ads-for-hvac',
    title: 'Google Ads for HVAC Companies | Media Traffics',
    h1: 'Google Ads for HVAC companies: Search, Local Services Ads and call tracking',
    description: 'How HVAC companies use Google Search ads and Local Services Ads to book repair and replacement calls, which keywords to run and exclude, and what to track. From a paid ads agency running campaigns since 2013.',
    answer: 'Google Ads works for HVAC because people search the moment their AC or furnace quits. Run Search campaigns on repair and replacement keywords, add Local Services Ads (Google\'s pay-per-lead listings, where HVAC is an eligible category), and count booked calls as conversions. LocaliQ\'s 2026 benchmarks put the average Home & Home Improvement search lead at $90.92 with an $8.33 click.',
    sections: [
      {
        h2: 'Search ads vs Local Services Ads for HVAC',
        html: `<table>
<thead><tr><th></th><th>Google Search ads</th><th>Local Services Ads</th></tr></thead>
<tbody>
<tr><td>How you pay</td><td>Per click</td><td>Per lead, when a customer contacts you through the ad (${a(S.lsa)})</td></tr>
<tr><td>Where it shows</td><td>Search results, below the Local Services Ads</td><td>Top of results, with the Google verification badge</td></tr>
<tr><td>Control</td><td>Keywords, ad copy, landing page, bids, schedule</td><td>Service categories, service area, budget, hours</td></tr>
<tr><td>Best for</td><td>Replacement and high-ticket installs where your landing page sells</td><td>Repair calls from people who want a verified local company fast</td></tr>
</tbody></table>
<p>For HVAC we usually recommend both. Local Services Ads catch the "my AC is out" call, and Search campaigns go after system replacements, where one job can pay for a month of ads.</p>`,
      },
      {
        h2: 'Keyword groups that book HVAC jobs',
        html: `<ul>
<li><strong>Emergency repair:</strong> "ac repair near me", "furnace not working", "emergency hvac service". Highest intent, call-heavy, needs someone answering.</li>
<li><strong>Replacement and installation:</strong> "new ac unit cost", "furnace replacement", "heat pump installation". Lower volume, highest job value.</li>
<li><strong>Maintenance and plans:</strong> "ac tune up", "hvac maintenance plan". Cheaper clicks, builds recurring revenue.</li>
</ul>
<p>Put each group in its own campaign so replacement budget doesn't get eaten by tune-up clicks. Add negative keywords from day one: jobs, salary, training, school, DIY, "how to", parts, manual, and any brands of equipment you don't service.</p>`,
      },
      {
        h2: 'Track booked calls, not clicks',
        html: `<p>The search benchmark for Home &amp; Home Improvement is a $90.92 cost per lead at an 8.05% conversion rate (${a(S.searchBench)}). Your campaign only beats that if Google knows which clicks became booked jobs. We set up:</p>
<ul class="check">
<li>Call tracking on the ads and the landing page, with calls over 60 seconds counted as conversions</li>
<li>Form fills and online bookings sent to the CRM in real time</li>
<li>Booked jobs and sold replacements imported back into Google Ads</li>
<li>A weekly report on cost per booked call and revenue per lead</li>
</ul>`,
      },
      {
        h2: 'Season, weather and schedule',
        html: `<p>HVAC demand follows the weather. We raise budgets when a heat wave or cold snap hits your service area and pull back on mild weeks, and we run ads only during hours someone can answer the phone or book online. A click at 2 a.m. that reaches voicemail is money gone, unless you have an after-hours answering service or an AI receptionist taking the call (our sister platform <a href="https://kenjiai.com">KenjiAI</a> runs those).</p>`,
      },
      {
        h2: 'Landing page checklist for HVAC ads',
        html: `<ul class="check">
<li>Phone number at the top, tap-to-call on mobile</li>
<li>Service area and towns listed on the page</li>
<li>Separate pages for repair and for replacement</li>
<li>Reviews and license number visible</li>
<li>Financing offer on replacement pages if you have one</li>
<li>Short form: name, phone, ZIP, what's wrong</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'How much should an HVAC company spend on Google Ads?', a: 'Enough to get steady data in your service area, which depends on your market and how many competitors bid. Start with the budget you can sustain for 60 to 90 days, then scale the campaigns that book jobs at a cost you are happy with.' },
      { q: 'Are Local Services Ads worth it for HVAC?', a: 'For repair calls they usually are, because you pay per lead and show at the top of results with the Google verification badge. HVAC is one of the eligible home service categories. Run them alongside Search, which gives you more control over replacement jobs.' },
      { q: 'What is the average cost per lead for HVAC Google Ads?', a: 'LocaliQ\'s 2026 benchmark for the Home & Home Improvement category is $90.92 per lead with an $8.33 average click. It does not break out HVAC on its own, and replacement keywords cost more than tune-ups.' },
      { q: 'Should HVAC companies run Facebook ads too?', a: 'Facebook works for maintenance plans, seasonal tune-up offers and replacement financing offers, where you reach homeowners before their system breaks. Emergency repair belongs on Google.' },
    ],
    related: ['plumbing-ads', 'roofing-lead-generation', 'how-to-choose-a-paid-ads-agency'],
    sources: [S.lsa, S.searchBench],
  },

  {
    slug: 'roofing-lead-generation',
    title: 'Roofing Lead Generation With Paid Ads | Media Traffics',
    h1: 'Roofing lead generation with Google and Facebook ads',
    description: 'How roofing companies generate leads from Google Search, Local Services Ads and Facebook ads, what roofing leads cost by channel, and how to qualify homeowners before the inspection.',
    answer: 'Roofing companies get paid leads from three places: Google Search for homeowners with a leak or a quote request, Local Services Ads (roofing is an eligible category, billed per lead), and Facebook ads that reach homeowners before they start searching. LocaliQ\'s 2026 benchmarks put the average Home & Home Improvement lead at $42.95 on Facebook and $90.92 on Google Search. Facebook leads cost less and need a call within minutes.',
    sections: [
      {
        h2: 'The three channels compared',
        html: `<table>
<thead><tr><th>Channel</th><th>Intent</th><th>How you pay</th><th>Benchmark (Home &amp; Home Improvement)</th></tr></thead>
<tbody>
<tr><td>Google Search</td><td>High. They are looking for a roofer now.</td><td>Per click</td><td>$90.92 per lead, $8.33 per click (${a(S.searchBench)})</td></tr>
<tr><td>Local Services Ads</td><td>High</td><td>Per lead (${a(S.lsa)})</td><td>Not published</td></tr>
<tr><td>Facebook and Instagram</td><td>Lower. They weren't searching yet.</td><td>Per impression, optimized for leads</td><td>$42.95 per lead, $2.18 per click (${a(S.fbBench)})</td></tr>
</tbody></table>
<p>These are category-wide averages that include all home improvement trades. Roofing jobs are large tickets, so clicks in roofing markets often run above the category average.</p>`,
      },
      {
        h2: 'Storm response campaigns',
        html: `<p>After hail or wind damage, homeowners in the affected area need an inspection. Roofing is not a special ad category on Meta, so you can target the specific towns and ZIP codes that got hit. We keep a storm campaign built and paused, then switch it on with the affected area as soon as the storm passes. Speed matters here because every roofer in the region is doing the same thing.</p>
<p>Check your state's rules on what contractors can say and do around insurance claims before you write claim-related ad copy. Some states limit contractors from negotiating claims for homeowners.</p>`,
      },
      {
        h2: 'Retail replacement campaigns',
        html: `<p>Outside storm season, the steady money is retail replacement: homeowners with an aging roof who want a quote. These campaigns lead with a free inspection, financing if you offer it, and proof of past work in the area. Facebook works well here because you can reach homeowners in your service area before the roof starts leaking.</p>`,
      },
      {
        h2: 'Qualify before you send someone up a ladder',
        html: `<p>An inspection costs you a truck, a crew member and an afternoon. Ask on the form or on the first call:</p>
<ul class="check">
<li>Do you own the home?</li>
<li>About how old is the roof?</li>
<li>What's going on: leak, storm damage, age, selling the house?</li>
<li>Has an insurance adjuster been out yet?</li>
<li>When do you want the work done?</li>
</ul>
<p>Renters and "just curious" leads drop out here. The cost per lead goes up a little and the cost per signed contract goes down.</p>`,
      },
      {
        h2: 'Follow-up and booking',
        html: `<p>Every lead goes straight into your CRM with an instant text and a call attempt within minutes. Facebook roofing leads go cold fast. If your office can't keep up, AI voice agents from our sister platform <a href="https://kenjiai.com">KenjiAI</a> can call, qualify and book inspections. We report cost per lead, cost per inspection and cost per signed job every week.</p>
<p>Media Traffics has run paid ads since 2013 for 500+ clients and generated $3.35M for them. One funnel we built brought in $186K on its own.</p>`,
      },
    ],
    faq: [
      { q: 'What is the best way to get roofing leads?', a: 'Run Google Search and Local Services Ads to catch homeowners already looking, and Facebook ads to reach homeowners in your area before they search. Qualify every lead on ownership, roof age and timeline before booking an inspection.' },
      { q: 'How much do roofing leads cost?', a: 'LocaliQ\'s 2026 benchmarks for the Home & Home Improvement category are $90.92 per lead on Google Search and $42.95 per lead on Facebook. Roofing is part of that category and its large job size can push click costs higher.' },
      { q: 'Do Facebook ads work for roofers?', a: 'Yes, for retail replacement and storm response, as long as someone calls each lead within minutes. Facebook leads are lower intent than Google leads, so follow-up speed and qualifying questions decide whether they turn into inspections.' },
      { q: 'Should I buy roofing leads or run my own ads?', a: 'Your own ads give you exclusive leads and control over volume and targeting. Bought leads are often shared with other roofers. If you can follow up fast, running your own campaigns usually gives you more control over cost per signed job.' },
    ],
    related: ['google-ads-for-hvac', 'plumbing-ads', 'how-to-choose-a-paid-ads-agency'],
    sources: [S.searchBench, S.fbBench, S.lsa],
  },

  {
    slug: 'plumbing-ads',
    title: 'Plumbing Ads That Book Jobs | Media Traffics',
    h1: 'Plumbing ads that book jobs: Google, Local Services Ads and Facebook',
    description: 'How plumbing companies run Google Ads, Local Services Ads and Facebook ads for emergency and planned jobs, which keywords to exclude, and why call handling decides your cost per job.',
    answer: 'Plumbing ads that book jobs separate emergency work from planned work. Emergency searches like burst pipe, clogged drain or no hot water belong on Google Search and Local Services Ads (plumbing is an eligible category, billed per lead), with someone answering every call. Planned jobs such as water heater replacement and repiping can also run on Facebook, and every campaign should be judged on booked jobs, not clicks.',
    sections: [
      {
        h2: 'Emergency vs planned plumbing campaigns',
        html: `<table>
<thead><tr><th></th><th>Emergency</th><th>Planned</th></tr></thead>
<tbody>
<tr><td>Examples</td><td>Burst pipe, sewer backup, no hot water, leak</td><td>Water heater replacement, repipe, remodel, water softener</td></tr>
<tr><td>Channels</td><td>Google Search, Local Services Ads</td><td>Google Search, Facebook and Instagram</td></tr>
<tr><td>What wins</td><td>Showing up first and answering on the first ring</td><td>Price clarity, financing, reviews</td></tr>
<tr><td>Schedule</td><td>Every hour you can dispatch</td><td>Business hours</td></tr>
</tbody></table>
<p>Local Services Ads charge per lead when a customer contacts you through the ad, and plumbing is one of Google's eligible home service categories (${a(S.lsa)}).</p>`,
      },
      {
        h2: 'Keywords and negatives',
        html: `<p>Group keywords by job type so you can bid more on the work you want: "emergency plumber near me", "water heater replacement", "drain cleaning", "sewer line repair", "slab leak". Then block the clicks that never book:</p>
<ul>
<li>Jobs, salary, apprenticeship, plumbing school, license exam</li>
<li>DIY, "how to", parts, Home Depot, Lowe's</li>
<li>Towns outside your service area</li>
<li>Services you don't offer</li>
</ul>
<p>The 2026 Google Search benchmark for the Home &amp; Home Improvement category is $8.33 per click and $90.92 per lead (${a(S.searchBench)}). Every wasted click on a "how to unclog a drain" search pushes your real number up.</p>`,
      },
      {
        h2: 'Call handling decides your cost per job',
        html: `<p>A plumbing ad that rings a phone nobody answers is the most expensive ad you'll run. Before we raise a budget we check:</p>
<ul class="check">
<li>Every call answered live, or by an answering service or AI receptionist after hours</li>
<li>Missed calls get an automatic text back within a minute</li>
<li>Calls recorded so you can hear how leads are handled</li>
<li>Booked jobs tagged in the CRM by campaign</li>
</ul>
<p>Our sister platform <a href="https://kenjiai.com">KenjiAI</a> runs AI voice agents that answer, qualify and book plumbing calls around the clock if your office can't.</p>`,
      },
      {
        h2: 'Where Facebook fits for plumbers',
        html: `<p>Nobody scrolls Instagram looking for a plumber during a flood. Facebook works for planned work: water heater replacement offers, whole-home repiping, maintenance memberships and financing. The 2026 Facebook benchmark for Home &amp; Home Improvement lead campaigns is $42.95 per lead (${a(S.fbBench)}). Those leads need a call fast, the same day at the latest.</p>`,
      },
      {
        h2: 'Working with Media Traffics',
        html: `<p>Media Traffics has run paid ads for home service companies since 2013, with 500+ clients and $3.35M generated for them. We build the campaigns, wire the leads into your CRM and report cost per booked job every week. Read <a href="/how-to-choose-a-paid-ads-agency">how to choose a paid ads agency</a> before you sign with anyone, including us.</p>`,
      },
    ],
    faq: [
      { q: 'What is the best advertising for plumbers?', a: 'Google Search and Local Services Ads for emergency calls, because people search the moment something breaks. Facebook adds planned jobs like water heater replacement. Judge both on booked jobs and revenue, not clicks.' },
      { q: 'Are Google Local Services Ads good for plumbers?', a: 'They are a strong fit for emergency work. You pay per lead instead of per click and appear at the top of results with the Google verification badge. Plumbing is an eligible category in the US.' },
      { q: 'How much do plumbing leads cost on Google?', a: 'LocaliQ\'s 2026 benchmark for the Home & Home Improvement category is $90.92 per lead and $8.33 per click on Google Search. Plumbing is not broken out separately, and emergency keywords usually cost more than planned work.' },
      { q: 'Why am I getting calls but no booked jobs?', a: 'Usually it is a mix of wrong-intent keywords (DIY, jobs, parts), calls from outside your service area, and calls not answered live. Fix negatives and service area first, then listen to call recordings.' },
    ],
    related: ['google-ads-for-hvac', 'roofing-lead-generation', 'how-to-choose-a-paid-ads-agency'],
    sources: [S.lsa, S.searchBench, S.fbBench],
  },

  {
    slug: 'how-to-choose-a-paid-ads-agency',
    title: 'How to Choose a Paid Ads Agency | Media Traffics',
    h1: 'How to choose a paid ads agency: questions to ask before you sign',
    description: 'A checklist for choosing a paid ads agency for an insurance agency or home service company: account ownership, reporting, industry experience, what a Google Partner badge means, and red flags.',
    answer: 'Choose a paid ads agency that knows your industry, lets you own the ad accounts and the data, reports on booked appointments and cost per sale, and refuses to guarantee results. Ask who will work on your account day to day, ask to see results in your niche, and read the agency\'s negative reviews along with the good ones.',
    sections: [
      {
        h2: 'Questions to ask, and the answers you want',
        html: `<table>
<thead><tr><th>Ask</th><th>Good answer</th><th>Red flag</th></tr></thead>
<tbody>
<tr><td>Who owns the ad accounts, pixel and lead data?</td><td>You do. The agency works inside your accounts as a partner or admin.</td><td>The agency runs everything in its own account and you lose it if you leave.</td></tr>
<tr><td>What do you report on?</td><td>Cost per lead, contact rate, appointments, cost per appointment, sales</td><td>Impressions, reach and clicks only</td></tr>
<tr><td>Have you run ads in my industry?</td><td>Specific examples, compliance rules they already know</td><td>"We can do any industry"</td></tr>
<tr><td>Who touches my account each week?</td><td>A named person, and how often they optimize</td><td>Vague answers about "the team"</td></tr>
<tr><td>Can you guarantee results?</td><td>No, and an explanation of what they do commit to</td><td>A guaranteed number of leads or a revenue promise</td></tr>
<tr><td>What happens to leads after the form?</td><td>CRM routing, instant follow-up, speed-to-lead tracking</td><td>"That's your sales team's job"</td></tr>
<tr><td>How do I cancel?</td><td>Clear terms in writing before you pay</td><td>Terms that only show up after you sign</td></tr>
</tbody></table>`,
      },
      {
        h2: 'What a Google Partner badge does and doesn\'t tell you',
        html: `<p>Per ${a(S.partner)}, a Google Partner must keep $10,000 in ad spend across managed accounts over 90 days, hold a minimum 70% optimization score, and have certified account strategists. Premier Partners are the top 3% of participating companies in a country each year.</p>
<p>The badge tells you the agency spends real money on Google and keeps its accounts in line with Google's recommendations. It says nothing about your industry, your cost per appointment or whether they pick up the phone. Use it as a minimum bar and ask the questions above.</p>`,
      },
      {
        h2: 'Industry experience shows up in compliance',
        html: `<p>An insurance agency's ads run under Meta's financial products and services special ad category, which removes age, gender and ZIP targeting (${a(S.metaSac)}). Medicare marketers must use the CMS TPMO disclaimer (${a(S.tpmo)}). An agency that has run insurance campaigns knows this before the first call. For home services, the tell is whether they bring up Local Services Ads, call tracking and service-area negatives without being asked. Our guides on <a href="/facebook-ads-for-insurance-agencies">Facebook ads for insurance agencies</a> and <a href="/google-ads-for-hvac">Google Ads for HVAC</a> show what that looks like.</p>`,
      },
      {
        h2: 'Read the bad reviews too',
        html: `<p>Every agency that has worked with hundreds of businesses has unhappy clients. What matters is how they respond. Look for public replies, refunds handled in writing and a published refund policy. We publish ours, and we answer the hard questions on our <a href="/is-media-traffics-legit">Is Media Traffics legit?</a> page, including the negative reviews.</p>`,
      },
      {
        h2: 'How Media Traffics answers these questions',
        html: `<p>We have run paid ads since 2013, for 500+ clients, and generated $3.35M for them. One funnel we built produced $186K on its own. You own your ad accounts and data, we report on appointments and sales, and we don't guarantee results because nobody honestly can. See our <a href="/case-studies">case studies</a> and <a href="/media-traffics-reviews">reviews</a>, then book a call and ask us everything on this page.</p>`,
      },
    ],
    faq: [
      { q: 'What should I look for in a paid ads agency?', a: 'Industry experience, account and data ownership on your side, reporting on appointments and sales instead of clicks, a named person on your account, clear cancellation terms, and no guaranteed results.' },
      { q: 'Does a Google Partner badge mean an agency is good?', a: 'It means the agency manages at least $10,000 in Google Ads spend over 90 days, keeps a 70% or higher optimization score and has certified staff. It does not measure results in your industry, so treat it as a minimum bar.' },
      { q: 'Should an agency guarantee leads?', a: 'No. Ad platforms control delivery and pricing, so a guaranteed lead count usually means the agency will buy cheap, low-quality leads to hit the number. Ask what they commit to instead: work, testing, tracking and reporting.' },
      { q: 'Who should own my ad account?', a: 'You should. The agency should work inside your Meta and Google accounts as a partner or admin so the pixel data, audiences and history stay with you if you ever switch agencies.' },
    ],
    related: ['facebook-ads-for-insurance-agencies', 'google-ads-for-hvac', 'is-media-traffics-legit'],
    sources: [S.partner, S.metaSac, S.tpmo],
  },
];
