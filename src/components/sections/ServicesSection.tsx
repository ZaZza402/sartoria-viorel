import React from "react";
import { motion } from "framer-motion";
import suit1Img from "../../assets/images/suit-1.jpg";
import suit3Img from "../../assets/images/suit-3.jpg";
import suit4Img from "../../assets/images/suit-4.jpg";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Abiti su Misura",
      description:
        "Creazione completa di abiti su misura per ogni occasione. Dalla selezione dei tessuti pregiati alla vestibilità perfetta, ogni dettaglio è curato con maestria artigianale.",
      image: suit1Img,
    },
    {
      title: "Modifiche Sartoriali",
      description:
        "Servizio professionale di modifiche e aggiustamenti per garantire la perfetta vestibilità dei vostri capi. Precisione e attenzione ai dettagli per risultati impeccabili.",
      image: suit3Img,
    },
    {
      title: "Consulenza & Stile",
      description:
        "Consulenza personalizzata per la scelta di tessuti, colori e stili. Vi guidiamo nella creazione del guardaroba perfetto per ogni evento importante.",
      image: suit4Img,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-brand-primary mb-4">
            I Nostri Servizi
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-elegant text-3xl md:text-4xl text-brand-primary">
                  {service.title}
                </h3>
                <div className="w-16 h-0.5 bg-brand-accent"></div>
                <p className="text-brand-text leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
