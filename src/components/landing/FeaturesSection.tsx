import { motion } from "framer-motion";
import { Diamond, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Compass,
    title: "Paths, Not Playlists",
    description:
      "Each session builds on the ones before it. You don't just meditate—you travel somewhere.",
  },
  {
    icon: Diamond,
    title: "Crystal Imagery That Works",
    description:
      "Vivid visualizations connect you to each crystal's essence—no physical stone required.",
  },
  {
    icon: Sparkles,
    title: "Embodiment Over Insight",
    description:
      "The metaphors teach steadiness, presence, and self-trust that stays with you.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const FeaturesSection = () => {
  return (
    <section className="lattice-section bg-lattice-warm">
      <div className="lattice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7a6889] font-serif tracking-widest uppercase text-base mb-4">
            Why Lattice Works
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-6">
            Results, Not Just Good Vibes
          </h2>
          <div className="lattice-divider mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="lattice-card text-center group hover:shadow-lattice-hover transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f5f0f8] text-[#7a6889] mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#4a3d5c] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#5f5278] text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
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

export default FeaturesSection;
