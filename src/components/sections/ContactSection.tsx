import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Facebook, Instagram } from "lucide-react";
import { ContactModal } from "../ui/ContactModal";

export const ContactSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: "Contattaci",
      value: "Chiama o Chatta",
      action: () => setIsModalOpen(true),
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Seguici",
      href: "https://facebook.com/sartoriaviorel",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Seguici",
      href: "https://instagram.com",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ede8db 0%, #e9e3d6 25%, #e5ddd1 50%, #e0d7cb 75%, #dcd1c6 100%)",
        color: "var(--color-text)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-10 sm:space-y-12"
        >
          <div>
            <h2
              className="font-serif leading-tight mb-4"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Cormorant', Georgia, serif",
                letterSpacing: "0",
                fontSize: "clamp(2rem, 5vw, 5rem)",
              }}
            >
              Prenota il Tuo Appuntamento
            </h2>

            <div
              className="w-16 sm:w-20 md:w-24 h-1 mx-auto mb-8"
              style={{
                background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
              }}
            ></div>

            <p
              className="leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "var(--color-text-light)",
                fontFamily: "'Libre Baskerville', Georgia, serif",
                lineHeight: "1.8",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              }}
            >
              Vieni a trovarci nella nostra sartoria nel cuore di Roma. Saremo
              lieti di discutere le tue esigenze e creare insieme il capo
              perfetto per te.
            </p>
          </div>

          {/* 3 Columns Layout */}
          <div className="grid grid-cols-3 gap-4 md:gap-12">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {option.action ? (
                  <button
                    onClick={option.action}
                    className="group flex flex-col items-center text-center space-y-3 w-full bg-transparent border-none outline-none cursor-pointer p-0 m-0"
                  >
                    <div
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{
                        padding: "12px",
                        borderRadius: "50%",
                        background: "rgba(114, 47, 55, 0.6)",
                      }}
                    >
                      <option.icon
                        size={24}
                        color="#d4af37"
                        strokeWidth={1.5}
                        className="md:w-8 md:h-8"
                      />
                    </div>
                    <h3
                      className="font-serif transition-colors duration-300"
                      style={{
                        fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        fontFamily: "'Cormorant', Georgia, serif",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {option.label}
                    </h3>
                    <p
                      className="font-body group-hover:text-[#d4af37] transition-colors duration-300 hidden sm:block"
                      style={{
                        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        color: "var(--color-text-light)",
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        lineHeight: "1.6",
                      }}
                    >
                      {option.value}
                    </p>
                    <div
                      className="w-0 group-hover:w-1/2 h-0.5 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
                      }}
                    ></div>
                  </button>
                ) : (
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center space-y-3 w-full"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{
                        padding: "12px",
                        borderRadius: "50%",
                        background: "rgba(114, 47, 55, 0.6)",
                      }}
                    >
                      <option.icon
                        size={24}
                        color="#d4af37"
                        strokeWidth={1.5}
                        className="md:w-8 md:h-8"
                      />
                    </div>
                    <h3
                      className="font-serif transition-colors duration-300"
                      style={{
                        fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        fontFamily: "'Cormorant', Georgia, serif",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {option.label}
                    </h3>
                    <p
                      className="font-body group-hover:text-[#d4af37] transition-colors duration-300 hidden sm:block"
                      style={{
                        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        color: "var(--color-text-light)",
                        fontFamily: "'Libre Baskerville', Georgia, serif",
                        lineHeight: "1.6",
                      }}
                    >
                      {option.value}
                    </p>
                    <div
                      className="w-0 group-hover:w-1/2 h-0.5 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
                      }}
                    ></div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
