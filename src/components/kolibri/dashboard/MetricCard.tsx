import React from 'react';
import { TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  trend?: number;
  color?: string;
}

const MetricCard = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  trend, 
  color = "blue" 
}: MetricCardProps) => (
  <div className={`bg-white p-6 rounded-lg border border-${color}-100 shadow-sm hover:shadow-md transition-shadow`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 bg-${color}-50 rounded-lg`}>
        <Icon className={`h-6 w-6 text-${color}-600`} />
      </div>
      {trend && (
        <div className={`flex items-center text-${trend > 0 ? 'green' : 'red'}-500 text-sm`}>
          <TrendingUp className={`h-4 w-4 ${trend > 0 ? '' : 'transform rotate-180'} mr-1`} />
          <span>{Math.abs(trend)}%</span>
        </div>
      )}
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{value}</h3>
    <p className="text-sm font-medium text-gray-600">{title}</p>
    {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
  </div>
);

export default MetricCard;