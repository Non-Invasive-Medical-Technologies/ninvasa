import React from 'react';
import { TrendingUp, AlertTriangle, Sun, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const SWOTAnalysis = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Strategic SWOT Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="p-6 bg-medical-50 rounded-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-medical-600 mr-2" />
              <h3 className="text-xl font-semibold text-medical-700">Strengths</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Patented Technology</span>
                  <p className="text-sm text-gray-600">Unique ANESA platform with AI capabilities</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Non-invasive Solution</span>
                  <p className="text-sm text-gray-600">Superior patient experience</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Rapid Results</span>
                  <p className="text-sm text-gray-600">6-12 minute comprehensive analysis</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Cost-Effective</span>
                  <p className="text-sm text-gray-600">60% reduction in diagnostic costs</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="p-6 bg-yellow-50 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-semibold text-yellow-700">Weaknesses</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Market Awareness</span>
                  <p className="text-sm text-gray-600">New technology requiring education</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Regional Coverage</span>
                  <p className="text-sm text-gray-600">Limited current market presence</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Resource Intensity</span>
                  <p className="text-sm text-gray-600">High initial setup requirements</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="p-6 bg-medical-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Sun className="w-6 h-6 text-medical-600 mr-2" />
              <h3 className="text-xl font-semibold text-medical-700">Opportunities</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">GCC Healthcare Growth</span>
                  <p className="text-sm text-gray-600">25.2% annual market growth rate</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Digital Transformation</span>
                  <p className="text-sm text-gray-600">Rising adoption of healthcare tech</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Preventive Healthcare</span>
                  <p className="text-sm text-gray-600">Increasing focus on early detection</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-medical-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Government Support</span>
                  <p className="text-sm text-gray-600">Healthcare innovation initiatives</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Threats */}
          <div className="p-6 bg-red-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold text-red-700">Threats</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Market Competition</span>
                  <p className="text-sm text-gray-600">Emerging diagnostic technologies</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Regulatory Changes</span>
                  <p className="text-sm text-gray-600">Evolving healthcare compliance</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Economic Factors</span>
                  <p className="text-sm text-gray-600">Healthcare budget constraints</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></div>
                <div>
                  <span className="font-semibold">Technology Adoption</span>
                  <p className="text-sm text-gray-600">Resistance to change in healthcare</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SWOTAnalysis;