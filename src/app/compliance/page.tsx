import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CompliancePage() {
  return (
    <main className="pt-16 bg-base">{/* Fixed layout and theme */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-8">
              <FileText className="w-4 h-4 text-accent-secondary" />
              <span className="text-small font-medium text-secondary">Regulatory Compliance</span>
            </div>
            <h1 className="heading-display mb-4">Compliance & Regulatory Information</h1>
            <p className="text-lead text-secondary">
              <span className="font-bold">Raise</span><span className="font-light">Signal</span> maintains the highest standards of regulatory compliance and security
            </p>
          </div>

          {/* Compliance Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card glass-card p-6 hover-lift">
              <h3 className="font-semibold text-primary mb-3">FINRA Registration</h3>
              <p className="text-secondary text-sm mb-4">
                <span className="font-bold">Raise</span><span className="font-light">Signal</span> operates under FINRA regulations as a registered broker-dealer, 
                ensuring compliance with securities laws and investor protection standards.
              </p>
              <Button variant="outline" size="sm" className="btn-secondary">
                View FINRA Record
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Card>
            
            <Card className="card glass-card p-6 hover-lift">
              <h3 className="font-semibold text-primary mb-3">SOC 2 Type II</h3>
              <p className="text-secondary text-sm mb-4">
                Independently audited and certified for security, availability, processing integrity, 
                confidentiality, and privacy controls.
              </p>
              <Button variant="outline" size="sm" className="btn-secondary">
                Download Report
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Card>
          </div>

          {/* Regulatory Framework */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mt-12 mb-6">Regulatory Framework</h2>
            
            <p className="text-body mb-6">
              <span className="font-bold">Raise</span><span className="font-light">Signal</span> B.V. operates under comprehensive regulatory oversight to ensure 
              investor protection and market integrity:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start bg-secondary/10 p-4 rounded-lg border border-primary">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2.5"></div>
                <div>
                  <span className="text-primary font-medium">Dutch Financial Markets Authority (AFM)</span>
                  <span className="text-secondary"> - Licensed investment firm</span>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-secondary/10 p-4 rounded-lg border border-primary">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2.5"></div>
                <div>
                  <span className="text-primary font-medium">FINRA Member</span>
                  <span className="text-secondary"> - Registered broker-dealer in the United States</span>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-secondary/10 p-4 rounded-lg border border-primary">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2.5"></div>
                <div>
                  <span className="text-primary font-medium">MiFID II Compliance</span>
                  <span className="text-secondary"> - European investment services regulation</span>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-secondary/10 p-4 rounded-lg border border-primary">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2.5"></div>
                <div>
                  <span className="text-primary font-medium">GDPR Compliant</span>
                  <span className="text-secondary"> - Data protection and privacy standards</span>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-secondary/10 p-4 rounded-lg border border-primary">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2.5"></div>
                <div>
                  <span className="text-primary font-medium">Anti-Money Laundering (AML)</span>
                  <span className="text-secondary"> - KYC and transaction monitoring</span>
                </div>
              </li>
            </ul>

            <h3 className="heading-subsection mb-4">Investor Protection</h3>
            <p className="text-body mb-8">
              We implement multiple layers of investor protection including client segregation, 
              professional indemnity insurance, and participation in investor compensation schemes 
              as required by applicable regulations.
            </p>

            <h3 className="heading-subsection mb-4">Compliance Monitoring</h3>
            <p className="text-body mb-8">
              Our compliance program includes regular audits, transaction monitoring, 
              employee training, and reporting to regulatory authorities as required.
            </p>

            <div className="card glass-card p-6 mt-12 hover-lift border border-accent-secondary/30">
              <h4 className="font-semibold text-primary mb-3">Contact Compliance</h4>
              <p className="text-secondary text-sm mb-4">
                For compliance-related inquiries or to report concerns:
              </p>
              <p className="text-accent-secondary">
                Email: <a href="mailto:compliance@aurumascend.ch" className="text-accent-blue hover:underline">compliance@aurumascend.ch</a><br />
                Phone: +44 7537 126467
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
