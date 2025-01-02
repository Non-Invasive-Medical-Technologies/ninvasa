import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight, Globe, Star } from 'lucide-react';
import ContactForm from '../contact/ContactForm';

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-b from-[#F5F9F9] to-[#E0F2F1] overflow-hidden px-4 sm:px-6">
      {/* Background Elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-medical-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-72 h-32 sm:h-72 bg-medical-600/20 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      {/* Content Container - improved mobile spacing */}
      <div className="container mx-auto pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              <Star className="h-3 sm:h-4 w-3 sm:w-4 text-medical-500" />
              <span className="text-xs sm:text-sm font-medium">Leading Medical Innovation</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Revolutionizing Healthcare with{' '}
              <span className="bg-gradient-to-r from-medical-500 to-medical-600 bg-clip-text text-transparent">
                Non-Invasive Testing
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Our patented technology combines advanced sensors with AI-powered analytics 
              to deliver unprecedented insights into your health, making professional-grade 
              monitoring more accessible than ever.
            </p>

            {/* Buttons - mobile-optimized spacing and sizing */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-medical-500 to-medical-600 text-white hover:opacity-90 transition-opacity text-sm sm:text-base py-2 sm:py-3"
                onClick={() => setShowContactForm(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-medical-500 text-medical-500 hover:bg-medical-500 hover:text-white transition-colors text-sm sm:text-base py-2 sm:py-3"
                onClick={() => setShowContactForm(true)}
              >
                Book Demo
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats - improved mobile grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-medical-500">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-medical-500">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center lg:text-left hidden sm:block">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-medical-500">Global</div>
                <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form or Visual Element */}
          <div className="relative z-10 flex justify-center items-center">
            {showContactForm ? (
              <ContactForm />
            ) : (
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-medical-500/10 to-medical-600/10 rounded-3xl transform rotate-3" />
                <div className="relative bg-white/90 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-medical-500" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Global Health Innovation</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-2 bg-medical-100 rounded-full w-3/4" />
                    <div className="h-2 bg-medical-100 rounded-full w-full" />
                    <div className="h-2 bg-medical-100 rounded-full w-2/3" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;