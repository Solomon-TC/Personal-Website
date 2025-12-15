import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
}

export default function ContentCard({ title, description, icon, delay = 0 }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/0 to-cinematic-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
        }}
      />

      <div className="relative z-10">
        {icon && (
          <motion.div
            className="mb-6 text-cinematic-blue"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
        
        <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4 group-hover:text-cinematic-blue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Parallax internal element */}
        <motion.div
          className="absolute top-4 right-4 w-24 h-24 rounded-full bg-cinematic-blue/5 blur-2xl"
          whileHover={{ scale: 1.5, x: 10, y: -10 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
