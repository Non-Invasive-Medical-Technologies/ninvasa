import React from 'react';
import PresentationDeck from '@/components/business/PresentationDeck';
import BusinessModelSection from '@/components/business/BusinessModelSection';

const Strategy = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Go-to-Market Strategy</h1>
      <div className="space-y-8">
        <div className="section-fade-in">
          <PresentationDeck />
        </div>
        <div className="section-fade-in">
          <BusinessModelSection />
        </div>
      </div>
    </div>
  );
};

export default Strategy;