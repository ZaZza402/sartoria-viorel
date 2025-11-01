import React, { useState } from "react";
import { createPortal } from "react-dom";

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
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // Match animation duration
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className={`md:hidden ${className}`}>
        <button
          onClick={toggleMenu}
          style={{
            color: "#ffffff",
            padding: "8px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          <svg
            style={{ width: "24px", height: "24px" }}
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
      </div>

      {/* Mobile Menu - SINGLE WRAPPER - RENDERED AT BODY LEVEL */}
      {isOpen &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              animation: isClosing
                ? "fadeOut 0.3s ease-out"
                : "fadeIn 0.3s ease-out",
            }}
          >
            {/* Backdrop */}
            <div
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                zIndex: 1,
                animation: isClosing
                  ? "fadeOut 0.3s ease-out"
                  : "fadeIn 0.3s ease-out",
              }}
            />

            {/* Menu Panel */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "280px",
                background: "linear-gradient(180deg, #0f1419 0%, #1a2332 100%)",
                zIndex: 2,
                padding: "80px 24px 24px 24px",
                boxShadow: "-4px 0 20px rgba(0,0,0,0.8)",
                overflowY: "auto",
                animation: isClosing
                  ? "slideOutRight 0.3s ease-out"
                  : "slideInRight 0.3s ease-out",
              }}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "32px",
                  cursor: "pointer",
                  padding: "0",
                  lineHeight: "1",
                }}
              >
                ×
              </button>

              {/* Brand */}
              <div
                style={{
                  marginBottom: "32px",
                  paddingBottom: "24px",
                  borderBottom: "2px solid rgba(212, 175, 55, 0.3)",
                }}
              >
                <h2
                  className="font-elegant"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    margin: 0,
                  }}
                >
                  Sartoria Viorel D.
                </h2>
              </div>

              {/* Navigation Links */}
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                {links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    style={{
                      color: "#ffffff",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      padding: "16px 0",
                      borderBottom:
                        index < links.length - 1
                          ? "1px solid rgba(255,255,255,0.2)"
                          : "none",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
