const TaglineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#3a3642] px-6 md:px-12 relative overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#6b5a7a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#a88a9a]/15 rounded-full blur-3xl" />
      
      <div className="lattice-container relative z-10">
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
          Each 10-minute session helps you embody new ways of being that create real results — not just good vibes.
        </p>
      </div>
    </section>
  );
};

export default TaglineSection;
