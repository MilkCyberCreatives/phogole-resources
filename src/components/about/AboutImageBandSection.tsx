import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function AboutImageBandSection() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <Reveal>
          <div
            className="overflow-hidden rounded-3xl border bg-white"
            style={{ borderColor: "rgba(74,71,70,0.14)" }}
          >
            <div className="grid gap-0 sm:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Field support work"
                  fill
                  priority
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03] cursor-pointer"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/about-2.jpg"
                  alt="Compliance and reporting"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03] cursor-pointer"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/about-3.jpg"
                  alt="Operations support"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03] cursor-pointer"
                />
              </div>
            </div>

            <div className="h-1 w-full" style={{ backgroundColor: "#989e35" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
