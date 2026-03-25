"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Static glows */}
      <div className="hero-glow" style={{ top: "-10%", left: "30%" }} />
      <div className="hero-glow-secondary" style={{ bottom: "5%", right: "20%" }} />

      {/* Mouse-following glow */}
      <div ref={glowRef} className="mouse-glow" style={{ left: "50%", top: "50%" }} />

      <div className="relative max-w-[800px] mx-auto text-center z-10">
        <div className="anim-reveal">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-tertiary)] tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </span>
        </div>

        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.04em] leading-[1.05] mt-6 mb-4 anim-reveal d1">
          I build mobile<br />
          <span className="accent-text">experiences</span>
        </h1>

        <p className="text-lg text-[var(--text-secondary)] max-w-[520px] mx-auto mb-8 anim-reveal d2 leading-relaxed font-normal">
          Aman Toppo — Mobile Engineer specializing in Android, Kotlin, and
          cross-platform systems. Currently at{" "}
          <span className="text-[var(--text-primary)]">Bebetta</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 mb-10 anim-reveal d3">
          {["Android", "Kotlin", "Jetpack Compose", "KMP", "Clean Architecture"].map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 anim-reveal d4">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-5 mt-10 anim-fade d6">
          {[
            { href: "https://github.com/avelon1A", label: "GitHub" },
            { href: "https://www.linkedin.com/in/aman-toppo-320917214/", label: "LinkedIn" },
            { href: "mailto:amanavelon@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
