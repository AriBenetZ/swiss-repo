'use client';

import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CalendlyWidgetProps {
  url?: string;
  text?: string;
  className?: string;
  variant?: 'button' | 'link';
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CalendlyWidget({ 
  url = 'https://calendly.com/ari-raisesignal-68nf/30min', // updated link (same as before, but ensure this is the new one)
  text = 'Schedule time with me',
  className = '',
  variant = 'button'
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  if (variant === 'link') {
    return (
      <a
        href="#"
        onClick={handleClick}
        className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors ${className}`}
      >
        <Calendar className="h-4 w-4" />
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer ${className}`}
    >
      <Calendar className="h-5 w-5" />
      {text}
    </button>
  );
}
