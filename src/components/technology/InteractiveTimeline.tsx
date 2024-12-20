import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TimelineItem {
  title: string;
  status: 'completed' | 'in-progress';
  date: string;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-medical-200" />
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <motion.div 
              className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(selectedItem === index ? null : index)}
            >
              <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
                <AnimatePresence>
                  {selectedItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2 text-sm text-gray-500"
                    >
                      {item.status === 'completed' ? 
                        'This milestone has been successfully completed.' : 
                        'This milestone is currently in progress and on track.'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
            <div className="relative z-10">
              <motion.div 
                className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${item.status === 'completed' ? 'bg-green-500' : 'bg-medical-500'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.status === 'completed' ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <Clock className="w-6 h-6 text-white" />
                )}
              </motion.div>
              {selectedItem === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 left-12"
                >
                  <ChevronRight className="w-4 h-4 text-medical-500" />
                </motion.div>
              )}
            </div>
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;