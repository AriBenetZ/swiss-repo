import { z } from 'zod'

export const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  country: z.string().min(1, 'Please select a country'),
  projectType: z.string().min(1, 'Please select a project type'),
  fundingAmount: z.number().min(1000, 'Minimum funding amount is $1,000'),
  fundingStage: z.string().min(1, 'Please select a funding stage'),
  projectDescription: z.string()
    .min(50, 'Project description must be at least 50 characters')
    .max(1000, 'Project description must not exceed 1000 characters'),
  targetClosingDate: z.string().min(1, 'Please select a target closing date'),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ApplicationFormData = z.infer<typeof applicationSchema>
export type ContactFormData = z.infer<typeof contactSchema>
