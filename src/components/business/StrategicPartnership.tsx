import React from 'react';
import { Award, Shield, Zap, Clock, Users, Heart, Brain, Cpu } from 'lucide-react';

const StrategicPartnership = () => {
  return (
    <div className="w-full space-y-8">
      {/* BioPromin Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-medical-600">Strategic Partnership: BioPromin</h2>
          <span className="text-gray-500">Est. 2000</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-medical-600">Industry Leadership</h3>
            <div className="flex items-start space-x-3">
              <Award className="w-6 h-6 text-medical-500 mt-1" />
              <div>
                <p className="font-semibold">19+ Years of Innovation</p>
                <p className="text-gray-600">Pioneering non-invasive medical devices and diagnostics</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-medical-500 mt-1" />
              <div>
                <p className="font-semibold">Global Presence</p>
                <p className="text-gray-600">Active in European Union, Eastern Europe, Latin America, and China</p>
              </div>
            </div>
          </div>

          <div className="bg-medical-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-medical-600 mb-4">Core Competencies</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                <span>Non-invasive diagnostic technology</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                <span>AI-powered analysis systems</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                <span>Medical hardware expertise</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                <span>Advanced software development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Patents and IP Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg">
            <Brain className="w-8 h-8 text-medical-600 mb-2" />
            <h4 className="font-semibold">Intellectual Property</h4>
            <p className="text-sm text-gray-600">Extensive patent portfolio in medical diagnostics</p>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg">
            <Cpu className="w-8 h-8 text-medical-600 mb-2" />
            <h4 className="font-semibold">R&D Excellence</h4>
            <p className="text-sm text-gray-600">Continuous innovation in healthcare technology</p>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg">
            <Users className="w-8 h-8 text-medical-600 mb-2" />
            <h4 className="font-semibold">Market Impact</h4>
            <p className="text-sm text-gray-600">Transforming healthcare delivery globally</p>
          </div>
        </div>
      </div>

      {/* ANESA Technology Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">ANESA Technology Platform</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-medical-600 mb-4">Revolutionary Diagnostics</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">136+ Health Parameters</p>
                  <p className="text-gray-600">Comprehensive health analysis in single screening</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">Rapid Analysis</p>
                  <p className="text-gray-600">Complete screening in 6-12 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">AI-Powered Analysis</p>
                  <p className="text-gray-600">Deep learning algorithms for accurate diagnostics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-medical-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-medical-600 mb-4">Patent Advantages</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">Protected Technology</p>
                  <p className="text-sm text-gray-600">Patented non-invasive screening methodology</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">Unique Algorithms</p>
                  <p className="text-sm text-gray-600">Proprietary AI analysis systems</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* KOLIBRI Technology Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">KOLIBRI: Democratizing Healthcare</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-medical-600 mb-4">Home Health Innovation</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">40+ Health Parameters</p>
                  <p className="text-gray-600">Comprehensive home health monitoring</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">Real-Time Analysis</p>
                  <p className="text-gray-600">Instant health insights and alerts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <p className="font-semibold">Remote Monitoring</p>
                  <p className="text-gray-600">Connected healthcare ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-medical-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-medical-600 mb-4">Market Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                <span>Remote patient monitoring capabilities</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                <span>Cloud-based health data management</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                <span>Preventive healthcare focus</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                <span>Easy integration with healthcare systems</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg text-center">
            <Users className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-medical-600">Patient-Centric</div>
            <div className="text-sm text-gray-600">Designed for home use</div>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg text-center">
            <Shield className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-medical-600">Secure</div>
            <div className="text-sm text-gray-600">Protected health data</div>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg text-center">
            <Zap className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-medical-600">Fast</div>
            <div className="text-sm text-gray-600">2-5 minute analysis</div>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-medical-50 to-white rounded-lg text-center">
            <Heart className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-medical-600">Comprehensive</div>
            <div className="text-sm text-gray-600">40+ parameters</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPartnership;