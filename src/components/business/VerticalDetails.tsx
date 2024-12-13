import { Building, Activity, TrendingUp, Users } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import { MarketVertical } from './types';

interface VerticalDetailsProps {
  vertical: MarketVertical;
}

const VerticalDetails = ({ vertical }: VerticalDetailsProps) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center gap-3">
      <div className="p-3 rounded-full" style={{ backgroundColor: vertical.color }}>
        <Building className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{vertical.name}</h4>
        <p className="text-sm text-gray-600">
          Market Potential: <AnimatedNumber value={vertical.potential} suffix="%" />
        </p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
        <Activity className="w-5 h-5 text-blue-600 mb-2" />
        <p className="text-sm text-gray-600">Annual Tests</p>
        <p className="text-xl font-bold text-blue-600">
          <AnimatedNumber value={vertical.testsPerYear} />
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
        <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
        <p className="text-sm text-gray-600">Growth Rate</p>
        <p className="text-xl font-bold text-green-600">
          {vertical.details.growthRate}
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
        <Users className="w-5 h-5 text-blue-600 mb-2" />
        <p className="text-sm text-gray-600">Facilities</p>
        <p className="text-xl font-bold text-blue-600">
          <AnimatedNumber value={vertical.details.facilities} />
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg transform hover:scale-105 transition-all">
        <Building className="w-5 h-5 text-blue-600 mb-2" />
        <p className="text-sm text-gray-600">Market Size</p>
        <p className="text-xl font-bold text-blue-600">
          {vertical.details.marketSize}
        </p>
      </div>
    </div>

    <div className="p-4 bg-white rounded-lg">
      <h5 className="font-semibold mb-2">Revenue Potential</h5>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Average Test Price:</p>
        <p className="font-bold">${vertical.avgTestPrice}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">Annual Revenue Potential:</p>
        <p className="font-bold">
          $<AnimatedNumber 
            value={(vertical.testsPerYear * vertical.avgTestPrice / 1000000).toFixed(1)}
            suffix="M" 
          />
        </p>
      </div>
    </div>
  </div>
);

export default VerticalDetails;