export interface FundingAllocation {
  name: string;
  value: number;
  color: string;
  description: string;
}

export interface Milestone {
  quarter: string;
  milestone: string;
  completion: number;
}