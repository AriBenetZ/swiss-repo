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

interface ApplicationFormEmailProps {
  name: string;
  email: string;
  company: string;
  position: string;
  fundingStage: string;
  fundingAmount: string;
  industry: string;
  description: string;
  website?: string;
  phone?: string;
}

export const ApplicationFormEmail = ({
  name,
  email,
  company,
  position,
  fundingStage,
  fundingAmount,
  industry,
  description,
  website,
  phone,
}: ApplicationFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New funding application from {company}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://www.aurumascend.ch/logo.png"
            width="200"
            height="50"
            alt="Aurum Ascend Capital"
            style={logo}
          />
          
          <Heading style={h1}>New Funding Application</Heading>
          
          <Text style={text}>
            A new funding application has been submitted through your website.
          </Text>

          <Section style={companySection}>
            <Heading style={h2}>Company Information</Heading>
            
            <Section style={section}>
              <Text style={label}>Company Name:</Text>
              <Text style={value}>{company}</Text>
            </Section>

            <Section style={section}>
              <Text style={label}>Industry:</Text>
              <Text style={value}>{industry}</Text>
            </Section>

            {website && (
              <Section style={section}>
                <Text style={label}>Website:</Text>
                <Link href={website} style={linkStyle}>{website}</Link>
              </Section>
            )}

            <Section style={section}>
              <Text style={label}>Company Description:</Text>
              <Text style={descriptionStyle}>{description}</Text>
            </Section>
          </Section>

          <Hr style={hr} />

          <Section style={contactSection}>
            <Heading style={h2}>Contact Information</Heading>
            
            <Section style={section}>
              <Text style={label}>Name:</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={section}>
              <Text style={label}>Position:</Text>
              <Text style={value}>{position}</Text>
            </Section>

            <Section style={section}>
              <Text style={label}>Email:</Text>
              <Text style={value}>{email}</Text>
            </Section>

            {phone && (
              <Section style={section}>
                <Text style={label}>Phone:</Text>
                <Text style={value}>{phone}</Text>
              </Section>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={fundingSection}>
            <Heading style={h2}>Funding Details</Heading>
            
            <Section style={section}>
              <Text style={label}>Funding Stage:</Text>
              <Text style={value}>{fundingStage}</Text>
            </Section>

            <Section style={section}>
              <Text style={label}>Funding Amount:</Text>
              <Text style={value}>{fundingAmount}</Text>
            </Section>
          </Section>

          <Hr style={hr} />

          <Section style={buttonContainer}>
            <Button style={button} href={`mailto:${email}?subject=Re: Funding Application - ${company}`}>
              Contact {name}
            </Button>
          </Section>

          <Text style={footer}>
            This application was submitted through the Aurum Ascend Capital funding application form.
            {/* Note: If a pitch deck or document was uploaded, it will be attached to this email. */}
            <br />
            <Link href="https://www.aurumascend.ch/apply" style={linkStyle}>
              View application form
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

const h2 = {
  color: '#374151',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '28px',
  margin: '0 0 16px',
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

const companySection = {
  margin: '0 0 24px',
  padding: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const contactSection = {
  margin: '0 0 24px',
  padding: '20px',
  backgroundColor: '#fef3f2',
  borderRadius: '8px',
  border: '1px solid #fecaca',
};

const fundingSection = {
  margin: '0 0 24px',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #bbf7d0',
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

const descriptionStyle = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  padding: '16px',
  backgroundColor: '#ffffff',
  borderRadius: '6px',
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

const linkStyle = {
  color: '#8b5cf6',
  textDecoration: 'underline',
};

export default ApplicationFormEmail;
