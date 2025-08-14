'use client';

import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Globe, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  createPageEntranceAnimation,
  createCardScrollAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function CareersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero animation
    createPageEntranceAnimation('.hero-element');

    // Section animations
    createCardScrollAnimation('.career-section', null);

    // Cleanup on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Zurich, Switzerland",
      type: "Full-time",
      description: "Build and scale our investment platform infrastructure. Work with modern technologies including React, Node.js, and cloud platforms.",
      requirements: ["5+ years software development", "Experience with React/Node.js", "Fintech or financial services background preferred"],
      salary: "CHF 120,000 - CHF 150,000"
    },
    {
      title: "Investment Analyst",
      department: "Investment Team",
      location: "Zurich, Switzerland", 
      type: "Full-time",
      description: "Conduct due diligence on growth-stage companies and support our investment evaluation process.",
      requirements: ["3+ years investment analysis", "Financial modeling expertise", "Master's degree in Finance/Economics"],
      salary: "CHF 90,000 - CHF 120,000"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Zurich, Switzerland",
      type: "Full-time", 
      description: "Lead product strategy and development for our investment platform. Work closely with engineering and business teams.",
      requirements: ["4+ years product management", "B2B SaaS experience", "Technical background preferred"],
      salary: "CHF 100,000 - CHF 130,000"
    },
    {
      title: "Business Development Manager",
      department: "Business Development",
      location: "Remote (Europe)",
      type: "Full-time",
      description: "Expand our institutional investor network and drive platform growth across European markets.",
      requirements: ["5+ years business development", "VC/PE industry relationships", "Strong communication skills"],
      salary: "€70,000 - €95,000"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Hybrid work model with option to work remotely up to 3 days per week."
    },
    {
      icon: Zap,
      title: "Learning & Development",
      description: "€2,000 annual learning budget, conference attendance, and internal training."
    },
    {
      icon: Users,
      title: "Equity Participation",
      description: "Employee stock option plan to share in the company's success."
    }
  ];

  return (
    <main className="pt-16 bg-base">{/* Fixed layout for proper footer display */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-spacing bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-element">
              <div className="badge-container mb-6">
                <Briefcase className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Build Europe's Leading
                <span className="text-gradient"> Growth Investment Platform</span>
              </h1>
              <p className="text-xl text-secondary leading-relaxed mb-8">
                Join Europe's fastest-growing investment platform connecting growth-stage companies with institutional investors. Shape the future of fintech innovation across European markets.
              </p>
            </div>
            
            <div className="hero-element grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="font-medium text-secondary mb-1">Team Members</div>
                <div className="text-sm text-muted">Across Europe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">€5M</div>
                <div className="font-medium text-secondary mb-1">Series A Raised</div>
                <div className="text-sm text-muted">Funding Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                <div className="font-medium text-secondary mb-1">Glassdoor Rating</div>
                <div className="text-sm text-muted">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-spacing bg-subtle">
        <div ref={el => { if (el) sectionsRef.current[0] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Join Europe's Leading Investment Platform
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              We're seeking exceptional talent to join our mission of connecting growth-stage companies with institutional investors across European markets.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="card-glass p-6 hover:shadow-hover transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-xl font-bold text-primary">{position.title}</h3>
                      <span className="badge-accent">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-secondary mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="font-medium text-primary">
                        {position.salary}
                      </div>
                    </div>
                    
                    <p className="text-secondary mb-4">{position.description}</p>
                    
                    <div>
                      <div className="text-sm font-medium text-secondary mb-2">Key Requirements:</div>
                      <ul className="text-sm text-secondary space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-accent rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button className="btn-primary">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-secondary mb-4">Don't see a perfect match?</p>
            <Button variant="outline" className="btn-secondary">
              Send Us Your CV
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="section-spacing bg-base">
        <div ref={el => { if (el) sectionsRef.current[1] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Benefits & Perks
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits 
              and a culture that promotes work-life balance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-glass p-6 text-center group hover:shadow-hover transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-secondary text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="card-glass p-6 text-center">
              <h4 className="font-semibold text-primary mb-2">Competitive Salary</h4>
              <p className="text-secondary text-sm">Market-rate compensation with annual reviews and performance bonuses.</p>
            </Card>
            <Card className="card-glass p-6 text-center">
              <h4 className="font-semibold text-primary mb-2">Flexible Hours</h4>
              <p className="text-secondary text-sm">Core hours 10am-3pm with flexibility for personal schedules.</p>
            </Card>
            <Card className="card-glass p-6 text-center">
              <h4 className="font-semibold text-primary mb-2">Team Events</h4>
              <p className="text-secondary text-sm">Quarterly team retreats, monthly social events, and annual company trip.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-spacing bg-subtle">
        <div ref={el => { if (el) sectionsRef.current[2] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Work at <span className="aurum-ascend-enhanced">Aurum Ascend</span>?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Mission-Driven Work</h3>
                  <p className="text-secondary">Help build the infrastructure that enables European companies to scale and grow.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Learning Environment</h3>
                  <p className="text-secondary">Work alongside experienced professionals from leading fintech and VC backgrounds.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Growth Opportunity</h3>
                  <p className="text-secondary">Join during our scale-up phase and grow your career as the company expands.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Innovation Focus</h3>
                  <p className="text-secondary">Work with cutting-edge technology and contribute to product innovation.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-subtle">
              <h3 className="font-semibold text-primary mb-6">What Our Team Says</h3>
              <div className="space-y-6">
                <div className="bg-base rounded-lg p-4 border border-subtle">
                  <p className="text-secondary text-sm mb-2">"The learning opportunities here are incredible. I've grown more in 6 months than in my previous 2 years."</p>
                  <div className="text-xs text-muted">Sarah K., Software Engineer</div>
                </div>
                <div className="bg-base rounded-lg p-4 border border-subtle">
                  <p className="text-secondary text-sm mb-2">"Great work-life balance and genuinely supportive team culture."</p>
                  <div className="text-xs text-muted">Michael R., Product Manager</div>
                </div>
                <div className="bg-base rounded-lg p-4 border border-subtle">
                  <p className="text-secondary text-sm mb-2">"Working on something that really makes a difference for European startups."</p>
                  <div className="text-xs text-muted">Emma L., Business Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div ref={el => { if (el) sectionsRef.current[3] = el; }} className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the team that's building the future of growth-stage investment in Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Browse Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary-outline">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
