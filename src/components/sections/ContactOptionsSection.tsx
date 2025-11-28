import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Facebook, Instagram } from "lucide-react";
import { ContactModal } from "../ui/ContactModal";

export const ContactOptionsSection: React.FC = () => {
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
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ccbaae 0%, #c8b4a8 25%, #c4aea2 50%, #c0a89c 75%, #bca296 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              background: "linear-gradient(135deg, #0f1419 0%, #1a2332 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Cormorant', Georgia, serif",
              letterSpacing: "0.02em",
            }}
          >
            Mettiamoci in Contatto
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{
              background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
            }}
          ></div>
        </motion.div>

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
                      background: "rgba(15, 20, 25, 0.6)",
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
                      color: "#0f1419",
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
                      color: "#1a2332",
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
                      background: "rgba(15, 20, 25, 0.6)",
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
                      color: "#0f1419",
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
                      color: "#1a2332",
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
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
