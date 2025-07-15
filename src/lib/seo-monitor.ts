/**
 * SEO Performance Monitoring and Optimization Tools
 * This file contains utilities to track and improve SEO metrics
 */

// Core Web Vitals monitoring
export function initializeCoreWebVitals() {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'LCP', {
            value: Math.round(entry.startTime),
            custom_parameter_1: 'core_web_vitals'
          });
        }
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'first-input') {
        const fidEntry = entry as any; // Type assertion for browser compatibility
        const fid = fidEntry.processingStart - fidEntry.startTime;
        console.log('FID:', fid);
        if (window.gtag) {
          window.gtag('event', 'FID', {
            value: Math.round(fid),
            custom_parameter_1: 'core_web_vitals'
          });
        }
      }
    }
  });

  fidObserver.observe({ entryTypes: ['first-input'] });

  // Cumulative Layout Shift (CLS)
  let cls = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const clsEntry = entry as any; // Type assertion for browser compatibility
      if (entry.entryType === 'layout-shift' && !clsEntry.hadRecentInput) {
        cls += clsEntry.value;
      }
    }
  });

  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Report CLS when the page unloads
  window.addEventListener('beforeunload', () => {
    console.log('CLS:', cls);
    if (window.gtag) {
      window.gtag('event', 'CLS', {
        value: Math.round(cls * 1000),
        custom_parameter_1: 'core_web_vitals'
      });
    }
  });
}

// Page performance tracking
export function trackPagePerformance(pageName: string) {
  if (typeof window === 'undefined') return;

  const startTime = performance.now();

  window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`${pageName} load time:`, loadTime);
    
    if (window.gtag) {
      window.gtag('event', 'page_load_time', {
        value: Math.round(loadTime),
        page_name: pageName
      });
    }
  });
}

// SEO metadata validation
export function validateSEOMetadata() {
  if (typeof document === 'undefined') return;

  const issues: string[] = [];

  // Check title
  const title = document.querySelector('title');
  if (!title) {
    issues.push('Missing title tag');
  } else if (title.textContent && title.textContent.length > 60) {
    issues.push('Title too long (>60 characters)');
  } else if (title.textContent && title.textContent.length < 30) {
    issues.push('Title too short (<30 characters)');
  }

  // Check meta description
  const description = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (!description) {
    issues.push('Missing meta description');
  } else if (description.content.length > 160) {
    issues.push('Meta description too long (>160 characters)');
  } else if (description.content.length < 120) {
    issues.push('Meta description too short (<120 characters)');
  }

  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    issues.push('Missing canonical URL');
  }

  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (!ogTitle) issues.push('Missing og:title');
  if (!ogDescription) issues.push('Missing og:description');
  if (!ogImage) issues.push('Missing og:image');

  // Check structured data
  const structuredData = document.querySelector('script[type="application/ld+json"]');
  if (!structuredData) {
    issues.push('Missing structured data');
  }

  if (issues.length > 0) {
    console.warn('SEO Issues Found:', issues);
  } else {
    console.log('SEO validation passed ✅');
  }

  return issues;
}

// Internal linking analysis
export function analyzeInternalLinks() {
  if (typeof document === 'undefined') return;

  const links = Array.from(document.querySelectorAll('a[href]')) as HTMLAnchorElement[];
  const internalLinks = links.filter(link => 
    link.href.includes(window.location.origin) || link.href.startsWith('/')
  );
  
  const externalLinks = links.filter(link => 
    !link.href.includes(window.location.origin) && !link.href.startsWith('/')
  );

  console.log('Internal Links Analysis:', {
    totalLinks: links.length,
    internalLinks: internalLinks.length,
    externalLinks: externalLinks.length,
    internalLinkRatio: (internalLinks.length / links.length * 100).toFixed(2) + '%'
  });

  return {
    total: links.length,
    internal: internalLinks.length,
    external: externalLinks.length,
    internalRatio: internalLinks.length / links.length
  };
}

