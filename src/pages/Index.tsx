import HeroSection from "@/components/home/HeroSection";
import ContactForm from "@/components/contact/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;