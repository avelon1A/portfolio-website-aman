const experiences = [
  {
    role: "Android Developer (SDE1)",
    company: "Bebetta",
    period: "Sep 2025 – Present",
    location: "Bengaluru",
    responsibilities: [
      "Working on modern cross-platform mobile technologies supporting Android and iOS",
      "Implementing analytics systems using Firebase Analytics and MoEngage",
      "Integrating monetization features including banner and interstitial ads",
      "Building in-app purchase flows to unlock premium features",
      "Implementing multilingual localization support",
      "Collaborating closely with product and backend teams to deliver features",
    ],
  },
  {
    role: "Android & Backend Developer",
    company: "Advanced Millennium Technologies",
    period: "2023 – July 2025",
    location: "Bengaluru",
    responsibilities: [
      "Developed a healthcare mobile application from the ground up",
      "Implemented modern Android architecture patterns (MVVM, Clean Architecture)",
      "Built navigation and efficient data handling systems",
      "Integrated networking systems for service booking features",
      "Debugged and optimized application performance by 15%",
      "Wrote automated test cases improving code quality through testing tools",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 timeline-line hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-10">
                <div className="timeline-dot absolute left-0 top-8 hidden md:block" />

                <div className="glass rounded-2xl p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-slate-500 mt-2 md:mt-0 md:text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400">
                        <span className="text-indigo-400 mt-1.5 flex-shrink-0">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="2" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
