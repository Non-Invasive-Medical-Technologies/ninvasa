import { motion } from "framer-motion";
import { Activity, Brain, Shield } from "lucide-react";

const TechnologyOverview = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 rounded-xl bg-medical-50">
            <Brain className="h-12 w-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-medical-600">
              Advanced algorithms process biosignals to provide accurate health assessments
            </p>
          </div>

          <div className="p-6 rounded-xl bg-medical-50">
            <Activity className="h-12 w-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-medical-600">
              Continuous health parameter tracking with immediate results
            </p>
          </div>

          <div className="p-6 rounded-xl bg-medical-50">
            <Shield className="h-12 w-12 text-medical-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
            <p className="text-medical-600">
              Meeting international standards for medical device safety and accuracy
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyOverview;