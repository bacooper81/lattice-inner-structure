import { motion } from "framer-motion";

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
          <p className="lattice-logo text-lattice-purple-dark text-sm">Lattice</p>
          
          <nav className="flex gap-8">
            <a href="#" className="text-lattice-slate-light hover:text-lattice-purple-dark transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-lattice-slate-light hover:text-lattice-purple-dark transition-colors text-sm">
              Paths
            </a>
            <a href="#" className="text-lattice-slate-light hover:text-lattice-purple-dark transition-colors text-sm">
              Contact
            </a>
          </nav>

          <p className="text-lattice-slate-light text-sm">
            © 2026 Lattice. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;