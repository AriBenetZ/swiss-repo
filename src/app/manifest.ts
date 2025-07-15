import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RaiseSignal - Global Investment Platform',
    short_name: 'RaiseSignal',
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
    id: 'raisesignal-app',
    display_override: ['standalone', 'browser'],
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
      {
        src: '/logo.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable'
      },
      {
        src: '/logo.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
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
        icons: [{ src: '/logo.svg', sizes: '96x96' }]
      },
      {
        name: 'Browse Case Studies',
        short_name: 'Cases',
        description: 'View successful funding stories',
        url: '/case-studies',
        icons: [{ src: '/logo.svg', sizes: '96x96' }]
      },
      {
        name: 'Schedule Call',
        short_name: 'Schedule',
        description: 'Book a consultation call',
        url: 'https://calendly.com/ari-raisesignal-68nf/30min',
        icons: [{ src: '/logo.svg', sizes: '96x96' }]
      }
    ]
  }
}
