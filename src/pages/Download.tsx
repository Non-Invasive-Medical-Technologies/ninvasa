import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Download as DownloadIcon, Mail, Building2, User, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address")
    .refine(email => email.includes('.') && email.split('@')[1].length > 1, {
      message: "Please enter a valid email domain",
    }),
  company: z.string().min(2, "Company name must be at least 2 characters"),
});

type DownloadFormData = z.infer<typeof formSchema>;

const Download = () => {
  const { toast } = useToast();
  const form = useForm<DownloadFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: DownloadFormData) => {
    try {
      console.log('Form submitted:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Check your email for the business plan. It may take a few minutes to arrive.",
        duration: 5000,
      });
      
      // Simulate download start
      setTimeout(() => {
        const dummyFileUrl = '/sample-business-plan.pdf';
        const link = document.createElement('a');
        link.href = dummyFileUrl;
        link.download = 'Products-and-Services-Business-Plan.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-medical-600 to-medical-400 text-white space-y-2">
            <h1 className="text-3xl font-bold">Download Business Plan</h1>
            <p className="text-lg opacity-90">
              Get detailed insights into our market strategy, financial projections, and growth plans
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Email</FormLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <FormControl>
                          <Input
                            placeholder="Company Ltd."
                            className="pl-10"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Download Business Plan
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>By downloading, you agree to receive updates about our products and services.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Download;