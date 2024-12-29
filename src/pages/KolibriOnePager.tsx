import { motion } from "framer-motion";
import { Heart, Brain, Cloud, Shield, Clock, Activity } from "lucide-react";

const KolibriOnePager = () => {
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
          <h1 className="text-4xl font-bold text-medical-600">KOLIBRI®</h1>
          <p className="text-xl text-gray-600">Smart Health Monitoring System</p>
        </div>

        {/* Hero Image */}
        <div className="aspect-video bg-medical-50 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="KOLIBRI Device"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg">
            <Heart className="w-12 h-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-600">
              Continuous health tracking with immediate insights
            </p>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <Cloud className="w-12 h-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-600">
              Secure cloud infrastructure for remote monitoring
            </p>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <Brain className="w-12 h-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Analytics</h3>
            <p className="text-gray-600">
              Advanced algorithms for predictive health insights
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
                  <p className="text-gray-600">2-5 minutes per screening</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Activity className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Parameters</h3>
                  <p className="text-gray-600">40+ health parameters measured</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Cloud className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Connectivity</h3>
                  <p className="text-gray-600">Cloud-based remote monitoring</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-medical-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Security</h3>
                  <p className="text-gray-600">HIPAA-compliant data protection</p>
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
              alt="KOLIBRI Interface"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video bg-medical-50 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="KOLIBRI in Use"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-medical-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-medical-600 mb-4">Learn More About KOLIBRI</h2>
          <p className="text-gray-600 mb-6">
            Experience the future of health monitoring
          </p>
          <button className="px-8 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors">
            Request Information
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default KolibriOnePager;