import { motion } from "framer-motion";
import { ArrowRight, Microscope, Brain, Heart, Activity, Thermometer, Clock, Shield, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Technology = () => {
  const technologies = [
    {
      icon: <Thermometer className="w-8 h-8 text-medical-600" />,
      title: "High-Precision Sensors",
      description: "Five digital thermal microprocessors measure temperature at specific biologically active points with accuracy up to 0.07°C, providing precise diagnostic data.",
    },
    {
      icon: <Brain className="w-8 h-8 text-medical-600" />,
      title: "Advanced Software Processing",
      description: "The USPIH software combines sensor data with patient metrics to generate comprehensive health analysis using the patented Malykhin-Pulavskyi method.",
    },
    {
      icon: <Shield className="w-8 h-8 text-medical-600" />,
      title: "Non-Invasive Technology",
      description: "Safe and comfortable diagnostics without needles or invasive procedures, making it ideal for regular health monitoring and screening.",
    },
    {
      icon: <Target className="w-8 h-8 text-medical-600" />,
      title: "Comprehensive Analysis",
      description: "Processes over 100 health parameters to provide detailed insights into patient health status and potential areas requiring attention.",
    },
  ];

  const applications = [
    {
      title: "Hospital Admission",
      description: "Rapid initial health assessment for emergency departments and admission units"
    },
    {
      title: "Private Clinics",
      description: "Comprehensive screening for general practitioners and family doctors"
    },
    {
      title: "Rehabilitation Centers",
      description: "Monitor treatment effectiveness and recovery progress"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-medical-50/30">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-4 text-medical-600 bg-medical-100 rounded-full text-sm font-medium">
              ANESA® Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
              Advanced Non-Invasive Diagnostics
            </h1>
            <p className="text-lg text-medical-600 mb-8">
              ANESA® combines precision temperature sensing with sophisticated software analysis to provide comprehensive health screening and monitoring capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-medical-50/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-medical-900 mb-4">How It Works</h2>
            <p className="text-medical-600 max-w-2xl mx-auto">
              The ANESA® system measures thermodynamic values at specific body points, combining this data with patient metrics and environmental factors for comprehensive health analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-50 p-3 rounded-lg">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-medical-900 mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-medical-600">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-medical-600 to-medical-700 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Healthcare Applications
              </h2>
              <p className="text-medical-50 max-w-2xl mx-auto">
                ANESA® is designed for versatile use across various healthcare settings, providing valuable diagnostic insights for medical professionals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.2) }}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                  <p className="text-medical-50">{app.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;