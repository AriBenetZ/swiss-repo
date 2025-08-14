'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  Target,
  Award,
  Globe,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Heart,
  Lightbulb,
  Building2,
  Zap,
  BarChart3,
  Clock
} from 'lucide-react';
import {
  createPageEntranceAnimation,
  createCardScrollAnimation,
  createMetricsAnimation,
  createCTAAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero animation - now shows instantly without animation
    // Hero content is visible immediately

    // Mission animation
    createPageEntranceAnimation('.mission-content');

    // Values animation
    createCardScrollAnimation('.value-card', valuesRef.current);

    // Stats animation
    createMetricsAnimation('.stat-card', statsRef.current);

    // Team animation
    createCardScrollAnimation('.team-content', teamRef.current);

    // CTA animation
    createCTAAnimation('.cta-section', ctaRef.current);

    // Cleanup on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  const companyValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Expert Investment Guidance",
      description: "Our experienced team provides personalized guidance throughout your funding journey, from initial consultation to successful deal completion. Professional support every step of the way."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Focused Approach",
      description: "We measure success by your success. Our proven track record of 78% success rate demonstrates our commitment to helping companies achieve their funding goals."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Entrepreneur-Friendly Service",
      description: "Built by entrepreneurs who understand the challenges of raising capital. We provide the expert support and guidance we wished existed when we were in your position."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Technology-Enhanced Process",
      description: "We leverage modern technology to streamline the funding process while maintaining the personal touch that's essential for successful investor relationships."
    },
    {
      icon: <Award className="h-8 w-8 text-navy-600" />,
      title: "Professional Excellence",
      description: "We maintain the highest standards of professionalism in all our services, treating every client relationship as a long-term partnership built on trust and results."
    }
  ];  const companyStats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "78%",
      label: "Success Rate",
      description: "Companies that secure funding through our platform"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "8-12 weeks",
      label: "Process Timeline",
      description: "From application to funding completion"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: "500+",
      label: "Verified Investors",
      description: "Institutional investors across 25+ countries"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "48hrs",
      label: "Response Time",
      description: "Initial consultation scheduling"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      value: "Professional",
      label: "Network",
      description: "Verified institutional partners"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      value: "Success-Based",
      label: "Fee Model",
      description: "No upfront costs"
    }
  ];

  const companyFeatures = [
    "Expert matching with suitable institutional investors based on comprehensive analysis",
    "Direct access to senior investment professionals throughout the entire process",
    "78% success rate through proven methodologies and investor relationships",
    "Global network of 500+ verified institutional investors across all major markets",
    "Efficient 8-12 week process with regular updates and professional guidance",
    "Success-based fee structure - we only succeed when you successfully raise capital"
  ];

  return (
    <div className="pt-16 bg-base">{/* Added pt-16 for navbar spacing */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-hero gold-accent-overlay gold-whisper">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="hero-content text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full glass-subtle">
              <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-accent-secondary mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-secondary">Professional Investment Platform • Established 2019</span>
            </div>
            
            <h1 className="heading-display px-1 sm:px-0">
              Professional{' '}
              <span className="gradient-text">Investment Matchmaking</span>{' '}
              Services
            </h1>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-lead max-w-3xl mx-auto text-balance px-1 sm:px-0">
                <span className="aurum-ascend-enhanced">Aurum Ascend</span> is a premier B2B investment platform connecting growth-stage companies with verified institutional investors worldwide. We provide expert matching services, not automated database searches.
              </p>
              
              <p className="text-body max-w-2xl mx-auto px-1 sm:px-0">
                Since 2019, we've helped 150+ companies secure funding through our network of 500+ verified institutional investors across 25+ countries. Our expert team provides personalized support throughout the 8-12 week funding process.
              </p>
            </div>
            
            <div className="flex max-sm:flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="btn btn-primary btn-large hover-glow"
              >
                <Link href="/apply">
                  Join Our Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                className="btn btn-secondary btn-large"
              >
                <Link href="/how-it-works">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="section-gold-elegant platinum-border-whisper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="mission-content">
              <h2 className="heading-section">
                Our <span className="gradient-text">Investment Services</span>
              </h2>
              <p className="text-body mb-6">
                <span className="aurum-ascend-enhanced">Aurum Ascend</span> provides professional investment matchmaking services for growth-stage companies seeking institutional funding. We connect businesses with the right investors through expert analysis and proven processes.
              </p>
              <p className="text-body mb-8">
                Our comprehensive approach combines industry expertise with personalized service. We work with companies across all sectors, helping them navigate the complex world of institutional investing to achieve successful funding outcomes.
              </p>
              <div className="space-y-4">
                {companyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-semantic-success flex-shrink-0" />
                    <span className="text-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-first">
              <div className="card text-center">
                <Globe className="h-20 w-20 text-accent-secondary mx-auto mb-6" />
                <h3 className="heading-subsection">
                  Global Capital Infrastructure
                </h3>
                <p className="text-body">
                  Connecting exceptional companies with institutional investors across 25+ countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section section-premium">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Numbers that reflect our commitment to connecting exceptional founders with institutional capital
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="stat-card card text-center hover-lift">
                <div className="mb-4 p-3 bg-secondary rounded-xl w-fit mx-auto">
                  <div className="h-8 w-8 text-accent-secondary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-small font-semibold text-secondary mb-1">
                  {stat.label}
                </div>
                <div className="text-small text-tertiary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              The principles that guide our work and define our relationships with founders and investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card card text-center hover-lift">
                <div className="mb-6 p-3 bg-secondary rounded-xl w-fit mx-auto">
                  <div className="h-8 w-8 text-accent-secondary">
                    {value.icon}
                  </div>
                </div>
                <h3 className="heading-subsection">
                  {value.title}
                </h3>
                <p className="text-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={teamRef} className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section">
              Why Choose <span className="gradient-text aurum-ascend-enhanced">Aurum Ascend</span>
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Built by operators who understand both sides of the capital markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="team-content card text-center hover-lift">
              <div className="mb-6 p-4 bg-secondary rounded-xl w-fit mx-auto">
                <Users className="h-12 w-12 text-accent-secondary" />
              </div>
              <h3 className="heading-subsection">Institutional Experience</h3>
              <p className="text-body">
                Our team combines decades of experience across investment banking, 
                private equity, and successful startup operations.
              </p>
            </div>

            <div className="team-content card text-center hover-lift">
              <div className="mb-6 p-4 bg-secondary rounded-xl w-fit mx-auto">
                <TrendingUp className="h-12 w-12 text-accent-secondary" />
              </div>
              <h3 className="heading-subsection">Proven Track Record</h3>
              <p className="text-body">
                Consistent success helping companies connect with institutional capital across 
                150+ successful deals worldwide.
              </p>
            </div>

            <div className="team-content card text-center hover-lift">
              <div className="mb-6 p-4 bg-secondary rounded-xl w-fit mx-auto">
                <Globe className="h-12 w-12 text-accent-secondary" />
              </div>
              <h3 className="heading-subsection">Global Network</h3>
              <p className="text-body">
                Professional network of institutional investors across 
                25+ countries and every major industry sector.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* FAQ Section */}
      <section id="faq" className="section-large section-premium gold-border-subtle">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Everything you need to know about our personal approach to funding and partnership development.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is Aurum Ascend's investment matchmaking service?",
                answer: "Aurum Ascend is a professional B2B investment platform that connects growth-stage companies with verified institutional investors worldwide. We provide expert matching services, comprehensive support, and guidance throughout the funding process."
              },
              {
                question: "How does the investment matching process work?",
                answer: "Our experienced team analyzes your business and funding requirements, then matches you with suitable investors from our network of 500+ verified institutional investors. We facilitate introductions and provide support throughout the entire process."
              },
              {
                question: "What is your success rate for funding applications?",
                answer: "We achieve a 78% success rate for qualified companies that complete our process. This high success rate is achieved through careful pre-screening, expert matching, and comprehensive support throughout the funding journey."
              },
              {
                question: "What types of companies do you work with?",
                answer: "We work with growth-stage companies seeking institutional funding from $5M to $200M+. Our clients span all sectors and industries, from early-stage startups to established enterprises looking to scale."
              },
              {
                question: "How long does the funding process typically take?",
                answer: "The complete process typically takes 8-12 weeks from initial consultation to funding completion. This includes application review, investor matching, introductions, due diligence, and closing support."
              },
              {
                question: "What fees do you charge for your services?",
                answer: "We operate on a success-only fee structure - no upfront fees or monthly charges. We only get paid when you successfully close funding, ensuring our incentives are fully aligned with your success."
              },
              {
                question: "What types of investors are in your network?",
                answer: "Our network includes 500+ verified institutional investors: venture capital firms, private equity funds, family offices, strategic corporates, and growth equity funds across Europe, Americas, Asia-Pacific, and other major markets."
              },
              {
                question: "Do you provide ongoing support after funding?",
                answer: "Yes, we believe in long-term partnerships. We provide ongoing support for future funding rounds and continue to work with companies as they scale and their funding needs evolve."
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <details className="glass-card border border-primary hover:border-accent transition-all duration-300">
                  <summary className="cursor-pointer p-6 font-semibold text-primary hover:text-accent transition-colors flex items-center justify-between">
                    <span className="text-left">{faq.question}</span>
                    <svg 
                      className="w-5 h-5 transform transition-transform group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="cta-section section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Connect with Institutional Capital?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-balance">
              Join the 150+ successful entrepreneurs who've scaled their companies through our platform.
            </p>
            <div className="flex max-sm:flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn btn-primary btn-large hover-lift" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}>
                Apply for Funding <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
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
