import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Cloud, Search, ArrowRight } from "lucide-react";

const Portfolio = () => {
  // ... keep existing code (component structure and imports)

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Product Portfolio</h1>
        <p className="text-xl text-medical-600 max-w-2xl mx-auto">
          Advanced non-invasive diagnostic solutions for modern healthcare, developed by our expert team led by Dr. Mykola Pulavskyi and Dr. Ahmad Al-Rashid
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {/* ANESA Product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-medical-50">
              <CardTitle className="text-3xl">ANESA</CardTitle>
              <CardDescription className="text-lg">
                Automated Non-Invasive Express Screening Analyser For fast and efficient diagnostics
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Analysis</h3>
                    <p className="text-gray-600">
                      Determines 136 health parameters, estimating the state of organs and body systems
                      and identifying signs of pathologies and health threats. All within 6-12 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Search className="w-6 h-6 text-medical-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Efficient Decision-Making</h3>
                    <p className="text-gray-600">
                      ANESA allows medical professionals to easily monitor their patients' health
                      parameters on a regular basis. The device runs on deep learning algorithms,
                      which allow it to identify the signs of pathologies and health threats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-medical-600 mt-1">🌱</div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Savings & Environmental Protection</h3>
                    <p className="text-gray-600">
                      Noninvasive technologies are considered eco-friendly, as no plastic containers
                      or bags are needed for data collection. ANESA does not require any additional
                      chemical reagents, special substances, or consumables, optimizing healthcare budgets.
                    </p>
                  </div>
                </div>

                <Link
                  to="/anesa"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Learn More About ANESA <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* KOLIBRI Product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-medical-50">
              <CardTitle className="text-3xl">KOLIBRI®</CardTitle>
              <CardDescription className="text-lg">
                Advanced Heart Activity Signal Processing Technology
              </CardDescription>
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

                <Link
                  to="/kolibri"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  Learn More About KOLIBRI <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
