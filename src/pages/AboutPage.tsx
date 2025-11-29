import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Ruler, Award } from "lucide-react";
import { SEO } from "../components/seo/SEO";
import tailorHands from "../assets/images/tailor-hands.jpg";
import { Button } from "../components/ui/Button";
import { ContactModal } from "../components/ui/ContactModal";

export const AboutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-20">
      <SEO
        title="Chi Siamo"
        description="Scopri la storia della Sartoria Viorel Danalache. Oltre 50 anni di esperienza nell'alta sartoria italiana a Roma. Maestria artigianale e passione."
        canonical="/chi-siamo"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tailorHands}
            alt="Mani del sarto al lavoro"
            className="w-full h-full object-cover object-[70%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-black/20"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-serif leading-tight mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.8))",
                fontFamily: "'Cormorant', Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              La Nostra Storia
            </h1>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
              }}
            ></div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 md:py-24 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2a2a2a]"
          >
            {/* Quote */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p
                className="text-xl md:text-2xl italic text-[#666] leading-relaxed"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                "L'eleganza non è farsi notare, ma farsi ricordare."
              </p>
              <div className="mt-4 text-[#d4af37] font-serif text-lg">
                — Giorgio Armani
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
              {/* Column 1: History */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                  <Award size={32} className="text-[#d4af37]" />
                </div>
                <h3
                  className="text-2xl font-serif font-semibold mb-4 text-brand-text"
                  style={{ fontFamily: "'Cormorant', Georgia, serif" }}
                >
                  Dal 1974
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    fontSize: "0.95rem",
                  }}
                >
                  Nel cuore di Roma, la Sartoria Viorel Danalache è un punto di
                  riferimento per l'eleganza maschile. Una storia iniziata con
                  la passione per i tessuti pregiati e la dedizione all'arte del
                  "fatto a mano".
                </p>
              </div>

              {/* Column 2: Craftsmanship */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                  <Scissors size={32} className="text-[#d4af37]" />
                </div>
                <h3
                  className="text-2xl font-serif font-semibold mb-4 text-brand-text"
                  style={{ fontFamily: "'Cormorant', Georgia, serif" }}
                >
                  Maestria Artigianale
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    fontSize: "0.95rem",
                  }}
                >
                  Il Maestro Viorel perfeziona ogni taglio e cucitura. Ogni
                  abito non è un semplice indumento, ma un'opera d'architettura
                  tessile, costruita esclusivamente attorno alla persona che lo
                  indosserà.
                </p>
              </div>

              {/* Column 3: Focus */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                  <Ruler size={32} className="text-[#d4af37]" />
                </div>
                <h3
                  className="text-2xl font-serif font-semibold mb-4 text-brand-text"
                  style={{ fontFamily: "'Cormorant', Georgia, serif" }}
                >
                  Solo Su Misura
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    fontSize: "0.95rem",
                  }}
                >
                  Siamo specializzati esclusivamente in abiti, completi e gilet
                  su misura. Nessun compromesso, solo l'eccellenza della vera
                  sartoria italiana per chi cerca la perfezione assoluta.
                </p>
              </div>
            </div>

            {/* Closing Paragraph */}
            <div className="max-w-3xl mx-auto text-center border-t border-[#d4af37]/20 pt-12">
              <p
                className="text-lg text-gray-700 leading-relaxed mb-8"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Oggi continuiamo a vestire gentiluomini da tutto il mondo. Che
                si tratti di un abito da cerimonia, di un completo business o di
                un gilet sartoriale, la nostra promessa è sempre la stessa:
                eccellenza senza compromessi.
              </p>

              <div className="mt-8">
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
                    fontSize: "1.125rem",
                  }}
                >
                  Prenota un Appuntamento
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
