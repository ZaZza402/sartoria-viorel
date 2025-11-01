import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
        color: "#fdfbf7",
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
              animation: "float 4s ease-in-out infinite",
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
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Libre Baskerville', Georgia, serif",
              letterSpacing: "0",
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
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto"
            style={{
              color: "#fdfbf7",
              fontFamily: "'Cormorant', Georgia, serif",
              lineHeight: "1.8",
            }}
          >
            Vieni a trovarci nella nostra sartoria nel cuore di Roma. Saremo
            lieti di discutere le tue esigenze e creare insieme il capo perfetto
            per te.
          </p>

          <div className="pt-4 sm:pt-6">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-white"
              style={{
                borderColor: "#d4af37",
                color: "#d4af37",
                borderWidth: "2px",
                background: "transparent",
                padding: "12px 32px",
                fontSize: "16px",
              }}
              data-mobile-responsive="true"
            >
              Contattaci Ora
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 transform skew-x-12"
        style={{
          background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-1/4 h-full opacity-5 transform -skew-x-12"
        style={{
          background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
        }}
      ></div>
    </section>
  );
};
