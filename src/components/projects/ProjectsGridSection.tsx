import Reveal from "../ui/Reveal";

const projects = [
  {
    title: "groundwater monitoring support",
    meta: "field execution • reporting",
    description:
      "Support for monitoring programs with disciplined field processes and structured updates.",
  },
  {
    title: "water quality sampling support",
    meta: "sampling • documentation",
    description:
      "Field-ready sampling support with clean handling processes and traceable reporting.",
  },
  {
    title: "exploration support workstreams",
    meta: "field coordination • sampling",
    description:
      "Exploration support including field coordination and practical sampling execution.",
  },
  {
    title: "underground secondary support",
    meta: "safety-first • site standards",
    description:
      "Underground support delivered with a safety-led approach aligned to site requirements.",
  },
  {
    title: "compliance-led field reporting",
    meta: "structure • traceability",
    description:
      "Clear reporting formats that support compliance checks, reviews, and decision-making.",
  },
  {
    title: "site-ready team deployment",
    meta: "planning • execution",
    description:
      "Reliable field deployment with disciplined planning and consistent delivery.",
  },
];

export default function ProjectsGridSection() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
              projects
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
              representative workstreams
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
              This page is designed to stay clean and high-level. We can share
              detailed project packs on request.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delayMs={idx * 70}>
              <div
                className="
                  h-full rounded-2xl border bg-white p-6
                  transition-colors duration-200
                  will-change-transform
                  hover:border-[#989e35]/40
                "
                style={{ borderColor: "rgba(74,71,70,0.14)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/60">
                  {p.meta}
                </p>

                <h3 className="mt-3 text-base font-semibold text-[#4a4746]">
                  {p.title}
                </h3>

                <div
                  className="
                    mt-3 h-1 w-10 rounded-full
                    transition-opacity duration-200
                  "
                  style={{ backgroundColor: "#989e35", opacity: 0.85 }}
                  aria-hidden="true"
                />

                <p className="mt-3 text-sm leading-relaxed text-[#4a4746]/75">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
