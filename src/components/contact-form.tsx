"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitInquiry } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio."),
  email: z.string().email("Por favor, introduce una dirección de correo válida."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitInquiry(values);

      if (result.error) {
        toast({ variant: 'destructive', title: 'Error', description: result.error });
      } else {
        toast({ title: '¡Éxito!', description: result.success });
        form.reset();
      }
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: 'Ocurrió un error inesperado.' });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Tu Nombre" {...field} className="bg-muted p-4 h-14 text-base focus:ring-2 focus:ring-ring focus:border-ring transition"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Tu Email" type="email" {...field} className="bg-muted p-4 h-14 text-base focus:ring-2 focus:ring-ring focus:border-ring transition"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={6} {...field} className="bg-muted p-4 text-base focus:ring-2 focus:ring-ring focus:border-ring transition" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-8 text-center">
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto h-auto py-4 px-12 text-lg font-bold shadow-lg">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
