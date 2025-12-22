import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "groundwater monitoring",
    desc: "monitoring and reporting that supports compliance and operational decisions.",
    image: "/images/services/service-01.jpg",
    tag: "water & compliance",
  },
  {
    title: "minerals exploration & beneficiation",
    desc: "field support for exploration workflows, sampling, and beneficiation assistance.",
    image: "/images/services/service-02.jpg",
    tag: "exploration support",
  },
  {
    title: "underground secondary support",
    desc: "support services delivered with a safety-first mindset and professional execution.",
    image: "/images/services/service-03.jpg",
    tag: "underground",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white">
      {/* section divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />

      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_25%_25%,black_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary/65">
              our services
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-secondary sm:text-4xl">
              clean, focused services that get the job done
            </h2>

            {/* accent line (no JS animation) */}
            <div className="mt-5 h-[3px] w-[92px] rounded-full bg-brand-primary" />

            <p className="mt-6 text-[15px] leading-7 text-brand-secondary/75">
              built for real site conditions — safety-first delivery, clear reporting, and
              dependable execution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-black hover:brightness-95 transition"
            >
              view all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black/5 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* image */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0 opacity-95 transition group-hover:opacity-85" />

                {/* tag */}
                <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  {s.tag}
                </div>

                {/* subtle glow on hover */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/25 blur-3xl opacity-60 transition group-hover:opacity-85" />
              </div>

              {/* content */}
              <div className="bg-white px-6 py-6">
                <h3 className="text-lg font-extrabold text-brand-secondary">{s.title}</h3>

                <p className="mt-2 text-sm leading-6 text-brand-secondary/70">{s.desc}</p>

                <div className="mt-5 h-[2px] w-10 rounded-full bg-brand-primary" />
              </div>
            </article>
          ))}
        </div>

        {/* bottom cue */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-brand-primary" />
          <p className="text-sm font-semibold text-brand-secondary/70">
            want a quote? visit contact — we reply fast.
          </p>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-px bg-black/10" />
    </section>
  );
}
