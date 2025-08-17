// Next.js 15 SEO-optimized middleware with 2025 best practices
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add security and SEO headers optimized for 2025
  const headers = new Headers(response.headers)
  
  // Performance headers for Core Web Vitals
  headers.set('X-DNS-Prefetch-Control', 'on')
  headers.set('X-Frame-Options', 'SAMEORIGIN')
  headers.set('X-Content-Type-Options', 'nosniff')
  
  // SEO optimization headers
  headers.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
  
  // Advanced caching for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Canonical URL enforcement for SEO
  const url = request.nextUrl.clone()
  if (url.hostname !== 'www.aurumascend.ch' && url.hostname !== 'localhost') {
    url.hostname = 'www.aurumascend.ch'
    return NextResponse.redirect(url)
  }
  
  // Remove trailing slashes for consistent URLs
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }
  
  // Add structured data hints for crawlers
  if (request.nextUrl.pathname === '/') {
    headers.set('X-Page-Type', 'homepage')
  } else if (request.nextUrl.pathname.startsWith('/blog/')) {
    headers.set('X-Page-Type', 'article')
  } else if (request.nextUrl.pathname === '/apply') {
    headers.set('X-Page-Type', 'application')
  }
  
  // Security headers for investment platform
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  
  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
