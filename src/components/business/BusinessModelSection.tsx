import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { RevenueModel, MarketVertical, ROICalculation } from './types';
import ROICalculatorSection from './ROICalculatorSection';
import VerticalDetails from './VerticalDetails';

const BusinessModelSection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('direct');
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Business model data
  const revenueModels: RevenueModel[] = [
    {
      id: 'direct',
      name: 'Direct Sales',
      revenue: 60,
      description: 'Direct sales to healthcare facilities',
      margin: 91
    },
    {
      id: 'subscription',
      name: 'Subscription',
      revenue: 25,
      description: 'Monthly subscription for tests',
      margin: 85
    },
    {
      id: 'rental',
      name: 'Device Rental',
      revenue: 15,
      description: 'Pay-per-use model',
      margin: 80
    }
  ];

  // Market verticals data
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

  const calculateROI = (testsPerDay: number): ROICalculation => {
    const deviceCost = 180000;
    const avgTestPrice = 200;
    const daysPerYear = 365;
    const annualTests = testsPerDay * daysPerYear;
    const annualRevenue = annualTests * avgTestPrice;
    const operatingCosts = annualTests * 20; // Estimated cost per test
    const annualProfit = annualRevenue - operatingCosts;
    const roi = (annualProfit / deviceCost) * 100;
    const breakEvenDays = (deviceCost / (annualProfit / 365));

    return {
      annualRevenue,
      annualProfit,
      roi,
      breakEvenDays: Math.round(breakEvenDays)
    };
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <h2 className="text-3xl font-bold">Business Model</h2>
          <p className="text-lg opacity-90">Multi-channel revenue strategy with scalable growth</p>
        </CardHeader>
        <CardContent className="p-8">
          <div 
            className="grid grid-cols-3 gap-6 mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : '20px'})`,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {revenueModels.map((model, index) => (
              <div
                key={model.id}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  selectedModel === model.id 
                    ? 'bg-blue-50 border-2 border-blue-600' 
                    : 'bg-white border-2 border-transparent'
                }`}
                onClick={() => setSelectedModel(model.id)}
                style={{
                  transition: 'all 0.3s ease-in-out',
                  transform: `translateY(${isVisible ? 0 : '20px'})`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-3xl font-bold text-blue-600">{model.revenue}%</span>
                  <span className="text-sm text-gray-500">Revenue Share</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-green-600">Margin: {model.margin}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div style={{ height: 400 }}>
              <h3 className="text-xl font-bold mb-4">Market Verticals</h3>
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
                    onClick={(data) => setSelectedVertical(data.name)}
                  >
                    {marketVerticals.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        opacity={selectedVertical === entry.name ? 1 : 0.7}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <VerticalDetails 
              selectedVertical={selectedVertical}
              marketVerticals={marketVerticals}
            />
          </div>

          <ROICalculatorSection calculateROI={calculateROI} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessModelSection;
