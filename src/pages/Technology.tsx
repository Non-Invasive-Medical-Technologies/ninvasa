import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, Activity, Brain, Shield } from 'lucide-react';
import TechnologyHero from '@/components/technology/TechnologyHero';
import TechnologyOverview from '@/components/technology/TechnologyOverview';
import TechnologyVisualization from '@/components/technology/TechnologyVisualization';
import PatentTechnology from '@/components/technology/PatentTechnology';
import ClinicalApplications from '@/components/technology/ClinicalApplications';
import TechnicalSpecs from '@/components/technology/TechnicalSpecs';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TechnologyHero />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center">
          <p className="text-lg text-medical-600">
            Our technology is developed under the leadership of Dr. Mykola Pulavskyi and Dr. Ahmad Al-Rashid,
            combining decades of expertise in medical diagnostics and signal processing.
          </p>
        </div>
        
        <TechnologyOverview />
        
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-medical-600">Test Parameters</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Activity className="w-6 h-6 text-medical-500 mt-1" />
                  <div>
                    <p className="font-semibold">Comprehensive Analysis</p>
                    <p className="text-gray-600">Explore our extensive range of diagnostic parameters</p>
                  </div>
                </div>
                <Link
                  to="/parameters"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
                >
                  View Test Parameters <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <TechnicalSpecs />
        <TechnologyVisualization />
        <PatentTechnology />
        <ClinicalApplications />
      </div>
    </div>
  );
};

export default Technology;