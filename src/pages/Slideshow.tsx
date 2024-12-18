import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import SlideshowHero from '@/components/slideshow/SlideshowHero';
import SlideshowCarousel from '@/components/slideshow/SlideshowCarousel';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Coming Soon",
      description: "The presentation deck will be available for download shortly.",
      duration: 3000,
    });
    console.log('Download deck requested - PDF not yet available');
  };

  return (
    <div className="min-h-screen bg-background">
      <SlideshowHero />
      
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <SlideshowCarousel 
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />

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
    </div>
  );
};

export default Slideshow;