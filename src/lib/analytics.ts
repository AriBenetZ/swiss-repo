import { initializeCoreWebVitals, trackPagePerformance } from './seo-monitor';

// Google Analytics 4 Integration
export function initializeGA4() {
  if (typeof window === 'undefined') return;
  
  // Load GA4
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!GA_MEASUREMENT_ID) return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).gtag = (window as any).gtag || function() { 
    ((window as any).gtag.q = (window as any).gtag.q || []).push(arguments) 
  };
  (window as any).gtag('js', new Date());
  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // Initialize Core Web Vitals tracking
  initializeCoreWebVitals();
}

// Enhanced conversion tracking for funding applications
export function trackFundingConversion(data: {
  amount?: string;
  company?: string;
  stage?: string;
}) {
  if (!(window as any).gtag) return;
  
  (window as any).gtag('event', 'funding_application_submit', {
    event_category: 'conversion',
    event_label: 'funding_application',
    funding_amount: data.amount,
    company_stage: data.stage,
    value: 1, // Each application is valuable
  });
}

// Track investor interest
export function trackInvestorEngagement(action: string, data?: any) {
  if (!(window as any).gtag) return;
  
  (window as any).gtag('event', 'investor_engagement', {
    event_category: 'engagement',
    event_label: action,
    ...data
  });
}


