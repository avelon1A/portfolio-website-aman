export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="section-label">About</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Building mobile that <span className="accent-text">scales</span>
          </h2>
        </div>

        <div className="bento bento-2">
          <div className="glass p-6 md:p-8">
            <p className="text-[var(--text-secondary)] leading-[1.7] text-[0.9375rem]">
              Mobile Engineer with 2.5 years of professional experience building
              production Android applications. I focus on scalable architectures,
              modern mobile frameworks, and performance optimization.
            </p>
            <p className="text-[var(--text-secondary)] leading-[1.7] text-[0.9375rem] mt-4">
              Passionate about clean code, testing, and building impactful products
              used by real users. I also build open source tools — my{" "}
              <a href="/open-source" className="text-[var(--accent)] hover:underline underline-offset-2">
                Network Logger SDK
              </a>{" "}
              is published on MavenCentral.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "2.5+", l: "Years Experience" },
              { v: "3+", l: "Production Apps" },
              { v: "15%", l: "Perf Improvement" },
              { v: "60%", l: "Code Quality Boost" },
            ].map((s) => (
              <div key={s.l} className="stat-box">
                <div className="text-xl font-bold text-[var(--text-primary)]">{s.v}</div>
                <div className="text-[0.6875rem] text-[var(--text-tertiary)] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
