import HeroSection from "@/components/home/HeroSection";
import IntroComponent from "@/components/business/IntroComponent";
import PatentTechnologySection from "@/components/business/PatentTechnologySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          <IntroComponent />
          <PatentTechnologySection />
        </div>
      </div>
    </div>
  );
};

export default Index;