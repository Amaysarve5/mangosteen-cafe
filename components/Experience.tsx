"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 0.98]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 hidden sm:block">
        <img
          src="/images/hero-cafe.jpg"
          alt="Café experience"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        <div className="absolute inset-0 bg-forest/30" />
      </motion.div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-6"
        >
          The Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cream text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          <span className="block">More Than</span>
          <span className="block text-gold italic">Just Coffee</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Step into a world where every corner whispers stories of craft and care.
          Where the gentle clink of cups becomes a symphony, and strangers become friends
          over shared tables and warm conversations.
        </motion.p>

        {/* Stats / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "5+", label: "Years of Craft" },
            { number: "12", label: "Bean Origins" },
            { number: "50k+", label: "Cups Served" },
            { number: "100%", label: "Passion" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <span
                className="text-4xl md:text-5xl text-gold font-serif"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.number}
              </span>
              <p className="text-cream/60 text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <p className="text-cream/40 text-lg italic font-serif" style={{ fontFamily: "var(--font-playfair), serif" }}>
            &ldquo;A space where time pauses, and life feels a little gentler.&rdquo;
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-cream/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
