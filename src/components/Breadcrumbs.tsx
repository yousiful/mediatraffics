import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '../config/seo';

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://mediatraffics.com/' },
    ...items.map(item => ({ name: item.label, url: item.href }))
  ];

  React.useEffect(() => {
    const schema = generateBreadcrumbSchema(breadcrumbItems);
    const scriptId = 'breadcrumb-schema';

    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [items]);

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-4 ${className}`}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <a
            href="/"
            itemProp="item"
            className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
            {item.current ? (
              <span
                itemProp="name"
                className="text-white font-semibold"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                itemProp="item"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </a>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
