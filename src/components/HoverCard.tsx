import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { hoverScale, hoverLift, hoverGlow } from '@/lib/motion';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  effect?: 'scale' | 'lift' | 'glow' | 'all';
}

export default function HoverCard({ 
  children, 
  className = '',
  effect = 'all'
}: HoverCardProps) {
  const getHoverEffect = () => {
    switch (effect) {
      case 'scale':
        return hoverScale;
      case 'lift':
        return hoverLift;
      case 'glow':
        return hoverGlow;
      case 'all':
        return {
          scale: 1.02,
          y: -4,
          boxShadow: '0 8px 32px rgba(96, 165, 250, 0.15)',
          transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      whileHover={getHoverEffect()}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
