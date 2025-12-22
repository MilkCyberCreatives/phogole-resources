"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  y = 12,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        shown ? "opacity-100" : "opacity-0",
        className,
      ].join(" ")}
      style={{
        transitionDelay: `${delayMs}ms`,
        transform: shown ? "translateY(0px)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
