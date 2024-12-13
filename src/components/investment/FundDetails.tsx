import React from 'react';
import { FundingAllocation } from './types';

interface FundDetailsProps {
  fundingAllocation: FundingAllocation[];
  activeSection: number;
}

const FundDetails: React.FC<FundDetailsProps> = ({ fundingAllocation, activeSection }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold mb-4">Allocation Details</h3>
    {fundingAllocation.map((item, index) => (
      <div 
        key={index}
        className={`p-4 rounded-lg transition-all duration-300 ${
          index === activeSection ? 'bg-blue-50 scale-105' : 'bg-gray-50'
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
          <span className="text-xl font-bold text-blue-600">{item.value}%</span>
        </div>
      </div>
    ))}
  </div>
);

export default FundDetails;