'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CalendlyWidget } from '@/components/ui/calendly-widget';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  HeadphonesIcon,
  Building2,
  Shield,
  Users
} from 'lucide-react';
import officeImage from '@/../public/oie_gXvGN4MZjlox.png';
import {
  createPageEntranceAnimation,
  createCardScrollAnimation,
  createFormAnimation,
  cleanupAnimations
} from '@/lib/animations';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        alert(result.message || 'There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('There was an unexpected error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Hero animation
    createPageEntranceAnimation('.hero-content');

    // Contact info cards animation
    createCardScrollAnimation('.contact-card', null);

    // Form animation
    createFormAnimation('.form-field');

    // Cleanup on unmount
    return () => {
      cleanupAnimations();
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Business Inquiries",
      content: "info@raisesignal.uk",
      description: "For funding applications and business partnerships",
      href: "mailto:info@raisesignal.uk"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Direct Line",
      content: "+44 7537 126467",
      description: "Available Monday to Friday, 9 AM - 6 PM GMT",
      href: "tel:+447537126467"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      content: "3 More London Riverside, London SE1 2RE",
      description: "United Kingdom - Greenwich Mean Time",
      href: "https://maps.google.com/?q=3+More+London+Riverside,+London+SE1+2RE,+UK"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      content: "Within 48 hours",
      description: "We review all inquiries personally"
    }
  ];

  if (isSuccess) {
    return (
      <div className="pt-16 flex items-center justify-center py-20">{/* Fixed layout for proper footer display */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-semantic-success/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-semantic-success" />
            </div>
            <h1 className="heading-section px-2 sm:px-0">
              Message Received
            </h1>
            <p className="text-lead mb-6 sm:mb-8 px-2 sm:px-0">
              Thank you for contacting <span className="font-bold">Raise</span><span className="font-light">Signal</span>. Our team will review your inquiry and respond within 48 hours (CET business days).
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="btn btn-primary btn-large w-full sm:w-auto"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-base">{/* Fixed layout for proper footer display */}
      {/* Hero Section */}
      <section ref={heroRef} className="section-hero">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass-subtle px-2 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-accent-secondary" />
              <span className="text-xs sm:text-small font-medium text-accent-secondary">Available Mon-Fri • Response Within 48 Hours GMT</span>
            </div>
            <h1 className="heading-display px-1 sm:px-0">
              Connect with Our{' '}
              <span className="gradient-text">Investment Partners</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto text-balance px-1 sm:px-0">
              Ready to accelerate your growth? Connect directly with our London-based team for a personal consultation on institutional funding. We believe in building relationships, not just facilitating transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mt-4 sm:mt-6">
              <CalendlyWidget 
                text="Schedule a Call" 
                url="https://calendly.com/ari-raisesignal-68nf/30min"
                className="btn-primary btn-large hover-glow"
              />
              <span className="text-small text-secondary">or fill out the form below</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="max-w-xl">
                <h2 className="heading-section">
                  Start the Conversation
                </h2>
                <p className="text-body mb-8">
                  Tell us about your business and funding goals. We'll arrange a personal consultation to discuss how our investor relationships can support your growth journey.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      {...register('name')}
                      placeholder="Full Name"
                      className="w-full p-4 bg-card border border-primary rounded-lg text-primary placeholder:text-muted focus:border-accent-primary focus:outline-none"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <div className="flex items-center mt-2 text-small text-semantic-error">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="Business Email"
                      className="w-full p-4 bg-card border border-primary rounded-lg text-primary placeholder:text-muted focus:border-accent-primary focus:outline-none"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <div className="flex items-center mt-2 text-small text-semantic-error">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <Textarea
                      {...register('message')}
                      placeholder="Tell us about your funding goals, timeline, and any specific requirements..."
                      rows={5}
                      className="w-full p-4 bg-card border border-primary rounded-lg text-primary placeholder:text-muted resize-none focus:border-accent-primary focus:outline-none"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <div className="flex items-center mt-2 text-small text-semantic-error">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary btn-large hover-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="lg:pl-8">
                <div className="mb-8">
                  <Image
                    src={officeImage}
                    alt="RaiseSignal Office"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="heading-section">
                  Multiple Ways to Connect
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`card hover-lift ${info.href ? 'cursor-pointer transition-all duration-300' : ''}`} onClick={() => info.href && window.open(info.href, info.href.startsWith('http') ? '_blank' : '_self')}>
                      <div className="flex items-start space-x-4">
                        <div className="text-accent-primary flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary mb-1">{info.title}</h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-lg font-medium text-accent-primary mb-1 hover:underline focus:outline-none inline-block transition-colors duration-300"
                              target={info.href.startsWith('http') ? "_blank" : "_self"}
                              rel={info.href.startsWith('http') ? "noopener noreferrer" : ""}
                              aria-label={`Contact via ${info.title}`}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-lg font-medium text-accent-primary mb-1">
                              {info.content}
                            </p>
                          )}
                          <p className="text-small text-secondary">{info.description}</p>
                          {info.href && (
                            <p className="text-xs text-accent-secondary mt-1 opacity-75 flex items-center">
                              <span className="mr-1">Click to open</span>
                              {info.href.startsWith('mailto') && <span>✉️</span>}
                              {info.href.startsWith('tel') && <span>📞</span>}
                              {info.href.startsWith('http') && <span>🔗</span>}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Direct Scheduling Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="card">
              <h3 className="heading-section mb-4">
                Prefer to Talk Directly?
              </h3>
              <p className="text-body mb-6">
                Schedule a 30-minute call with our founder to discuss your funding goals and explore how RaiseSignal can help accelerate your growth.
              </p>
              <CalendlyWidget 
                text="Book a 30-Minute Call" 
                className="btn-secondary btn-large hover-glow mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
