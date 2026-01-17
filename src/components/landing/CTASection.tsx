import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Full background image without fade */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover"
        />
        {/* Light overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="lattice-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="lattice-logo text-lg mb-6 text-[#7a6889]">Lattice</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6 text-[#4a3d5c]">
            Try Lattice Risk Free
          </h2>
          <p className="text-lg text-[#5f5278] mb-6 leading-relaxed">
            Experience what it feels like when your crystal practice actually delivers results.
          </p>
          <p className="text-base text-[#5f5278] mb-10 leading-relaxed">
            Just $2.50/month, billed yearly. Cancel anytime within 30 days for a full refund.
          </p>
          <Button 
            size="xl" 
            className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-xs transition-all"
          >
            Start My Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
