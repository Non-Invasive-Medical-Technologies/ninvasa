import { motion } from "framer-motion";
import { Activity, Brain, Shield, Heart, Clock } from "lucide-react";

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
          <h1 className="text-4xl font-bold text-medical-600">ANESA</h1>
          <p className="text-xl text-gray-600">Advanced Non-Invasive Express Screening Analyser</p>
        </div>

        {/* Hero Image */}
        <div className="aspect-video bg-medical-50 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="ANESA Device"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg">
            <Brain className="w-12 h-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Advanced algorithms process biosignals to provide comprehensive health assessments
            </p>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <Activity className="w-12 h-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">136+ Parameters</h3>
            <p className="text-gray-600">
              Comprehensive analysis of vital health indicators in 6-12 minutes
            </p>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <Shield className="w-12 h-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clinical Validation</h3>
            <p className="text-gray-600">
              Validated through extensive clinical trials with high accuracy
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-medical-600 mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Analysis Time</h3>
                  <p className="text-gray-600">6-12 minutes per screening</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Activity className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Precision</h3>
                  <p className="text-gray-600">0.07°C temperature accuracy</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Parameters</h3>
                  <p className="text-gray-600">136+ health parameters measured</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Validation</h3>
                  <p className="text-gray-600">Clinically validated accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video bg-medical-50 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="ANESA Interface"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video bg-medical-50 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="ANESA in Use"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-medical-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-medical-600 mb-4">Learn More About ANESA</h2>
          <p className="text-gray-600 mb-6">
            Discover how ANESA can transform your healthcare practice
          </p>
          <button className="px-8 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors">
            Request Information
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AnesaOnePager;