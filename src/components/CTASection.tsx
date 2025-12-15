import { motion } from 'framer-motion';
import { Twitter, Mail, Instagram } from 'lucide-react';
import { siteContent } from '@/content/site';

const iconMap = {
  twitter: Twitter,
  mail: Mail,
  instagram: Instagram,
};

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12"
        >
          {siteContent.cta.message}
        </motion.h2>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {siteContent.cta.social.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-premium-accent/50 rounded-lg transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-premium-accent transition-colors duration-300" />
                  <span className="text-sm font-medium text-white uppercase tracking-wider">
                    {link.label}
                  </span>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(96, 165, 250, 0.1)',
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
