import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to own crystals to use Lattice?",
    answer: "No. Crystals are always optional. Each session works through guided imagery, so you can experience the practice fully with or without a physical stone.",
  },
  {
    question: "What makes Lattice different from other meditation apps?",
    answer: "Most meditation apps focus on relaxation or momentary insight. Lattice uses crystal symbolism to help you practice new ways of being that carry into everyday life.",
  },
  {
    question: "How long are the meditation sessions?",
    answer: "Most sessions are about 10 minutes. They're designed to fit into your days while still building something meaningful over time.",
  },
  {
    question: "I'm new to meditation. Is Lattice beginner-friendly?",
    answer: "Yes. You'll be guided every step of the way. The visualizations give your mind something to engage with, which many people find more accessible than silent or breath-only meditation.",
  },
  {
    question: "How do the paths work?",
    answer: "Each path centers on a specific theme—such as grounding, intuition, or inner healing—and unfolds as a linear journey meant to be experienced in order. Sessions build on one another, helping you embody that theme over time rather than starting fresh each day.",
  },
  {
    question: "Can I repeat paths or sessions?",
    answer: "Absolutely. Repeating paths or sessions helps the themes settle more deeply, allowing the practice to stay with you over time.",
  },
];

const FAQSection = () => {
  return (
    <section className="lattice-section bg-background">
      <div className="lattice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7a6889] font-serif tracking-widest uppercase text-sm mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#4a3d5c] leading-tight mb-6">
            Common Questions
          </h2>
          <div className="lattice-divider mx-auto mb-6" />
          <p className="text-[#5f5278] text-lg max-w-2xl mx-auto leading-relaxed">
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
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-lattice transition-all"
              >
                <AccordionTrigger className="text-left font-serif text-[#4a3d5c] hover:text-[#6d5a7d] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5f5278] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            size="xl" 
            className="bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-xs transition-all"
          >
            Start My Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
