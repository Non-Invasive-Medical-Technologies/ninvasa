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
                  <div className="mb-6">
                    <div className="text-sm text-medical-600 font-medium mb-2">
                      {slide.section}
                    </div>
                    <h2 className="text-2xl font-bold mb-6">{slide.title}</h2>
                  </div>
                  {slide.component}
                </CardContent>
              </Card>
              
              {/* Navigation arrows positioned relative to each slide */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16">
                <CarouselPrevious className="h-12 w-12 border-2 border-medical-600 bg-white/80 backdrop-blur-sm hover:bg-white" />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16">
                <CarouselNext className="h-12 w-12 border-2 border-medical-600 bg-white/80 backdrop-blur-sm hover:bg-white" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default SlideshowCarousel;