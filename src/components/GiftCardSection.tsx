import React, { useEffect } from 'react';
import { Gift, Sparkles } from 'lucide-react';

interface GiftCardSectionProps {
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function GiftCardSection({ onMouseMove, onMouseLeave }: GiftCardSectionProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.googleapis.com/leadgen-payment-products-preview-nuxt-assets/js/iframe-resizer/gc-embed.parent.js';
    script.async = true;

    const widgetContainer = document.querySelector('[data-gc-id="698fa7cee7714207e084219a"]');
    if (widgetContainer && widgetContainer.parentNode) {
      widgetContainer.parentNode.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="gift-cards"
      data-reveal
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Perfect for Any Occasion</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Give the Gift of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Growth & Success
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Help a business owner you know scale their business with our proven marketing services. Purchase a gift card and give them the tools to generate more leads and grow their revenue.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/20 p-8 backdrop-blur-sm tilt-card"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Purchase a Gift Card</h3>
          </div>

          <div className="gift-card-widget min-h-[400px] flex items-center justify-center">
            <div data-gc-id="698fa7cee7714207e084219a"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-cyan-400 font-bold text-lg mb-1">Flexible Amounts</div>
              <div className="text-gray-400 text-sm">Choose any value that fits your budget</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 font-bold text-lg mb-1">Instant Delivery</div>
              <div className="text-gray-400 text-sm">Gift cards are delivered immediately</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 font-bold text-lg mb-1">Never Expires</div>
              <div className="text-gray-400 text-sm">Use anytime towards our services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
