import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedMarketHeatmap = () => {
  const [phase, setPhase] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const marketData = [
    {
      id: 'uae',
      name: 'UAE',
      phase: 1,
      year: '2024-2025',
      status: 'active',
      penetration: 100,
      facilities: '2,000+',
      marketSize: '$21B'
    },
    {
      id: 'sa',
      name: 'Saudi Arabia',
      phase: 2,
      year: '2025-2026',
      status: 'upcoming',
      penetration: 75,
      facilities: '3,500+',
      marketSize: '$45B'
    },
    {
      id: 'qa',
      name: 'Qatar',
      phase: 2,
      year: '2025-2026',
      status: 'upcoming',
      penetration: 75,
      facilities: '800+',
      marketSize: '$12B'
    },
    {
      id: 'kw',
      name: 'Kuwait',
      phase: 3,
      year: '2026-2027',
      status: 'planned',
      penetration: 50,
      facilities: '900+',
      marketSize: '$15B'
    }
  ];

  // Auto-advance phases
  useEffect(() => {
    if (!showAll) {
      const timer = setInterval(() => {
        setPhase((prev) => (prev < 3 ? prev + 1 : 0));
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [showAll]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#0039a6';
      case 'upcoming': return '#0067dd';
      case 'planned': return '#99ccff';
      default: return '#e5e7eb';
    }
  };

  return (
    <div className="my-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-center mb-6"
      >
        <h3 className="text-xl font-bold">Middle East Market Penetration</h3>
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showAll ? 'Show Animation' : 'Show All Markets'}
        </button>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Market Status Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <AnimatePresence>
            {marketData
              .filter(country => showAll || country.phase <= phase)
              .map((country) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="font-bold text-lg mb-2">{country.name}</h4>
                    <p className="text-sm text-gray-600">Phase: {country.year}</p>
                    <motion.div 
                      className="mt-3 w-full bg-gray-200 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.div
                        className="h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${country.penetration}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ backgroundColor: getStatusColor(country.status) }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry?.id || 'empty'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  {selectedCountry ? (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-bold text-xl">{selectedCountry.name}</h4>
                      <div className="space-y-3">
                        {[
                          { label: 'Market Phase', value: selectedCountry.year },
                          { label: 'Healthcare Facilities', value: selectedCountry.facilities },
                          { label: 'Market Size', value: selectedCountry.marketSize },
                          { label: 'Market Penetration', value: `${selectedCountry.penetration}%` }
                        ].map((detail, index) => (
                          <motion.div
                            key={detail.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                          >
                            <p className="text-sm text-gray-600">{detail.label}</p>
                            <p className="font-semibold">{detail.value}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      Select a country to view details
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Phase Indicator */}
          <motion.div 
            className="mt-6 p-4 bg-blue-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h5 className="font-semibold mb-4">Expansion Timeline</h5>
            <div className="space-y-3">
              {[1, 2, 3].map((phaseNum) => (
                <div 
                  key={phaseNum}
                  className={`h-2 rounded-full bg-gray-200 overflow-hidden ${
                    phase >= phaseNum ? 'bg-blue-600' : ''
                  }`}
                >
                  <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: phase >= phaseNum ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Summary Metrics */}
      <motion.div 
        className="grid grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        {[
          { label: 'Active Markets', value: phase },
          { label: 'Launching 2025', value: marketData.filter(c => c.phase === 2).length },
          { label: 'Total Facilities', value: '7,200+' },
          { label: 'Market Potential', value: '$93B' }
        ].map((metric, index) => (
          <motion.div 
            key={index}
            className="bg-blue-50 p-4 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + (index * 0.1) }}
          >
            <p className="text-gray-600 text-sm">{metric.label}</p>
            <p className="text-xl font-bold text-blue-600">{metric.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedMarketHeatmap;
