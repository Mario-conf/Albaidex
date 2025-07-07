"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateAppTaglines } from '@/ai/flows/generate-app-taglines';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Lightbulb } from 'lucide-react';

const formSchema = z.object({
  appName: z.string().min(2, "App name must be at least 2 characters."),
  appDescription: z.string().min(10, "Description must be at least 10 characters."),
  appCategory: z.string().min(2, "Category is required."),
});

export function TaglineGenerator() {
  const [taglines, setTaglines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appName: "",
      appDescription: "",
      appCategory: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setTaglines([]);
    try {
      const result = await generateAppTaglines(values);
      if (result && result.taglines) {
        setTaglines(result.taglines);
      } else {
        setError('The AI returned an unexpected response. Please try again.');
      }
    } catch (err) {
      setError('Failed to generate taglines. Please check your connection and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="appName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>App Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., SavvySaver" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="appCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>App Category</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Personal Finance" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="appDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>App Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe what your app does in a few words." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Generating...' : 'Generate Taglines'}
              </Button>
            </form>
          </Form>

          {error && (
            <Alert variant="destructive" className="mt-6">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {taglines.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">Here are your taglines:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {taglines.map((tagline, index) => (
                  <Card key={index} className="bg-secondary/50">
                    <CardContent className="p-4 flex items-center gap-4">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="font-medium">{tagline}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
