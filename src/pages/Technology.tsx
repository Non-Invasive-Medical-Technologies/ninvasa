import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, Activity, Brain, Shield } from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Technology</h1>
          <p className="text-xl text-medical-600 max-w-2xl mx-auto">
            Pioneering non-invasive diagnostic solutions through advanced signal processing and AI, 
            developed under the leadership of Dr. Mykola Pulavskyi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-medical-600">Test Parameters</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Activity className="w-6 h-6 text-medical-500 mt-1" />
                  <div>
                    <p className="font-semibold">Comprehensive Analysis</p>
                    <p className="text-gray-600">Explore our extensive range of diagnostic parameters</p>
                  </div>
                </div>
                <Link
                  to="/parameters"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  View Test Parameters <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-medical-600">Core Technologies</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-medical-500 mt-1" />
                  <div>
                    <p className="font-semibold">AI & Machine Learning</p>
                    <p className="text-gray-600">Advanced algorithms for accurate diagnostics</p>
                  </div>
                </div>
                <Link
                  to="/technology/overview"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Explore Technologies <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-600 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <Brain className="w-12 h-12 text-medical-600 mb-4" />
                    <h4 className="font-semibold mb-2">AI-Powered Analysis</h4>
                    <p className="text-gray-600">Deep learning algorithms for accurate diagnostics</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Activity className="w-12 h-12 text-medical-600 mb-4" />
                    <h4 className="font-semibold mb-2">Real-time Processing</h4>
                    <p className="text-gray-600">Instant health parameter analysis</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Shield className="w-12 h-12 text-medical-600 mb-4" />
                    <h4 className="font-semibold mb-2">Secure Platform</h4>
                    <p className="text-gray-600">Protected health data management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technology;