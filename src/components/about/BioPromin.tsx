import { motion } from "framer-motion";

const BioPromin = () => {
  return (
    <div className="space-y-8 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-medical-50 p-8 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-medical-800 mb-6">BioPromin</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          BioPromin is our trusted technology partner and the innovative force behind our non-invasive diagnostic solutions. With over 20 years of research and development experience, BioPromin has established itself as a pioneer in medical technology.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Their expertise in developing cutting-edge diagnostic tools has led to breakthrough products like ANESA and KOLIBRI, which are transforming healthcare delivery worldwide.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-medical-700 mb-4">Research & Development</h2>
          <p className="text-gray-600">
            BioPromin's dedicated R&D team continues to push the boundaries of non-invasive diagnostics, focusing on innovative solutions that improve patient care and clinical outcomes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-medical-700 mb-4">Global Impact</h2>
          <p className="text-gray-600">
            Through strategic partnerships like ours, BioPromin's technologies are making healthcare more accessible and efficient across multiple continents.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BioPromin;