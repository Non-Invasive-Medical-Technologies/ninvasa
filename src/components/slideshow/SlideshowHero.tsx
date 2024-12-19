import React from 'react';
import { Star, Circle, Diamond } from 'lucide-react';

const SlideshowHero = () => {
  return (
    <div className="bg-gradient-to-r from-medical-600 to-medical-800 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Star className="absolute top-10 left-[10%] w-12 h-12" />
        <Circle className="absolute top-20 right-[20%] w-8 h-8" />
        <Diamond className="absolute bottom-10 left-[30%] w-10 h-10" />
        <Star className="absolute bottom-20 right-[15%] w-14 h-14" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <div className="text-medical-100 font-medium">Executive Overview</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Revolutionizing Healthcare Diagnostics
          </h1>
          <p className="text-xl opacity-90">
            Non-Invasive Medical Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideshowHero;