const cats = [
  {
    title: "Programming",
    items: ["Kotlin", "Java", "Swift", "Python"],
  },
  {
    title: "Frameworks & Architecture",
    items: ["Jetpack Compose", "Ktor", "Spring Boot", "MVVM", "MVI", "Clean Architecture"],
  },
  {
    title: "Testing & Quality",
    items: ["Unit Testing", "UI Testing", "Code Coverage", "Performance Profiling"],
  },
  {
    title: "CI/CD",
    items: ["GitHub Actions", "Bitrise", "Jenkins"],
  },
  {
    title: "Databases & APIs",
    items: ["Room", "SQLite", "REST APIs", "WebSockets"],
  },
  {
    title: "Tools",
    items: ["Android Studio", "Firebase", "Postman", "Git", "Docker", "Google Maps SDK"],
  },
  {
    title: "Other",
    items: ["KMP", "Agile", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="section-label">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical <span className="gtext">expertise</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cats.map((c) => (
            <div key={c.title} className="card p-5">
              <h3 className="text-sm font-semibold text-white mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {c.items.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
