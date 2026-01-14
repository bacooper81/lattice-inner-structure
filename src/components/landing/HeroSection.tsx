import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="lattice-logo text-lg md:text-xl mb-8 text-foreground/80">
          Lattice
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-foreground">
          Build Your
          <br />
          <span className="text-primary">Inner Lattice</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          A guided crystal meditation app with structured paths that don't just calm you—
          they construct something lasting within.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Begin Your Journey
          </Button>
          <Button variant="subtle" size="xl">
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
