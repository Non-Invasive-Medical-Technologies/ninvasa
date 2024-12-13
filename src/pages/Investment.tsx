import React from 'react';
import FinancialDeck from '../components/investment/FinancialDeck';

const Investment = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-medical-600">Investment Opportunity</h1>
      <div className="section-fade-in">
        <FinancialDeck />
      </div>
    </div>
  );
};

export default Investment;