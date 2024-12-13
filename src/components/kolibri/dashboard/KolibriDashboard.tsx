import React from 'react';
import { Heart, Activity, Brain, Thermometer, Clock, Shield, Zap, LineChart, BarChart2 } from 'lucide-react';
import MetricCard from './MetricCard';
import AnalyticsCard from './AnalyticsCard';

const KolibriDashboard = () => {
  const healthMetrics = [
    { icon: Heart, title: "Heart Rate", value: "72 BPM", subtitle: "Normal Range", trend: 5, color: "rose" },
    { icon: Activity, title: "Blood Oxygen", value: "98%", subtitle: "Optimal", trend: 2, color: "blue" },
    { icon: Brain, title: "Stress Level", value: "Low", subtitle: "Below Average", trend: -10, color: "indigo" },
    { icon: Clock, title: "Analysis Time", value: "2:30", subtitle: "Minutes", color: "purple" }
  ];

  const vitalityData = [
    { icon: Shield, label: "Immune System", value: 92, color: "green" },
    { icon: Zap, label: "Energy Level", value: 85, color: "yellow" },
    { icon: Activity, label: "Physical Activity", value: 78, color: "blue" }
  ];

  const riskData = [
    { icon: Heart, label: "Cardiovascular", value: 95, color: "green" },
    { icon: Brain, label: "Neurological", value: 90, color: "green" },
    { icon: Thermometer, label: "Metabolic", value: 75, color: "yellow" }
  ];

  return (
    <div className="w-full p-6 space-y-6 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {healthMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsCard 
          title="Health Parameters" 
          data={vitalityData} 
          icon={LineChart}
        />
        <AnalyticsCard 
          title="Risk Assessment" 
          data={riskData} 
          icon={BarChart2}
        />
      </div>

      <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Trend Analysis</h3>
          <div className="flex space-x-2">
            <span className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">Daily</span>
            <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">Weekly</span>
            <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">Monthly</span>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-500">
          Trend visualization will appear here
        </div>
      </div>
    </div>
  );
};

export default KolibriDashboard;