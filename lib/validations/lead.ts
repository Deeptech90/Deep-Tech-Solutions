import { z } from 'zod';

export const qualificationSchema = z.object({
  serviceNeed: z.enum(['website', 'local_seo', 'lead_gen', 'full_package', 'custom_app']).refine(
    (v) => v !== undefined,
    { message: 'Please select a primary service objective' }
  ),
  industryVertical: z.enum(['dental', 'legal', 'restaurant', 'home_services', 'other']).refine(
    (v) => v !== undefined,
    { message: 'Please select your industry sector' }
  ),
  budgetTier: z.enum(['under_500', '500_1000', '1000_2500', 'above_2500']).refine(
    (v) => v !== undefined,
    { message: 'Please select an estimated capital allocation' }
  ),
  fullName: z.string().min(2, 'Full name is required'),
  businessName: z.string().min(2, 'Business or company name is required'),
  email: z.string().email('Please enter a valid corporate email address'),
  phone: z.string().min(8, 'Valid contact phone number is required'),
  websiteUrl: z
    .string()
    .url('Must be a valid URL (e.g. https://example.com)')
    .optional()
    .or(z.literal('')),
  projectBrief: z
    .string()
    .min(10, 'Please provide a brief description of your project goals'),
});
