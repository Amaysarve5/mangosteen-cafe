"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface MenuItem {
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  price: string;
  details?: string[];
  lifestyle: string;
  image?: string;
}

interface MenuCard3DProps {
  item: MenuItem;
  index: number;
  variant?: "delivery" | "food";
}

export default function MenuCard3D({
  item,
  index,
  variant = "delivery",
}: MenuCard3DProps) {
  const isFood = variant === "food";
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, y: -10, rotateX: 2, rotateY: -2 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: isFood ? 0.8 : 0.6,
        delay: index * (isFood ? 0.12 : 0.1),
      }}
      onClick={() =>
        window.open(
          "https://www.zomato.com/indore/mangosteen-cafe-by-pass-road-north",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className={`flip-card h-[520px] sm:h-[440px] md:h-[460px] lg:h-[480px] cursor-pointer group ${
        isFlipped ? "is-flipped" : ""
      }`}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front of Card */}
        <div className="flip-card-front absolute w-full h-full">
          <div
            className={`relative h-full rounded-2xl p-7 flex flex-col shadow-lg border overflow-hidden transition-all duration-500 ${
              isFood
                ? "bg-transparent border-cream/25"
                : "bg-transparent border-cream/25"
            } group-hover:shadow-xl`}
          >
            {/* Decorative Background */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-8 translate-x-8 ${
                isFood ? "bg-warm-brown/10" : "bg-gold/10"
              }`}
            />
            <div
              className={`absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl translate-y-8 -translate-x-8 ${
                isFood ? "bg-beige" : "bg-forest/5"
              }`}
            />

            {/* Category Badge */}
            <div className="relative z-10 mb-3">
              <span
                className={`inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full bg-white/15 text-cream`}
              >
                {item.category}
              </span>
            </div>

            {/* Thumbnail (if available) */}
            {item.image && (
              <div
                className="relative z-10 w-full rounded-xl overflow-hidden mb-4 menu-card-image flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Flip affordance */}
                <div className="absolute top-2 right-2 bg-cream/90 text-forest w-9 h-9 rounded-full flex items-center justify-center shadow-sm opacity-90">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12a8 8 0 10-2.34 5.66"
                      stroke="#1D3C34"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 7v5h-5"
                      stroke="#1D3C34"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}


            {/* Content */}
            <div className="relative z-10 mt-2">
              <h3
                className="text-2xl sm:text-3xl font-serif text-cream mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.name}
              </h3>
              <p className="text-cream/80 text-base sm:text-lg line-clamp-2 mb-4">
                {item.shortDesc}
              </p>
            </div>

            {/* Price or Experience Tag */}
            <div className="relative z-10 flex items-end justify-between">
              {item.price ? (
                <span
                  className="text-gold text-3xl sm:text-4xl font-serif"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.price}
                </span>
              ) : (
                <span className="text-cream/60 text-sm italic">
                  In-café experience
                </span>
              )}
              <span
                className="text-xs tracking-wider uppercase text-cream/50"
              >
                Hover for details
              </span>
            </div>

            {/* Subtle Border Glow */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-cream/30"
            />
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-card-back absolute w-full h-full">
          <div
            className={`relative h-full rounded-2xl p-7 flex flex-col shadow-xl overflow-hidden ${
              isFood
                ? "bg-gradient-to-br from-warm-brown via-warm-brown to-charcoal"
                : "bg-gradient-to-br from-forest via-forest to-forest-light"
            }`}
          >
            {/* Decorative Elements */}
            <div
              className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -translate-y-10 translate-x-10 ${
                isFood ? "bg-beige/10" : "bg-gold/10"
              }`}
            />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cream/5 rounded-full blur-2xl translate-y-8 -translate-x-8" />

            {/* Header */}
            <div className="relative z-10">
              <span
                className={`inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full mb-3 ${
                  isFood ? "bg-beige/20 text-beige" : "bg-gold/20 text-gold"
                }`}
              >
                {item.category}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-serif text-cream mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.name}
              </h3>
            </div>

            {/* Description */}
            <div className="relative z-10 flex-1 mt-4">
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>
              {item.details && (
                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-cream/60 text-xs sm:text-sm"
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          isFood ? "bg-beige" : "bg-gold"
                        }`}
                      />
                      {detail}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-end justify-between pt-4 border-t border-cream/10">
              {item.price ? (
                <span
                  className={`text-2xl sm:text-3xl font-serif ${
                    isFood ? "text-beige" : "text-gold"
                  }`}
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.price}
                </span>
              ) : (
                <span className="text-cream/50 text-sm">Dine-in only</span>
              )}

              <div className="flex items-center gap-3">
                <span className="text-cream/40 text-xs italic">
                  {item.lifestyle}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://www.instagram.com/mangosteencafe/?hl=en",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-cream/5 flex items-center justify-center hover:bg-cream/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4 text-cream"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <path
                      d="M17.5 6.5h.01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
