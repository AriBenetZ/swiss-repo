// Next.js 15 Performance Monitoring Hook with 2025 best practices
'use client'

import { useEffect } from 'react'
import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

interface PerformanceMetric {
  name: string
  value: number
  id: string
  delta: number
  entries: PerformanceEntry[]
}

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Track Core Web Vitals with Next.js 15 optimization
    const sendToAnalytics = (metric: PerformanceMetric) => {
      // Send to Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
          custom_map: {
            metric_id: 'dimension1',
            metric_value: 'dimension2',
            metric_delta: 'dimension3',
          },
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}:`, {
          value: metric.value,
          rating: getMetricRating(metric.name, metric.value),
          delta: metric.delta,
          id: metric.id
        })
      }

      // Send to external monitoring service if configured
      if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
        fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
          method: 'POST',
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            id: metric.id,
            url: window.location.href,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            connection: (navigator as any).connection?.effectiveType || 'unknown'
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).catch(err => console.warn('Failed to send performance metric:', err))
      }
    }

    // Register all Core Web Vitals metrics
    onCLS(sendToAnalytics)
    onFID(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    onINP(sendToAnalytics)

    // Monitor additional performance metrics
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            resourceLoadTime: navigation.loadEventEnd - navigation.domContentLoadedEventEnd,
          }

          // Log performance metrics
          if (process.env.NODE_ENV === 'development') {
            console.log('[Page Performance]', metrics)
          }

          // Send to analytics
          Object.entries(metrics).forEach(([name, value]) => {
            if (value > 0 && window.gtag) {
              window.gtag('event', 'page_timing', {
                event_category: 'Performance',
                event_label: name,
                value: Math.round(value),
                custom_parameter_1: window.location.pathname
              })
            }
          })
        }
      }
    }

    // Measure page load performance
    if (document.readyState === 'complete') {
      measurePageLoad()
    } else {
      window.addEventListener('load', measurePageLoad)
    }

    // Monitor resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) { // Resources taking more than 1 second
          console.warn(`[Slow Resource] ${entry.name}: ${Math.round(entry.duration)}ms`)
          
          if (window.gtag) {
            window.gtag('event', 'slow_resource', {
              event_category: 'Performance',
              event_label: entry.name,
              value: Math.round(entry.duration)
            })
          }
        }
      })
    })

    try {
      resourceObserver.observe({ entryTypes: ['resource'] })
    } catch (e) {
      // PerformanceObserver not supported
    }

    return () => {
      resourceObserver?.disconnect()
      window.removeEventListener('load', measurePageLoad)
    }
  }, [])
}

// Helper function to rate performance metrics
function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 },
  }

  const threshold = thresholds[name as keyof typeof thresholds]
  if (!threshold) return 'good'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

// Export performance monitoring utilities
export const performanceUtils = {
  measureInteraction: (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const duration = performance.now() - start
    
    if (window.gtag) {
      window.gtag('event', 'user_interaction', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(duration)
      })
    }
    
    return duration
  },

  markFeatureUsage: (feature: string) => {
    if (window.gtag) {
      window.gtag('event', 'feature_usage', {
        event_category: 'User Behavior',
        event_label: feature,
        value: 1
      })
    }
  },

  trackFormPerformance: (formName: string, duration: number) => {
    if (window.gtag) {
      window.gtag('event', 'form_completion_time', {
        event_category: 'Forms',
        event_label: formName,
        value: Math.round(duration)
      })
    }
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
