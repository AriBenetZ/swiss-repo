import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Force dark mode to be always on
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Modern Dark Theme Design System - Professional Investment Platform
        
        // Background Colors - Deep Navy & Soft Charcoal
        'bg-base': '#0A0F1C',           // Deep navy main background
        'bg-card': '#1E293B',           // Soft charcoal card backgrounds
        'bg-secondary': '#334155',      // Lighter sections for separation
        'bg-tertiary': '#475569',       // Elevated elements
        'bg-overlay': 'rgba(30, 41, 59, 0.95)', // Modal/overlay backgrounds
        'bg-glass': 'rgba(30, 41, 59, 0.85)',   // Glass morphism backgrounds
        
        // Text Colors - High Contrast & Professional
        'text-primary': '#F8FAFC',      // Clean white primary text
        'text-secondary': '#CBD5E1',    // Light gray secondary text
        'text-tertiary': '#94A3B8',     // Muted gray tertiary text
        'text-muted': '#64748B',        // Subtle muted text
        'text-inverse': '#0F172A',      // Dark text for light backgrounds
        
        // Accent Colors - Muted Purple & Cobalt Blue
        'accent': '#6F3FF5',            // Muted purple primary accent
        'accent-hover': '#5D2FE0',      // Darker purple hover state
        'accent-active': '#4C1EC7',     // Even darker purple active state
        'accent-secondary': '#3B82F6',  // Cobalt blue secondary accent
        'accent-secondary-hover': '#2563EB', // Darker blue hover
        'accent-secondary-active': '#1D4ED8', // Even darker blue active
        
        // Semantic Colors - Dark Theme Optimized
        'success': '#10B981',           // Success green
        'success-hover': '#059669',     // Darker success green
        'warning': '#F59E0B',           // Warning amber
        'warning-hover': '#D97706',     // Darker warning amber
        'error': '#EF4444',             // Error red
        'error-hover': '#DC2626',       // Darker error red
        'info': '#3B82F6',              // Info blue
        'info-hover': '#2563EB',        // Darker info blue
        
        // Border Colors - Subtle & Professional with Glass Effects
        'border-primary': '#475569',    // Primary borders - visible
        'border-secondary': '#64748B',  // Secondary borders - more visible
        'border-accent': '#6F3FF5',     // Accent borders
        'border-glass': 'rgba(203, 213, 225, 0.15)', // Glass border
        'border-subtle': 'rgba(71, 85, 105, 0.5)',   // Very subtle borders
        
        // Legacy Neutral Scale - Remapped for Dark Theme
        'neutral': {
          50: '#475569',    // bg-tertiary
          100: '#475569',   // border-primary
          200: '#64748B',   // border-secondary
          300: '#64748B',   // text-muted
          400: '#64748B',   // text-muted
          500: '#94A3B8',   // text-tertiary
          600: '#CBD5E1',   // text-secondary
          700: '#F8FAFC',   // text-primary
          800: '#F8FAFC',   // text-primary
          900: '#F8FAFC',   // text-primary
        },
        
        // Additional System Colors
        'accent-blue': '#3B82F6',
        'accent-indigo': '#6F3FF5',
        'accent-emerald': '#10B981',
        'accent-amber': '#F59E0B',
        'accent-red': '#EF4444',
      },
      
      // Enhanced Shadow System for Dark Theme
      boxShadow: {
        // Glass morphism shadows
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
        
        // Card shadows - professional depth
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.5)',
        'card-elevated': '0 16px 48px 0 rgba(0, 0, 0, 0.6)',
        
        // Button shadows with glow effects
        'button': '0 4px 12px 0 rgba(111, 63, 245, 0.3)',
        'button-hover': '0 8px 20px 0 rgba(111, 63, 245, 0.4)',
        'button-active': '0 2px 8px 0 rgba(111, 63, 245, 0.5)',
        
        // Standard shadows enhanced for dark theme
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.35), 0 1px 2px -1px rgba(0, 0, 0, 0.35)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.35)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.45), 0 4px 6px -4px rgba(0, 0, 0, 0.45)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.45)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.65)',
        
        // Special effects
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
        'none': '0 0 #0000',
      },
      
      // Backdrop Blur Effects
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'glass': '20px',   // Signature glass effect
        'nav': '16px',     // Navigation blur
      },
      
      // Enhanced Animation System
      animation: {
        // Entrance animations
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        
        // Interaction animations
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'bounce-gentle': 'bounceGentle 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        
        // Loading animations
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        
        // Glow effects
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -5px, 0)' },
          '70%': { transform: 'translate3d(0, -3px, 0)' },
          '90%': { transform: 'translate3d(0, -1px, 0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(111, 63, 245, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(111, 63, 245, 0.6)' }
        }
      },
      
      // Professional Spacing System
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        
        // Section spacing
        'section-xs': '3rem',    // 48px
        'section-sm': '4rem',    // 64px  
        'section-md': '6rem',    // 96px
        'section-lg': '8rem',    // 128px
        'section-xl': '10rem',   // 160px
      },
      
      // Container Sizes
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'container': '1200px',
        'content': '65ch',
      },
      
      // Professional Transition Timing
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',     // Default smooth
        'snappy': 'cubic-bezier(0.4, 0, 0.1, 1)',     // Quick & snappy
        'gentle': 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Gentle & natural
        'emphasis': 'cubic-bezier(0.2, 0, 0, 1)',     // Strong emphasis
        'bounce': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Gentle bounce
      },
      
      // Typography Enhancements
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      
      // Letter Spacing for Professional Typography
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [
    // Custom scrollbar plugin
    function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#334155'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#64748B',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#94A3B8'
            }
          }
        }
      })
    }
  ],
};

export default config;
