import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Scissors } from "lucide-react";
import { SEO } from "../components/seo/SEO";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] relative overflow-hidden">
      <SEO
        title="Pagina Non Trovata"
        description="La pagina che stai cercando non esiste."
        type="website"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="text-center px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Scissors size={80} className="text-[#d4af37]" strokeWidth={1} />
            <motion.div
              className="absolute -right-4 -top-4 text-6xl font-serif font-bold text-brand-text-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              404
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl mb-4 text-brand-text-light"
          style={{ fontFamily: "'Cormorant', Georgia, serif" }}
        >
          Pagina Non Trovata
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-600 text-lg mb-8 max-w-md mx-auto"
          style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
        >
          Sembra che il filo si sia spezzato. La pagina che stai cercando non
          esiste o è stata spostata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="/" style={{ textDecoration: "none" }}>
            <Button
              variant="primary"
              size="lg"
              style={{
                background: "#d4af37",
                color: "var(--color-text)",
                fontWeight: 600,
              }}
            >
              Torna alla Home
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
