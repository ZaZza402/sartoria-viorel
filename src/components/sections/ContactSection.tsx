import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ebe3d0 0%, #e8dcc8 50%, #e0cdb0 100%)",
        color: "#0f1419",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Decorative Icon */}
          <div
            style={{
              display: "inline-flex",
            }}
          >
            <Calendar
              size={40}
              color="#d4af37"
              strokeWidth={2}
              className="sm:w-12 sm:h-12"
            />
          </div>

          <h2
            className="font-serif leading-tight"
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
            className="w-16 sm:w-20 md:w-24 h-1 mx-auto"
            style={{
              background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
            }}
          ></div>

          <p
            className="leading-relaxed max-w-2xl mx-auto"
            style={{
              color: "#1a2332",
              fontFamily: "'Libre Baskerville', Georgia, serif",
              lineHeight: "1.8",
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            }}
          >
            Vieni a trovarci nella nostra sartoria nel cuore di Roma. Saremo
            lieti di discutere le tue esigenze e creare insieme il capo perfetto
            per te.
          </p>

          <div className="pt-4 sm:pt-6">
            <Button
              variant="primary"
              size="lg"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                color: "#0f1419",
                borderWidth: "0",
                padding: "12px 32px",
                fontSize: "16px",
                fontWeight: 600,
              }}
              data-mobile-responsive="true"
            >
              Contattaci Ora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
