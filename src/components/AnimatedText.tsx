import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { textReveal, viewport } from '@/lib/motion';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function AnimatedText({ 
  children, 
  className = '',
  delay = 0,
  as: Component = 'div'
}: AnimatedTextProps) {
  const MotionComponent = motion[Component] as any;
  
  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={textReveal}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
