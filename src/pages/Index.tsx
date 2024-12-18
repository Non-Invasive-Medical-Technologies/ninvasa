import { motion } from "framer-motion";
import IntroComponent from "@/components/business/IntroComponent";
import PatentTechnologySection from "@/components/business/PatentTechnologySection";
import SWOTAnalysis from "@/components/business/SWOTAnalysis";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <IntroComponent />
          <PatentTechnologySection />
          <SWOTAnalysis />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;