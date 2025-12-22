"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        group
        fixed bottom-6 right-6 z-[999]
        inline-flex h-12 w-12 items-center justify-center
        rounded-full bg-brand-primary text-black
        shadow-[0_14px_40px_rgba(0,0,0,0.25)]
        transition
        hover:-translate-y-[2px]
        hover:shadow-[0_22px_70px_rgba(0,0,0,0.35)]
        active:translate-y-0
        active:scale-[0.97]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand-primary/60
        focus-visible:ring-offset-2
      "
    >
      {/* subtle glow */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-100">
        <span className="absolute -inset-4 rounded-full bg-brand-primary/25 blur-2xl" />
      </span>

      {/* icon motion */}
      <ArrowUp
        className="
          relative h-5 w-5
          transition-transform duration-300 ease-out
          group-hover:-translate-y-[2px]
        "
      />
    </button>
  );
}
