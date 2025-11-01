import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">
            Contattateci
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Siamo a vostra disposizione per qualsiasi informazione o per
            fissare un appuntamento. Venite a trovarci nella nostra sartoria.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Indirizzo
              </h3>
              <p className="text-brand-text">Roma, Italia</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Orari
              </h3>
              <p className="text-brand-text">Lun - Ven: 9:00 - 18:00</p>
              <p className="text-brand-text">Sabato: 9:00 - 13:00</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Telefono
              </h3>
              <p className="text-brand-text">+39 XXX XXX XXXX</p>
            </div>
          </div>

          <Button variant="primary" size="lg">
            Prenota un Appuntamento
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
