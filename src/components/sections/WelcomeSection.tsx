import React from "react";
import { motion } from "framer-motion";
import rawSuitImg from "../../assets/images/raw-suit-1.jpg";
import sleeveButtonImg from "../../assets/images/sleeve-button-suit.jpg";

export const WelcomeSection: React.FC = () => {
  return (
    <section
      className="py-24 relative"
      style={{
        background: "linear-gradient(180deg, #f5f1e8 0%, #fdfbf7 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2
              className="font-script text-5xl md:text-6xl leading-tight"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              L'Arte della Sartoria
            </h2>

            <div
              className="w-20 h-1"
              style={{
                background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
              }}
            ></div>

            <p className="text-lg leading-relaxed" style={{ color: "#2a2a2a" }}>
              Nel cuore di Roma, la nostra sartoria rappresenta l'eccellenza
              della tradizione artigianale italiana. Ogni capo è un'opera unica,
              creata con passione e dedizione per soddisfare i più elevati
              standard di qualità.
            </p>

            <p className="text-lg leading-relaxed" style={{ color: "#2a2a2a" }}>
              Con decenni di esperienza, il Maestro Viorel Danalache unisce
              tecniche sartoriali tradizionali a un'attenzione moderna per il
              dettaglio, garantendo vestibilità perfetta ed eleganza senza
              tempo.
            </p>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src={rawSuitImg}
                alt="Tailoring detail"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src={sleeveButtonImg}
                alt="Suit sleeve detail"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
