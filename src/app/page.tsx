import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubRepos from "@/components/GitHubRepos";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />

        <section className="relative py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <Reveal className="mb-10">
              <span className="section-label">GitHub</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
                Open source <span className="accent-text">repos</span>
              </h2>
            </Reveal>
            <GitHubRepos />
            <Reveal delay={100}>
              <div className="mt-6">
                <a href="https://github.com/avelon1A?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs">
                  All Repositories
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
