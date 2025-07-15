import { NextRequest, NextResponse } from 'next/server';
import { applicationSchema } from '@/lib/validations';
import { EmailService } from '@/lib/email';
import formidable from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    console.log('📝 Application form API called');
    
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('multipart/form-data')) {
      // Handle file upload with form data
      return await handleFileUpload(request);
    } else {
      // Handle JSON data (no file)
      return await handleJsonSubmission(request);
    }
  } catch (error) {
    console.error('❌ Application form submission error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}

async function handleJsonSubmission(request: NextRequest) {
  const body = await request.json();
  console.log('📄 JSON Request body:', { name: body.fullName, email: body.email, company: body.companyName });
  
  // Validate the form data
  const validatedData = applicationSchema.parse(body);
  console.log('✅ Application form data validated (no file)');
  
  // Send emails via EmailService (no attachment)
  const result = await EmailService.sendApplicationForm({
    name: validatedData.fullName,
    email: validatedData.email,
    company: validatedData.companyName,
    position: 'Founder/CEO',
    fundingStage: validatedData.fundingStage,
    fundingAmount: `$${validatedData.fundingAmount.toLocaleString()}`,
    industry: validatedData.projectType,
    description: validatedData.projectDescription,
    website: '',
    phone: validatedData.phone,
  });
  
  console.log('📧 Application email service result:', result);
  
  if (!result.success) {
    console.error('❌ Application email sending failed:', result.error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails. Please try again later.' },
      { status: 500 }
    );
  }
  
  return NextResponse.json(
    { 
      success: true, 
      message: 'Application submitted successfully. Our team will review your application and respond within 48 hours.',
      emailIds: {
        admin: result.adminEmailId,
        user: result.userEmailId
      }
    },
    { status: 200 }
  );
}

async function handleFileUpload(request: NextRequest) {
  // Convert NextRequest to Node.js IncomingMessage for formidable
  const formData = await request.formData();
  
  console.log('📎 Processing application with file upload');
  
  // Extract form fields
  const formFields: any = {};
  let uploadedFile: File | null = null;
  
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      uploadedFile = value;
      console.log('📎 File received:', { name: value.name, size: value.size, type: value.type });
    } else {
      formFields[key] = value;
    }
  }
  
  // Validate the form data
  const validatedData = applicationSchema.parse({
    ...formFields,
    fundingAmount: parseInt(formFields.fundingAmount)
  });
  console.log('✅ Application form data validated (with file)');
  
  let fileAttachment = null;
  
  if (uploadedFile) {
    // Convert File to Buffer for email attachment
    const arrayBuffer = await uploadedFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    fileAttachment = {
      filename: uploadedFile.name,
      content: buffer,
      contentType: uploadedFile.type,
    };
    
    console.log('📎 File prepared for email attachment:', { 
      filename: uploadedFile.name, 
      size: buffer.length,
      type: uploadedFile.type 
    });
  }
  
  // Send emails via EmailService with attachment
  const result = await EmailService.sendApplicationFormWithAttachment({
    name: validatedData.fullName,
    email: validatedData.email,
    company: validatedData.companyName,
    position: 'Founder/CEO',
    fundingStage: validatedData.fundingStage,
    fundingAmount: `$${validatedData.fundingAmount.toLocaleString()}`,
    industry: validatedData.projectType,
    description: validatedData.projectDescription,
    website: '',
    phone: validatedData.phone,
  }, fileAttachment);
  
  console.log('📧 Application email service result (with attachment):', result);
  
  if (!result.success) {
    console.error('❌ Application email sending failed:', result.error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails. Please try again later.' },
      { status: 500 }
    );
  }
  
  return NextResponse.json(
    { 
      success: true, 
      message: 'Application submitted successfully with attachment. Our team will review your application and respond within 48 hours.',
      emailIds: {
        admin: result.adminEmailId,
        user: result.userEmailId
      },
      attachment: uploadedFile ? { name: uploadedFile.name, size: uploadedFile.size } : null
    },
    { status: 200 }
  );
}
