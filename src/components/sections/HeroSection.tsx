import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import tailorHandsImg from "../../assets/images/tailor-hands.jpg";

export const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: background moves slower (0.5x speed)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image with Parallax - Wide on Desktop */}
      <motion.div className="absolute inset-0 z-1" style={{ y: backgroundY }}>
        <div className="hidden md:block absolute inset-0 h-[120vh]">
          <img
            src={tailorHandsImg}
            alt="Master tailor at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-black/20" />
        </div>

        {/* Vertical Image for Mobile with Parallax */}
        <div className="md:hidden absolute inset-0 h-[120vh]">
          <img
            src="/gallery-images/grey-coat-collar.webp"
            alt="Elegant tailored suit"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </motion.div>

      {/* Animated VD Initials */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotateZ: -8 }}
        animate={{
          opacity: 0.5,
          scale: 1,
          rotateZ: 0,
        }}
        transition={{
          duration: 2.5,
          delay: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute z-20 pointer-events-none
                   top-20 left-[40%] -translate-x-1/2
                   md:top-1/2 md:left-auto md:right-20 md:translate-x-0 md:-translate-y-1/2"
      >
        <motion.svg
          viewBox="0 0 161.28461 154.33398"
          className="w-40 h-40 md:w-[550px] md:h-[550px]"
          style={{ filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))" }}
        >
          <defs>
            <linearGradient
              id="goldShimmer"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f4d03f" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <g transform="translate(-24.308083,-29.410571)">
            <motion.path
              d="m 117.8408,29.410571 0.0652,2.692973 c 0,0 5.96499,0.855752 8.52658,2.307656 1.4201,0.804928 2.7087,1.98536 3.52591,3.398447 0.79386,1.372707 1.16232,3.029605 1.15313,4.615311 -0.0219,3.623097 -2.75671,10.514045 -2.75671,10.514045 l -48.619372,0.03673 c 0,0 -1.821293,0.274432 -1.994598,0.997286 -0.10088,0.420269 0.770634,1.042626 0.770634,1.042626 0,0 5.122096,0.204776 7.525039,0.997286 1.689273,0.557197 3.507963,1.236355 4.669123,2.583897 0.705365,0.818608 0.963842,1.969982 1.133282,3.037198 0.336769,2.121028 0.111023,4.323911 -0.271937,6.437071 -1.940102,10.701222 -10.154222,31.006678 -10.154222,31.006678 0,0 -15.95786,-33.914788 -20.127162,-52.04047 -0.489459,-2.127881 -0.76644,-4.355628 -0.543956,-6.527726 0.141177,-1.379341 0.351133,-2.876613 1.178623,-3.989171 1.120534,-1.506565 2.972585,-2.381616 4.714436,-3.082539 2.424929,-0.975767 7.706349,-1.450588 7.706349,-1.450588 l 0.09074,-2.266591 -49.955216,-0.181474 -0.16859,2.564077 c 0,0 4.563912,0.66197 6.73028,1.410921 2.050549,0.708928 4.174044,1.488363 5.835027,2.884234 1.439649,1.209846 2.392005,2.923516 3.333259,4.551548 2.327338,4.025438 5.640942,12.757966 5.640942,12.757966 l 8.333888,20.322644 8.911891,21.732194 11.026833,25.77232 -16.156385,47.40693 c 0,0 -1.998053,3.28638 -3.204363,4.77661 -1.236273,1.52721 -2.454672,3.1633 -4.103894,4.23142 -2.099372,1.35963 -4.607608,2.03361 -7.051891,2.56405 -2.660241,0.57729 -8.141229,0.64174 -8.141229,0.64174 l -0.256311,2.24389 c 0,0 41.869855,0.89158 62.762772,-0.19271 2.337588,-0.12144 4.675538,-0.33455 6.986698,-0.70548 4.68954,-0.75268 9.36483,-1.7069 13.91252,-3.07686 4.38512,-1.32101 8.69058,-2.95998 12.8217,-4.93687 5.19049,-2.48387 10.21105,-5.37092 14.9367,-8.65407 2.84273,-1.975 5.49373,-4.2312 8.01376,-6.60421 1.82699,-1.72044 3.47213,-3.62644 5.12812,-5.51202 2.67417,-3.04493 5.40728,-6.05945 7.75734,-9.36094 2.65215,-3.7259 5.00581,-7.67321 7.1156,-11.73091 2.64859,-5.094 5.12442,-10.31914 6.92439-15.7711 1.62842,-4.93234 2.75438,-10.04736 3.46218,-15.19312 0.47236,-3.434075 0.66715,-6.923588 0.51282,-10.386538 -0.15187,-3.405492 -0.58327,-6.821922 -1.41095,-10.128755 -0.81252,-3.24625 -1.86655,-6.481782 -3.46218,-9.423254 -1.41238,-2.603634 -3.19376,-5.055647 -5.32079,-7.117051 -2.06031,-1.996765 -4.54724,-3.535896 -7.05186,-4.935468 -2.11379,-1.1812 -4.35736,-2.156994 -6.66655,-2.885604 -2.9336,-0.925656 -5.99824,-1.395734 -9.03939,-1.858603 -5.54146,-0.843472 -11.19734,-1.217358 -16.73296,-1.667342 0,0 2.71737,-6.913702 4.55158,-10.128756 1.10175,-1.93122 2.2701,-3.8813 3.84607,-5.449681 1.34894,-1.342471 2.99904,-2.378107 4.68047,-3.269524 2.06176,-1.093067 6.53908,-2.500314 6.53908,-2.500314 v -2.307652 z m 15.48636,29.46401 c 0,0 5.12662,0.301324 7.62844,0.834397 3.07355,0.654897 6.18421,1.440692 8.9756,2.884206 1.70829,0.883413 3.18544,2.176046 4.61531,3.462183 1.8663,1.678691 3.65668,3.480768 5.12955,5.513444 1.0886,1.502316 1.94641,3.172674 2.69155,4.871705 1.00422,2.289755 1.81419,4.678553 2.37281,7.115626 0.52,2.268564 0.8003,4.598973 0.89671,6.924365 0.1346,3.248909 -0.12363,6.509332 -0.44765,9.744833 -0.30604,3.05531 -0.79742,6.09443 -1.41092,9.10312 -0.57263,2.80824 -1.23036,5.60783 -2.115,8.33391 -0.8378,2.58171 -1.96721,5.06006 -3.01313,7.56468 -1.06938,2.56084 -2.07182,5.15727 -3.33469,7.62842 -1.76117,3.44622 -3.72523,6.7981 -5.89733,10.00125 -1.54733,2.28181 -3.25313,4.46057 -5.06439,6.53905 -2.76984,3.17849 -5.74709,6.1815 -8.84671,9.03936 -1.69607,1.56378 -3.49576,3.01475 -5.32218,4.42408 -2.70402,2.08654 -5.3996,4.21316 -8.33391,5.96107 -2.43033,1.44771 -5.0122,2.64264 -7.62842,3.71861 -2.46237,1.01269 -4.99482,1.86797 -7.5647,2.56404 -2.56871,0.69577 -5.17618,1.30892 -7.821073,1.60361 -4.312288,0.48047 -8.685076,0.54596 -13.01436,0.25631 -2.653553,-0.17763 -5.321827,-0.50854 -7.884862,-1.21826 -1.801529,-0.49886 -5.19326,-2.11642 -5.19326,-2.11642 l 10.00123,-31.92466 8.654072,20.25748 2.500314,-0.25631 z m -6.82522,0.650236 -29.465428,76.972743 -6.527726,-16.77263 19.311184,-56.936263 c 0,0 3.85287,-1.704432 5.89309,-2.175909 3.52172,-0.813838 10.78888,-1.087941 10.78888,-1.087941 z"
              fill="url(#goldShimmer)"
              initial={{
                pathLength: 0,
                pathOffset: 1,
                fillOpacity: 0,
              }}
              animate={{
                pathLength: 1,
                pathOffset: 0,
                fillOpacity: 0.6,
              }}
              transition={{
                pathLength: {
                  duration: 6.5,
                  delay: 1.8,
                  ease: "linear",
                },
                pathOffset: {
                  duration: 6.5,
                  delay: 1.8,
                  ease: "linear",
                },
                fillOpacity: {
                  duration: 1.2,
                  delay: 8.0,
                  ease: "easeOut",
                },
              }}
              strokeWidth="0.5"
              stroke="#f4d03f"
              strokeOpacity="0.8"
            />
          </g>
        </motion.svg>
      </motion.div>

      {/* Content with Parallax Fade */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 md:px-12"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center md:text-left md:ml-0"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif mb-3 sm:mb-4 leading-tight text-center md:text-left"
            style={{
              background:
                "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.8))",
              fontFamily: "'Cormorant', Georgia, serif",
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Elegance & Style - su Misura
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="space-y-4 sm:space-y-6 mt-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 0.95, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="leading-relaxed max-w-2xl mx-auto md:mx-0"
              style={{
                color: "#f5f1e8",
                fontFamily: "'Libre Baskerville', Georgia, serif",
                lineHeight: "1.8",
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                fontStyle: "italic",
                opacity: 0.95,
              }}
            >
              L'arte della sartoria tradizionale incontra l'eleganza moderna.
              Ogni capo è un'opera d'arte realizzata con passione e precisione
              artigianale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: 45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "1000px" }}
              className="flex justify-center md:justify-start"
            >
              <span
                style={{
                  fontFamily: "'Cormorant', Georgia, serif",
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))",
                  display: "inline-block",
                  padding: "0 8px",
                }}
              >
                – ROMA –
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                  color: "#0f1419",
                  fontWeight: 600,
                  border: "none",
                }}
              >
                Prenota un Appuntamento
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{
                  borderColor: "#d4af37",
                  color: "#d4af37",
                  borderWidth: "2px",
                  background: "transparent",
                }}
              >
                Scopri di Più
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-sm font-serif tracking-wider"
            style={{
              color: "#d4af37",
              fontFamily: "'Cormorant', Georgia, serif",
              letterSpacing: "0.1em",
            }}
          >
            SCORRI
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
