import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="lattice-section bg-[#3a3642]">
      <div className="lattice-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6 text-white">
            Try Lattice Risk Free
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-6 leading-relaxed">
            Experience what it feels like when your crystal practice actually delivers results.
          </p>
          <p className="text-lg text-white/85 mb-10 leading-relaxed">
            Just $2.50/month, billed yearly. Cancel anytime within 30 days for a full refund.
          </p>
          <Button 
            size="xl" 
            className="bg-[#f5d5d9] text-[#3a3642] hover:bg-[#e8c0c5] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all"
          >
            Start My Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
