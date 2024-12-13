import { useState } from 'react';
import { 
  Activity, 
  Brain, 
  Thermometer, 
  Clock, 
  Shield, 
  Target, 
  ChevronDown,
  ChevronRight,
  Cloud
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar
} from 'recharts';

const AnesaPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const metrics = [
    { icon: Clock, label: 'Analysis Time', value: '6-12 min', trend: '+20%', description: 'Average analysis duration' },
    { icon: Target, label: 'Parameters', value: '136+', trend: '+15%', description: 'Health parameters tracked' },
    { icon: Shield, label: 'Accuracy', value: '99.9%', trend: '+1%', description: 'Diagnostic accuracy' },
    { icon: Activity, label: 'Precision', value: '0.07°C', trend: '+5%', description: 'Temperature precision' }
  ];

  const features = [
    {
      icon: Brain,
      title: "Patented Algorithm",
      description: "Pulavski method for advanced biosignal analysis"
    },
    {
      icon: Thermometer,
      title: "High-Precision Sensors",
      description: "5-point measurement with 0.07°C accuracy"
    },
    {
      icon: Activity,
      title: "Comprehensive Analysis",
      description: "136+ health parameters in 6-12 minutes"
    },
    {
      icon: Shield,
      title: "Clinical Validation",
      description: "Validated through extensive clinical trials"
    }
  ];

  // Enhanced analysis data
  const analysisData = [
    { name: 'Jan', value: 85, accuracy: 98, parameters: 120 },
    { name: 'Feb', value: 88, accuracy: 99, parameters: 125 },
    { name: 'Mar', value: 92, accuracy: 99, parameters: 130 },
    { name: 'Apr', value: 89, accuracy: 98, parameters: 132 },
    { name: 'May', value: 95, accuracy: 99, parameters: 134 },
    { name: 'Jun', value: 91, accuracy: 99, parameters: 136 }
  ];

  const performanceMetrics = [
    { category: 'Speed', value: 95 },
    { category: 'Accuracy', value: 99 },
    { category: 'Parameters', value: 100 },
    { category: 'Cost Efficiency', value: 90 },
    { category: 'User Satisfaction', value: 95 }
  ];

  return (
    <div className="w-full space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <div className="h-7">
                <svg viewBox="0 0 500 100" className="h-full w-auto">
                  <text x="10" y="80" fontFamily="Arial" fontSize="90" fontWeight="bold" letterSpacing="2" fill="#14b8a6">ANESA</text>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-teal-600">Advanced Diagnostics</h2>
            </div>
            <p className="text-gray-500 text-xs">
              Automated Non-Invasive Express Screening Analyser
            </p>
          </div>
          <div className="flex space-x-3">
            {['overview', 'parameters', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                  ${activeTab === tab 
                    ? 'bg-teal-100 text-teal-600' 
                    : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <metric.icon className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">{metric.label}</h3>
                <p className="text-gray-600">{metric.value} <span className="text-green-500">{metric.trend}</span></p>
                <p className="text-gray-500 text-sm">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start p-4 bg-gray-50 rounded-lg">
              <feature.icon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Analytics Section */}
        {activeTab === 'analytics' && (
          <div className="mt-8 space-y-8">
            {/* Performance Trends */}
            <div>
              <h3 className="text-xl font-bold mb-4">Performance Trends</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analysisData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      fill="#93c5fd" 
                      name="Analysis Score"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="accuracy" 
                      stroke="#10b981" 
                      fill="#6ee7b7" 
                      name="Accuracy"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Performance Radar */}
            <div>
              <h3 className="text-xl font-bold mb-4">Performance Analysis</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={performanceMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Performance"
                      dataKey="value"
                      stroke="#3b82f6"
                      fill="#93c5fd"
                      fillOpacity={0.6}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Parameters Growth */}
            <div>
              <h3 className="text-xl font-bold mb-4">Parameters Growth</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analysisData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="parameters" 
                      fill="#3b82f6" 
                      name="Total Parameters"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnesaPlatform;
