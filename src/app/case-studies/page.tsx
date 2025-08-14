'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Calendar, Building2, ArrowRight, CheckCircle, DollarSign, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  createHeroAnimation,
  createPageEntranceAnimation,
  createMetricsAnimation,
  createCardScrollAnimation,
  createProcessAnimation,
  createCTAAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function CaseStudiesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const casesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero animations - now shows instantly without animation
    // Hero content is visible immediately

    // Stats animation
    createMetricsAnimation('.metric-item', statsRef.current);

    // Case studies animation
    createCardScrollAnimation('.case-item', casesRef.current);

    // Process animation
    createProcessAnimation('.process-step', processRef.current);

    // CTA animation
    createCTAAnimation('.cta-section', ctaRef.current);

    return () => {
      cleanupAnimations();
    };
  }, []);

  const caseStudies = [
    {
      id: "workflow-analytics",
      title: "SaaS Platform Achieves €8M ARR",
      company: "WorkFlow Analytics*",
      sector: "Enterprise Software",
      fundingAmount: "€4.2M Series A",
      timeline: "9 months",
      description: "Zurich-based workforce analytics platform connected with German institutional investors to fund European expansion.",
      metrics: [
        { label: "ARR Growth", value: "280%" },
        { label: "Enterprise Clients", value: "450+" },
        { label: "Markets", value: "6 Countries" }
      ],
      outcome: "Successfully expanded to 6 European markets with 280% ARR growth in 20 months post-funding."
    },
    {
      id: "eurotransfer",
      title: "FinTech Startup Reaches Break-Even",
      company: "EuroTransfer*",
      sector: "Financial Technology",
      fundingAmount: "€2.8M Series A",
      timeline: "7 months",
      description: "Cross-border payment platform for SMEs raised growth capital through verified institutional investor network.",
      metrics: [
        { label: "Transaction Volume", value: "€50M+" },
        { label: "Monthly Growth", value: "18%" },
        { label: "SME Clients", value: "1,200+" }
      ],
      outcome: "Reached break-even 15 months post-funding with €50M+ monthly transaction volume and 1,200+ SME clients."
    },
    {
      id: "marketbridge",
      title: "E-commerce Platform Scales Operations",
      company: "MarketBridge*",
      sector: "E-commerce Technology",
      fundingAmount: "€6.5M Series B",
      timeline: "11 months",
      description: "B2B marketplace platform for wholesale trade secured Series B funding for technology development and market expansion.",
      metrics: [
        { label: "GMV Growth", value: "350%" },
        { label: "Supplier Network", value: "800+" },
        { label: "Revenue Run Rate", value: "€12M" }
      ],
      outcome: "Grew to €12M revenue run rate with 800+ suppliers and 350% GMV growth across European markets."
    }
  ];

  const stats = [
    { label: "Success Rate", value: "89%", description: "Companies successfully funded" },
    { label: "Average Timeline", value: "8.5 months", description: "From application to funding" },
    { label: "Total Deployed", value: "€85M+", description: "Capital deployed through platform" },
    { label: "Portfolio Growth", value: "195%", description: "Average revenue growth post-funding" }
  ];

  return (
    <main className="pt-16 bg-base">{/* Added pt-16 for navbar spacing */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-badge mb-8">
              <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-accent-primary" />
                <span className="text-small font-medium text-secondary">Success Stories</span>
              </div>
            </div>
            
            <h1 className="hero-title heading-display mb-6">
              Growth-Stage Success Stories{' '}
              <span className="gradient-text">From Europe's Leading Platform</span>
            </h1>
            
            <p className="hero-subtitle text-lead max-w-3xl mx-auto text-balance">
              Discover how European growth-stage companies have successfully raised institutional capital and scaled operations through proven investment platform expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-content bg-card border-b border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="metric-item text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="font-semibold text-primary mb-1">{stat.label}</div>
                <div className="text-sm text-secondary">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={casesRef} className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">
              European Growth-Stage Investment Success Stories
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Real examples of growth-stage companies that successfully raised institutional capital through our verified investor network. All company details are protected under strict confidentiality agreements.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full">
              <Target className="w-4 h-4 text-accent-primary" />
              <span className="text-small font-medium text-secondary">All company names and sensitive data have been anonymized</span>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-item">
                <Card className="card hover-lift">
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-primary text-secondary bg-secondary/20">
                              <Building2 className="w-3 h-3 mr-1" />
                              {study.sector}
                            </span>
                            <span className="flex items-center text-sm text-secondary">
                              <Calendar className="w-4 h-4 mr-1" />
                              {study.timeline} process
                            </span>
                          </div>
                          
                          <h3 className="heading-subsection">{study.title}</h3>
                          <p className="text-body">{study.description}</p>
                        </div>
                        
                        {/* Metrics */}
                        <div className="bg-secondary/20 rounded-lg p-6 border border-primary">
                          <h4 className="font-semibold text-primary mb-4">Key Results</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {study.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="text-center">
                                <div className="text-2xl font-bold mb-1 text-accent-primary">
                                  {metric.value}
                                </div>
                                <div className="text-sm text-secondary">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Outcome */}
                        <div className="border-l-4 border-accent-primary p-4 rounded-r-lg bg-accent-primary/10">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent-primary" />
                            <p className="text-primary font-medium">{study.outcome}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Sidebar */}
                      <div className="space-y-6">
                        <div className="bg-accent-primary/10 rounded-lg p-6 border border-accent-primary/30">
                          <h4 className="font-semibold text-primary mb-4 flex items-center">
                            <DollarSign className="w-4 h-4 mr-2 text-accent-primary" />
                            Funding Details
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm text-secondary mb-1">Amount Raised</div>
                              <div className="text-xl font-bold text-primary">{study.fundingAmount}</div>
                            </div>
                            <div>
                              <div className="text-sm text-secondary mb-1">Timeline</div>
                              <div className="font-semibold text-primary">{study.timeline}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                                Protected Information
                              </p>
                              <p className="text-xs text-amber-700 dark:text-amber-300">
                                Specific company details, investor names, and deal terms are subject to strict NDAs and cannot be disclosed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section-alternate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">
              Proven Growth-Stage Investment Framework
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Our institutional-grade process connects verified growth-stage companies with qualified European investors through a proven four-step framework.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Company Verification",
                  description: "Comprehensive due diligence and financial verification process."
                },
                {
                  step: "02", 
                  title: "Investor Matching",
                  description: "Strategic matching with institutional investors based on sector and stage."
                },
                {
                  step: "03",
                  title: "Facilitated Introductions",
                  description: "Structured introduction process with full transparency and support."
                },
                {
                  step: "04",
                  title: "Deal Closure",
                  description: "End-to-end support through negotiations and legal completion."
                }
              ].map((item, index) => (
                <div key={index} className="process-step">
                  <Card className="card text-center relative group hover-lift">
                    <CardContent className="p-6">
                      <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <div className="text-3xl font-bold mb-4 text-accent-primary">{item.step}</div>
                      <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-secondary text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="cta-section bg-gradient-to-br from-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the growing number of companies that have successfully raised capital 
              and scaled their businesses through <span className="aurum-ascend-enhanced">Aurum Ascend</span>.
            </p>
            <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg">
                <Link href="/apply">
                  Apply for Funding
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-3 rounded-lg">
                <Link href="/how-it-works">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