// Image optimization check
export function checkImageOptimization() {
  if (typeof document === 'undefined') return;

  const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
  const issues: string[] = [];

  images.forEach((img, index) => {
    // Check alt text
    if (!img.alt) {
      issues.push(`Image ${index + 1}: Missing alt text`);
    }

    // Check loading attribute
    if (!img.loading && index > 2) {
      issues.push(`Image ${index + 1}: Should use lazy loading`);
    }

    // Check dimensions
    if (!img.width || !img.height) {
      issues.push(`Image ${index + 1}: Missing width/height attributes`);
    }
  });

  if (issues.length > 0) {
    console.warn('Image Optimization Issues:', issues);
  }

  return issues;
}

// Keyword density analysis
export function analyzeKeywordDensity(keywords: string[]) {
  if (typeof document === 'undefined') return;

  const content = document.body.textContent?.toLowerCase() || '';
  const words = content.split(/\s+/).length;
  
  const analysis = keywords.map(keyword => {
    const keywordLower = keyword.toLowerCase();
    const matches = (content.match(new RegExp(keywordLower, 'g')) || []).length;
    const density = (matches / words * 100);
    
    return {
      keyword,
      count: matches,
      density: parseFloat(density.toFixed(2)),
      status: density > 3 ? 'too_high' : density < 0.5 ? 'too_low' : 'optimal'
    };
  });

  console.log('Keyword Density Analysis:', analysis);
  return analysis;
}

// Mobile-friendliness check
export function checkMobileFriendliness() {
  if (typeof window === 'undefined') return;

  const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  const issues: string[] = [];

  if (!viewport) {
    issues.push('Missing viewport meta tag');
  } else if (!viewport.content.includes('width=device-width')) {
    issues.push('Viewport should include width=device-width');
  }

  // Check for horizontal scroll
  if (document.body.scrollWidth > window.innerWidth) {
    issues.push('Page has horizontal scroll on mobile');
  }

  // Check font sizes
  const elements = document.querySelectorAll('*');
  let smallTextCount = 0;
  
  elements.forEach(el => {
    const style = window.getComputedStyle(el);
    const fontSize = parseFloat(style.fontSize);
    if (fontSize < 16) {
      smallTextCount++;
    }
  });

  if (smallTextCount > elements.length * 0.1) {
    issues.push('Too many elements with small font sizes');
  }

  if (issues.length > 0) {
    console.warn('Mobile Friendliness Issues:', issues);
  }

  return issues;
}

// Comprehensive SEO audit
export function runSEOAudit(keywords: string[] = []) {
  console.log('🔍 Running SEO Audit...');
  
  const results = {
    metadata: validateSEOMetadata() || [],
    images: checkImageOptimization() || [],
    links: analyzeInternalLinks(),
    mobile: checkMobileFriendliness() || [],
    keywords: keywords.length > 0 ? analyzeKeywordDensity(keywords) : null
  };

  const totalIssues = (results.metadata?.length || 0) + (results.images?.length || 0) + (results.mobile?.length || 0);
  
  console.log('🎯 SEO Audit Results:', {
    totalIssues,
    score: Math.max(0, 100 - (totalIssues * 5)),
    details: results
  });

  return results;
}

// Performance budget monitoring
export function monitorPerformanceBudget() {
  if (typeof window === 'undefined') return;

  const budget = {
    maxLoadTime: 3000, // 3 seconds
    maxLCP: 2500, // 2.5 seconds
    maxFID: 100, // 100ms
    maxCLS: 0.1 // 0.1
  };

  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    if (loadTime > budget.maxLoadTime) {
      console.warn(`⚠️ Load time exceeded budget: ${loadTime}ms > ${budget.maxLoadTime}ms`);
    }

    // Monitor other metrics...
    console.log('Performance Budget Check:', {
      loadTime,
      withinBudget: loadTime <= budget.maxLoadTime
    });
  });
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default {
  initializeCoreWebVitals,
  trackPagePerformance,
  validateSEOMetadata,
  analyzeInternalLinks,
  checkImageOptimization,
  analyzeKeywordDensity,
  checkMobileFriendliness,
  runSEOAudit,
  monitorPerformanceBudget
};
