'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  WifiOff, 
  RefreshCw, 
  Home, 
  Signal,
  AlertCircle,
  Download
} from 'lucide-react';

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = async () => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);

    try {
      // Try to fetch a small resource to test connectivity
      await fetch('/favicon.ico', { 
        method: 'HEAD',
        cache: 'no-cache'
      });
      
      // If successful, reload the page
      window.location.reload();
    } catch (error) {
      // Still offline
      setTimeout(() => {
        setIsRetrying(false);
      }, 1000);
    }
  };

  // Auto-redirect when back online
  useEffect(() => {
    if (isOnline && retryCount > 0) {
      window.location.reload();
    }
  }, [isOnline, retryCount]);

  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Offline Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-semantic-warning/10 border border-semantic-warning/20 mb-6">
            <WifiOff className="h-12 w-12 text-semantic-warning" />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-primary mb-4">
            You're Offline
          </h1>
          
          {/* Description */}
          <p className="text-lg text-secondary mb-8 max-w-lg mx-auto">
            It looks like you've lost your internet connection. Check your network settings and try again.
          </p>
        </div>

        {/* Connection Status */}
        <Card className="bg-base-subtle border-primary/20 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Signal className={`h-5 w-5 ${isOnline ? 'text-semantic-success' : 'text-semantic-error'}`} />
              <h2 className="text-xl font-semibold text-primary">
                Connection Status
              </h2>
            </div>
            <div className={`text-lg font-medium mb-2 ${isOnline ? 'text-semantic-success' : 'text-semantic-error'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </div>
            {retryCount > 0 && (
              <div className="text-sm text-secondary">
                Retry attempts: {retryCount}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleRetry}
            disabled={isRetrying}
            className="btn btn-primary btn-large"
          >
            <RefreshCw className={`mr-2 h-5 w-5 ${isRetrying ? 'animate-spin' : ''}`} />
            {isRetrying ? 'Checking...' : 'Try Again'}
          </Button>
          <Button 
            onClick={() => window.location.reload()}
            variant="secondary" 
            className="btn btn-secondary btn-large"
          >
            <Home className="mr-2 h-5 w-5" />
            Reload Page
          </Button>
        </div>

        {/* Troubleshooting Tips */}
        <Card className="bg-base-subtle border-primary/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Troubleshooting Tips
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2"></div>
                <span className="text-secondary">Check your WiFi or mobile data connection</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2"></div>
                <span className="text-secondary">Try moving to a location with better signal</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2"></div>
                <span className="text-secondary">Restart your router or modem</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2"></div>
                <span className="text-secondary">Contact your internet service provider</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offline Features */}
        <Card className="bg-accent-primary/5 border-accent-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Download className="h-5 w-5 text-accent-primary" />
              <h3 className="text-lg font-semibold text-primary">
                While You're Offline
              </h3>
            </div>
            <p className="text-secondary mb-4">
              Some features may still be available from your browser cache:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link 
                href="/about"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent-primary/10 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-accent-primary">i</span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-primary">About Us</div>
                  <div className="text-xs text-secondary">Learn about Aurum Ascend Capital</div>
                </div>
              </Link>

              <Link 
                href="/how-it-works"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent-primary/10 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-accent-primary">?</span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-primary">How It Works</div>
                  <div className="text-xs text-secondary">Platform overview</div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Auto-retry indicator */}
        {!isOnline && (
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-tertiary">
            <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
            <span>Automatically checking for connection...</span>
          </div>
        )}

        {/* Footer */}
        <p className="text-sm text-tertiary mt-8">
          Need help? Visit our {' '}
          <Link href="/contact" className="text-accent-primary hover:text-accent-primary-hover transition-colors duration-200">
            support page
          </Link>
          {' '} when you're back online.
        </p>
      </div>
    </main>
  );
}
