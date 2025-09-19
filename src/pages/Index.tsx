import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CollectionsSection />
      <TestimonialsSection />
      <ProfessionalsSection />
      <CTASection />
    </div>
  );
};

export default Index;
