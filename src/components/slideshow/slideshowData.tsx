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
    section: "Business Model",
    title: "Our Business Model",
    component: <BusinessModelSection />,
  },
  {
    id: 4,
    section: "Technology",
    title: "Our Technology Platform",
    component: (
      <div className="space-y-8">
        <AnesaTechnology />
      </div>
    ),
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
                  <li>Minimum investment: $5M</li>
                  <li>Equity stake: 15-25%</li>
                  <li>Board representation</li>
                  <li>Strategic partnership opportunities</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Venture Debt</h3>
                <ul className="space-y-2">
                  <li>Loan amount: $2-5M</li>
                  <li>Term: 36-48 months</li>
                  <li>Interest rate: 8-12%</li>
                  <li>Warrants: 5-10%</li>
                </ul>
              </div>
              <div className="p-6 bg-medical-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Republic Note</h3>
                <ul className="space-y-2">
                  <li>Investment range: $100K-1M</li>
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
