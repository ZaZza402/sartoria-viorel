import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  WelcomeSection,
  ServicesSection,
  GallerySection,
  ContactSection,
  ContactOptionsSection,
} from "./components/sections";

function App() {
  return (
    <div className="min-h-screen text-brand-text">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <ContactOptionsSection />
      <Footer />
    </div>
  );
}

export default App;
