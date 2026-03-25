const roles = [
  {
    role: "Android Developer (SDE1)",
    company: "Bebetta",
    period: "Sep 2025 – Present",
    location: "Bengaluru",
    items: [
      "Building cross-platform mobile features supporting Android & iOS with Kotlin Multiplatform",
      "Implementing analytics with Firebase Analytics and MoEngage for user behavior insights",
      "Integrating monetization — banner ads, interstitial ads, and in-app purchase flows",
      "Multilingual localization support for multiple markets",
      "Collaborating with product and backend teams on feature delivery",
    ],
  },
  {
    role: "Android & Backend Developer",
    company: "Advanced Millennium Technologies",
    period: "2023 – July 2025",
    location: "Bengaluru",
    items: [
      "Developed a healthcare mobile application from concept to production",
      "Implemented modern Android architecture patterns — MVVM, Clean Architecture",
      "Built efficient navigation and data handling systems",
      "Integrated REST APIs for service booking workflows",
      "Optimized application performance by 15% through profiling and debugging",
      "Wrote automated test cases improving code quality metrics",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <span className="section-label">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Professional <span className="gtext">journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[18px] top-3 bottom-3 tl-line hidden md:block" />

          <div className="space-y-10">
            {roles.map((r, i) => (
              <div key={i} className="relative md:pl-12">
                <div className="tl-dot absolute left-3 top-3 hidden md:block" />

                <div className="card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-white">{r.role}</h3>
                      <p className="text-sm text-indigo-400 font-medium">{r.company}</p>
                    </div>
                    <div className="text-xs text-slate-600 mt-1 sm:mt-0 sm:text-right">
                      <div>{r.period}</div>
                      <div>{r.location}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {r.items.map((item, j) => (
                      <div key={j} className="feat-item">
                        <span className="feat-dot" />
                        <span className="text-sm text-slate-400 leading-relaxed">{item}</span>
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
