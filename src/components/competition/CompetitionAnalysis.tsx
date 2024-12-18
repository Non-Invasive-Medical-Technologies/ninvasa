import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CompetitorMatrix from './CompetitorMatrix';
import CompetitorDashboard from './CompetitorDashboard';
import CompetitorLandscape from './CompetitorLandscape';

const CompetitionAnalysis = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Competitive Analysis</h1>
      
      <Tabs defaultValue="matrix" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="matrix">Competition Matrix</TabsTrigger>
          <TabsTrigger value="dashboard">Market Dashboard</TabsTrigger>
          <TabsTrigger value="landscape">Competitor Landscape</TabsTrigger>
        </TabsList>

        <TabsContent value="matrix">
          <CompetitorMatrix />
        </TabsContent>

        <TabsContent value="dashboard">
          <CompetitorDashboard />
        </TabsContent>

        <TabsContent value="landscape">
          <CompetitorLandscape />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompetitionAnalysis;