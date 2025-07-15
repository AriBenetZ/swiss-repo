'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Settings, 
  Clock, 
  Mail,
  Twitter,
  Linkedin,
  RefreshCw
} from 'lucide-react';

interface MaintenancePageProps {
  estimatedTime?: string;
  reason?: string;
  showSocialLinks?: boolean;
}

export default function MaintenancePage({ 
  estimatedTime = "2 hours", 
  reason = "scheduled maintenance",
  showSocialLinks = true 
}: MaintenancePageProps) {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Maintenance Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-6">
            <Settings className="h-12 w-12 text-accent-secondary animate-spin" style={{animationDuration: '3s'}} />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl font-bold text-primary mb-4">
            Under Maintenance
          </h1>
          
          {/* Description */}
          <p className="text-lg text-secondary mb-8 max-w-lg mx-auto">
            We're currently performing {reason} to improve your experience. 
            We'll be back online shortly.
          </p>
        </div>

        {/* Estimated Time */}
        <Card className="bg-base-subtle border-primary/20 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-accent-primary" />
              <h2 className="text-xl font-semibold text-primary">
                Estimated Downtime
              </h2>
            </div>
            <div className="text-2xl font-bold text-accent-primary mb-2">
              {estimatedTime}
            </div>
            <div className="text-sm text-secondary">
              Current time: {currentTime.toLocaleTimeString()}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={() => window.location.reload()}
            className="btn btn-primary btn-large"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Check Again
          </Button>
          <Link href="mailto:support@raisesignal.uk?subject=Maintenance%20Inquiry">
            <Button variant="secondary" className="btn btn-secondary btn-large">
              <Mail className="mr-2 h-5 w-5" />
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Status Updates */}
        <Card className="bg-base-subtle border-primary/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">
              What's being updated?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-secondary">System performance improvements</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-secondary">Security updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-secondary">Database optimizations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-secondary">New feature preparations</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        {showSocialLinks && (
          <div className="text-center">
            <p className="text-secondary mb-4">
              Stay updated on our progress:
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="https://twitter.com/raisesignal" 
                target="_blank"
                className="flex items-center gap-2 text-accent-primary hover:text-accent-primary-hover transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </Link>
              <Link 
                href="https://linkedin.com/company/raisesignal" 
                target="_blank"
                className="flex items-center gap-2 text-accent-secondary hover:text-accent-secondary-hover transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link 
                href="mailto:info@raisesignal.uk"
                className="flex items-center gap-2 text-semantic-success hover:text-semantic-success-hover transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </Link>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-sm text-tertiary mt-8">
          Thank you for your patience. We appreciate your understanding.
        </p>
      </div>
    </main>
  );
}
