import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Facebook } from "lucide-react";

export const ContactOptionsSection: React.FC = () => {
  const contactOptions = [
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 327 798 5312",
      href: "tel:+393277985312",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chatta con noi",
      href: "https://wa.me/393277985312",
    },
    {
      icon: MapPin,
      label: "Indirizzo",
      value: "Via Simone Mosca, 16, Roma",
      href: "https://www.google.com/maps/place/Via+Simone+Mosca,+16,+00168+Roma+RM,+Italy",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Seguici",
      href: "https://facebook.com/sartoriaviorel",
    },
  ];

  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ccbaae 0%, #c8b4a8 25%, #c4aea2 50%, #c0a89c 75%, #bca296 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
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
            className="w-20 h-1 mx-auto"
            style={{
              background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
            }}
          ></div>
        </motion.div>

        {/* Desktop: Single Row, Mobile: 2 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              target={
                option.icon === Facebook || option.icon === MessageCircle
                  ? "_blank"
                  : undefined
              }
              rel={
                option.icon === Facebook || option.icon === MessageCircle
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center space-y-4"
              style={{ textDecoration: "none" }}
            >
              {/* Icon */}
              <div
                className="transition-transform duration-300 group-hover:scale-110"
                style={{
                  padding: "16px",
                  borderRadius: "50%",
                  background: "rgba(15, 20, 25, 0.6)",
                }}
              >
                <option.icon
                  size={32}
                  color="#d4af37"
                  strokeWidth={1.5}
                  className="md:w-10 md:h-10"
                />
              </div>

              {/* Label */}
              <h3
                className="font-serif transition-colors duration-300"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  fontWeight: 600,
                  color: "#0f1419",
                  fontFamily: "'Cormorant', Georgia, serif",
                  letterSpacing: "0.01em",
                }}
              >
                {option.label}
              </h3>

              {/* Value */}
              <p
                className="font-body group-hover:text-[#d4af37] transition-colors duration-300"
                style={{
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  color: "#1a2332",
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  lineHeight: "1.6",
                }}
              >
                {option.value}
              </p>

              {/* Underline on hover */}
              <div
                className="w-0 group-hover:w-full h-0.5 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
                }}
              ></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
