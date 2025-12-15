# Motion System Usage Examples

## Basic Animations

### Fade Up on Scroll
```tsx
import AnimatedSection from '@/components/AnimatedSection';

<AnimatedSection>
  <h2>This fades up when scrolled into view</h2>
</AnimatedSection>
```

### Text Reveal with Mask
```tsx
import AnimatedText from '@/components/AnimatedText';

<AnimatedText as="h1" className="text-display-xl">
  Premium Heading
</AnimatedText>
```

### Staggered List
```tsx
import StaggeredList, { StaggeredItem } from '@/components/StaggeredList';

<StaggeredList>
  <StaggeredItem>Item 1</StaggeredItem>
  <StaggeredItem>Item 2</StaggeredItem>
  <StaggeredItem>Item 3</StaggeredItem>
</StaggeredList>
```

## Hover Interactions

### Hover Card with Effects
```tsx
import HoverCard from '@/components/HoverCard';

<HoverCard effect="all" className="p-6 bg-card rounded-lg">
  <h3>Hover me</h3>
  <p>I lift, scale, and glow</p>
</HoverCard>
```

### Custom Hover with Framer Motion
```tsx
import { motion } from 'framer-motion';
import { hoverScale, hoverGlow } from '@/lib/motion';

<motion.button
  whileHover={{ ...hoverScale, ...hoverGlow }}
  whileTap={{ scale: 0.98 }}
>
  Click me
</motion.button>
```

## Page Transitions

Already configured in App.tsx with blur fade effect.

## Programmatic Scrolling

```tsx
import { useScrollTo } from '@/hooks/useScrollTo';

function MyComponent() {
  const { scrollTo, scrollToTop } = useScrollTo();

  return (
    <>
      <button onClick={() => scrollTo('#section-id')}>
        Scroll to section
      </button>
      <button onClick={scrollToTop}>
        Back to top
      </button>
    </>
  );
}
```

## Custom Variants

### Using Motion Variants Directly
```tsx
import { motion } from 'framer-motion';
import { fadeUp, slideIn, scaleIn, viewport } from '@/lib/motion';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={viewport}
  variants={fadeUp}
>
  Content
</motion.div>

// Slide from different directions
<motion.div variants={slideIn('left')}>Left</motion.div>
<motion.div variants={slideIn('right')}>Right</motion.div>
```

## Advanced: Staggered Container

```tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewport } from '@/lib/motion';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={viewport}
  variants={staggerContainer}
>
  <motion.div variants={staggerItem}>Child 1</motion.div>
  <motion.div variants={staggerItem}>Child 2</motion.div>
  <motion.div variants={staggerItem}>Child 3</motion.div>
</motion.div>
```

## Easing Curves

```tsx
import { ease } from '@/lib/motion';

// Use in custom animations
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.6, ease: ease.smooth }}
/>
```

Available easings:
- `ease.smooth` - Premium smooth easing [0.16, 1, 0.3, 1]
- `ease.spring` - Bouncy spring [0.34, 1.56, 0.64, 1]
- `ease.gentle` - Gentle easing [0.25, 0.46, 0.45, 0.94]
