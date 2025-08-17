import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Clock,
  ArrowRight,
  Building2,
  Briefcase,
  Target,
  Zap,
  Award,
  BarChart3
} from 'lucide-react';

export default function HomePage() {
  const metrics = [
    { value: "78%", label: "Success Rate", sublabel: "Companies Funded" },
    { value: "500+", label: "Investors", sublabel: "Verified Network" },
    { value: "8-12", label: "Week Process", sublabel: "Average Timeline" },
    { value: "25+", label: "Countries", sublabel: "Global Reach" }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Investment Matching",
      description: "Our experienced team personally matches your company with the most suitable institutional investors from our global network. We focus on strategic fit, not just financial criteria.",
      highlight: "Personal Service"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Investor Network",
      description: "Access 500+ pre-verified institutional investors including VCs, private equity funds, family offices, and strategic corporates across 25+ countries worldwide.",
      highlight: "Quality Assured"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Success Record",
      description: "78% of companies that complete our process successfully secure funding. Our track record speaks for itself with 150+ successful deals since 2019.",
      highlight: "Results Driven"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Investment Platform",
      description: "Connect with institutional investors across Europe, North America, Asia-Pacific, and emerging markets. Our network spans all major financial centers.",
      highlight: "Worldwide Reach"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Efficient Process",
      description: "Complete your funding journey in 8-12 weeks with dedicated support throughout. Fast 48-hour initial response and regular progress updates.",
      highlight: "Time Efficient"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Success-Based Pricing",
      description: "No upfront fees or monthly charges. We only succeed when you do. Our fee structure is aligned with your success, reducing your financial risk.",
      highlight: "Risk-Free Start"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Application & Initial Assessment",
      description: "Submit your comprehensive funding application with business plan, financial projections, and company overview. Our team conducts initial assessment for investor readiness.",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Expert Investment Matching",
      description: "Our experienced team identifies and matches you with 3-5 most suitable institutional investors based on sector expertise, investment stage, and strategic fit.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Professional Introductions",
      description: "We facilitate warm introductions to matched investors with detailed context about your business opportunity and why it aligns with their investment criteria.",
      duration: "1 week"
    },
    {
      step: "04",
      title: "Due Diligence Support",
      description: "Expert guidance through investor meetings, due diligence processes, and term negotiations. Our team supports you throughout the evaluation phase.",
      duration: "4-6 weeks"
    },
    {
      step: "05",
      title: "Deal Completion & Closing",
      description: "Professional support through final negotiations, legal documentation, and deal closing. Ongoing partnership for future funding rounds as you scale.",
      duration: "1-2 weeks"
    }
  ];

  const trustIndicators = [
    { name: "Expert Matching", type: "Professional Service", logo: <Building2 className="h-8 w-8" /> },
    { name: "Verified Network", type: "500+ Investors", logo: <Briefcase className="h-8 w-8" /> },
    { name: "Success-Based Fees", type: "No Upfront Costs", logo: <Target className="h-8 w-8" /> },
    { name: "Proven Results", type: "78% Success Rate", logo: <Award className="h-8 w-8" /> },
    { name: "Global Reach", type: "25+ Countries", logo: <BarChart3 className="h-8 w-8" /> },
    { name: "Fast Response", type: "48-Hour Reply", logo: <Clock className="h-8 w-8" /> }
  ];

  return (
    <div className="pt-16 bg-base">
      {/* Hero Section */}
      <section className="section-hero gold-accent-overlay gold-whisper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-16">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-subtle">
              <Shield className="h-4 w-4 text-accent-secondary mr-2" />
              <span className="text-sm font-medium text-secondary">Global B2B Investment Platform - International Partnerships</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-8">
              <h1 className="heading-display">
                Connect with{' '}
                <span className="gradient-text">Institutional Investors</span>{' '}
                Worldwide
              </h1>
              
              <div className="space-y-4">
                <p className="text-lead max-w-3xl mx-auto text-balance">
                  The premier B2B investment platform connecting companies with verified institutional investors worldwide. 78% success rate • 500+ investors • 25+ countries • No upfront fees.
                </p>
                
                <p className="text-body max-w-2xl mx-auto text-balance">
                  Personal relationship management, not database matching. Join 150+ companies that have successfully raised capital since 2019.
                </p>
              </div>
            </div>
            
            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="btn btn-primary w-full sm:w-auto btn-large hover-glow h-14"
              >
                <Link href="/apply">
                  Start Your Application
                </Link>
              </Button>
              <Button 
                asChild 
                className="btn btn-secondary w-full sm:w-auto btn-large h-14"
              >
                <Link href="/contact">
                  Schedule a Call
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-secondary">
                <CheckCircle className="h-5 w-5 text-accent-primary flex-shrink-0" />
                <span className="text-sm font-medium">No Upfront Fees</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-secondary">
                <CheckCircle className="h-5 w-5 text-accent-primary flex-shrink-0" />
                <span className="text-sm font-medium">48hr Response</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-secondary">
                <CheckCircle className="h-5 w-5 text-accent-primary flex-shrink-0" />
                <span className="text-sm font-medium">Global Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="platinum-whisper">
        <div className="max-w-7xl mx-auto px-6 sm:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold gradient-text">
                  {metric.value}
                </div>
                <div className="text-primary font-semibold text-sm">{metric.label}</div>
                <div className="text-tertiary text-xs">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-content bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <h2 className="heading-section text-balance">
                Why Choose <span className="aurum-ascend-enhanced">Aurum Ascend</span> for Investment Funding
              </h2>
              <p className="text-lead max-w-3xl mx-auto text-balance">
                Professional investment matchmaking services connecting growth-stage companies with institutional investors worldwide through proven processes and expert guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-gold-elegant gold-hover-elegant">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mx-auto text-primary">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="heading-subsection">{feature.title}</h3>
                      <p className="text-body">{feature.description}</p>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary">
                        {feature.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-alternate section-premium">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <h2 className="heading-section">
                Our Relationship-Driven Process
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                From personal consultation to funding completion in 8-12 weeks. Every step involves direct access to our senior team and personal investor relationships.
              </p>
            </div>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="glass-platinum-elegant platinum-border-whisper flex flex-col sm:flex-row items-start lg:items-center gap-4 p-4 rounded-xl platinum-hover-elegant">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-grow space-y-2">
                    <h3 className="heading-subsection">{step.title}</h3>
                    <p className="text-body">{step.description}</p>
                    <span className="text-sm text-accent-primary font-medium">Timeline: {step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                asChild 
                className="btn btn-primary btn-large w-full sm:w-fit"
              >
                <Link href="/how-it-works">
                  View Detailed Process <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-content bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <h2 className="heading-section">
                Trusted by Companies Worldwide
              </h2>
              <p className="text-lead">
                Professional investment platform serving growth-stage companies through our verified network of institutional investors, family offices, and strategic partners worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="trust-item text-center space-y-3">
                  <div className="glass-premium gold-border-subtle rounded-xl p-6 h-24 flex items-center justify-center gold-hover-glow">
                    <div className="text-accent-secondary">
                      {indicator.logo}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-primary">{indicator.name}</div>
                  <div className="text-xs text-tertiary">{indicator.type}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-small text-muted">
                Network partnerships and advisory relationships. Not an endorsement of services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-gold-elegant gold-accent-overlay">
        <div className="max-w-7xl mx-auto px-6 py-4 sm:py-6">
          <div className="text-center text-primary max-w-3xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="heading-section text-balance">
                Ready to Secure Investment Funding?
              </h2>
              <p className="text-lead text-balance">
                Join 150+ companies that have successfully raised capital through our professional investment platform. Expert matching, verified investors, proven results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button 
                asChild 
                className="btn btn-primary w-full sm:w-auto btn-large hover-glow"
              >
                <Link href="/apply">
                  Apply for Funding <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Link href="/contact">
                <Button className="btn btn-secondary w-full sm:w-auto btn-large">
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

