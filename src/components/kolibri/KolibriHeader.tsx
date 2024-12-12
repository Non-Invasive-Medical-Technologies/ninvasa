import React from 'react';

const KolibriHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12">
          <svg viewBox="0 0 500 150" className="w-full h-full">
            <g>
              <circle cx="75" cy="75" r="70" fill="none" stroke="#14b8a6" strokeWidth="5"/>
              <path d="M75 25 L60 65 L90 65 Z M60 65 L75 105 L90 65 Z" fill="#14b8a6"/>
            </g>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-teal-500">KOLIBRI Health Platform</h2>
      </div>
      <div className="flex space-x-4">
        {['overview', 'parameters', 'analytics'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${activeTab === tab 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KolibriHeader;