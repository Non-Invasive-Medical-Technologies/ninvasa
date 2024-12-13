import React from 'react';
import { Brain, Activity, Clock, Shield, Cpu, Heart } from 'lucide-react';

const TechnicalSpecs = () => {
  return (
    <div className="w-full space-y-8">
      {/* ANESA Technical Specifications */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">ANESA Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Brain className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Advanced Signal Processing</h3>
                <p className="text-gray-600">Malykhin-Pulavskyi method for biosignal analysis</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Activity className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Comprehensive Analysis</h3>
                <p className="text-gray-600">136+ health parameters measured</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Rapid Assessment</h3>
                <p className="text-gray-600">6-12 minute diagnostic time</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>High-precision temperature sensors (0.07°C accuracy)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>5-point biometric data collection</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Real-time signal processing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Deep learning pattern recognition</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* KOLIBRI Technical Specifications */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">KOLIBRI Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Smart Health Monitoring</h3>
                <p className="text-gray-600">40+ health parameters in 2-5 minutes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">AI-Powered Analysis</h3>
                <p className="text-gray-600">Neural network diagnostic algorithms</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Secure Platform</h3>
                <p className="text-gray-600">Protected health data management</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Advanced heart activity signal processing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Cloud-based remote monitoring</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Early health risk detection</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Real-time health insights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;