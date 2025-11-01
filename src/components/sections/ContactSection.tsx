import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
        color: "#fdfbf7",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
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
              Prenota il Tuo Appuntamento
            </h2>

            <div
              className="w-20 h-1"
              style={{
                background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
              }}
            ></div>

            <p className="text-lg leading-relaxed" style={{ color: "#fdfbf7" }}>
              Vieni a trovarci nella nostra sartoria nel cuore di Roma. Saremo
              lieti di discutere le tue esigenze e creare insieme il capo
              perfetto per te.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="hover:bg-white"
              style={{
                borderColor: "#d4af37",
                color: "#d4af37",
                borderWidth: "2px",
                background: "transparent",
              }}
            >
              Contattaci Ora
            </Button>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3
                className="font-elegant text-xl tracking-wide uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Indirizzo
              </h3>
              <p className="text-lg" style={{ color: "#fdfbf7" }}>
                Via Simone Mosca, 16
              </p>
              <p className="text-sm" style={{ color: "#f5f1e8" }}>
                00168 Roma, RM
              </p>
            </div>

            <div className="space-y-2">
              <h3
                className="font-elegant text-xl tracking-wide uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Orari di Apertura
              </h3>
              <div className="space-y-1" style={{ color: "#fdfbf7" }}>
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p style={{ color: "#f5f1e8" }}>Domenica: Chiuso</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3
                className="font-elegant text-xl tracking-wide uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Contatti
              </h3>
              <div className="space-y-1" style={{ color: "#fdfbf7" }}>
                <p>Tel: +39 XXX XXX XXXX</p>
                <p>Email: info@viorelsartoria.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 transform skew-x-12"
        style={{
          background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
        }}
      ></div>
    </section>
  );
};
