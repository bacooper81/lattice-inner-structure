import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to own crystals to use Lattice?",
    answer: "Not at all. Crystals are always optional. Each meditation includes rich, vivid imagery that helps you connect with the crystal's energy through visualization alone. You'll experience the full benefit whether you hold a physical crystal or simply imagine it.",
  },
  {
    question: "What makes Lattice different from other meditation apps?",
    answer: "Lattice offers structured, multi-day paths that guide you through a complete transformation—not just isolated sessions. Each path follows a narrative arc centered on themes like grounding, intuition, or inner healing. The crystal imagery adds a unique dimension that deepens your practice and makes each session memorable.",
  },
  {
    question: "How long are the meditation sessions?",
    answer: "Sessions typically range from 10 to 20 minutes, designed to fit into your daily routine while still providing a meaningful, transformative experience. Each path builds progressively, so even shorter sessions contribute to lasting change.",
  },
  {
    question: "I'm new to meditation. Is Lattice beginner-friendly?",
    answer: "Absolutely. The guided visualizations make it easy to stay focused, even if you've never meditated before. The vivid imagery gives your mind something concrete to hold onto, which many beginners find more accessible than traditional breath-focused meditation.",
  },
  {
    question: "How do the paths work?",
    answer: "Each path is a linear journey of 7-14 days, designed to be completed in order. You'll progress through sessions that build on each other, developing specific skills like consistency, emotional release, or intuitive awareness. Think of it as a course in personal development wrapped in the beauty of crystal meditation.",
  },
  {
    question: "Can I repeat paths or sessions?",
    answer: "Yes! Many users return to their favorite paths seasonally or whenever they need to reconnect with a particular quality. Some paths are designed for periodic revisiting as you grow and change.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about your journey with Lattice
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/30 border border-border/50 rounded-xl px-6 data-[state=open]:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-foreground hover:text-crystal transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
