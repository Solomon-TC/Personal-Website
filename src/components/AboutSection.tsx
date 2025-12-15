import { motion } from 'framer-motion';
import { siteContent } from '@/content/site';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-24 md:py-32 px-8 lg:px-16 noise-texture">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="font-space text-xs uppercase tracking-[0.3em] text-cinematic-blue mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteContent.about.label}
            </motion.p>
            
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
              {siteContent.about.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cinematic-blue">
                {siteContent.about.titleAccent}
              </span>
            </h2>

            <div className="space-y-6 font-mono text-base md:text-lg text-gray-400 leading-relaxed">
              {siteContent.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <motion.div
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {siteContent.about.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 border border-cinematic-blue/30 text-cinematic-blue font-space text-xs uppercase tracking-wider rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(0, 212, 255, 1)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              {/* Placeholder for image/visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-cinematic-darker to-cinematic-black border border-white/10">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Geometric shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-64 h-64 border border-cinematic-blue/30 rounded-lg"
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="absolute w-48 h-48 border border-cinematic-blue/20 rounded-lg"
                    animate={{
                      rotate: [360, 270, 180, 90, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cinematic-blue" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cinematic-blue" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
