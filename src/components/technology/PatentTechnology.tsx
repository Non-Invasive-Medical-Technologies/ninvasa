import { Shield, Medal, Lightbulb, Waves, Heart, Brain, Activity, Zap } from 'lucide-react';

const PatentTechnology = () => {
  return (
    <div className="w-full space-y-8">
      {/* Patent Portfolio Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Protected Innovation Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Ukrainian Patent */}
          <div className="p-6 bg-medical-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-medical-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">Ukrainian Patent No. 60890</h3>
                <p className="text-sm text-gray-600">Registered June 25, 2011</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">Non-invasive determination of homeostasis parameters</p>
              <div className="flex items-start space-x-2">
                <Waves className="w-5 h-5 text-medical-500 mt-1" />
                <p className="text-sm">Malykhin-Pulavskyi method for advanced biosignal analysis</p>
              </div>
            </div>
          </div>

          {/* US Patent */}
          <div className="p-6 bg-medical-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-medical-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">US Patent 10,531,836 B2</h3>
                <p className="text-sm text-gray-600">Granted Jan. 14, 2020</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">Signal decomposition and analysis system</p>
              <div className="flex items-start space-x-2">
                <Activity className="w-5 h-5 text-medical-500 mt-1" />
                <p className="text-sm">Advanced ECG signal processing and analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-medical-600 mb-6">Core Technology Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-medical-100 rounded-lg">
              <Brain className="w-8 h-8 text-medical-600 mb-3" />
              <h4 className="font-semibold mb-2">AI-Powered Analytics</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>Deep learning algorithms for signal processing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>Pattern recognition and anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>Real-time health risk assessment</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-medical-100 rounded-lg">
              <Heart className="w-8 h-8 text-medical-600 mb-3" />
              <h4 className="font-semibold mb-2">Non-Invasive Precision</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>136+ health parameters measured</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>High-accuracy temperature sensors (0.07°C)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>Comprehensive biometric analysis</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-medical-100 rounded-lg">
              <Zap className="w-8 h-8 text-medical-600 mb-3" />
              <h4 className="font-semibold mb-2">Rapid Assessment</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>6-12 minute diagnostic time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>Real-time data processing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-2"></div>
                  <span>Immediate health insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Patent Applications */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-medical-600 mb-6">Clinical Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-medical-50 to-white p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Diagnostic Capabilities</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Cardiovascular health monitoring</span>
                </li>
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Blood parameter analysis</span>
                </li>
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Metabolic assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-medical-50 to-white p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Healthcare Settings</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Medal className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Primary care facilities</span>
                </li>
                <li className="flex items-center">
                  <Medal className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Specialized clinics</span>
                </li>
                <li className="flex items-center">
                  <Medal className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Remote monitoring solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentTechnology;