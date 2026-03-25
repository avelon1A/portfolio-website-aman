export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Building Mobile Experiences That <span className="gradient-text">Matter</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-400 leading-relaxed text-lg">
              Mobile Engineer with 2.5 years of professional experience building 
              production mobile applications. I focus on scalable architectures, 
              modern mobile frameworks, and continuous performance improvements.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Passionate about clean code, testing, and maintainability. I enjoy 
              working on challenging engineering problems and building impactful 
              mobile products used by real users.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Currently working at <span className="text-indigo-400 font-medium">Bebetta</span> as 
              an Android Developer (SDE1), focusing on cross-platform mobile technologies, 
              analytics integration, and monetization features.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "2.5+", icon: "⚡" },
              { label: "Apps in Production", value: "2+", icon: "📱" },
              { label: "Performance Boost", value: "15%", icon: "🚀" },
              { label: "Maintainability", value: "60%", icon: "🔧" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
