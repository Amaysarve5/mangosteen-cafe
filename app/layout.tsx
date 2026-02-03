import React from "react"
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mangosteen Cafe | Premium Coffee Experience",
  description:
    "Mangosteen Cafe - Where artisan coffee meets refined elegance. Experience premium brews, gourmet delights, and an ambiance crafted for those who appreciate the finer things.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className="font-sans antialiased relative min-h-[100dvh] overflow-x-hidden"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <div className="mobile-video-bg" aria-hidden="true">
          <video
            className="mobile-video-bg__media"
            src="/vedios/bg-vedio.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="mobile-video-bg__overlay" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
