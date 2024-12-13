import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Calculator, DollarSign, TrendingUp, Clock, Target, Users, Activity, ArrowRight, PieChart, Repeat } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

const ROICalculator = () => {
  const [selectedTests, setSelectedTests] = useState(50);
  const [showDetails, setShowDetails] = useState(false);
  const deviceCost = 180000;
  const avgTestPrice = 200;
  const operatingCost = 20;
  const daysPerYear = 365;

  const roi = (() => {
    const annualTests = selectedTests * daysPerYear;
    const annualRevenue = annualTests * avgTestPrice;
    const annualCosts = (annualTests * operatingCost) + deviceCost;
    const annualProfit = annualRevenue - annualCosts;
    const roi = (annualProfit / deviceCost) * 100;
    const breakEvenDays = deviceCost / ((avgTestPrice - operatingCost) * selectedTests);
    const monthlyRevenue = annualRevenue / 12;
    const monthlyProfit = annualProfit / 12;

    return {
      annualRevenue,
      annualProfit,
      monthlyRevenue,
      monthlyProfit,
      roi,
      breakEvenDays: Math.ceil(breakEvenDays),
      annualTests,
      dailyRevenue: annualRevenue / 365,
      dailyProfit: annualProfit / 365
    };
  })();

  const metrics = [
    {
      label: 'Monthly Revenue',
      value: roi.monthlyRevenue,
      prefix: '$',
      color: 'blue',
      icon: DollarSign,
      subtext: 'Per month average'
    },
    {
      label: 'Monthly Profit',
      value: roi.monthlyProfit,
      prefix: '$',
      color: 'green',
      icon: TrendingUp,
      subtext: 'Net monthly earnings'
    },
    {
      label: 'Annual Revenue',
      value: roi.annualRevenue,
      prefix: '$',
      color: 'blue',
      icon: PieChart,
      subtext: 'Yearly potential'
    },
    {
      label: 'Annual Profit',
      value: roi.annualProfit,
      prefix: '$',
      color: 'green',
      icon: Target,
      subtext: 'Net annual earnings'
    }
  ];

  return (
    <Card className="p-6 bg-white shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold">ROI Calculator</h3>
            <p className="text-sm text-gray-600">Calculate potential returns</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
          <Users className="w-5 h-5 text-blue-600" />
          <select 
            value={selectedTests}
            onChange={(e) => setSelectedTests(Number(e.target.value))}
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {[20, 30, 40, 50, 60, 70, 80].map(value => (
              <option key={value} value={value}>{value} tests/day</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg ${
              metric.color === 'green' ? 'bg-green-50 hover:bg-green-100' : 'bg-blue-50 hover:bg-blue-100'
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setShowDetails(!showDetails)}
          >
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className={`w-5 h-5 ${
                metric.color === 'green' ? 'text-green-600' : 'text-blue-600'
              }`} />
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
            <p className={`text-xl font-bold ${
              metric.color === 'green' ? 'text-green-600' : 'text-blue-600'
            }`}>
              <AnimatedNumber 
                value={metric.value} 
                prefix={metric.prefix} 
              />
            </p>
            <p className="text-xs text-gray-500 mt-1">{metric.subtext}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">ROI</p>
          </div>
          <p className="text-xl font-bold text-blue-600">
            <AnimatedNumber value={roi.roi} suffix="%" />
          </p>
          <p className="text-xs text-gray-500 mt-1">Return on investment</p>
        </div>
        
        <div className="p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600">Break-even</p>
          </div>
          <p className="text-xl font-bold text-green-600">
            <AnimatedNumber value={roi.breakEvenDays} suffix=" days" />
          </p>
          <p className="text-xs text-gray-500 mt-1">Time to profit</p>
        </div>

        <div className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Repeat className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Annual Tests</p>
          </div>
          <p className="text-xl font-bold text-blue-600">
            <AnimatedNumber value={roi.annualTests} />
          </p>
          <p className="text-xs text-gray-500 mt-1">Total yearly tests</p>
        </div>
      </div>

      {showDetails && (
        <div className="mt-4 grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg animate-fadeIn">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              Daily Metrics
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Revenue:</span>
                <span className="font-semibold">${roi.dailyRevenue.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Profit:</span>
                <span className="font-semibold">${roi.dailyProfit.toFixed(0)}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              Unit Economics
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Device Cost:</span>
                <span className="font-semibold">${deviceCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Test Price:</span>
                <span className="font-semibold">${avgTestPrice}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ROICalculator;