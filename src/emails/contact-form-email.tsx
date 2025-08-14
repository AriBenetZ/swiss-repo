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

interface ContactFormEmailProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  company,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://www.aurumascend.ch/logo.png"
            width="200"
            height="50"
            alt="Aurum Ascend Capital"
            style={logo}
          />
          
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Text style={text}>
            You have received a new contact form submission from your website.
          </Text>

          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          {company && (
            <Section style={section}>
              <Text style={label}>Company:</Text>
              <Text style={value}>{company}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={buttonContainer}>
            <Button style={button} href={`mailto:${email}`}>
              Reply to {name}
            </Button>
          </Section>

          <Text style={footer}>
            This email was sent from the Aurum Ascend Capital contact form.
            <br />
            <Link href="https://www.aurumascend.ch" style={link}>
              Visit our website
            </Link>
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

const text = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 20px',
};

const section = {
  margin: '0 0 16px',
};

const label = {
  color: '#374151',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  margin: '0 0 4px',
};

const value = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const messageStyle = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  padding: '16px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
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

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '32px 0 0',
  textAlign: 'center' as const,
};

const link = {
  color: '#8b5cf6',
  textDecoration: 'underline',
};

export default ContactFormEmail;
