import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/70 backdrop-blur-md border-b border-border/30"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="lattice-logo text-lg text-foreground/80 hover:text-foreground transition-colors">
          Lattice
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-[#6d5a7d] hover:text-[#5c4a6a] font-medium transition-colors"
          >
            Sign In
          </Link>
          <Button 
            size="sm" 
            className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] font-serif tracking-wider uppercase text-xs"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
