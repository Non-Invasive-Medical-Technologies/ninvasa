import { motion } from "framer-motion";
import { ArrowRight, Activity, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-50 to-medical-100/50 z-0" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 mb-4 text-medical-600 bg-medical-50 rounded-full text-sm font-medium">
              Advancing Healthcare in MENA
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-medical-900 mb-6">
              Non-Invasive Medical
              <br />
              Technologies
            </h1>
            <p className="text-lg md:text-xl text-medical-600 max-w-2xl mx-auto mb-8">
              Partnering with BioPromin to revolutionize healthcare diagnostics
              across the Middle East through innovative non-invasive solutions.
            </p>
            <Link
              to="/investment"
              className="inline-flex items-center px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
            >
              Investment Opportunity
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl bg-medical-50"
            >
              <Activity className="h-12 w-12 text-medical-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Diagnostics</h3>
              <p className="text-medical-600">
                State-of-the-art non-invasive screening technologies for accurate
                health assessments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-medical-50"
            >
              <Shield className="h-12 w-12 text-medical-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient-Centric Care</h3>
              <p className="text-medical-600">
                Comfortable and stress-free diagnostic procedures prioritizing
                patient experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl bg-medical-50"
            >
              <Target className="h-12 w-12 text-medical-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Expansion</h3>
              <p className="text-medical-600">
                Strategic growth plans targeting key markets across the MENA
                region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-lg text-medical-100 max-w-2xl mx-auto mb-8">
              Explore our comprehensive business plan and investment opportunities
              in the growing medical technology sector.
            </p>
            <Link
              to="/download"
              className="inline-flex items-center px-6 py-3 bg-white text-medical-900 rounded-lg hover:bg-medical-50 transition-colors"
            >
              Download Business Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;