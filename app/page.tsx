import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import ServicesSection from "../src/components/ServicesSection";
import FaqSection from "../src/components/FaqSection";
import ContactSection from "../src/components/ContactSection";
import ScrollToTop from "../src/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
        <ScrollToTop />
      </main>
    </>
  );
}
