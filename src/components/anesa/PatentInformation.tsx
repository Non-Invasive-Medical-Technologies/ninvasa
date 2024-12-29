import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Award } from 'lucide-react';

const PatentInformation = () => {
  const patents = [
    {
      id: 'ua',
      title: 'Ukrainian Patent',
      number: '60890',
      date: 'June 25, 2011',
      description: 'Non-invasive determination of homeostasis parameters'
    },
    {
      id: 'us',
      title: 'US Patent',
      number: '10,531,836 B2',
      date: 'January 14, 2020',
      description: 'Signal decomposition and analysis system'
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Patent Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patents.map((patent, index) => (
          <motion.div
            key={patent.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 bg-gray-50 rounded-lg"
          >
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">{patent.title}</h3>
                <p className="text-sm text-gray-600 mb-2">Patent No: {patent.number}</p>
                <p className="text-sm text-gray-600 mb-2">Granted: {patent.date}</p>
                <p className="text-sm text-gray-700">{patent.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PatentInformation;