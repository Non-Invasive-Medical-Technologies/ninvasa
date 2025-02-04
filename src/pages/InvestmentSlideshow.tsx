import React from 'react';
import { motion } from 'framer-motion';
import EnhancedPitchDeck from '@/components/business/EnhancedPitchDeck';
import PresentationDeck from '@/components/business/PresentationDeck';

const InvestmentSlideshow = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <EnhancedPitchDeck />
        <PresentationDeck />
      </motion.div>
    </div>
  );
};

export default InvestmentSlideshow;