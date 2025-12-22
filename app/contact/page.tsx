import type { Metadata } from "next";

import BreadcrumbHero from "../../src/components/BreadcrumbHero";
import ContactSection from "../../src/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Phogole Resources",
  description:
    "Contact Phogole Resources for mining support services. Send a message and our team will respond with clear next steps.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero
        crumbs={[
          { label: "home", href: "/" },
          { label: "contact" },
        ]}
        title="contact phogole resources"
        description="Send your scope, timelines, and site requirements. We’ll respond with clear deliverables and practical next steps."
        imageAlt="Phogole Resources mining support services"
      />

      <ContactSection />
    </main>
  );
}
