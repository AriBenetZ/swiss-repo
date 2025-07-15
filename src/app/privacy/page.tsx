import React from 'react';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-16 bg-base">{/* Fixed layout and theme */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-8">
              <Shield className="w-4 h-4 text-accent-primary" />
              <span className="text-small font-medium text-secondary">Legal Document</span>
            </div>
            <h1 className="heading-display mb-4">Privacy Policy</h1>
            <p className="text-lead text-secondary">
              Last updated: January 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card bg-accent-primary/10 border border-accent-primary/30 p-6 rounded-lg mb-8">
              <div className="flex gap-3 items-start">
                <Shield className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary font-medium mb-2">Your Privacy Matters</p>
                  <p className="text-secondary text-sm">
                    RaiseSignal B.V. is committed to protecting your privacy and ensuring the security 
                    of your personal information. This policy explains how we collect, use, and safeguard your data.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="heading-section mt-12 mb-6">1. Information We Collect</h2>
            
            <h3 className="heading-subsection mb-3">Personal Information</h3>
            <p className="text-primary mb-4">
              When you use our platform, we may collect:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Name, email address, and contact information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Company information and professional details</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Financial information required for investment verification</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Identity verification documents</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Communication records and correspondence</span>
              </li>
            </ul>

            <h3 className="heading-subsection mb-3">Technical Information</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">IP address, browser type, and device information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Usage data and platform interaction analytics</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Cookies and similar tracking technologies</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Log files and system performance data</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">2. How We Use Your Information</h2>
            
            <p className="text-primary mb-4">We use your information to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Provide and improve our investment platform services</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Verify your identity and assess investment suitability</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Facilitate connections between companies and investors</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Comply with legal and regulatory requirements</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Communicate important updates and platform notifications</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Prevent fraud and ensure platform security</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">3. Information Sharing</h2>
            
            <p className="text-primary mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Verified investors and companies</strong> - With your explicit consent for specific investment opportunities</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Service providers</strong> - Third-party vendors who assist in platform operations under strict confidentiality</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Legal authorities</strong> - When required by law or to protect our rights and users</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Professional advisors</strong> - Legal, financial, and compliance advisors under confidentiality agreements</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">4. Data Security</h2>
            
            <p className="text-primary mb-4">We implement industry-standard security measures including:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">AES-256 encryption for data at rest and in transit</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Multi-factor authentication for account access</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Regular security audits and penetration testing</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">SOC 2 Type II compliance certification</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Limited access controls and employee training</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">5. Your Rights (GDPR)</h2>
            
            <p className="text-primary mb-4">Under the General Data Protection Regulation, you have the right to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Access</strong> - Request copies of your personal data</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Rectification</strong> - Correct inaccurate or incomplete information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Erasure</strong> - Request deletion of your personal data</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Portability</strong> - Receive your data in a structured format</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Restriction</strong> - Limit how we process your information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Objection</strong> - Object to certain processing activities</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">6. Cookies and Tracking</h2>
            
            <p className="text-primary mb-4">
              We use cookies to enhance your experience and analyze platform usage. Types include:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Essential cookies</strong> - Required for platform functionality</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Performance cookies</strong> - Help us understand how you use our platform</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary"><strong>Functional cookies</strong> - Remember your preferences and settings</span>
              </li>
            </ul>
            
            <p className="text-primary mb-6">
              You can manage cookie preferences through your browser settings or our cookie preference center.
            </p>

            <h2 className="heading-section mt-12 mb-6">7. Data Retention</h2>
            
            <p className="text-primary mb-6">
              We retain personal information for as long as necessary to provide our services and comply 
              with legal obligations. Investment-related data may be retained for up to 7 years as required 
              by financial regulations.
            </p>

            <h2 className="heading-section mt-12 mb-6">8. International Transfers</h2>
            
            <p className="text-primary mb-6">
              Your data is primarily processed within the European Economic Area. Any transfers outside 
              the EEA are protected by appropriate safeguards including standard contractual clauses 
              approved by the European Commission.
            </p>

            <h2 className="heading-section mt-12 mb-6">9. Updates to This Policy</h2>
            
            <p className="text-primary mb-6">
              We may update this privacy policy to reflect changes in our practices or legal requirements. 
              We will notify you of material changes via email or platform notification.
            </p>

            <h2 className="heading-section mt-12 mb-6">10. Contact Information</h2>
            
            <div className="card glass-subtle p-6 rounded-lg">
              <p className="text-primary mb-4">
                For privacy-related questions or to exercise your rights, contact our Data Protection Officer:
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-primary">
                  <Mail className="w-4 h-4 mr-2 text-accent-primary" />
                  <a href="mailto:privacy@raisesignal.uk" className="text-accent-blue hover:underline">privacy@raisesignal.uk</a>
                </div>
                <div className="text-primary">
                  <strong>RaiseSignal Ltd.</strong><br />
                  3 More London Riverside<br />
                  London SE1 2RE<br />
                  United Kingdom
                </div>
                <div className="text-sm text-secondary mt-4">
                  We will respond to your inquiry within 30 days as required by GDPR.
                </div>
              </div>
            </div>

            {/* Privacy FAQ Section */}
            <div className="mt-16 p-8 bg-secondary/20 rounded-xl border border-primary">
              <h2 className="heading-section mb-8 text-center">Privacy Questions & Answers</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">How do we protect your data?</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    We use bank-grade AES-256 encryption, secure data centers, regular security audits, 
                    and strict access controls to protect your personal and financial information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">What are your GDPR rights?</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    You have the right to access, correct, delete, or restrict processing of your data. 
                    You can also request data portability and withdraw consent at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Do we share your data?</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    We only share data with verified investors during the funding process, 
                    and only with your explicit consent. We never sell personal data to third parties.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">How long do we keep your data?</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    We retain data only as long as necessary for business purposes and legal requirements, 
                    typically 7 years for financial records and 3 years for general business data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
