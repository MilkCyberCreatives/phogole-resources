import type { Metadata } from "next";

import BreadcrumbHero from "../../src/components/BreadcrumbHero";
import ServicesGridSection from "../../src/components/services/ServicesGridSection";
import ServiceStandardsSection from "../../src/components/services/ServiceStandardsSection";
import ServicesCtaSection from "../../src/components/services/ServicesCtaSection";

export const metadata: Metadata = {
  title: "Services | Phogole Resources",
  description:
    "Explore Phogole Resources services: groundwater monitoring support, minerals exploration support, and underground secondary support—delivered safely and professionally.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero
        crumbs={[
          { label: "home", href: "/" },
          { label: "services" },
        ]}
        title="services built for disciplined field execution"
        description="Practical mining support services delivered with safety-first execution and clear reporting."
        imageAlt="Phogole Resources mining support services"
      />

      <ServicesGridSection />
      <ServiceStandardsSection />
      <ServicesCtaSection />
    </main>
  );
}
