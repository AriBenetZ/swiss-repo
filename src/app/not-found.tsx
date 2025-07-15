'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertCircle,
  TrendingUp,
  Mail
} from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6">
            <AlertCircle className="h-12 w-12 text-accent-primary" />
          </div>
          
          {/* Error Code */}
          <div className="text-6xl font-bold text-accent-primary mb-4">404</div>
          
          {/* Error Title */}
          <h1 className="text-3xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          
          {/* Error Description */}
          <p className="text-lg text-secondary mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button className="btn btn-primary btn-large">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="secondary" 
            className="btn btn-secondary btn-large"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <Card className="bg-base-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Looking for something specific?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link 
                href="/apply" 
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-base-subtle transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-200">
                  <TrendingUp className="h-6 w-6 text-accent-primary" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">Raise Funding</div>
                  <div className="text-sm text-secondary">Apply for investment</div>
                </div>
              </Link>

              <Link 
                href="/contact" 
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-base-subtle transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-semantic-success/10 flex items-center justify-center group-hover:bg-semantic-success/20 transition-colors duration-200">
                  <Mail className="h-6 w-6 text-semantic-success" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">Contact Us</div>
                  <div className="text-sm text-secondary">Get in touch</div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Support Text */}
        <p className="text-sm text-tertiary mt-8">
          Still can't find what you're looking for? {' '}
          <Link href="/contact" className="text-accent-primary hover:text-accent-primary-hover transition-colors duration-200">
            Contact our support team
          </Link>
        </p>
      </div>
    </main>
  );
}
