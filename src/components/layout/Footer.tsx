import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#014421", color: "#ffffff" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              className="footer-title text-xl font-serif font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Sartoria Viorel Danalache
            </h3>
            <p className="footer-text" style={{ color: "#ffffff" }}>
              Maestro sarto che realizza capi su misura con precisione e
              passione artigianale.
            </p>
          </div>

          <div>
            <h4
              className="footer-heading text-lg font-semibold mb-4"
              style={{ color: "#ffffff" }}
            >
              Link Rapidi
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="footer-link transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="footer-link transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  Galleria
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="footer-heading text-lg font-semibold mb-4"
              style={{ color: "#ffffff" }}
            >
              Contatti
            </h4>
            <ul className="space-y-2 footer-text" style={{ color: "#ffffff" }}>
              <li>Email: info@viorelsartoria.com</li>
              <li>Telefono: +39 XXX XXX XXXX</li>
              <li>Indirizzo: Da definire</li>
            </ul>
          </div>
        </div>

        <div
          className="footer-divider mt-8 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <p className="footer-copyright" style={{ color: "#ffffff" }}>
            &copy; {currentYear} Sartoria Viorel Danalache. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};
