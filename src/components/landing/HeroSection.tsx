import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 -mt-8 md:-mt-12 bg-white">

      {/* Top fade - responsive height with 85% opacity */}
      <div className="absolute top-0 left-0 right-0 h-[140px] md:h-[216px] z-30 bg-gradient-to-b from-background via-background/85 via-60% to-transparent" />
      {/* Background image with overlay */}
      <div className="absolute -top-[29%] md:-top-[60%] left-0 right-0 h-[96%] md:h-[150%]">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft dreamy edge fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,_transparent_25%,_rgba(255,255,255,0.6)_55%,_rgba(255,255,255,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />
      </div>

      {/* Radial fade behind text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0.4)_40%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">

        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          <span className="text-[#4a3d5c]">You Feel Your Crystals' Energy —</span>
          <br />
          <span className="text-[#9e6878]">But Where's the Real Change?</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[#5f5278] max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
          Join Lattice, a Crystal Meditation App That Builds Inner Structure You Can Rely on When it Matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-base transition-all">
            Start My Journey
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
