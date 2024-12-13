import React from 'react';
import { Globe, TrendingUp, Flag, Shield } from 'lucide-react';

interface InvestmentHighlightsProps {
  isVisible: boolean;
}

const InvestmentHighlights: React.FC<InvestmentHighlightsProps> = ({ isVisible }) => {
  const highlights = [
    {
      icon: Globe,
      title: 'Market Size',
      value: '$50B',
      subtitle: 'Total Addressable Market'
    },
    {
      icon: TrendingUp,
      title: 'Growth Rate',
      value: '68%',
      subtitle: 'Year over Year'
    },
    {
      icon: Flag,
      title: 'Market Entry',
      value: '7',
      subtitle: 'Countries by 2025'
    },
    {
      icon: Shield,
      title: 'IP Protection',
      value: '5+',
      subtitle: 'Patents Filed'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {highlights.map((highlight, index) => (
        <div 
          key={index}
          className="bg-blue-50 p-4 rounded-lg transform hover:scale-105 transition-all"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '20px'})`,
            transition: `all 0.5s ease-in-out ${index * 0.1}s`
          }}
        >
          <highlight.icon className="w-6 h-6 text-blue-600 mb-2" />
          <h4 className="font-semibold">{highlight.title}</h4>
          <p className="text-2xl font-bold text-blue-600">{highlight.value}</p>
          <p className="text-sm text-gray-600">{highlight.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default InvestmentHighlights;