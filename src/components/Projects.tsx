const projects = [
  {
    title: "Network Logger SDK",
    subtitle: "Open Source Library — MavenCentral",
    desc: "A premium, Chucker-inspired network monitoring tool for Kotlin Multiplatform. Real-time HTTP & WebSocket traffic inspection with advanced metrics dashboard, glassmorphism UI, and Ktor interceptor support.",
    features: [
      "Persistent notification launcher with live request counter",
      "Dashboard with success rate, latency trends & traffic density charts",
      "Deep inspection of request/response headers and bodies",
      "Auto-identifies slowest endpoints in your application",
      "Ktor plugin integration with URL filtering",
    ],
    tags: ["Kotlin", "KMP", "Ktor", "Compose Multiplatform", "MavenCentral"],
    tagColors: ["", "tag-cyan", "tag-violet", "", "tag-emerald"],
    links: [
      { label: "GitHub", url: "https://github.com/avelon1A/network-logger" },
      { label: "MavenCentral", url: "https://central.sonatype.com/search?q=io.github.avelon1a" },
    ],
    featured: true,
    install: `implementation("io.github.avelon1a:network-logger:1.0.0")`,
  },
  {
    title: "prepStack",
    subtitle: "Tech Interview Prep App",
    desc: "A comprehensive Android app for technical interview preparation covering 9 domains — Android, Backend, Java, Kotlin, C++, OOPS, DSA, SQL, and HR. Clean Architecture with multi-module structure.",
    features: [
      "9 technical domains with extensive question banks",
      "MCQ and Theory questions with detailed explanations",
      "Quiz mode with random question generation",
      "Bookmark system with Room database",
      "Offline-first with AdMob monetization",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Room", "MVVM"],
    tagColors: ["", "", "tag-cyan", "tag-emerald", "tag-violet"],
    links: [
      { label: "GitHub", url: "https://github.com/avelon1A/prepStack" },
    ],
    featured: true,
  },
  {
    title: "MyCompose",
    subtitle: "Jetpack Compose Showcase",
    desc: "An Android app showcasing modern Jetpack Compose development with Dagger Hilt, Retrofit, comprehensive testing (unit + UI), GitHub Actions CI/CD, and Codecov integration.",
    features: [
      "Modern declarative UI with Jetpack Compose",
      "Dagger Hilt dependency injection",
      "Retrofit networking with proper state management",
      "GitHub Actions CI/CD pipeline",
      "Codecov integration for test coverage monitoring",
    ],
    tags: ["Kotlin", "Compose", "Hilt", "Retrofit", "GitHub Actions"],
    tagColors: ["", "", "tag-violet", "tag-cyan", "tag-amber"],
    links: [
      { label: "GitHub", url: "https://github.com/avelon1A/MyCompose" },
      { label: "Download APK", url: "https://avelon1a.github.io/MyCompose/app-debug.apk" },
    ],
    featured: false,
  },
  {
    title: "ComposeMultiplatform",
    subtitle: "Coding Platform Frontend",
    desc: "A multi-platform coding platform built with Kotlin Multiplatform. Users can learn, practice, and improve their coding skills across web, iOS, Android, and desktop.",
    features: [
      "Multi-platform support (Web, iOS, Android, Desktop)",
      "Interactive coding challenges in multiple languages",
      "Real-time code editor environment",
      "Community discussions and user profiles",
      "Responsive mobile-friendly design",
    ],
    tags: ["Kotlin", "KMP", "Compose", "Multiplatform"],
    tagColors: ["", "tag-cyan", "", "tag-violet"],
    links: [
      { label: "GitHub", url: "https://github.com/avelon1A/ComposeMultiplatform" },
    ],
    featured: false,
  },
  {
    title: "MyPokedex",
    subtitle: "Pokedex App",
    desc: "A Pokedex app built with Jetpack Compose, Koin for dependency injection, and Room database for local data management with remote data synchronization.",
    features: [
      "Jetpack Compose UI",
      "Koin dependency injection",
      "Room database for offline storage",
      "Remote data management",
    ],
    tags: ["Kotlin", "Compose", "Koin", "Room"],
    tagColors: ["", "", "tag-violet", "tag-emerald"],
    links: [
      { label: "GitHub", url: "https://github.com/avelon1A/MyPokedex" },
    ],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="section-label">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="gtext">work</span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`card p-6 md:p-8 ${p.featured ? "card-featured" : ""}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{p.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{p.subtitle}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tag text-[0.6875rem] hover:border-indigo-400"
                        >
                          {l.label}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{p.desc}</p>

                  <div className="space-y-1.5 mb-4">
                    {p.features.map((f, i) => (
                      <div key={i} className="feat-item">
                        <span className="feat-dot" />
                        <span className="text-sm text-slate-500">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, i) => (
                      <span key={t} className={`tag text-[0.6875rem] ${p.tagColors[i] || ""}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {p.install && (
                  <div className="lg:w-80 flex-shrink-0">
                    <p className="text-[0.6875rem] text-slate-600 mb-1.5 uppercase tracking-wider font-medium">Install</p>
                    <div className="code-block text-xs">
                      <span className="fn">implementation</span>(<span className="str">&quot;{p.install}&quot;</span>)
                    </div>
                    <p className="text-[0.6875rem] text-slate-600 mt-3">
                      Published on MavenCentral
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
