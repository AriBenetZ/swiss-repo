'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail, Users, Award, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  createPageEntranceAnimation,
  createCardScrollAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function TeamPage() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero animation
    createPageEntranceAnimation('.hero-element');

    // Section animations
    createCardScrollAnimation('.team-section', null);

    // Cleanup on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  const teamMembers = [
    {
      name: "Ari Benet",
      position: "Chief Executive Officer & Founder",
      bio: "A native of Amsterdam with deep European market expertise, Ari founded <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span> in 2019 to streamline growth-stage funding connections. His background in investment banking and corporate development across Europe drives the platform's strategic vision.",
      expertise: ["Growth Strategy", "Capital Markets", "Platform Development"],
      education: "MBA & Finance Background",
      email: "ari.benet@aurumascend.ch"
    },
    {
      name: "Elena Kovač",
      position: "Head of Client Relations & Reception",
      bio: "Joined <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span> in 2021, managing all client communications and first-point-of-contact operations. Ensures smooth client onboarding and ongoing relationship management.",
      expertise: ["Client Relations", "Operations Management", "Communication"],
      education: "Business Administration Background",
      email: "elena.kovac@aurumascend.ch"
    },
    {
      name: "Raj Patel",
      position: "Chief Technology Officer & Chief Financial Officer",
      bio: "Joined <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span> as CTO/CFO in 2020, leading technical infrastructure development and financial operations. Born in England to Indian parents, he brings expert fintech platform development and security expertise with experience at London-based tech companies including Revolut and Monzo. He personally joins client calls from the first meeting and works alongside the team throughout the entire process.",
      expertise: ["Platform Development", "Technical Architecture", "Security", "Financial Management"],
      education: "MSc Computer Science, Imperial College London",
      email: "raj.patel@aurumascend.ch"
    },
    {
      name: "Sarah Mitchell",
      position: "Head of Investor Relations",
      bio: "Joined <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span> in 2022, bringing 8 years of experience in private equity and institutional investment from mid-tier London firms. Manages our network of 300+ verified investors and handles due diligence processes.",
      expertise: ["Investor Networks", "Due Diligence", "Deal Structuring"],
      education: "CFA Level II Candidate, University of Manchester",
      email: "sarah.mitchell@aurumascend.ch"
    },
    {
      name: "Marcus Chen",
      position: "Senior Investment Analyst",
      bio: "Leads deal analysis and market research at <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span> since 2021. Previously worked at top-tier venture capital firms in London and Singapore.",
      expertise: ["Financial Analysis", "Market Research", "Valuation"],
      education: "MSc Finance, London School of Economics",
      email: "marcus.chen@aurumascend.ch"
    },
    {
      name: "Isabella Romano",
      position: "Legal & Compliance Director",
      bio: "Ensures <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span>'s operations meet regulatory standards across multiple jurisdictions. Joined in 2022 from a Magic Circle law firm.",
      expertise: ["Regulatory Compliance", "Contract Law", "Cross-border Transactions"],
      education: "LLM International Business Law",
      email: "isabella.romano@aurumascend.ch"
    },
    {
      name: "David Thompson",
      position: "Head of Business Development",
      bio: "Drives strategic partnerships and market expansion for <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span>. Joined in 2023 with extensive experience in European fintech growth.",
      expertise: ["Strategic Partnerships", "Market Expansion", "Revenue Growth"],
      education: "MBA, INSEAD",
      email: "david.thompson@aurumascend.ch"
    },
    {
      name: "Arjun Sharma",
      position: "Marketing & Communications Manager",
      bio: "Manages <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span>'s brand presence and communications strategy. Joined in 2023 from a leading financial PR agency in London.",
      expertise: ["Brand Strategy", "Digital Marketing", "Public Relations"],
      education: "MA Communications, King's College London",
      email: "arjun.sharma@aurumascend.ch"
    },
    {
      name: "Victoria Sterling",
      position: "Senior Partnership Manager",
      bio: "Leads strategic outreach and partnership development at <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span>. Former Vice President at Goldman Sachs International's client coverage team, she specializes in institutional relationship building and has strong networks across European investment firms and family offices.",
      expertise: ["Institutional Sales", "Relationship Management", "Cross-border Deals"],
      education: "MBA Finance, London Business School",
      email: "victoria.sterling@aurumascend.ch"
    },
    {
      name: "Alexander Hartwell",
      position: "Director of Client Acquisition",
      bio: "Drives new client acquisition and manages high-value prospect relationships at <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span>. Previously Associate Director at Barclays Investment Bank, he brings 7 years of experience in corporate finance and client relationship management across the UK and European markets.",
      expertise: ["Corporate Finance", "Client Development", "Investment Banking"],
      education: "MSc Finance, University of Cambridge",
      email: "alexander.hartwell@aurumascend.ch"
    },
    {
      name: "Emre Müller",
      position: "Senior Client Director - DACH & EMEA Region",
      bio: "Leads client relationships and business development across German-speaking and Middle Eastern markets for <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span>. Born in Berlin to Turkish parents and relocated to London in 2018, Emre brings deep understanding of both Germanic and Middle Eastern business cultures with 6 years of experience from Deutsche Bank's corporate finance division. He personally manages client communications and deal processes for companies seeking expansion into European and emerging markets.",
      expertise: ["DACH Markets", "EMEA Markets", "Cross-cultural Communication", "Corporate Finance"],
      education: "Diplom-Kaufmann, Universität zu Köln & MSc Finance, London Business School",
      email: "emre.mueller@aurumascend.ch"
    },
    {
      name: "Richard Weber",
      position: "Investment Relations Associate",
      bio: "Joined <span className=\"font-bold\">Aurum Ascend</span><span className=\"font-light\"> Capital</span> in 2024 as our youngest team member at age 22. Originally from Zurich and family of Ari Benet, Richard focuses on investor outreach and relationship building. He actively connects growth-stage companies with potential investors from our network, leveraging his Swiss banking knowledge and family connections to facilitate meaningful introductions. His enthusiasm and dedication make him a key point of contact for new investment opportunities.",
      expertise: ["Investor Outreach", "Swiss Markets", "Relationship Building", "Deal Sourcing"],
      education: "BSc Economics, University of St. Gallen (HSG)",
      email: "richard.weber@aurumascend.ch"
    }
  ];

  return (
    <main className="pt-16 bg-base">{/* Fixed layout for proper footer display */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-hero bg-card border-b border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-element">
              <div className="inline-flex items-center bg-secondary text-secondary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4 mr-2" />
                Our Team
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Meet the People Behind
                <span className="gradient-text"> Aurum Ascend Capital</span>
              </h1>
              <p className="text-xl text-secondary leading-relaxed mb-8">
                Our compact, experienced team has been working together since 2019 to provide personal, 
                white-glove service to founders and investors. Every client works directly with senior team 
                members—no junior staff or account managers between you and decision-makers.
              </p>
            </div>
            
            <div className="hero-element grid max-md:grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">5</div>
                <div className="font-medium text-primary mb-1">Years</div>
                <div className="text-sm text-tertiary">Operating in Zurich</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">150+</div>
                <div className="font-medium text-primary mb-1">Deals</div>
                <div className="text-sm text-tertiary">Successfully Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">25+</div>
                <div className="font-medium text-primary mb-1">Countries</div>
                <div className="text-sm text-tertiary">Global Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-large bg-secondary border-b border-primary">
        <div ref={el => { if (el) sectionsRef.current[0] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Team
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Our core team combines complementary expertise in finance, technology, and operations 
              to deliver focused, high-quality service. We believe in building lasting relationships—
              your success becomes our reputation, and every interaction is treated with the attention it deserves.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center group glass-card border border-primary hover:border-secondary hover-lift transition-all duration-300">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-accent-secondary text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="font-bold text-primary text-lg mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-4">{member.position}</p>
                
                <p className="text-secondary text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: member.bio }}></p>
                
                <div className="mb-4">
                  <div className="text-xs font-medium text-tertiary mb-2">EXPERTISE</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="badge-accent text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs font-medium text-tertiary mb-1">BACKGROUND</div>
                  <div className="text-xs text-secondary">{member.education}</div>
                </div>
                
                <div className="flex justify-center">
                  <a href={`mailto:${member.email}`} className="text-tertiary hover:text-accent transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-large bg-base">
        <div ref={el => { if (el) sectionsRef.current[1] = el; }} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              We've built our business on the principles that matter most to growing companies 
              and institutional investors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Focus",
                description: "We carefully curate opportunities and maintain high standards for all participants."
              },
              {
                icon: Users,
                title: "Personal Service",
                description: "As a small team, we provide direct, personalized attention to every client."
              },
              {
                icon: Building2,
                title: "European Expertise",
                description: "Deep knowledge of European markets with global investor connections."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center group glass-card border border-primary hover:border-secondary hover-lift transition-all duration-300">
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  <value.icon className="w-6 h-6 text-accent-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-secondary text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-accent to-accent-secondary">
        <div ref={el => { if (el) sectionsRef.current[2] = el; }} className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-6 pt-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're a growing company seeking funding or an investor looking for 
            vetted opportunities, we'd love to hear from you.
          </p>
          <div className="flex pb-4 max-sm:flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary px-8 py-4 h-auto font-medium">
              <Link href="/apply">
                Apply for Funding
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary-outline px-8 py-4 h-auto font-medium">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
