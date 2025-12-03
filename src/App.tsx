import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header, Footer } from "./components/layout";
import { StickyCallButton } from "./components/ui/StickyCallButton";
import { CookieConsent } from "./components/ui/CookieConsent";
import { HomePage, AboutPage, PrivacyCookiePage, NotFoundPage } from "./pages";
import { ScrollToTop } from "./components/utils/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen text-brand-text relative overflow-x-hidden w-full">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyCookiePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
          <StickyCallButton />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
