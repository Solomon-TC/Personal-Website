import { Variants } from 'framer-motion';

// Premium easing curves
export const ease = {
  smooth: [0.16, 1, 0.3, 1],
  spring: [0.34, 1.56, 0.64, 1],
  gentle: [0.25, 0.46, 0.45, 0.94],
} as const;

// Fade up on scroll
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: ease.smooth,
    },
  },
};

// Fade in
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: ease.gentle,
    },
  },
};

// Text reveal with mask
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.7,
      ease: ease.smooth,
    },
  },
};

// Staggered children container
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Staggered children items
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: ease.smooth,
    },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: ease.smooth,
    },
  },
};

// Blur fade (for page transitions)
export const blurFade: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: ease.smooth,
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(8px)',
    transition: {
      duration: 0.4,
      ease: ease.gentle,
    },
  },
};

// Hover micro-interactions
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: ease.gentle,
  },
};

export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.2,
    ease: ease.gentle,
  },
};

export const hoverGlow = {
  boxShadow: '0 0 24px rgba(96, 165, 250, 0.2)',
  transition: {
    duration: 0.3,
    ease: ease.gentle,
  },
};

// Slide in from direction
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up'): Variants => {
  const directions = {
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ease.smooth,
      },
    },
  };
};

// Viewport animation defaults
export const viewport = {
  once: true,
  margin: '-100px',
  amount: 0.2,
};
