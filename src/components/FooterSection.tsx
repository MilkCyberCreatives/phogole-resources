import Link from "next/link";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-secondary text-white">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-5">
            <div className="inline-block transform-gpu transition hover:-translate-y-[1px] hover:opacity-95">
              <img
                src="/brand/main_logo.svg"
                alt="Phogole Resources"
                className="h-16 w-auto select-none"
                style={{ filter: "brightness(0) invert(1)" }}
                loading="lazy"
              />
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
              groundwater monitoring, minerals exploration & beneficiation, and
              underground secondary support — delivered with a safety-first mindset.
            </p>

            <div className="mt-5 space-y-2 text-sm text-white/85">
              <p>
                <a
                  href="mailto:info@phogoleresources.co.za"
                  className="underline underline-offset-4 decoration-white/30 transition hover:text-white hover:decoration-white"
                >
                  info@phogoleresources.co.za
                </a>
              </p>

              <p>
                <a
                  href="tel:0837127329"
                  className="inline-block transform-gpu text-white/85 transition hover:text-white hover:translate-x-[1px]"
                >
                  083 712 7329
                </a>
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">
              quick links
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-flex transform-gpu items-center text-white/80 transition hover:text-white hover:translate-x-[2px]"
                >
                  home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="inline-flex transform-gpu items-center text-white/80 transition hover:text-white hover:translate-x-[2px]"
                >
                  about
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="inline-flex transform-gpu items-center text-white/80 transition hover:text-white hover:translate-x-[2px]"
                >
                  services
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="inline-flex transform-gpu items-center text-white/80 transition hover:text-white hover:translate-x-[2px]"
                >
                  faq
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="inline-flex transform-gpu items-center text-white/80 transition hover:text-white hover:translate-x-[2px]"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CORE SERVICES + LINKEDIN */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">
              core services
            </p>

            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="transform-gpu transition hover:text-white hover:translate-x-[2px]">
                groundwater monitoring
              </li>
              <li className="transform-gpu transition hover:text-white hover:translate-x-[2px]">
                minerals exploration & beneficiation
              </li>
              <li className="transform-gpu transition hover:text-white hover:translate-x-[2px]">
                underground secondary support
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex transform-gpu items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 transition hover:-translate-y-[1px] hover:bg-white/10 hover:text-white active:scale-[0.99]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452z" />
                </svg>
                linkedin
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            © {year} phogole resources. all rights reserved.
          </p>

          <p className="text-xs text-white/60">
            website developed by{" "}
            <a
              href="https://milkcybercreatives.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/30 transition hover:text-white hover:decoration-white"
            >
              milk cyber creatives
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
