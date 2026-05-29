export interface InternalLink {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  anchorTextVariations: string[];
  priority: 'high' | 'medium' | 'low';
  category: 'service' | 'product' | 'information' | 'conversion';
}

export interface LinkingRule {
  fromPage: string;
  toPages: string[];
  contextualAnchors: string[];
  placement: 'header' | 'content' | 'footer' | 'sidebar' | 'cta';
}

export const sitePages: InternalLink[] = [
  {
    url: '/',
    title: 'Home - Media Traffics LLC',
    description: 'Expert paid advertising and lead generation services',
    keywords: ['paid advertising', 'lead generation', 'digital marketing'],
    anchorTextVariations: [
      'home',
      'homepage',
      'Media Traffics',
      'our homepage',
      'main page',
      'back to home'
    ],
    priority: 'high',
    category: 'conversion'
  },
  {
    url: '/privacy',
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection practices',
    keywords: ['privacy', 'data protection', 'terms'],
    anchorTextVariations: [
      'privacy policy',
      'our privacy policy',
      'data protection',
      'privacy practices',
      'how we protect your data'
    ],
    priority: 'low',
    category: 'information'
  },
  {
    url: 'https://go.mediatraffics.com/price',
    title: 'Client Generation Loop',
    description: 'Our proven lead generation and client acquisition system',
    keywords: ['client generation', 'lead generation system', 'proven system'],
    anchorTextVariations: [
      'Client Generation Loop',
      'our proven system',
      'learn about our system',
      'see how it works',
      'view pricing',
      'get started with our system',
      'proven lead generation system'
    ],
    priority: 'high',
    category: 'conversion'
  },
  {
    url: 'https://kenjiai.com',
    title: 'Kenji AI',
    description: 'AI-powered marketing automation platform',
    keywords: ['AI marketing', 'marketing automation', 'Kenji AI'],
    anchorTextVariations: [
      'Kenji AI',
      'our AI platform',
      'AI-powered automation',
      'marketing automation',
      'intelligent marketing system',
      'learn about Kenji AI'
    ],
    priority: 'high',
    category: 'product'
  },
  {
    url: 'https://app.kenjiai.com',
    title: 'Kenji AI Login',
    description: 'Access your Kenji AI dashboard',
    keywords: ['login', 'dashboard', 'client portal'],
    anchorTextVariations: [
      'login',
      'sign in',
      'client login',
      'access dashboard',
      'your account',
      'client portal'
    ],
    priority: 'medium',
    category: 'conversion'
  },
  {
    url: 'https://go.mediatraffics.com/video',
    title: 'Partner With Us',
    description: 'Partnership opportunities with Media Traffics',
    keywords: ['partnership', 'collaboration', 'work together'],
    anchorTextVariations: [
      'partner with us',
      'become a partner',
      'partnership opportunities',
      'work with us',
      'collaboration opportunities',
      'join our partner program'
    ],
    priority: 'medium',
    category: 'conversion'
  },
  {
    url: 'https://voice.kenjiai.com/try',
    title: 'Voice Front Desk',
    description: 'Try our AI-powered voice receptionist',
    keywords: ['voice AI', 'receptionist', 'automation'],
    anchorTextVariations: [
      'Voice Front Desk',
      'AI receptionist',
      'try our voice system',
      'automated receptionist',
      'voice automation',
      'virtual receptionist'
    ],
    priority: 'medium',
    category: 'product'
  },
  {
    url: 'https://freedom.kenjiai.com/1',
    title: 'Ads Training Program',
    description: 'Comprehensive paid advertising training',
    keywords: ['ads training', 'learn paid ads', 'marketing education'],
    anchorTextVariations: [
      'Ads Training',
      'learn paid advertising',
      'advertising course',
      'join our training',
      'master paid ads',
      'advertising education program'
    ],
    priority: 'medium',
    category: 'service'
  }
];

export const linkingStrategy: LinkingRule[] = [
  {
    fromPage: '/',
    toPages: [
      'https://go.mediatraffics.com/price',
      'https://kenjiai.com',
      'https://go.mediatraffics.com/video',
      'https://freedom.kenjiai.com/1',
      '/privacy'
    ],
    contextualAnchors: [
      'explore our proven Client Generation Loop',
      'powered by Kenji AI technology',
      'learn about partnership opportunities',
      'master paid advertising with our training'
    ],
    placement: 'content'
  },
  {
    fromPage: '/privacy',
    toPages: [
      '/',
      'https://go.mediatraffics.com/price',
      'https://kenjiai.com'
    ],
    contextualAnchors: [
      'return to homepage',
      'learn more about our services',
      'explore our AI platform'
    ],
    placement: 'content'
  }
];

