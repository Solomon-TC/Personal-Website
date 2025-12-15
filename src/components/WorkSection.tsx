import { motion } from 'framer-motion';
import ContentCard from './ContentCard';
import { Sparkles, Zap, Layers } from 'lucide-react';
import { projects, featuredProject } from '@/content/projects';
import { siteContent } from '@/content/site';

export default function WorkSection() {
  const iconMap = {
    'Motion Design': <Sparkles size={32} />,
    'Brand Identity': <Zap size={32} />,
    'UI/UX Design': <Layers size={32} />,
  };

  return (
    <section id="work" className="relative min-h-screen py-24 md:py-32 px-8 lg:px-16 noise-texture">
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
            className="font-space text-xs uppercase tracking-[0.3em] text-cinematic-blue mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {siteContent.work.label}
          </motion.p>
          
          <h2 className="font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            {siteContent.work.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cinematic-blue">
              {siteContent.work.titleAccent}
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ContentCard
              key={project.title}
              title={project.title}
              description={project.description}
              icon={iconMap[project.title as keyof typeof iconMap]}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Featured project showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="relative group overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-cinematic-darker to-cinematic-black border border-white/10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="relative z-10 h-full flex items-center justify-center p-12">
              <div className="text-center">
                <motion.h3
                  className="font-syne font-bold text-4xl md:text-5xl text-white mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {featuredProject.title}
                </motion.h3>
                <p className="font-mono text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                  {featuredProject.description}
                </p>
              </div>
            </div>

            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cinematic-blue opacity-0 group-hover:opacity-100"
              initial={{ x: -20, y: -20 }}
              whileHover={{ x: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cinematic-blue opacity-0 group-hover:opacity-100"
              initial={{ x: 20, y: 20 }}
              whileHover={{ x: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
