import React from 'react';
import { Activity, Heart, BarChart2, Brain, Shield } from 'lucide-react';

const ClinicalApplications = () => {
  const parameters = {
    hemogram: [
      'Hemoglobin (HGB)',
      'Erythrocytes (RBC)',
      'Leukocytes (WBC)',
      'Mean cell haemoglobin (MCH)',
      'Mean cell volume (MCV)',
      'Lymphocytes'
    ],
    cardiac: [
      'Heart rate variability',
      'ECG morphology',
      'Cardiac output',
      'Stroke volume',
      'Myocardial oxygen consumption',
      'Vascular resistance'
    ],
    metabolic: [
      'Glucose levels',
      'Lipid profile',
      'Electrolyte balance',
      'Protein metabolism',
      'Carbohydrate metabolism',
      'Energy expenditure'
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Clinical Applications & Parameter Analysis</h2>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Non-Invasive Analysis */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-semibold">Non-Invasive Analysis</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>No blood draws required</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Painless procedure</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Immediate results</span>
              </li>
            </ul>
          </div>

          {/* AI-Powered Analytics */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-semibold">AI-Powered Analytics</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Deep learning algorithms</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Pattern recognition</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Predictive analytics</span>
              </li>
            </ul>
          </div>

          {/* Clinical Validation */}
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-semibold">Clinical Validation</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Multiple clinical trials</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Regulatory compliance</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>ISO certification</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Parameter Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hemogram Parameters */}
          <div className="p-6 border border-blue-100 rounded-lg">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-semibold">Hemogram Analysis</h3>
            </div>
            <ul className="space-y-2">
              {parameters.hemogram.map((param, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>{param}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cardiac Parameters */}
          <div className="p-6 border border-blue-100 rounded-lg">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-semibold">Cardiac Analysis</h3>
            </div>
            <ul className="space-y-2">
              {parameters.cardiac.map((param, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>{param}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metabolic Parameters */}
          <div className="p-6 border border-blue-100 rounded-lg">
            <div className="flex items-center mb-4">
              <BarChart2 className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-lg font-semibold">Metabolic Analysis</h3>
            </div>
            <ul className="space-y-2">
              {parameters.metabolic.map((param, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>{param}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalApplications;