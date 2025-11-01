import React, { useState, useEffect } from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Sunday (0) - Closed
      if (day === 0) {
        setIsOpen(false);
        return;
      }

      // Monday to Friday (1-5): 08:30-13:00 and 16:00-20:00
      if (day >= 1 && day <= 5) {
        const morningStart = 8 * 60 + 30; // 08:30
        const morningEnd = 13 * 60; // 13:00
        const afternoonStart = 16 * 60; // 16:00
        const afternoonEnd = 20 * 60; // 20:00

        setIsOpen(
          (currentTime >= morningStart && currentTime < morningEnd) ||
          (currentTime >= afternoonStart && currentTime < afternoonEnd)
        );
        return;
      }

      // Saturday (6): 09:00-13:30
      if (day === 6) {
        const saturdayStart = 9 * 60; // 09:00
        const saturdayEnd = 13 * 60 + 30; // 13:30
        setIsOpen(currentTime >= saturdayStart && currentTime < saturdayEnd);
        return;
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute

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
              className="text-lg font-elegant font-semibold mb-4"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8935f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Indirizzo
            </h4>
            <div className="space-y-2" style={{ color: "#fdfbf7" }}>
              <p style={{ fontSize: "16px", fontWeight: 500 }}>
                Via Simone Mosca, 16
              </p>
              <p style={{ fontSize: "15px", color: "#f5f1e8" }}>
                00168 Roma, RM
              </p>
              
              {/* Live Open/Closed Indicator */}
              <div
                className="mt-4 inline-flex items-center gap-2 px-4 py-2"
                style={{
                  background: isOpen 
                    ? "rgba(34, 197, 94, 0.15)" 
                    : "rgba(239, 68, 68, 0.15)",
                  border: `1px solid ${isOpen ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
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
            </div>
          </div>

          {/* Working Hours */}
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
              Orari di Apertura
            </h4>
            <div className="space-y-2" style={{ color: "#fdfbf7", fontSize: "15px" }}>
              <p style={{ fontWeight: 500 }}>Lunedì - Venerdì</p>
              <p style={{ color: "#f5f1e8", marginBottom: "8px" }}>
                08:30 - 13:00 / 16:00 - 20:00
              </p>
              <p style={{ fontWeight: 500 }}>Sabato</p>
              <p style={{ color: "#f5f1e8", marginBottom: "8px" }}>
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
                href="tel:+393277985312"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "#fdfbf7", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fdfbf7")}
              >
                <span style={{ fontSize: "18px" }}>📞</span>
                <span style={{ fontWeight: 500 }}>+39 327 798 5312</span>
              </a>
              <a
                href="https://wa.me/393277985312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "#fdfbf7", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fdfbf7")}
              >
                <span style={{ fontSize: "18px" }}>💬</span>
                <span style={{ fontWeight: 500 }}>WhatsApp</span>
              </a>
              <a
                href="mailto:info@viorelsartoria.com"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "#fdfbf7", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fdfbf7")}
              >
                <span style={{ fontSize: "18px" }}>✉️</span>
                <span style={{ fontWeight: 500 }}>info@viorelsartoria.com</span>
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
              Sartoria Viorel Danalache
            </h3>
            <p
              className="footer-text"
              style={{ color: "#f5f1e8", lineHeight: "1.6" }}
            >
              Maestro sarto che realizza capi su misura con precisione e
              passione artigianale. Dal 1995 nel cuore di Roma, portiamo avanti
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
                  href="#home"
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
                  href="#about"
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
                  href="#services"
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
                  href="#contact"
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
            </ul>
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
