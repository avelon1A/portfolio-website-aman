import Reveal from "@/components/Reveal";

export default function Achievements() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bento bento-2">
          <Reveal animation="slide-left" delay={0}>
            <div className="glass p-6 h-full">
              <span className="section-label">Achievements</span>
              <div className="flex items-start gap-3">
                <div className="icon-btn icon-glow flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Compose Facilitator</h3>
                  <p className="text-xs text-[var(--accent)] font-medium mb-2">Android Lead — College</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Led Android development teams during college, coordinating projects
                    and providing technical mentorship to fellow students.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="slide-right" delay={100}>
            <div className="glass p-6 h-full">
              <span className="section-label">Education</span>
              <div className="flex items-start gap-3">
                <div className="icon-btn icon-glow flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">B.Tech — Information Technology</h3>
                  <p className="text-xs text-[var(--text-tertiary)] font-medium mb-1">Government Engineering College Jagdalpur</p>
                  <div className="flex items-center gap-3 mt-2 text-[0.6875rem] text-[var(--text-tertiary)]">
                    <span>2019 – 2023</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
                    <span>CGPA: 7.5</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
