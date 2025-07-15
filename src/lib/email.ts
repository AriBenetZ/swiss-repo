import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/contact-form-email';
import ApplicationFormEmail from '@/emails/application-form-email';
import ContactConfirmationEmail from '@/emails/contact-confirmation-email';
import ApplicationConfirmationEmail from '@/emails/application-confirmation-email';

// Initialize Resend lazily to avoid build-time errors
let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface ApplicationFormData {
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

export class EmailService {
  private static readonly FROM_EMAIL = 'RaiseSignal <hello@raisesignal.uk>'; // Using your actual domain
  private static readonly ADMIN_EMAIL = 'info@raisesignal.uk';

  static async sendContactForm(data: ContactFormData) {
    try {
      console.log('🚀 Sending contact form emails...', { name: data.name, email: data.email });
      
      // Send notification to admin
      const adminEmailHtml = await render(ContactFormEmail(data));
      console.log('📧 Rendered admin email HTML');
      
      const adminEmailResult = await getResendClient().emails.send({
        from: this.FROM_EMAIL,
        to: this.ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${data.name}`,
        html: adminEmailHtml,
        replyTo: data.email,
      });
      console.log('✅ Admin email result:', JSON.stringify(adminEmailResult, null, 2));

      // Send confirmation to user
      const userEmailHtml = await render(ContactConfirmationEmail({ name: data.name }));
      console.log('📧 Rendered user confirmation email HTML');
      
      const userEmailResult = await getResendClient().emails.send({
        from: this.FROM_EMAIL,
        to: data.email,
        subject: 'Thank you for contacting RaiseSignal',
        html: userEmailHtml,
      });
      console.log('✅ User email result:', JSON.stringify(userEmailResult, null, 2));

      return {
        success: true,
        adminEmailId: adminEmailResult.data?.id,
        userEmailId: userEmailResult.data?.id,
        adminEmailError: adminEmailResult.error,
        userEmailError: userEmailResult.error,
      };
    } catch (error) {
      console.error('❌ Failed to send contact form emails:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  static async sendApplicationForm(data: ApplicationFormData) {
    try {
      console.log('🚀 Sending application form emails...', { name: data.name, email: data.email, company: data.company });
      
      // Send notification to admin
      const adminEmailHtml = await render(ApplicationFormEmail(data));
      console.log('📧 Rendered admin application email HTML');
      
      const adminEmailResult = await getResendClient().emails.send({
        from: this.FROM_EMAIL,
        to: this.ADMIN_EMAIL,
        subject: `New Funding Application from ${data.company}`,
        html: adminEmailHtml,
        replyTo: data.email,
      });
      console.log('✅ Admin application email sent:', adminEmailResult.data?.id);

      // Send confirmation to user
      const userEmailHtml = await render(ApplicationConfirmationEmail({ 
        name: data.name, 
        company: data.company 
      }));
      console.log('📧 Rendered user application confirmation email HTML');
      
      const userEmailResult = await getResendClient().emails.send({
        from: this.FROM_EMAIL,
        to: data.email,
        subject: 'Your funding application has been received - RaiseSignal',
        html: userEmailHtml,
      });
      console.log('✅ User application confirmation email sent:', userEmailResult.data?.id);

      return {
        success: true,
        adminEmailId: adminEmailResult.data?.id,
        userEmailId: userEmailResult.data?.id,
      };
    } catch (error) {
      console.error('❌ Failed to send application form emails:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  static async sendApplicationFormWithAttachment(
    data: ApplicationFormData, 
    attachment?: { filename: string; content: Buffer; contentType: string } | null
  ) {
    try {
      console.log('🚀 Sending application form emails with attachment...', { 
        name: data.name, 
        email: data.email, 
        company: data.company,
        hasAttachment: !!attachment 
      });
      
      // Send notification to admin with attachment
      const adminEmailHtml = await render(ApplicationFormEmail(data));
      console.log('📧 Rendered admin application email HTML');
      
      const emailPayload: any = {
        from: this.FROM_EMAIL,
        to: this.ADMIN_EMAIL,
        subject: `New Funding Application from ${data.company}${attachment ? ' (with attachment)' : ''}`,
        html: adminEmailHtml,
        replyTo: data.email,
      };
      
      // Add attachment if provided
      if (attachment) {
        emailPayload.attachments = [
          {
            filename: attachment.filename,
            content: attachment.content,
            contentType: attachment.contentType,
          }
        ];
        console.log('📎 Added attachment to admin email:', attachment.filename);
      }
      
      const adminEmailResult = await getResendClient().emails.send(emailPayload);
      console.log('✅ Admin application email result:', JSON.stringify(adminEmailResult, null, 2));

      // Send confirmation to user (no attachment needed for confirmation)
      const userEmailHtml = await render(ApplicationConfirmationEmail({ 
        name: data.name, 
        company: data.company 
      }));
      console.log('📧 Rendered user application confirmation email HTML');
      
      const userEmailResult = await getResendClient().emails.send({
        from: this.FROM_EMAIL,
        to: data.email,
        subject: 'Your funding application has been received - RaiseSignal',
        html: userEmailHtml,
      });
      console.log('✅ User application email result:', JSON.stringify(userEmailResult, null, 2));

      return {
        success: true,
        adminEmailId: adminEmailResult.data?.id,
        userEmailId: userEmailResult.data?.id,
        adminEmailError: adminEmailResult.error,
        userEmailError: userEmailResult.error,
        attachmentProcessed: !!attachment,
      };
    } catch (error) {
      console.error('❌ Failed to send application form emails with attachment:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  static async sendWelcomeEmail(email: string, name: string) {
    try {
      const emailHtml = await render(ContactConfirmationEmail({ name }));
      const result = await getResendClient().emails.send({
        from: this.FROM_EMAIL,
        to: email,
        subject: 'Welcome to RaiseSignal',
        html: emailHtml,
      });

      return {
        success: true,
        emailId: result.data?.id,
      };
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

export default EmailService;
