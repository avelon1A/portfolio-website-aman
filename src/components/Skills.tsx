"use client";

import Reveal from "@/components/Reveal";
import { playHoverSound } from "@/lib/sounds";

const cats = [
  {
    title: "Languages",
    items: ["Kotlin", "Java", "Swift", "Python"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: "#646cff",
  },
  {
    title: "Frameworks",
    items: ["Jetpack Compose", "Ktor", "Spring Boot", "KMP"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    color: "#a78bfa",
  },
  {
    title: "Architecture",
    items: ["MVVM", "MVI", "Clean Architecture", "Multi-Module"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "#61dafb",
  },
  {
    title: "Testing",
    items: ["Unit Testing", "UI Testing", "Code Coverage", "Profiling"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: "#f97316",
  },
  {
    title: "CI/CD & DevOps",
    items: ["GitHub Actions", "Bitrise", "Jenkins", "Docker"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    title: "Data & APIs",
    items: ["Room", "SQLite", "REST", "WebSockets", "Firebase"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    color: "#10b981",
  },
  {
    title: "Tools",
    items: ["Android Studio", "Git", "Postman", "Google Maps SDK"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.42 3.61a1.5 1.5 0 00-2.23-1.62L3.7 17.14m14.54-8.17l5.42-3.61a1.5 1.5 0 00.34-2.52l-4.72-2.83a1.5 1.5 0 00-2.23.64l-5.42 3.61" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.54 14.69l-5.42 3.61a1.5 1.5 0 00-2.23 0L4.47 14.69m13.07 0l.38 4.78a1.5 1.5 0 01-2.23 1.62l-5.42-3.61m9.44-5.42l-5.42 3.61" />
      </svg>
    ),
    color: "#ec4899",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="mb-10">
          <span className="section-label">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Technical <span className="accent-text">stack</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map((c, i) => (
            <Reveal key={c.title} animation="fade-up" delay={i * 80}>
              <div
                className="glass p-6 group cursor-default"
                onMouseEnter={playHoverSound}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="icon-glow"
                    style={{ color: c.color }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {c.items.map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 group/item"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: c.color,
                          boxShadow: `0 0 6px ${c.color}40`,
                        }}
                      />
                      <span className="text-sm text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: c.color }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
