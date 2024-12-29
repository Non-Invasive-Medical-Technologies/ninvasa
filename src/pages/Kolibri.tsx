import { motion } from "framer-motion";
import KolibriPlatform from "@/components/kolibri/KolibriPlatform";
import KolibriTechnology from "@/components/kolibri/KolibriTechnology";
import { Link } from "react-router-dom";

const Kolibri = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-8">KOLIBRI System</h1>
          <Link 
            to="/kolibri/onepager" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View One Pager
          </Link>
        </div>
        <KolibriTechnology />
        <KolibriPlatform />
      </motion.div>
    </div>
  );
};

export default Kolibri;