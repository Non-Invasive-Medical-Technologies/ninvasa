import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, Users, TrendingUp, Globe, Award, Heart, Shield } from 'lucide-react';

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
            <img 
              src="/lovable-uploads/1070924e-f453-4130-a2af-9f61b910e9b9.png" 
              alt="Ninvasa Logo" 
              className="h-16" 
            />
          </div>
          <h1 className="text-3xl font-bold text-medical-800">
            Pioneering Non-Invasive Medical Diagnostics
          </h1>
          <p className="text-xl text-medical-600">
            Advanced Healthcare Solutions for the Middle East
          </p>
        </div>

        {/* What We Do Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Our Technology Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-medical-600" />
                  <h3 className="font-semibold">ANESA Platform</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>136+ health parameters analysis</li>
                  <li>6-12 minute screening time</li>
                  <li>Non-invasive diagnostics</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-medical-600" />
                  <h3 className="font-semibold">KOLIBRI Platform</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>40+ health parameters</li>
                  <li>2-5 minute analysis</li>
                  <li>Remote monitoring capabilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Opportunity */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Market Opportunity</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold mb-2">Target Markets</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>UAE (2024-2025)</li>
                  <li>Saudi Arabia & Qatar (2025-2026)</li>
                  <li>Kuwait & Jordan (2026-2027)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Market Size</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Total TAM: $50B+</li>
                  <li>CAGR: 25.2%</li>
                  <li>Healthcare Facilities: 30K+</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Team */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-medical-600" />
                  <h3 className="font-semibold">Scientific Leadership</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Dr. Anatolii Pulavskyi - Scientific Research</li>
                  <li>Dr. Stanislav Kryvenko - Chief Scientific Officer</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-medical-600" />
                  <h3 className="font-semibold">Medical & Technical</h3>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Dr. Liudmyla Kryvenko - Chief Medical Officer</li>
                  <li>Dr. Sergii Kryvenko - CTO</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Opportunity */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Investment Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-medical-50 rounded-lg text-center">
                <Shield className="w-6 h-6 text-medical-600 mx-auto mb-2" />
                <div className="text-lg font-bold">5+</div>
                <div className="text-sm">Patents Filed</div>
              </div>
              <div className="p-4 bg-medical-50 rounded-lg text-center">
                <Target className="w-6 h-6 text-medical-600 mx-auto mb-2" />
                <div className="text-lg font-bold">30K+</div>
                <div className="text-sm">Target Facilities</div>
              </div>
              <div className="p-4 bg-medical-50 rounded-lg text-center">
                <Globe className="w-6 h-6 text-medical-600 mx-auto mb-2" />
                <div className="text-lg font-bold">7+</div>
                <div className="text-sm">Target Markets</div>
              </div>
              <div className="p-4 bg-medical-50 rounded-lg text-center">
                <TrendingUp className="w-6 h-6 text-medical-600 mx-auto mb-2" />
                <div className="text-lg font-bold">995%</div>
                <div className="text-sm">ROI Target</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-medical-50 rounded-lg">
              <h3 className="font-semibold mb-2">Investment Terms</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-medical-600">Equity Range</div>
                  <div className="font-semibold">15-20%</div>
                </div>
                <div>
                  <div className="text-medical-600">Target Raise</div>
                  <div className="font-semibold">$500,000</div>
                </div>
                <div>
                  <div className="text-medical-600">Valuation</div>
                  <div className="font-semibold">$2.5M</div>
                </div>
                <div>
                  <div className="text-medical-600">Use of Funds</div>
                  <div className="font-semibold">Market Entry</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OnePager;