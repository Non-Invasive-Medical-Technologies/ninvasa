import { motion } from "framer-motion";

const TechnologyHero = () => {
  return (
    <div className="relative bg-medical-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Medical Technology
          </h1>
          <p className="text-xl text-medical-100">
            Pioneering non-invasive diagnostic solutions through innovative technology and research
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyHero;