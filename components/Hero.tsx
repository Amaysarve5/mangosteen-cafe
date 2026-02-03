"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <video
          className="w-full h-full object-cover scale-110 hidden sm:block"
          src="/vedios/bg-vedio.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 bg-forest/20" />
      </motion.div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content with scroll fade */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Est. 2019
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-cream text-6xl md:text-8xl lg:text-9xl font-serif mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          <span className="block">Mangosteen</span>
          <span className="block text-gold/90 italic">Cafe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-cream/80 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Where artisan coffee meets warm hospitality. A calm, elegant space
          for those who value slow mornings, thoughtful conversation, and
          carefully crafted beverages.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection("#menu")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gold text-charcoal font-medium tracking-wider uppercase text-sm md:text-base rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            View Menu
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("#contact")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-transparent border border-cream/40 text-cream font-medium tracking-wider uppercase text-sm md:text-base rounded-full transition-all duration-300 hover:bg-cream/10 hover:border-cream/60"
          >
            Visit Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-cream/60 hover:text-cream transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-forest-light blur-3xl pointer-events-none"
      />
    </section>
  );
}
