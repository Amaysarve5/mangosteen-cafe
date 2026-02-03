"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-charcoal overflow-hidden">
      {/* Top Decorative Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3
              className="text-3xl font-serif text-cream mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Mangosteen
            </h3>
            <p className="text-cream/50 text-sm">
              Where artisan coffee meets refined elegance.
            </p>
          </motion.div>

          {/* Social & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <motion.a
              href="https://www.instagram.com/mangosteencafe/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-forest/20 hover:bg-gold/20 rounded-full text-cream/70 hover:text-gold transition-all duration-300 mb-4"
            >
              <Instagram size={24} />
            </motion.a>
            <p className="text-cream/40 text-sm">@mangosteencafe</p>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-cream/50 hover:text-gold transition-colors text-sm tracking-wider uppercase"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cream/40"
          >
            &copy; 2026 Mangosteen Cafe. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6 text-cream/40"
          >
            <a href="#" className="hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <span className="text-cream/20">|</span>
            <a href="#" className="hover:text-cream transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[15vw] font-serif text-cream whitespace-nowrap leading-none"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Mangosteen
        </motion.h2>
      </div>
    </footer>
  );
}
