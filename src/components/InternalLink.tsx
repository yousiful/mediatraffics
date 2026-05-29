import React from 'react';
import { sitePages } from '../config/internalLinks';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
  nofollow?: boolean;
  title?: string;
  onClick?: () => void;
}

export default function InternalLink({
  href,
  children,
  className = '',
  newTab = false,
  nofollow = false,
  title,
  onClick
}: InternalLinkProps) {
  const page = sitePages.find(p => p.url === href);
  const linkTitle = title || page?.description || (typeof children === 'string' ? children : '');

  const isExternal = href.startsWith('http');
  const shouldOpenNewTab = newTab || isExternal;

  const baseClasses = 'transition-colors duration-200';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  const relValues: string[] = [];
  if (shouldOpenNewTab) {
    relValues.push('noopener', 'noreferrer');
  }
  if (nofollow) {
    relValues.push('nofollow');
  }

  const relAttribute = relValues.length > 0 ? relValues.join(' ') : undefined;

  return (
    <a
      href={href}
      className={combinedClasses}
      title={linkTitle}
      target={shouldOpenNewTab ? '_blank' : undefined}
      rel={relAttribute}
      onClick={onClick}
      itemProp={isExternal ? undefined : 'url'}
    >
      {children}
    </a>
  );
}
