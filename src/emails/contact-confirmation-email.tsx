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

interface ContactConfirmationEmailProps {
  name: string;
}

export const ContactConfirmationEmail = ({
  name,
}: ContactConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting RaiseSignal</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://www.raisesignal.uk/logo.jpg"
            width="200"
            height="50"
            alt="RaiseSignal"
            style={logo}
          />
          
          <Heading style={h1}>Thank You for Reaching Out</Heading>
          
          <Text style={greeting}>Hi {name},</Text>
          
          <Text style={text}>
            Thank you for contacting RaiseSignal. We've received your message and will get back to you within 48 hours.
          </Text>

          <Text style={text}>
            Our team of experts is dedicated to helping growth-stage companies connect with institutional investors. 
            We'll review your inquiry and provide you with the most relevant information for your funding needs.
          </Text>

          <Section style={highlights}>
            <Heading style={h2}>What happens next?</Heading>
            <Text style={bulletPoint}>• Our team will review your message within 24 hours</Text>
            <Text style={bulletPoint}>• We'll respond with relevant information and next steps</Text>
            <Text style={bulletPoint}>• If applicable, we'll schedule a consultation call</Text>
          </Section>

          <Hr style={hr} />

          <Section style={buttonContainer}>
            <Button style={button} href="https://calendly.com/ari-raisesignal-68nf/30min">
              Schedule a Call
            </Button>
          </Section>

          <Text style={text}>
            In the meantime, feel free to explore our success stories and learn more about how we've helped 150+ companies secure funding.
          </Text>

          <Section style={linksSection}>
            <Link href="https://www.raisesignal.uk/case-studies" style={link}>View Case Studies</Link>
            <Text style={separator}> • </Text>
            <Link href="https://www.raisesignal.uk/how-it-works" style={link}>How It Works</Link>
            <Text style={separator}> • </Text>
            <Link href="https://www.raisesignal.uk/about" style={link}>About Us</Link>
          </Section>

          <Text style={footer}>
            Best regards,<br />
            The RaiseSignal Team
            <br /><br />
            <Text style={footerSmall}>
              RaiseSignal - Global Investment Platform<br />
              3 More London Riverside, London SE1 2RE, UK<br />
              <Link href="https://www.raisesignal.uk" style={link}>raisesignal.uk</Link>
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

const highlights = {
  margin: '32px 0',
  padding: '24px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const bulletPoint = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 8px',
  paddingLeft: '8px',
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

export default ContactConfirmationEmail;
