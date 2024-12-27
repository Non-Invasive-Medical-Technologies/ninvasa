import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, Users, TrendingUp, Globe, Award } from 'lucide-react';

const OnePager = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-4">
            <img src="/lovable-uploads/1a8e3902-3961-4b94-ac4d-30ae486e8d1d.png" alt="Company Logo" className="h-16" />
          </div>
          <h1 className="text-3xl font-bold text-medical-800">
            PEOPLE-CENTRIC MEDICAL SCHEDULING SOLUTIONS
          </h1>
          <p className="text-xl text-medical-600">
            for Oncology Treatments Worldwide
          </p>
        </div>

        {/* What We Do Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">What We Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We resolve resource-intensive, multi-stage and, multi-appointment healthcare processes</li>
              <li>We develop decision-making tools for efficient management of healthcare processes</li>
            </ul>
          </CardContent>
        </Card>

        {/* Problem We Solve */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">The Problem We Solve</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {['REGISTRY', 'IMAGING', 'CONTOURING', 'PLANNING', 'DELIVERY'].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-medical-100 text-medical-800 px-4 py-2 rounded">
                      {step}
                    </div>
                    {index < 4 && <div className="text-medical-500 mx-2">→</div>}
                  </div>
                ))}
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Oncology Radiotherapy Planning involves complex constraints and requirements</li>
                <li>Assignment, Scheduling, and Programming is challenging and very inefficient manually</li>
                <li>Very time-consuming tasks and difficult to find good solutions manually</li>
                <li>Currently impossible to handle the tactical side (i.e. how to design the OR Unit)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Our Solution */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Our Solution (RODAS)</h2>
            <p className="mb-4">
              Allocating, scheduling, and programming resources to patients throughout an OR Unit using
              Machine Learning (ML) and Artificial Intelligence (AI) decision-making algorithms,
              provided as SaaS (Software-as-a-Service) business model.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-4 bg-medical-50 rounded">
                <p className="font-semibold">People-centric solutions</p>
              </div>
              <div className="text-center p-4 bg-medical-50 rounded">
                <p className="font-semibold">Holistic Process Approach</p>
              </div>
              <div className="text-center p-4 bg-medical-50 rounded">
                <p className="font-semibold">Role customization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Size */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Market Size</h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold">$600M</span> globally in 2026, estimated to grow
                <span className="font-bold"> 9-13% CAGR</span> next years excluding AI impact.
              </p>
              <p>
                We estimate adding AI will grow this market at
                <span className="font-bold"> 25-30% CAGR</span>.
              </p>
              <p>
                <span className="font-bold">SOM:</span> Initial target, 17 countries with 1,164 hospitals
                and 3,178 LINACs (Linear Accelerators).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Current Status</h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold">MVP fully developed</span> – currently validated in 2 hospitals
              </p>
              <p>
                Pilot agreements signed in 3 hospitals and negotiations in 8 more.
                <span className="font-bold"> Demand Globally Validated</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Investment Opportunity */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Investment Opportunity</h2>
            <div className="space-y-4">
              <p>Currently raising <span className="font-bold">400,000 € at 2.5 mill. € pre-money valuation</span></p>
              <p><span className="font-bold">264,000 €</span> already raised</p>
              <p>Additional <span className="font-bold">180,000 € from ENISA</span> (Spanish R&D soft loans) secured in Nov 2024</p>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-medical-50 p-4 rounded-lg">
            <TrendingUp className="h-8 w-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">25-30%</div>
            <div className="text-sm text-gray-600">Expected CAGR</div>
          </div>
          <div className="bg-medical-50 p-4 rounded-lg">
            <Users className="h-8 w-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">1,164+</div>
            <div className="text-sm text-gray-600">Target Hospitals</div>
          </div>
          <div className="bg-medical-50 p-4 rounded-lg">
            <Globe className="h-8 w-8 text-medical-600 mb-2" />
            <div className="text-2xl font-bold text-medical-600">17</div>
            <div className="text-sm text-gray-600">Target Countries</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnePager;