import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Abiti su Misura",
      description:
        "Realizziamo abiti su misura per ogni occasione, utilizzando solo tessuti di alta qualità.",
    },
    {
      title: "Modifiche e Aggiustamenti",
      description:
        "Servizio professionale di modifiche per adattare perfettamente i vostri capi.",
    },
    {
      title: "Consulenza Stile",
      description:
        "Vi aiutiamo a scegliere il look perfetto per ogni evento importante.",
    },
  ];

  return (
    <section className="py-16 bg-brand-base">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-brand-primary text-center mb-12">
            I Nostri Servizi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-serif font-bold text-brand-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-text leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
