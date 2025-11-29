import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  "white-coat.webp",
  "white-coat-red-tie-display-showcase.webp",
  "white-coat-red-tie-display-showcase (2).webp",
  "white-coat-red-pants-on-people-couple-showcase.webp",
  "white-coat-collar-closeup.webp",
  "white-coat-blue-pants.webp",
  "white-coat-blue-pants (5).webp",
  "white-coat-blue-pants (4).webp",
  "white-coat-blue-pants (3).webp",
  "white-coat-blue-pants (2).webp",
  "ViorelD-per-BrunoG.webp",
  "unifinished-dark-grey-coat.webp",
  "unfinished-coat-display.webp",
  "unfinished-coat-dispaly.webp",
  "shirt-stiches-showcase.webp",
  "shirt-sholder-sleeve.webp",
  "shirt-collar-display.webp",
  "shiny-grey-coat-collar.webp",
  "shiny-grey-coat-collar-close-up.webp",
  "scotland-woven.webp",
  "sawing-material-display-showcase.webp",
  "sartoria-viorel-labels.webp",
  "red-suit-piece-underneath.webp",
  "red-suit-collar-closeup.webp",
  "red-pants.webp",
  "red-coat-suit-closeup-collar.webp",
  "purple-jumper-unfinished.webp",
  "purple-coat-unfinished.webp",
  "material-on-table.webp",
  "interior-coat-label.webp",
  "grey-suit.webp",
  "grey-suit-showcase-couple.webp",
  "grey-suit (3).webp",
  "grey-suit (2).webp",
  "grey-pants.webp",
  "grey-pants (3).webp",
  "grey-pants (2).webp",
  "grey-long-coat-unfinished-showcase.webp",
  "grey-long-coat-showcase.webp",
  "grey-long-coat-display-showcase.webp",
  "grey-coat.webp",
  "grey-coat-collar.webp",
  "grey-coat-collar (2).webp",
  "grey-coat-closeup-collar-showcase.webp",
  "grey-coat-back-view.webp",
  "garnet-poster-on-the-wall.webp",
  "front-store-display-shirt-coat-suit.webp",
  "dark-purple-suit-unfinished.webp",
  "dark-purple-coat-unfinished-showcase.webp",
  "coat-sleeve-buttons.webp",
  "blue-unfinished-coat-display.webp",
  "blue-suit-on-person-showcase.webp",
  "blue-suit-coat-showcase.webp",
  "blue-coat-with-red-tie-showcase.webp",
  "blue-coat-display-showcase.webp",
  "antique-sawing-machine.webp",
];

export const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(-1);

  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #dcd1c6 0%, #d8ccc0 25%, #d4c6ba 50%, #d0c0b4 75%, #ccbaae 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12 text-center px-4 md:px-6"
      >
        <h2
          className="font-serif mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "var(--color-text)",
            letterSpacing: "0.02em",
          }}
        >
          La Nostra Galleria
        </h2>
        <p
          className="font-body text-center mx-auto max-w-2xl"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--color-text-light)",
            opacity: 0.85,
          }}
        >
          Scopri l'eccellenza della nostra maestria sartoriale attraverso una
          selezione di creazioni su misura.
        </p>
      </motion.div>

      {/* Swipe Indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-end gap-2 px-4 md:px-6 mb-4"
      >
        <span
          className="text-sm font-serif tracking-wider"
          style={{
            color: "var(--color-text-light)",
            fontFamily: "'Cormorant', Georgia, serif",
            letterSpacing: "0.05em",
            fontSize: "0.875rem",
            opacity: 0.7,
          }}
        >
          Scorri per esplorare
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-text-light)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.7 }}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth pl-4 md:pl-6"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#d4af37 #e0cdb0",
        }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0,
            }}
            viewport={{ once: true, margin: "200px" }}
            className="shrink-0"
          >
            <img
              src={`/gallery-images/${image}`}
              alt=""
              loading="lazy"
              className="h-64 md:h-80 lg:h-96 w-auto object-cover rounded-lg shadow-lg cursor-pointer"
              style={{
                border: "2px solid rgba(212, 175, 55, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => setIndex(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0, 0, 0, 0.25)";
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={galleryImages.map((image) => ({
          src: `/gallery-images/${image}`,
        }))}
      />

      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(224, 205, 176, 0.5);
          border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #d4af37, #b8935f);
          border-radius: 4px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #b8935f, #d4af37);
        }
      `}</style>
    </section>
  );
};
