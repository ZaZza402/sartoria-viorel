import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  WelcomeSection,
  ServicesSection,
  ContactSection,
} from "./components/sections";

function App() {
  return (
    <div className="min-h-screen text-brand-text">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
