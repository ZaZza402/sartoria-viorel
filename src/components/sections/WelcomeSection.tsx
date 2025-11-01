import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const WelcomeSection: React.FC = () => {
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
          <h3 className="text-3xl font-serif font-bold text-brand-primary mb-4">
            Benvenuti nella Nostra Sartoria
          </h3>
          <p className="text-brand-text max-w-2xl mx-auto leading-relaxed">
            Qui troverete l'arte della sartoria tradizionale unita alla
            modernità. Ogni capo è realizzato con cura artigianale e attenzione
            ai dettagli per garantire la perfetta vestibilità e lo stile che
            desiderate.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
