import { motion } from "framer-motion";
import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyOverview from "@/components/technology/TechnologyOverview";
import PatentTechnology from "@/components/technology/PatentTechnology";

const Technology = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <TechnologyHero />
      <TechnologyOverview />
      <PatentTechnology />
    </motion.div>
  );
};

export default Technology;