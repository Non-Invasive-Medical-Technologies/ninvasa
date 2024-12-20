import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import InteractiveTimeline from '@/components/technology/InteractiveTimeline';

const Roadmap = () => {
  const timelineItems = [
    {
      title: "Certify Bluetooth BLE compatible model",
      status: "completed" as const,
      date: "Completed",
    },
    {
      title: "Develop cross-platform software (Windows, macOS, iOS, Android)",
      status: "in-progress" as const,
      date: "Expected: April 2025",
    },
    {
      title: "Android tablet integration",
      status: "in-progress" as const,
      date: "March 2025",
    },
    {
      title: "Subscription-based software model",
      status: "completed" as const,
      date: "Completed",
    },
    {
      title: "EU laboratory testing & UAE certification",
      status: "in-progress" as const,
      date: "February 2025",
    },
    {
      title: "EU clinical trials",
      status: "in-progress" as const,
      date: "May 2025",
    },
    {
      title: "CE marking (EU regulation 2017/745)",
      status: "in-progress" as const,
      date: "May 2025",
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
          <h1 className="text-4xl font-bold mb-4">Future Development Roadmap</h1>
          <p className="text-xl text-medical-600 max-w-3xl mx-auto">
            Our path to innovation and regulatory compliance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Development Timeline</h2>
            </CardHeader>
            <CardContent className="p-8">
              <InteractiveTimeline items={timelineItems} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 text-sm text-gray-600"
        >
          *Timeline subject to regulatory approval processes
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;