// Performance optimization utilities for better SEO
export class PerformanceOptimizer {
  
  // Lazy load images with SEO-friendly attributes
  static optimizeImages() {
    if (typeof document === 'undefined') return;
    
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Preload critical resources
  static preloadCriticalResources() {
    if (typeof document === 'undefined') return;
    
    const criticalResources = [
      { href: '/logo.svg', as: 'image' },
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }

  // Optimize scroll performance
  static optimizeScrolling() {
    if (typeof window === 'undefined') return;
    
    let ticking = false;
    
    function updateScrollPosition() {
      // Throttled scroll handling
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // Monitor and improve CLS (Cumulative Layout Shift)
  static monitorCLS() {
    if (typeof window === 'undefined') return;
    
    let clsValue = 0;
    let clsEntries: any[] = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      }
      
      // Log if CLS is too high
      if (clsValue > 0.1) {
        console.warn('High CLS detected:', clsValue);
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });
    
    // Report final CLS
    window.addEventListener('beforeunload', () => {
      if (clsValue > 0.1) {
        console.warn('Final CLS above threshold:', clsValue);
      }
    });
  }

  // Initialize all optimizations
  static initialize() {
    if (typeof window === 'undefined') return;
    
    // Run immediately
    this.preloadCriticalResources();
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.optimizeImages();
        this.monitorCLS();
        this.optimizeScrolling();
      });
    } else {
      this.optimizeImages();
      this.monitorCLS();
      this.optimizeScrolling();
    }
  }
}

// SEO-friendly image component props
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
}

// Generate optimized image attributes
export function getOptimizedImageProps(props: OptimizedImageProps) {
  return {
    src: props.src,
    alt: props.alt,
    width: props.width,
    height: props.height,
    loading: props.priority ? 'eager' : (props.loading || 'lazy'),
    decoding: 'async',
    className: props.className,
    style: {
      aspectRatio: `${props.width} / ${props.height}`,
    }
  };
}

// Critical CSS inlining helper
export const criticalCSS = `
  /* Above-the-fold critical styles */
  .navbar { display: flex; justify-content: space-between; align-items: center; }
  .hero { min-height: 60vh; display: flex; align-items: center; }
  .btn-primary { background: #8b5cf6; color: white; padding: 12px 24px; border-radius: 8px; }
`;

export default PerformanceOptimizer;
