import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4">
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-accent-primary/20"></div>
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-accent-primary animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Loading...</h2>
          <p className="text-secondary">Please wait while we prepare your content</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </main>
  );
}
