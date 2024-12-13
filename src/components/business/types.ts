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

export interface MetricProps {
  label: string;
  value: string;
  icon: React.ComponentType;
}