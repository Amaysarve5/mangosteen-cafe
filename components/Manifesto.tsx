"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-beige via-secondary to-cream night-mode:from-forest night-mode:via-charcoal night-mode:to-forest-light transition-colors duration-700"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "80px", opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gold mx-auto mb-12"
          />

          {/* Main Quote */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-charcoal night-mode:text-cream transition-colors duration-700"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              We believe coffee should never be rushed.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-forest night-mode:text-gold italic mt-2 transition-colors duration-700"
            >
              It&apos;s a pause. A ritual.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block mt-2"
            >
              A moment.
            </motion.span>
          </h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "80px", opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-px bg-gold mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
