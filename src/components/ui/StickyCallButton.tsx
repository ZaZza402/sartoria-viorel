import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactModal } from "./ContactModal";

export const StickyCallButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit (e.g., 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 md:hidden"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform active:scale-95"
              style={{
                background: "#d4af37",
                color: "#ffffff",
                boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
              }}
              aria-label="Contattaci"
            >
              <Phone size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
