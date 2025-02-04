import React from 'react';

const EnhancedPitchDeck = () => {
  return (
    <div className="space-y-8">
      {/* Cover Slide */}
      <div className="bg-gradient-to-r from-medical-600 to-medical-800 text-white p-8 rounded-lg relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Pioneering the Future of Healthcare</h1>
          <p className="text-xl">Non-Invasive Medical Technologies</p>
        </div>
      </div>

      {/* Protected Innovation Portfolio */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Protected Innovation Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Patents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Global Patent No. 60890</li>
              <li>US Patent 10,531,836 B2</li>
              <li>CN Patent 202210905914</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Comprehensive Product Portfolio</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>ANESA Platform</li>
              <li>KOLIBRI Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPitchDeck;