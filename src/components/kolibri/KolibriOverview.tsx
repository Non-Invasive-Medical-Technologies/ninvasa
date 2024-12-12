import React from 'react';
import { Brain, Cloud, Shield, Activity, Heart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Deep learning algorithms for accurate health assessment'
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Real-time remote monitoring and data synchronization'
  },
  {
    icon: Shield,
    title: 'Clinical Validation',
    description: 'Extensively tested and validated through clinical trials'
  },
  {
    icon: Activity,
    title: 'Comprehensive Monitoring',
    description: '40+ health parameters tracked in real-time'
  }
];

const KolibriOverview = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">About KOLIBRI®</h3>
        <div className="prose prose-blue">
          <p className="text-gray-600">
            KOLIBRI® is a noninvasive portable screening device that detects more than 40 health parameters 
            in 2-5 minutes. It identifies pathological conditions and health threats, designed for both 
            private and professional use.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900">For Healthcare Professionals</h4>
            <p className="text-gray-600">
              The innovative KOLIBRI® technology reduces the distance in communication between patient and doctor. 
              Machine learning algorithms enable complex analysis of diagnostic results and early detection of 
              health threats.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900">For Patients and Families</h4>
            <p className="text-gray-600">
              Raises awareness of health between doctor visits through simple 2-5 minute measurements. 
              Especially useful for heart disease and type 2 diabetes patients, and career-oriented people 
              over 40.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-4 bg-white border border-blue-100 rounded-lg">
              <feature.icon className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KolibriOverview;