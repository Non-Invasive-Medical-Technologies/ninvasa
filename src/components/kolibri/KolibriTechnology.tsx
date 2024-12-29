import React from 'react';
import { Brain, Heart, Shield } from 'lucide-react';

const KolibriTechnology = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Technology Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Heart className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Advanced Signal Processing</h3>
              <p className="text-gray-600">
                The KOLIBRI® technology is founded on the analysis of heart activity (HA) signals, employing an autoregressive linear prediction model to determine various biochemical parameters.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Brain className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Neural Network Algorithms</h3>
              <p className="text-gray-600">
                Over a decade of extensive Big Data from clinical and pre-clinical trials has provided a robust foundation for our neural network algorithms, continuously enhanced by leading experts.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Patent-Protected Innovation</h3>
              <p className="text-gray-600">
                Protected by US Patent 10,531,836 B2 (January 14, 2020), our specialized algorithms evaluate specific criteria to identify potential health risks and pathologies.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Remote Health Monitoring</h3>
            <p className="text-gray-600">
              By using the KOLIBRI® medical device at home in conjunction with your medical institution or family doctor, you can receive comprehensive support in monitoring your health remotely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolibriTechnology;