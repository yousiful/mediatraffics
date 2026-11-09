// Homepage FAQ. Rendered visibly in App.tsx and emitted as FAQPage JSON-LD by
// scripts/prerender.mjs, so the two can't drift apart. Plain text answers only.
export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: 'What does Media Traffics do?',
    a: 'Media Traffics builds, launches and manages paid ad campaigns on Meta (Facebook and Instagram), Google and LinkedIn, then routes every lead straight into your CRM so your team can call it while it is still warm. We have run paid ads for businesses since 2013.',
  },
  {
    q: 'Who does Media Traffics work with?',
    a: 'Mostly insurance agencies (final expense, Medicare and life) and home service companies such as HVAC, roofing and plumbing. These businesses sell a high-value job or policy, so a qualified lead is worth real money and the ad math works.',
  },
  {
    q: 'What results has Media Traffics produced?',
    a: 'Since 2013 we have worked with 500+ clients and generated $3.35M for them. One funnel we built produced $186K on its own. Results depend on your offer, market, budget and how fast your team follows up, so we never promise a specific number of leads or dollars.',
  },
  {
    q: 'Do you guarantee leads or revenue?',
    a: 'No. Nobody can honestly guarantee what an ad platform will deliver. What we commit to is the work: campaign builds, tracking, testing, weekly optimization and clear reporting on cost per lead and booked appointments.',
  },
  {
    q: 'What happens to a lead after someone fills out the form?',
    a: 'The lead goes into your CRM the moment it comes in, tagged by campaign, and triggers instant text and email follow-up. If you want AI voice agents calling those leads for you, that runs on our sister platform KenjiAI.',
  },
  {
    q: 'Which ad platform is best for an insurance agency or home service company?',
    a: 'Google Search catches people already looking ("AC repair near me", "final expense insurance quote"). Meta creates demand with people who are not searching yet and usually costs less per lead but needs faster follow-up. We usually run both and shift budget toward whichever one books more appointments per dollar.',
  },
  {
    q: 'Is Media Traffics legit?',
    a: 'Yes. Media Traffics LLC was founded in 2013 by Yousif Alias and Brian Silverston and has public Trustpilot, BBB and Yelp profiles. We answer the hard questions, including our negative reviews, on our "Is Media Traffics legit?" page.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a strategy call from this page or call +1 (213) 344-0705. On the call we look at your offer, your market and your current numbers, and tell you straight whether paid ads make sense for you right now.',
  },
];
