import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

interface TimelineItem {
  title: string;
  status: 'completed' | 'in-progress';
  date: string;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
            <div className="relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center
                ${item.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}`}>
                {item.status === 'completed' ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Clock className="w-5 h-5 text-white" />
                )}
              </div>
            </div>
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;