import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { X } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-2025");
    if (!consent) {
      // Small delay to not annoy immediately
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-2025", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent-2025", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-brand-text-light text-[#fdfbf7] p-6 rounded-lg shadow-2xl border border-[#d4af37]/30"
          style={{ zIndex: 60 }}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>

          <h4
            className="font-serif text-lg mb-2 text-[#d4af37]"
            style={{ fontFamily: "'Cormorant', Georgia, serif" }}
          >
            Utilizzo dei Cookie
          </h4>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Utilizziamo i cookie per migliorare la tua esperienza. Continuando a
            navigare accetti la nostra
            <a
              href="/privacy-policy"
              className="text-[#d4af37] hover:underline ml-1"
            >
              Privacy & Cookie Policy
            </a>
            .
          </p>

          <div className="flex gap-3 justify-end">
            <button
              onClick={handleDecline}
              className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2"
            >
              Rifiuta
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAccept}
              style={{
                background: "#d4af37",
                color: "var(--color-text)",
                fontSize: "0.875rem",
                padding: "8px 20px",
              }}
            >
              Accetta
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
