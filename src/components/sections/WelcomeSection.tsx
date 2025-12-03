import React from "react";
import { motion } from "framer-motion";
import { Award, Scissors, Ruler } from "lucide-react";

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
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                textAlign: "left",
              }}
            >
              Nel cuore di Roma, il <strong>Maestro Viorel Danalache</strong>{" "}
              porta avanti una tradizione di eccellenza. Con oltre 50 anni di
              esperienza, ogni abito è un pezzo unico: tagliato e cucito a mano
              con tecniche antiche, ma con un occhio attento allo stile moderno.
            </p>

            <a
              href="/chi-siamo"
              style={{
                display: "inline-block",
                color: "#d4af37",
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "12px",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Scopri la storia →
            </a>

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
                    strokeWidth={2.5}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    fontWeight: 600,
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
                  <Ruler
                    size={20}
                    style={{ color: "#d4af37" }}
                    strokeWidth={2.5}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    fontWeight: 600,
                  }}
                  className="sm:text-xs md:text-sm"
                >
                  Su Misura
                </p>
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div
                  style={{
                    display: "inline-flex",
                    animation: "shimmer 3s ease-in-out infinite 1s",
                  }}
                >
                  <Scissors
                    size={20}
                    style={{ color: "#d4af37" }}
                    strokeWidth={2.5}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#666666",
                    fontWeight: 600,
                  }}
                  className="sm:text-xs md:text-sm"
                >
                  Fatto a Mano
                </p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-4"
            >
              <img
                src="/gallery-images/red-suit-piece-underneath.webp"
                alt="Tailoring detail"
                className="w-full object-cover"
                style={{
                  height: "auto",
                  minHeight: "200px",
                  maxHeight: "400px",
                  border: "2px solid #d4af37",
                  borderRadius: "12px",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-4 pt-8 sm:pt-12"
            >
              <div>
                <img
                  src="/gallery-images/front-store-display-shirt-coat-suit.webp"
                  alt="Our atelier in Rome"
                  className="w-full object-cover"
                  style={{
                    height: "auto",
                    minHeight: "200px",
                    maxHeight: "400px",
                    border: "2px solid #d4af37",
                    borderRadius: "12px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#666666",
                    fontStyle: "italic",
                    marginTop: "8px",
                    textAlign: "center",
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                  }}
                >
                  Il nostro Atelier a Roma
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
