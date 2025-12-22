import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="w-full">
        <div className="grid min-h-[78vh] lg:min-h-[86vh] grid-cols-1 lg:grid-cols-2">
          {/* LEFT: optimized image */}
          <div className="relative overflow-hidden bg-black">
            <Image
              src="/images/hero/hero-bg.jpg"
              alt="Mining site operations background"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            {/* overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
            <div className="absolute inset-0 ring-1 ring-black/10" />

            {/* subtle brand glow */}
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-primary/25 blur-3xl" />
          </div>

          {/* RIGHT: content */}
          <div className="relative bg-brand-secondary text-white">
            {/* soft pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] [background-size:22px_22px]" />

            <div className="relative mx-auto flex h-full max-w-xl flex-col justify-center px-6 py-14 lg:px-10">
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                precision support for{" "}
                <span className="text-brand-primary">safer mining</span>
              </h1>

              <p className="mt-5 text-[16px] leading-7 text-white/80">
                Groundwater monitoring, minerals exploration & beneficiation, and underground
                secondary support — delivered safely, professionally, and on time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-black hover:brightness-95 transition"
                >
                  contact us <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="mailto:info@phogoleresources.co.za"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  <Mail className="h-4 w-4 text-brand-primary" />
                  email us
                </a>
              </div>

              <div className="mt-7 text-xs text-white/60">
                fast • compliant • site-ready teams
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
