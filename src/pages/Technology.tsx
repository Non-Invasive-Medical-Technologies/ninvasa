import { motion } from "framer-motion";
import { ArrowRight, Microscope, Brain, Heart, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const Technology = () => {
  const technologies = [
    {
      icon: <Microscope className="w-8 h-8 text-medical-600" />,
      title: "Non-Invasive Diagnostics",
      description: "Advanced screening technologies that provide accurate results without invasive procedures, ensuring patient comfort and rapid diagnosis.",
    },
    {
      icon: <Brain className="w-8 h-8 text-medical-600" />,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms that enhance diagnostic accuracy and provide real-time insights for healthcare professionals.",
    },
    {
      icon: <Heart className="w-8 h-8 text-medical-600" />,
      title: "Cardiovascular Monitoring",
      description: "Continuous monitoring solutions for early detection of cardiovascular conditions using cutting-edge sensors.",
    },
    {
      icon: <Activity className="w-8 h-8 text-medical-600" />,
      title: "Real-Time Health Metrics",
      description: "Instant access to vital health data through sophisticated monitoring systems and intuitive interfaces.",
    },
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
              Our Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6">
              Innovative Medical Solutions
            </h1>
            <p className="text-lg text-medical-600 mb-8">
              Leveraging cutting-edge technology to revolutionize healthcare diagnostics and patient care across the MENA region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-medical-600 to-medical-700 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-medical-50 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing medical diagnostics and improving patient outcomes across the Middle East and North Africa.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-medical-600 rounded-lg hover:bg-medical-50 transition-colors">
              Learn More About Investment
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;