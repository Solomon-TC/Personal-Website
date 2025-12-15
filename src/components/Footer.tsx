import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { siteContent } from '@/content/site';

export default function Footer() {
  const iconMap = {
    'GitHub': <Github size={20} />,
    'LinkedIn': <Linkedin size={20} />,
    'Twitter': <Twitter size={20} />,
    'Email': <Mail size={20} />,
  };

  return (
    <footer id="contact" className="relative py-20 md:py-24 px-8 lg:px-16 overflow-hidden noise-texture">
      {/* Animated dot matrix background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.p
            className="font-space text-xs uppercase tracking-[0.3em] text-cinematic-blue mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {siteContent.contact.label}
          </motion.p>
          
          <h2 className="font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
            {siteContent.contact.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cinematic-blue">
              {siteContent.contact.titleAccent}
            </span>
          </h2>

          <motion.a
            href={`mailto:${siteContent.contact.email}`}
            className="inline-block font-mono text-xl md:text-2xl text-gray-400 hover:text-cinematic-blue transition-colors duration-300"
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {siteContent.contact.email} →
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-cinematic-blue to-transparent mb-12"
          style={{ transformOrigin: 'left' }}
        />

        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-syne font-extrabold text-2xl text-white">
              {siteContent.footer.brand}
            </h3>
            <p className="font-mono text-xs text-gray-500 mt-1">
              {siteContent.footer.copyright}
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            {siteContent.footer.social.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-cinematic-blue hover:border-cinematic-blue transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {iconMap[link.label as keyof typeof iconMap]}
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-cinematic-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-cinematic-blue hover:border-cinematic-blue transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
