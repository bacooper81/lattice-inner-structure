import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TaglineSection from "@/components/landing/TaglineSection";
import ResonanceSection from "@/components/landing/ResonanceSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CrystalSection from "@/components/landing/CrystalSection";
import PathsPreviewSection from "@/components/landing/PathsPreviewSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import ClosingSection from "@/components/landing/ClosingSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <TaglineSection />
      <TestimonialsSection />
      <ResonanceSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CrystalSection />
      <PathsPreviewSection />
      <CTASection />
      <FAQSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
