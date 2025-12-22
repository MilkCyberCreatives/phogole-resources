import Image from "next/image";
import Link from "next/link";
import { Linkedin, Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/services", label: "services" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function MainHeader() {
  return (
    <header
      className="
        sticky top-0 z-[999]
        border-b border-black/10
        bg-white/85 backdrop-blur-xl
        supports-[backdrop-filter]:bg-white/70
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-[78px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Phogole Resources home">
            <Image
              src="/brand/main_logo.svg"
              alt="Phogole Resources"
              width={190}
              height={44}
              sizes="190px"
              className="h-[44px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-black/75 hover:text-black transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* LinkedIn (keep href as # if you haven't added the real link yet) */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black/[0.03] transition"
            >
              <Linkedin className="h-5 w-5 text-black/55" />
            </a>

            {/* Mobile menu (no JS) */}
            <details className="group lg:hidden relative">
              <summary
                className="list-none inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black/[0.03] transition"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 text-black/70 group-open:hidden" />
                <X className="h-5 w-5 text-black/70 hidden group-open:block" />
              </summary>

              {/* Dropdown */}
              <div className="absolute right-0 mt-3 w-[260px] rounded-2xl border border-black/10 bg-white p-3 shadow-lg">
                <div className="flex flex-col">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-3 text-[15px] font-semibold text-black/75 hover:bg-black/[0.04] hover:text-black transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
