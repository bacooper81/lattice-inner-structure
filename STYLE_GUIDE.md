# Lattice Design System & Style Guide

A comprehensive guide for maintaining visual consistency across the Lattice application.

---

## Brand Philosophy

Lattice embodies **crystalline clarity** and **organic growth**. The design language balances:
- **Warmth** — soft, approachable backgrounds
- **Depth** — layered, sophisticated color relationships  
- **Elegance** — refined typography with intentional spacing
- **Transformation** — subtle motion that feels alive

---

## Typography

### Font Stack

| Purpose | Font | Fallback |
|---------|------|----------|
| **Headings** | Cormorant Garamond | Georgia, serif |
| **Body** | Raleway | system-ui, sans-serif |

### Heading Hierarchy

```css
/* All headings use Cormorant Garamond */
h1: text-4xl md:text-6xl lg:text-7xl font-semibold
h2: text-3xl md:text-5xl font-semibold (use .lattice-heading)
h3: text-xl md:text-2xl font-medium (use .lattice-subheading)
h4: text-lg font-semibold
h5: text-base font-semibold
h6: text-sm font-semibold uppercase tracking-widest
```

### Body Text

```css
.lattice-body: text-base md:text-lg text-muted-foreground leading-relaxed
```

### Logo Treatment

```css
.lattice-logo {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  letter-spacing: 0.5em;
  text-transform: uppercase;
}
```

---

## Color System

### Core Brand Palette

All colors defined as HSL values in `src/index.css`.

#### Light Mode Foundations

| Token | HSL | Usage |
|-------|-----|-------|
| `--background` | 40 20% 98% | Page backgrounds |
| `--foreground` | 240 10% 20% | Primary text |
| `--card` | 40 15% 99% | Card surfaces |
| `--muted` | 40 8% 94% | Subtle backgrounds |
| `--muted-foreground` | 240 8% 40% | Secondary text |

#### Brand Accents

| Token | HSL | Usage |
|-------|-----|-------|
| `--accent` | 280 20% 50% | Dusty purple — focus rings, highlights |
| `--crystal` | 350 30% 55% | Soft rose — secondary accent |
| `--primary` | 240 10% 20% | Deep charcoal — buttons, headings |
| `--secondary` | 40 10% 94% | Warm gray — secondary buttons |

#### Lattice-Specific Tokens

| Token | HSL | Usage |
|-------|-----|-------|
| `--lattice-cream` | 40 20% 98% | Hero backgrounds |
| `--lattice-warm` | 40 15% 95% | Gradient endpoints |
| `--lattice-deep` | 273 20% 30% | Deep purple accents |
| `--lattice-rose` | 350 30% 55% | Rose highlights |
| `--lattice-rose-light` | 350 25% 70% | Soft rose |
| `--lattice-purple` | 280 18% 48% | Mid-tone purple |
| `--lattice-purple-light` | 280 15% 55% | Light purple |
| `--lattice-slate` | 270 15% 30% | Dark text alternate |
| `--lattice-slate-light` | 270 12% 45% | Medium text |
| `--lattice-stone` | 40 10% 85% | Dividers, borders |

---

## Path Color System

Each path in the app uses a distinct color family while maintaining brand cohesion. Path colors should:

1. **Share the same saturation range** (15-30%) as brand colors
2. **Use warm undertones** (lean toward purple/rose, not cold blue)
3. **Provide clear contrast** between paths
4. **Work in both light and dark modes**

### Recommended Path Palette

Add these to `src/index.css` when implementing paths:

