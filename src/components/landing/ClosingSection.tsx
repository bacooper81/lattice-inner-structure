import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const ClosingSection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="lattice-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="lattice-logo text-xl mb-6 text-lattice-purple">Lattice</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6 text-lattice-purple-dark">
            Begin Your First Session
          </h2>
          <p className="text-xl md:text-2xl text-lattice-slate-light mb-10 leading-relaxed">
            Eight minutes. No crystals required.
          </p>
          <Button 
            size="xl" 
            className="bg-lattice-purple text-white hover:bg-lattice-purple-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all"
          >
            Start My Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;