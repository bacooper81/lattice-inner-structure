import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute -top-[30vh] left-0 right-0 bottom-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-[calc(100%+30vh)] object-cover object-center"
        />
        {/* Soft dreamy edge fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,_transparent_25%,_rgba(255,255,255,0.6)_55%,_rgba(255,255,255,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />
      </div>

      {/* Radial fade behind text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0.4)_40%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="lattice-logo text-lg md:text-xl mb-8 text-[#8b7b9e]">
          Lattice
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
          <span className="text-[#5d4e6d]">Build Your</span>
          <br />
          <span className="text-[#9b7a8a]">Inner Lattice</span>
        </h1>

        <p className="text-lg md:text-xl text-[#7a6b8a] max-w-2xl mx-auto mb-10 leading-relaxed">
          A guided crystal meditation app with structured paths that don't just calm you—
          they construct something lasting within.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" className="bg-[#6b5a7a] text-white hover:bg-[#5d4e6d] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-xs transition-all">
            Begin Your Journey
          </Button>
          <Button variant="outline" size="xl" className="border-[#b8a9c9] text-[#6b5a7a] hover:bg-[#e8dff0]/50 font-serif tracking-widest uppercase text-xs">
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
