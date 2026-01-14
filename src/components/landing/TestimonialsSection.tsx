import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Yoga Instructor",
    content: "Lattice has transformed my meditation practice. The crystal imagery creates such a deep connection—I feel more grounded after just one session than I did after years of traditional meditation.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Software Engineer",
    content: "As a skeptic, I was surprised by how powerful the visualizations are. The Path of Grounding helped me manage my anxiety in ways I never expected. The structure keeps me coming back.",
    rating: 5,
  },
  {
    name: "Elena R.",
    role: "Therapist",
    content: "I recommend Lattice to my clients regularly. The narrative arc of each path creates real, lasting transformation. It's meditation with purpose and direction.",
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
