import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const ClosingSection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="lattice-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="lattice-logo text-xl mb-6 text-[#7a6889]">Lattice</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6 text-[#4a3d5c]">
            Begin Your First Session
          </h2>
          <p className="text-xl md:text-2xl text-[#5f5278] mb-10 leading-relaxed">
            Ten minutes. No crystals required.
          </p>
          <Button 
            size="xl" 
            className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all"
          >
            Start My Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
