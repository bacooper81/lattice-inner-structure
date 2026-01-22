import crystalsImage from "@/assets/crystals-arrangement.jpg";

const CrystalSection = () => {
  return (
    <section className="lattice-section bg-lattice-warm overflow-hidden">
      <div className="lattice-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-lattice-purple-dark leading-tight mb-6">
              Crystals Are Always Optional
            </h2>
            <div className="space-y-6 text-lattice-slate-light text-lg leading-relaxed">
              <p>
                Each meditation is paired with a crystal whose energy aligns perfectly with the session's theme.
              </p>
              <p>
                But here's the beautiful part: you don't need the physical stone.
              </p>
              <p>
                Through guided imagery, you'll connect with each crystal's essence—
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-lattice-magenta">
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
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-lattice-purple/10 to-lattice-magenta/10 text-base text-lattice-purple border border-lattice-purple/20"
                >
                  {crystal}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lattice">
              <img
                src={crystalsImage}
                alt="Healing crystals arrangement"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_-20px_hsl(330_60%_58%_/_0.3)] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrystalSection;