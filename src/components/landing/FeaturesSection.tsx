import { motion } from "framer-motion";
import { Diamond, Compass, Sparkles } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Paths, Not Playlists",
    description:
      "Each journey unfolds over days with sessions that build on each other. You don't just meditate—you travel somewhere.",
  },
  {
    icon: Diamond,
    title: "Crystal Imagery That Works",
    description:
      "Stand on a beach of blue agate. Drop a hematite sphere into a well. Vivid visualizations connect you to each crystal's essence—no physical stone required.",
  },
  {
    icon: Sparkles,
    title: "Skills You Keep",
    description:
      "Water a seed for years as it grows into a towering tree. The metaphors teach discipline, presence, and self-mastery that stays with you.",
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
          <p className="text-accent font-serif tracking-widest uppercase text-sm mb-4">
            How Lattice Is Different
          </p>
          <h2 className="lattice-heading mb-6">
            Structure That Transforms
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lattice-gold-light/50 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
