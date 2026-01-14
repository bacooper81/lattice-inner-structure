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
          <p className="text-[#7a6889] font-serif tracking-widest uppercase text-sm mb-8">
            A Different Kind of Practice
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#4a3d5c] leading-relaxed mb-8"
          >
            You're not looking for another way to relax.
            <br />
            <span className="text-[#9e6878]">You're looking for something to build.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lattice-divider mx-auto mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#5f5278] leading-relaxed max-w-2xl mx-auto"
          >
            A foundation. An architecture of stillness that holds weight. 
            Lattice guides you through paths that don't just calm—they construct 
            something lasting within you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResonanceSection;
