import { motion } from "framer-motion";
import latticeIcon from "@/assets/lattice-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-lattice-warm border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <img src={latticeIcon} alt="Lattice" className="h-10 w-10 rounded-lg" />
            <p className="lattice-logo text-[#4a3d5c] text-sm">Lattice</p>
          </div>
          
          <nav className="flex gap-8">
            <a href="#" className="text-[#5f5278] hover:text-[#4a3d5c] transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-[#5f5278] hover:text-[#4a3d5c] transition-colors text-sm">
              Paths
            </a>
            <a href="#" className="text-[#5f5278] hover:text-[#4a3d5c] transition-colors text-sm">
              Contact
            </a>
          </nav>

          <p className="text-[#7a6889] text-sm">
            © 2026 Lattice. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
