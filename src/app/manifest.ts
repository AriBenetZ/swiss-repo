import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aurum Ascend Capital - European Investment Platform',
    short_name: 'AurumAscend',
    description: 'Professional B2B investment platform connecting companies at all stages with verified institutional investors worldwide. Expert matching services, proven results, global network coverage.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a365d',
    orientation: 'portrait-primary',
    categories: ['finance', 'business', 'productivity', 'investment'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    id: 'aurumascend-investment-platform',
    display_override: ['standalone', 'minimal-ui', 'browser'],
    launch_handler: {
      client_mode: 'focus-existing'
    },
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
