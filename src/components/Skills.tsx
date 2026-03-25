"use client";

import Reveal from "@/components/Reveal";
import { playHoverSound } from "@/lib/sounds";
import { useState } from "react";

const cats = [
  { title: "Languages", items: ["Kotlin", "Java", "Swift", "Python"], icon: "💻" },
  { title: "Frameworks", items: ["Jetpack Compose", "Ktor", "Spring Boot", "KMP"], icon: "🏗" },
  { title: "Architecture", items: ["MVVM", "MVI", "Clean Architecture", "Multi-Module"], icon: "📐" },
  { title: "Testing", items: ["Unit Testing", "UI Testing", "Code Coverage", "Profiling"], icon: "🧪" },
  { title: "CI/CD & DevOps", items: ["GitHub Actions", "Bitrise", "Jenkins", "Docker"], icon: "⚙️", wide: true },
  { title: "Data & APIs", items: ["Room", "SQLite", "REST", "WebSockets", "Firebase"], icon: "🗄" },
  { title: "Tools", items: ["Android Studio", "Git", "Postman", "Google Maps SDK"], icon: "🛠" },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleHover = (id: string) => {
    if (hovered !== id) {
      playHoverSound();
      setHovered(id);
      setTimeout(() => setHovered(null), 150);
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="mb-10">
          <span className="section-label">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Technical <span className="accent-text">stack</span>
          </h2>
        </Reveal>

        <div className="bento bento-4">
          {cats.map((c, i) => (
            <Reveal key={c.title} animation="fade-up" delay={i * 60}>
              <div className={`glass p-5 icon-bounce-hover ${c.wide ? "bento-wide" : ""}`} onMouseEnter={() => handleHover(c.title)}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{c.icon}</span>
                  <h3 className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider">{c.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.items.map((s) => (
                    <span key={s} className="pill text-[0.6875rem]">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
