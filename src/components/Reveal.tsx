"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade" | "slide-left" | "slide-right" | "scale" | "blur-in";
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const animClass = {
    "fade-up": "reveal-fade-up",
    fade: "reveal-fade",
    "slide-left": "reveal-slide-left",
    "slide-right": "reveal-slide-right",
    scale: "reveal-scale",
    "blur-in": "reveal-blur",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
