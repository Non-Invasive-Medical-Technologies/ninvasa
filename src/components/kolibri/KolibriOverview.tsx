import React from 'react';
import { Heart, Clock, Cloud, Shield, Cpu, Activity, Brain, Target } from 'lucide-react';

const healthParameters = {
  general: [
    'Heart rate',
    'Health index',
    'Stress index',
    'Body mass index',
    'Basal metabolic rate',
    'Energy expenditure'
  ],
  bloodAnalysis: [
    'Haemoglobin (HGB)',
    'Haematocrit',
    'Platelets',
    'Red blood cells',
    'White blood cells',
    'Mean arterial pressure'
  ],
  heartRate: [
    'Heart rate variability',
    'Autonomic rate index',
    'Autonomic balance index',
    'ECG morphology',
    'Cardiac pathologies detection',
    'Real-time monitoring'
  ]
};

const KolibriOverview = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">KOLIBRI Advanced Health Monitoring</h2>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Core Technology */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Patent-Protected Technology</h3>
                <p className="text-sm text-gray-600">US Patent 10,531,836 B2 (Jan 14, 2020)</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Heart className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Advanced heart activity signal processing</p>
              </div>
              <div className="flex items-start">
                <Activity className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">40+ health parameters in 2-5 minutes</p>
              </div>
              <div className="flex items-start">
                <Cloud className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Cloud-based remote monitoring system</p>
              </div>
            </div>
          </div>

          {/* Smart Analytics */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Intelligent Analytics</h3>
                <p className="text-sm text-gray-600">AI-Powered Health Assessment</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Target className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Neural network diagnostic algorithms</p>
              </div>
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Early health risk detection</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Real-time health insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Health Parameters */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-600 mb-6">Comprehensive Health Monitoring</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* General Health */}
            <div className="p-6 border border-blue-100 rounded-lg">
              <h4 className="font-semibold mb-4">General Health Metrics</h4>
              <ul className="space-y-2 text-sm">
                {healthParameters.general.map((param, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blood Analysis */}
            <div className="p-6 border border-blue-100 rounded-lg">
              <h4 className="font-semibold mb-4">Blood Analysis</h4>
              <ul className="space-y-2 text-sm">
                {healthParameters.bloodAnalysis.map((param, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Heart Rate Analysis */}
            <div className="p-6 border border-blue-100 rounded-lg">
              <h4 className="font-semibold mb-4">Cardiac Monitoring</h4>
              <ul className="space-y-2 text-sm">
                {healthParameters.heartRate.map((param, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-blue-600">2-5 min</div>
            <div className="text-sm text-gray-600">Quick Analysis</div>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg text-center">
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-blue-600">40+</div>
            <div className="text-sm text-gray-600">Health Parameters</div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg text-center">
            <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Remote Monitoring</div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg text-center">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-blue-600">Secure</div>
            <div className="text-sm text-gray-600">Data Protection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolibriOverview;