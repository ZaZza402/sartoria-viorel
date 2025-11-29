import React from "react";
import { SEO } from "../components/seo/SEO";
import {
  HeroSection,
  WelcomeSection,
  ServicesSection,
  GallerySection,
  ContactSection,
} from "../components/sections";

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Sartoria Viorel Danalache"
        description="Sartoria artigianale a Roma dal 1974. Abiti su misura, riparazioni sartoriali e creazioni uniche fatte a mano dal Maestro Viorel Danalache."
        canonical="/"
      />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about-teaser">
        <WelcomeSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
};
