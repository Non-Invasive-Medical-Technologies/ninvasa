import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Building, TrendingUp, Users, Activity } from 'lucide-react';

const MarketVerticalsSection = () => {
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Market verticals data
  const marketVerticals = [
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

  // Auto-cycle through verticals
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % marketVerticals.length);
        setSelectedVertical(marketVerticals[(activeIndex + 1) % marketVerticals.length].name);
      }, 3000); // Change vertical every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  // Animation for metrics
  const AnimatedNumber = ({ value, prefix = '', suffix = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);
  
    useEffect(() => {
      const duration = 1000;
      const startTime = Date.now();
      const startValue = displayValue;
      const endValue = parseFloat(value);
  
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
  
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const currentValue = startValue + (endValue - startValue) * progress;
          setDisplayValue(currentValue);
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(endValue);
        }
      };
  
      requestAnimationFrame(animate);
    }, [value]);
  
    return (
      <span>
        {prefix}
        {displayValue.toLocaleString(undefined, { 
          maximumFractionDigits: 0,
          minimumFractionDigits: 0 
        })}
        {suffix}
      </span>
    );
  };

  const VerticalDetails = ({ vertical }) => (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full" style={{ backgroundColor: vertical.color }}>
          <Building className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{vertical.name}</h4>
          <p className="text-sm text-gray-600">
            Market Potential: <AnimatedNumber value={vertical.potential} suffix="%" />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
          <Activity className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600">Annual Tests</p>
          <p className="text-xl font-bold text-blue-600">
            <AnimatedNumber value={vertical.testsPerYear} />
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
          <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600">Growth Rate</p>
          <p className="text-xl font-bold text-green-600">
            {vertical.details.growthRate}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
          <Users className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600">Facilities</p>
          <p className="text-xl font-bold text-blue-600">
            <AnimatedNumber value={vertical.details.facilities} />
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
          <Building className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm text-gray-600">Market Size</p>
          <p className="text-xl font-bold text-blue-600">
            {vertical.details.marketSize}
          </p>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg">
        <h5 className="font-semibold mb-2">Revenue Potential</h5>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Average Test Price:</p>
          <p className="font-bold">${vertical.avgTestPrice}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Annual Revenue Potential:</p>
          <p className="font-bold">
            $<AnimatedNumber 
              value={(vertical.testsPerYear * vertical.avgTestPrice / 1000000).toFixed(1)}
              suffix="M" 
            />
          </p>
        </div>
      </div>
    </div>
  );

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
            {/* Vertical Distribution */}
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

            {/* Vertical Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Vertical Details</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <VerticalDetails vertical={marketVerticals[activeIndex]} />
              </div>
            </div>
          </div>

          {/* Summary Metrics */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Total Facilities', value: '890+', icon: Building },
              { label: 'Annual Tests', value: '117,000+', icon: Activity },
              { label: 'Average Growth', value: '21.6%', icon: TrendingUp },
              { label: 'Market Coverage', value: '15%', icon: Users }
            ].map((metric, index) => (
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

export default MarketVerticalsSection;
