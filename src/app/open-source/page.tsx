import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GitHubRepos from "@/components/GitHubRepos";

export default function OpenSourcePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
              <span className="section-tag">Open Source</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4">
                Open Source <span className="gradient-text">Library & Projects</span>
              </h1>
              <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
                A collection of open source projects and contributions focused on 
                Android development, Kotlin ecosystem, and mobile engineering tools.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 md:p-12 mb-16">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">About My Open Source Work</h2>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    I actively contribute to open source and have built several Android applications 
                    and utilities shared publicly on GitHub. My projects span mobile app development, 
                    Android SDK integrations, and development tools.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Below you&apos;ll find my publicly available repositories, including Android applications 
                    built with Kotlin and Java, chat SDK integrations, and various mobile development experiments.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">36+</div>
                  <div className="text-sm text-slate-500">Public Repos</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">Kotlin</div>
                  <div className="text-sm text-slate-500">Primary Language</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">Android</div>
                  <div className="text-sm text-slate-500">Core Focus</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              All Repositories
            </h2>
            <GitHubRepos />

            <div className="text-center mt-12">
              <a
                href="https://github.com/amntoppo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
