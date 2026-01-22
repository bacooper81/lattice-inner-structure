import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import blueLaceAgate from "@/assets/blue-lace-agate.png";

const OnboardingCrystals = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div 
        className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(200 30% 85%) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-15%] w-[50vw] h-[50vw] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 20% 85%) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[50%] right-[5%] w-[25vw] h-[25vw] rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(200 25% 88%) 0%, transparent 70%)' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md mx-auto relative z-10"
      >
        {/* Progress Dots - fixed width container */}
        <div className="flex justify-center gap-2 mb-12 w-12 mx-auto">
          <div className="w-2 h-2 rounded-full border border-[#6d5a7d]/40" />
          <div className="w-2 h-2 rounded-full bg-[#6d5a7d]" />
        </div>

        {/* Crystal Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-36 h-36 rounded-full mx-auto mb-8 bg-gradient-to-br from-[#e8e0f0] to-[#d8cce8] flex items-center justify-center shadow-lg"
        >
          <img
            src={blueLaceAgate}
            alt="Blue Lace Agate crystal"
            className="w-28 h-28 object-contain"
          />
        </motion.div>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#4a3d5c] mb-8">
          Crystals are always optional
        </h1>
        
        <div className="text-lg md:text-xl text-[#5f5278] leading-relaxed mb-12 space-y-6">
          <p>
            Your first session uses <strong className="text-[#4a3d5c]">Blue Lace Agate</strong>.
          </p>
          <p>
            If you have the crystal, you can place it nearby or hold it during the session.
            If not, simply listen and follow the guidance.
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
