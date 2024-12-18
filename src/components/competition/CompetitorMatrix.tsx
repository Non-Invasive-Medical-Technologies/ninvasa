import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  ScatterChart, 
  Scatter, 
  ZAxis, 
  LineChart, 
  Line, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  LabelList 
} from 'recharts';

const establishedCompanies = [
  { name: 'BL+Medica (ANESA)', marketShare: 20, techSuperiority: 10, revenue: 25, innovation: 10, customerSatisfaction: 9, pricing: 6, color: '#0c4a6e' },
  { name: 'Abbott Laboratories', marketShare: 15, techSuperiority: 8, revenue: 43000, innovation: 8, customerSatisfaction: 9, pricing: 7, color: '#075985' },
  { name: 'Siemens Healthineers', marketShare: 12, techSuperiority: 9, revenue: 20000, innovation: 9, customerSatisfaction: 8, pricing: 6, color: '#0369a1' },
  { name: 'Roche Diagnostics', marketShare: 7, techSuperiority: 8, revenue: 11000, innovation: 6, customerSatisfaction: 7, pricing: 5, color: '#0284c7' },
  { name: 'Philips Healthcare', marketShare: 6, techSuperiority: 9, revenue: 19000, innovation: 9, customerSatisfaction: 8, pricing: 6, color: '#0ea5e9' },
];

const startups = [
  { name: 'GRAIL, Inc.', marketShare: 3, techSuperiority: 9, revenue: 200, innovation: 10, customerSatisfaction: 8, pricing: 8, color: '#38bdf8' },
  { name: 'Everlywell', marketShare: 4, techSuperiority: 8, revenue: 60, innovation: 8, customerSatisfaction: 9, pricing: 5, color: '#7dd3fc' },
  { name: 'Thryve', marketShare: 2, techSuperiority: 7, revenue: 10, innovation: 7, customerSatisfaction: 8, pricing: 5, color: '#bae6fd' },
  { name: 'Biocept', marketShare: 5, techSuperiority: 8, revenue: 20, innovation: 8, customerSatisfaction: 7, pricing: 8, color: '#e0f2fe' },
  { name: 'Livongo', marketShare: 3, techSuperiority: 9, revenue: 150, innovation: 9, customerSatisfaction: 9, pricing: 8, color: '#f0f9ff' },
];

const allCompanies = [...establishedCompanies, ...startups];

const CompetitorMatrix = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Competitor Matrix</h1>
      <Tabs defaultValue="marketShare">
        <TabsList>
          <TabsTrigger value="marketShare">Market Share</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
          <TabsTrigger value="customerSatisfaction">Customer Satisfaction</TabsTrigger>
        </TabsList>

        <TabsContent value="marketShare">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={allCompanies}
                dataKey="marketShare"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
              >
                {allCompanies.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="innovation">
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
              <XAxis type="number" dataKey="innovation" name="Innovation" domain={[0, 10]} stroke="#0ea5e9" />
              <YAxis type="number" dataKey="marketShare" name="Market Share" domain={[0, 25]} stroke="#0ea5e9" />
              <ZAxis range={[100, 100]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter data={allCompanies} fill="#0ea5e9">
                <LabelList dataKey="name" position="top" />
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="customerSatisfaction">
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
              <XAxis type="number" dataKey="customerSatisfaction" name="Customer Satisfaction" domain={[0, 10]} stroke="#0ea5e9" />
              <YAxis type="number" dataKey="techSuperiority" name="Tech Superiority" domain={[0, 10]} stroke="#0ea5e9" />
              <ZAxis range={[100, 100]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter data={allCompanies} fill="#0ea5e9">
                <LabelList dataKey="name" position="top" />
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompetitorMatrix;