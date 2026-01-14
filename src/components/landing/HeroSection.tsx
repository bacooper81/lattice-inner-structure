import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Top fade - white mist at edge */}
      <div className="absolute top-0 left-0 right-0 h-[125px] z-30 bg-gradient-to-b from-background to-transparent" />
      {/* Background image with overlay */}
      <div className="absolute -top-[60%] left-0 right-0 h-[150%]">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep purple tint over entire image */}
        <div className="absolute inset-0 bg-[#8a7a9e]/60" />
        {/* White mist at edges only - fading in from the perimeter */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_45%,_transparent_40%,_rgba(255,255,255,0.4)_70%,_rgba(255,255,255,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent via-20% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent via-20% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent via-15% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-transparent via-15% to-transparent" />
      </div>

      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(138,122,158,0.2)_0%,_transparent_50%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="lattice-logo text-lg md:text-xl mb-8 text-white/90">
          Lattice
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
          <span className="text-white">Build Your</span>
          <br />
          <span className="text-[#f0d4b8]">Inner Lattice</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          A guided crystal meditation app with structured paths that don't just calm you—
          they construct something lasting within.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" className="bg-[#d4a574] text-white hover:bg-[#c4956a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-xs transition-all">
            Begin Your Journey
          </Button>
          <Button variant="outline" size="xl" className="border-white/70 text-white hover:bg-white/20 font-serif tracking-widest uppercase text-xs backdrop-blur-sm">
            Explore Paths
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
