export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden grid-bg">
      <div className="orb orb-indigo w-[500px] h-[500px] -top-20 -left-20 anim-float" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-10 -right-10 anim-float" style={{ animationDelay: "2s" }} />
      <div className="orb orb-violet w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 anim-float" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="anim-fade-up">
          <span className="tag">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-8 mb-6 anim-fade-up d1 leading-[1.1]">
          Hi, I&apos;m <br className="sm:hidden" />
          <span className="gtext">Aman Toppo</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-light mb-2 anim-fade-up d2">
          Mobile Engineer
        </p>

        <p className="text-base text-slate-500 max-w-lg mx-auto mb-10 anim-fade-up d3 leading-relaxed">
          Specializing in Android development, Kotlin ecosystem, and cross-platform
          mobile technologies. Building scalable apps with clean architecture.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12 anim-fade-up d4">
          {["Android", "Kotlin", "Jetpack Compose", "KMP", "Clean Architecture"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 anim-fade-up d5">
          <a href="#projects" className="btn-p">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-s">
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-5 mt-12 anim-fade-in d7">
          {[
            { href: "https://github.com/avelon1A", label: "GitHub", icon: (
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            )},
            { href: "https://www.linkedin.com/in/aman-toppo-320917214/", label: "LinkedIn", icon: (
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            )},
            { href: "mailto:amanavelon@gmail.com", label: "Email", icon: (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )},
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-slate-600 hover:text-white transition-colors duration-300"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
