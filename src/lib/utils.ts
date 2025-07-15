import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Domain configuration for UK only
export const domainConfig = {
  primary: process.env.NEXT_PUBLIC_PRIMARY_DOMAIN || 'www.raisesignal.uk',
  primaryUrl: process.env.NEXT_PUBLIC_PRIMARY_URL || 'https://www.raisesignal.uk',
} as const;

export function getPrimaryDomain(): string {
  return domainConfig.primaryUrl;
}

export function getCanonicalUrl(path: string): string {
  return `${domainConfig.primaryUrl}${path}`;
}

export function isUKDomain(host: string | undefined): boolean {
  if (!host) return false;
  return host.includes('raisesignal.uk') || host.includes('www.raisesignal.uk');
}

export function getLocalizedContent(isUK: boolean = true) {
  return {
    currency: isUK ? 'GBP' : 'EUR',
    currencySymbol: isUK ? '£' : '€',
    region: 'UK',
    language: isUK ? 'en-GB' : 'en-NL',
    timezone: isUK ? 'Europe/London' : 'Europe/Amsterdam',
  };
}
