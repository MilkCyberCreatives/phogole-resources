import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "what services does phogole resources provide?",
    a: "we provide groundwater monitoring, minerals exploration and beneficiation support, and underground secondary support — delivered safely and professionally.",
  },
  {
    q: "do you work on-site at mines and remote locations?",
    a: "yes. our teams are site-ready and can operate in mining environments and remote locations, depending on project scope and requirements.",
  },
  {
    q: "how do you ensure safety and compliance?",
    a: "we follow a safety-first approach, align with site rules and client requirements, and provide clear reporting for transparency and compliance support.",
  },
  {
    q: "how do we request a quote or start a project?",
    a: "use the contact page or email us at info@phogoleresources.co.za. we’ll confirm your scope and respond with the next steps.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden">
      {/* optimized background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/faq/faq-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* solid overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/92 via-brand-secondary/82 to-brand-secondary/70" />

      {/* section divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* LEFT: intro */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              faq
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              quick answers before you hire us
            </h2>

            <div className="mt-5 h-[3px] w-[110px] rounded-full bg-brand-primary" />

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/80">
              clear, professional answers — kept short and to the point.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-primary" />
              <p className="text-sm font-semibold text-white/85">
                email: info@phogoleresources.co.za
              </p>
            </div>
          </div>

          {/* RIGHT: accordion */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl lg:ml-auto">
              <div className="grid gap-4">
                {faqs.map((item, idx) => (
                  <details
                    key={item.q}
                    className="
                      group relative overflow-hidden rounded-2xl
                      border border-white/15 bg-white
                      shadow-[0_18px_50px_rgba(0,0,0,0.18)]
                      transition
                      hover:-translate-y-[2px]
                      hover:shadow-[0_26px_70px_rgba(0,0,0,0.26)]
                    "
                    open={idx === 0}
                  >
                    {/* subtle highlight sheen on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl" />
                    </div>

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left">
                      <span className="text-sm font-extrabold text-brand-secondary sm:text-base transition group-hover:text-brand-secondary">
                        {item.q}
                      </span>

                      <span
                        className="
                          inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                          bg-brand-primary text-black/80
                          transition
                          group-hover:scale-[1.04]
                          group-hover:brightness-95
                        "
                      >
                        <Plus className="h-5 w-5 group-open:hidden" />
                        <Minus className="h-5 w-5 hidden group-open:block" />
                      </span>
                    </summary>

                    <div className="px-5 pb-5 text-sm leading-7 text-brand-secondary/75">
                      {item.a}
                    </div>

                    {/* bottom accent (brightens on hover) */}
                    <div className="h-[2px] w-full bg-brand-primary/60 transition group-hover:bg-brand-primary" />
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-px bg-black/10" />
    </section>
  );
}
