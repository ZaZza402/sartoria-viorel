import React from "react";
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
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "header fixed top-0 left-0 right-0 z-50 bg-brand-primary backdrop-blur-md border-b border-brand-primary-light shadow-lg",
          className
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
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
