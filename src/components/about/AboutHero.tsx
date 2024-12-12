import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-medical-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-medical-800 mb-6">
            About Us / Our Mission
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-medical-600 mb-8">
            Pioneering the Future of Healthcare with Non-Invasive Diagnostics
          </h2>
          <div className="w-24 h-1 bg-medical-500 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;