import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Meta Pixel: index.html fires the first PageView. The footer links to /privacy,
// /terms and /refund-policy switch routes with history.pushState, so fire a
// PageView for those and for back/forward navigation too.
const trackPageView = () => (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'PageView');
const pushState = window.history.pushState.bind(window.history);
window.history.pushState = (...args: Parameters<History['pushState']>) => {
  pushState(...args);
  trackPageView();
};
window.addEventListener('popstate', trackPageView);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
