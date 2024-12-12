import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  Brain, 
  Clock, 
  Shield, 
  Cloud, 
  ChevronDown,
  ChevronRight,
  Users
} from 'lucide-react';
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

  const metrics = [
    { icon: Clock, label: 'Analysis Time', value: '2-5 min', trend: '+15%' },
    { icon: Activity, label: 'Parameters', value: '40+', trend: '+8%' },
    { icon: Users, label: 'Active Users', value: '5,000+', trend: '+25%' },
    { icon: Shield, label: 'Accuracy', value: '99.9%', trend: '+2%' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Deep learning algorithms for accurate health assessment'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Real-time remote monitoring and data synchronization'
    },
    {
      icon: Shield,
      title: 'Clinical Validation',
      description: 'Extensively tested and validated through clinical trials'
    },
    {
      icon: Activity,
      title: 'Comprehensive Monitoring',
      description: '40+ health parameters tracked in real-time'
    }
  ];

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="w-full space-y-8">
      {/* Platform Overview */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 500 150" className="w-full h-full">
                <g>
                  <circle cx="75" cy="75" r="70" fill="none" stroke="#14b8a6" strokeWidth="5"/>
                  <path d="M75 25 L60 65 L90 65 Z M60 65 L75 105 L90 65 Z" fill="#14b8a6"/>
                </g>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-teal-500">KOLIBRI Health Platform</h2>
          </div>
          <div className="flex space-x-4">
            {['overview', 'parameters', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${activeTab === tab 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-6 h-6 text-blue-600" />
                <span className={`text-sm ${
                  metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.trend}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 gap-8">
            {/* Features Grid */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-white border border-blue-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Overview */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Technology Overview</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Non-invasive Monitoring</h4>
                      <p className="text-sm text-gray-600">Advanced biosignal processing</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Neural Networks</h4>
                      <p className="text-sm text-gray-600">Deep learning algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold">Cloud Infrastructure</h4>
                      <p className="text-sm text-gray-600">Real-time data processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'parameters' && (
          <div className="space-y-6">
            {Object.entries(healthParameters).map(([category, params]) => (
              <div key={category} className="border border-blue-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Parameters
                  </span>
                  {expandedCategory === category ? (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {expandedCategory === category && (
                  <div className="p-4 grid grid-cols-2 gap-4">
                    {params.map((param, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">{param}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

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

            {/* Analytics Dashboard */}
            <div className="grid grid-cols-2 gap-6">
              {/* Health Trends Chart */}
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

              {/* User Activity Chart */}
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

              {/* Parameter Distribution */}
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

              {/* Summary Metrics */}
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
