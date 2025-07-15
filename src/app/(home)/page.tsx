import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendlyWidget } from '@/components/ui/calendly-widget';
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
    { value: "150+", label: "Successful Deals", sublabel: "Since 2019" },
    { value: "25+", label: "Countries Served", sublabel: "Global Reach" },
    { value: "8-12", label: "Week Timeline", sublabel: "Average Process" },
    { value: "48hrs", label: "Response Time", sublabel: "Initial Review" }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Investor Relationships",
      description: "Beyond algorithmic matching—we personally know our investors and understand your business. Every introduction is thoughtfully curated based on genuine compatibility and shared vision.",
      highlight: "Relationship-Driven"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trusted Partnership Approach",
      description: "We build long-term relationships, not just facilitate transactions. Your success becomes our reputation, ensuring dedicated personal attention throughout your growth journey.",
      highlight: "Long-term Partnership"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Beyond Seed to Scale",
      description: "From early conversations to Series B and beyond, we maintain relationships that evolve with your business. Our network grows with you through multiple funding rounds.",
      highlight: "Multi-Round Support"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Relationship Network",
      description: "Our personal connections span institutional investors across UK, Europe, Americas, Asia-Pacific, and Scandinavia. Each relationship is built on trust and mutual success.",
      highlight: "Personal Networks"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "White-Glove Service",
      description: "Dedicated personal attention throughout your journey. We handle the complex relationship management so you can focus on building your business.",
      highlight: "Personal Touch"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Aligned Success Partnership",
      description: "We only succeed when you get funded. This alignment ensures we're truly invested in your success, not just completing transactions.",
      highlight: "True Partnership"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Application & Verification",
      description: "Complete our comprehensive application with financial projections and business model validation.",
      duration: "24-48 hours"
    },
    {
      step: "02", 
      title: "Investor Matching",
      description: "Our team identifies optimal investor matches based on sector expertise and investment criteria.",
      duration: "48-72 hours"
    },
    {
      step: "03",
      title: "Due Diligence",
      description: "Structured due diligence process with pre-qualified investors and standardized documentation.",
      duration: "2-4 weeks"
    },
    {
      step: "04",
      title: "Term Negotiation",
      description: "Facilitated negotiations with legal support and market-standard term guidance.",
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Funding Completion",
      description: "Final documentation, compliance verification, and capital transfer coordination.",
      duration: "1 week"
    }
  ];

  const trustIndicators = [
    { name: "Professional Network", type: "Verified Members", logo: <Building2 className="h-8 w-8" /> },
    { name: "Due Diligence", type: "Thorough Process", logo: <Briefcase className="h-8 w-8" /> },
    { name: "Success Tracking", type: "Transparent Results", logo: <Target className="h-8 w-8" /> },
    { name: "Industry Focus", type: "Sector Expertise", logo: <Award className="h-8 w-8" /> },
    { name: "Global Reach", type: "25+ Countries", logo: <BarChart3 className="h-8 w-8" /> },
    { name: "No Upfront Fees", type: "Success-Based", logo: <Building2 className="h-8 w-8" /> }
  ];

  return (
    <div className="pt-16 bg-base">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-16">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-subtle">
              <Shield className="h-4 w-4 text-accent-secondary mr-2" />
              <span className="text-sm font-medium text-secondary">UK's Leading Investment Platform - 150+ Successful Deals</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-8">
              <h1 className="heading-display">
                Your Trusted Partner in{' '}
                <span className="gradient-text">Institutional Funding</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-lead max-w-3xl mx-auto text-balance">
                  We don't just facilitate introductions—we build lasting relationships. Our London-based team personally guides you through every step, leveraging our trusted connections with <span className="font-bold">institutional investors</span> across Europe, Americas, Asia & Scandinavia to secure the right partnership for your growth.
                </p>
                
                <p className="text-body max-w-2xl mx-auto text-balance">
                  From personal consultations to strategic introductions, experience the difference of working with a team that treats your success as our reputation. Join 150+ companies that have benefited from our relationship-driven approach.
                </p>
              </div>
            </div>
            
            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="btn btn-primary w-full sm:w-auto btn-large hover-glow"
              >
                <Link href="/apply">
                  Apply for Funding <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                className="btn btn-secondary w-full sm:w-auto btn-large"
              >
                <Link href="/how-it-works">
                  How It Works
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
      <section className="section-content bg-card">
        <div className="max-w-7xl mx-auto px-6">
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
                Why Choose RaiseSignal UK
              </h2>
              <p className="text-lead max-w-3xl mx-auto text-balance">
                The UK's premier investment platform connecting growth-stage companies with verified institutional investors through a structured, transparent process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card hover-lift glass-subtle">
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
      <section className="section-alternate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <h2 className="heading-section">
                Proven Funding Process
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                From application to funding in 8-12 weeks with our proven, transparent process trusted by 150+ companies.
              </p>
            </div>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="card-glass flex flex-col sm:flex-row items-start lg:items-center gap-4 p-4 rounded-xl hover-lift">
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
                Trusted by Leading Companies & Investors
              </h2>
              <p className="text-lead">
                Our UK-based platform serves companies globally with institutional investors, family offices, and strategic partners across Europe, Americas, Asia-Pacific, and Scandinavia.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="trust-item text-center space-y-3">
                  <div className="card-glass rounded-xl p-6 h-24 flex items-center justify-center hover-lift">
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
      <section className="cta-section section-content bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-primary max-w-3xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="heading-section text-balance">
                Ready to Scale Your Business?
              </h2>
              <p className="text-lead text-balance">
                Join 150+ companies that have successfully raised growth capital through our verified institutional investor network.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="btn btn-primary w-full sm:w-auto btn-large hover-glow"
              >
                <Link href="/apply">
                  Apply for Funding <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <CalendlyWidget 
                text="Schedule a Call" 
                url="https://calendly.com/ari-raisesignal-68nf/30min"
                className="btn btn-secondary w-full sm:w-auto btn-large"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

