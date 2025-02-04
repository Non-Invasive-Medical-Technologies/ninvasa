import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    
    try {
      console.log("Attempting to send email...");
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      );
      
      console.log("Email sent successfully:", result);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-medical-600 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="user_name">Name</Label>
          <Input
            id="user_name"
            name="user_name"
            placeholder="Your name"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="user_email">Email</Label>
          <Input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="min-h-[100px]"
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-medical-600 hover:bg-medical-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">Or schedule a meeting with us</p>
        <Button
          variant="outline"
          className="w-full border-medical-600 text-medical-600 hover:bg-medical-600 hover:text-white"
          onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
        >
          Schedule a Demo
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;