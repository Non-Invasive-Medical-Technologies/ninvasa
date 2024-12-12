import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import Certifications from "@/components/about/Certifications";
import Partnership from "@/components/about/Partnership";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <AboutHero />
        <AboutContent />
        <Certifications />
        <Partnership />
      </motion.div>
    </div>
  );
};

export default About;