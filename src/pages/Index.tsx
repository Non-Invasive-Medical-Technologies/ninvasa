import { motion } from "framer-motion";
import EnhancedPitchDeck from "@/components/business/EnhancedPitchDeck";
import PatentTechnologySection from "@/components/business/PatentTechnologySection";

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
          <EnhancedPitchDeck />
          <PatentTechnologySection />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;