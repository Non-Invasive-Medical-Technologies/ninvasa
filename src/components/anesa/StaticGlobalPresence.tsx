import { motion } from "framer-motion";

const StaticGlobalPresence = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Global Presence</h2>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <img 
          src="/lovable-uploads/f853533b-8710-42f8-8709-788ea59438ae.png" 
          alt="Global Presence Map"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Present in 15+ countries with ongoing expansion
      </div>
    </motion.div>
  );
};

export default StaticGlobalPresence;