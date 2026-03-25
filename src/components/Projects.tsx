const projects = [
  {
    title: "Network Logger SDK",
    subtitle: "Open Source — MavenCentral",
    desc: "Chucker-inspired network monitoring for Kotlin Multiplatform. Real-time HTTP & WebSocket traffic inspection with metrics dashboard.",
    tags: ["Kotlin", "KMP", "Ktor", "Compose"],
    links: [
      { label: "GitHub", url: "https://github.com/avelon1A/network-logger" },
      { label: "MavenCentral", url: "https://central.sonatype.com/search?q=io.github.avelon1a" },
    ],
    install: `implementation("io.github.avelon1a:network-logger:1.0.0")`,
    featured: true,
  },
  {
    title: "prepStack",
    subtitle: "Tech Interview Prep",
    desc: "9-domain interview prep app. Clean Architecture, multi-module, offline-first with Room & AdMob.",
    tags: ["Kotlin", "Compose", "Room", "MVVM"],
    links: [{ label: "GitHub", url: "https://github.com/avelon1A/prepStack" }],
    featured: true,
  },
  {
    title: "MyCompose",
    subtitle: "Compose Showcase",
    desc: "Jetpack Compose with Hilt, Retrofit, GitHub Actions CI/CD, and Codecov.",
    tags: ["Compose", "Hilt", "CI/CD"],
    links: [{ label: "GitHub", url: "https://github.com/avelon1A/MyCompose" }],
    featured: false,
  },
  {
    title: "ComposeMultiplatform",
    subtitle: "Coding Platform",
    desc: "Multi-platform coding platform with KMP. Learn, practice, improve coding skills.",
    tags: ["KMP", "Compose", "Multiplatform"],
    links: [{ label: "GitHub", url: "https://github.com/avelon1A/ComposeMultiplatform" }],
    featured: false,
  },
  {
    title: "MyPokedex",
    subtitle: "Pokedex App",
    desc: "Pokedex with Jetpack Compose, Koin DI, and Room for offline storage.",
    tags: ["Compose", "Koin", "Room"],
    links: [{ label: "GitHub", url: "https://github.com/avelon1A/MyPokedex" }],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="section-label">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Featured <span className="accent-text">work</span>
          </h2>
        </div>

        <div className="bento bento-2">
          {/* Featured large card — Network Logger */}
          <div className="glass p-6 md:p-8 bento-wide">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{projects[0].title}</h3>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{projects[0].subtitle}</p>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                {projects[0].links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="pill text-[0.6875rem]">
                    {l.label}
                    <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{projects[0].desc}</p>

            <div className="code-block text-xs mb-4">
              <span className="cm">{"// build.gradle.kts"}</span>{"\n"}
              <span className="fn">implementation</span>(<span className="str">&quot;io.github.avelon1a:network-logger:1.0.0&quot;</span>)
            </div>

            <div className="flex flex-wrap gap-1.5">
              {projects[0].tags.map((t) => (
                <span key={t} className="pill text-[0.625rem]">{t}</span>
              ))}
            </div>
          </div>

          {/* prepStack — tall card */}
          <div className="glass p-6 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">{projects[1].title}</h3>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{projects[1].subtitle}</p>
              </div>
              <a href={projects[1].links[0].url} target="_blank" rel="noopener noreferrer" className="pill text-[0.625rem]">
                GitHub
              </a>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed flex-1">{projects[1].desc}</p>
            <div className="space-y-1.5 mb-4">
              {["9 tech domains", "Clean Architecture", "Offline-first", "AdMob monetization"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                  <span className="feat-dot" />
                  {f}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projects[1].tags.map((t) => (
                <span key={t} className="pill text-[0.625rem]">{t}</span>
              ))}
            </div>
          </div>

          {/* Small cards */}
          {projects.slice(2).map((p) => (
            <div key={p.title} className="glass p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">{p.title}</h3>
                <a href={p.links[0].url} target="_blank" rel="noopener noreferrer" className="pill text-[0.625rem]">
                  GitHub
                </a>
              </div>
              <p className="text-xs text-[var(--text-tertiary)] mb-3 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span key={t} className="pill text-[0.5625rem]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