```css
:root {
  /* Path: Mind/Clarity */
  --path-mind: 220 22% 45%;           /* Steel blue-gray */
  --path-mind-light: 220 18% 65%;
  --path-mind-bg: 220 15% 95%;

  /* Path: Body/Vitality */  
  --path-body: 25 35% 50%;            /* Warm terracotta */
  --path-body-light: 25 30% 70%;
  --path-body-bg: 25 20% 95%;

  /* Path: Spirit/Connection */
  --path-spirit: 280 25% 50%;         /* Soft violet (close to accent) */
  --path-spirit-light: 280 20% 70%;
  --path-spirit-bg: 280 15% 96%;

  /* Path: Heart/Emotion */
  --path-heart: 350 30% 55%;          /* Dusty rose (matches crystal) */
  --path-heart-light: 350 25% 72%;
  --path-heart-bg: 350 20% 96%;

  /* Path: Growth/Expansion */
  --path-growth: 150 25% 40%;         /* Sage green */
  --path-growth-light: 150 20% 60%;
  --path-growth-bg: 150 15% 95%;

  /* Path: Foundation/Grounding */
  --path-foundation: 35 25% 45%;      /* Warm bronze */
  --path-foundation-light: 35 20% 65%;
  --path-foundation-bg: 35 15% 95%;
}
```

### Path Color Usage

- **`--path-[name]`** — Primary path color (icons, active states, accent borders)
- **`--path-[name]-light`** — Hover states, secondary elements
- **`--path-[name]-bg`** — Path section backgrounds, cards

---

## Border Radius

Consistent roundness creates cohesion. Use semantic tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 0.5rem (8px) | Small elements, tags |
| `rounded-md` | 0.625rem (10px) | Inputs, small buttons |
| `rounded-lg` | 0.75rem (12px) | **Default** — buttons, cards |
| `rounded-2xl` | 1rem (16px) | Large cards, modals |
| `rounded-3xl` | 1.5rem (24px) | Hero sections, feature cards |
| `rounded-full` | 9999px | Pills, avatars, circular buttons |

### Default: `rounded-lg` (0.75rem)

The base `--radius` variable is set to `0.75rem`. Most interactive elements should use this.

---

## Buttons

### Variants

| Variant | Usage |
|---------|-------|
| `default` | Primary actions |
| `secondary` | Secondary actions |
| `outline` | Tertiary/cancel actions |
| `ghost` | Minimal emphasis |
| `destructive` | Delete/dangerous actions |
| `hero` | Landing page CTAs — white, uppercase, tracking-widest |
| `crystal` | Accent CTAs — uses accent color |
| `subtle` | Overlay buttons — glass effect |

### Sizes

| Size | Height | Padding | Usage |
|------|--------|---------|-------|
| `sm` | 36px (h-9) | px-3 | Compact UI |
| `default` | 40px (h-10) | px-4 | Standard |
| `lg` | 48px (h-12) | px-8 | Emphasized |
| `xl` | 56px (h-14) | px-10 | Hero CTAs |
| `icon` | 40×40px | — | Icon-only buttons |

### Button Styling Rules

1. **Always use semantic variants** — never write raw color classes
2. **Hero/CTA buttons** use `font-serif tracking-widest uppercase text-xs`
3. **Hover states** should lift (`hover:-translate-y-0.5`) and/or deepen shadow
4. **Transitions** use `duration-300` for smoothness

```tsx
// ✅ Correct
<Button variant="hero" size="xl">Begin Your Journey</Button>

// ❌ Incorrect — don't use raw colors
<button className="bg-purple-500 text-white">Click</button>
```

---

## Cards

### Base Card

```tsx
<Card className="rounded-2xl">
  <CardContent className="p-8">
    {/* content */}
  </CardContent>
</Card>
```

### Lattice Card (custom)

```css
.lattice-card {
  @apply bg-card rounded-2xl p-8 shadow-sm border border-border/50;
}
```

### Card Guidelines

1. **Roundness**: Use `rounded-2xl` for feature cards, `rounded-lg` for compact cards
2. **Padding**: Default `p-6`, generous `p-8` for feature cards
3. **Borders**: Subtle — `border-border/50` (50% opacity)
4. **Shadows**: Light — `shadow-sm` or `shadow-lattice`
5. **Hover**: Add `shadow-lattice-hover` and slight lift

### Card Shadows

```css
shadow-lattice: 0 4px 30px -10px hsl(var(--lattice-slate) / 0.1)
shadow-lattice-hover: 0 10px 40px -15px hsl(var(--lattice-slate) / 0.15)
shadow-crystal: 0 0 60px -20px hsl(var(--accent) / 0.4)
```

