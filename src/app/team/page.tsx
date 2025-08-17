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
      name: "David Rosen",
      position: "Chief Executive Officer & Founder",
      bio: "Born in Amsterdam to a Dutch-Jewish family, David founded <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span> in 2019 after relocating to Zurich from London. Previously worked at Goldman Sachs International and UBS Investment Bank, he brings deep expertise in European capital markets. Fluent in English and Dutch, David's international background and strong network across London, Amsterdam, and Zurich financial circles drive the company's cross-border success.",
      expertise: ["Growth Strategy", "Capital Markets", "Platform Development"],
      education: "MSc Finance, London School of Economics & BSc Economics, University of Amsterdam",
      email: "david.rosen@aurumascend.ch"
    },
    {
      name: "Francesca Dubois",
      position: "Head of Client Relations & Reception",
      bio: "Born in Lyon and moved to Zurich in 2020, Francesca brings a warm approach to client communications at <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>. Fluent in French and English, she ensures seamless onboarding for international clients. Her previous experience at Credit Suisse's private banking division helps her understand the nuanced needs of high-net-worth European clients. She's currently learning German to better serve DACH region clients.",
      expertise: ["Client Relations", "Operations Management", "Communication"],
      education: "MA International Business, HEC Paris",
      email: "francesca.dubois@aurumascend.ch"
    },
    {
      name: "Arjun Khan",
      position: "Chief Technology Officer & Chief Financial Officer",
      bio: "Joined <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span> as CTO/CFO in 2020, bringing expertise from London's fintech scene. Born in Manchester to Pakistani parents and educated in England, Arjun developed his technical expertise at companies like Wise (formerly TransferWise) and Klarna's London office. He personally joins client calls from day one and maintains hands-on involvement throughout every deal process, ensuring both technical excellence and financial precision.",
      expertise: ["Platform Development", "Technical Architecture", "Security", "Financial Management"],
      education: "MSc Computer Science, Imperial College London & CFA Charter",
      email: "arjun.khan@aurumascend.ch"
    },
    {
      name: "Camilla Andersson",
      position: "Head of Investor Relations",
      bio: "Swedish-born and Zurich-based since 2021, Camilla joined <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span> with 8 years of Nordic institutional investment experience. Previously worked at Stockholm-based private equity firms and EQT Partners, she manages our network of 300+ verified investors across Scandinavia, DACH, and the UK. Working primarily in English, she leverages her deep understanding of Nordic capital markets to bring unique opportunities to our platform.",
      expertise: ["Investor Networks", "Due Diligence", "Deal Structuring"],
      education: "MSc Finance, Stockholm School of Economics & CFA Level III",
      email: "camilla.andersson@aurumascend.ch"
    },
    {
      name: "Lorenzo Benedetti",
      position: "Senior Investment Analyst",
      bio: "Originally from Milan, Lorenzo moved to Zurich in 2021 to lead deal analysis and market research at <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>. His previous experience at Bain Capital and London-based VC firms provides unique insights into cross-border European investment opportunities. Works primarily in English with international clients, while his Italian background helps with Southern European market access.",
      expertise: ["Financial Analysis", "Market Research", "Valuation"],
      education: "MSc Finance, Bocconi University & Advanced Finance, London Business School",
      email: "lorenzo.benedetti@aurumascend.ch"
    },
    {
      name: "Astrid Vermeulen",
      position: "Legal & Compliance Director",
      bio: "Dutch legal expert who relocated from Amsterdam to Zurich in 2022, Astrid ensures <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>'s operations comply with complex European regulations. Previously senior associate at a leading Amsterdam law firm specializing in cross-border transactions, she works primarily in English while bringing expertise in EU financial regulations, Swiss banking law, and international corporate structuring.",
      expertise: ["Regulatory Compliance", "Contract Law", "Cross-border Transactions"],
      education: "LLM European Law, University of Amsterdam & Swiss Law Certificate",
      email: "astrid.vermeulen@aurumascend.ch"
    },
    {
      name: "Klaus Zimmermann",
      position: "Head of Business Development",
      bio: "Austrian-born Klaus moved to Zurich from Vienna in 2023, bringing extensive DACH region fintech experience to <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>. Previously led business development at Bitpanda and other Vienna-based fintech scale-ups, he specializes in strategic partnerships across German-speaking markets. Fluent in German and English, his network spans from startup ecosystems in Berlin and Vienna to established financial institutions in Frankfurt and Zurich.",
      expertise: ["Strategic Partnerships", "Market Expansion", "Revenue Growth"],
      education: "MBA, Vienna University of Economics & Business",
      email: "klaus.zimmermann@aurumascend.ch"
    },
    {
      name: "Sophie Larsson",
      position: "Marketing & Communications Manager",
      bio: "Born in Copenhagen and based in Zurich since 2023, Sophie manages <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>'s brand presence across European markets. Previously worked at leading Scandinavian fintech companies and a top-tier communications agency in London. Working primarily in English, her Scandinavian background helps position the company effectively in Nordic markets while she's learning basic German for local Swiss operations.",
      expertise: ["Brand Strategy", "Digital Marketing", "Public Relations"],
      education: "MA Communications, Copenhagen Business School",
      email: "sophie.larsson@aurumascend.ch"
    },
    {
      name: "Giulia Rossi",
      position: "Senior Partnership Manager",
      bio: "Italian-Swiss dual citizen, Giulia leads strategic outreach and partnership development at <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>. Former Associate at a Milan-based investment bank and previously worked in London's financial services sector, she specializes in institutional relationship building across Southern European markets. Works primarily in English and Italian, with her extensive network including family offices from Italy, Spain, and Monaco, as well as Swiss private banks.",
      expertise: ["Institutional Sales", "Relationship Management", "Cross-border Deals"],
      education: "MSc Finance, Bocconi University & Executive Program, London Business School",
      email: "giulia.rossi@aurumascend.ch"
    },
    {
      name: "James Wellington",
      position: "Director of Client Acquisition",
      bio: "British expat who moved to Zurich from London in 2022, James drives new client acquisition at <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>. Previously Senior Associate at a mid-tier London investment firm, he brings 6 years of corporate finance experience and strong relationships with UK-based growth companies seeking European expansion. Working exclusively in English, his expertise in cross-channel deal structuring helps British and Irish companies access continental European capital.",
      expertise: ["Corporate Finance", "Client Development", "Investment Banking"],
      education: "MSc Finance, University of Edinburgh & CFA Level II",
      email: "james.wellington@aurumascend.ch"
    },
    {
      name: "Henrik Müller",
      position: "Senior Client Director - DACH & EMEA Region",
      bio: "German-Turkish dual citizen born in Frankfurt, Henrik relocated from Berlin to Zurich in 2022 to lead <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span>'s DACH and emerging European markets. Previously worked at Deutsche Bank's corporate finance division in Frankfurt and has deep cultural understanding of both Germanic and Middle Eastern business practices. Fluent in German, Turkish, and English, he personally manages client relationships for companies expanding into European and emerging markets.",
      expertise: ["DACH Markets", "EMEA Markets", "Cross-cultural Communication", "Corporate Finance"],
      education: "Diplom-Kaufmann, Goethe University Frankfurt & MSc Finance, WHU Otto Beisheim",
      email: "henrik.mueller@aurumascend.ch"
    },
    {
      name: "Lukas Weber",
      position: "Investment Relations Associate",
      bio: "Zurich native and our youngest team member at 22, Lukas joined <span className=\"aurum-ascend-enhanced\">Aurum Ascend Capital</span> in 2024 as a rising star in investor relations. Son of a prominent Swiss banking family, he brings fresh energy and strong local connections to the team. Native in German and French with excellent English, he focuses on connecting growth-stage companies with Swiss and international investors, leveraging both traditional Swiss banking networks and next-generation investment platforms.",
      expertise: ["Investor Outreach", "Swiss Markets", "Relationship Building", "Deal Sourcing"],
      education: "BSc Economics, University of St. Gallen (HSG)",
      email: "lukas.weber@aurumascend.ch"
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
                Meet Europe's Leading
                <span className="gradient-text aurum-ascend-enhanced">Growth Investment Team</span>
              </h1>
              <p className="text-xl text-secondary leading-relaxed mb-8">
                Our experienced team of investment professionals connects growth-stage companies with institutional investors across Europe. With deep expertise in fintech, SaaS, and enterprise technology, we deliver personalized service that drives results.
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
              Expert Investment Professionals
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Our team combines deep financial markets expertise with technology innovation to deliver exceptional results for growth-stage companies and institutional investors across European markets.
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
                  <a href={`mailto:${member.email}`} className="text-tertiary hover:text-accent transition-colors no-underline hover:no-underline">
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
              Why Leading Companies Choose Us
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Our proven approach combines deep market expertise with personalized service to deliver exceptional results for growth-stage companies and institutional investors.
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
