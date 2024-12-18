import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const device = document.querySelector('.device-model') as HTMLElement;
      if (!device) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = (clientY / innerHeight - 0.5) * 20;
      const rotateY = (clientX / innerWidth - 0.5) * 20;
      
      device.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.1, 1.1, 1.1)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F5F9F9] to-[#E0F2F1] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8FD5CA] rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#26652C] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Rapid Non Invasive testing,{' '}
              <span className="bg-gradient-to-r from-[#26652C] to-[#4EC989] bg-clip-text text-transparent">
                Powered by patented technologies.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Professional-grade health monitoring powered by AI. Advanced sensors combined 
              with intelligent analytics provide unprecedented insights into your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-[#26652C] to-[#4EC989] text-white px-8 py-6 rounded-lg text-lg hover:opacity-90 transition-opacity">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-[#26652C] text-[#26652C] px-8 py-6 rounded-lg text-lg hover:bg-[#26652C] hover:text-white transition-colors">
                Book Demo
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Device Display */}
          <div className="relative z-10 flex justify-center">
            <div 
              className="device-model transition-transform duration-300 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              <img 
                src="/lovable-uploads/ec9a76d9-da41-48e9-9877-dcae1fc65603.png"
                alt="Kolibri Device"
                className="w-auto h-[600px] object-contain filter drop-shadow-2xl"
              />
              {/* Status LED */}
              <div 
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#4EC989] animate-pulse"
                style={{
                  boxShadow: '0 0 8px #4EC989'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;