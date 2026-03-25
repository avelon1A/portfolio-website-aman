const roles = [
  {
    role: "Android Developer (SDE1)",
    company: "Bebetta",
    period: "Sep 2025 – Present",
    location: "Bengaluru",
    items: [
      "Cross-platform features with Kotlin Multiplatform for Android & iOS",
      "Analytics integration with Firebase Analytics and MoEngage",
      "Monetization — ads, in-app purchases, premium flows",
      "Multilingual localization for multiple markets",
    ],
  },
  {
    role: "Android & Backend Developer",
    company: "Advanced Millennium Technologies",
    period: "2023 – Jul 2025",
    location: "Bengaluru",
    items: [
      "Healthcare mobile application from concept to production",
      "MVVM and Clean Architecture implementation",
      "Performance optimization — 15% improvement through profiling",
      "Automated testing improving code quality metrics",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-10">
          <span className="section-label">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Professional <span className="accent-text">journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-3 bottom-3 tl-line hidden md:block" />

          <div className="space-y-8">
            {roles.map((r, i) => (
              <div key={i} className="relative md:pl-10">
                <div className="tl-dot absolute left-[12px] top-[14px] hidden md:block" />

                <div className="glass p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">{r.role}</h3>
                      <p className="text-xs text-[var(--accent)] font-medium">{r.company}</p>
                    </div>
                    <div className="text-[0.6875rem] text-[var(--text-tertiary)] mt-1 sm:mt-0 sm:text-right">
                      {r.period} · {r.location}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {r.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="feat-dot" />
                        <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
