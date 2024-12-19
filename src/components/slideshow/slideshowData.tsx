import EnhancedPitchDeck from '@/components/business/EnhancedPitchDeck';
import CompetitionAnalysis from '@/components/competition/CompetitionAnalysis';
import CompetitorMatrix from '@/components/competition/CompetitorMatrix';
import { AnimatedNumber } from '@/components/business/AnimatedNumber';
import BusinessModelSection from '@/components/business/BusinessModelSection';
import MarketVerticalsSection from '@/components/business/MarketVerticalsSection';
import GCCMarketAnalysis from '@/components/business/GCCMarketAnalysis';
import AnimatedMarketHeatmap from '@/components/business/AnimatedMarketHeatmap';
import ROICalculator from '@/components/business/ROICalculator';
import PatentTechnologySection from '@/components/business/PatentTechnologySection';
import StrategicPartnership from '@/components/business/StrategicPartnership';
import InvestmentAskSection from '@/components/investment/InvestmentAskSection';
import AnesaTechnology from '@/components/anesa/AnesaTechnology';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Clock, Activity, Shield, Users, Heart } from 'lucide-react';

const CoreTeamSection = () => {
  return (
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
  );
};

const TechnologyOverviewSection = () => {
  return (
    <div className="space-y-8">
      {/* ANESA Platform */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">ANESA Technology Platform</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revolutionary Diagnostics */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Revolutionary Diagnostics</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">136+ Health Parameters</p>
                    <p className="text-sm text-gray-600">Comprehensive health analysis in single screening</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">Rapid Analysis</p>
                    <p className="text-sm text-gray-600">Complete screening in 6-12 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">AI-Powered Analysis</p>
                    <p className="text-sm text-gray-600">Deep learning algorithms for accurate diagnostics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patent Advantages */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Patent Advantages</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">Protected Technology</p>
                    <p className="text-sm text-gray-600">Patented non-invasive screening methodology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">Unique Algorithms</p>
                    <p className="text-sm text-gray-600">Proprietary AI analysis systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KOLIBRI Platform */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">KOLIBRI: Democratizing Healthcare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home Health Innovation */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Home Health Innovation</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">40+ Health Parameters</p>
                  <p className="text-sm text-gray-600">Comprehensive home health monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Real-Time Analysis</p>
                  <p className="text-sm text-gray-600">Instant health insights and alerts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium">Remote Monitoring</p>
                  <p className="text-sm text-gray-600">Connected healthcare ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Impact */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Market Impact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Remote patient monitoring capabilities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Cloud-based health data management</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Preventive healthcare focus</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Easy integration with healthcare systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const slides = [
  {
    id: 1,
    section: "Executive Overview",
    title: "Revolutionizing Healthcare Diagnostics",
    component: (
      <div className="space-y-8">
        <div className="p-6 bg-medical-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-700">
            Transforming healthcare through innovative diagnostic solutions
          </p>
        </div>
        <CoreTeamSection />
      </div>
    ),
  },
  {
    id: 2,
    section: "Technology & Patents",
    title: "Our Innovation Portfolio",
    component: (
      <div className="space-y-8">
        <PatentTechnologySection />
        <StrategicPartnership />
      </div>
    ),
  },
  {
    id: 3,
    section: "Technology Overview",
    title: "Our Technology Platforms",
    component: <TechnologyOverviewSection />,
  },
  {
    id: 4,
    section: "Business Model",
    title: "Our Business Model",
    component: <BusinessModelSection />,
  },
  {
    id: 5,
    section: "Market Analysis",
    title: "Market Opportunity",
    component: (
      <div className="space-y-8">
        <GCCMarketAnalysis />
        <AnimatedMarketHeatmap />
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Total Addressable Market</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={50} prefix="$" suffix="B" />
            </div>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">CAGR</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={22} suffix="%" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    section: "Competition",
    title: "Competitive Analysis",
    component: (
      <div className="space-y-8">
        <CompetitionAnalysis />
        <CompetitorMatrix />
      </div>
    ),
  },
  {
    id: 7,
    section: "Investment Options",
    title: "Funding Options",
    component: (
      <Card>
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Private Equity</h3>
                <ul className="space-y-2">
                  <li>Minimum investment: $500K-1M</li>
                  <li>Equity stake: 5-10%</li>
                  <li>Board representation</li>
                  <li>Strategic partnership opportunities</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Venture Debt</h3>
                <ul className="space-y-2">
                  <li>Loan amount: $500K-1M</li>
                  <li>Term: 36-48 months</li>
                  <li>Interest rate: 8-12%</li>
                  <li>Warrants: 5-10%</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">SAFE Note</h3>
                <ul className="space-y-2">
                  <li>Investment range: $1M-1.5M</li>
                  <li>Revenue share: 3-5%</li>
                  <li>Quarterly distributions</li>
                  <li>No equity dilution</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Strategic Investment</h3>
                <ul className="space-y-2">
                  <li>Flexible investment structure</li>
                  <li>Industry expertise</li>
                  <li>Market access</li>
                  <li>Technology collaboration</li>
                </ul>
              </div>
            </div>
            <ROICalculator />
          </div>
        </CardContent>
      </Card>
    ),
  },
];
