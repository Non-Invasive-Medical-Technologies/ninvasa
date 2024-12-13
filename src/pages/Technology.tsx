import { motion } from "framer-motion";
import PatentTechnology from "@/components/technology/PatentTechnology";

const Technology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-medical-50/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-4 text-medical-600 bg-medical-100 rounded-full text-sm font-medium">
              ANESA® Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
              Advanced Non-Invasive Diagnostics
            </h1>
            <p className="text-lg text-medical-600 mb-8">
              ANESA® combines precision temperature sensing with sophisticated software analysis to provide comprehensive health screening and monitoring capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Patent Technology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <PatentTechnology />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;