import { motion } from "framer-motion";

const TaglineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#3a3642] relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="tagline-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
          <rect width="100" height="100" fill="url(#tagline-pattern)" />
        </svg>
      </div>
      <div className="lattice-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Each 10-minute session helps you embody new ways of being that create real results — not just good vibes.
        </motion.p>
      </div>
    </section>
  );
};

export default TaglineSection;
