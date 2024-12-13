import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Clock, Award } from 'lucide-react';

const TechnologyVisualization = () => {
  const techData = [
    { attribute: 'Speed', value: 95 },
    { attribute: 'Accuracy', value: 98 },
    { attribute: 'Parameters', value: 100 },
    { attribute: 'Ease of Use', value: 90 },
    { attribute: 'Cost Efficiency', value: 85 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-medical-600">Technology Performance Metrics</h2>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Activity,
                title: '136+ Parameters',
                description: 'Comprehensive health analysis'
              },
              {
                icon: Clock,
                title: '6-12 Minutes',
                description: 'Rapid diagnostic results'
              },
              {
                icon: Award,
                title: 'ISO Certified',
                description: 'Global quality standards'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-medical-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <feature.icon className="w-12 h-12 text-medical-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-medical-700">Performance Analysis</h3>
            <div style={{ height: 400 }}>
              <ResponsiveContainer>
                <RadarChart data={techData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="attribute" />
                  <Radar
                    name="ANESA Platform"
                    dataKey="value"
                    stroke="#0284c7"
                    fill="#0284c7"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnologyVisualization;