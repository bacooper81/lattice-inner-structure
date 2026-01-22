import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Raleway", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        crystal: {
          DEFAULT: "hsl(var(--crystal))",
          foreground: "hsl(var(--crystal-foreground))",
        },
        lattice: {
          cream: "hsl(var(--lattice-cream))",
          warm: "hsl(var(--lattice-warm))",
          deep: "hsl(var(--lattice-deep))",
          magenta: "hsl(var(--lattice-magenta))",
          "magenta-light": "hsl(var(--lattice-magenta-light))",
          purple: "hsl(var(--lattice-purple))",
          "purple-dark": "hsl(var(--lattice-purple-dark))",
          blue: "hsl(var(--lattice-blue))",
          "blue-light": "hsl(var(--lattice-blue-light))",
          gold: "hsl(var(--lattice-gold))",
          "gold-light": "hsl(var(--lattice-gold-light))",
          slate: "hsl(var(--lattice-slate))",
          "slate-light": "hsl(var(--lattice-slate-light))",
          stone: "hsl(var(--lattice-stone))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-slow": "fade-in-slow 1.2s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
      },
      backgroundImage: {
        "lattice-gradient": "linear-gradient(135deg, hsl(var(--lattice-cream)) 0%, hsl(var(--lattice-warm)) 100%)",
        "gold-gradient": "linear-gradient(135deg, hsl(var(--lattice-gold-light)) 0%, hsl(var(--lattice-gold)) 100%)",
        "subtle-radial": "radial-gradient(ellipse at center, hsl(var(--lattice-warm)) 0%, hsl(var(--background)) 70%)",
      },
      boxShadow: {
        "lattice": "0 4px 30px -10px hsl(var(--lattice-slate) / 0.1)",
        "lattice-hover": "0 10px 40px -15px hsl(var(--lattice-slate) / 0.15)",
        "crystal": "0 0 60px -20px hsl(var(--accent) / 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
