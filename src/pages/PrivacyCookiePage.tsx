import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/seo/SEO";

export const PrivacyCookiePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#fdfbf7] min-h-screen">
      <SEO
        title="Privacy & Cookie Policy"
        description="Informativa sulla privacy e sull'utilizzo dei cookie per il sito web di Sartoria Viorel Danalache."
        canonical="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-serif text-4xl md:text-5xl mb-8 text-[#1a2332]"
            style={{ fontFamily: "'Cormorant', Georgia, serif" }}
          >
            Privacy & Cookie Policy
          </h1>

          <div
            className="prose prose-lg text-gray-600"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            <p className="text-sm text-gray-500 mb-8">
              Ultimo aggiornamento: 28 Novembre 2025
            </p>

            <section className="mb-12">
              <h2
                className="text-2xl font-serif text-[#1a2332] mb-4"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                1. Introduzione
              </h2>
              <p className="mb-4">
                Benvenuti sul sito web di Sartoria Viorel Danalache. La tua
                privacy è importante per noi. Questa politica spiega come
                raccogliamo, utilizziamo e proteggiamo i tuoi dati personali e
                come utilizziamo i cookie.
              </p>
            </section>

            <section className="mb-12">
              <h2
                className="text-2xl font-serif text-[#1a2332] mb-4"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                2. Dati che Raccogliamo
              </h2>
              <p className="mb-4">
                Raccogliamo solo i dati necessari per fornirti i nostri servizi,
                come:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Informazioni di contatto (nome, email, numero di telefono)
                  quando ci contatti o prenoti un appuntamento.
                </li>
                <li>
                  Dati tecnici di navigazione (indirizzo IP, tipo di browser)
                  raccolti automaticamente per fini statistici e di sicurezza.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2
                className="text-2xl font-serif text-[#1a2332] mb-4"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                3. Cookie Policy
              </h2>
              <p className="mb-4">
                Questo sito utilizza cookie per migliorare la tua esperienza di
                navigazione.
              </p>
              <h3
                className="text-xl font-serif text-[#1a2332] mb-2 mt-6"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                Cosa sono i cookie?
              </h3>
              <p className="mb-4">
                I cookie sono piccoli file di testo che vengono salvati sul tuo
                dispositivo quando visiti un sito web.
              </p>
              <h3
                className="text-xl font-serif text-[#1a2332] mb-2 mt-6"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                Tipologie di cookie utilizzati
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Cookie Tecnici:</strong> Necessari per il
                  funzionamento del sito. Non possono essere disattivati.
                </li>
                <li>
                  <strong>Cookie Analitici:</strong> Ci aiutano a capire come
                  gli utenti interagiscono con il sito (in forma anonima).
                </li>
              </ul>
              <p className="mb-4">
                Puoi gestire le tue preferenze sui cookie in qualsiasi momento
                attraverso le impostazioni del tuo browser.
              </p>
            </section>

            <section className="mb-12">
              <h2
                className="text-2xl font-serif text-[#1a2332] mb-4"
                style={{ fontFamily: "'Cormorant', Georgia, serif" }}
              >
                4. Contatti
              </h2>
              <p className="mb-4">
                Per qualsiasi domanda riguardante la tua privacy o questa
                politica, puoi contattarci a:
              </p>
              <p className="font-semibold">
                Sartoria Viorel Danalache
                <br />
                Via Simone Mosca, 16, 00168 Roma RM
                <br />
                Email: info@viorelsartoria.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
