import { useEffect } from 'react';
import {
  businessInfo,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema
} from '../config/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object[];
}

export default function SEOHead({
  title = `${businessInfo.name} | Expert Paid Advertising & Lead Generation`,
  description = businessInfo.description,
  keywords = businessInfo.keywords,
  canonicalUrl = businessInfo.url,
  ogImage = businessInfo.logo,
  structuredData = []
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: businessInfo.name },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: businessInfo.name },
      { property: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@mediatraffics' },

      { name: 'geo.region', content: 'US-CA' },
      { name: 'geo.placename', content: businessInfo.address.addressLocality },
      { name: 'geo.position', content: `${businessInfo.geo.latitude};${businessInfo.geo.longitude}` },
      { name: 'ICBM', content: `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}` },

      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = property ? 'property' : 'name';
      const value = property || name;
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const defaultSchemas = [
      generateLocalBusinessSchema(),
      generateOrganizationSchema(),
      generateWebsiteSchema(),
      ...structuredData
    ];

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    defaultSchemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null;
}
