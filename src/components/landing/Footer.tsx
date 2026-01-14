import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-lattice-warm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="lattice-logo text-primary text-sm">Lattice</p>
          
          <nav className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Paths
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </nav>

          <p className="text-muted-foreground text-sm">
            © 2026 Lattice. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
