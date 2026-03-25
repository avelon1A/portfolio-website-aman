const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Kotlin", "Java", "Swift", "Python"],
  },
  {
    title: "Frameworks & Architecture",
    icon: "🏗️",
    skills: ["Jetpack Compose", "Ktor", "Spring Boot", "MVVM", "MVI"],
  },
  {
    title: "Testing & Quality",
    icon: "🧪",
    skills: ["Unit Testing", "Code Coverage", "Performance Profiling"],
  },
  {
    title: "CI/CD",
    icon: "⚙️",
    skills: ["GitHub Actions", "Bitrise", "Jenkins"],
  },
  {
    title: "Databases & APIs",
    icon: "🗄️",
    skills: ["Room Database", "REST APIs", "WebSockets", "SQL"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Android Studio", "Firebase", "Postman", "Git", "Google Maps SDK"],
  },
  {
    title: "Other",
    icon: "🎯",
    skills: ["Agile", "Problem Solving", "Kotlin Multiplatform"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
