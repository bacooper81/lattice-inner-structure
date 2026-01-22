import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="lattice-section bg-[#3a3642] relative overflow-hidden">
      {/* Decorative background elements */}
      <div 
        className="absolute top-[-15%] left-[10%] w-[40vw] h-[40vw] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 25% 50%) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-20%] right-[5%] w-[45vw] h-[45vw] rounded-full opacity-12 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(350 30% 55%) 0%, transparent 70%)' }}
      />
      
      <div className="lattice-container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6 text-white">
            Begin with the Path of Grounding
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
            A complete, 12-session crystal meditation journey designed to build steadiness and presence.
          </p>
          
          <div className="flex flex-col gap-3 items-center mb-8">
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-[#f5d5d9] flex-shrink-0" />
              <span className="text-lg">Full access to the Path of Grounding</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-[#f5d5d9] flex-shrink-0" />
              <span className="text-lg">Automatic access to all future Paths as they're released</span>
            </div>
          </div>

          <p className="text-white/70 mb-8">
            $29 billed annually. Cancel anytime.
          </p>
          
          <Button 
            size="xl" 
            onClick={() => navigate("/onboarding/welcome")}
            className="bg-[#f5d5d9] text-[#3a3642] hover:bg-[#e8c0c5] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all"
          >
            Start with the Path of Grounding
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
