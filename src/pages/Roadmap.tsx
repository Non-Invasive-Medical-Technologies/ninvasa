import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Milestone, Target, Rocket, Flag } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      phase: "Q2 2024",
      title: "Market Entry",
      description: "Launch in UAE healthcare market",
      status: "In Progress",
      icon: Rocket,
    },
    {
      phase: "Q3 2024",
      title: "Platform Enhancement",
      description: "Integration of advanced AI diagnostics",
      status: "Planned",
      icon: Target,
    },
    {
      phase: "Q4 2024",
      title: "Market Expansion",
      description: "Entry into Saudi Arabia and Qatar markets",
      status: "Planned",
      icon: Flag,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Technology Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our strategic vision for advancing healthcare diagnostics through innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <milestone.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{milestone.phase}</h3>
                    <p className="text-sm text-gray-500">{milestone.title}</p>
                  </div>
                  <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
                    milestone.status === "In Progress" 
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    {milestone.status}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;