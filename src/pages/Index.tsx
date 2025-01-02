import HeroSection from "@/components/home/HeroSection";
import IntroComponent from "@/components/business/IntroComponent";
import PatentTechnologySection from "@/components/business/PatentTechnologySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <IntroComponent />
          <PatentTechnologySection />
        </div>
      </div>
    </div>
  );
};

export default Index;