import type { Metadata } from "next";

import BreadcrumbHero from "../../src/components/BreadcrumbHero";
import AboutOverviewSection from "../../src/components/about/AboutOverviewSection";
import AboutImageBandSection from "../../src/components/about/AboutImageBandSection";
import AboutCtaSection from "../../src/components/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About | Phogole Resources",
  description:
    "Learn about Phogole Resources — safety-first mining support services with disciplined field execution and clear reporting.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero
        crumbs={[
          { label: "home", href: "/" },
          { label: "about" },
        ]}
        title="disciplined mining support, built for safety and delivery"
        description="We support mining operations with reliable field execution, clear reporting, and teams that understand site standards and accountability."
        imageAlt="Open-pit mining operations"
      />

      <AboutOverviewSection />
      <AboutImageBandSection />
      <AboutCtaSection />
    </main>
  );
}
