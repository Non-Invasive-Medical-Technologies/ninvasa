import { useState } from "react";
import SlideshowCarousel from "@/components/slideshow/SlideshowCarousel";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <SlideshowCarousel
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

export default Slideshow;