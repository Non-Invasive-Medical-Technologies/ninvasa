import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import KolibriHeader from './kolibri/KolibriHeader';
import KolibriMetrics from './kolibri/KolibriMetrics';
import KolibriOverview from './kolibri/KolibriOverview';
import KolibriDashboard from './kolibri/dashboard/KolibriDashboard';
import { ChevronDown, ChevronRight } from 'lucide-react';

const KolibriPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const analyticsData = {
    healthTrends: [
      { month: 'Jan', heartRate: 72, stress: 45, energy: 85 },
      { month: 'Feb', heartRate: 75, stress: 52, energy: 78 },
      { month: 'Mar', heartRate: 71, stress: 48, energy: 82 },
      { month: 'Apr', heartRate: 73, stress: 42, energy: 88 },
      { month: 'May', heartRate: 70, stress: 38, energy: 92 },
      { month: 'Jun', heartRate: 74, stress: 41, energy: 86 }
    ],
    userActivity: [
      { date: '1', active: 2400, tests: 1800 },
      { date: '5', active: 3600, tests: 2400 },
      { date: '10', active: 4200, tests: 3000 },
      { date: '15', active: 4800, tests: 3600 },
      { date: '20', active: 5400, tests: 4200 },
      { date: '25', active: 6000, tests: 4800 },
      { date: '30', active: 6600, tests: 5400 }
    ],
    parameterDistribution: [
      { name: 'Cardiovascular', value: 35 },
      { name: 'Metabolic', value: 25 },
      { name: 'Respiratory', value: 20 },
      { name: 'Neurological', value: 20 }
    ]
  };

  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

  const healthParameters = {
    general: [
      'Heart rate',
      'Health index',
      'Stress index',
      'Body mass index',
      'Basal metabolic rate',
      'Energy expenditure'
    ],
    cbc: [
      'Haemoglobin (HGB)',
      'Haematocrit',
      'Platelets',
      'Red blood cells',
      'White blood cells',
      'Mean arterial pressure',
      'Mean corpuscular volume',
      'Mean corpuscular haemoglobin'
    ],
    cardiovascular: [
      'Heart rate variability',
      'Autonomic rate index',
      'ECG morphology',
      'Cardiac pathologies',
      'Blood pressure analysis',
      'Vascular assessment'
    ],
    metabolism: [
      'Lipid metabolism',
      'Carbohydrate metabolism',
      'Electrolyte balance',
      'Metabolic rate analysis'
    ]
  };

  return (
    <div className="w-full space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <KolibriHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <KolibriMetrics />

        {activeTab === 'overview' && <KolibriOverview />}
        {activeTab === 'parameters' && <KolibriDashboard />}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Real-time Monitoring</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Signal Quality</span>
                    <div className="w-32 h-2 bg-gray-100 rounded-full">
                      <div className="w-28 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Processing</span>
                    <div className="w-32 h-2 bg-gray-100 rounded-full">
                      <div className="w-24 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Clinical Validation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Accuracy Rate</span>
                    <span className="text-sm font-semibold text-blue-600">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Clinical Trials</span>
                    <span className="text-sm font-semibold text-blue-600">500+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Health Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData.healthTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="heartRate" 
                        stroke="#2563eb" 
                        name="Heart Rate"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="stress" 
                        stroke="#ef4444" 
                        name="Stress Level"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="energy" 
                        stroke="#10b981" 
                        name="Energy Level"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="p-6 bg-white border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">User Activity</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData.userActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="active" 
                        stackId="1" 
                        stroke="#2563eb" 
                        fill="#93c5fd" 
                        name="Active Users"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="tests" 
                        stackId="1" 
                        stroke="#1d4ed8" 
                        fill="#60a5fa" 
                        name="Tests Performed"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="p-6 bg-white border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Parameter Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData.parameterDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {analyticsData.parameterDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="p-6 bg-white border border-blue-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Accuracy</span>
                    <div className="w-64 h-3 bg-gray-100 rounded-full">
                      <div className="w-60 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">System Uptime</span>
                    <div className="w-64 h-3 bg-gray-100 rounded-full">
                      <div className="w-61 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">99.95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Response Time</span>
                    <div className="w-64 h-3 bg-gray-100 rounded-full">
                      <div className="w-56 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">120ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Satisfaction</span>
                    <div className="w-64 h-3 bg-gray-100 rounded-full">
                      <div className="w-58 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KolibriPlatform;
