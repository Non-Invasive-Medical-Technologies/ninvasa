import React from 'react';
import { 
  Globe, 
  TrendingUp, 
  Target, 
  Users 
} from 'lucide-react';

const PresentationDeck = () => {
  return (
    <div className="w-full space-y-8">
      {/* Market Opportunity */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-500 mb-6">Market Opportunity</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <Globe className="w-8 h-8 text-medical-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-500">$50B+</div>
            <div className="text-sm text-gray-600">Total TAM</div>
          </div>
          
          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-medical-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-500">25.2%</div>
            <div className="text-sm text-gray-600">CAGR</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <Target className="w-8 h-8 text-medical-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-500">30K+</div>
            <div className="text-sm text-gray-600">Healthcare Facilities</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <Users className="w-8 h-8 text-medical-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-500">350M+</div>
            <div className="text-sm text-gray-600">Population Reach</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-medical-500 to-medical-600 text-white p-8 rounded-lg">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Transform Healthcare Delivery</h2>
          <p className="text-lg opacity-90">Join us in revolutionizing non-invasive diagnostics and monitoring</p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="bg-white text-medical-500 px-6 py-3 rounded-lg font-semibold">
              Schedule Demo
            </div>
            <div className="border border-white text-white px-6 py-3 rounded-lg font-semibold">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationDeck;