import { motion } from "framer-motion";
import { principles, philosophy } from "@/content/philosophy";
import { staggerContainer, staggerItem, viewport } from "@/lib/motion";

export default function IdentitySection() {
  return (
    <section
      id="identity"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-8 lg:px-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Manifesto statements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Tagline */}
            <motion.div variants={staggerItem} className="overflow-hidden">
              <motion.p className="text-xs uppercase tracking-[0.3em] text-premium-accent font-medium mb-6">
                Philosophy
              </motion.p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {philosophy.tagline}
              </h2>
            </motion.div>

            {/* Mission statement */}
            <motion.div variants={staggerItem}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {philosophy.mission}
              </p>
            </motion.div>

            {/* Principles as declarative statements */}
            <motion.div variants={staggerItem} className="space-y-6 pt-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  variants={staggerItem}
                  className="border-l-2 border-premium-accent/30 pl-6 hover:border-premium-accent transition-colors duration-500"
                >
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Kinetic typography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full min-h-[600px] flex items-center justify-center"
          >
            {/* Parallax background element */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.2) 0%, transparent 70%)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              viewport={viewport}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Kinetic text elements */}
            <div className="relative space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-right"
              >
                <span className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-white/5 leading-none">
                  DISCIPLINE
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-left pl-12"
              >
                <span className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-premium-accent/20 leading-none">
                  GROWTH
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-right"
              >
                <span className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-white/5 leading-none">
                  CONSISTENCY
                </span>
              </motion.div>

              {/* Floating accent line */}
              <motion.div
                className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-accent/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 1.2, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Approach statement - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 pt-16 border-t border-white/10"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            {philosophy.approach}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
