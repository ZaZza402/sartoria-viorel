import React from "react";
import { motion } from "framer-motion";
import { Scissors, RulerDimensionLine, Sparkles } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Abiti su Misura",
      description:
        "Dalla presa delle misure alla scelta del tessuto, realizziamo abiti che vestono come una seconda pelle. Taglio classico o moderno, costruito interamente attorno alla tua figura.",
      image: "/gallery-images/red-suit-standing-near-head-statues.webp",
      icon: RulerDimensionLine,
    },
    {
      title: "Modifiche Sartoriali",
      description:
        "Diamo nuova vita ai tuoi capi preferiti. Che sia un orlo, una riparazione o una rimessa a modello completa, garantiamo un risultato invisibile e duraturo.",
      image: "/gallery-images/antique-sawing-machine.webp",
      icon: Scissors,
    },
    {
      title: "Cerimonie ed Eventi",
      description:
        "Sposo, Testimoni e Galà. Realizziamo abiti esclusivi per il tuo giorno più importante e per ogni occasione che richiede un'eleganza impeccabile.",
      image: "/gallery-images/grey-suit-showcase-couple.webp",
      icon: Sparkles,
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #fdfbf7 0%, #faf7f0 25%, #f6f2e9 50%, #f2ede2 75%, #ede8db 100%)",
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

        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Image - Always first on mobile */}
              <div className="w-full md:w-1/2 order-1">
                <div
                  className={`relative overflow-hidden rounded-lg ${
                    service.image.includes("antique-sawing-machine")
                      ? ""
                      : "bg-linear-to-br from-gray-50 to-gray-100"
                  }`}
                  style={{
                    border: "2px solid #d4af37",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content - Always second on mobile */}
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 order-2">
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
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    textAlign: "left",
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
