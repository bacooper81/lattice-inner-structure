import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-crystal-lattice.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crystal lattice meditation"
          className="w-full h-full object-cover object-top"
        />
        {/* Soft dreamy edge fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,_transparent_15%,_rgba(255,255,255,0.6)_45%,_hsl(40,20%,98%)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(40,20%,98%)] via-transparent via-20% to-[hsl(40,20%,98%)]" />
      </div>

      {/* Radial fade behind text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.5)_50%,_transparent_80%)]" />

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
