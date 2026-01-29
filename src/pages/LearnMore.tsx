import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Sparkles, Heart, Eye, Shield, Moon, Leaf, ArrowRight } from "lucide-react";

import crystalsArrangement from "@/assets/crystals-arrangement.jpg";
import pathGrounding from "@/assets/path-of-grounding-cover.png";
import pathHealing from "@/assets/path-of-inner-healing-cover.png";
import pathIntuition from "@/assets/path-of-intuition-cover.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const practices = [
  {
    icon: Eye,
    title: "Crystal Visualization",
    description: "Connect with the subtle energies of crystals through guided imagery and intention-setting meditations.",
    link: "/onboarding/welcome"
  },
  {
    icon: Heart,
    title: "Heart-Centered Practice",
    description: "Open your heart chakra with rose quartz-inspired sessions focused on self-love and compassion.",
    link: "/onboarding/welcome"
  },
  {
    icon: Shield,
    title: "Protection & Grounding",
    description: "Build energetic boundaries and stay rooted with obsidian and hematite meditation techniques.",
    link: "/onboarding/welcome"
  },
  {
    icon: Sparkles,
    title: "Intuition Development",
    description: "Awaken your inner knowing with amethyst-guided sessions designed to enhance clarity and insight.",
    link: "/onboarding/welcome"
  }
];

const topics = [
  {
    category: "Getting Started",
    items: [
      { title: "What is crystal meditation?", description: "Understand the foundations of working with crystal energies." },
      { title: "Choosing your first crystal", description: "Learn which stones resonate with your intentions." },
      { title: "Creating sacred space", description: "Set up an environment conducive to deep practice." }
    ]
  },
  {
    category: "Deepen Your Practice",
    items: [
      { title: "Chakra alignment with crystals", description: "Balance your energy centers using specific stone placements." },
      { title: "Moon phase rituals", description: "Work with lunar cycles to amplify your intentions." },
      { title: "Crystal grids for manifestation", description: "Combine multiple stones for focused energy work." }
    ]
  },
  {
    category: "Healing & Transformation",
    items: [
      { title: "Releasing old patterns", description: "Use crystal energy to clear stagnant emotions and beliefs." },
      { title: "Shadow work integration", description: "Safely explore and integrate hidden aspects of yourself." },
      { title: "Ancestral healing", description: "Connect with lineage wisdom through crystal practice." }
    ]
  }
];

const paths = [
  {
    image: pathGrounding,
    title: "Path of Grounding",
    duration: "7-day journey",
    description: "Connect with Earth's stability through obsidian, hematite, and smoky quartz meditations."
  },
  {
    image: pathHealing,
    title: "Path of Inner Healing",
    duration: "10-day journey",
    description: "Open your heart with rose quartz and release what no longer serves you."
  },
  {
    image: pathIntuition,
    title: "Path of Intuition",
    duration: "14-day journey",
    description: "Awaken your third eye with amethyst and labradorite-guided sessions."
  }
];

const LearnMore = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--lattice-warm))] to-background" />
        
        <div className="lattice-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div {...fadeInUp}>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Crystal Meditation
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary mb-6">
                Meditation guided by ancient wisdom
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Crystal meditation combines the calming practice of meditation with the subtle energies of crystals. 
                Each stone carries unique properties that can support your journey toward balance, clarity, and inner peace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/onboarding/welcome">Begin Your Journey</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                  <a href="#practices">Explore Practices</a>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={crystalsArrangement}
                  alt="Crystal arrangement for meditation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--lattice-purple)/0.1)] to-[hsl(var(--lattice-rose)/0.1)] rounded-[2rem] -z-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section id="practices" className="lattice-section bg-[hsl(var(--lattice-warm))]">
        <div className="lattice-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Four pillars of crystal practice
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lattice offers guided meditations rooted in four core practices, each designed to address 
              different aspects of your well-being.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(var(--lattice-purple)/0.1)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--lattice-purple)/0.15)] transition-colors">
                      <practice.icon className="w-6 h-6 text-[hsl(var(--lattice-purple))]" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {practice.description}
                    </p>
                    <Link 
                      to={practice.link}
                      className="inline-flex items-center text-sm font-medium text-[hsl(var(--lattice-purple))] hover:underline"
                    >
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics/Resources Section */}
      <section className="lattice-section">
        <div className="lattice-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Learn & Grow
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Resources for every stage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're new to crystal meditation or deepening an existing practice, 
              Lattice guides you every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic, categoryIndex) => (
              <motion.div
                key={topic.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              >
                <h3 className="font-serif text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                  {categoryIndex === 0 && <Leaf className="w-5 h-5 text-[hsl(var(--lattice-purple))]" />}
                  {categoryIndex === 1 && <Moon className="w-5 h-5 text-[hsl(var(--lattice-purple))]" />}
                  {categoryIndex === 2 && <Heart className="w-5 h-5 text-[hsl(var(--lattice-purple))]" />}
                  {topic.category}
                </h3>
                <ul className="space-y-4">
                  {topic.items.map((item) => (
                    <li 
                      key={item.title}
                      className="group cursor-pointer"
                    >
                      <Link to="/onboarding/welcome" className="block p-4 rounded-xl hover:bg-[hsl(var(--lattice-warm))] transition-colors">
                        <p className="font-medium text-primary group-hover:text-[hsl(var(--lattice-purple))] transition-colors mb-1">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paths Preview */}
      <section className="lattice-section bg-gradient-to-b from-[hsl(var(--lattice-warm))] to-background">
        <div className="lattice-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Guided Journeys
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Multi-day paths for transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Commit to a structured journey and experience profound shifts in your energy, mindset, and well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link to="/onboarding/welcome" className="block group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{path.duration}</p>
                  <h3 className="font-serif text-xl font-semibold text-primary group-hover:text-[hsl(var(--lattice-purple))] transition-colors mb-2">
                    {path.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lattice-section">
        <div className="lattice-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
              Ready to begin?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with a free crystal quiz to discover which stones align with your current needs, 
              then receive personalized meditation recommendations.
            </p>
            <Button size="lg" className="rounded-full px-10" asChild>
              <Link to="/onboarding/welcome">Take the Crystal Quiz</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LearnMore;
