import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Building2, Users, TrendingUp, DollarSign, Activity, Shield, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const marketData = [
  { country: 'UAE', marketSize: 45.85, facilities: 2800, population: 9.99, growth: 28 },
  { country: 'Saudi Arabia', marketSize: 84.32, facilities: 4700, population: 35.95, growth: 32 },
  { country: 'Qatar', marketSize: 28.94, facilities: 1200, population: 2.93, growth: 25 },
  { country: 'Kuwait', marketSize: 32.56, facilities: 1500, population: 4.27, growth: 24 },
  { country: 'Oman', marketSize: 22.48, facilities: 1800, population: 5.12, growth: 22 },
  { country: 'Bahrain', marketSize: 18.65, facilities: 900, population: 1.47, growth: 20 }
];

const COLORS = ['#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49'];

const GCCMarketAnalysis = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">GCC Healthcare Market Analysis</h2>
        
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-medical-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">$232.8B</div>
            <div className="text-sm text-gray-600">Total Market Size</div>
            <div className="text-sm text-green-500">+25.4% YoY</div>
          </div>
          
          <div className="p-4 bg-medical-50 rounded-lg">
            <Building2 className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">12,900</div>
            <div className="text-sm text-gray-600">Healthcare Facilities</div>
            <div className="text-sm text-green-500">Growing Network</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg">
            <Users className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">59.7M</div>
            <div className="text-sm text-gray-600">Population Coverage</div>
            <div className="text-sm text-green-500">High Accessibility</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">25.2%</div>
            <div className="text-sm text-gray-600">Average Growth Rate</div>
            <div className="text-sm text-green-500">Strong Momentum</div>
          </div>
        </div>

        {/* Market Size Chart */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-medical-600">Market Size by Country (Billion USD)</h3>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marketSize" fill="#0ea5e9" name="Market Size (B USD)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Healthcare Facility Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-600">Healthcare Facility Distribution</h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="facilities"
                    nameKey="country"
                    label
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-medical-600">Market Opportunities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-medical-50 rounded-lg">
                <Activity className="w-6 h-6 text-medical-600 mb-2" />
                <h4 className="font-semibold">High Growth</h4>
                <p className="text-sm text-gray-600">25.2% average annual growth rate across region</p>
              </div>
              
              <div className="p-4 bg-medical-50 rounded-lg">
                <Shield className="w-6 h-6 text-medical-600 mb-2" />
                <h4 className="font-semibold">Strong Infrastructure</h4>
                <p className="text-sm text-gray-600">12,900+ healthcare facilities</p>
              </div>
              
              <div className="p-4 bg-medical-50 rounded-lg">
                <Target className="w-6 h-6 text-medical-600 mb-2" />
                <h4 className="font-semibold">Market Access</h4>
                <p className="text-sm text-gray-600">59.7M population coverage</p>
              </div>
              
              <div className="p-4 bg-medical-50 rounded-lg">
                <Award className="w-6 h-6 text-medical-600 mb-2" />
                <h4 className="font-semibold">Innovation Focus</h4>
                <p className="text-sm text-gray-600">Strong emphasis on healthcare technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GCCMarketAnalysis;