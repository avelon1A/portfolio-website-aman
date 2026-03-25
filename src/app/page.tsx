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
        <Experience />
        <Projects />

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-tag">GitHub</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Open Source <span className="gradient-text">Contributions</span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                Explore my open source projects and contributions on GitHub.
              </p>
            </div>
            <GitHubRepos />
            <div className="text-center mt-10">
              <a
                href="https://github.com/amntoppo?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View All Repositories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
