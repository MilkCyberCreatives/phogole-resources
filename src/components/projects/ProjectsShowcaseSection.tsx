"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";

type Category =
  | "all"
  | "groundwater"
  | "water quality"
  | "exploration"
  | "underground"
  | "reporting";

type Project = {
  title: string;
  category: Exclude<Category, "all">;
  location: string;
  scope: string[];
  outcome: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "groundwater monitoring support",
    category: "groundwater",
    location: "south africa",
    scope: ["field execution", "monitoring support", "structured reporting"],
    outcome: "consistent site-ready monitoring support with clear reporting formats.",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "water quality sampling support",
    category: "water quality",
    location: "south africa",
    scope: ["sampling support", "documentation", "traceability"],
    outcome: "disciplined sampling support aligned to clean handling and reporting.",
    image: "/images/projects/project-02.jpg",
  },
  {
    title: "exploration sampling assistance",
    category: "exploration",
    location: "south africa",
    scope: ["field coordination", "sample collection", "site execution"],
    outcome: "reliable field support to keep exploration workstreams moving.",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "underground secondary support delivery",
    category: "underground",
    location: "south africa",
    scope: ["safety-first", "site standards", "support execution"],
    outcome: "support delivered with disciplined routines and safety-led execution.",
    image: "/images/projects/project-04.jpg",
  },
  {
    title: "compliance-led field reporting packs",
    category: "reporting",
    location: "south africa",
    scope: ["report structure", "traceability", "stakeholder updates"],
    outcome: "reporting formats that keep progress visible and decisions informed.",
    image: "/images/projects/project-05.jpg",
  },
  {
    title: "site-ready team deployment support",
    category: "reporting",
    location: "south africa",
    scope: ["planning", "field delivery", "communication"],
    outcome: "professional field deployment with consistent delivery expectations.",
    image: "/images/projects/project-06.jpg",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "all" },
  { key: "groundwater", label: "groundwater" },
  { key: "water quality", label: "water quality" },
  { key: "exploration", label: "exploration" },
  { key: "underground", label: "underground" },
  { key: "reporting", label: "reporting" },
];

export default function ProjectsShowcaseSection() {
  const [active, setActive] = useState<Category>("all");

  const visible = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
                projects
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
                a clean view of our field execution
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
                Below are representative workstreams that show how we deliver. We keep the details
                confidential by default — detailed packs are shared on request.
              </p>
            </div>

            {/* Stats */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-3">
                <Stat label="focus" value="mining support" />
                <Stat label="delivery" value="site-ready" />
                <Stat label="reporting" value="structured" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delayMs={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f.key === active;

              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className="
                    rounded-full border px-4 py-2
                    text-xs font-semibold uppercase tracking-[0.16em]
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                  "
                  style={{
                    borderColor: isActive ? "rgba(152,158,53,0.55)" : "rgba(74,71,70,0.18)",
                    background: isActive ? "rgba(152,158,53,0.10)" : "transparent",
                    color: isActive ? "#4a4746" : "rgba(74,71,70,0.80)",
                  }}
                  onMouseEnter={(e) => {
                    // hover effect without changing layout/design
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(152,158,53,0.40)";
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(152,158,53,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(74,71,70,0.18)";
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((p, idx) => (
            <Reveal key={p.title} delayMs={idx * 80}>
              <article
                className="
                  group overflow-hidden rounded-3xl border bg-white
                  transition-colors duration-200
                "
                style={{ borderColor: "rgba(74,71,70,0.14)" }}
                onMouseEnter={(e) => {
                  // hover border polish only (no movement, no shadow)
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(152,158,53,0.28)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,71,70,0.14)";
                }}
              >
                {/* Image */}
                <div className="relative h-52 w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    // perf hint: ensures stable render & smoother paint
                    priority={idx === 0 && active === "all"}
                  />

                  {/* overlay (hover polish: opacity only, no layout change) */}
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-200 group-hover:opacity-[0.08]" />

                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.88)",
                        color: "#4a4746",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-[#4a4746]">
                      {p.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4a4746]/60">
                      {p.location}
                    </span>
                  </div>

                  <div
                    className="mt-4 h-1 w-14 rounded-full transition-opacity duration-200 group-hover:opacity-[0.95]"
                    style={{ backgroundColor: "#989e35", opacity: 0.85 }}
                    aria-hidden="true"
                  />

                  <p className="mt-4 text-sm leading-relaxed text-[#4a4746]/75">
                    <span className="font-semibold text-[#4a4746]">outcome: </span>
                    {p.outcome}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.scope.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border px-3 py-1 text-[11px] font-medium transition-colors duration-200"
                        style={{
                          borderColor: "rgba(74,71,70,0.18)",
                          color: "rgba(74,71,70,0.78)",
                        }}
                        // hover polish only (same shape/size)
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.borderColor =
                            "rgba(152,158,53,0.35)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.borderColor =
                            "rgba(74,71,70,0.18)";
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-2xl border bg-white px-4 py-4 transition-colors duration-200"
      style={{ borderColor: "rgba(74,71,70,0.14)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(152,158,53,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,71,70,0.14)";
      }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a4746]/60">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[#4a4746]">{value}</p>
    </div>
  );
}
