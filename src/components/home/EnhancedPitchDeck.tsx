import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, RadarChart, Radar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PolarGrid, PolarAngleAxis } from 'recharts';
import { Activity, Clock, Award, Shield, Target, Globe, TrendingUp, DollarSign, Users, Heart, Brain, Check } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  trend: string;
}

interface SolutionBenefit {
  title: string;
  description: string;
  metrics: Metric[];
  icon: React.ElementType;
}

interface CompetitorDetails {
  timeline: string;
  strengths?: string[];
  certifications?: string[];
  focus?: string;
  funding?: string;
}

interface Competitor {
  name: string;
  parameters: number;
  time: number;
  cost: number;
  accuracy: number;
  marketShare?: number;
  innovation?: number;
  details: CompetitorDetails;
}

// EnhancedPitchDeck component
const EnhancedPitchDeck = () => {
  const [activeSection, setActiveSection] = useState('solution');
  const [selectedCompetitor, setSelectedCompetitor] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Color scheme
  const colors = {
    dark: '#0039a6',
    medium: '#0067dd',
    light: '#99ccff'
  };

  // Solution section data
  const solutionBenefits: SolutionBenefit[] = [
    {
      title: "Non-invasive Testing",
      description: "Complete elimination of blood draws and invasive procedures",
      metrics: [
        { label: "Patient Comfort", value: "98%", trend: "+15%" },
        { label: "Risk Reduction", value: "100%", trend: "+40%" }
      ],
      icon: Heart
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning for accurate diagnostics",
      metrics: [
        { label: "Accuracy", value: "99.9%", trend: "+25%" },
        { label: "False Positives", value: "0.1%", trend: "-85%" }
      ],
      icon: Brain
    },
    {
      title: "Rapid Results",
      description: "Immediate diagnostic insights",
      metrics: [
        { label: "Time Saved", value: "95%", trend: "+75%" },
        { label: "Decision Speed", value: "6min", trend: "-90%" }
      ],
      icon: Clock
    }
  ];

  // Competition data with detailed metrics
  const competitorData = {
    established: [
      {
        name: "Our Solution",
        parameters: 136,
        time: 12,
        cost: 150,
        accuracy: 98,
        marketShare: 15,
        details: {
          timeline: "Market leader in non-invasive diagnostics",
          strengths: ["Most parameters", "Fastest results", "Lowest cost"],
          certifications: ["ISO 13485:2016", "CE Mark", "FDA Approval pending"]
        }
      },
      {
        name: "Abbott Labs",
        parameters: 75,
        time: 30,
        cost: 300,
        accuracy: 95,
        marketShare: 25,
        details: {
          timeline: "30+ years in diagnostics",
          strengths: ["Global presence", "Brand recognition"],
          certifications: ["ISO 13485", "CE Mark", "FDA Approved"]
        }
      },
      {
        name: "Siemens",
        parameters: 60,
        time: 45,
        cost: 400,
        accuracy: 94,
        marketShare: 30,
        details: {
          timeline: "Traditional diagnostic leader",
          strengths: ["Wide distribution", "Established protocols"],
          certifications: ["Multiple ISO certs", "CE Mark", "FDA Approved"]
        }
      }
    ],
    startups: [
      {
        name: "Biobeat",
        parameters: 10,
        time: 20,
        cost: 250,
        accuracy: 92,
        innovation: 85,
        details: {
          timeline: "Founded 2020",
          focus: "Wearable diagnostics",
          funding: "$28M Series A"
        }
      },
      {
        name: "Theia Diagnostics",
        parameters: 15,
        time: 25,
        cost: 200,
        accuracy: 90,
        innovation: 80,
        details: {
          timeline: "Founded 2021",
          focus: "Mobile diagnostics",
          funding: "$12M Seed"
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Tabs value={activeSection} onValueChange={setActiveSection}>
        {/* Solution Section */}
        <TabsContent value="solution">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <h2 className="text-3xl font-bold">Revolutionary Diagnostic Solution</h2>
              <p className="text-lg opacity-90">Transforming healthcare with non-invasive technology</p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Key Benefits Grid */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                {solutionBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onMouseEnter={() => setShowDetails(true)}
                    onMouseLeave={() => setShowDetails(null)}
                  >
                    <div className="p-6">
                      <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {benefit.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-blue-50 rounded-lg p-3">
                            <p className="text-sm text-gray-600">{metric.label}</p>
                            <p className="text-lg font-bold text-blue-600">
                              {metric.value}
                              <span className={`text-sm ml-2 ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {metric.trend}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparative Analysis */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Comparative Analysis</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="h-[400px]">
                    <ResponsiveContainer>
                      <RadarChart data={[
                        { metric: 'Speed', traditional: 40, anesa: 95 },
                        { metric: 'Accuracy', traditional: 85, anesa: 98 },
                        { metric: 'Cost', traditional: 50, anesa: 90 },
                        { metric: 'Comfort', traditional: 45, anesa: 100 },
                        { metric: 'Parameters', traditional: 60, anesa: 100 }
                      ]}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" />
                        <Radar name="ANESA" dataKey="anesa" fill={colors.medium} fillOpacity={0.6} />
                        <Radar name="Traditional" dataKey="traditional" fill={colors.light} fillOpacity={0.4} />
                        <Legend />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Time Savings', value: '95%', icon: Clock },
                      { label: 'Cost Reduction', value: '60%', icon: DollarSign },
                      { label: 'Parameter Coverage', value: '136', icon: Activity }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                        <stat.icon className="w-8 h-8 text-blue-600 mr-4" />
                        <div>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Competition Section */}
        <TabsContent value="competition">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <h2 className="text-3xl font-bold">Competitive Landscape</h2>
              <p className="text-lg opacity-90">Comprehensive market analysis</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Established Players Analysis */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Established Players</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer>
                      <RadarChart data={competitorData.established}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <Radar name="Parameters" dataKey="parameters" fill={colors.dark} fillOpacity={0.6} />
                        <Radar name="Time (min)" dataKey="time" fill={colors.medium} fillOpacity={0.6} />
                        <Radar name="Cost ($)" dataKey="cost" fill={colors.light} fillOpacity={0.6} />
                        <Legend />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Startup Comparison */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Startup Landscape</h3>
                  <div className="space-y-4">
                    {competitorData.startups.map((startup, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => setSelectedCompetitor(startup)}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold">{startup.name}</h4>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Innovation Score:</span>
                            <span className="text-blue-600 font-bold">{startup.innovation}%</span>
                          </div>
                        </div>
                        {selectedCompetitor?.name === startup.name && (
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="text-sm">
                              <p className="font-semibold">Timeline:</p>
                              <p className="text-gray-600">{startup.details.timeline}</p>
                            </div>
                            <div className="text-sm">
                              <p className="font-semibold">Focus:</p>
                              <p className="text-gray-600">{startup.details.focus}</p>
                            </div>
                            <div className="text-sm col-span-2">
                              <p className="font-semibold">Funding:</p>
                              <p className="text-gray-600">{startup.details.funding}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ANESA Advantages */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold mb-4">ANESA's Competitive Advantages</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { title: "Most Parameters", value: "136", icon: Activity },
                    { title: "Fastest Results", value: "6-12 min", icon: Clock },
                    { title: "Highest Accuracy", value: "98%", icon: Check },
                    { title: "Lowest Cost", value: "$150", icon: DollarSign }
                  ].map((advantage, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <advantage.icon className="w-8 h-8 text-blue-600 mb-2" />
                      <h4 className="font-semibold">{advantage.title}</h4>
                      <p className="text-2xl font-bold text-blue-600">{advantage.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnhancedPitchDeck;
