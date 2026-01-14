import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute -top-48 left-0 right-0 bottom-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-[calc(100%+12rem)] object-cover object-center scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-background" />
      </div>

      {/* Radial fade behind text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0.4)_40%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="lattice-logo text-lg md:text-xl mb-8 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
          Lattice
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
          <span className="bg-gradient-to-br from-slate-800 via-violet-900 to-slate-800 bg-clip-text text-transparent">Build Your</span>
          <br />
          <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-500 bg-clip-text text-transparent">Inner Lattice</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A guided crystal meditation app with structured paths that don't just calm you—
          they construct something lasting within.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-400 text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-xs transition-all">
            Begin Your Journey
          </Button>
          <Button variant="outline" size="xl" className="border-violet-300 text-violet-700 hover:bg-violet-50/50 font-serif tracking-widest uppercase text-xs">
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
