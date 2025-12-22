import Reveal from "../ui/Reveal";

const services = [
  {
    title: "groundwater monitoring",
    description:
      "Support for monitoring programs and field execution aligned to operational and compliance requirements.",
  },
  {
    title: "water quality monitoring",
    description:
      "Sampling support and monitoring assistance with structured reporting for traceability and review.",
  },
  {
    title: "borehole water sampling",
    description:
      "Field-ready sampling support carried out with disciplined processes and consistent documentation.",
  },
  {
    title: "minerals exploration support",
    description:
      "Exploration assistance including sampling support, field coordination, and practical execution.",
  },
  {
    title: "sample collection & preparation",
    description:
      "Organised sample handling processes that keep work clean, controlled, and easy to audit.",
  },
  {
    title: "underground secondary support",
    description:
      "Underground support services delivered with a safety-first mindset and site-aligned standards.",
  },
];

export default function ServicesGridSection() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
              services
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
              practical support for mining environments
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
              Clean execution, clear reporting, and disciplined delivery. Our services are built to
              support site operations and compliance-driven workstreams.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delayMs={idx * 70}>
              <div
                className="
                  h-full rounded-2xl border bg-white p-6
                  transition
                  duration-200
                  will-change-transform
                  hover:-translate-y-[1px]
                  hover:border-[#989e35]/40
                "
                style={{ borderColor: "rgba(74,71,70,0.14)" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="
                      mt-1.5 h-2.5 w-2.5 rounded-full
                      transition-opacity duration-200
                      group-hover:opacity-90
                    "
                    style={{ backgroundColor: "#989e35" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[#4a4746]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4a4746]/75">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
