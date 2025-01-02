import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight, Globe, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F5F9F9] to-[#E0F2F1] overflow-hidden px-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-medical-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-medical-600/20 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto pt-24 sm:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative z-10 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
              <Star className="h-4 sm:h-5 w-4 sm:w-5 text-medical-500" />
              <span className="text-xs sm:text-sm font-medium">Leading Medical Innovation</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Revolutionizing Healthcare with{' '}
              <span className="bg-gradient-to-r from-medical-500 to-medical-600 bg-clip-text text-transparent">
                Non-Invasive Testing
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Our patented technology combines advanced sensors with AI-powered analytics 
              to deliver unprecedented insights into your health, making professional-grade 
              monitoring more accessible than ever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-medical-500 to-medical-600 text-white hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-medical-500 text-medical-500 hover:bg-medical-500 hover:text-white transition-colors"
              >
                Book Demo
                <MessageSquare className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-medical-500">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-medical-500">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center lg:text-left hidden sm:block">
                <div className="text-2xl sm:text-3xl font-bold text-medical-500">Global</div>
                <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative z-10 hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-500/10 to-medical-600/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-white/90 p-6 sm:p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-medical-500" />
                  <h3 className="text-lg sm:text-xl font-semibold">Global Health Innovation</h3>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-medical-100 rounded-full w-3/4" />
                  <div className="h-2 bg-medical-100 rounded-full w-full" />
                  <div className="h-2 bg-medical-100 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;