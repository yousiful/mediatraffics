export const businessInfo = {
  name: 'Media Traffics LLC',
  legalName: 'Media Traffics LLC',
  description: 'Leading digital marketing agency specializing in paid advertising campaigns for insurance agencies and home service companies. Expert lead generation and client attraction systems since 2013.',
  url: 'https://mediatraffics.com',
  logo: 'https://mediatraffics.com/tmp75mtgp0b-removebg-preview.png',

  contact: {
    email: 'Support@mediatraffics.com',
    phone: '+18312634402',
    phoneDisplay: '+1 (831) 263-4402',
    hours: '24/7'
  },

  address: {
    streetAddress: '123 Digital Drive',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94102',
    addressCountry: 'US'
  },

  social: {
    facebook: 'https://facebook.com/mediatraffics',
    linkedin: 'https://linkedin.com/company/mediatraffics',
    twitter: 'https://twitter.com/mediatraffics',
    instagram: 'https://instagram.com/mediatraffics'
  },

  geo: {
    latitude: '37.7749',
    longitude: '-122.4194'
  },

  founders: ['Yousif Alias', 'Brian Silverston'],
  founded: '2013',

  services: [
    'Paid Advertising',
    'Lead Generation',
    'Facebook Ads Management',
    'Google Ads Management',
    'Instagram Ads',
    'LinkedIn Advertising',
    'Client Generation Loop',
    'Marketing Automation',
    'Insurance Marketing',
    'Home Services Marketing'
  ],

  serviceAreas: [
    'San Francisco, CA',
    'Los Angeles, CA',
    'San Diego, CA',
    'Sacramento, CA',
    'San Jose, CA',
    'Oakland, CA',
    'California',
    'United States'
  ],

  keywords: [
    'paid advertising agency',
    'digital marketing',
    'lead generation',
    'insurance marketing',
    'home services marketing',
    'Facebook ads agency',
    'Google ads management',
    'client attraction system',
    'marketing agency California',
    'paid ads specialist'
  ]
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessInfo.url,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: businessInfo.logo,
    image: businessInfo.logo,

    telephone: businessInfo.contact.phone,
    email: businessInfo.contact.email,

    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },

    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },

    sameAs: [
      businessInfo.social.facebook,
      businessInfo.social.linkedin,
      businessInfo.social.twitter,
      businessInfo.social.instagram
    ],

    founder: businessInfo.founders.map(name => ({
      '@type': 'Person',
      name: name
    })),

    foundingDate: businessInfo.founded,

    areaServed: businessInfo.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: businessInfo.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service
        }
      }))
    },

    priceRange: '$$$',

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    url: businessInfo.url,
    logo: businessInfo.logo,
    description: businessInfo.description,

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessInfo.contact.phone,
      contactType: 'Customer Service',
      email: businessInfo.contact.email,
      areaServed: 'US',
      availableLanguage: ['English']
    },

    sameAs: [
      businessInfo.social.facebook,
      businessInfo.social.linkedin,
      businessInfo.social.twitter,
      businessInfo.social.instagram
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessInfo.name,
    url: businessInfo.url,
    description: businessInfo.description,
    publisher: {
      '@type': 'Organization',
      name: businessInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: businessInfo.logo
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${businessInfo.url}/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};
