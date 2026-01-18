import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OnboardingCrystals = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md mx-auto"
      >
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#4a3d5c] mb-8">
          Crystals are always optional
        </h1>
        
        <div className="text-lg md:text-xl text-[#5f5278] leading-relaxed mb-12 space-y-6">
          <p>
            If you have the suggested crystal, you can place it nearby or hold it during the session.
          </p>
          <p>
            If you don't, simply listen and follow the guidance.
          </p>
          <p className="font-medium">
            Either approach is fine.
          </p>
        </div>
        
        <Button 
          size="xl" 
          onClick={() => navigate("/")} // Will navigate to path content once built
          className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all"
        >
          Begin Path of Grounding
        </Button>
      </motion.div>
    </div>
  );
};

export default OnboardingCrystals;
