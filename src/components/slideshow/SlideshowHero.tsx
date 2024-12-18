import React from 'react';

const SlideshowHero = () => {
  return (
    <div className="bg-gradient-to-r from-medical-600 to-medical-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <div className="text-medical-100 font-medium">Executive Overview</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Revolutionizing Healthcare Diagnostics
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-12">
            Pioneering the Future of Healthcare
          </h2>
          <p className="text-xl opacity-90">
            Non-Invasive Medical Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideshowHero;