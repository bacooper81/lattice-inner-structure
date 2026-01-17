import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    content: "I've tried many crystal meditations. These are the first ones where I feel like I'm building something. I'm more grounded, not just during meditation but throughout the day.",
    rating: 5,
  },
  {
    name: "James K.",
    content: "The visualizations are incredible. Standing in that circular temple, dropping the hematite sphere—I still think about it. The metaphors actually teach you something.",
    rating: 5,
  },
  {
    name: "Elena R.",
    content: "Most apps help you relax. Lattice helps you grow. The way the sessions build kept me engaged in a way random meditations never did. It's meditation that goes somewhere.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="lattice-section bg-lattice-warm relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="testimonial-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
            <path d="M0 7.5 L7.5 0 L15 7.5 L7.5 15 Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
          <rect width="100" height="100" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      <div className="lattice-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7a6889] font-serif tracking-widest uppercase text-base mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-6">
            What People Are Experiencing
          </h2>
          <div className="lattice-divider mx-auto mb-6" />
          <p className="text-[#5f5278] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover how Lattice has helped others build their inner foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="lattice-card group hover:shadow-lattice-hover transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#9e6878] text-[#9e6878]"
                  />
                ))}
              </div>
              <blockquote className="text-[#5f5278] text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-border/50 pt-4">
                <p className="font-serif text-[#4a3d5c] font-semibold">- {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
