import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Cloud, Search, ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Product Portfolio</h1>
        <p className="text-xl text-medical-600 max-w-2xl mx-auto">
          Discover our innovative non-invasive diagnostic solutions, developed by our expert team led by Dr. Mykola Pulavskyi
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {/* ANESA Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-medical-50">
              <CardTitle className="text-3xl">ANESA</CardTitle>
              <CardDescription className="text-lg">
                Advanced Non-Invasive Express Screening Analyser
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Analysis</h3>
                    <p className="text-gray-600">
                      Determines 136 health parameters within 6-12 minutes, providing detailed insights into organ systems and potential health risks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Search className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">AI-Powered Diagnostics</h3>
                    <p className="text-gray-600">
                      Advanced algorithms identify potential health issues early, enabling proactive healthcare management.
                    </p>
                  </div>
                </div>

                <Link
                  to="/anesa"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Explore ANESA Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* KOLIBRI Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-medical-50">
              <CardTitle className="text-3xl">KOLIBRI®</CardTitle>
              <CardDescription className="text-lg">
                Smart Health Monitoring System
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Real-Time Monitoring</h3>
                    <p className="text-gray-600">
                      Advanced heart activity signal processing for continuous health monitoring and early warning detection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Cloud className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Integration</h3>
                    <p className="text-gray-600">
                      Seamless cloud infrastructure enabling remote monitoring and real-time health insights.
                    </p>
                  </div>
                </div>

                <Link
                  to="/kolibri"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Discover KOLIBRI System <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;