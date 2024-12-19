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

export const slides = [
  {
    id: 1,
    section: "Executive Overview",
    title: "Revolutionizing Healthcare Diagnostics",
    component: (
      <div className="space-y-6">
        <div className="p-6 bg-medical-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-700">
            Transforming healthcare through innovative diagnostic solutions
          </p>
        </div>
        <PatentTechnologySection />
        <StrategicPartnership />
      </div>
    ),
  },
  {
    id: 2,
    section: "Business Model",
    title: "Our Business Model",
    component: <BusinessModelSection />,
  },
  {
    id: 3,
    section: "Technology",
    title: "Our Technology Platform",
    component: (
      <div className="space-y-8">
        <AnesaTechnology />
      </div>
    ),
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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