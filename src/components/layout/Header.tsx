import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { Logo } from "../ui/Logo";
import { DesktopNav } from "../navigation/DesktopNav";
import { MobileNav } from "../navigation/MobileNav";

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Chi Siamo" },
  { href: "#services", label: "Servizi" },
  { href: "#gallery", label: "Galleria" },
  { href: "#contact", label: "Contatti" },
];

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "header fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          className
        )}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, #0f1419 0%, #1a2332 100%)"
            : "transparent",
          borderBottom: isScrolled
            ? "1px solid rgba(212, 175, 55, 0.2)"
            : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0, 0, 0, 0.3)"
            : "none",
          paddingTop: isScrolled ? "8px" : "0",
          paddingBottom: isScrolled ? "8px" : "0",
        }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-between transition-all duration-500"
            style={{
              height: isScrolled ? "72px" : "64px",
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Logo size="lg" />
            </div>

            {/* Desktop Navigation */}
            <DesktopNav links={navLinks} />

            {/* Mobile Navigation Button - Component renders menu outside */}
            <MobileNav links={navLinks} />
          </div>
        </nav>
      </motion.header>
    </>
  );
};
