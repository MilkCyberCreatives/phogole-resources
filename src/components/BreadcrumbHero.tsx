import Link from "next/link";
import Reveal from "./ui/Reveal";

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  crumbs: Crumb[];
  title: string;
  description?: string;
  imageAlt?: string;
};

export default function BreadcrumbHero({
  crumbs,
  title,
  description,
  imageAlt = "Phogole Resources page header",
}: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background image (shared across all pages) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/BreadcrumbHero.jpg)" }}
        aria-label={imageAlt}
        role="img"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-semibold uppercase tracking-[0.18em]"
          >
            <ol className="flex flex-wrap items-center gap-2 text-white/70">
              {crumbs.map((c, idx) => {
                const isLast = idx === crumbs.length - 1;

                return (
                  <li key={`${c.label}-${idx}`} className="flex items-center gap-2">
                    {c.href && !isLast ? (
                      <Link href={c.href} className="transition hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-white" : ""}>{c.label}</span>
                    )}

                    {!isLast && <span className="select-none text-white/40">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              {description}
            </p>
          )}

          <div
            className="mt-8 h-1 w-20 rounded-full"
            style={{ backgroundColor: "#989e35" }}
          />
        </Reveal>
      </div>

      <div className="relative h-px w-full bg-white/15" />
    </section>
  );
}