export const anchorTextBestPractices = {
  dos: [
    'Use descriptive, natural language',
    'Include target keywords naturally',
    'Vary anchor text across similar links',
    'Match anchor text to destination content',
    'Use action-oriented phrases',
    'Keep it concise (2-5 words ideal)'
  ],
  donts: [
    'Avoid "click here" or "read more"',
    'Never use exact match keywords repeatedly',
    'Don\'t over-optimize anchor text',
    'Avoid generic phrases',
    'Don\'t make anchors too long',
    'Never mislead about destination'
  ]
};

export const linkAttributesGuide = {
  internal: {
    default: '',
    newTab: 'target="_blank" rel="noopener noreferrer"',
    sponsored: 'rel="sponsored"',
    nofollow: 'rel="nofollow"'
  },
  external: {
    trusted: 'target="_blank" rel="noopener noreferrer"',
    untrusted: 'target="_blank" rel="noopener noreferrer nofollow"',
    sponsored: 'target="_blank" rel="noopener noreferrer sponsored"',
    ugc: 'target="_blank" rel="noopener noreferrer ugc"'
  }
};

export const urlStructureRules = {
  format: {
    protocol: 'https://',
    domain: 'mediatraffics.com',
    separator: '/',
    wordSeparator: '-'
  },
  guidelines: [
    'Use lowercase letters only',
    'Separate words with hyphens',
    'Keep URLs short and descriptive',
    'Include target keywords when natural',
    'Avoid special characters',
    'Use trailing slashes consistently',
    'Implement proper URL canonicalization'
  ],
  examples: {
    good: [
      'https://mediatraffics.com/',
      'https://mediatraffics.com/privacy',
      'https://mediatraffics.com/services/paid-ads',
      'https://mediatraffics.com/industries/insurance-marketing'
    ],
    bad: [
      'https://mediatraffics.com/page?id=123',
      'https://mediatraffics.com/Services/Paid_Ads',
      'https://mediatraffics.com/p/a/g/e',
      'https://mediatraffics.com/insurance%20marketing'
    ]
  }
};

export function getContextualAnchor(
  targetPage: string,
  context: 'cta' | 'navigation' | 'content' | 'footer'
): string {
  const page = sitePages.find(p => p.url === targetPage);
  if (!page) return targetPage;

  const variations = page.anchorTextVariations;

  switch (context) {
    case 'cta':
      return variations[variations.length - 1] || variations[0];
    case 'navigation':
      return variations[0];
    case 'content':
      const midIndex = Math.floor(variations.length / 2);
      return variations[midIndex] || variations[0];
    case 'footer':
      return variations[0];
    default:
      return variations[0];
  }
}

export function generateInternalLink(
  targetUrl: string,
  anchorText?: string,
  attributes?: {
    className?: string;
    newTab?: boolean;
    nofollow?: boolean;
    title?: string;
  }
): string {
  const page = sitePages.find(p => p.url === targetUrl);
  const text = anchorText || (page ? page.anchorTextVariations[0] : 'Learn more');
  const title = attributes?.title || page?.description || text;

  const classList = attributes?.className || 'internal-link';
  const target = attributes?.newTab ? ' target="_blank"' : '';
  const rel = attributes?.newTab
    ? ' rel="noopener noreferrer"'
    : attributes?.nofollow
    ? ' rel="nofollow"'
    : '';

  return `<a href="${targetUrl}" class="${classList}"${target}${rel} title="${title}">${text}</a>`;
}

export const contentLinkingOpportunities = {
  hero: [
    {
      context: 'Our proven system has booked 86,050 appointments',
      linkTo: 'https://go.mediatraffics.com/price',
      anchor: 'proven Client Generation Loop'
    }
  ],
  services: [
    {
      context: 'AI-powered platform that automates your marketing',
      linkTo: 'https://kenjiai.com',
      anchor: 'Kenji AI platform'
    },
    {
      context: 'Expert paid advertising management',
      linkTo: 'https://freedom.kenjiai.com/1',
      anchor: 'comprehensive training program'
    }
  ],
  footer: [
    {
      context: 'Looking to grow your business?',
      linkTo: 'https://go.mediatraffics.com/video',
      anchor: 'Explore partnership opportunities'
    }
  ]
};
