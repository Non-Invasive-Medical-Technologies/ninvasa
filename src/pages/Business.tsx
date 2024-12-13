import { motion } from "framer-motion";
import StrategicPartnership from "@/components/business/StrategicPartnership";

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
        <StrategicPartnership />
      </motion.div>
    </div>
  );
};

export default Business;