import { motion } from "framer-motion";
import { Activity, Brain, Shield, Heart, Clock, Thermometer, Stethoscope, Hospital, Activity as Pulse } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AnesaOnePager = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-teal-600">ANESA</h1>
          <p className="text-xl text-gray-600">Advanced Non-Invasive Express Screening Analyser</p>
        </div>

        {/* Overview Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Product Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ANESA® Medical Device is designed for noninvasive screening diagnostics, measuring thermodynamic values 
            on the skin's surface at specific points on the body. This advanced system processes data using USPIH software, 
            combining patient information with environmental factors for comprehensive health analysis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-teal-50 rounded-lg">
              <Thermometer className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="font-semibold mb-2">High Precision</h3>
              <p className="text-sm text-gray-600">Temperature measurement accuracy of 0.07ºС</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-lg">
              <Clock className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="font-semibold mb-2">Rapid Analysis</h3>
              <p className="text-sm text-gray-600">Quick and efficient screening process</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-lg">
              <Shield className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="font-semibold mb-2">Non-Invasive</h3>
              <p className="text-sm text-gray-600">Safe and comfortable diagnostic procedure</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Technical Specifications</h2>
          <div className="space-y-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Measurement System</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
                  <span>Five digital thermal microprocessors for precise temperature measurement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
                  <span>Measurement points: bifurcation of neck arteries, armpits, and umbilical area</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
                  <span>Built-in atmospheric pressure sensor</span>
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Data Processing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
                  <span>USPIH software for comprehensive data analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
                  <span>Integration of patient data: age, weight, heart rate, respiratory rate</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
                  <span>Patented calculation algorithm (Patent No. 60890, 39250, 3546 A61B5)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Clinical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Hospital className="w-8 h-8 text-teal-600" />
              <h3 className="font-semibold text-lg">Healthcare Settings</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Hospital admission departments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Private clinics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>General practitioner offices</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Rehabilitation centers</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Stethoscope className="w-8 h-8 text-teal-600" />
              <h3 className="font-semibold text-lg">Medical Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Preliminary health screening</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Treatment monitoring</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Rehabilitation progress tracking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Physiological procedure assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Usage */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Professional Usage</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A qualified medical professional can evaluate a patient's health and recommend further examinations based on:
          </p>
          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
              <span>Primary diagnostic report analysis</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
              <span>Patient's medical history and complaints</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></div>
              <span>Visible symptoms or signs</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The combination of ANESA with other diagnostic methods provides the most accurate assessment of patient health state.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-teal-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Learn More About ANESA</h2>
          <p className="text-gray-600 mb-6">
            Discover how ANESA can transform your healthcare practice
          </p>
          <button className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            Request Information
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AnesaOnePager;