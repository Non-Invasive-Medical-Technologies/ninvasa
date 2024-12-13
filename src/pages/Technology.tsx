import React from 'react';
import TechnologyHero from '@/components/technology/TechnologyHero';
import TechnologyOverview from '@/components/technology/TechnologyOverview';
import TechnologyVisualization from '@/components/technology/TechnologyVisualization';
import PatentTechnology from '@/components/technology/PatentTechnology';
import ClinicalApplications from '@/components/technology/ClinicalApplications';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <TechnologyHero />
      <div className="space-y-12">
        <TechnologyOverview />
        <TechnologyVisualization />
        <PatentTechnology />
        <ClinicalApplications />
      </div>
    </div>
  );
};

export default Technology;