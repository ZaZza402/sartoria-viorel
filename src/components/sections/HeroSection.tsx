import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import tailorHandsImg from "../../assets/images/tailor-hands.jpg";

export const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: background moves slower (0.5x speed)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image with Parallax - Wide on Desktop */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="hidden md:block absolute inset-0 h-[120vh]">
          <img
            src={tailorHandsImg}
            alt="Master tailor at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-black/20" />
        </div>

        {/* Vertical Image for Mobile with Parallax */}
        <div className="md:hidden absolute inset-0 h-[120vh]">
          <img
            src="/gallery-images/grey-coat-collar.webp"
            alt="Elegant tailored suit"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </motion.div>

      {/* Content with Parallax Fade */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 md:px-12"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center md:text-left md:ml-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif mb-3 sm:mb-4 leading-tight text-center md:text-left"
            style={{
              background:
                "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.8))",
              fontFamily: "'Cormorant', Georgia, serif",
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Eleganza & Stile su Misura
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4 sm:space-y-6 mt-6"
          >
            <p
              className="leading-relaxed max-w-2xl mx-auto md:mx-0"
              style={{
                color: "#f5f1e8",
                fontFamily: "'Libre Baskerville', Georgia, serif",
                lineHeight: "1.8",
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                fontStyle: "italic",
                opacity: 0.95,
              }}
            >
              L'arte della sartoria tradizionale incontra l'eleganza moderna.
              Ogni capo è un'opera d'arte realizzata con passione e precisione
              artigianale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
              <Button
                variant="primary"
                size="lg"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  color: "#0f1419",
                  fontWeight: 600,
                  border: "none",
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
                  background: "transparent",
                }}
              >
                Scopri di Più
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-sm font-serif tracking-wider"
            style={{
              color: "#d4af37",
              fontFamily: "'Cormorant', Georgia, serif",
              letterSpacing: "0.1em",
            }}
          >
            SCORRI
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
