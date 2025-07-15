'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showErrorDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report to error tracking service
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] bg-base flex items-center justify-center px-6">
          <div className="max-w-xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-semantic-error/10 border border-semantic-error/20 mb-4">
                <AlertTriangle className="h-8 w-8 text-semantic-error" />
              </div>
              
              <h2 className="text-2xl font-bold text-primary mb-3">
                Component Error
              </h2>
              
              <p className="text-secondary mb-6">
                Something went wrong in this section. Please try refreshing or go back to continue.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button 
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                className="btn btn-primary"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Link href="/">
                <Button variant="secondary" className="btn btn-secondary">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Error Details (Development Mode) */}
            {(this.props.showErrorDetails || process.env.NODE_ENV === 'development') && this.state.error && (
              <Card className="bg-semantic-error/5 border-semantic-error/20 text-left">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Bug className="h-4 w-4 text-semantic-error" />
                    <h3 className="font-semibold text-semantic-error text-sm">Error Details</h3>
                  </div>
                  <div className="text-xs text-secondary font-mono bg-base-subtle p-3 rounded overflow-auto max-h-40">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className="mt-1 whitespace-pre-wrap text-xs">{this.state.error.stack}</pre>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
};
