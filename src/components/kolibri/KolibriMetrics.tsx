import React from 'react';
import { Clock, Activity, Users, Shield } from 'lucide-react';

const metrics = [
  { icon: Clock, label: 'Analysis Time', value: '2-5 min', trend: '+15%' },
  { icon: Activity, label: 'Parameters', value: '40+', trend: '+8%' },
  { icon: Users, label: 'Active Users', value: '5,000+', trend: '+25%' },
  { icon: Shield, label: 'Accuracy', value: '99.9%', trend: '+2%' }
];

const KolibriMetrics = () => {
  return (
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
  );
};

export default KolibriMetrics;