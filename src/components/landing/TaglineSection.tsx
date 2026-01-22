const TaglineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#3a3642] px-6 md:px-12 relative overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#9b7a8a40_100%)]" />
      
      <div className="lattice-container relative z-10">
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
          Each 10-minute session helps you embody new ways of being that create real results — not just good vibes.
        </p>
      </div>
    </section>
  );
};

export default TaglineSection;
