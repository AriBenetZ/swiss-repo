import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'For Founders', href: '/apply' },
      { name: 'Success Stories', href: '/case-studies' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Team', href: '/team' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  return (
    <footer className="footer bg-card text-secondary border-t border-primary mt-auto footer-container">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content - Professional spacing */}
        <div className="section py-12">
          <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Brand Section - Left Side */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8">
                  <Image 
                    src="/logo.svg" 
                    alt="Aurum Ascend Capital Logo" 
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="text-lg text-primary">
                    <span className="font-bold">Aurum</span>
                    <span className="font-light">Ascend</span>
                  </div>
                  <div className="text-xs text-tertiary">Investment Platform</div>
                </div>
              </div>
              
              <p className="text-secondary mb-8 leading-relaxed max-w-md">
                Building lasting partnerships between ambitious founders and institutional investors through personal relationships and white-glove service. Based in Zurich, serving clients globally with dedicated personal attention.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-secondary">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:info@aurumascend.ch" className="footer-link text-primary">
                    <span>info@aurumascend.ch</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-secondary">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:+41445550123" className="footer-link text-primary block">
                      <span>+41 44 555 0123</span>
                    </a>
                    <span className="text-xs text-muted block">Mon-Fri 9AM-6PM CET</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm text-secondary">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <a 
                    href="https://maps.google.com?q=Bahnhofstrasse+100,+8001+Zurich,+Switzerland" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-primary"
                  >
                    <span>Bahnhofstrasse 100, 8001 Zurich</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Links - Right Side */}
            <div>
              <div className="grid max-md:grid-cols-2 md:grid-cols-3 gap-8">
                
                {/* Platform */}
                <div>
                  <h3 className="font-semibold text-primary mb-4">Platform</h3>
                  <ul className="space-y-3">
                    {footerLinks.platform.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="footer-link text-sm text-secondary"
                        >
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="font-semibold text-primary mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="footer-link text-sm text-secondary"
                        >
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="font-semibold text-primary mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="footer-link text-sm text-secondary"
                        >
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary py-8">
          <div className="flex max-md:flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-secondary">
              © {currentYear} <span className="font-bold">Aurum</span><span className="font-light">Ascend Capital</span>, SA. All rights reserved.
            </div>

            {/* Legal Notice */}
            <div className="flex items-center space-x-4 text-xs text-muted">
              <span className="flex items-center">
                <Shield className="h-3 w-3 mr-1" />
                Regulated Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
