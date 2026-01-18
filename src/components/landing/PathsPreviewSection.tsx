import { motion } from "framer-motion";
import pathOfGroundingCover from "@/assets/path-of-grounding-cover.png";

const paths = [
  {
    title: "Path of Grounding",
    description: "Move from scattered to solid. Build steadiness into your days.",
    sessions: 12,
    status: "available",
  },
  {
    title: "Path of Intuition",
    description: "Learn to trust the quiet knowing that guides from within.",
    sessions: null,
    status: "coming_soon",
  },
  {
    title: "Path of Inner Healing",
    description: "Release old patterns and make space for renewal.",
    sessions: null,
    status: "coming_soon",
  },
];

const PathsPreviewSection = () => {
  return (
    <section className="lattice-section bg-background">
      <div className="lattice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7a6889] font-serif tracking-widest uppercase text-lg mb-4">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-6">
            Choose Your Path
          </h2>
          <div className="lattice-divider mx-auto mb-6" />
          <p className="text-[#5f5278] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Each Path is a complete journey—a narrative arc designed to support a specific kind of inner change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="lattice-card h-full flex flex-col hover:shadow-lattice-hover transition-all duration-300 group-hover:-translate-y-1">
                {/* Cover image or decorative pattern */}
                <div className="h-40 rounded-xl mb-6 relative overflow-hidden">
                  {index === 0 ? (
                    <>
                      <img 
                        src={pathOfGroundingCover} 
                        alt="Path of Grounding" 
                        className="w-full h-full object-cover"
                      />
                      {/* White mist fade around edges */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `
                            radial-gradient(ellipse at center, transparent 30%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,1) 100%)
                          `
                        }}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#f8f5fa] to-[#f0e8f4]">
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <pattern id={`lattice-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#9e6878]" />
                          </pattern>
                          <rect width="100" height="100" fill={`url(#lattice-${index})`} />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#4a3d5c] mb-3">
                  {path.title}
                </h3>
                <p className="text-[#5f5278] text-lg leading-relaxed flex-1">
                  {path.description}
                </p>
                <p className="text-sm text-[#7a6889] mt-4 uppercase tracking-wider">
                  {path.status === "available" ? `${path.sessions} Sessions` : "Coming Soon"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathsPreviewSection;
