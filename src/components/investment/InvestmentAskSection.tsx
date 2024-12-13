import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, TrendingUp, Calendar, Shield, Users, ArrowRight, ChevronDown, Lock, Unlock } from 'lucide-react';

const InvestmentAskSection = () => {
  const [selectedModel, setSelectedModel] = useState('vc');
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const investmentModels = {
    vc: {
      title: 'Venture Capital',
      amount: '$500,000',
      equity: '15-20%',
      benefits: [
        'Strategic partner network',
        'Industry expertise',
        'Growth acceleration',
        'Follow-on potential'
      ],
      terms: {
        type: 'Series A',
        valuation: '$2.5M',
        minimumInvestment: '$100,000',
        boardSeat: 'Yes',
        proration: 'Full'
      },
      color: '#0039a6'
    },
    debt: {
      title: 'Venture Debt',
      amount: '$400,000',
      interest: '12%',
      benefits: [
        'Non-dilutive capital',
        'Flexible repayment',
        'Lower cost of capital',
        'Maintain control'
      ],
      terms: {
        type: 'Convertible Note',
        maturity: '36 months',
        interestRate: '12%',
        warrants: '10%',
        securityType: 'Secured'
      },
      color: '#0067dd'
    },
    pe: {
      title: 'Private Equity',
      amount: '$1,000,000',
      equity: '25-30%',
      benefits: [
        'Larger capital injection',
        'Operational expertise',
        'Strategic acquisitions',
        'Exit planning'
      ],
      terms: {
        type: 'Growth Equity',
        valuation: '$3.5M',
        minimumInvestment: '$500,000',
        boardSeats: 'Two',
        controlRights: 'Significant'
      },
      color: '#47a3ff'
    },
    safe: {
      title: 'SAFE Note (Republic)',
      amount: '$250,000',
      terms: 'MFN',
      benefits: [
        'Community building',
        'Market validation',
        'Brand awareness',
        'Future customers'
      ],
      terms: {
        type: 'SAFE',
        valuation: 'N/A',
        minimumInvestment: '$100',
        discount: '20%',
        platform: 'Republic'
      },
      color: '#99ccff'
    }
  };

  const fundingAllocation = [
    { name: 'R&D', value: 40, color: '#0039a6' },
    { name: 'Human Capital', value: 30, color: '#0067dd' },
    { name: 'Marketing', value: 15, color: '#47a3ff' },
    { name: 'Regulatory', value: 10, color: '#99ccff' },
    { name: 'Operations', value: 5, color: '#cce6ff' }
  ];

  const InvestmentModelCard = ({ model, id }) => (
    <div 
      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        selectedModel === id 
          ? 'bg-blue-50 border-2 border-blue-600 transform scale-105' 
          : 'bg-white border-2 border-gray-200 hover:border-blue-300'
      }`}
      onClick={() => setSelectedModel(id)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: `all 0.5s ease-in-out`
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{model.title}</h3>
        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
          {model.amount}
        </div>
      </div>
      
      <div className="space-y-4">
        {model.equity && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Equity Range:</span>
            <span className="font-semibold">{model.equity}</span>
          </div>
        )}
        {model.interest && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Interest Rate:</span>
            <span className="font-semibold">{model.interest}</span>
          </div>
        )}
        
        <div className="pt-4">
          <h4 className="font-semibold mb-2">Key Benefits</h4>
          <ul className="space-y-2">
            {model.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-blue-600" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedModel === id && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold mb-2">Terms</h4>
          <div className="space-y-2">
            {Object.entries(model.terms).map(([key, value], index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h2 className="text-3xl font-bold">Investment Models</h2>
        <p className="text-lg opacity-90">Flexible funding options for strategic growth</p>
      </CardHeader>
      <CardContent className="p-8">
        {/* Investment Models Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {Object.entries(investmentModels).map(([id, model], index) => (
            <InvestmentModelCard key={id} model={model} id={id} />
          ))}
        </div>

        {/* Fund Allocation */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Fund Allocation</h3>
            <div style={{ height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={fundingAllocation}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value }) => `${name} (${value}%)`}
                  >
                    {fundingAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Investment Highlights</h3>
            {[
              { icon: Users, label: 'Target Market', value: '$50B by 2027' },
              { icon: TrendingUp, label: 'Growth Rate', value: '68% YoY' },
              { icon: Shield, label: 'IP Protection', value: '5+ Patents' },
              { icon: Lock, label: 'Exclusivity', value: 'Middle East Region' }
            ].map((metric, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <metric.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{metric.label}</span>
                </div>
                <span className="font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Investment Timeline</h3>
          <div className="flex justify-between items-center">
            {['Due Diligence', 'Term Sheet', 'Legal & Compliance', 'Closing'].map((stage, index) => (
              <div 
                key={index}
                className="flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : '20px'})`,
                  transition: `all 0.5s ease-in-out ${index * 0.1}s`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="text-sm mt-2">{stage}</div>
                <div className="text-xs text-gray-500">Week {(index + 1) * 2}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentAskSection;
