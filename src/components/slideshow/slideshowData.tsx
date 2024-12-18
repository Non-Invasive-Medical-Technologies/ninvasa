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

export const slides = [
  {
    id: 1,
    section: "Executive Overview",
    title: "Revolutionizing Healthcare Diagnostics",
    component: (
      <div className="space-y-6">
        <EnhancedPitchDeck />
        <PatentTechnologySection />
        <StrategicPartnership />
      </div>
    ),
  },
  {
    id: 2,
    section: "Company Overview",
    title: "Our Business Model",
    component: (
      <div className="space-y-6">
        <BusinessModelSection />
        <MarketVerticalsSection />
      </div>
    ),
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    section: "Investment",
    title: "Investment Opportunity",
    component: (
      <div className="space-y-6">
        <ROICalculator />
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Funding Required</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={10} prefix="$" suffix="M" />
            </div>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expected ROI</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={300} suffix="%" duration={1200} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    section: "Investment Models",
    title: "Funding Options & Allocation",
    component: <InvestmentAskSection />,
  },
];