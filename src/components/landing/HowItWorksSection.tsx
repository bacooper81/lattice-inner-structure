import { motion } from "framer-motion";
import pathImage from "@/assets/path-journey.jpg";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description: "Select a journey that speaks to where you are—grounding, intuition, inner healing, and more.",
  },
  {
    number: "02",
    title: "Follow the Arc",
    description: "Each path unfolds over days, with sessions building upon each other in a meaningful sequence.",
  },
  {
    number: "03",
    title: "Transform Within",
    description: "Through vivid imagery and crystal energies, build lasting inner structures that support your growth.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="lattice-section">
      <div className="lattice-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-crystal">
              <img
                src={pathImage}
                alt="Meditation path journey"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-lattice-gold-light/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-lattice-warm rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-serif tracking-widest uppercase text-sm mb-4">
              The Journey
            </p>
            <h2 className="lattice-heading mb-8">
              How Paths Work
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <span className="font-serif text-3xl font-semibold text-lattice-gold-light">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
