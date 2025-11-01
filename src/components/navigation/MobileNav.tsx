import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: NavLink[];
  className?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  links,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`md:hidden ${className}`}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-white hover:text-gray-300 p-2 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40 top-16"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-16 bottom-0 w-64 shadow-2xl z-50 p-6"
              style={{ backgroundColor: "#014421", borderLeft: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <h2 className="font-elegant text-xl" style={{ color: "#ffffff", fontWeight: 600 }}>
                  Sartoria Viorel D.
                </h2>
              </div>
              <nav className="flex flex-col space-y-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="transition-colors duration-200 text-lg font-medium py-2"
                    style={{ color: "#ffffff", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
