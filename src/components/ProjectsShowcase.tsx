import { motion } from 'framer-motion';
import { projects, Project } from '@/content/projects';
import { staggerContainer, staggerItem, viewport } from '@/lib/motion';

export default function ProjectsShowcase() {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Building':
        return 'bg-premium-accent/10 text-premium-accent border-premium-accent/30';
      case 'Experiment':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-premium-accent font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projects
          </motion.p>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Selected
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-premium-accent">
              Work
            </span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-lg bg-card border border-white/10 hover:border-premium-accent/30 transition-colors duration-500"
            >
              {/* Background image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-premium-accent/0 group-hover:bg-premium-accent/10 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-3">
                {/* Status badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full border font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-premium-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Hover glow border effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: '0 0 40px rgba(96, 165, 250, 0.15)',
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
