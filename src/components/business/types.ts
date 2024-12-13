export interface RevenueModel {
  id: string;
  name: string;
  revenue: number;
  description: string;
  margin: number;
}

export interface MarketVertical {
  name: string;
  potential: number;
  testsPerYear: number;
  avgTestPrice: number;
  color: string;
  details: {
    facilities: number;
    marketSize: string;
    growthRate: string;
  }
}

export interface ROICalculation {
  annualRevenue: number;
  annualProfit: number;
  roi: number;
  breakEvenDays: number;
}

export interface MetricProps {
  label: string;
  value: string;
  icon: React.ComponentType;
}