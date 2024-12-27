import React from 'react';
import CoreTeamSection from './slides/TeamSlide';
import TechnologyOverviewSlide from './slides/TechnologyOverviewSlide';
import BusinessModelSection from '@/components/business/BusinessModelSection';
import PatentTechnologySection from '@/components/business/PatentTechnologySection';
import StrategicPartnership from '@/components/business/StrategicPartnership';
import AnimatedMarketHeatmap from '@/components/business/AnimatedMarketHeatmap';
import SWOTAnalysis from '@/components/business/SWOTAnalysis';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

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
    component: (
      <div className="space-y-8">
        <BusinessModelSection />
        <AnimatedMarketHeatmap />
      </div>
    ),
  },
  {
    id: 6,
    section: "Investment Options",
    title: "Funding Options",
    component: (
      <div className="space-y-8">
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

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Fund Allocation</h3>
                  <div style={{ height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'R&D', value: 40, color: '#0039a6' },
                            { name: 'Human Capital', value: 30, color: '#0067dd' },
                            { name: 'Marketing', value: 15, color: '#47a3ff' },
                            { name: 'Operations', value: 15, color: '#99ccff' }
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name} (${value}%)`}
                        >
                          {[
                            { color: '#0039a6' },
                            { color: '#0067dd' },
                            { color: '#47a3ff' },
                            { color: '#99ccff' }
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-medical-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Investment Terms</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Equity Range</div>
                        <div className="font-semibold">15-20%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Target Raise</div>
                        <div className="font-semibold">$500,000</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Valuation</div>
                        <div className="font-semibold">$2.5M</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">ROI Target</div>
                        <div className="font-semibold">995%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: 7,
    section: "Strategic Analysis",
    title: "Strategic SWOT Analysis",
    component: <SWOTAnalysis />
  },
];
