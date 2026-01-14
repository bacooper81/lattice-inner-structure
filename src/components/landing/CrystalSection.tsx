import { motion } from "framer-motion";
import crystalsImage from "@/assets/crystals-arrangement.jpg";

const CrystalSection = () => {
  return (
    <section className="lattice-section bg-lattice-warm overflow-hidden">
      <div className="lattice-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-accent font-serif tracking-widest uppercase text-sm mb-4">
              Crystal Energy
            </p>
            <h2 className="lattice-heading mb-6">
              Crystals Are Always Optional
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Each meditation is paired with a crystal whose energy aligns perfectly with the session's theme.
                But here's the beautiful part: you don't need the physical stone.
              </p>
              <p>
                Through rich, immersive imagery, you'll connect with each crystal's essence—standing on a beach
                of blue agate, feeling their grounding pull, or watching light refract through an amethyst cathedral.
              </p>
              <p>
                The visualizations do the work. The crystals are a bridge to something deeper within you,
                whether you hold them in your hand or your imagination.
              </p>
            </div>

            {/* Crystal tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Smoky Quartz", "Black Tourmaline", "Hematite", "Blue Agate", "Amethyst"].map((crystal) => (
                <span
                  key={crystal}
                  className="px-4 py-2 rounded-full bg-background text-sm text-muted-foreground border border-border"
                >
                  {crystal}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lattice">
              <img
                src={crystalsImage}
                alt="Healing crystals arrangement"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-crystal opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrystalSection;
