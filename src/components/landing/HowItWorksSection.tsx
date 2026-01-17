import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import pathImage from "@/assets/path-journey.jpg";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description: "Select a journey that speaks to where you are—grounding, creativity, inner healing, and more.",
  },
  {
    number: "02",
    title: "Move Through the Arc",
    description: "Each Path unfolds over days, with sessions that build on one another in a meaningful sequence.",
  },
  {
    number: "03",
    title: "Build Your Inner Lattice",
    description: "Through guided visualization, you embody ways of being that naturally show up in daily life.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="lattice-section bg-lattice-warm">
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
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lattice">
              <img
                src={pathImage}
                alt="Meditation path journey"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f5f0f8]/50 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-lattice-warm rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#7a6889] font-serif tracking-widest uppercase text-sm mb-4 text-center lg:text-left">
              How It Works
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-8 text-center lg:text-left">
              10 Minutes to Real Results
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
                  <span className="font-serif text-3xl font-semibold text-[#9e6878]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#4a3d5c] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5f5278] leading-relaxed">
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
