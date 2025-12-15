import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { blurFade } from '@/lib/motion';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={blurFade}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
