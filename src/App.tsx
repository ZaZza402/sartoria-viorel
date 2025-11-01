import { motion } from "framer-motion";
import { Header, Footer } from "./components/layout";
import { Container, Button } from "./components/ui";

function App() {
  return (
    <div className="min-h-screen bg-brand-base">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-base">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-primary mb-6">
              Sartoria Viorel Danalache
            </h1>
            <h2 className="text-xl md:text-2xl text-brand-text mb-8">
              Maestro Sarto & Alta Moda su Misura
            </h2>
            <p className="text-lg text-brand-text mb-12 max-w-2xl mx-auto">
              Creazione di capi sartoriali eccezionali su misura con precisione,
              passione e decenni di esperienza nella sartoria di alta qualità.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Prenota Appuntamento
              </Button>
              <Button variant="outline" size="lg">
                Vedi Galleria
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Sample Content Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-primary mb-4">
              Benvenuti nella Nostra Sartoria
            </h3>
            <p className="text-brand-text max-w-2xl mx-auto">
              Qui troverete l'arte della sartoria tradizionale unita alla
              modernità. Ogni capo è realizzato con cura artigianale e
              attenzione ai dettagli per garantire la perfetta vestibilità e lo
              stile che desiderate.
            </p>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default App;
