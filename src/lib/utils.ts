import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Domain configuration for Switzerland
export const domainConfig = {
  primary: process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || 'www.aurumascend.ch',
  primaryUrl: process.env.NEXT_PUBLIC_PRIMARY_URL || 'https://www.aurumascend.ch',
} as const;

export function getPrimaryDomain(): string {
  return domainConfig.primaryUrl;
}

export function getCanonicalUrl(path: string): string {
  return `${domainConfig.primaryUrl}${path}`;
}

export function isSwissDomain(host: string | undefined): boolean {
  if (!host) return false;
  return host.includes('aurumascend.ch') || host.includes('www.aurumascend.ch');
}

export function getLocalizedContent(isSwiss: boolean = true) {
  return {
    currency: isSwiss ? 'CHF' : 'EUR',
    currencySymbol: isSwiss ? 'CHF' : '€',
    region: 'Switzerland',
    language: isSwiss ? 'en-CH' : 'en-EU',
    timezone: isSwiss ? 'Europe/Zurich' : 'Europe/Amsterdam',
  };
}
