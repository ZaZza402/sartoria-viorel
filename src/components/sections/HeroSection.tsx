import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-subtle-gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Brand Name with Gradient */}
          <div className="mb-6">
            <h1 className="font-script text-6xl md:text-8xl bg-linear-to-r from-secondary-400 via-secondary-600 to-secondary-700 bg-clip-text text-transparent leading-tight">
              Sartoria Viorel Danalache
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-brand-text font-semibold mb-8">
            Maestro Sarto & Alta Moda su Misura
          </h2>

          {/* Description */}
          <p className="text-lg text-brand-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Creazione di capi sartoriali eccezionali su misura con precisione,
            passione e decenni di esperienza nella sartoria di alta qualità.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Prenota Appuntamento
            </Button>
            <Button variant="outline" size="lg">
              Vedi Galleria
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
