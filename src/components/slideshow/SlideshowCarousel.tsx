import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { slides } from './slideshowData';
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons

interface SlideshowCarouselProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const SlideshowCarousel = ({ currentSlide, setCurrentSlide }: SlideshowCarouselProps) => {
  return (
    <div className="relative"> 
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
            <CarouselItem key={slide.id} className="relative">
              <Card className="border-none">
                <CardContent className="p-6">
                  {/* Top Navigation Arrows */}
                  <div className="flex justify-between mb-6">
                    <CarouselPrevious className="h-10 w-10 border-2 border-medical-600 bg-white/80 backdrop-blur-sm hover:bg-white relative static">
                      <ChevronLeft className="h-6 w-6" />
                    </CarouselPrevious>
                    <div>
                      <div className="text-sm text-medical-600 font-medium mb-2">
                        {slide.section}
                      </div>
                      <h2 className="text-2xl font-bold">{slide.title}</h2>
                    </div>
                    <CarouselNext className="h-10 w-10 border-2 border-medical-600 bg-white/80 backdrop-blur-sm hover:bg-white relative static">
                      <ChevronRight className="h-6 w-6" />
                    </CarouselNext>
                  </div>

                  {/* Slide Content */}
                  <div className="min-h-[600px] max-h-[800px] overflow-y-auto">
                    {slide.component}
                  </div>

                  {/* Bottom Navigation Arrows */}
                  <div className="flex justify-between items-center mt-6">
                    <CarouselPrevious className="h-10 w-10 border-2 border-medical-600 bg-white/80 backdrop-blur-sm hover:bg-white relative static">
                      <ChevronLeft className="h-6 w-6" />
                    </CarouselPrevious>
                    <div className="text-sm text-gray-500">
                      {currentSlide + 1} / {slides.length}
                    </div>
                    <CarouselNext className="h-10 w-10 border-2 border-medical-600 bg-white/80 backdrop-blur-sm hover:bg-white relative static">
                      <ChevronRight className="h-6 w-6" />
                    </CarouselNext>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SlideshowCarousel;