---

## Spacing & Layout

### Section Spacing

```css
.lattice-section {
  @apply py-20 md:py-28 px-6 md:px-12;
}

.lattice-container {
  @apply max-w-6xl mx-auto;
}
```

### Spacing Scale

Use Tailwind's default scale consistently:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 0.25rem | Micro gaps |
| `space-2` | 0.5rem | Tight spacing |
| `space-4` | 1rem | Standard component gaps |
| `space-6` | 1.5rem | Section padding |
| `space-8` | 2rem | Large gaps |
| `space-12` | 3rem | Between sections |
| `space-20` | 5rem | Major section breaks |

---

## Motion & Animation

### Keyframes Available

```css
fade-in: opacity 0→1, translateY 20px→0 (0.8s)
fade-in-slow: opacity 0→1 (1.2s)
scale-in: opacity 0→1, scale 0.95→1 (0.6s)
float: translateY 0→-10px→0 (6s, infinite)
shimmer: opacity 0.7→1→0.7 (3s, infinite)
```

### Usage Classes

```css
.animate-fade-in
.animate-fade-in-slow  
.animate-scale-in
.animate-float
.animate-float-delayed (2s delay)
.animate-shimmer
```

### Framer Motion Guidelines

Use `framer-motion` for complex animations. Standard easing:

```tsx
transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
```

Stagger children by 0.1-0.15s for lists.

---

## Iconography

- **Library**: Lucide React
- **Default size**: 20×20px (`size-5`) or 24×24px (`size-6`)
- **Stroke width**: Default (2px)
- **Color**: Inherit from text color or use `text-muted-foreground`

```tsx
import { Sparkles, ArrowRight } from "lucide-react";

<Sparkles className="size-5 text-accent" />
```

---

## Dark Mode

Dark mode inverts the warmth:
- Backgrounds become deep cool blues (`220 20% 10%`)
- Accents shift to warm gold (`38 45% 55%`)
- Text becomes warm cream (`40 20% 95%`)

The `.dark` class on `<html>` triggers dark mode. All semantic tokens automatically adapt.

---

## Gradients & Effects

### Background Gradients

```css
bg-lattice-gradient: linear-gradient(135deg, cream → warm)
bg-gold-gradient: linear-gradient(135deg, gold-light → gold)
bg-subtle-radial: radial-gradient(ellipse, warm → background)
```

### Glow Effects

```css
.lattice-glow {
  box-shadow: 0 0 60px -20px hsl(var(--accent) / 0.3);
}
```

### Gradient Text

```css
.lattice-gradient-text {
  @apply bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent;
}
```

---

## Dividers

```css
.lattice-divider {
  @apply w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent;
}
```

Use centered gradient dividers between sections rather than solid lines.

---

## Component Checklist

When building new components, ensure:

- [ ] Uses semantic color tokens (never raw colors)
- [ ] Uses defined border-radius tokens
- [ ] Typography uses correct font family
- [ ] Spacing follows the scale
- [ ] Has appropriate hover/focus states
- [ ] Works in both light and dark modes
- [ ] Animations are subtle and purposeful
- [ ] Accessible (proper contrast, focus rings)

---

## Quick Reference Classes

```css
/* Sections */
.lattice-section
.lattice-container

/* Typography */
.lattice-heading
.lattice-subheading
.lattice-body
.lattice-logo
.lattice-gradient-text

/* Cards */
.lattice-card

/* Effects */
.lattice-glow
.lattice-divider

/* Motion */
.animate-float
.animate-fade-in
.animate-scale-in
```

---

## File Locations

| File | Purpose |
|------|---------|
| `src/index.css` | CSS variables, global styles, utility classes |
| `tailwind.config.ts` | Tailwind theme extensions, color mappings |
| `src/components/ui/button.tsx` | Button variants |
| `src/components/ui/card.tsx` | Card components |

---

*Last updated: January 2026*
