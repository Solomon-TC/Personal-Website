import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/content/site';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Fade in navigation after hero sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Handle scroll for blur effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = siteContent.nav.items;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 right-0 z-50 p-8 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-cinematic-black/50' : ''
      }`}
    >
      <ul className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <motion.button
              onClick={() => scrollToSection(item.href)}
              className="relative font-space font-medium text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-cinematic-blue"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
