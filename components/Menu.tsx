"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MenuCard3D from "./MenuCard3D";
import SignatureDrinks from "./SignatureDrinks";

const deliveryCategories = ["Delivery Menu", "Beverages"];
const foodCategories = ["All-Day Breakfast", "Gourmet Plates", "Bakery & Breads"];

const menuCategories = [...deliveryCategories, ...foodCategories];

const menuItems: Record<string, Array<{
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  price: string;
  details?: string[];
  lifestyle: string;
  image?: string;
}>> = {
  "Delivery Menu": [
    {
      name: "Avocado Toast",
      image: "https://tse3.mm.bing.net/th/id/OIP.c947GIE07QVb5OSmyQSasAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Breakfast",
      shortDesc: "Sourdough, smashed avocado, poached eggs",
      description: "House-baked sourdough topped with perfectly ripe avocado, two poached eggs, cherry tomatoes, microgreens, and a drizzle of extra virgin olive oil.",
      price: "₹445",
      details: ["Farm-fresh eggs", "Artisan sourdough", "Organic avocado"],
      lifestyle: "Perfect morning ritual",
    },
    {
      name: "Truffle Mushroom Pasta",
      image: "https://tastingwithtina.com/wp-content/uploads/2025/09/truffle_mushroom_pasta-step4-1-768x1155.jpg",
      category: "Mains",
      shortDesc: "Handmade pasta, wild mushrooms, truffle oil",
      description: "Fresh handmade pappardelle with a medley of wild mushrooms, finished with black truffle oil, aged parmesan, and fresh herbs.",
      price: "₹595",
      details: ["Handmade pasta", "Wild mushroom blend", "Authentic truffle oil"],
      lifestyle: "An indulgent affair",
    },
    {
      name: "Grilled Chicken Salad",
      image: "https://bing.com/th?id=OSK.f2005db74600cc61dc876c2717ae408c",
      category: "Salads",
      shortDesc: "Herb-marinated chicken, mixed greens, citrus",
      description: "Tender herb-marinated chicken breast over crisp mixed greens, candied walnuts, sun-dried tomatoes, and house-made citrus vinaigrette.",
      price: "₹425",
      details: ["Free-range chicken", "House-made dressing", "Seasonal greens"],
      lifestyle: "Light & nourishing",
    },
    {
      name: "Smoked Salmon Benedict",
      image: "https://i.pinimg.com/originals/c3/30/44/c330443afeee9e18769d03d612bcbd39.png",
      category: "Breakfast",
      shortDesc: "Norwegian salmon, hollandaise, English muffin",
      description: "Premium Norwegian smoked salmon on a toasted English muffin with poached eggs and classic hollandaise sauce.",
      price: "₹525",
      details: ["Imported salmon", "Farm-fresh eggs", "House-made hollandaise"],
      lifestyle: "Weekend brunch essential",
    },
    {
      name: "Paneer Tikka Wrap",
      image: "https://tse1.mm.bing.net/th/id/OIP.BjTbWyprs65_G54jXDaNqwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Wraps",
      shortDesc: "Tandoor-grilled paneer, mint chutney, naan",
      description: "Succulent tandoor-grilled paneer wrapped in fresh naan with crisp vegetables, tangy mint chutney, and a touch of mango pickle.",
      price: "₹375",
      details: ["Fresh cottage cheese", "House spice blend", "Soft naan bread"],
      lifestyle: "Flavor-packed comfort",
    },
    {
      name: "Classic Tiramisu",
      image: "https://th.bing.com/th/id/R.1c0db2e77bce7b3f92cc6ab5bbc6cc7b?rik=JddEaLuno1WS2g&riu=http%3a%2f%2fdetitalienskekoekken.dk%2fcdn%2fshop%2farticles%2f18033.jpg%3fv%3d1696929281&ehk=iAYYN6y%2f%2fu1N4%2bd9Zq%2b5ItG53yj8YjUGlhRZUXw4Ju0%3d&risl=&pid=ImgRaw&r=0",
      category: "Desserts",
      shortDesc: "Mascarpone, espresso-soaked ladyfingers",
      description: "Traditional Italian tiramisu with layers of espresso-soaked Savoiardi, rich mascarpone cream, and a dusting of Belgian cocoa.",
      price: "₹345",
      details: ["Italian mascarpone", "Fresh espresso", "Belgian cocoa"],
      lifestyle: "Sweet indulgence",
    },
  ],
  "Beverages": [
    {
      name: "Signature House Latte",
      image: "https://wallpaperbat.com/img/232731-coffee-latte-art-hd-wallpaper.jpg",
      category: "Coffee",
      shortDesc: "Double shot, house-roasted beans, steamed milk",
      description: "Our signature blend of house-roasted Arabica beans, pulled as a double shot with silky steamed milk and a hint of caramel undertones.",
      price: "₹245",
      details: ["Single-origin Arabica", "House roasted", "Perfect crema"],
      lifestyle: "Morning essential",
    },
    {
      name: "Cold Brew Reserve",
      image: "https://wallpaperbat.com/img/153762226-cold-brew-and-iced-coffee.jpg",
      category: "Coffee",
      shortDesc: "24-hour steeped, smooth, naturally sweet",
      description: "Premium Ethiopian beans cold-steeped for 24 hours, producing a naturally sweet, incredibly smooth coffee with notes of dark chocolate.",
      price: "₹295",
      details: ["Ethiopian origin", "24-hour steep", "Zero bitterness"],
      lifestyle: "Summer refreshment",
    },
    {
      name: "Ceremonial Matcha Latte",
      image: "https://tse3.mm.bing.net/th/id/OIP.SN4L9RKisgBtrtDkt1qwdAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Tea",
      shortDesc: "Grade-A matcha, oat milk, subtle sweetness",
      description: "Authentic Japanese ceremonial grade matcha whisked to perfection with creamy oat milk and a touch of organic honey.",
      price: "₹275",
      details: ["Uji matcha powder", "Organic oat milk", "Hand-whisked"],
      lifestyle: "Zen in a cup",
    },
    {
      name: "Rose Cardamom Chai",
      image: "https://tse2.mm.bing.net/th/id/OIP.4NvrmBjtPI8ailZRlQSAIAHaNM?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Tea",
      shortDesc: "Spiced chai, rose essence, steamed milk",
      description: "Our aromatic house-blend chai with warming spices, delicate rose essence, and perfectly steamed milk—a fragrant journey in every sip.",
      price: "₹225",
      details: ["House spice blend", "Damascus rose", "Fresh brewed"],
      lifestyle: "Comfort redefined",
    },
    {
      name: "Mango Passion Smoothie",
      image: "https://tse3.mm.bing.net/th/id/OIP.bk8dbFJJhX7LSr3UPDH0DAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Smoothies",
      shortDesc: "Alphonso mango, passion fruit, coconut",
      description: "Luscious Alphonso mangoes blended with tropical passion fruit, creamy coconut milk, and a hint of lime.",
      price: "₹285",
      details: ["Alphonso mangoes", "Fresh passion fruit", "No added sugar"],
      lifestyle: "Tropical escape",
    },
    {
      name: "Artisan Hot Chocolate",
      image: "https://tse1.mm.bing.net/th/id/OIP.4Z2Kl6XhjCpQkVbS4qttqgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Specialty",
      shortDesc: "Belgian chocolate, house-made marshmallow",
      description: "Rich Belgian dark chocolate melted into steamed milk, topped with house-made vanilla marshmallows and a dusting of cocoa.",
      price: "₹265",
      details: ["70% Belgian chocolate", "House marshmallows", "Pure cocoa"],
      lifestyle: "Childhood reimagined",
    },
  ],
  // … keep other categories as is
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Delivery Menu");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isDeliveryCategory = deliveryCategories.includes(activeCategory);
  const isFoodCategory = foodCategories.includes(activeCategory);

  return (
    <section
      id="menu"
      ref={ref}
      className="relative py-24 md:py-36 lg:py-44 overflow-hidden transition-colors duration-700"
      style={{
        background: isFoodCategory
          ? "linear-gradient(to bottom right, #F5EDE4, #FAF8F5, #E8E0D5)"
          : undefined,
      }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 transition-colors duration-700 hidden sm:block ${
          isFoodCategory ? "" : "bg-secondary"
        }`}
      />
      <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Our Offerings
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-cream sm:text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The <span className="text-forest italic">Menu</span>
          </h2>
          <p className="text-cream/80 sm:text-warm-brown text-lg md:text-xl max-w-3xl mx-auto">
            Every dish and drink is prepared with care, using high-quality
            ingredients to create memorable moments worth savoring.
          </p>
        </motion.div>

        {/* Signature Drinks */}
        {isDeliveryCategory && <SignatureDrinks />}

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {deliveryCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-transparent text-cream border border-cream/60 shadow-lg"
                    : "bg-transparent text-cream border border-cream/30 hover:bg-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-cream/30 sm:bg-warm-brown/20" />
            <span className="text-cream/60 sm:text-warm-brown/40 text-xs tracking-widest uppercase">
              In-Café
            </span>
            <div className="flex-1 h-px bg-cream/30 sm:bg-warm-brown/20" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {foodCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-500 ${
                  activeCategory === category
                    ? "bg-white/20 text-cream border border-white/20 shadow-md sm:bg-warm-brown sm:text-cream sm:border-transparent"
                    : "bg-white/10 text-cream border border-white/10 hover:bg-white/20 sm:bg-beige/80 sm:text-warm-brown sm:border-warm-brown/10 sm:hover:bg-warm-brown/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: isFoodCategory ? 0.6 : 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems[activeCategory].map((item, index) => (
              <MenuCard3D
                key={item.name}
                item={item}
                index={index}
                variant={isFoodCategory ? "food" : "delivery"}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-cream/70 sm:text-warm-brown/60 text-sm mt-12 italic"
        >
          {isFoodCategory
            ? "In‑café experience only. Prices available in-store."
            : "Prices include applicable taxes. Menu items may vary with seasonal availability."}
        </motion.p>
      </div>
    </section>
  );
}
