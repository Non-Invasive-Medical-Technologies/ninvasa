import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const competitorData = [
  {
    name: 'BL+Medica (ANESA)',
    marketShare: 20,
    tracxnScore: 65,
    fundingAmount: 25,
    type: 'Established',
    location: 'Europe',
    focus: 'Non-invasive diagnostics'
  },
  {
    name: 'Abbott Laboratories',
    marketShare: 15,
    tracxnScore: 58,
    fundingAmount: 43000,
    type: 'Public',
    location: 'United States',
    focus: 'Multi-segment diagnostics'
  },
  {
    name: 'Siemens Healthineers',
    marketShare: 12,
    tracxnScore: 53,
    fundingAmount: 20000,
    type: 'Public',
    location: 'Germany',
    focus: 'Imaging and diagnostics'
  },
  {
    name: 'Roche Diagnostics',
    marketShare: 7,
    tracxnScore: 52,
    fundingAmount: 11000,
    type: 'Public',
    location: 'Switzerland',
    focus: 'Molecular diagnostics'
  },
  {
    name: 'Philips Healthcare',
    marketShare: 6,
    tracxnScore: 50,
    fundingAmount: 19000,
    type: 'Public',
    location: 'Netherlands',
    focus: 'Healthcare technology'
  },
  {
    name: 'Lumetry',
    marketShare: 2,
    tracxnScore: 17.78,
    fundingAmount: 5,
    type: 'Funded',
    location: 'Austria',
    focus: 'Respiratory diseases'
  },
  {
    name: 'MedBrain',
    marketShare: 1.5,
    tracxnScore: 11.49,
    fundingAmount: 2,
    type: 'Seed',
    location: 'Spain',
    focus: 'Clinical Decision Support'
  },
  {
    name: 'Evalyn Healthcare',
    marketShare: 1,
    tracxnScore: 9.29,
    fundingAmount: 1,
    type: 'Funded',
    location: 'India',
    focus: 'Diagnostic Solutions'
  },
  {
    name: 'CapmAI',
    marketShare: 0.8,
    tracxnScore: 8.98,
    fundingAmount: 0,
    type: 'Unfunded',
    location: 'Canada',
    focus: 'Capsule Endoscopy'
  },
  {
    name: 'DxGPT',
    marketShare: 0.7,
    tracxnScore: 8.50,
    fundingAmount: 0,
    type: 'Unfunded',
    location: 'Unknown',
    focus: 'AI Diagnostics'
  }
];

export default function CompetitorLandscape() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Competitor Analysis</h1>
      
      {/* Market Share Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Market Share Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marketShare" fill="#5AA9E6" name="Market Share (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Competitor Table */}
      <Card>
        <CardHeader>
          <CardTitle>Competitor Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Market Share
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Tracxn Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Focus Area
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {competitorData.map((company, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{company.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        company.type === 'Public' ? 'bg-blue-100 text-blue-800' :
                        company.type === 'Established' ? 'bg-green-100 text-green-800' :
                        company.type === 'Funded' ? 'bg-purple-100 text-purple-800' :
                        company.type === 'Seed' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {company.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{company.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">{company.marketShare}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">{company.tracxnScore}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{company.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
