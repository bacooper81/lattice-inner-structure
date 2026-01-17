import { motion } from "framer-motion";
import crystalsImage from "@/assets/crystals-arrangement.jpg";

const CrystalSection = () => {
  return (
    <section className="lattice-section bg-background overflow-hidden">
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
            <p className="text-[#7a6889] font-serif tracking-widest uppercase text-sm mb-4">
              Crystal Symbolism
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-6">
              Crystals Are Always Optional
            </h2>
            <div className="space-y-6 text-[#5f5278] leading-relaxed">
              <p>
                Each meditation is paired with a crystal whose energy aligns perfectly with the session's theme.
              </p>
              <p>
                But here's the beautiful part: you don't need the physical stone.
              </p>
              <p>
                Through guided imagery, you'll connect with each crystal's essence—
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li>Grounding on a beach of Blue Lace Agate stones</li>
                <li>Warming a hearth with Carnelian to prepare for what's ahead</li>
                <li>Walking a Bronzite path that holds stillness, connection, and rest</li>
              </ul>
              <p>
                The visualizations do the work. The crystals are a bridge to something deeper within you, whether you hold them in your hand or your imagination.
              </p>
            </div>

            {/* Crystal tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Blue Lace Agate", "Tiger's Eye", "Bronzite", "Dalmatian Jasper", "Hematite", "Carnelian", "Moss Agate", "Dumortierite", "Smoky Quartz", "Black Tourmaline", "Red Jasper", "Petrified Wood"].map((crystal) => (
                <span
                  key={crystal}
                  className="px-4 py-2 rounded-full bg-[#f5f0f8] text-sm text-[#6d5a7d] border border-[#e8dff0]"
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
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_-20px_rgba(158,104,120,0.3)] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrystalSection;
