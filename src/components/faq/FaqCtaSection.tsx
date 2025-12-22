import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function FaqCtaSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div
            className="mx-auto w-full max-w-5xl rounded-3xl border"
            style={{ borderColor: "rgba(74,71,70,0.14)" }}
          >
            <div className="px-8 py-10 sm:px-12 sm:py-12">
              <div className="grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                    next step
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#4a4746] sm:text-2xl">
                    request a scope discussion
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4a4746]/75">
                    Send your site requirements and timelines. We’ll respond with
                    clear deliverables and a practical support approach.
                  </p>
                </div>

                <div className="md:col-span-4 md:flex md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ backgroundColor: "#989e35" }}
                  >
                    contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
