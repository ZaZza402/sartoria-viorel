import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-brand-primary text-brand-base">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="footer-title text-xl font-serif font-bold mb-4 text-brand-accent">
              Sartoria Viorel Danalache
            </h3>
            <p className="footer-text text-brand-base">
              Maestro sarto che realizza capi su misura con precisione e
              passione artigianale.
            </p>
          </div>

          <div>
            <h4 className="footer-heading text-lg font-semibold mb-4 text-brand-accent">
              Link Rapidi
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="footer-link text-brand-base hover:text-brand-accent transition-colors"
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-link text-brand-base hover:text-brand-accent transition-colors"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="footer-link text-brand-base hover:text-brand-accent transition-colors"
                >
                  Galleria
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link text-brand-base hover:text-brand-accent transition-colors"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading text-lg font-semibold mb-4 text-brand-accent">
              Contatti
            </h4>
            <ul className="space-y-2 footer-text text-brand-base">
              <li>Email: info@viorelsartoria.com</li>
              <li>Telefono: +39 XXX XXX XXXX</li>
              <li>Indirizzo: Da definire</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider mt-8 pt-8 border-t border-brand-primary-light text-center">
          <p className="footer-copyright text-brand-accent">
            &copy; {currentYear} Sartoria Viorel Danalache. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};
