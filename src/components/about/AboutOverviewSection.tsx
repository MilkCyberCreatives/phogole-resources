import Reveal from "../ui/Reveal";

const points = [
  {
    title: "safety-first execution",
    text: "Work is planned and delivered with disciplined checks, documentation, and accountability.",
  },
  {
    title: "field-ready teams",
    text: "Teams are aligned to site standards and prepared for practical execution in demanding environments.",
  },
  {
    title: "clear reporting",
    text: "Structured updates and reporting that keep progress visible and compliant.",
  },
];

export default function AboutOverviewSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
              overview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
              built for reliability on site
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
              Phogole Resources is a mining support partner focused on consistent delivery.
              Our approach is simple: disciplined execution, clear communication, and safety-led work.
            </p>

            <div className="mt-6 h-px w-full bg-[#4a4746]/10" />

            <p className="mt-6 text-sm text-[#4a4746]/75">
              We keep the work practical, traceable, and aligned to operational requirements.
            </p>
          </Reveal>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {points.map((p, idx) => (
                <Reveal key={p.title} delayMs={idx * 90}>
                  <div
                    className="
                      group h-full rounded-2xl border bg-white p-5
                      transition-transform duration-300 ease-out
                      hover:-translate-y-[2px]
                    "
                    style={{ borderColor: "rgba(74,71,70,0.14)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          h-2.5 w-2.5 rounded-full
                          transition-transform duration-300 ease-out
                          group-hover:scale-110
                        "
                        style={{ backgroundColor: "#989e35" }}
                      />
                      <h3 className="text-sm font-semibold text-[#4a4746]">
                        {p.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#4a4746]/75">
                      {p.text}
                    </p>

                    {/* tiny hover accent line (no shadow) */}
                    <div
                      className="mt-4 h-px w-full transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: "rgba(152,158,53,0.45)" }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Button placed under the cards (aligned to the right area like your screenshot) */}
            <Reveal delayMs={320}>
              <div className="mt-6 flex justify-end">
                <a
                  href="/docs/phogole-resources-company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center rounded-xl px-6 py-3
                    text-sm font-medium text-white
                    transition-transform duration-300 ease-out
                    hover:-translate-y-[1px] hover:opacity-95
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    active:translate-y-0
                  "
                  style={{ backgroundColor: "#989e35" }}
                >
                  view company profile
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
