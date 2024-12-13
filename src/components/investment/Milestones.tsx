import React from 'react';
import { Calendar } from 'lucide-react';
import { Milestone } from './types';

interface MilestonesProps {
  milestones: Milestone[];
  isVisible: boolean;
}

const Milestones: React.FC<MilestonesProps> = ({ milestones, isVisible }) => (
  <div className="mb-12">
    <h3 className="text-xl font-bold mb-6">Implementation Milestones</h3>
    <div className="grid grid-cols-4 gap-4">
      {milestones.map((milestone, index) => (
        <div 
          key={index}
          className="bg-white p-4 rounded-lg shadow"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : '20px'})`,
            transition: `all 0.5s ease-in-out ${index * 0.1}s`
          }}
        >
          <Calendar className="w-5 h-5 text-blue-600 mb-2" />
          <p className="font-semibold">{milestone.quarter}</p>
          <p className="text-sm text-gray-600 mb-2">{milestone.milestone}</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${milestone.completion}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Milestones;