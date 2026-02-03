"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const signatureDrinks = [
  {
    name: "Velvet Sunrise",
    tagline: "Where morning light meets espresso dreams",
    description:
      "A symphony of golden espresso, house-made vanilla bean syrup, and silky oat milk—topped with a delicate cinnamon dust that catches the morning light.",
    color: "from-amber-100 to-orange-50",
    accentColor: "bg-amber-500",
  },
  {
    name: "Forest Whisper",
    tagline: "The quiet strength of nature",
    description:
      "Cold-brewed for 24 hours with Ethiopian single-origin beans, infused with a whisper of lavender and served over spherical ice for a meditative experience.",
    color: "from-emerald-50 to-teal-50",
    accentColor: "bg-emerald-600",
  },
  {
    name: "Midnight Bloom",
    tagline: "When darkness blooms into flavor",
    description:
      "Our darkest roast meets ceremonial-grade matcha in an unexpected dance—balanced with maple and oat, creating a drink as mysterious as twilight.",
    color: "from-slate-100 to-purple-50",
    accentColor: "bg-slate-700",
  },
];

export default function SignatureDrinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm tracking-wider uppercase mb-4">
          <Sparkles size={14} />
          <span>Barista&apos;s Signature</span>
          <Sparkles size={14} />
        </div>
        <h3
          className="text-2xl md:text-3xl font-serif text-charcoal"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Crafted for the <span className="text-forest italic">Connoisseur</span>
        </h3>
      </motion.div>

      {/* Signature Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {signatureDrinks.map((drink, index) => (
          <motion.div
            key={drink.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative"
          >
            <div
              className="relative h-full bg-transparent border border-cream/25 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/10"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-700 rounded-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-block w-3 h-3 bg-gold rounded-full mb-6" />

                {/* Name */}
                <h4
                  className="text-2xl lg:text-3xl font-serif text-cream mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {drink.name}
                </h4>

                {/* Tagline */}
                <p className="text-gold text-sm italic mb-4">{drink.tagline}</p>

                {/* Description */}
                <p className="text-cream/80 text-sm leading-relaxed">
                  {drink.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold/50 to-transparent rounded-full"
                />
              </div>

              {/* Corner Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
