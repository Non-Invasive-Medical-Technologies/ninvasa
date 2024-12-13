import { motion } from "framer-motion";
import KolibriPlatform from "@/components/kolibri/KolibriPlatform";

const Kolibri = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">KOLIBRI System</h1>
        <KolibriPlatform />
      </motion.div>
    </div>
  );
};

export default Kolibri;