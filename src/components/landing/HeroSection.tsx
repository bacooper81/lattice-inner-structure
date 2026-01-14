import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[hsl(270,30%,15%)] via-[hsl(280,25%,20%)] to-[hsl(260,30%,12%)]">
      {/* Background image - right side, faded into background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center -scale-x-100"
          />
          {/* Fade overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(270,30%,15%)] via-[hsl(270,30%,15%)/70%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(260,30%,12%)] via-transparent to-[hsl(270,30%,15%)/50%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(270,30%,15%)/30%] via-transparent to-[hsl(260,30%,12%)]" />
        </div>
      </div>

      {/* Content - Left side */}
      <div className="relative z-20 flex-1 px-8 md:px-16 lg:px-24 py-20 max-w-2xl">
        <p className="lattice-logo text-lg md:text-xl mb-8 text-white/70">
          Lattice
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-white">
          Build Your
          <br />
          <span className="text-[hsl(280,60%,70%)]">Inner Lattice</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
          A guided crystal meditation app with structured paths that don't just calm you—
          they construct something lasting within.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="xl">
            Begin Your Journey
          </Button>
          <Button variant="subtle" size="xl" className="border-white/20 text-white hover:bg-white/10">
            Explore Paths
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
