"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { playClickSound, playHoverSound, setSoundEnabled } from "@/lib/sounds";
import { useTheme } from "@/components/ThemeProvider";

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
  const [soundOn, setSoundOn] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("soundEnabled");
    return saved !== "false";
  });

  const { theme, toggleTheme } = useTheme();

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

  const toggleSound = () => {
    playClickSound();
    const newValue = !soundOn;
    setSoundOn(newValue);
    setSoundEnabled(newValue);
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

          <div className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onMouseEnter={() => handleNavHover(l.href)}>
                {l.label}
              </a>
            ))}
            <Link href="/open-source" className="nav-link" onMouseEnter={() => handleNavHover("library")}>
              Library
            </Link>
            <button
              onClick={toggleSound}
              onMouseEnter={() => handleNavHover("sound")}
              className="nav-link p-1"
              aria-label={soundOn ? "Disable sound" : "Enable sound"}
            >
              {soundOn ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </button>
            <button
              onClick={() => { playClickSound(); toggleTheme(); }}
              onMouseEnter={() => handleNavHover("theme")}
              className="nav-link p-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
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
          <button onClick={toggleSound} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 text-sm flex items-center gap-2">
            {soundOn ? "🔊 Sound On" : "🔇 Sound Off"}
          </button>
          <button onClick={() => { playClickSound(); toggleTheme(); }} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 text-sm flex items-center gap-2">
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
