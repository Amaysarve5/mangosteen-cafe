"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["123 Artisan Avenue", "Koramangala, Bangalore", "Karnataka 560095"],
    },
    {
      icon: Clock,
      title: "Hours",
      lines: ["Mon - Fri: 7:00 AM - 10:00 PM", "Sat - Sun: 8:00 AM - 11:00 PM", "Public Holidays: 9:00 AM - 9:00 PM"],
    },
    {
      icon: Phone,
      title: "Call",
      lines: ["+91 98765 43210", "+91 80 4567 8901"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["hello@mangosteencafe.com", "reservations@mangosteencafe.com"],
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-40 bg-secondary overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Find <span className="text-forest italic">Us</span>
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            We would love to welcome you. Drop by for a cup, or get in touch —
            we&apos;ll respond promptly to reservations and inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center group-hover:bg-forest transition-colors duration-300">
                  <info.icon size={22} className="text-forest group-hover:text-cream transition-colors" />
                </div>
                <div>
                  <h3 className="text-charcoal font-medium text-lg mb-2">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-warm-brown/70 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl font-serif text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Café Location
                  </h3>
                  <p className="text-warm-brown/70 text-sm">
                    Find us quickly and plan your visit with the live map.
                  </p>
                </div>
                <a
                  href="https://share.google/351Oa7A05YII9iM68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream text-xs uppercase tracking-wider hover:bg-forest-light transition-colors"
                >
                  Open Map
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-cream/40 shadow-lg">
                <iframe
                  title="Mangosteen Cafe Location"
                  src="https://maps.google.com/maps?q=Koramangala%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[320px] md:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
