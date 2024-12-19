import React from 'react';
import { Brain, Clock, Activity, Shield, Users, Heart } from 'lucide-react';

const CoreTeamSection = () => {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-medical-50 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-gray-700">
          Transforming healthcare through innovative diagnostic solutions
        </p>
      </div>
      <div className="w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">THE CORE TEAM</h2>
          <p className="text-xl text-blue-500">"Leading experts in the non-invasive screening industry"</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Anatolii Pulavskyi</h3>
              <p className="font-semibold text-blue-600">Scientific Research and Inventor</p>
              <p className="text-gray-600">
                20 years in development of non-invasive medical technologies. Member of New York Medical academy.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Stanislav Kryvenko</h3>
              <p className="font-semibold text-blue-600">Chief scientific officer</p>
              <p className="text-gray-600">
                Associate Professor of INE, Candidate of Technical Sciences. Over 100 publications.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Liudmyla Kryvenko</h3>
              <p className="font-semibold text-blue-600">Chief medical officer</p>
              <p className="text-gray-600">
                Professor at Kharkiv National Medical University, PhD, Doctor of Medical sciences. 15+ years of medical practice.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Sergii Kryvenko</h3>
              <p className="font-semibold text-blue-600">CTO</p>
              <p className="text-gray-600">
                PhD in data compression and filtering. Author of 80 scientific publications. IEEE Engineering chairman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeamSection;