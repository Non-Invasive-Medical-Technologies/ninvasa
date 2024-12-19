import React from 'react';
import { 
  Heart, 
  Brain, 
  Clock, 
  Award, 
  Globe, 
  TrendingUp, 
  Target, 
  Shield, 
  Activity, 
  Cloud, 
  Cpu, 
  Zap, 
  Users 
} from 'lucide-react';

const PresentationDeck = () => {
  return (
    <div className="w-full space-y-8">
      {/* Cover Slide */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">Pioneering the Future of Healthcare</h1>
          <p className="text-xl">Non-Invasive Medical Technologies</p>
          <div className="flex justify-center items-center space-x-12 pt-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">ANESA</h2>
              <p className="text-sm opacity-80">Advanced Diagnostic Platform</p>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">KOLIBRI</h2>
              <p className="text-sm opacity-80">Smart Health Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Revolutionary Technology Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ANESA Overview */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-xl font-semibold">ANESA Platform</h3>
                <p className="text-sm text-gray-600">Advanced Diagnostic System</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Activity className="w-5 h-5 text-blue-500 mr-2" />
                <span>136+ health parameters</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span>6-12 minute analysis</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                <span>Patented technology</span>
              </li>
            </ul>
          </div>

          {/* KOLIBRI Overview */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-xl font-semibold">KOLIBRI Platform</h3>
                <p className="text-sm text-gray-600">Smart Monitoring System</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Activity className="w-5 h-5 text-blue-500 mr-2" />
                <span>40+ health parameters</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span>2-5 minute analysis</span>
              </li>
              <li className="flex items-center">
                <Cloud className="w-5 h-5 text-blue-500 mr-2" />
                <span>Cloud-based monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Comprehensive Healthcare Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
            <Shield className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Non-invasive Technology</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>No blood draws required</li>
              <li>Painless procedure</li>
              <li>Immediate results</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
            <Brain className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analytics</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Deep learning algorithms</li>
              <li>Real-time analysis</li>
              <li>Predictive diagnostics</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
            <Cloud className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Remote Monitoring</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>24/7 health tracking</li>
              <li>Secure data storage</li>
              <li>Healthcare integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Market Opportunity</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">$50B+</div>
            <div className="text-sm text-gray-600">Total TAM</div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">25.2%</div>
            <div className="text-sm text-gray-600">CAGR</div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">30K+</div>
            <div className="text-sm text-gray-600">Healthcare Facilities</div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">350M+</div>
            <div className="text-sm text-gray-600">Population Reach</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Transform Healthcare Delivery</h2>
          <p className="text-lg opacity-90">Join us in revolutionizing non-invasive diagnostics and monitoring</p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
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