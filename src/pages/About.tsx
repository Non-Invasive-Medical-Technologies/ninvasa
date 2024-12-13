import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
        
        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-6 bg-medical-50 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-medical-800 mb-4">Learn More About Our Partners</h2>
          <Link 
            to="/about/biopromin"
            className="inline-flex items-center text-medical-600 hover:text-medical-700 font-medium"
          >
            Discover BioPromin <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;