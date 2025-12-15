import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { principles, frameworks } from '@/content/philosophy';
import { ChevronDown } from 'lucide-react';

export default function PhilosophySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="philosophy" className="relative min-h-screen py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-premium-accent font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Philosophy
          </motion.p>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Core
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-premium-accent">
              Principles
            </span>
          </h2>
        </motion.div>

        {/* Principles list */}
        <div className="space-y-1">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-white/5 last:border-b-0"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left py-6 group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-white group-hover:text-premium-accent transition-colors duration-300">
                    {principle.title}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-premium-accent transition-colors duration-300" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed pt-4 pr-12">
                        {principle.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Frameworks section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 pt-16 border-t border-white/10"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
            Tools & Frameworks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h4 className="text-xs uppercase tracking-[0.3em] text-premium-accent font-medium">
                  {framework.category}
                </h4>
                
                <ul className="space-y-2">
                  {framework.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-base md:text-lg text-muted-foreground hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
