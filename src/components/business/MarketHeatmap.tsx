import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MarketData {
  id: string;
  name: string;
  phase: string;
  status: 'active' | 'upcoming' | 'planned';
  penetration: number;
  facilities: string;
  marketSize: string;
}

const MarketHeatmap = () => {
  const [selectedCountry, setSelectedCountry] = useState<MarketData | null>(null);

  const marketData: MarketData[] = [
    {
      id: 'uae',
      name: 'UAE',
      phase: '2024-2025',
      status: 'active',
      penetration: 100,
      facilities: '2,000+',
      marketSize: '$21B'
    },
    {
      id: 'sa',
      name: 'Saudi Arabia',
      phase: '2025-2026',
      status: 'upcoming',
      penetration: 75,
      facilities: '3,500+',
      marketSize: '$45B'
    },
    {
      id: 'qa',
      name: 'Qatar',
      phase: '2025-2026',
      status: 'upcoming',
      penetration: 75,
      facilities: '800+',
      marketSize: '$12B'
    },
    {
      id: 'kw',
      name: 'Kuwait',
      phase: '2026-2027',
      status: 'planned',
      penetration: 50,
      facilities: '900+',
      marketSize: '$15B'
    }
  ];

  const getStatusColor = (status: MarketData['status']) => {
    switch (status) {
      case 'active': return '#0039a6';
      case 'upcoming': return '#0067dd';
      case 'planned': return '#99ccff';
      default: return '#e5e7eb';
    }
  };

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-6">Middle East Market Penetration</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Market Status Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {marketData.map((country) => (
            <div
              key={country.id}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedCountry?.id === country.id 
                  ? 'ring-2 ring-blue-500 shadow-lg' 
                  : 'shadow hover:shadow-md'
              }`}
              style={{
                backgroundColor: `${getStatusColor(country.status)}20`,
                borderLeft: `4px solid ${getStatusColor(country.status)}`
              }}
              onClick={() => setSelectedCountry(selectedCountry?.id === country.id ? null : country)}
            >
              <h4 className="font-bold text-lg mb-2">{country.name}</h4>
              <p className="text-sm text-gray-600">Phase: {country.phase}</p>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${country.penetration}%`,
                    backgroundColor: getStatusColor(country.status)
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              {selectedCountry ? (
                <div className="space-y-4">
                  <h4 className="font-bold text-xl">{selectedCountry.name}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Market Phase</p>
                      <p className="font-semibold">{selectedCountry.phase}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Healthcare Facilities</p>
                      <p className="font-semibold">{selectedCountry.facilities}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Market Size</p>
                      <p className="font-semibold">{selectedCountry.marketSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Market Penetration</p>
                      <p className="font-semibold">{selectedCountry.penetration}%</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Select a country to view details
                </div>
              )}
            </CardContent>
          </Card>

          {/* Legend */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold mb-3">Market Status</h5>
            <div className="space-y-2">
              {[
                { status: 'active' as const, label: 'Active Market' },
                { status: 'upcoming' as const, label: 'Launching Soon' },
                { status: 'planned' as const, label: 'Planned Entry' }
              ].map((item) => (
                <div key={item.status} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: getStatusColor(item.status) }}
                  />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Active Markets', value: '1' },
          { label: 'Launching 2025', value: '3' },
          { label: 'Total Facilities', value: '7,200+' },
          { label: 'Market Potential', value: '$93B' }
        ].map((metric, index) => (
          <div 
            key={index}
            className="bg-blue-50 p-4 rounded-lg text-center"
          >
            <p className="text-gray-600 text-sm">{metric.label}</p>
            <p className="text-xl font-bold text-blue-600">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketHeatmap;