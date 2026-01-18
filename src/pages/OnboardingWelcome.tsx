import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md mx-auto"
      >
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#6d5a7d]" />
          <div className="w-2 h-2 rounded-full border border-[#6d5a7d]/40" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#4a3d5c] mb-8">
          Welcome to Lattice
        </h1>
        
        <p className="text-lg md:text-xl text-[#5f5278] leading-relaxed mb-12">
          You're beginning with the Path of Grounding — a complete, 12-session journey designed to help you build steadiness and presence over time.
        </p>
        
        <Button 
          size="xl" 
          onClick={() => navigate("/onboarding/crystals")}
          className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default OnboardingWelcome;
