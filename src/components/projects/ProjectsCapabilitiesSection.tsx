import Reveal from "../ui/Reveal";

const items = [
  {
    title: "field execution",
    text: "Practical delivery aligned to site standards and operational expectations.",
  },
  {
    title: "documentation",
    text: "Clear records and reporting formats that support traceability and review.",
  },
  {
    title: "safety discipline",
    text: "Safety-first mindset built into planning, execution, and daily work routines.",
  },
];

export default function ProjectsCapabilitiesSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                capability
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
                built for site conditions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
                We keep delivery disciplined and reporting clear — so stakeholders can act with confidence.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {items.map((it, idx) => (
                  <Reveal key={it.title} delayMs={idx * 80}>
                    <div
                      className="
                        h-full rounded-2xl border bg-white p-6
                        transition duration-200
                        will-change-transform
                        hover:-translate-y-[1px]
                        hover:border-[#989e35]/40
                      "
                      style={{ borderColor: "rgba(74,71,70,0.14)" }}
                    >
                      <h3 className="text-sm font-semibold text-[#4a4746]">
                        {it.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#4a4746]/75">
                        {it.text}
                      </p>

                      {/* subtle hover accent (no shadow, no layout shift) */}
                      <div
                        className="mt-5 h-px w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ backgroundColor: "rgba(152,158,53,0.45)" }}
                        aria-hidden="true"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
