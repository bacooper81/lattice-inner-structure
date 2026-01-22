import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import groundingCover from "@/assets/path-of-grounding-cover.png";

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div 
        className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 20% 85%) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-15%] left-[-15%] w-[45vw] h-[45vw] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(350 25% 88%) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[30%] left-[10%] w-[20vw] h-[20vw] rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 15% 80%) 0%, transparent 70%)' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md mx-auto relative z-10"
      >
        {/* Progress Dots - fixed width container */}
        <div className="flex justify-center gap-2 mb-12 w-12 mx-auto">
          <div className="w-2 h-2 rounded-full bg-[#6d5a7d]" />
          <div className="w-2 h-2 rounded-full border border-[#6d5a7d]/40" />
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-36 h-36 rounded-full mx-auto mb-8 relative overflow-hidden shadow-lg"
        >
          <img
            src={groundingCover}
            alt="Path of Grounding preview"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* Soft edge fade */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: `radial-gradient(ellipse 80% 70% at center 40%, transparent 40%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.9) 90%)`
            }}
          />
        </motion.div>

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
