"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-2xl shadow-indigo-500/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold gtext tracking-tight">
          AT
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <Link href="/open-source" className="nav-link">
            Open Source
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-slate-400 transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-slate-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-slate-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-indigo-500/10 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-400 hover:text-white py-1 text-sm">
              {l.label}
            </a>
          ))}
          <Link href="/open-source" onClick={() => setOpen(false)} className="text-slate-400 hover:text-white py-1 text-sm">
            Open Source
          </Link>
        </div>
      )}
    </nav>
  );
}
