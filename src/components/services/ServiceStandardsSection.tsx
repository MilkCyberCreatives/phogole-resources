import Reveal from "../ui/Reveal";

const standards = [
  {
    title: "safety-first",
    text: "Work is carried out with discipline and accountability, aligned to site requirements.",
  },
  {
    title: "structured reporting",
    text: "Clear documentation and reporting that keeps progress visible and decisions informed.",
  },
  {
    title: "consistent delivery",
    text: "Reliable timelines and professional execution across every workstream and environment.",
  },
];

export default function ServiceStandardsSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                standards
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
                how we deliver
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
                Our approach stays consistent: safety-led execution, structured reporting, and
                dependable delivery.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {standards.map((item, idx) => (
                  <Reveal key={item.title} delayMs={idx * 80}>
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
                        {item.title}
                      </h3>

                      <div
                        className="mt-3 h-1 w-10 rounded-full transition-all duration-200"
                        style={{ backgroundColor: "#989e35" }}
                        aria-hidden="true"
                      />

                      <p className="mt-3 text-sm leading-relaxed text-[#4a4746]/75">
                        {item.text}
                      </p>

                      {/* subtle bottom accent (no shadow, no layout change) */}
                      <div
                        className="mt-5 h-px w-full opacity-0 transition-opacity duration-200 hover:opacity-100"
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
