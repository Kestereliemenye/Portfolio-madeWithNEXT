"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

// context
const ThemeContext = createContext();

// theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false); // new

  useEffect(() => {
    setMounted(true); // wait for client
  }, []);

  useEffect(() => {
    if (!mounted) return; // prevent early theme flash
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!mounted) return null; // prevent mismatch during SSR

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook
export const useTheme = () => useContext(ThemeContext);
