"use client";

import { useEffect } from "react";

export default function GlassMouseEffect() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>(".glass");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return null;
}
