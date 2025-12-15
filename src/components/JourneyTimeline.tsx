import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { chapters } from '@/content/journey';

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <section id="journey" className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
            Journey
          </motion.p>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            The
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-premium-accent">
              Chapters
            </span>
          </h2>
        </motion.div>

        {/* Horizontal scrolling timeline */}
        <div ref={containerRef} className="relative">
          {/* Progress line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] bg-white/10"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: 'left'
            }}
          />

          {/* Chapters */}
          <div className="space-y-32 pt-16">
            {chapters.map((chapter, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={chapter.title}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Chapter number and theme */}
                  <div className={`space-y-4 ${isEven ? 'lg:text-right' : 'lg:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="font-display text-8xl md:text-9xl font-black text-white/5 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    
                    <motion.p
                      className="text-xs uppercase tracking-[0.3em] text-premium-accent font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {chapter.theme}
                    </motion.p>
                  </div>

                  {/* Chapter content */}
                  <motion.div
                    className={`space-y-6 ${isEven ? '' : 'lg:order-1'}`}
                    style={{
                      y: useTransform(
                        scrollYProgress,
                        [0, 1],
                        [0, isEven ? -30 : 30]
                      )
                    }}
                  >
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {chapter.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                      {chapter.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      className="w-24 h-[2px] bg-gradient-to-r from-premium-accent to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </motion.div>

                  {/* Connecting dot */}
                  <motion.div
                    className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-premium-accent hidden lg:block"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 pt-16 border-t border-white/10 text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Every chapter builds on the last. The journey continues.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
