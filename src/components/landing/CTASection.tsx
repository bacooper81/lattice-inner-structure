import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="lattice-section bg-[#3a3642]">
      <div className="lattice-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6 text-white">
            Begin with the Path of Grounding
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
            A complete, 12-session crystal meditation journey designed to build steadiness and presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-[#f5d5d9]" />
              <span className="text-lg">Full access to the Path of Grounding</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-[#f5d5d9]" />
              <span className="text-lg">Automatic access to all future Paths as they're released</span>
            </div>
          </div>

          <p className="text-lg text-white/85 mb-8 leading-relaxed">
            $29 billed annually. Cancel anytime.
          </p>
          
          <Button 
            size="xl" 
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
