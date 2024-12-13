import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FundingAllocation } from './types';

interface FundAllocationChartProps {
  fundingAllocation: FundingAllocation[];
  activeSection: number;
}

const FundAllocationChart: React.FC<FundAllocationChartProps> = ({ 
  fundingAllocation, 
  activeSection 
}) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-bold mb-4">Fund Allocation</h3>
    <div style={{ height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={fundingAllocation}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, value }) => `${name} (${value}%)`}
          >
            {fundingAllocation.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                opacity={index === activeSection ? 1 : 0.7}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default FundAllocationChart;