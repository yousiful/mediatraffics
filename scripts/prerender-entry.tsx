// Bundled by scripts/prerender.mjs (esbuild, node target) to render real routes to
// static HTML at build time. Not part of the browser bundle.
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';
import TermsOfService from '../src/pages/TermsOfService';
import RefundPolicy from '../src/pages/RefundPolicy';

export { homeFaq } from '../src/data/homeFaq';
export { guides } from '../src/data/guides';
export { businessInfo } from '../src/config/seo';

const noop = () => {};

export function renderRoute(route: string): string {
  // App reads window.location.pathname in its state initializers.
  (globalThis as unknown as { window: unknown }).window = { location: { pathname: route } };
  switch (route) {
    case '/': return renderToString(<App />);
    case '/privacy': return renderToString(<PrivacyPolicy onBack={noop} />);
    case '/terms': return renderToString(<TermsOfService onBack={noop} />);
    case '/refund-policy': return renderToString(<RefundPolicy onBack={noop} />);
    default: throw new Error(`prerender-entry: no renderer for ${route}`);
  }
}
