'use client';

import React, { useEffect, useRef } from 'react';
import { Calendar, ExternalLink, FileText, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  createPageEntranceAnimation,
  createCardScrollAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function PressPage() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero animation
    createPageEntranceAnimation('.hero-element');

    // Section animations
    createCardScrollAnimation('.press-section', null);

    // Cleanup on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  const pressReleases = [
    {
      title: "Aurum Ascend Capital Completes €5M Series A to Expand European Investment Platform",
      date: "December 15, 2024",
      excerpt: "London-based investment platform secures growth funding to enhance technology and expand institutional investor network across Europe.",
      link: "#"
    },
    {
      title: "Platform Facilitates Record €42M in Q4 Growth-Stage Investments",
      date: "January 8, 2025", 
      excerpt: "European growth-stage companies raise record funding through Aurum Ascend Capital's verified investor network in fourth quarter.",
      link: "#"
    },
    {
      title: "Aurum Ascend Capital Achieves SOC 2 Type II Compliance Certification",
      date: "November 22, 2024",
      excerpt: "Investment platform demonstrates commitment to security and data protection with independent compliance audit.",
      link: "#"
    }
  ];

  const mediaKit = [
    { name: "Company Logo Pack", description: "High-resolution logos in various formats", size: "2.1 MB" },
    { name: "Executive Photos", description: "Professional headshots of leadership team", size: "5.8 MB" },
    { name: "Company Fact Sheet", description: "Key statistics and company information", size: "847 KB" },
    { name: "Platform Screenshots", description: "High-quality product images", size: "12.3 MB" }
  ];

  return (
    <main className="pt-16 bg-base">{/* Fixed layout for proper footer display */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-spacing bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-element">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Press & Media
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                Investment Platform News &
                <span className="text-gradient"> Media Resources</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                Latest news, announcements, and media resources from Europe's leading growth-stage investment platform. Track our journey connecting companies with institutional investors.
              </p>
            </div>
            
            <div className="hero-element">
              <Button size="lg" className="btn-primary mr-4">
                <Mail className="mr-2 h-4 w-4" />
                Contact Press Team
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                <Download className="mr-2 h-4 w-4" />
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="section-spacing bg-white">
        <div ref={el => { if (el) sectionsRef.current[0] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              European Investment Platform Updates
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Company milestones, platform developments, and growth-stage investment insights from Europe's leading institutional investor network.
            </p>
          </div>
          
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-neutral-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{release.title}</h3>
                    <p className="text-neutral-600">{release.excerpt}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="outline" className="btn-secondary">
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="section-spacing bg-neutral-50">
        <div ref={el => { if (el) sectionsRef.current[1] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Media Kit & Resources
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Download high-quality assets, company information, and executive photos 
              for your editorial coverage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mediaKit.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-2">{item.name}</h3>
                    <p className="text-neutral-600 text-sm mb-2">{item.description}</p>
                    <span className="text-xs text-neutral-500">{item.size}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="section-spacing bg-white">
        <div ref={el => { if (el) sectionsRef.current[2] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Press Inquiries
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              For media inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">Media Contact</h3>
                  <div className="space-y-2 text-left">
                    <div className="text-neutral-600">Emma Rodriguez</div>
                    <div className="text-sm text-neutral-500">Head of Communications</div>
                    <a href="mailto:press@aurumascend.ch" className="text-accent-blue hover:underline">press@aurumascend.ch</a>
                    <a href="tel:+447537126467" className="text-neutral-600 hover:underline">+44 7537 126467</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">General Inquiries</h3>
                  <div className="space-y-2 text-left">
                    <div className="text-neutral-600">Aurum Ascend Capital Press Team</div>
                    <div className="text-sm text-neutral-500">Media Relations</div>
                    <a href="mailto:media@aurumascend.ch" className="text-accent-blue hover:underline">media@aurumascend.ch</a>
                    <div className="text-neutral-600">Response within 24 hours</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div ref={el => { if (el) sectionsRef.current[3] = el; }} className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our press updates to receive the latest news and announcements 
            directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">
              Follow on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
