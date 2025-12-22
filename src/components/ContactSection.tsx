import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      {/* divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-black/10" />

      {/* light pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_25%_25%,black_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* subtle brand sweep */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand-primary/12 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary/65">
              contact
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-secondary sm:text-5xl">
              let’s build a safer,
              <span className="text-brand-primary"> stronger site</span>
            </h2>

            {/* accent line (reactive) */}
            <div className="mt-5 h-[3px] w-[140px] rounded-full bg-brand-primary transition group-hover:w-[160px]" />

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-brand-secondary/75">
              keep it simple. send your scope, location, and timeline — we’ll respond with the next
              steps. for direct email:{" "}
              <a
                href="mailto:info@phogoleresources.co.za"
                className="font-semibold text-brand-secondary underline underline-offset-4 decoration-brand-primary/60 hover:decoration-brand-primary transition"
              >
                info@phogoleresources.co.za
              </a>
            </p>

            <ContactForm />
          </div>

          {/* RIGHT — HOVERED VISUAL CARD */}
          <div className="hidden lg:block lg:col-span-5">
            <div
              className="
                group relative h-[640px] overflow-hidden
                rounded-[28px] border border-black/10 bg-black
                transition
                hover:-translate-y-[2px]
                hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)]
              "
            >
              {/* image zoom */}
              <Image
                src="/images/contact/contact-bg.jpg"
                alt="Site operations background"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="
                  object-cover
                  transition-transform duration-[1400ms] ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10 transition-opacity group-hover:opacity-90" />

              {/* soft glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/25 blur-3xl opacity-60 transition group-hover:opacity-85" />

              {/* copy */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75 transition group-hover:text-white">
                  phogole resources
                </p>
                <p className="mt-2 text-lg font-extrabold text-white">
                  safety-first. precise delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-black/10" />
    </section>
  );
}
