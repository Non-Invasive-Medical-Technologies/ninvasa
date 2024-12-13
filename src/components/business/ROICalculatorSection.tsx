import React from 'react';
import { ROICalculation } from './types';

interface ROICalculatorSectionProps {
  calculateROI: (testsPerDay: number) => ROICalculation;
}

const ROICalculatorSection: React.FC<ROICalculatorSectionProps> = ({ calculateROI }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6">ROI Calculator</h3>
      <div className="grid grid-cols-4 gap-6">
        {[10, 20, 30, 50].map(tests => {
          const roi = calculateROI(tests);
          return (
            <div key={tests} className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{tests} Tests/Day</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Annual Revenue</p>
                <p className="text-lg font-bold text-blue-600">
                  ${(roi.annualRevenue / 1000000).toFixed(1)}M
                </p>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="text-lg font-bold text-green-600">
                  {roi.roi.toFixed(0)}%
                </p>
                <p className="text-sm text-gray-600">Break-even</p>
                <p className="text-lg font-bold text-blue-600">
                  {roi.breakEvenDays} days
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ROICalculatorSection;