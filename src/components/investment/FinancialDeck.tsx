import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Target, Users, Globe, Award, Clock } from 'lucide-react';

const FinancialDeck = () => {
  const revenueData = [
    { year: '2024', revenue: 45.5, profit: 20.2 },
    { year: '2025', revenue: 82.3, profit: 38.8 },
    { year: '2026', revenue: 151.6, profit: 81.6 },
    { year: '2027', revenue: 225.8, profit: 125.4 }
  ];

  const COLORS = ['#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'];

  return (
    <div className="w-full space-y-8">
      {/* Financial Projections */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Financial Growth Trajectory</h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#0ea5e9" 
                name="Revenue ($M)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="#38bdf8" 
                name="Profit ($M)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="p-4 bg-medical-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">$151.59M</div>
            <div className="text-sm text-gray-600">Revenue 2028</div>
            <div className="text-sm text-green-500">+68%</div>
          </div>
          
          <div className="p-4 bg-medical-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">91%</div>
            <div className="text-sm text-gray-600">Profit Margin</div>
            <div className="text-sm text-green-500">Industry Leading</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg">
            <Target className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">30K+</div>
            <div className="text-sm text-gray-600">Healthcare Facilities</div>
            <div className="text-sm text-green-500">By 2025</div>
          </div>

          <div className="p-4 bg-medical-50 rounded-lg">
            <Globe className="w-8 h-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">10+</div>
            <div className="text-sm text-gray-600">Markets</div>
            <div className="text-sm text-green-500">Middle East Focus</div>
          </div>
        </div>
      </div>

      {/* Investment Strategy */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-medical-600 mb-6">Strategic Investment Opportunity</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fund Allocation</h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'R&D', value: 40 },
                      { name: 'Human Capital', value: 30 },
                      { name: 'Marketing', value: 15 },
                      { name: 'Operations', value: 15 }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {revenueData.map((entry, index) => (
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
            <div className="p-4 bg-medical-50 rounded-lg">
              <h4 className="font-semibold mb-2">Investment Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Patented ANESA Technology Platform</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-medical-500 mr-2" />
                  <span>350M+ Population Reach</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Strategic Market Position</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-medical-500 mr-2" />
                  <span>Quick Market Entry Timeline</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-medical-100 rounded-lg">
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
    </div>
  );
};

export default FinancialDeck;