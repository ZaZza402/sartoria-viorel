import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenText, setNextOpenText] = useState("");

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      let open = false;
      let nextOpen = "";

      // Schedule
      // Mon-Fri: 09:00-13:00, 16:00-20:00
      // Sat: 09:00-13:30
      // Sun: Closed

      const weekdayMorningStart = 9 * 60; // 09:00
      const weekdayMorningEnd = 13 * 60; // 13:00
      const weekdayAfternoonStart = 16 * 60; // 16:00
      const weekdayAfternoonEnd = 20 * 60; // 20:00

      const saturdayStart = 9 * 60; // 09:00
      const saturdayEnd = 13 * 60 + 30; // 13:30

      if (day === 0) {
        // Sunday
        open = false;
        nextOpen = "Apre Lunedì 09:00";
      } else if (day >= 1 && day <= 5) {
        // Mon-Fri
        if (
          currentTime >= weekdayMorningStart &&
          currentTime < weekdayMorningEnd
        ) {
          open = true;
        } else if (
          currentTime >= weekdayAfternoonStart &&
          currentTime < weekdayAfternoonEnd
        ) {
          open = true;
        } else {
          open = false;
          if (currentTime < weekdayMorningStart) {
            // Before 09:00
            const diff = weekdayMorningStart - currentTime;
            const h = Math.floor(diff / 60);
            const m = diff % 60;
            nextOpen = `Apre tra ${h > 0 ? h + "h " : ""}${m}m`;
          } else if (
            currentTime >= weekdayMorningEnd &&
            currentTime < weekdayAfternoonStart
          ) {
            // Lunch break (13:00 - 16:00)
            const diff = weekdayAfternoonStart - currentTime;
            const h = Math.floor(diff / 60);
            const m = diff % 60;
            nextOpen = `Apre tra ${h > 0 ? h + "h " : ""}${m}m`;
          } else {
            // After 20:00
            nextOpen = day === 5 ? "Apre Sabato 09:00" : "Apre domani 09:00";
          }
        }
      } else if (day === 6) {
        // Saturday
        if (currentTime >= saturdayStart && currentTime < saturdayEnd) {
          open = true;
        } else {
          open = false;
          if (currentTime < saturdayStart) {
            const diff = saturdayStart - currentTime;
            const h = Math.floor(diff / 60);
            const m = diff % 60;
            nextOpen = `Apre tra ${h > 0 ? h + "h " : ""}${m}m`;
          } else {
            nextOpen = "Apre Lunedì 09:00";
          }
        }
      }

      setIsOpen(open);
      setNextOpenText(nextOpen);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="footer"
      style={{
        background: "linear-gradient(180deg, #0f1419 0%, #1a2332 100%)",
        color: "#fdfbf7",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Google Maps Section */}
        <div className="mb-12">
          <h3
            className="text-2xl font-elegant mb-6 text-center"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Vieni a Trovarci
          </h3>
          <div
            className="map-container"
            style={{
              position: "relative",
              width: "100%",
              height: "450px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(212, 175, 55, 0.2)",
              border: "3px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.6852832744896!2d12.442772776550654!3d41.94614076418576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b75fdb93dd%3A0x5e5a4f2e5f2f5e5a!2sVia%20Simone%20Mosca%2C%2016%2C%2000168%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2s!4v1730487600000!5m2!1sen!2s&style=feature:all%7Celement:geometry%7Ccolor:0x1a2332&style=feature:all%7Celement:labels.text.fill%7Ccolor:0xd4af37&style=feature:all%7Celement:labels.text.stroke%7Ccolor:0x0f1419&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xb8935f&style=feature:landscape%7Celement:geometry%7Ccolor:0x0f1419&style=feature:poi%7Celement:geometry%7Ccolor:0x1a2332&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xb8935f&style=feature:road%7Celement:geometry%7Ccolor:0x2a2a2a&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x1a2332&style=feature:road%7Celement:labels.text.fill%7Ccolor:0xf5f1e8&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2a2a2a&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xb8935f&style=feature:transit%7Celement:geometry%7Ccolor:0x1a2332&style=feature:water%7Celement:geometry%7Ccolor:0x0f1419"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "contrast(1.1) saturate(0.9)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sartoria Viorel Danalache - Via Simone Mosca, 16, Roma"
            />
          </div>
        </div>

        {/* Contact Information Below Map */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address & Status */}
          <div>
            <h4
              className="text-lg font-elegant font-semibold mb-4 flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <MapPin size={20} style={{ color: "#d4af37" }} />
              Indirizzo
            </h4>
            <div className="space-y-2" style={{ color: "#d1d5db" }}>
              <a
                href="https://www.google.com/maps/place/Via+Simone+Mosca,+16,+00168+Roma+RM,+Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[#d4af37]"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "inherit",
                  }}
                >
                  Via Simone Mosca, 16
                </p>
                <p style={{ fontSize: "15px", color: "#9ca3af" }}>
                  00168 Roma, RM
                </p>
              </a>

              {/* Live Open/Closed Indicator */}
              <div className="mt-4 flex flex-col items-start gap-1">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2"
                  style={{
                    background: isOpen
                      ? "rgba(34, 197, 94, 0.15)"
                      : "rgba(239, 68, 68, 0.15)",
                    border: `1px solid ${
                      isOpen
                        ? "rgba(34, 197, 94, 0.3)"
                        : "rgba(239, 68, 68, 0.3)"
                    }`,
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: isOpen ? "#22c55e" : "#ef4444",
                      boxShadow: isOpen
                        ? "0 0 8px rgba(34, 197, 94, 0.6)"
                        : "0 0 8px rgba(239, 68, 68, 0.6)",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: isOpen ? "#22c55e" : "#ef4444",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {isOpen ? "Aperto" : "Chiuso"}
                  </span>
                </div>
                {!isOpen && nextOpenText && (
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#9ca3af",
                      marginLeft: "4px",
                      fontStyle: "italic",
                    }}
                  >
                    {nextOpenText}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4
              className="text-lg font-elegant font-semibold mb-4 flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <Clock size={20} style={{ color: "#d4af37" }} />
              Orari di Apertura
            </h4>
            <div
              className="space-y-2"
              style={{ color: "#d1d5db", fontSize: "15px" }}
            >
              <p style={{ fontWeight: 500, color: "#d1d5db" }}>
                Lunedì - Venerdì
              </p>
              <p style={{ color: "#9ca3af", marginBottom: "8px" }}>
                09:00 - 13:00 / 16:00 - 20:00
              </p>
              <p style={{ fontWeight: 500, color: "#d1d5db" }}>Sabato</p>
              <p style={{ color: "#9ca3af", marginBottom: "8px" }}>
                09:00 - 13:30
              </p>
              <p style={{ fontWeight: 500, color: "#ef4444" }}>
                Domenica: Chiuso
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-elegant font-semibold mb-4"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contatti
            </h4>
            <div className="space-y-3" style={{ fontSize: "15px" }}>
              <a
                href="tel:+393247985312"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "#d1d5db", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    background: "rgba(212, 175, 55, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[rgba(212,175,55,0.2)]"
                >
                  <Phone size={18} style={{ color: "#d4af37" }} />
                </div>
                <span style={{ fontWeight: 500, color: "#d1d5db" }}>
                  +39 324 798 5312
                </span>
              </a>
              <a
                href="https://wa.me/393247985312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "#d1d5db", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    background: "rgba(37, 211, 102, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[rgba(37,211,102,0.2)]"
                >
                  <MessageCircle size={18} style={{ color: "#25D366" }} />
                </div>
                <span style={{ fontWeight: 500, color: "#d1d5db" }}>
                  WhatsApp
                </span>
              </a>
              <a
                href="https://facebook.com/sartoriaviorel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "#d1d5db", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1877F2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    background: "rgba(24, 119, 242, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[rgba(24,119,242,0.2)]"
                >
                  <Facebook size={18} style={{ color: "#1877F2" }} />
                </div>
                <span style={{ fontWeight: 500, color: "#d1d5db" }}>
                  Facebook
                </span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "#d1d5db", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E4405F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    background: "rgba(228, 64, 95, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[rgba(228,64,95,0.2)]"
                >
                  <Instagram size={18} style={{ color: "#E4405F" }} />
                </div>
                <span style={{ fontWeight: 500, color: "#d1d5db" }}>
                  Instagram
                </span>
              </a>
              <a
                href="mailto:info@viorelsartoria.com"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "#d1d5db", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    background: "rgba(212, 175, 55, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[rgba(212,175,55,0.2)]"
                >
                  <Mail size={18} style={{ color: "#d4af37" }} />
                </div>
                <span style={{ fontWeight: 500, color: "#d1d5db" }}>
                  info@viorelsartoria.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Brand Description & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3
              className="footer-title text-xl font-elegant font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Viorel Danalache
            </h3>
            <p
              className="footer-text"
              style={{ color: "#f5f1e8", lineHeight: "1.6" }}
            >
              Maestro sarto che realizza capi su misura con precisione e
              passione artigianale. Dal 1974 nel cuore di Roma, portiamo avanti
              la tradizione dell'alta sartoria italiana.
            </p>
          </div>

          <div>
            <h4
              className="footer-heading text-lg font-semibold mb-4"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Link Rapidi
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="footer-link transition-colors"
                  style={{ color: "#f5f1e8", fontSize: "15px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f5f1e8")
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/chi-siamo"
                  className="footer-link transition-colors"
                  style={{ color: "#f5f1e8", fontSize: "15px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f5f1e8")
                  }
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="footer-link transition-colors"
                  style={{ color: "#f5f1e8", fontSize: "15px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f5f1e8")
                  }
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="footer-link transition-colors"
                  style={{ color: "#f5f1e8", fontSize: "15px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f5f1e8")
                  }
                >
                  Contatti
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="footer-link transition-colors"
                  style={{ color: "#f5f1e8", fontSize: "15px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f5f1e8")
                  }
                >
                  Privacy & Cookie Policy
                </a>
              </li>
            </ul>

            {/* Designer Signature */}
            <div
              className="mt-6 pt-4"
              style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}
            >
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                Sito da{" "}
                <a
                  href="https://www.alecsdesign.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#d4af37",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#b8935f";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#d4af37";
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  alecsdesign.xyz
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="footer-divider mt-8 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(212, 175, 55, 0.2)" }}
        >
          <p className="footer-copyright" style={{ color: "#f5f1e8" }}>
            &copy; {currentYear} Sartoria Viorel Danalache. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};
