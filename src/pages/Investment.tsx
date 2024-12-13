import React from 'react';
import FinancialDeck from '../components/investment/FinancialDeck';
import InvestmentAskSection from '../components/investment/InvestmentAskSection';
import MarketSection from '../components/investment/MarketSection';

const Investment = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-medical-600">Investment Opportunity</h1>
      <div className="space-y-12">
        <div className="section-fade-in">
          <FinancialDeck />
        </div>
        <div className="section-fade-in">
          <MarketSection />
        </div>
        <div className="section-fade-in">
          <InvestmentAskSection />
        </div>
      </div>
    </div>
  );
};

export default Investment;