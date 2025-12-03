import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import tailorHandsImg from "../../assets/images/tailor-hands.webp";
import suit4Img from "../../assets/images/orange-suit.webp";
import { ContactModal } from "../ui/ContactModal";

export const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Vertical Image for Mobile with Parallax */}
        <div className="md:hidden absolute inset-0 h-[120vh]">
          <img
            src={suit4Img}
            alt="Elegant tailored suit"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#000000",
              opacity: 0.6,
            }}
          />
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
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center md:text-left md:ml-0"
        >
          {/* Headline - Stacked tall and majestic */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif leading-tight text-center md:text-left"
            style={{
              background:
                "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.8))",
              fontFamily: "'Cormorant', Georgia, serif",
              fontSize: "clamp(3rem, 10vw, 6rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              marginBottom: "20px",
            }}
          >
            Elegance & Style
            <br />
            <span style={{ display: "block" }}>su Misura</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="space-y-5"
          >
            {/* Subtitle - Shorter, authentic artisan voice, NO italics */}
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="leading-relaxed max-w-2xl mx-auto md:mx-0"
              style={{
                color: "#f5f1e8",
                fontFamily: "'Libre Baskerville', Georgia, serif",
                lineHeight: "1.8",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontStyle: "normal",
              }}
            >
              Sartoria artigianale nel cuore di Roma. Ogni abito è un pezzo
              unico, tagliato e cucito esclusivamente per te.
            </motion.p>

            {/* ROMA badge - between subtitle and button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: 45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "1000px", marginTop: "20px" }}
              className="flex justify-center md:justify-start"
            >
              <span
                style={{
                  fontFamily: "'Cormorant', Georgia, serif",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))",
                  display: "inline-block",
                  textTransform: "uppercase",
                }}
              >
                – ROMA –
              </span>
            </motion.div>

            {/* Single CTA Button - Contattaci */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 flex justify-center md:justify-start"
              style={{ marginTop: "30px" }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                style={{
                  background: "#d4af37",
                  color: "var(--color-text)",
                  fontWeight: 600,
                  border: "none",
                  padding: "16px 40px",
                  fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                }}
              >
                Contattaci
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
