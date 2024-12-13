import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Building, TrendingUp, Users, Activity } from 'lucide-react';
import VerticalDetails from './VerticalDetails';
import { MarketVertical, MetricProps } from './types';

const marketVerticals: MarketVertical[] = [
  {
    name: 'Hospitals',
    potential: 45,
    testsPerYear: 50000,
    avgTestPrice: 200,
    color: '#0039a6',
    details: {
      facilities: 120,
      marketSize: '$45M',
      growthRate: '15%'
    }
  },
  {
    name: 'Clinics',
    potential: 25,
    testsPerYear: 30000,
    avgTestPrice: 180,
    color: '#0067dd',
    details: {
      facilities: 500,
      marketSize: '$25M',
      growthRate: '20%'
    }
  },
  {
    name: 'Sports Rehab',
    potential: 12,
    testsPerYear: 15000,
    avgTestPrice: 250,
    color: '#47a3ff',
    details: {
      facilities: 80,
      marketSize: '$12M',
      growthRate: '25%'
    }
  },
  {
    name: 'Oncology',
    potential: 8,
    testsPerYear: 10000,
    avgTestPrice: 200,
    color: '#99ccff',
    details: {
      facilities: 40,
      marketSize: '$8M',
      growthRate: '18%'
    }
  },
  {
    name: 'Wellness',
    potential: 10,
    testsPerYear: 12000,
    avgTestPrice: 150,
    color: '#cce6ff',
    details: {
      facilities: 150,
      marketSize: '$10M',
      growthRate: '30%'
    }
  }
];

const summaryMetrics: MetricProps[] = [
  { label: 'Total Facilities', value: '890+', icon: Building },
  { label: 'Annual Tests', value: '117,000+', icon: Activity },
  { label: 'Average Growth', value: '21.6%', icon: TrendingUp },
  { label: 'Market Coverage', value: '15%', icon: Users }
];

const BusinessModelSection = () => {
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % marketVerticals.length);
        setSelectedVertical(marketVerticals[(activeIndex + 1) % marketVerticals.length].name);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <h2 className="text-3xl font-bold">Market Verticals</h2>
          <p className="text-lg opacity-90">Analysis by Healthcare Sector</p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 text-sm bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all"
            >
              {isPlaying ? 'Pause Animation' : 'Resume Animation'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Market Distribution</h3>
              <div style={{ height: 400 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={marketVerticals}
                      dataKey="potential"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      label={({ name, value }) => `${name} (${value}%)`}
                    >
                      {marketVerticals.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          opacity={index === activeIndex ? 1 : 0.7}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Vertical Details</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <VerticalDetails vertical={marketVerticals[activeIndex]} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8">
            {summaryMetrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-4 rounded-lg transform hover:scale-105 transition-all"
              >
                <metric.icon className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-xl font-bold text-blue-600">{metric.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessModelSection;