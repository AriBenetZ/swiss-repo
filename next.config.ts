import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server external packages (moved from experimental)
  serverExternalPackages: ['sharp'],
  
  // Enable Next.js 15 stable features for better SEO and performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot', 'framer-motion'],
    // Note: typedRoutes not supported with Turbopack yet
  },
  
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  trailingSlash: false,
  generateEtags: true,
  
  // Advanced image optimization for 2025 Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aurumascend.ch',
      },
      {
        protocol: 'https',
        hostname: 'aurumascend.ch',
      },
    ],
    unoptimized: false,
  },
  
  // Add advanced security and SEO headers for 2025 best practices
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // SEO optimization headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1, max-preview:-1'
          },
          {
            key: 'Link',
            value: '<https://www.aurumascend.ch>; rel="canonical"'
          },
          // Performance headers
          {
            key: 'X-Response-Time',
            value: '${Date.now()}'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          // SEO trust signals
          {
            key: 'X-Powered-By',
            value: 'Aurum Ascend Capital'
          },
          {
            key: 'Server',
            value: 'AurumAscend/2025'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },
  
  // Add redirects for SEO purposes and domain migration
  async redirects() {
    return [
      // Page redirects only
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/funding',
        destination: '/apply',
        permanent: true,
      }
    ];
  },
  
  // Bundle analyzer for performance optimization
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      });
      config.plugins.push(new BundleAnalyzerPlugin());
      return config;
    },
  }),
};

export default nextConfig;
