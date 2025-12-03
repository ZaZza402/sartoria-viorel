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
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/#services", label: "Servizi" },
  { href: "/#gallery", label: "Galleria" },
  { href: "/#contact", label: "Contatti" },
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
          "header fixed top-0 left-0 right-0 z-50",
          className
        )}
        style={{
          background:
            "linear-gradient(135deg, var(--color-text) 0%, var(--color-text-light) 100%)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
          backdropFilter: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center"
            style={{
              height: "72px",
            }}
          >
            {/* Logo - Left aligned on all screens */}
            <div className="flex items-center shrink-0">
              <Logo size="lg" />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex grow justify-center">
              <DesktopNav links={navLinks} />
            </div>

            {/* Phone CTA - Desktop only, right aligned */}
            <div className="hidden md:flex items-center shrink-0 ml-8">
              <a
                href="tel:+393247985312"
                className="flex items-center gap-2 transition-all duration-300 phone-cta"
                style={{
                  background:
                    "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-medium whitespace-nowrap">
                  +39 324 798 5312
                </span>
              </a>
            </div>

            {/* Mobile Navigation Button - Component renders menu outside */}
            <div className="md:hidden ml-auto">
              <MobileNav links={navLinks} isScrolled={isScrolled} />
            </div>
          </div>
        </nav>
      </motion.header>
      <style>{`
        .phone-cta:hover {
          opacity: 0.8;
          transform: translateY(-1px);
          filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3));
        }
      `}</style>
    </>
  );
};
