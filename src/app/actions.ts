
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio."),
  email: z.string().email("Por favor, introduce una dirección de correo válida."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export async function submitInquiry(values: unknown) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.errors.map(e => e.message).join(', ');
    return { error: `Datos no válidos: ${errorMessages}` };
  }
  
  // In a real app, you would integrate with an email service or CRM here.
  console.log('Nueva consulta recibida:', parsed.data);

  return { success: '¡Tu consulta ha sido enviada con éxito! Nos pondremos en contacto contigo en breve.' };
}
