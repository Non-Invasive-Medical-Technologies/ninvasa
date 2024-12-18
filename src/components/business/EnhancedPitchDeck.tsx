import React from 'react';
import { Heart, Brain, Clock, Award, Globe, TrendingUp, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedPitchDeck = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8"
    >
      {/* Cover Slide */}
      <div className="bg-gradient-to-r from-medical-600 to-medical-800 text-white p-8 rounded-lg">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Pioneering the Future of Healthcare</h1>
          <p className="text-xl">Non-Invasive Medical Technologies</p>
          <div className="flex justify-center space-x-8 pt-8">
            <img src="/lovable-uploads/1a8e3902-3961-4b94-ac4d-30ae486e8d1d.png" alt="BL Medica Logo" className="h-16" />
            <img src="/lovable-uploads/d1e24c32-9340-4528-8f24-f221be5a95a3.png" alt="Biopromin Logo" className="h-16" />
          </div>
        </div>
      </div>

      {/* Revolutionary Technology Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Revolutionary Diagnostics Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-medical-50 rounded-lg">
            <Heart className="text-medical-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Non-invasive Testing</h3>
            <p className="text-gray-600">Complete elimination of blood draws and invasive procedures</p>
            <div className="mt-4">
              <div className="flex justify-between">
                <span>Patient Comfort</span>
                <span className="text-green-500">98%</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-medical-50 rounded-lg">
            <Brain className="text-medical-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analytics</h3>
            <p className="text-gray-600">Advanced machine learning for accurate diagnostics</p>
            <div className="mt-4">
              <div className="flex justify-between">
                <span>Accuracy</span>
                <span className="text-green-500">99.9%</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-medical-50 rounded-lg">
            <Clock className="text-medical-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Rapid Results</h3>
            <p className="text-gray-600">Immediate diagnostic insights</p>
            <div className="mt-4">
              <div className="flex justify-between">
                <span>Time Saved</span>
                <span className="text-green-500">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Portfolio */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Comprehensive Product Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ANESA */}
          <div className="p-6 border border-medical-100 rounded-lg">
            <h3 className="text-xl font-semibold text-medical-600 mb-4">ANESA</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Award className="w-5 h-5 text-medical-500 mr-2" />
                <span>136+ health parameters</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-medical-500 mr-2" />
                <span>6-12 minute screening</span>
              </li>
            </ul>
          </div>

          {/* KOLIBRI */}
          <div className="p-6 border border-medical-100 rounded-lg">
            <h3 className="text-xl font-semibold text-medical-600 mb-4">KOLIBRI</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Heart className="w-5 h-5 text-medical-500 mr-2" />
                <span>40+ blood and ECG parameters</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-medical-500 mr-2" />
                <span>2-5 minute analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Market Opportunity</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <Globe className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-600">$50B</div>
            <div className="text-sm text-gray-600">Total TAM</div>
          </div>
          
          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-600">22%</div>
            <div className="text-sm text-gray-600">CAGR</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <Target className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-600">30K+</div>
            <div className="text-sm text-gray-600">Target Users</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg text-center">
            <Shield className="w-8 h-8 text-medical-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-medical-600">15%</div>
            <div className="text-sm text-gray-600">Market Share</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedPitchDeck;