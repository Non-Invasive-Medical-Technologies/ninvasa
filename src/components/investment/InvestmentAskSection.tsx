import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import InvestmentHeader from './InvestmentHeader';
import FundAllocationChart from './FundAllocationChart';
import FundDetails from './FundDetails';
import Milestones from './Milestones';
import InvestmentHighlights from './InvestmentHighlights';
import type { FundingAllocation, Milestone } from './types';

const InvestmentAskSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fundingAllocation: FundingAllocation[] = [
    { name: 'R&D', value: 40, color: '#0039a6', description: 'Product development and enhancements' },
    { name: 'Human Capital', value: 30, color: '#0067dd', description: 'Key team expansion' },
    { name: 'Marketing', value: 15, color: '#47a3ff', description: 'Market penetration and branding' },
    { name: 'Regulatory', value: 10, color: '#99ccff', description: 'Certifications and compliance' },
    { name: 'Operations', value: 5, color: '#cce6ff', description: 'Infrastructure and setup' }
  ];

  const milestones: Milestone[] = [
    { quarter: 'Q2 2024', milestone: 'UAE Market Entry', completion: 100 },
    { quarter: 'Q4 2024', milestone: 'Saudi Arabia Expansion', completion: 75 },
    { quarter: 'Q2 2025', milestone: 'Qatar & Oman Launch', completion: 50 },
    { quarter: 'Q4 2025', milestone: 'Kuwait Entry', completion: 25 }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % fundingAllocation.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [fundingAllocation.length]);

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h2 className="text-3xl font-bold">Investment Opportunity</h2>
        <p className="text-lg opacity-90">Strategic growth funding for Middle East expansion</p>
      </CardHeader>
      <CardContent className="p-8">
        <InvestmentHeader isVisible={isVisible} />
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          <FundAllocationChart 
            fundingAllocation={fundingAllocation}
            activeSection={activeSection}
          />
          <FundDetails 
            fundingAllocation={fundingAllocation}
            activeSection={activeSection}
          />
        </div>

        <Milestones milestones={milestones} isVisible={isVisible} />
        <InvestmentHighlights isVisible={isVisible} />
      </CardContent>
    </Card>
  );
};

export default InvestmentAskSection;
