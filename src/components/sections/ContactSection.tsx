import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
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
            <h2 className="font-script text-5xl md:text-6xl leading-tight">
              Prenota il Tuo Appuntamento
            </h2>

            <div className="w-20 h-1 bg-white/50"></div>

            <p className="text-gray-100 text-lg leading-relaxed">
              Vieni a trovarci nella nostra sartoria nel cuore di Roma. Saremo
              lieti di discutere le tue esigenze e creare insieme il capo
              perfetto per te.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-primary"
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
              <h3 className="font-elegant text-xl text-white tracking-wide uppercase">
                Indirizzo
              </h3>
              <p className="text-gray-100 text-lg">Roma, Italia</p>
              <p className="text-gray-300 text-sm">Via da definire</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-elegant text-xl text-white tracking-wide uppercase">
                Orari di Apertura
              </h3>
              <div className="text-gray-100 space-y-1">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p className="text-gray-300">Domenica: Chiuso</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-elegant text-xl text-white tracking-wide uppercase">
                Contatti
              </h3>
              <div className="text-gray-100 space-y-1">
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
