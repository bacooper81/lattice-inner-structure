import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CrystalSection from "@/components/landing/CrystalSection";
import PathsPreviewSection from "@/components/landing/PathsPreviewSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CrystalSection />
      <PathsPreviewSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
