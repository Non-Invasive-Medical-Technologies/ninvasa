import React from 'react';
import { DollarSign } from 'lucide-react';

interface InvestmentHeaderProps {
  isVisible: boolean;
}

const InvestmentHeader: React.FC<InvestmentHeaderProps> = ({ isVisible }) => (
  <div 
    className="text-center mb-12"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? 0 : '20px'})`,
      transition: 'all 0.5s ease-in-out'
    }}
  >
    <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    <h3 className="text-4xl font-bold text-blue-600">$500,000</h3>
    <p className="text-gray-600 mt-2">Venture Capital Investment</p>
  </div>
);

export default InvestmentHeader;