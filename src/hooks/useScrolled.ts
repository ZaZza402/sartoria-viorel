import { useState, useEffect } from "react";

/**
 * Custom hook to detect if user has scrolled past a certain threshold
 * Useful for changing header styles on scroll
 */
export const useScrolled = (threshold: number = 50): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};
