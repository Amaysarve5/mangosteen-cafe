"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "day" | "night";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("day");

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem("mangosteen-theme") as Theme | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.remove("day-mode", "night-mode");
    document.documentElement.classList.add(`${theme}-mode`);
    localStorage.setItem("mangosteen-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
