import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aurum Ascend Capital - Global Investment Platform',
    short_name: 'Aurum Ascend Capital',
    description: 'Connect with verified institutional investors across Europe, Americas, Asia & Scandinavia. Secure growth capital for your company through our global investment platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#8B5CF6', // Updated to match your accent color
    orientation: 'portrait-primary',
    categories: ['finance', 'business', 'productivity'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    id: 'aurumascend-app',
    display_override: ['standalone', 'browser'],
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png+xml',
        purpose: 'any'
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png+xml',
        purpose: 'maskable'
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png+xml',
        purpose: 'maskable'
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Apply for Funding',
        short_name: 'Apply',
        description: 'Start your funding application',
        url: '/apply',
        icons: [{ src: '/logo.png', sizes: '96x96' }]
      },
      {
        name: 'Browse Case Studies',
        short_name: 'Cases',
        description: 'View successful funding stories',
        url: '/case-studies',
        icons: [{ src: '/logo.png', sizes: '96x96' }]
      },
      {
        name: 'Schedule Call',
        short_name: 'Schedule',
        description: 'Book a consultation call',
        url: '/contact',
        icons: [{ src: '/logo.png', sizes: '96x96' }]
      }
    ]
  }
}
