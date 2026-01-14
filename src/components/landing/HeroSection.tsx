import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Top fade - to white */}
      <div className="absolute top-0 left-0 right-0 h-[125px] z-30 bg-gradient-to-b from-background via-background/75 to-transparent" />
      {/* Background image with overlay */}
      <div className="absolute -top-[60%] left-0 right-0 h-[150%]">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover object-center"
        />
        {/* Purple tint overlay */}
        <div className="absolute inset-0 bg-[#8a7a9e]/40" />
        {/* Edge fades to white */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,_transparent_25%,_rgba(255,255,255,0.5)_55%,_rgba(255,255,255,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />
      </div>

      {/* Radial fade behind text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(138,122,158,0.3)_0%,_rgba(138,122,158,0.15)_40%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="lattice-logo text-lg md:text-xl mb-8 text-[#6b5a7a]">
          Lattice
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
          <span className="text-[#5d4e6d]">Build Your</span>
          <br />
          <span className="text-[#c4956a]">Inner Lattice</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6b5a7a] max-w-2xl mx-auto mb-10 leading-relaxed">
          A guided crystal meditation app with structured paths that don't just calm you—
          they construct something lasting within.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" className="bg-[#d4a574] text-white hover:bg-[#c4956a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-xs transition-all">
            Begin Your Journey
          </Button>
          <Button variant="outline" size="xl" className="border-[#8a7a9e] text-[#6b5a7a] hover:bg-[#8a7a9e]/10 font-serif tracking-widest uppercase text-xs">
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
