'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { applicationSchema, type ApplicationFormData } from '@/lib/validations';
import {
  Upload,
  CheckCircle,
  AlertCircle,
  Building,
  DollarSign,
  FileText,
  Calendar,
  Shield,
  Clock,
  Building2,
  TrendingUp,
  Users
} from 'lucide-react';
import {
  createPageEntranceAnimation,
  createFormAnimation,
  createFeatureAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function ApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [applicationRef, setApplicationRef] = useState<string>('');
  const formRef = useRef<HTMLElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema)
  });

  useEffect(() => {
    createPageEntranceAnimation('.form-header');
    createFormAnimation('.form-section');
    // Generate application reference only on client side
    setApplicationRef(Date.now().toString().slice(-8).toUpperCase());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      createPageEntranceAnimation('.success-content');
    }
  }, [isSuccess]);

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      let response;
      
      if (uploadFile) {
        // Send with file attachment using FormData
        const formData = new FormData();
        
        // Add all form fields
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });
        
        // Add the file
        formData.append('file', uploadFile);
        
        console.log('📎 Submitting application with file:', uploadFile.name);
        
        response = await fetch('/api/apply', {
          method: 'POST',
          body: formData, // Don't set Content-Type, let browser set it with boundary
        });
      } else {
        // Send as JSON (no file)
        console.log('📝 Submitting application without file');
        
        response = await fetch('/api/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      }

      const result = await response.json();

      if (result.success) {
        console.log('✅ Application submitted successfully:', result);
        setIsSuccess(true);
        reset();
        setUploadFile(null);
      } else {
        alert(result.message || 'There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Application form error:', error);
      alert('There was an unexpected error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' && file.size <= 25 * 1024 * 1024) {
        setUploadFile(file);
      } else {
        alert('Please upload a PDF file under 25MB');
      }
    }
  };

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Australia', 'Singapore', 'Japan', 'South Korea', 'India', 
    'Switzerland', 'Sweden', 'Brazil', 'Mexico', 'Other'
  ];

  const industries = [
    'Technology/Software', 'Artificial Intelligence', 'Fintech', 'Healthcare/Biotech',
    'Renewable Energy', 'Real Estate', 'E-commerce/Retail', 'Manufacturing',
    'Logistics/Supply Chain', 'Telecommunications', 'Media/Entertainment', 'Other'
  ];

  const fundingStages = [
    'Seed', 'Series A', 'Series B', 'Series C+', 'Growth/Expansion', 'Bridge', 'Other'
  ];

  const targetDates = [
    '30 days', '60 days', '90 days', '6 months', '12 months', 'Flexible'
  ];

  if (isSuccess) {
    return (
      <div className="pt-16 flex items-center justify-center py-20">{/* Fixed layout for proper footer display */}
        <div ref={successRef} className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-semantic-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-semantic-success" />
            </div>
            <h1 className="heading-section">
              Application Received
            </h1>
            <p className="text-lead mb-8">
              Thank you for submitting your funding application to Aurum Ascend Capital. Our institutional capital team will review your submission and respond within 48 hours.
            </p>
            
            <div className="card-glass mb-8">
              <h3 className="text-lg font-semibold text-primary mb-6">Next Steps in Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-6 w-6 text-accent-primary" />
                  </div>
                  <h4 className="font-medium text-primary mb-2">Initial Review</h4>
                  <p className="text-small text-secondary">Preliminary assessment within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-accent-primary" />
                  </div>
                  <h4 className="font-medium text-primary mb-2">Due Diligence</h4>
                  <p className="text-small text-secondary">Investor matching and vetting process</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-accent-primary" />
                  </div>
                  <h4 className="font-medium text-primary mb-2">Investor Presentation</h4>
                  <p className="text-small text-secondary">Introduction to qualified investors</p>
                </div>
              </div>
            </div>
          
          <div className="text-small text-muted mb-8">
            Application Reference: #{applicationRef}
          </div>
          
          <button 
            onClick={() => setIsSuccess(false)}
            className="btn btn-primary btn-large"
          >
            Submit Another Application
          </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-base">{/* Fixed layout for proper footer display */}
      <section ref={formRef} className="section-hero">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          {/* Header */}
          <div className="form-header text-center mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 glass-subtle px-2 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-accent-primary" />
              <span className="text-xs font-medium text-accent-primary">Institutional Capital Application • Confidential Process</span>
            </div>
            
            <h1 className="heading-display px-1 sm:px-0">
              Apply for <span className="gradient-text">Growth Capital</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto px-1 sm:px-0">
              Begin your personal consultation with our London-based team. We'll review your application 
              personally and arrange strategic introductions to institutional investors who truly understand your vision.
            </p>
          </div>

          {/* Security Notice */}
          <div className="card border-accent-primary/30 bg-accent-primary/10 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-accent-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Bank-Grade Security & Confidentiality</h3>
                <ul className="text-sm sm:text-base text-body space-y-1">
                  <li>• All information encrypted with AES-256 standards</li>
                  <li>• Strict NDA protocols with all investor partners</li>
                  <li>• GDPR and SOC 2 Type II compliant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Help Section */}
          <div className="text-center mb-8">
            <p className="text-body mb-4">
              Have questions about the application process? 
              <Link href="/about#faq" className="text-accent-primary hover:text-accent-primary/80 font-medium ml-1">
                Check our FAQ page
              </Link> for instant answers about funding requirements, timelines, and what to expect.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 sm:space-y-12">
            {/* Company Information */}
            <div className="form-section">
              <div className="card">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Building className="h-5 w-5 text-accent-primary" />
                  <h2 className="heading-subsection text-lg sm:text-xl">Company & Contact Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-secondary mb-2">
                      Full Name *
                    </label>
                    <Input
                      {...register('fullName')}
                      placeholder="Enter your full name"
                      className={`w-full ${errors.fullName ? 'border-semantic-error' : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-semantic-error text-xs sm:text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-secondary mb-2">
                      Company Name *
                    </label>
                    <Input
                      {...register('companyName')}
                      placeholder="Enter your company name"
                      className={`w-full ${errors.companyName ? 'border-semantic-error' : ''}`}
                    />
                    {errors.companyName && (
                      <p className="text-semantic-error text-xs sm:text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-secondary mb-2">
                      Business Email *
                    </label>
                    <Input
                      type="email"
                      {...register('email')}
                      placeholder="Enter your business email"
                      className={`w-full ${errors.email ? 'border-semantic-error' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-semantic-error text-xs sm:text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-small font-medium text-secondary mb-2">
                      Phone Number *
                    </label>
                    <Input
                      {...register('phone')}
                      placeholder="Enter your phone number"
                      className={`w-full p-4 bg-card border border-primary rounded-lg text-primary placeholder:text-muted focus:border-accent-primary focus:outline-none ${errors.phone ? 'border-semantic-error' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-semantic-error text-small mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-small font-medium text-secondary mb-2">
                      Country/Region *
                    </label>
                    <Select
                      {...register('country')}
                      className={`w-full ${errors.country ? 'border-semantic-error' : ''}`}
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </Select>
                    {errors.country && (
                      <p className="text-semantic-error text-small mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.country.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-small font-medium text-secondary mb-2">
                      Industry Sector *
                    </label>
                    <Select
                      {...register('projectType')}
                      className={`w-full ${errors.projectType ? 'border-semantic-error' : ''}`}
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </Select>
                    {errors.projectType && (
                      <p className="text-semantic-error text-small mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Requirements */}
            <div className="form-section">
              <div className="card">
                <div className="flex items-center gap-4 mb-8">
                  <DollarSign className="h-5 w-5 text-accent-primary" />
                  <h2 className="heading-subsection">Funding Requirements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium text-secondary mb-2">
                      Funding Amount (USD) *
                    </label>
                    <Input
                      type="number"
                      {...register('fundingAmount', { valueAsNumber: true })}
                      placeholder="e.g., 2500000"
                      className={`w-full p-4 bg-card border border-primary rounded-lg text-primary placeholder:text-muted focus:border-accent-primary focus:outline-none ${errors.fundingAmount ? 'border-semantic-error' : ''}`}
                    />
                    {errors.fundingAmount && (
                      <p className="text-semantic-error text-small mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.fundingAmount.message}
                      </p>
                    )}
                    <p className="text-muted text-small mt-1">Minimum: $500,000 • No maximum limit</p>
                  </div>

                  <div>
                    <label className="block text-small font-medium text-secondary mb-2">
                      Funding Stage *
                    </label>
                    <Select
                      {...register('fundingStage')}
                      className={`w-full ${errors.fundingStage ? 'border-semantic-error' : ''}`}
                    >
                      <option value="">Select funding stage</option>
                      {fundingStages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </Select>
                    {errors.fundingStage && (
                      <p className="text-semantic-error text-small mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.fundingStage.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-small font-medium text-secondary mb-2">
                      Target Closing Timeline *
                    </label>
                    <Select
                      {...register('targetClosingDate')}
                      className={`w-full ${errors.targetClosingDate ? 'border-semantic-error' : ''}`}
                    >
                      <option value="">Select timeframe</option>
                      {targetDates.map((date) => (
                        <option key={date} value={date}>
                          {date}
                        </option>
                      ))}
                    </Select>
                    {errors.targetClosingDate && (
                      <p className="text-semantic-error text-small mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.targetClosingDate.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Overview */}
            <div className="form-section">
              <div className="card">
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="h-5 w-5 text-accent-primary" />
                  <h2 className="heading-subsection">Company Overview</h2>
                </div>

                <div>
                  <label className="block text-small font-medium text-secondary mb-2">
                    Business Description & Use of Funds *
                  </label>
                  <Textarea
                    {...register('projectDescription')}
                    placeholder="Please describe your business model, market opportunity, competitive advantages, revenue model, key metrics, and how you plan to use the funding..."
                    rows={8}
                    maxLength={2000}
                    className={`w-full p-4 bg-card border border-primary rounded-lg text-primary placeholder:text-muted resize-none focus:border-accent-primary focus:outline-none ${errors.projectDescription ? 'border-semantic-error' : ''}`}
                  />
                  {errors.projectDescription && (
                    <p className="text-semantic-error text-small mt-2 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.projectDescription.message}
                    </p>
                  )}
                  <p className="text-muted text-small mt-1">
                    {watch('projectDescription')?.length || 0}/2000 characters
                  </p>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="form-section">
              <div className="card">
                <div className="flex items-center gap-4 mb-8">
                  <Upload className="h-5 w-5 text-accent-primary" />
                  <h2 className="heading-subsection">Supporting Documents</h2>
                </div>

                <div>
                  <label className="block text-small font-medium text-secondary mb-2">
                    Pitch Deck or Executive Summary (Recommended)
                  </label>
                  <div className="relative border-2 border-dashed border-primary rounded-lg p-8 text-center hover:border-accent-primary transition-colors">
                    <Upload className="h-10 w-10 text-muted mx-auto mb-4" />
                    <div className="text-small text-secondary mb-2">
                      {uploadFile ? (
                        <span className="text-semantic-success font-medium">{uploadFile.name}</span>
                      ) : (
                        <>
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </>
                      )}
                    </div>
                    <p className="text-small text-muted">PDF format • Maximum 25MB</p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <p className="text-muted text-small mt-2">
                    Include key metrics, financial projections, market analysis, and team information
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="form-section">
              <div className="card bg-secondary text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-muted" />
                  <span className="text-small text-secondary">Response time: 48 hours or less</span>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-large font-medium hover-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Processing Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
                
                <p className="text-small text-muted max-w-md mx-auto mt-4">
                  By submitting this application, you acknowledge that you have read and agree to our 
                  Terms of Service, Privacy Policy, and consent to our due diligence process.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
