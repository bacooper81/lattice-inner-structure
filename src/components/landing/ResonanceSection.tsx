import { motion } from "framer-motion";

const ResonanceSection = () => {
  return (
    <section className="lattice-section bg-lattice-warm relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="resonance-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#resonance-pattern)" />
        </svg>
      </div>

      <div className="lattice-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-accent font-serif tracking-widest uppercase text-sm mb-8">
            You Already Know
          </p>

          <div className="space-y-6 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-2xl md:text-3xl text-primary leading-relaxed"
            >
              You've tried meditation apps. The sessions blur together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-2xl md:text-3xl text-primary leading-relaxed"
            >
              You feel calmer for a moment, then drift back to where you started.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-2xl md:text-3xl text-primary leading-relaxed"
            >
              Something is missing. Not relaxation—<span className="text-accent italic">structure</span>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lattice-divider mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            You sense there's something to be built inside you—a foundation, 
            an architecture of inner strength. Not just peace, but the kind of 
            stillness that holds weight.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResonanceSection;
