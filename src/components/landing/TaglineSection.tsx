import { motion } from "framer-motion";

const TaglineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#3a3642]">
      <div className="lattice-container">
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
