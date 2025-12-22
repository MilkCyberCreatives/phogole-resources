import Reveal from "../ui/Reveal";

const steps = [
  {
    title: "scope and site alignment",
    text: "Confirm scope, timelines, site requirements, and reporting expectations.",
  },
  {
    title: "field execution",
    text: "Disciplined delivery with safety-first routines and practical site execution.",
  },
  {
    title: "reporting and close-out",
    text: "Clear structured updates and close-out documentation for traceability and review.",
  },
];

export default function ProjectsTimelineSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                delivery
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
                how projects run
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
                A simple delivery model that keeps work predictable, traceable, and aligned to site
                standards.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div
                className="
                  relative rounded-3xl border bg-white p-8 sm:p-10
                  transition-colors duration-200
                  hover:border-[#989e35]/30
                "
                style={{ borderColor: "rgba(74,71,70,0.14)" }}
              >
                {/* vertical line */}
                <div
                  className="absolute left-10 top-10 bottom-10 w-px"
                  style={{ backgroundColor: "rgba(74,71,70,0.12)" }}
                  aria-hidden="true"
                />

                <div className="space-y-8">
                  {steps.map((s, idx) => (
                    <Reveal key={s.title} delayMs={idx * 90}>
                      <div className="group relative pl-12">
                        <div
                          className="
                            absolute left-[34px] top-1.5 h-3 w-3 rounded-full
                            transition-opacity duration-200
                            group-hover:opacity-90
                          "
                          style={{ backgroundColor: "#989e35", opacity: 1 }}
                          aria-hidden="true"
                        />
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/60">
                          step {idx + 1}
                        </p>
                        <h3 className="mt-2 text-base font-semibold text-[#4a4746]">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#4a4746]/75">
                          {s.text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
