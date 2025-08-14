'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FileText,
  Search,
  Users,
  Handshake,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  Building2,
  Target,
  BarChart3,
  Award,
  Zap
} from 'lucide-react';
import {
  createHeroAnimation,
  createProcessAnimation,
  createFeatureAnimation,
  createMetricsAnimation,
  createCTAAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function HowItWorksPage() {
  const heroRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero animation - now shows instantly without animation
    // Hero content is visible immediately

    // Steps animation
    createProcessAnimation('.step-card', stepsRef.current);

    // Benefits animation
    createFeatureAnimation('.benefit-item', benefitsRef.current);

    // Timeline animation
    createProcessAnimation('.timeline-item', timelineRef.current);

    // CTA animation
    createCTAAnimation('.cta-section', ctaRef.current);

    return () => {
      cleanupAnimations();
    };
  }, []);

  const processSteps = [
    {
      step: "01",
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Personal Consultation & Assessment",
      description: "Direct consultation with our senior team to understand your business, funding needs, and investor-readiness. No automated screening or junior staff—only experienced professionals.",
      details: [
        "One-on-one founder consultation with senior team",
        "Investment readiness assessment and guidance",
        "Business model and growth strategy review",
        "Personal funding journey planning"
      ],
      duration: "1-2 weeks"
    },
    {
      step: "02",
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "Strategic Investor Matching",
      description: "Manual matching with 3-5 highly relevant investors from our personal network. We consider sector expertise, stage preferences, ticket size, and cultural fit—not database algorithms.",
      details: [
        "Personal investor relationship leverage",
        "Sector expertise and stage alignment",
        "Cultural and strategic fit assessment",
        "Long-term partnership potential evaluation"
      ],
      duration: "2-3 weeks"
    },
    {
      step: "03",
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Context-Rich Introductions",
      description: "Personal introductions leveraging our established relationships. We provide context about why this is a perfect match, including your unique value and the investor's strategic interests.",
      details: [
        "Relationship-based introductions, not cold outreach",
        "Context-rich communication explaining the fit",
        "Pre-meeting preparation for both parties",
        "Ongoing facilitation throughout discussions"
      ],
      duration: "1 week"
    },
    {
      step: "04",
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: "Due Diligence & Deal Support",
      description: "Hands-on support through investor meetings, due diligence processes, and term negotiations. We facilitate discussions and help structure deals that work for both parties.",
      details: [
        "Investor meeting facilitation and preparation",
        "Due diligence process guidance and support",
        "Term sheet review and negotiation assistance",
        "Deal structuring and closing coordination"
      ],
      duration: "4-6 weeks"
    },
    {
      step: "05",
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Funding Completion & Ongoing Partnership",
      description: "Support through final documentation and closing. Continue working together for future funding rounds as your business grows and needs evolve.",
      details: [
        "Closing process coordination and support",
        "Legal documentation assistance",
        "Post-funding relationship management",
        "Future round planning and preparation"
      ],
      duration: "1-2 weeks"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "No Database Matching",
      metric: "Personal Relationships",
      description: "Every introduction comes from our established investor relationships, not automated algorithms."
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Senior Team Access", 
      metric: "No Junior Staff",
      description: "Direct access to experienced decision-makers throughout your entire funding journey."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      title: "82% Success Rate",
      metric: "4x Industry Average",
      description: "Relationship-driven approach achieves funding success rates 4x higher than traditional platforms."
    },
    {
      icon: <Building2 className="h-6 w-6 text-accent" />,
      title: "500+ Verified Investors",
      metric: "Quality Network",
      description: "Access to institutional investors, family offices, and strategic partners across 25+ countries."
    },
    {
      icon: <Target className="h-6 w-6 text-accent" />,
      title: "Context-Rich Introductions",
      metric: "Personal Touch",
      description: "Meaningful introductions with context about why this is a perfect match for both parties."
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Success-Only Fees",
      metric: "Aligned Incentives",
      description: "We only get paid when you successfully close funding. Your success is our success."
    }
  ];

  const timeline = [
    {
      phase: "Preparation",
      duration: "1-2 weeks",
      description: "Document preparation and profile optimization before matching begins.",
      tasks: ["Business plan refinement", "Financial model review", "Pitch deck optimization"]
    },
    {
      phase: "Matching & Outreach",
      duration: "1-2 weeks", 
      description: "AI-powered investor matching and initial outreach coordination.",
      tasks: ["Investor identification", "Introduction facilitation", "Initial meetings"]
    },
    {
      phase: "Due Diligence",
      duration: "3-6 weeks",
      description: "Comprehensive review process with multiple interested investors.",
      tasks: ["Data room access", "Management presentations", "Reference calls"]
    },
    {
      phase: "Term Negotiation",
      duration: "2-4 weeks",
      description: "Term sheet negotiation and legal documentation preparation.",
      tasks: ["Term sheet review", "Legal due diligence", "Final negotiations"]
    },
    {
      phase: "Closing",
      duration: "1-2 weeks",
      description: "Final documentation and capital transfer coordination.",
      tasks: ["Closing documents", "Wire transfers", "Board setup"]
    }
  ];

  return (
    <div className="pt-16 bg-base">{/* Fixed layout for proper footer display */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-hero">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-12">
            {/* Trust Badge */}
            <div className="hero-badge inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full glass-subtle">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent-secondary mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-secondary">Professional Investment Process • Proven Results</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="hero-title heading-display text-balance px-1 sm:px-0">
                How <span className="gradient-text aurum-ascend-enhanced">Aurum Ascend</span> Works
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="hero-subtitle text-lead text-balance max-w-3xl mx-auto px-1 sm:px-0">
                  Professional investment matchmaking process connecting growth-stage companies with institutional investors through expert guidance and proven methodologies.
                </p>
                
                <p className="text-body text-muted mb-12 max-w-2xl mx-auto">
                  From initial consultation to successful funding completion in 8-12 weeks. Expert support, verified investors, proven results.
                </p>
                
                <div className="flex max-sm:flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply" className="btn btn-primary w-fit btn-large">
                    Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/contact">
                    <Button className="btn btn-secondary w-fit btn-large">
                      Schedule a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={stepsRef} className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section text-balance">
              Professional Investment Process
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Our proven 5-step investment process guides you from initial consultation to successful funding completion with expert support at every stage.
            </p>
          </div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="card-glass">
                  <div className="grid max-lg:grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <div className="w-16 h-16 bg-accent-primary rounded-xl flex items-center justify-center mb-4 lg:mb-0">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4 text-accent-primary">
                        {step.icon}
                      </div>
                      <h3 className="heading-subsection">{step.title}</h3>
                      <span className="text-small bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <div className="lg:col-span-5">
                      <p className="text-body mb-6">{step.description}</p>
                      <ul className="grid grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-small text-secondary">
                            <CheckCircle className="h-4 w-4 text-semantic-success mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-4">
                      <div className="card-compact bg-card">
                        <h4 className="text-lg font-semibold text-primary mb-3">What You Can Expect</h4>
                        <div className="space-y-2 text-small text-secondary">
                          <div className="flex justify-between">
                            <span>Timeline:</span>
                            <span className="font-medium">{step.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Communication:</span>
                            <span className="font-medium">Daily updates</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Support:</span>
                            <span className="font-medium">Dedicated manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section text-balance">
              Why Our Process Works
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Data-driven results that demonstrate the effectiveness of our systematic approach.
            </p>
          </div>
          
          <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="card hover-lift">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-accent-primary">
                      {benefit.icon}
                    </div>
                    <span className="text-small bg-semantic-success/10 text-semantic-success px-3 py-1 rounded-full font-medium">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="heading-subsection">
                    {benefit.title}
                  </h3>
                  <p className="text-body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section text-balance">
              Typical Funding Timeline
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Clear milestones and expectations for each phase of your funding journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="timeline-item">
                  <div className="card-glass flex max-lg:flex-col lg:flex-row max-lg:items-start lg:items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex max-lg:flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="heading-subsection">{phase.phase}</h3>
                        <span className="text-small text-accent-primary font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-body mb-4">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <span key={taskIndex} className="text-small bg-tertiary/20 text-tertiary px-3 py-1 rounded-full">
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="cta-section section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Start Your Funding Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-balance">
              Join 450+ companies that have successfully raised capital through our proven process.
            </p>
            <div className="flex max-sm:flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn btn-primary btn-large hover-lift" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}>
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact">
                <Button
                  className="btn btn-secondary btn-large"
                  style={{
                    background: 'transparent',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white'
                  }}
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
