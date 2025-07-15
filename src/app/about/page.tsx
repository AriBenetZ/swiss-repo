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
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "We believe in complete transparency throughout the funding process. Every interaction is documented, and all parties have full visibility into progress and next steps."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personal Relationships",
      description: "Beyond transactions, we build lasting relationships. Our approach goes deeper than matching—we understand your business personally and connect you with investors who share your vision."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Our success is measured by your success. We only win when you successfully close funding, ensuring our incentives are perfectly aligned with yours."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Founder-First",
      description: "Built by entrepreneurs for entrepreneurs. We understand the challenges of fundraising because we've been there ourselves. Every founder gets personal attention, not automated responses."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Relationship-Driven Technology",
      description: "We leverage technology to enhance human connections, not replace them. Our platform facilitates meaningful conversations between founders and investors."
    },
    {
      icon: <Award className="h-8 w-8 text-navy-600" />,
      title: "Excellence in Partnership",
      description: "We maintain the highest standards in everything we do, treating every business relationship as a long-term partnership rather than a single transaction."
    }
  ];

  const companyStats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "150+",
      label: "Successful Deals",
      description: "Companies successfully funded"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "8-12 weeks",
      label: "Average Timeline",
      description: "From application to funding"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: "25+",
      label: "Countries",
      description: "Global network coverage"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "48hrs",
      label: "Response Time",
      description: "Initial review process"
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
    "Personal relationships with every founder - no automated responses",
    "Hand-selected investor introductions based on deep business understanding",
    "Direct access to decision-makers through established personal networks",
    "Comprehensive support throughout the entire journey, not just transactions",
    "Long-term partnership approach beyond single funding rounds",
    "Confidential, relationship-based process built on trust and discretion"
  ];

  return (
    <div className="pt-16 bg-base">{/* Added pt-16 for navbar spacing */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-hero gold-accent-overlay gold-whisper">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="hero-content text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full glass-subtle">
              <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-accent-secondary mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-secondary">Founded by Entrepreneurs • Backed by Experience</span>
            </div>
            
            <h1 className="heading-display px-1 sm:px-0">
              Building Lasting Partnerships Between{' '}
              <span className="gradient-text">Founders & Investors</span>
            </h1>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-lead max-w-3xl mx-auto text-balance px-1 sm:px-0">
                We believe funding should be about relationships, not transactions. Our Zurich-based team dedicates time to understand both founders and investors deeply, creating meaningful connections that drive long-term success.
              </p>
              
              <p className="text-body max-w-2xl mx-auto px-1 sm:px-0">
                Founded in 2019, <span className="font-bold">Aurum</span><span className="font-light">Ascend Capital</span> has personally guided over 150 companies through successful funding journeys across 25+ countries, building trust through every introduction with our Swiss-based expertise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="btn btn-primary w-full sm:w-auto btn-large hover-glow"
              >
                <Link href="/apply">
                  Join Our Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                className="btn btn-secondary w-full sm:w-auto btn-large"
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
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-body mb-6">
                <span className="font-bold">Aurum</span><span className="font-light">Ascend</span> was founded with a singular mission: to transform capital allocation through personal relationships and meaningful connections between exceptional companies and the right investors.
              </p>
              <p className="text-body mb-8">
                We believe that successful funding isn't just about matching criteria—it's about building relationships. While technology enables us to reach global markets, our success comes from the personal touch: understanding your business deeply, knowing our investors personally, and facilitating meaningful conversations that lead to lasting partnerships.
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
              Why Choose <span className="gradient-text"><span className="font-bold">Aurum</span><span className="font-light">Ascend</span></span>
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
                question: "How personal is Aurum Ascend Capital's approach to funding?",
                answer: "Extremely personal. Every client works directly with our Zurich-based team through dedicated one-on-one consultations, personal investor introductions, and ongoing relationship management. We treat your success as our reputation and invest in long-term partnerships, not just transactions."
              },
              {
                question: "Do I get direct access to decision-makers at Aurum Ascend Capital?",
                answer: "Yes. From your first consultation, you work directly with senior team members including our CTO/CFO who personally joins client calls throughout the entire process. No junior staff or account managers—you get direct access to the people making decisions about your funding journey."
              },
              {
                question: "How long does the funding process take with Aurum Ascend Capital?",
                answer: "The typical funding process takes 8-12 weeks from application to funding completion. This includes personal consultation and application review (1-2 weeks), strategic investor matching (2-3 weeks), and due diligence with closing (4-6 weeks)."
              },
              {
                question: "What types of companies can apply for funding through Aurum Ascend Capital?",
                answer: "We work with growth-stage companies seeking £250K to £50M+ in funding. Ideal candidates have proven revenue, scalable business models, and are ready for Series A, B, or growth capital rounds."
              },
              {
                question: "What makes Aurum Ascend Capital's investor introductions different?",
                answer: "Our introductions are relationship-based, not database-driven. We personally know our investors, understand their investment preferences, and provide context-rich introductions explaining why this is a perfect match for both parties."
              },
              {
                question: "What is the success rate for funding applications?",
                answer: "Aurum Ascend Capital has a 78% success rate for qualified applications that complete our process. We pre-screen applications to ensure investor-readiness before proceeding."
              },
              {
                question: "How does Aurum Ascend Capital support long-term relationships?",
                answer: "We believe in multi-round partnerships. From seed discussions to Series B and beyond, we maintain relationships that evolve with your business. Our network grows with you throughout your entire growth journey."
              },
              {
                question: "What types of investors are in your network?",
                answer: "Our network includes 500+ institutional investors: VCs, growth equity funds, family offices, strategic corporates, and private equity firms across Europe, Americas, and Asia-Pacific. All investors are verified and actively investing."
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
      <section ref={ctaRef} className="cta-section section" style={{
        background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Connect with Institutional Capital?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-balance">
              Join the 150+ successful entrepreneurs who've scaled their companies through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/apply" className="btn btn-primary w-full sm:w-auto btn-large hover-lift" style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}>
                Apply for Funding <ArrowRight className="ml-2 h-5 w-5" />
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
