import React from 'react';
import { Activity, Brain, Cpu, Thermometer, Clock, Shield, Target } from 'lucide-react';

const AnesaTechnology = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* ANESA Platform Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">ANESA Advanced Diagnostic Platform</h2>
        
        {/* Core Technology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Proprietary Technology */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Proprietary Technology</h3>
                <p className="text-sm text-gray-600">Malykhin-Pulavskyi Method</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Thermometer className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">High-precision temperature measurement (0.07°C accuracy)</p>
              </div>
              <div className="flex items-start">
                <Target className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">5-point biometric data collection</p>
              </div>
              <div className="flex items-start">
                <Activity className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Real-time signal processing</p>
              </div>
            </div>
          </div>

          {/* Advanced Analytics */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Advanced Analytics</h3>
                <p className="text-sm text-gray-600">AI-Powered Analysis</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <Brain className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Deep learning algorithms for pattern recognition</p>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">6-12 minute comprehensive analysis</p>
              </div>
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">Validated through clinical trials</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-600 mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sensor System */}
            <div className="p-6 border border-blue-100 rounded-lg">
              <h4 className="font-semibold mb-4">Sensor System</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>5 high-precision thermal sensors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Multi-point data collection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Automatic calibration system</span>
                </li>
              </ul>
            </div>

            {/* Analysis Engine */}
            <div className="p-6 border border-blue-100 rounded-lg">
              <h4 className="font-semibold mb-4">Analysis Engine</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>136+ health parameters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Real-time risk assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Adaptive learning algorithms</span>
                </li>
              </ul>
            </div>

            {/* Output Metrics */}
            <div className="p-6 border border-blue-100 rounded-lg">
              <h4 className="font-semibold mb-4">Output Metrics</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Comprehensive health reports</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Real-time analysis results</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span>Trend analysis and alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnesaTechnology;