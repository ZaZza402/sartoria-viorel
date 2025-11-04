import React from "react";
import { motion } from "framer-motion";
import { Scissors, RulerDimensionLine, Sparkles } from "lucide-react";
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
      icon: RulerDimensionLine,
    },
    {
      title: "Modifiche Sartoriali",
      description:
        "Servizio professionale di modifiche e aggiustamenti per garantire la perfetta vestibilità dei vostri capi. Precisione e attenzione ai dettagli per risultati impeccabili.",
      image: suit3Img,
      icon: Scissors,
    },
    {
      title: "Consulenza & Stile",
      description:
        "Consulenza personalizzata per la scelta di tessuti, colori e stili. Vi guidiamo nella creazione del guardaroba perfetto per ogni evento importante.",
      image: suit4Img,
      icon: Sparkles,
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #fdfbf7 0%, #f5f1e8 70%, #ebe3d0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2
            className="font-serif mb-3 sm:mb-4"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Cormorant', Georgia, serif",
              letterSpacing: "0",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
            }}
          >
            I Nostri Servizi
          </h2>
          <div
            className="w-16 sm:w-20 md:w-24 h-1 mx-auto"
            style={{
              background: "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
            }}
          ></div>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
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
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
                {/* Icon */}
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <service.icon
                    size={28}
                    color="#d4af37"
                    strokeWidth={2}
                    className="sm:w-9 sm:h-9 md:w-10 md:h-10"
                  />
                </div>

                <h3
                  className="font-serif"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Cormorant', Georgia, serif",
                    letterSpacing: "0",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  {service.title}
                </h3>
                <div
                  className="w-12 sm:w-14 md:w-16 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg, #d4af37 0%, #b8935f 100%)",
                  }}
                ></div>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "#2a2a2a",
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    lineHeight: "1.8",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  }}
                >
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
