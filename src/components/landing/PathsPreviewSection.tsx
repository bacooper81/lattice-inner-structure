import pathOfGroundingCover from "@/assets/path-of-grounding-cover.png";
import pathOfInnerHealingCover from "@/assets/path-of-inner-healing-cover.png";
import pathOfIntuitionCover from "@/assets/path-of-intuition-cover.png";

const paths = [
  {
    title: "Path of Grounding",
    description: "Move from scattered to solid. Build steadiness into your days.",
    sessions: 12,
    status: "available",
    cover: pathOfGroundingCover,
  },
  {
    title: "Path of Intuition",
    description: "Learn to trust the quiet knowing that guides from within.",
    sessions: null,
    status: "coming_soon",
    cover: pathOfIntuitionCover,
  },
  {
    title: "Path of Inner Healing",
    description: "Release old patterns and make space for renewal.",
    sessions: null,
    status: "coming_soon",
    cover: pathOfInnerHealingCover,
  },
];

const PathsPreviewSection = () => {
  return (
    <section className="lattice-section bg-background">
      <div className="lattice-container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-6">
            Choose Your Path
          </h2>
          <div className="lattice-divider mx-auto mb-6" />
          <p className="text-[#5f5278] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Each Path is a complete journey—a narrative arc designed to support a specific kind of inner change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.title}
              className="group cursor-pointer"
            >
              <div className="lattice-card h-full flex flex-col hover:shadow-lattice-hover transition-all duration-300 group-hover:-translate-y-1">
                {/* Cover image */}
                <div className="h-48 -mx-8 -mt-8 mb-6 relative overflow-hidden">
                  <img 
                    src={path.cover} 
                    alt={path.title} 
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                  {/* Strong white mist fade around edges */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(ellipse 80% 70% at center 40%, transparent 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.95) 75%, rgba(255,255,255,1) 90%)
                      `
                    }}
                  />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathsPreviewSection;
