import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, TrendingUp, Download } from "lucide-react";
import StrategicPartnership from "@/components/business/StrategicPartnership";
import SWOTAnalysis from "@/components/business/SWOTAnalysis";
import GCCMarketAnalysis from "@/components/business/GCCMarketAnalysis";
import ClinicalApplications from "@/components/technology/ClinicalApplications";

const Business = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-medical-800 mb-12 text-center">
          Business Overview
        </h1>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-medical-600">Investment</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-medical-500 mt-1" />
                  <div>
                    <p className="font-semibold">Investment Opportunities</p>
                    <p className="text-gray-600">Explore investment details and growth potential</p>
                  </div>
                </div>
                <Link
                  to="/investment"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  View Investment Details <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-medical-600">Strategy</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-medical-500 mt-1" />
                  <div>
                    <p className="font-semibold">Business Strategy</p>
                    <p className="text-gray-600">Learn about our market approach and growth plans</p>
                  </div>
                </div>
                <Link
                  to="/strategy"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Explore Strategy <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-medical-600">Business Plan</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Download className="w-6 h-6 text-medical-500 mt-1" />
                  <div>
                    <p className="font-semibold">Detailed Business Plan</p>
                    <p className="text-gray-600">Download our comprehensive business plan</p>
                  </div>
                </div>
                <Link
                  to="/download"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Download Business Plan <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <StrategicPartnership />
          <SWOTAnalysis />
          <GCCMarketAnalysis />
          <ClinicalApplications />
        </div>
      </motion.div>
    </div>
  );
};

export default Business;