import type { Metadata } from "next";

import BreadcrumbHero from "../../src/components/BreadcrumbHero";
import Reveal from "../../src/components/ui/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Phogole Resources",
  description:
    "Frequently asked questions about Phogole Resources, our mining support services, safety standards, and how to engage our team.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What services does Phogole Resources provide?",
    a: "We provide groundwater monitoring, minerals exploration and beneficiation support, and underground secondary support — delivered safely and professionally.",
  },
  {
    q: "Do you work on-site at mines and remote locations?",
    a: "Yes. Our teams are site-ready and can operate in mining environments and remote locations, depending on project scope and site requirements.",
  },
  {
    q: "How do you ensure safety and compliance?",
    a: "We follow a safety-first approach, align with site rules and client standards, and provide clear reporting to support compliance and accountability.",
  },
  {
    q: "How do we request a quote or start a project?",
    a: "You can contact us via the contact page or email us directly. We’ll review your scope, location, and timeline and respond with next steps.",
  },
  {
    q: "Which industries do you mainly support?",
    a: "We primarily support mining and resource-based operations, focusing on disciplined execution, safety, and dependable site delivery.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Hero */}
      <BreadcrumbHero
        crumbs={[
          { label: "home", href: "/" },
          { label: "faq" },
        ]}
        title="answers to common questions"
        description="Clear information about our services, safety standards, and how we work on site."
        imageAlt="Mining operations and field support"
      />

      {/* FAQ Content */}
      <section className="relative bg-white">
        {/* divider */}
        <div className="h-px w-full bg-black/10" />

        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary/60">
            frequently asked questions
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-secondary sm:text-4xl">
            what clients usually ask before engaging us
          </h2>

          <div className="mt-5 h-[3px] w-[120px] rounded-full bg-brand-primary" />

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-brand-secondary/75">
            Below are answers to the most common questions about our services and
            on-site work. If you need clarity beyond this, our team is ready to assist.
          </p>

          {/* FAQ List */}
          <div className="mt-12 space-y-5">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="
                  group rounded-2xl border border-black/10 bg-white
                  transition
                  hover:-translate-y-[1px]
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)]
                "
              >
                <summary className="cursor-pointer list-none px-6 py-5">
                  <p className="text-sm font-extrabold text-brand-secondary">
                    {item.q}
                  </p>
                </summary>

                <div className="px-6 pb-6 text-sm leading-7 text-brand-secondary/75">
                  {item.a}
                </div>

                <div className="h-[2px] w-full bg-brand-primary/60 transition group-hover:bg-brand-primary" />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (same as other pages) */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div
              className="mx-auto w-full max-w-5xl rounded-3xl border"
              style={{ borderColor: "rgba(74,71,70,0.14)" }}
            >
              <div className="px-8 py-10 sm:px-12 sm:py-12">
                <div className="grid gap-8 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                      next step
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#4a4746] sm:text-2xl">
                      request a scope discussion
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4a4746]/75">
                      Send your site requirements and timelines. We’ll respond with
                      clear deliverables and a practical support approach.
                    </p>
                  </div>

                  <div className="md:col-span-4 md:flex md:justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{ backgroundColor: "#989e35" }}
                    >
                      contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
