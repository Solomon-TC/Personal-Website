import { motion } from "framer-motion";
import { textReveal, fadeIn, ease } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: ease.smooth }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(96, 165, 250, 0.08) 0%, transparent 60%)",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, rgba(96, 165, 250, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.06) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-premium-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero content - centered */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* Headline with mask reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-[0.95] tracking-tighter"
          >
            Solomon Capell
          </motion.h1>
        </div>

        {/* Subheading with fade in */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            ...fadeIn,
            visible: {
              ...fadeIn.visible,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: ease.gentle,
              },
            },
          }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed"
        >
          The story, projects, and systems of a man on his journey to the 1%
        </motion.p>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: ease.smooth }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
