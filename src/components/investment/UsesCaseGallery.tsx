import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface UseCase {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

const useCases: UseCase[] = [
  {
    title: 'Emergency Response',
    description: 'Rapid health assessment in ambulances',
    image: 'https://images.unsplash.com/photo-1612549316684-ccc9f46f5fa7',
    benefits: ['Quick diagnosis', 'Real-time monitoring', 'Emergency preparedness']
  },
  {
    title: 'Military Healthcare',
    description: 'Field medical assessment capabilities',
    image: 'https://images.unsplash.com/photo-1541560584704-d4bf3569a785',
    benefits: ['Portable diagnostics', 'Rugged design', 'Immediate results']
  },
  {
    title: 'Mobile Health Units',
    description: 'Health screening in mobile medical trucks',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
    benefits: ['Mobile screening', 'Community outreach', 'Preventive care']
  },
  {
    title: 'Rural Health Centers',
    description: 'Accessible healthcare in remote locations',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    benefits: ['Affordable diagnostics', 'Easy deployment', 'Comprehensive care']
  },
  {
    title: 'Urban Clinics',
    description: 'Efficient patient screening in busy clinics',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    benefits: ['High throughput', 'Quick results', 'Cost-effective']
  },
  {
    title: 'Hospitals',
    description: 'Advanced diagnostic capabilities',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    benefits: ['Integration ready', 'Comprehensive analysis', 'Rapid screening']
  },
  {
    title: 'Maritime Healthcare',
    description: 'Medical care at sea',
    image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729',
    benefits: ['Remote diagnostics', 'Stable operation', 'Emergency support']
  },
  {
    title: 'Aviation Medical Services',
    description: 'In-flight health monitoring',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    benefits: ['Compact design', 'Air-worthy', 'Quick assessment']
  }
];

const UseCaseGallery = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-medical-600 mb-4">Global Application Scenarios</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our technology adapts to diverse healthcare environments, providing consistent and reliable diagnostics across various settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-medical-600">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-medical-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseGallery;