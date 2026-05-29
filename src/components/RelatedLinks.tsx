import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import InternalLink from './InternalLink';
import { sitePages } from '../config/internalLinks';

interface RelatedLink {
  url: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
  variant?: 'grid' | 'list' | 'compact';
  className?: string;
}

export default function RelatedLinks({
  links,
  title = 'Related Resources',
  variant = 'grid',
  className = ''
}: RelatedLinksProps) {
  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`}>
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          {title}
        </h4>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <InternalLink
                href={link.url}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
              >
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
                <span>{link.title}</span>
              </InternalLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="space-y-3">
          {links.map((link, index) => (
            <InternalLink
              key={index}
              href={link.url}
              className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all group"
            >
              <div className="flex items-start gap-3">
                {link.icon && (
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                    {link.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1 flex items-center gap-2">
                    {link.title}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </InternalLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <InternalLink
            key={index}
            href={link.url}
            className="block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all group hover:shadow-lg hover:shadow-cyan-500/10"
          >
            {link.icon && (
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
            )}
            <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
              {link.title}
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">{link.description}</p>
          </InternalLink>
        ))}
      </div>
    </div>
  );
}

export function QuickLinksWidget({ className = '' }: { className?: string }) {
  const quickLinks = [
    {
      url: 'https://go.mediatraffics.com/price',
      title: 'Client Generation Loop',
      description: 'Our proven lead generation system'
    },
    {
      url: 'https://kenjiai.com',
      title: 'Kenji AI Platform',
      description: 'AI-powered marketing automation'
    },
    {
      url: 'https://freedom.kenjiai.com/1',
      title: 'Ads Training',
      description: 'Master paid advertising'
    },
    {
      url: 'https://go.mediatraffics.com/video',
      title: 'Partner With Us',
      description: 'Explore partnership opportunities'
    }
  ];

  return (
    <RelatedLinks
      links={quickLinks}
      title="Explore Our Services"
      variant="compact"
      className={className}
    />
  );
}
