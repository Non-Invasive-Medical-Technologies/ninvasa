import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CoreTeamSection from './slides/TeamSlide';
import TechnologyOverviewSlide from './slides/TechnologyOverviewSlide';
import BusinessModelSection from '@/components/business/BusinessModelSection';
import PatentTechnologySection from '@/components/business/PatentTechnologySection';
import StrategicPartnership from '@/components/business/StrategicPartnership';
import ROICalculator from '@/components/business/ROICalculator';
import AnimatedMarketHeatmap from '@/components/business/AnimatedMarketHeatmap';

export const slides = [
  {
    id: 1,
    section: "Executive Overview",
    title: "Revolutionizing Healthcare Diagnostics",
    component: <CoreTeamSection />
  },
  {
    id: 2,
    section: "Portfolio Overview",
    title: "Our Innovation Portfolio",
    component: (
      <div className="space-y-8">
        <PatentTechnologySection />
        <StrategicPartnership />
        <AnimatedMarketHeatmap />
      </div>
    ),
  },
  {
    id: 3,
    section: "Patents & Technology",
    title: "Our Patents",
    component: <PatentTechnologySection />,
  },
  {
    id: 4,
    section: "Technology Platform",
    title: "Our Technology Platforms",
    component: <TechnologyOverviewSlide />,
  },
  {
    id: 5,
    section: "Business Model",
    title: "Our Business Model",
    component: <BusinessModelSection />,
  },
  {
    id: 6,
    section: "Investment Options",
    title: "Funding Options",
    component: (
      <Card>
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Private Equity</h3>
                <ul className="space-y-2">
                  <li>Minimum investment: $500K-1M</li>
                  <li>Equity stake: 5-10%</li>
                  <li>Board representation</li>
                  <li>Strategic partnership opportunities</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Venture Debt</h3>
                <ul className="space-y-2">
                  <li>Loan amount: $500K-1M</li>
                  <li>Term: 36-48 months</li>
                  <li>Interest rate: 8-12%</li>
                  <li>Warrants: 5-10%</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">SAFE Note</h3>
                <ul className="space-y-2">
                  <li>Investment range: $1M-1.5M</li>
                  <li>Revenue share: 3-5%</li>
                  <li>Quarterly distributions</li>
                  <li>No equity dilution</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Strategic Investment</h3>
                <ul className="space-y-2">
                  <li>Flexible investment structure</li>
                  <li>Industry expertise</li>
                  <li>Market access</li>
                  <li>Technology collaboration</li>
                </ul>
              </div>
            </div>
            <ROICalculator />
          </div>
        </CardContent>
      </Card>
    ),
  },
];