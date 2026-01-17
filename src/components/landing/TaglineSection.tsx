import { motion } from "framer-motion";

const TaglineSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="lattice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="lattice-divider mx-auto mb-8" />
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#5f5278] leading-relaxed">
            Each 10-minute session helps you embody new ways of being that create real results — not just good vibes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TaglineSection;
