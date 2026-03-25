import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubRepos from "@/components/GitHubRepos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />

        <section className="relative py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="section-label">GitHub</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Open source <span className="gtext">contributions</span>
              </h2>
            </div>
            <GitHubRepos />
            <div className="mt-8">
              <a href="https://github.com/avelon1A?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-s text-xs">
                View All Repos
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
