import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { EmailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('📝 Contact form API called');
    const body = await request.json();
    console.log('📄 Request body:', { name: body.name, email: body.email });
    
    // Validate the form data
    const validatedData = contactSchema.parse(body);
    console.log('✅ Form data validated');
    
    // Send emails via EmailService
    const result = await EmailService.sendContactForm({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });
    
    console.log('📧 Email service result:', result);
    
    if (!result.success) {
      console.error('❌ Email sending failed:', result.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send emails. Please try again later.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully. We will get back to you within 48 hours.',
        emailIds: {
          admin: result.adminEmailId,
          user: result.userEmailId
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
