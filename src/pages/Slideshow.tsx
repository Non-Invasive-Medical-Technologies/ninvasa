import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Advanced Healthcare Solutions",
    description: "Revolutionizing medical diagnostics with cutting-edge technology."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Non-Invasive Technology",
    description: "Providing accurate results without invasive procedures."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "AI-Powered Analytics",
    description: "Leveraging artificial intelligence for precise diagnostics."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Real-Time Monitoring",
    description: "Continuous health tracking for better patient care."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Data Security",
    description: "Ensuring patient data privacy and security."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Global Reach",
    description: "Expanding healthcare access worldwide."
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Innovation",
    description: "Pushing boundaries in medical technology."
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "Digital Health",
    description: "Transforming healthcare delivery through digital solutions."
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "Future of Healthcare",
    description: "Shaping the next generation of medical diagnostics."
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    title: "Research & Development",
    description: "Continuous innovation in healthcare technology."
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={(api) => {
            const selectedIndex = api.selectedScrollSnap();
            setCurrentSlide(selectedIndex);
            console.log("Selected slide:", selectedIndex);
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <Card className="border-none">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>

        <div className="mt-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-600 text-lg">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;