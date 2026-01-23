import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import latticeIcon from "@/assets/lattice-icon.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/70 backdrop-blur-md border-b border-border/30"
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 lattice-logo text-lg text-foreground/80 hover:text-foreground transition-colors">
            <img src={latticeIcon} alt="Lattice" className="h-6 w-6 invert opacity-70" />
            Lattice
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#6d5a7d] hover:text-[#5c4a6a] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-6 p-8">
            <Link
              to="/"
              className="text-xl font-serif text-[#6d5a7d] hover:text-[#5c4a6a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/get-started"
              className="text-xl font-serif text-[#6d5a7d] hover:text-[#5c4a6a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="text-xl font-serif text-[#6d5a7d] hover:text-[#5c4a6a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/support"
              className="text-xl font-serif text-[#6d5a7d] hover:text-[#5c4a6a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
