import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Cloud } from "lucide-react";

const Kolibri = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">KOLIBRI®</h1>
        <p className="text-xl text-medical-600 max-w-2xl mx-auto">
          Advanced Heart Activity Signal Processing Technology
        </p>
      </motion.div>

      <Card className="overflow-hidden">
        <CardHeader className="bg-medical-50">
          <CardTitle className="text-3xl">Technology Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-medical-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Innovative Technology</h3>
                <p className="text-gray-600">
                  Based on processing heart activity signals, KOLIBRI® uses an autoregressive
                  linear prediction model to determine biochemical parameters
                  (Patent US 10,531,836 B2 date: Jan.14, 2020).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Cloud className="w-6 h-6 text-medical-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600">
                  Integrated into a cloud infrastructure for improved remote health monitoring,
                  KOLIBRI implements a full-featured real-time remote patient monitoring system,
                  bringing patients and doctors closer together for daily remote health monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 text-medical-600 mt-1">🔬</div>
              <div>
                <h3 className="font-semibold mb-2">Research and Development</h3>
                <p className="text-gray-600">
                  Ongoing research focuses on improving quality of life and identifying various
                  pathological conditions including diabetes, iron deficiency anaemia, chronic
                  heart failure, myocardial infarction, hypertension, chronic obstructive
                  pulmonary disease, dental status, and more.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Kolibri;