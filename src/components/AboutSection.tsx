import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* crisp section divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />

      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_25%_25%,black_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary/65">
              about phogole resources
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-secondary sm:text-4xl">
              focused support.
              <span className="text-brand-primary"> real site execution.</span>
            </h2>

            {/* accent line */}
            <div className="mt-5 h-[3px] w-[84px] rounded-full bg-brand-primary" />

            <p className="mt-6 text-[15px] leading-7 text-brand-secondary/75">
              We deliver groundwater monitoring, minerals exploration & beneficiation support,
              and underground secondary support — with safety-first delivery and clear reporting.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-black hover:brightness-95 transition"
              >
                more about us <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="text-xs font-semibold text-brand-secondary/60">
                fast • compliant • site-ready teams
              </div>
            </div>
          </div>

          {/* RIGHT: image grid (optimized) */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black/5">
                <div className="relative h-[220px] w-full sm:h-[260px]">
                  <Image
                    src="/images/about/about-01.jpg"
                    alt="Groundwater monitoring"
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-90 transition group-hover:opacity-75" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">groundwater monitoring</p>
                  <p className="mt-1 text-xs text-white/80">consistent monitoring and reporting</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black/5">
                <div className="relative h-[220px] w-full sm:h-[260px]">
                  <Image
                    src="/images/about/about-02.jpg"
                    alt="Minerals exploration support"
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-90 transition group-hover:opacity-75" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white">minerals exploration</p>
                  <p className="mt-1 text-xs text-white/80">field support and sampling workflows</p>
                </div>
              </div>

              {/* Card 3 wide */}
              <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black/5 sm:col-span-2">
                <div className="relative h-[250px] w-full sm:h-[320px]">
                  <Image
                    src="/images/about/about-03.jpg"
                    alt="Underground secondary support"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-black/0 opacity-95 transition group-hover:opacity-80" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-white">underground secondary support</p>
                    <p className="mt-1 text-xs text-white/80">
                      safety-first delivery in real site conditions
                    </p>
                  </div>

                  <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    professional reporting
                  </div>
                </div>
              </div>
            </div>

            {/* section cue */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-primary" />
              <p className="text-sm font-semibold text-brand-secondary/70">
                a focused team. a clean process. reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-px bg-black/10" />
    </section>
  );
}
