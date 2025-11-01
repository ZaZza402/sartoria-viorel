import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "header fixed top-0 left-0 right-0 z-50 bg-brand-primary backdrop-blur-md border-b border-brand-primary-light",
        className
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="header-logo text-2xl font-serif font-bold text-brand-accent">
              Sartoria Viorel Danalache
            </h1>
          </div>

          <div className="header-nav hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-brand-base hover:text-brand-accent transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-brand-base hover:text-brand-accent transition-colors"
            >
              Chi Siamo
            </a>
            <a
              href="#services"
              className="text-brand-base hover:text-brand-accent transition-colors"
            >
              Servizi
            </a>
            <a
              href="#gallery"
              className="text-brand-base hover:text-brand-accent transition-colors"
            >
              Galleria
            </a>
            <a
              href="#contact"
              className="text-brand-base hover:text-brand-accent transition-colors"
            >
              Contatti
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="header-mobile-button text-brand-base hover:text-brand-accent">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
