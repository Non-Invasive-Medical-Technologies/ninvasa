import { motion } from "framer-motion";
import { Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  return (
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
  );
};

export default Certifications;