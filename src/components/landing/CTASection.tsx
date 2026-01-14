import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="lattice-section bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="cta-lattice" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5 L5 0 L10 5 L5 10 Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
          <rect width="100" height="100" fill="url(#cta-lattice)" />
        </svg>
      </div>

      <div className="lattice-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="lattice-logo text-lg mb-6 opacity-80">Lattice</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Your Inner Lattice Is Waiting to Be Built
          </h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">
            The first session is free. Start the Path of Grounding and feel the difference
            structure makes.
          </p>
          <Button variant="crystal" size="xl">
            Start Your First Session
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
