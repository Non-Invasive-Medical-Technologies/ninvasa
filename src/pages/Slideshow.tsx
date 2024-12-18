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

const slides = [
  {
    id: 1,
    section: "Executive Overview",
    title: "Revolutionizing Healthcare Diagnostics",
    component: (
      <div className="space-y-8">
        {/* Cover Slide */}
        <div className="bg-gradient-to-r from-medical-600 to-medical-800 text-white p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold">Pioneering the Future of Healthcare</h1>
            <p className="text-xl">Non-Invasive Medical Technologies</p>
            <div className="flex justify-center space-x-8 pt-8">
              <img src="/lovable-uploads/1a8e3902-3961-4b94-ac4d-30ae486e8d1d.png" alt="BL Medica Logo" className="h-16" />
              <img src="/lovable-uploads/d1e24c32-9340-4528-8f24-f221be5a95a3.png" alt="Biopromin Logo" className="h-16" />
            </div>
          </div>
        </div>
        <EnhancedPitchDeck />
      </div>
    ),
  },
  {
    id: 2,
    section: "Company Overview",
    title: "Our Technology Platforms",
    component: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">ANESA & KOLIBRI Platforms</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-medical-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">ANESA Platform</h3>
            <ul className="space-y-2">
              <li>136+ health parameters</li>
              <li>6-12 minute screening</li>
              <li>Non-invasive technology</li>
            </ul>
          </div>
          <div className="p-6 bg-medical-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">KOLIBRI Platform</h3>
            <ul className="space-y-2">
              <li>40+ blood parameters</li>
              <li>2-5 minute analysis</li>
              <li>Real-time monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    section: "Market Analysis",
    title: "Market Opportunity",
    component: (
      <div className="space-y-6">
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
    section: "Investment",
    title: "Investment Opportunity",
    component: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Investment Details</h2>
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
      </div>
    </div>
  );
};

export default Slideshow;
