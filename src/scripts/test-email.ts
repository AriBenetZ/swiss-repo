import { EmailService } from '@/lib/email';

// Test contact form email
async function testContactEmail() {
  console.log('Testing contact form email...');
  
  const result = await EmailService.sendContactForm({
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the contact form.',
  });
  
  console.log('Contact email result:', result);
}

// Test application form email
async function testApplicationEmail() {
  console.log('Testing application form email...');
  
  const result = await EmailService.sendApplicationForm({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Test Company',
    position: 'CEO',
    fundingStage: 'Series A',
    fundingAmount: '$1,000,000',
    industry: 'Technology',
    description: 'This is a test application for funding.',
    phone: '+1234567890',
  });
  
  console.log('Application email result:', result);
}

// Run tests (uncomment to test)
// testContactEmail();
// testApplicationEmail();

console.log('Email test functions ready. Uncomment the function calls at the bottom to test.');
