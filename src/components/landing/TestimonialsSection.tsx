import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Yoga Instructor",
    content: "I've tried every meditation app. This is the first one where I feel like I'm actually building something. After finishing the Grounding path, I noticed I was different—not just during meditation, but all day.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Software Engineer",
    content: "I'm not into crystals, but the visualizations are incredible. Standing in that circular temple, dropping the hematite sphere—I still think about it. The metaphors actually teach you something.",
    rating: 5,
  },
  {
    name: "Elena R.",
    role: "Therapist",
    content: "Most apps help you relax. Lattice helps you grow. The path structure keeps clients engaged in a way random sessions never did. It's meditation that goes somewhere.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Voices from the Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-crystal text-crystal"
                  />
                ))}
              </div>
              <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-border/30 pt-4">
                <p className="font-display text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
