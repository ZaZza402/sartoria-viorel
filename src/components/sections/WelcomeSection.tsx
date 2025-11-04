import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users } from "lucide-react";
import rawSuitImg from "../../assets/images/raw-suit-1.jpg";
import sleeveButtonImg from "../../assets/images/sleeve-button-suit.jpg";

export const WelcomeSection: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 relative"
      style={{
        background: "linear-gradient(180deg, #f5f1e8 0%, #fdfbf7 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h2
              className="font-serif leading-tight"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Cormorant', Georgia, serif",
                letterSpacing: "0",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
              }}
            >
              L'Arte della Sartoria
            </h2>

            <div
              className="w-16 sm:w-20 h-1"
              style={{
                background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
              }}
            ></div>

            <p
              className="leading-relaxed"
              style={{
                color: "#2a2a2a",
                fontFamily: "'Libre Baskerville', Georgia, serif",
                lineHeight: "1.8",
                fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
              }}
            >
              Nel cuore di Roma, la nostra sartoria rappresenta l'eccellenza
              della tradizione artigianale italiana. Ogni capo è un'opera unica,
              creata con passione e dedizione per soddisfare i più elevati
              standard di qualità.
            </p>

            <p
              className="leading-relaxed"
              style={{
                color: "#2a2a2a",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              Con decenni di esperienza, il Maestro Viorel Danalache unisce
              tecniche sartoriali tradizionali a un'attenzione moderna per il
              dettaglio, garantendo vestibilità perfetta ed eleganza senza
              tempo.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
              <div className="text-center space-y-1 sm:space-y-2">
                <div
                  style={{
                    display: "inline-flex",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                >
                  <Award
                    size={20}
                    style={{ color: "#d4af37" }}
                    strokeWidth={2}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    fontWeight: 500,
                  }}
                  className="sm:text-xs md:text-sm"
                >
                  Dal 1974
                </p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div
                  style={{
                    display: "inline-flex",
                    animation: "shimmer 3s ease-in-out infinite 0.5s",
                  }}
                >
                  <Users
                    size={20}
                    style={{ color: "#d4af37" }}
                    strokeWidth={2}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    fontWeight: 500,
                  }}
                  className="sm:text-xs md:text-sm"
                >
                  Clienti Soddisfatti
                </p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div
                  style={{
                    display: "inline-flex",
                    animation: "shimmer 3s ease-in-out infinite 1s",
                  }}
                >
                  <TrendingUp
                    size={20}
                    style={{ color: "#d4af37" }}
                    strokeWidth={2}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    fontWeight: 500,
                  }}
                  className="sm:text-xs md:text-sm"
                >
                  Eccellenza
                </p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2 sm:gap-4"
          >
            <div className="space-y-2 sm:space-y-4">
              <img
                src={rawSuitImg}
                alt="Tailoring detail"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2 sm:space-y-4 pt-8 sm:pt-12">
              <img
                src={sleeveButtonImg}
                alt="Suit sleeve detail"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
