import BreadcrumbHero from "../../src/components/BreadcrumbHero";
import ServicesGridSection from "../../src/components/services/ServicesGridSection";
import ServiceStandardsSection from "../../src/components/services/ServiceStandardsSection";
import ServicesCtaSection from "../../src/components/services/ServicesCtaSection";
import { createPageMetadata, SITE_URL } from "../../src/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore Phogole Resources services: groundwater monitoring support, minerals exploration support, and underground secondary support—delivered safely and professionally.",
  path: "/services",
});

const services = [
  {
    name: "groundwater monitoring",
    description:
      "Support for monitoring programs and field execution aligned to operational and compliance requirements.",
  },
  {
    name: "water quality monitoring",
    description:
      "Sampling support and monitoring assistance with structured reporting for traceability and review.",
  },
  {
    name: "borehole water sampling",
    description:
      "Field-ready sampling support carried out with disciplined processes and consistent documentation.",
  },
  {
    name: "minerals exploration support",
    description:
      "Exploration assistance including sampling support, field coordination, and practical execution.",
  },
  {
    name: "sample collection & preparation",
    description:
      "Organised sample handling processes that keep work clean, controlled, and easy to audit.",
  },
  {
    name: "underground secondary support",
    description:
      "Underground support services delivered with a safety-first mindset and site-aligned standards.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/services#services`,
  name: "Phogole Resources services",
  url: `${SITE_URL}/services`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: `${SITE_URL}/services`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
