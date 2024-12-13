import React from 'react';
import { MarketVertical } from './types';

interface VerticalDetailsProps {
  selectedVertical: string | null;
  marketVerticals: MarketVertical[];
}

const VerticalDetails: React.FC<VerticalDetailsProps> = ({ selectedVertical, marketVerticals }) => {
  return (
    <div className="p-6 bg-blue-50 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Vertical Analysis</h3>
      {selectedVertical ? (
        <div className="space-y-4">
          {(() => {
            const vertical = marketVerticals.find(v => v.name === selectedVertical);
            if (!vertical) return null;
            
            return (
              <>
                <h4 className="text-lg font-semibold">{vertical.name}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">Annual Tests</p>
                    <p className="text-xl font-bold text-blue-600">
                      {vertical.testsPerYear.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">Avg. Test Price</p>
                    <p className="text-xl font-bold text-blue-600">
                      ${vertical.avgTestPrice}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">Market Size</p>
                    <p className="text-xl font-bold text-blue-600">
                      {vertical.details.marketSize}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">Growth Rate</p>
                    <p className="text-xl font-bold text-green-600">
                      {vertical.details.growthRate}
                    </p>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      ) : (
        <p className="text-gray-600">Select a vertical for detailed analysis</p>
      )}
    </div>
  );
};

export default VerticalDetails;