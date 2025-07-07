'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function submitInquiry(values: unknown) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.errors.map(e => e.message).join(', ');
    return { error: `Invalid data: ${errorMessages}` };
  }
  
  // In a real application, you would integrate with an email service or CRM here.
  console.log('New inquiry received:', parsed.data);

  return { success: 'Your inquiry has been submitted successfully! We will get back to you soon.' };
}
