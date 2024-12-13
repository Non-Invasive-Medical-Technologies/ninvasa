import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Globe, TrendingUp, Users, Target } from 'lucide-react';

interface MarketDataPoint {
  year: string;
  value: number;
  market: string;
  cagr: number;
}

interface RoadmapPhase {
  phase: string;
  progress: number;
  market: string;
  value: number;
}

interface MetricCard {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
}

interface StatCard {
  label: string;
  value: string;
}

const MarketSection = () => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const roadmapData: RoadmapPhase[] = [
    {
      phase: '2024-2025',
      progress: 100,
      market: 'UAE',
      value: 45.85
    },
    {
      phase: '2025-2026',
      progress: 75,
      market: 'Saudi Arabia, Qatar, Oman',
      value: 167.16
    },
    {
      phase: '2026-2027',
      progress: 50,
      market: 'Kuwait, Jordan, Turkey',
      value: 493.47
    },
    {
      phase: '2027+',
      progress: 25,
      market: 'North Africa',
      value: 1435.58
    }
  ];

  const marketData: MarketDataPoint[] = [
    { year: '2024', value: 45.85, market: 'UAE', cagr: 15 },
    { year: '2025', value: 167.16, market: 'UAE, Saudi Arabia', cagr: 18 },
    { year: '2026', value: 493.47, market: 'GCC', cagr: 22 },
    { year: '2027', value: 1435.58, market: 'MENA', cagr: 25 }
  ];

  const metrics: MetricCard[] = [
    {
      title: 'Total TAM',
      value: '$50B',
      subtitle: 'by 2027',
      icon: Globe
    },
    {
      title: 'CAGR',
      value: '22%',
      subtitle: '2024-2027',
      icon: TrendingUp
    },
    {
      title: 'Target Users',
      value: '30K+',
      subtitle: 'Healthcare facilities',
      icon: Users
    },
    {
      title: 'Market Share',
      value: '15%',
      subtitle: 'Target by 2025',
      icon: Target
    }
  ];

  const stats: StatCard[] = [
    { label: 'Total Markets', value: '10+' },
    { label: 'Population Reach', value: '350M+' },
    { label: 'Healthcare Facilities', value: '30,000+' },
    { label: 'Market Size', value: '$50B' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6">
          <h2 className="text-3xl font-bold">Market Opportunity</h2>
          <p className="text-lg opacity-90">Strategic expansion across Middle East & North Africa</p>
        </CardHeader>
        <CardContent className="p-8">
          {/* Market Growth Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Market Growth Trajectory</h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-4 rounded-lg shadow-lg border">
                              <p className="font-bold text-lg">{label}</p>
                              <p className="text-blue-600 text-xl">${payload[0].value}M</p>
                              <p className="text-gray-600">{payload[0].payload.market}</p>
                              <p className="text-green-600">CAGR: {payload[0].payload.cagr}%</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#0039a6"
                      fill="#99ccff"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Market Metrics */}
            <div>
              <h3 className="text-xl font-bold mb-6">Market Size & Potential</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <metric.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold text-lg">{metric.title}</h4>
                    <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expansion Roadmap */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-6">Market Expansion Roadmap</h3>
            <div className="space-y-6">
              {roadmapData.map((phase, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedPhase(index === selectedPhase ? null : index)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-lg">{phase.phase}</h4>
                    <span className="text-blue-600 font-semibold">${phase.value}M</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="h-full rounded-full bg-blue-600 transition-all duration-1000"
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {phase.market.split(', ').map((market, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600"
                      >
                        {market}
                      </span>
                    ))}
                  </div>

                  {index < roadmapData.length - 1 && (
                    <div 
                      className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-blue-200" 
                      style={{ transform: 'translateX(-50%) translateY(100%)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expansion Highlights */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h4 className="font-bold text-lg mb-4">Expansion Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketSection;