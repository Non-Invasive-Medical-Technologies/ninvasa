import { motion } from "framer-motion";
import { Award, Globe, Brain, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-medical-800 mb-4">
            About Us / Our Mission
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-medical-600 mb-8">
            Pioneering the Future of Healthcare with Non-Invasive Diagnostics
          </h2>
        </div>

        {/* Main Content */}
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
            With nearly two decades of expertise, we're committed to delivering innovative healthcare solutions that enhance patient outcomes, accelerate diagnostics, and reduce costs. Our technology is embraced by hospitals, clinics, and wellness centers across <span className="font-semibold text-medical-700">Europe, Asia, the Americas</span>, and beyond.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            At the heart of BL+Medica ANESA lies our dedication to <span className="font-semibold text-medical-700">artificial intelligence</span> and <span className="font-semibold text-medical-700">machine learning</span>, ensuring our products continually evolve to meet the ever-changing demands of modern healthcare.
          </motion.p>
        </div>

        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-medical-50 p-8 rounded-lg mb-16"
        >
          <h2 className="text-2xl font-bold text-medical-800 mb-4">Our Vision:</h2>
          <p className="text-xl text-medical-600 italic">
            To make healthcare diagnostics faster, safer, and more accessible worldwide.
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-medical-600" />
            <h2 className="text-2xl font-bold text-medical-800">
              Our Certifications and Achievements:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-medical-700 mb-2">Quality Certified</h3>
                    <p className="text-gray-600">ISO 13485:2016 Certified, meeting the highest quality management standards for medical devices.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-medical-700 mb-2">Global Recognition</h3>
                    <p className="text-gray-600">CE Marked and approved by healthcare authorities in Ukraine, China, Russia, and Kazakhstan.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* BL+ Medica Reseller Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-medical-800 mb-6">
            BL+ Medica: Authorized Reseller and Strategic Investor in BioPromin
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            <span className="font-semibold text-medical-700">BL+ Medica</span> proudly serves as the authorized reseller of <span className="font-semibold text-medical-700">ANESA</span> in the Middle East, introducing cutting-edge diagnostic technology to healthcare providers across the region. As an official partner and investor in <span className="font-semibold text-medical-700">BioPromin</span>, BL+ Medica is devoted to advancing non-invasive healthcare solutions that benefit both patients and healthcare systems.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mb-6">
            Why Partner with BL+ Medica?
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-medical-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Exclusive Middle East Distributor & Managed Service Provider</span> for ANESA.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-medical-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Investment in Innovation</span> – BL+ Medica champions ANESA's mission to bring AI-powered healthcare diagnostics to a global audience.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-medical-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Trusted by Healthcare Providers</span> – BL+ Medica has forged strong partnerships with leading health policy makers, health departments, hospitals and clinics throughout the world.
              </p>
            </li>
          </ul>

          <div className="bg-medical-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-medical-800 mb-4">Our Shared Vision:</h3>
            <p className="text-lg text-medical-600">
              In collaboration with BioPromin, we aim to equip Middle Eastern healthcare institutions with <span className="font-semibold">state-of-the-art diagnostic technology</span> that enhances patient care, shortens diagnosis time, and optimizes healthcare costs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;