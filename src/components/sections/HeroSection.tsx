import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import suitWideImg from "../../assets/images/suit-2.jpg";
import tailorHandsImg from "../../assets/images/tailor-hands.jpg";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image - Wide on Desktop */}
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block absolute inset-0">
          <img
            src={tailorHandsImg}
            alt="Master tailor at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Vertical Image for Mobile */}
        <div className="md:hidden absolute inset-0">
          <img
            src={suitWideImg}
            alt="Elegant tailored suit"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-script text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.8))",
            }}
          >
            Sartoria Viorel Danalache
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <h2
              className="font-elegant text-xl md:text-2xl tracking-wide"
              style={{ color: "#fdfbf7" }}
            >
              Maestro Sarto & Alta Moda su Misura
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "#f5f1e8" }}
            >
              L'arte della sartoria tradizionale incontra l'eleganza moderna.
              Ogni capo è un'opera d'arte realizzata con passione e precisione
              artigianale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  color: "#0f1419",
                  fontWeight: 600,
                }}
              >
                Prenota un Appuntamento
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{
                  borderColor: "#d4af37",
                  color: "#d4af37",
                  borderWidth: "2px",
                }}
              >
                Scopri di Più
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
