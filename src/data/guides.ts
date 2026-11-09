// Guide pages. Full content lives in scripts/content/guides.mjs and is written to
// dist/<slug>.html at build time by scripts/prerender.mjs. This list feeds the
// homepage links; prerender.mjs fails the build if a slug here has no content.
export interface Guide {
  slug: string;
  title: string;
  blurb: string;
}

export const guides: Guide[] = [
  {
    slug: 'facebook-ads-for-insurance-agencies',
    title: 'Facebook Ads for Insurance Agencies',
    blurb: 'Final expense, Medicare and life campaigns that pass Meta and CMS rules.',
  },
  {
    slug: 'insurance-cost-per-lead',
    title: 'Insurance Cost Per Lead',
    blurb: 'What insurance leads cost, and the number that matters more.',
  },
  {
    slug: 'google-ads-for-hvac',
    title: 'Google Ads for HVAC Companies',
    blurb: 'Search, Local Services Ads and the keywords that book service calls.',
  },
  {
    slug: 'roofing-lead-generation',
    title: 'Roofing Lead Generation',
    blurb: 'Storm, retail and insurance-claim roofing leads from paid ads.',
  },
  {
    slug: 'plumbing-ads',
    title: 'Plumbing Ads That Book Jobs',
    blurb: 'Emergency and planned plumbing work on Google and Meta.',
  },
  {
    slug: 'how-to-choose-a-paid-ads-agency',
    title: 'How to Choose a Paid Ads Agency',
    blurb: 'Questions to ask before you hand anyone your ad account.',
  },
];
