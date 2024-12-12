import { motion } from "framer-motion";
import { Brain, Heart, Globe } from "lucide-react";

const Partnership = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-bold text-medical-800 mb-6">
        BL+ Medica: Authorized Reseller and Strategic Investor
      </h2>
      
      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <Brain className="w-6 h-6 text-medical-600 mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-semibold">Exclusive Middle East Distributor</span> for ANESA
          </p>
        </li>
        <li className="flex items-start gap-3">
          <Heart className="w-6 h-6 text-medical-600 mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-semibold">Investment in Innovation</span> – Bringing AI-powered diagnostics globally
          </p>
        </li>
        <li className="flex items-start gap-3">
          <Globe className="w-6 h-6 text-medical-600 mt-1 flex-shrink-0" />
          <p className="text-gray-700">
            <span className="font-semibold">Trusted by Healthcare Providers</span> worldwide
          </p>
        </li>
      </ul>

      <div className="bg-medical-50 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-medical-800 mb-4">Our Shared Vision:</h3>
        <p className="text-lg text-medical-600">
          Equipping Middle Eastern healthcare institutions with <span className="font-semibold">state-of-the-art diagnostic technology</span> for enhanced patient care.
        </p>
      </div>
    </motion.div>
  );
};

export default Partnership;