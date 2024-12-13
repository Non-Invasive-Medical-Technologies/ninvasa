import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { Download as DownloadIcon, Mail, Building2, User } from 'lucide-react';

interface DownloadFormData {
  fullName: string;
  email: string;
  company: string;
}

const Download = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<DownloadFormData>();

  const onSubmit = (data: DownloadFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send this data to your backend
    // For now, we'll simulate a successful submission
    toast({
      title: "Success!",
      description: "The business plan will be sent to your email shortly.",
    });
    
    // Simulate download start
    setTimeout(() => {
      // In a real application, this would be a real file URL
      const dummyFileUrl = '/sample-business-plan.pdf';
      const link = document.createElement('a');
      link.href = dummyFileUrl;
      link.download = 'ANESA-Business-Plan.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white space-y-2">
            <h1 className="text-3xl font-bold">Download Business Plan</h1>
            <p className="text-lg opacity-90">
              Get detailed insights into our market strategy, financial projections, and growth plans
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    className="pl-10"
                    {...register("fullName", { required: "Full name is required" })}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Business Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="pl-10"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="company"
                    placeholder="Company Ltd."
                    className="pl-10"
                    {...register("company", { required: "Company name is required" })}
                  />
                </div>
                {errors.company && (
                  <p className="text-sm text-red-500">{errors.company.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                <DownloadIcon className="mr-2 h-5 w-5" />
                Download Business Plan
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>By downloading, you agree to receive updates about ANESA's products and services.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Download;