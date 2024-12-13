import { motion } from "framer-motion";
import BusinessModelSection from "@/components/business/BusinessModelSection";
import ROICalculator from "@/components/business/ROICalculator";

const Strategy = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-medical-800 mb-12 text-center">
          Business Strategy
        </h1>
        <div className="space-y-12">
          <BusinessModelSection />
          <ROICalculator />
        </div>
      </motion.div>
    </div>
  );
};

export default Strategy;