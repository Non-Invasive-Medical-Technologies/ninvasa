import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className="space-y-8 mb-16">
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg leading-relaxed text-gray-700"
      >
        BL+Medica, in partnership with BioPromin, spearheads the development of cutting-edge, non-invasive diagnostic technologies. Our flagship product, <span className="font-semibold text-medical-700">ANESA</span>, empowers healthcare professionals with precise, data-driven insights into patient health—all without invasive procedures.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg leading-relaxed text-gray-700"
      >
        With nearly two decades of expertise, we're committed to delivering innovative healthcare solutions that enhance patient outcomes, accelerate diagnostics, and reduce costs.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-medical-50 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold text-medical-800 mb-4">Our Vision:</h2>
        <p className="text-xl text-medical-600 italic">
          To make healthcare diagnostics faster, safer, and more accessible worldwide.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutContent;