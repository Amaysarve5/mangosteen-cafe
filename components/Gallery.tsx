"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Instagram, Heart, Camera } from "lucide-react";

const initialImages = [
  { src: "/images/gallery-1.jpg", alt: "Artisan cappuccino with latte art", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-2.jpg", alt: "Gourmet avocado toast", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-3.jpg", alt: "Classic tiramisu dessert", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Café interior seating", span: "col-span-2 row-span-1" },
  { src: "/images/gallery-5.jpg", alt: "Cold brew coffee", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-6.jpg", alt: "Fresh pastries", span: "col-span-1 row-span-1" },
];

const additionalImages = [
  { src: "/images/gallery-7.jpg", alt: "Matcha latte", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-8.jpg", alt: "Friends at café", span: "col-span-2 row-span-1" },
  { src: "/images/gallery-1.jpg", alt: "Morning coffee ritual", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Dessert selection", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Summer beverages", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Cozy ambiance", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [images, setImages] = useState(initialImages);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleLoadMore = () => {
    setShowMore(true);
    setImages([...initialImages, ...additionalImages]);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 md:py-32 lg:py-40 bg-cream overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Visual Journey
          </span>
          <h2
            className="text-5xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The <span className="text-forest italic">Gallery</span>
          </h2>
          <p className="text-warm-brown text-xl max-w-2xl mx-auto">
            Glimpses of moments, flavors, and the quiet beauty found within our walls.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[220px] md:auto-rows-[250px]"
        >
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`${image.span} relative group cursor-pointer overflow-hidden rounded-2xl`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Top Icons */}
                  <div className="flex justify-end gap-2">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15 + index * 0.02 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-9 h-9 bg-cream/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-cream transition-colors"
                    >
                      <Heart size={16} className="text-forest" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.02 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-9 h-9 bg-cream/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-cream transition-colors"
                    >
                      <Camera size={16} className="text-forest" />
                    </motion.div>
                  </div>

                  {/* Bottom Info */}
                  <div className="flex items-end justify-between">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + index * 0.02 }}
                      className="text-cream text-sm font-medium max-w-[70%]"
                    >
                      {image.alt}
                    </motion.p>
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.02 }}
                      className="w-10 h-10 bg-gold/90 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                    >
                      <Instagram size={18} className="text-charcoal" />
                    </motion.div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold/0 group-hover:bg-gold/20 rotate-45 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {!showMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-forest text-cream rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:bg-forest-light hover:shadow-lg"
            >
              <span>View More Images</span>
              <Plus size={18} />
            </motion.button>
          </motion.div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-warm-brown/70 hover:text-gold transition-colors text-sm"
          >
            <Instagram size={18} />
            <span>Follow us @mangosteencafe</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
