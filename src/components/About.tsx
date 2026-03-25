export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="section-label">About</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Building mobile experiences <br />
            <span className="gtext">that reach millions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5">
            <p className="text-slate-400 leading-relaxed text-base">
              Mobile Engineer with 2.5 years of professional experience building 
              production Android applications. I focus on scalable architectures, 
              modern mobile frameworks, and performance optimization.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Passionate about clean code, testing, and building impactful products 
              used by real users. Currently working at{" "}
              <span className="text-indigo-400 font-medium">Bebetta</span> on 
              cross-platform mobile technologies with Kotlin Multiplatform.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              I also build open source tools — my{" "}
              <a href="/open-source" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Network Logger SDK
              </a>{" "}
              is a KMP library published on MavenCentral for monitoring HTTP & WebSocket traffic.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {[
              { v: "2.5+", l: "Years Experience" },
              { v: "3+", l: "Production Apps" },
              { v: "15%", l: "Perf Improvement" },
              { v: "60%", l: "Code Quality Boost" },
            ].map((s) => (
              <div key={s.l} className="stat-box">
                <div className="text-xl font-bold gtext">{s.v}</div>
                <div className="text-[0.6875rem] text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
