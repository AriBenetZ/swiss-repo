'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  RefreshCw, 
  AlertTriangle,
  Bug,
  Mail,
  ArrowLeft
} from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-semantic-error/10 border border-semantic-error/20 mb-6">
            <AlertTriangle className="h-12 w-12 text-semantic-error" />
          </div>
          
          {/* Error Code */}
          <div className="text-6xl font-bold text-semantic-error mb-4">500</div>
          
          {/* Error Title */}
          <h1 className="text-3xl font-bold text-primary mb-4">
            Something went wrong
          </h1>
          
          {/* Error Description */}
          <p className="text-lg text-secondary mb-8 max-w-lg mx-auto">
            We encountered an unexpected error. Our team has been notified and is working to fix this issue.
          </p>
          
          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <Card className="bg-semantic-error/5 border-semantic-error/20 mb-8 text-left">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Bug className="h-5 w-5 text-semantic-error" />
                  <h3 className="font-semibold text-semantic-error">Development Error Details</h3>
                </div>
                <div className="text-sm text-secondary font-mono bg-base-subtle p-4 rounded-lg overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {error.message}
                  </div>
                  {error.digest && (
                    <div className="mb-2">
                      <strong>Error ID:</strong> {error.digest}
                    </div>
                  )}
                  {error.stack && (
                    <div>
                      <strong>Stack trace:</strong>
                      <pre className="mt-2 text-xs whitespace-pre-wrap">{error.stack}</pre>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={reset}
            className="btn btn-primary btn-large"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="secondary" className="btn btn-secondary btn-large">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="btn btn-outline btn-large"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Support Information */}
        <Card className="bg-base-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Need immediate assistance?
            </h2>
            <p className="text-secondary mb-6">
              If this error persists, please contact our support team with the error details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="btn btn-outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="btn btn-ghost"
                onClick={() => {
                  navigator.clipboard.writeText(`Error: ${error.message}\nError ID: ${error.digest || 'N/A'}\nURL: ${window.location.href}\nTimestamp: ${new Date().toISOString()}`);
                }}
              >
                Copy Error Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <p className="text-sm text-tertiary mt-8">
          Error persisting? Visit our {' '}
          <Link href="/how-it-works" className="text-accent-primary hover:text-accent-primary-hover transition-colors duration-200">
            help center
          </Link>
          {' '} or {' '}
          <Link href="/contact" className="text-accent-primary hover:text-accent-primary-hover transition-colors duration-200">
            contact support
          </Link>
        </p>
      </div>
    </main>
  );
}
