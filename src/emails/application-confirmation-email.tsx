import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ApplicationConfirmationEmailProps {
  name: string;
  company: string;
}

export const ApplicationConfirmationEmail = ({
  name,
  company,
}: ApplicationConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your funding application has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://www.aurumascend.ch/logo.png"
            width="200"
            height="50"
            alt="Aurum Ascend Capital"
            style={logo}
          />
          
          <Heading style={h1}>Application Received Successfully</Heading>
          
          <Text style={greeting}>Hi {name},</Text>
          
          <Text style={text}>
            Thank you for submitting your funding application for <strong>{company}</strong>. 
            We've received your application and our team will begin the review process immediately.
          </Text>

          <Section style={processSection}>
            <Heading style={h2}>What happens next?</Heading>
            
            <Section style={step}>
              <Text style={stepNumber}>1</Text>
              <div>
                <Text style={stepTitle}>Initial Review (48 hours)</Text>
                <Text style={stepDescription}>
                  Our team will conduct an initial assessment of your application and company profile.
                </Text>
              </div>
            </Section>

            <Section style={step}>
              <Text style={stepNumber}>2</Text>
              <div>
                <Text style={stepTitle}>Due Diligence (1-2 weeks)</Text>
                <Text style={stepDescription}>
                  We'll verify your company information and prepare materials for investor presentation.
                </Text>
              </div>
            </Section>

            <Section style={step}>
              <Text style={stepNumber}>3</Text>
              <div>
                <Text style={stepTitle}>Investor Matching (2-4 weeks)</Text>
                <Text style={stepDescription}>
                  We'll connect you with relevant institutional investors from our global network.
                </Text>
              </div>
            </Section>

            <Section style={step}>
              <Text style={stepNumber}>4</Text>
              <div>
                <Text style={stepTitle}>Funding Process (8-12 weeks)</Text>
                <Text style={stepDescription}>
                  We'll support you through negotiations and closing with institutional partners.
                </Text>
              </div>
            </Section>
          </Section>

          <Section style={statsSection}>
            <Heading style={h2}>Our Track Record</Heading>
            <div style={statsGrid}>
              <div style={statItem}>
                <Text style={statNumber}>150+</Text>
                <Text style={statLabel}>Successful Deals</Text>
              </div>
              <div style={statItem}>
                <Text style={statNumber}>25+</Text>
                <Text style={statLabel}>Countries</Text>
              </div>
              <div style={statItem}>
                <Text style={statNumber}>8-12 weeks</Text>
                <Text style={statLabel}>Average Timeline</Text>
              </div>
            </div>
          </Section>

          <Hr style={hr} />

          <Section style={buttonContainer}>
            <Button style={button} href="https://calendly.com/aurum-ascend/30min">
              Schedule a Follow-up Call
            </Button>
          </Section>

          <Text style={text}>
            Questions? Feel free to reach out to us directly or schedule a call to discuss your funding journey.
          </Text>

          <Section style={linksSection}>
            <Link href="https://www.aurumascend.ch/case-studies" style={link}>Case Studies</Link>
            <Text style={separator}> • </Text>
            <Link href="https://www.aurumascend.ch/how-it-works" style={link}>Process Overview</Link>
            <Text style={separator}> • </Text>
            <Link href="mailto:info@aurumascend.ch" style={link}>Contact Us</Link>
          </Section>

          <Text style={footer}>
            Best regards,<br />
            The Aurum Ascend Capital Team
            <br /><br />
            <Text style={footerSmall}>
              Aurum Ascend Capital - Global Investment Platform<br />
              Zurichstrasse 110, 8008 Zurich, Switzerland<br />
              <Link href="https://www.aurumascend.ch" style={link}>aurumascend.ch</Link>
            </Text>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const logo = {
  margin: '0 auto 40px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const h2 = {
  color: '#374151',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '28px',
  margin: '0 0 16px',
};

const greeting = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '28px',
  margin: '0 0 20px',
};

const text = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
};

const processSection = {
  margin: '32px 0',
  padding: '24px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #bbf7d0',
};

const step = {
  display: 'flex',
  margin: '0 0 20px',
  alignItems: 'flex-start',
};

const stepNumber = {
  backgroundColor: '#8b5cf6',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
  flexShrink: 0,
};

const stepTitle = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '24px',
  margin: '0 0 4px',
};

const stepDescription = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const statsSection = {
  margin: '32px 0',
  padding: '24px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const statsGrid = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
};

const statItem = {
  textAlign: 'center' as const,
  flex: 1,
};

const statNumber = {
  color: '#8b5cf6',
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '28px',
  margin: '0 0 4px',
};

const statLabel = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const buttonContainer = {
  margin: '32px 0',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#8b5cf6',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
};

const linksSection = {
  margin: '24px 0',
  textAlign: 'center' as const,
};

const link = {
  color: '#8b5cf6',
  textDecoration: 'underline',
  fontSize: '14px',
};

const separator = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0 4px',
};

const footer = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '32px 0 0',
};

const footerSmall = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '16px 0 0',
};

export default ApplicationConfirmationEmail;
