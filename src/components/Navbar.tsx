"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { playClickSound, playHoverSound } from "@/lib/sounds";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavHover = (id: string) => {
    if (hovered !== id) {
      playHoverSound();
      setHovered(id);
      setTimeout(() => setHovered(null), 150);
    }
  };

  const handleToggle = () => {
    playClickSound();
    setOpen(!open);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold text-[var(--text-primary)] tracking-tight">
          aman<span className="text-[var(--text-tertiary)]">.toppo</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onMouseEnter={() => handleNavHover(l.href)}>
              {l.label}
            </a>
          ))}
          <Link href="/open-source" className="nav-link" onMouseEnter={() => handleNavHover("library")}>
            Library
          </Link>
        </div>

        <button
          onClick={handleToggle}
          onMouseEnter={() => handleNavHover("menu")}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[var(--text-secondary)] transition-all duration-200 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--text-secondary)] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[var(--text-secondary)] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-[var(--border)] px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 text-sm">
              {l.label}
            </a>
          ))}
          <Link href="/open-source" onClick={() => setOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 text-sm">
            Library
          </Link>
        </div>
      )}
    </nav>
  );
}
