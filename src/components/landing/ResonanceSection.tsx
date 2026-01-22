const ResonanceSection = () => {
  return (
    <section className="lattice-section bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 20% 85%) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-10%] left-[-8%] w-[40vw] h-[40vw] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(350 25% 88%) 0%, transparent 70%)' }}
      />

      <div className="lattice-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#4a3d5c] leading-relaxed mb-8">
            You've felt that spark with your crystals.
            <br />
            <span className="text-[#9e6878]">But the feeling fades. Life takes over. Nothing sticks.</span>
          </p>

          <div className="lattice-divider mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#5f5278] leading-relaxed max-w-2xl mx-auto mb-6">
            Most crystal practices treat energy itself as the solution. You connect to a crystal, feel something shift, and hope that feeling translates into real change.
          </p>

          <p className="text-lg md:text-xl text-[#5f5278] leading-relaxed max-w-2xl mx-auto mb-6">
            There's no guidance for how to think differently, respond differently, or live differently afterward.
          </p>

          <p className="text-lg md:text-xl text-[#5f5278] leading-relaxed max-w-2xl mx-auto font-medium">
            Lattice is different. It helps you embody real ways of being—so how you show up in your life actually changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResonanceSection;
