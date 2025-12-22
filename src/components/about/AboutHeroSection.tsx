import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function AboutHeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:pt-14">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                about phogole resources
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#4a4746] sm:text-4xl">
                disciplined mining support, built for safety and delivery
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4a4746]/80">
                We support mining operations with reliable field execution, clear reporting,
                and teams that understand site standards and accountability.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: "#989e35" }}
                >
                  contact our team
                </a>

                <a
                  href="/services"
                  className="rounded-xl border px-5 py-3 text-sm font-medium text-[#4a4746] transition hover:bg-[#4a4746]/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ borderColor: "rgba(74,71,70,0.18)" }}
                >
                  view services
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden rounded-3xl border bg-[#f7f7f7]"
                style={{ borderColor: "rgba(74,71,70,0.14)" }}
              >
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src="/images/about/about-hero.jpg"
                    alt="Phogole Resources mining support operations"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="h-1 w-full" style={{ backgroundColor: "#989e35" }} />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 h-px w-full bg-[#4a4746]/10" />
      </div>
    </section>
  );
}
