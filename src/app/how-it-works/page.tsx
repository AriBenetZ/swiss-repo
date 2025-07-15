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
      title: "Personal Business Understanding",
      description: "We take time to deeply understand your business, vision, and growth plans through personal conversations—not just forms and documents.",
      details: [
        "One-on-one founder consultation",
        "Business model deep dive",
        "Growth strategy discussion",
        "Personal vision alignment"
      ],
      duration: "24-48 hours"
    },
    {
      step: "02",
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "Relationship-Based Matching",
      description: "Using our personal knowledge of both your business and our investor relationships, we identify the perfect fit beyond just criteria matching.",
      details: [
        "Personal investor relationships",
        "Cultural fit assessment",
        "Strategic value alignment",
        "Long-term partnership potential"
      ],
      duration: "48-72 hours"
    },
    {
      step: "03",
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Thoughtful Introductions",
      description: "Personal introductions to investors we know will be genuinely interested, with context about why this is a perfect match for both parties.",
      details: [
        "Personal relationship leverage",
        "Context-rich introductions",
        "Pre-conversation preparation",
        "Ongoing relationship facilitation"
      ],
      duration: "1 week"
    },
    {
      step: "04",
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: "Due Diligence Process",
      description: "Structured due diligence with standardized documentation and legal support throughout the process.",
      details: [
        "Document room setup",
        "Legal review support",
        "Financial verification",
        "Reference checks"
      ],
      duration: "2-4 weeks"
    },
    {
      step: "05",
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Term Negotiation & Closing",
      description: "Facilitated negotiations with legal guidance and market-standard term optimization for successful closure.",
      details: [
        "Term sheet review",
        "Legal documentation",
        "Closing coordination",
        "Capital transfer"
      ],
      duration: "2-3 weeks"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Institutional-Grade Security",
      metric: "SOC 2 Compliant",
      description: "Bank-level encryption and compliance standards protect all stakeholder information."
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Accelerated Timeline", 
      metric: "60% Faster",
      description: "Streamlined process reduces average time-to-funding from 6+ months to 8-12 weeks."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      title: "Higher Success Rate",
      metric: "3.2x Better",
      description: "Data-driven matching increases funding success rates compared to traditional methods."
    },
    {
      icon: <Building2 className="h-6 w-6 text-accent" />,
      title: "Quality Investor Network",
      metric: "Investors",
      description: "Access to verified institutional investors, family offices, and strategic partners."
    },
    {
      icon: <Target className="h-6 w-6 text-accent" />,
      title: "Precision Matching",
      metric: "AI-Powered",
      description: "Advanced algorithms ensure optimal investor-startup fit based on multiple criteria."
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Success-Based Fees",
      metric: "No Risk",
      description: "Pay only when you successfully close funding. Aligned incentives for mutual success."
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
              <span className="text-xs sm:text-sm font-medium text-secondary">Proven Process • 450+ Successful Deals</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="hero-title heading-display text-balance px-1 sm:px-0">
                How <span className="gradient-text"><span className="font-bold">Aurum</span><span className="font-light">Ascend</span></span> Works
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="hero-subtitle text-lead text-balance max-w-3xl mx-auto px-1 sm:px-0">
                  A personal, relationship-driven approach that connects ambitious founders with the right institutional partners through trusted introductions.
                </p>
                
                <p className="text-body text-muted mb-12 max-w-2xl mx-auto">
                  From personal consultation to successful funding in 8-12 weeks through our bespoke, white-glove service.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/apply" className="btn btn-primary w-full sm:w-auto btn-large">
                    Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="https://calendly.com/aurum-ascend/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full sm:w-auto btn-large"
                  >
                    Schedule a Call
                  </a>
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
              Our Proven 5-Step Process
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              A systematic approach designed to maximize your funding success while minimizing time and effort.
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
      <section ref={ctaRef} className="cta-section section" style={{
        background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Start Your Funding Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-balance">
              Join 450+ companies that have successfully raised capital through our proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/apply" className="btn btn-primary w-full sm:w-auto btn-large hover-lift" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}>
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://calendly.com/aurum-ascend/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto btn-large"
                style={{
                  background: 'transparent',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white'
                }}
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
