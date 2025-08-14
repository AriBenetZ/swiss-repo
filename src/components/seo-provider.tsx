// Next.js 15 SEO Provider with @next/third-parties optimization
'use client'

import { useEffect } from 'react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { usePerformanceMonitoring } from '@/hooks/use-performance-monitoring'
import { trackSEOEvents } from '@/lib/seo-analytics'

interface SEOProviderProps {
  children: React.ReactNode
}

export function SEOProvider({ children }: SEOProviderProps) {
  // Initialize performance monitoring
  usePerformanceMonitoring()

  useEffect(() => {
    // Advanced scroll depth tracking with Intersection Observer API
    const observeScrollDepth = () => {
      const markers = [25, 50, 75, 100]
      const elements = markers.map(marker => {
        const el = document.createElement('div')
        el.style.position = 'absolute'
        el.style.top = `${marker}%`
        el.style.height = '1px'
        el.style.width = '1px'
        el.style.pointerEvents = 'none'
        el.dataset.scrollMarker = marker.toString()
        document.body.appendChild(el)
        return el
      })

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const marker = (entry.target as HTMLElement).dataset.scrollMarker
              if (marker) {
                trackSEOEvents.scrollDepth(parseInt(marker))
                observer.unobserve(entry.target)
              }
            }
          })
        },
        { threshold: 0 }
      )

      elements.forEach(el => observer.observe(el))
      
      return () => {
        observer.disconnect()
        elements.forEach(el => el.remove())
      }
    }

    // Page visibility API for engagement tracking
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        trackSEOEvents.contentEngagement('page', 'visibility_hidden', window.location.pathname)
      } else {
        trackSEOEvents.contentEngagement('page', 'visibility_visible', window.location.pathname)
      }
    }

    const cleanup = observeScrollDepth()
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cleanup()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <>
      {/* Next.js 15 optimized Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}

      {/* Next.js 15 optimized Google Tag Manager */}
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}

      {children}
    </>
  )
}

// CTA Tracking Component
export function CTATracker({ children, ctaText, location, destination }: {
  children: React.ReactNode
  ctaText: string
  location: string
  destination: string
}) {
  const handleClick = () => {
    trackSEOEvents.ctaClick(ctaText, location, destination)
  }

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  )
}

// Form Tracking Component
export function FormTracker({ children, formName }: {
  children: React.ReactNode
  formName: string
}) {
  const handleFormInteraction = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLFormElement
    const action = event.type
    const field = (event.target as HTMLInputElement)?.name || 'unknown'
    
    trackSEOEvents.formInteraction(formName, action, field)
  }

  return (
    <form 
      onFocus={handleFormInteraction}
      onBlur={handleFormInteraction}
      onSubmit={handleFormInteraction}
    >
      {children}
    </form>
  )
}

// Social Proof Tracking Component  
export function SocialProofTracker({ children, type }: {
  children: React.ReactNode
  type: string
}) {
  const handleInteraction = () => {
    trackSEOEvents.socialProof(type, 'view')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleInteraction()
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`social-proof-${type}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [type])

  return (
    <div id={`social-proof-${type}`}>
      {children}
    </div>
  )
}

// Search Tracking Hook
export function useSearchTracking() {
  const trackSearch = (query: string, results: number) => {
    trackSEOEvents.searchQuery(query, results)
  }

  return { trackSearch }
}
