import React from 'react';
import { HolidayTheme } from '../utils/holidays';

interface HolidayBannerProps {
  theme: HolidayTheme;
}

export default function HolidayBanner({ theme }: HolidayBannerProps) {
  return (
    <div
      className="w-full py-3 px-6 text-center font-bold text-lg animate-slideDown"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20, ${theme.colors.accent}20)`,
        borderBottom: `2px solid ${theme.colors.primary}40`
      }}
    >
      <span className="inline-flex items-center gap-2 animate-pulse">
        <span style={{ fontSize: '1.5rem' }}>{theme.emoji}</span>
        <span
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {theme.greeting}
        </span>
        <span style={{ fontSize: '1.5rem' }}>{theme.emoji}</span>
      </span>
    </div>
  );
}
