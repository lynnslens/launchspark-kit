// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'YOUR_GA_TRACKING_ID', {
      page_path: pagePath,
    });
  }
};

// Specific tracking functions for your site
export const trackCTAClick = (location: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: location,
  });
};

export const trackPackageView = (packageName: string) => {
  trackEvent('package_view', {
    event_category: 'pricing',
    event_label: packageName,
  });
};