import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis, LineChart, Line, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const COLORS = ['#5AA9E6', '#7DDBD3', '#1C3B67', '#B2DFFC', '#4378B5'];

const data = [
  {
    name: 'BL+Medica',
    marketShare: 20,
    tracxnScore: 65,
    type: 'Established',
    growth: 15,
    patentCount: 12,
    revenue: 25,
    rndSpend: 5,
    customerSat: 4.5,
    innovation: 85,
    employeeCount: 150,
    yearHistory: [2020, 2021, 2022],
    marketShareHistory: [15, 18, 20],
    predictedGrowth: 22
  },
  {
    name: 'Abbott',
    marketShare: 15,
    tracxnScore: 58,
    type: 'Public',
    growth: 8,
    patentCount: 450,
    revenue: 43000,
    rndSpend: 2500,
    customerSat: 4.2,
    innovation: 75,
    employeeCount: 25000,
    yearHistory: [2020, 2021, 2022],
    marketShareHistory: [12, 14, 15],
    predictedGrowth: 16
  },
  {
    name: 'Siemens',
    marketShare: 12,
    tracxnScore: 53,
    type: 'Public',
    growth: 6,
    patentCount: 380,
    revenue: 20000,
    rndSpend: 1500,
    customerSat: 4.0,
    innovation: 70,
    employeeCount: 18000,
    yearHistory: [2020, 2021, 2022],
    marketShareHistory: [10, 11, 12],
    predictedGrowth: 13
  }
];

export default function CompetitorDashboard() {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [metricView, setMetricView] = useState('market');

  const renderMarketShareChart = () => (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="marketShare"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const renderGrowthChart = () => (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="growth" fill="#5AA9E6" name="Current Growth" />
          <Bar dataKey="predictedGrowth" fill="#7DDBD3" name="Predicted Growth" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderInnovationChart = () => (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="innovation" name="Innovation Score" />
          <YAxis type="number" dataKey="marketShare" name="Market Share" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Companies" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1C3B67]">Competitor Analysis</h1>
        <Button>Export Report</Button>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="growth">Growth Analysis</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Market Share Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                {renderMarketShareChart()}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                {renderGrowthChart()}
              </CardContent>
            </Card>

            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Innovation vs Market Share</CardTitle>
              </CardHeader>
              <CardContent>
                {renderInnovationChart()}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="growth">
          <Card>
            <CardHeader>
              <CardTitle>Growth Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              {renderGrowthChart()}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="innovation">
          <Card>
            <CardHeader>
              <CardTitle>Innovation Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              {renderInnovationChart()}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
