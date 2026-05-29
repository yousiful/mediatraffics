import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../config/seo';

interface NAPInfoProps {
  variant?: 'full' | 'compact' | 'inline';
  showIcons?: boolean;
  className?: string;
}

export default function NAPInfo({ variant = 'full', showIcons = true, className = '' }: NAPInfoProps) {
  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-4 text-sm ${className}`}>
        <span itemProp="name" className="font-semibold">{businessInfo.name}</span>
        <span className="text-gray-400">•</span>
        <a
          href={`tel:${businessInfo.contact.phone}`}
          itemProp="telephone"
          className="hover:text-cyan-400 transition-colors"
        >
          {businessInfo.contact.phoneDisplay}
        </a>
        <span className="text-gray-400">•</span>
        <a
          href={`mailto:${businessInfo.contact.email}`}
          itemProp="email"
          className="hover:text-cyan-400 transition-colors"
        >
          {businessInfo.contact.email}
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content={businessInfo.name} />
        <meta itemProp="url" content={businessInfo.url} />

        <div className="flex items-center gap-2">
          {showIcons && <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
          <a
            href={`tel:${businessInfo.contact.phone}`}
            itemProp="telephone"
            className="hover:text-cyan-400 transition-colors"
          >
            {businessInfo.contact.phoneDisplay}
          </a>
          <span className="text-gray-500 text-xs">({businessInfo.contact.hours})</span>
        </div>

        <div className="flex items-center gap-2">
          {showIcons && <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
          <a
            href={`mailto:${businessInfo.contact.email}`}
            itemProp="email"
            className="hover:text-emerald-400 transition-colors"
          >
            {businessInfo.contact.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
      <link itemProp="url" href={businessInfo.url} />
      <meta itemProp="name" content={businessInfo.name} />
      <meta itemProp="priceRange" content="$$$" />

      <div>
        <h3 className="text-lg font-bold mb-3">{businessInfo.name}</h3>

        <div className="space-y-3 text-gray-300">
          <div className="flex items-start gap-3">
            {showIcons && <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />}
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="not-italic">
              <span itemProp="streetAddress">{businessInfo.address.streetAddress}</span><br />
              <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>,{' '}
              <span itemProp="addressRegion">{businessInfo.address.addressRegion}</span>{' '}
              <span itemProp="postalCode">{businessInfo.address.postalCode}</span><br />
              <span itemProp="addressCountry">United States</span>
            </address>
          </div>

          <div className="flex items-center gap-3">
            {showIcons && <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />}
            <div>
              <a
                href={`tel:${businessInfo.contact.phone}`}
                itemProp="telephone"
                className="hover:text-cyan-400 transition-colors font-semibold"
              >
                {businessInfo.contact.phoneDisplay}
              </a>
              <div className="text-sm text-gray-400" itemProp="openingHours" content="Mo-Su 00:00-23:59">
                Open {businessInfo.contact.hours}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {showIcons && <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
            <a
              href={`mailto:${businessInfo.contact.email}`}
              itemProp="email"
              className="hover:text-emerald-400 transition-colors"
            >
              {businessInfo.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="hidden">
        <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <meta itemProp="latitude" content={businessInfo.geo.latitude} />
          <meta itemProp="longitude" content={businessInfo.geo.longitude} />
        </span>
      </div>
    </div>
  );
}
