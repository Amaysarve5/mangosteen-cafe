"use client";

import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen transition-colors duration-700">
        <Navbar />
        <Hero />
        <Menu />
        <Gallery />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
