const ResonanceSection = () => {
  return (
    <section className="lattice-section bg-background relative overflow-hidden">

      <div className="lattice-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-lattice-purple-dark leading-relaxed mb-8">
            You've felt that spark with your crystals.
            <br />
            <span className="text-lattice-magenta">But the feeling fades. Life takes over. Nothing sticks.</span>
          </p>

          <div className="w-12 h-px bg-gradient-to-r from-transparent via-lattice-gold to-transparent mx-auto mb-10" />

          <p className="text-lg md:text-xl text-lattice-slate-light leading-relaxed max-w-2xl mx-auto mb-6">
            Most crystal practices treat energy itself as the solution. You connect to a crystal, feel something shift, and hope that feeling translates into real change.
          </p>

          <p className="text-lg md:text-xl text-lattice-slate-light leading-relaxed max-w-2xl mx-auto mb-6">
            There's no guidance for how to think differently, respond differently, or live differently afterward.
          </p>

          <p className="text-lg md:text-xl text-lattice-slate-light leading-relaxed max-w-2xl mx-auto font-medium">
            Lattice is different. It helps you embody real ways of being—so how you show up in your life actually changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResonanceSection;