import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="pt-16 bg-base">{/* Fixed layout and theme */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full mb-8">
              <FileText className="w-4 h-4 text-accent-primary" />
              <span className="text-small font-medium text-secondary">Legal Agreement</span>
            </div>
            <h1 className="heading-display mb-4">Terms of Service</h1>
            <p className="text-lead text-secondary">
              Last updated: January 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card bg-semantic-warning/10 border border-semantic-warning/30 p-6 rounded-lg mb-8">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-semantic-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary font-medium mb-2">Important Legal Agreement</p>
                  <p className="text-secondary text-sm">
                    By using RaiseSignal's platform, you agree to these terms. Please read carefully 
                    as they contain important information about your rights and obligations.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="heading-section mt-12 mb-6">1. Acceptance of Terms</h2>
            
            <p className="text-body mb-6">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and 
              RaiseSignal B.V., a company incorporated under Dutch law ("RaiseSignal", "we", "us", or "our"). 
              By accessing or using our platform, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms.
            </p>

            <h2 className="heading-section mt-12 mb-6">2. Platform Description</h2>
            
            <p className="text-body mb-4">
              RaiseSignal operates an investment platform that connects growth-stage companies with 
              institutional investors. Our services include:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Facilitating introductions between verified companies and investors</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Providing due diligence and verification services</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Offering investment transaction support and documentation</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Maintaining a secure platform for investment-related communications</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">3. Eligibility and Account Registration</h2>
            
            <h3 className="heading-subsection mb-3">Eligibility Requirements</h3>
            <p className="text-primary mb-4">To use our platform, you must:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Be at least 18 years old and legally capable of entering contracts</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Represent a legitimate business entity or be a qualified investor</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Provide accurate and complete registration information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Comply with all applicable laws and regulations</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Not be prohibited from using our services under any applicable law</span>
              </li>
            </ul>

            <h3 className="heading-subsection mb-3">Account Security</h3>
            <p className="text-primary mb-6">
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities that occur under your account. You must notify us immediately of any 
              unauthorized access or security breach.
            </p>

            <h2 className="heading-section mt-12 mb-6">4. Investment Disclaimer</h2>
            
            <div className="card bg-semantic-warning/10 border border-semantic-warning/30 p-6 rounded-lg mb-6">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-semantic-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary font-medium mb-2">Important Investment Warning</p>
                  <ul className="text-secondary text-sm space-y-2">
                    <li className="flex gap-2 items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-semantic-warning mt-2"></div>
                      <span>All investments carry risk and you may lose some or all of your capital</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-semantic-warning mt-2"></div>
                      <span>Past performance does not guarantee future results</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-semantic-warning mt-2"></div>
                      <span>RaiseSignal does not provide investment advice or recommendations</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <div className="rounded-full w-1.5 h-1.5 bg-semantic-warning mt-2"></div>
                      <span>You should seek independent financial advice before making investment decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-primary mb-6">
              RaiseSignal acts as an intermediary platform and does not provide investment advice, 
              recommendations, or guarantees regarding any investment opportunities. All investment 
              decisions are your sole responsibility.
            </p>

            <h2 className="heading-section mt-12 mb-6">5. User Obligations</h2>
            
            <p className="text-primary mb-4">As a platform user, you agree to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Provide accurate, current, and complete information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Maintain the confidentiality of non-public information</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Comply with all applicable laws, including securities regulations</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Use the platform only for legitimate business purposes</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Not engage in fraudulent, misleading, or manipulative activities</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Respect intellectual property rights of all parties</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">6. Prohibited Activities</h2>
            
            <p className="text-primary mb-4">You may not:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Use the platform for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Transmit viruses, malware, or other harmful code</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Interfere with the platform's operation or other users' access</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Scrape, copy, or reproduce platform content without permission</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Create false or misleading profiles or investment opportunities</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">7. Fees and Payment Terms</h2>
            
            <p className="text-primary mb-6">
              Our fee structure is disclosed during the onboarding process and may include platform 
              access fees, transaction fees, and success fees. All fees are non-refundable unless 
              explicitly stated otherwise. We reserve the right to modify our fee structure with 
              30 days' written notice.
            </p>

            <h2 className="heading-section mt-12 mb-6">8. Intellectual Property</h2>
            
            <p className="text-primary mb-6">
              The platform, including its software, content, trademarks, and other intellectual property, 
              is owned by RaiseSignal or our licensors. You are granted a limited, non-exclusive, 
              non-transferable license to use the platform for its intended purpose.
            </p>

            <h2 className="heading-section mt-12 mb-6">9. Limitation of Liability</h2>
            
            <p className="text-primary mb-6">
              To the maximum extent permitted by law, RaiseSignal shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to 
              loss of profits, data, or business opportunities. Our total liability shall not exceed 
              the fees paid by you in the 12 months preceding the claim.
            </p>

            <h2 className="heading-section mt-12 mb-6">10. Indemnification</h2>
            
            <p className="text-primary mb-6">
              You agree to indemnify and hold harmless RaiseSignal from any claims, damages, or expenses 
              arising from your use of the platform, violation of these Terms, or infringement of any 
              third-party rights.
            </p>

            <h2 className="heading-section mt-12 mb-6">11. Termination</h2>
            
            <p className="text-primary mb-6">
              Either party may terminate this agreement at any time with written notice. RaiseSignal 
              may immediately terminate or suspend your access for violation of these Terms or applicable 
              law. Upon termination, your right to use the platform ceases immediately.
            </p>

            <h2 className="heading-section mt-12 mb-6">12. Governing Law and Dispute Resolution</h2>
            
            <p className="text-primary mb-4">
              These Terms are governed by Dutch law. Any disputes shall be resolved through:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Good faith negotiations between the parties</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Mediation through the Centre for Effective Dispute Resolution (CEDR)</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">Arbitration under the London Court of International Arbitration (LCIA) Rules</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="rounded-full w-1.5 h-1.5 bg-accent-primary mt-2"></div>
                <span className="text-primary">As a last resort, litigation in the courts of England and Wales</span>
              </li>
            </ul>

            <h2 className="heading-section mt-12 mb-6">13. Modifications</h2>
            
            <p className="text-primary mb-6">
              We may modify these Terms at any time by posting the updated version on our platform. 
              Material changes will be communicated via email with at least 30 days' notice. 
              Continued use of the platform constitutes acceptance of the modified Terms.
            </p>

            <h2 className="heading-section mt-12 mb-6">14. Contact Information</h2>
            
            <div className="card glass-subtle p-6 rounded-lg">
              <p className="text-primary mb-4">
                For questions about these Terms or legal matters:
              </p>
              <div className="space-y-2">
                <div className="text-primary">
                  <strong>Legal Department</strong><br />
                  Email: <a href="mailto:legal@raisesignal.uk" className="text-accent-blue hover:underline">legal@raisesignal.uk</a><br />
                  Phone: +44 7537 126467
                </div>
                <div className="text-primary">
                  <strong>RaiseSignal Ltd.</strong><br />
                  3 More London Riverside<br />
                  London SE1 2RE<br />
                  United Kingdom<br />
                  Company No: 12345678
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
