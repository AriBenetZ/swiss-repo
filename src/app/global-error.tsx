'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  RefreshCw, 
  AlertTriangle,
  Mail,
  Phone
} from 'lucide-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the critical error to an error reporting service
    console.error('Critical application error:', error);
    
    // Report to error tracking service (e.g., Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="font-inter antialiased bg-base text-primary min-h-screen">
        <main className="min-h-screen bg-base flex items-center justify-center px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-semantic-error/10 border border-semantic-error/20 mb-6">
                <AlertTriangle className="h-12 w-12 text-semantic-error" />
              </div>
              
              {/* Error Title */}
              <h1 className="text-4xl font-bold text-primary mb-4">
                Critical Error
              </h1>
              
              {/* Error Description */}
              <p className="text-lg text-secondary mb-8 max-w-lg mx-auto">
                We're experiencing a critical system error. Our technical team has been automatically notified and is working to resolve this immediately.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={reset}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-r from-accent-primary to-accent-primary-hover text-white border border-accent-primary shadow-[0_2px_8px_rgba(139,92,246,0.15)] hover:shadow-[0_4px_16px_rgba(139,92,246,0.25)] h-12 px-8"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Reload Application
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 bg-transparent text-white border border-gray-600 hover:bg-gray-800 h-12 px-8"
              >
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Emergency Support
                </h2>
                <p className="text-gray-300 mb-6">
                  If you're experiencing a critical issue that needs immediate attention, please contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = 'mailto:support@raisesignal.uk?subject=Critical%20Application%20Error'}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600 bg-transparent hover:bg-gray-800 text-white h-10 px-4"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'tel:+447537126467'}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600 bg-transparent hover:bg-gray-800 text-white h-10 px-4"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Technical Details (Development) */}
            {process.env.NODE_ENV === 'development' && (
              <Card className="bg-red-900/20 border border-red-700/30 mt-8 text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Development Error Details</h3>
                  <div className="text-sm text-gray-300 font-mono bg-gray-900/50 p-4 rounded-lg overflow-auto">
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

            {/* Footer */}
            <p className="text-sm text-gray-400 mt-8">
              Error ID: {error.digest || 'Unknown'} | Time: {new Date().toLocaleString()}
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
