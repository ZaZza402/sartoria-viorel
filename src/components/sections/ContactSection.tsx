import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#014421', color: '#ffffff' }}>
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
            <h2 className="font-script text-5xl md:text-6xl leading-tight" style={{ color: '#ffffff' }}>
              Prenota il Tuo Appuntamento
            </h2>

            <div className="w-20 h-1" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}></div>

            <p className="text-lg leading-relaxed" style={{ color: '#ffffff' }}>
              Vieni a trovarci nella nostra sartoria nel cuore di Roma. Saremo
              lieti di discutere le tue esigenze e creare insieme il capo
              perfetto per te.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="hover:bg-white"
              style={{ borderColor: '#ffffff', color: '#ffffff', borderWidth: '2px' }}
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
              <h3 className="font-elegant text-xl tracking-wide uppercase" style={{ color: '#ffffff' }}>
                Indirizzo
              </h3>
              <p className="text-lg" style={{ color: '#ffffff' }}>Roma, Italia</p>
              <p className="text-sm" style={{ color: '#e5e5e5' }}>Via da definire</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-elegant text-xl tracking-wide uppercase" style={{ color: '#ffffff' }}>
                Orari di Apertura
              </h3>
              <div className="space-y-1" style={{ color: '#ffffff' }}>
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p style={{ color: '#d4d4d4' }}>Domenica: Chiuso</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-elegant text-xl tracking-wide uppercase" style={{ color: '#ffffff' }}>
                Contatti
              </h3>
              <div className="space-y-1" style={{ color: '#ffffff' }}>
                <p>Tel: +39 XXX XXX XXXX</p>
                <p>Email: info@viorelsartoria.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-brand-primary-light opacity-10 transform skew-x-12"></div>
    </section>
  );
};
