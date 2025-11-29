import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-100 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#fdfbf7] w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
              style={{
                border: "1px solid rgba(212, 175, 55, 0.3)",
              }}
            >
              {/* Header */}
              <div className="p-6 text-center border-b border-[#d4af37]/20 bg-linear-to-b from-white to-[#fdfbf7]">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
                <h2
                  className="font-serif text-2xl font-semibold text-brand-text-light mb-2"
                  style={{ fontFamily: "'Cormorant', Georgia, serif" }}
                >
                  Contattaci
                </h2>
                <p className="text-gray-600 text-sm">
                  Scegli come preferisci parlare con noi
                </p>
              </div>

              {/* Options */}
              <div className="p-6 space-y-4">
                <a
                  href="tel:+393247985312"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:bg-[#d4af37]/10 border border-transparent hover:border-[#d4af37]/30"
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
                    <Phone
                      size={24}
                      className="text-[#d4af37] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-text-light text-lg">
                      Chiama
                    </div>
                    <div className="text-sm text-gray-500">
                      +39 324 798 5312
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/393247985312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:bg-[#25D366]/10 border border-transparent hover:border-[#25D366]/30"
                  style={{ textDecoration: "none" }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle
                      size={24}
                      className="text-[#25D366] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-text-light text-lg">
                      WhatsApp
                    </div>
                    <div className="text-sm text-gray-500">Chatta con noi</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
