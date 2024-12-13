import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnalyticsItemData {
  icon: LucideIcon;
  label: string;
  value: number;
  color: string;
}

interface AnalyticsCardProps {
  title: string;
  data: AnalyticsItemData[];
  icon: LucideIcon;
}

const AnalyticsCard = ({ title, data, icon: Icon }: AnalyticsCardProps) => (
  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
    <div className="flex items-center space-x-3 mb-6">
      <Icon className="h-6 w-6 text-blue-600" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <item.icon className={`h-4 w-4 text-${item.color}-500`} />
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-24 bg-gray-100 rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-${item.color}-500`} 
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
            <span className={`text-sm font-semibold text-${item.color}-600`}>
              {item.value}%
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AnalyticsCard;