import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import EnhancedPitchDeck from '@/components/business/EnhancedPitchDeck';
import CompetitionAnalysis from '@/components/competition/CompetitionAnalysis';
import CompetitorMatrix from '@/components/competition/CompetitorMatrix';
import { AnimatedNumber } from '@/components/business/AnimatedNumber';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import BusinessModelSection from '@/components/business/BusinessModelSection';
import GCCMarketAnalysis from '@/components/business/GCCMarketAnalysis';
import ROICalculator from '@/components/business/ROICalculator';
import PatentTechnologySection from '@/components/business/PatentTechnologySection';
import StrategicPartnership from '@/components/business/StrategicPartnership';
import { useToast } from "@/components/ui/use-toast";

const slides = [
  {
    id: 1,
    section: "Executive Overview",
    title: "Revolutionizing Healthcare Diagnostics",
    component: <EnhancedPitchDeck />,
  },
  {
    id: 2,
    section: "Company Overview",
    title: "Our Technology Platforms",
    component: (
      <div className="space-y-6">
        <PatentTechnologySection />
        <BusinessModelSection />
      </div>
    ),
  },
  {
    id: 3,
    section: "Market Analysis",
    title: "Market Opportunity",
    component: (
      <div className="space-y-8">
        <GCCMarketAnalysis />
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Total Addressable Market</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={50} prefix="$" suffix="B" />
            </div>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">CAGR</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={22} suffix="%" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    section: "Competition",
    title: "Competitive Landscape",
    component: <CompetitionAnalysis />,
  },
  {
    id: 5,
    section: "Market Position",
    title: "Competitive Matrix",
    component: <CompetitorMatrix />,
  },
  {
    id: 6,
    section: "Strategic Partnerships",
    title: "Key Partnerships & Collaborations",
    component: <StrategicPartnership />,
  },
  {
    id: 7,
    section: "Investment",
    title: "Investment Opportunity",
    component: (
      <div className="space-y-6">
        <ROICalculator />
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Funding Required</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={10} prefix="$" suffix="M" />
            </div>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expected ROI</h3>
            <div className="text-4xl font-bold text-medical-600">
              <AnimatedNumber value={300} suffix="%" duration={1200} />
            </div>
          </div>
        </div>
        <Button className="mt-4" variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Full Deck
        </Button>
      </div>
    ),
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const handleDownload = () => {
    // For now, show a toast notification since the PDF is not ready
    toast({
      title: "Coming Soon",
      description: "The presentation deck will be available for download shortly.",
      duration: 3000,
    });

    // Log for debugging
    console.log('Download deck requested - PDF not yet available');
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={(api) => {
            if (api) {
              api.on("select", () => {
                setCurrentSlide(api.selectedScrollSnap());
                console.log("Current slide:", api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className="border-none">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="text-sm text-medical-600 font-medium mb-2">
                        {slide.section}
                      </div>
                      <h2 className="text-2xl font-bold mb-6">{slide.title}</h2>
                    </div>
                    {slide.component}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <div className="mx-4 text-sm text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>

        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleDownload}
            className="gap-2"
            variant="outline"
          >
            <Download className="h-4 w-4" />
            Download Full Deck
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
