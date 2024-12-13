import { motion } from "framer-motion";
import { Building2, Users, Factory, Lightbulb, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BioPromin = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-medical-800 mb-4">BioPromin</h1>
          <p className="text-medical-600 text-lg">D-U-N-S Number: 53-829-7402</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-700 mb-12"
        >
          <p className="leading-relaxed mb-6">
            BioPromin is a cutting-edge organization dedicated to the research, development, and enhancement of innovative medical equipment and software solutions. As a proud subsidiary of SCKOLLIBRI LLC and a member of the esteemed BIOPROMIN LTD family, we focus on providing comprehensive services that integrate advanced artificial intelligence technologies deeply into our products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-medical-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-medical-600" />
                Manufacturing Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our strategy involves specialized outsourcing, leveraging the best industry resources to maintain high standards of quality and efficiency in medical solution development.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-medical-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-medical-600" />
                Production Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Annual support and manufacturing capacity:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>15,000 ANESA units</li>
                <li>15,000 BIOL units</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-medical-50 p-8 rounded-lg mb-12"
        >
          <div className="flex items-start gap-4">
            <Lightbulb className="h-6 w-6 text-medical-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-medical-800 mb-3">KOLIBRI Enhancement Initiative</h2>
              <p className="text-gray-700">
                We are currently enhancing the KOLIBRI device through modernized software and re-engineered design. Following these improvements and additional investments, we project an increased manufacturing capacity of up to 500,000 KOLIBRI units annually.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 text-center bg-gradient-to-r from-medical-50 to-medical-100 p-8 rounded-lg"
        >
          <div>
            <BarChart3 className="h-8 w-8 text-medical-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-medical-800 mb-2">Our Commitment</h2>
            <p className="text-gray-700">
              BioPromin's commitment to innovation, quality, and service excellence positions us as a trusted partner in the healthcare sector. We are focused on improving patient outcomes through our advanced technological solutions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BioPromin;