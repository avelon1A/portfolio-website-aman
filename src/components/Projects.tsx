const projects = [
  {
    title: "Bebetta",
    description:
      "A cross-platform mobile application supporting Android and iOS designed with an offline-first architecture.",
    features: [
      "Multi-module architecture designed for scalability",
      "Real-time communication using WebSockets",
      "Multilingual support and localization",
      "Modern animated mobile interfaces",
      "Integration of Ads, In-App Purchases, and analytics",
    ],
    tags: ["Android", "iOS", "Kotlin", "WebSockets", "Firebase", "MoEngage"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/search?q=bebetta&c=apps&hl=en_IN",
        icon: "playstore",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/bebetta-join-sports-community/id6502454456",
        icon: "apple",
      },
    ],
  },
  {
    title: "Pacto – Project Manager App",
    description:
      "A mobile application designed to manage room rents and projects efficiently.",
    features: [
      "Structured architecture improving code maintainability by 60%",
      "Increased development efficiency by 30%",
      "Offline-first data storage",
      "Seamless server synchronization",
      "Remote data management through backend services",
    ],
    tags: ["Android", "Kotlin", "Room", "REST APIs", "MVVM"],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Production applications built with modern Android technologies, 
            clean architecture, and a focus on performance and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-8 card-hover gradient-border"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {project.links.length > 0 && (
                  <div className="flex gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 transition-colors"
                        title={link.label}
                      >
                        {link.icon === "playstore" ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag text-xs">
                    {tag}
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
