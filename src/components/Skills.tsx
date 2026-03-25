const cats = [
  { title: "Languages", items: ["Kotlin", "Java", "Swift", "Python"], span: false },
  { title: "Frameworks", items: ["Jetpack Compose", "Ktor", "Spring Boot", "KMP"], span: false },
  { title: "Architecture", items: ["MVVM", "MVI", "Clean Architecture", "Multi-Module"], span: false },
  { title: "Testing", items: ["Unit Testing", "UI Testing", "Code Coverage", "Profiling"], span: false },
  { title: "CI/CD & DevOps", items: ["GitHub Actions", "Bitrise", "Jenkins", "Docker"], span: true },
  { title: "Data & APIs", items: ["Room", "SQLite", "REST", "WebSockets", "Firebase"], span: false },
  { title: "Tools", items: ["Android Studio", "Git", "Postman", "Google Maps SDK"], span: false },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="section-label">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Technical <span className="accent-text">stack</span>
          </h2>
        </div>

        <div className="bento bento-4">
          {cats.map((c) => (
            <div key={c.title} className={`glass p-5 ${c.span ? "bento-wide" : ""}`}>
              <h3 className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {c.items.map((s) => (
                  <span key={s} className="pill text-[0.6875rem]">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
