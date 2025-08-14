import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl

  // Redirect old .nl domain to .uk
  if (hostname.includes('aurumascend.nl')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = 'www.aurumascend.ch'
    return NextResponse.redirect(newUrl, 301)
  }

  // Force www subdomain for the .uk domain
  if (hostname === 'aurumascend.ch') {
    const newUrl = new URL(request.url)
    newUrl.hostname = 'www.aurumascend.ch'
    return NextResponse.redirect(newUrl, 301)
  }

  // Add security headers
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Add canonical header
  response.headers.set('Link', `<https://www.aurumascend.ch${pathname}>; rel="canonical"`)

  return response
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
