export default function Achievements() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bento bento-2">
          <div className="glass p-6">
            <span className="section-label">Achievements</span>
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">Compose Facilitator</h3>
            <p className="text-xs text-[var(--accent)] font-medium mb-2">Android Lead — College</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Led Android development teams during college, coordinating projects
              and providing technical mentorship to fellow students.
            </p>
          </div>

          <div className="glass p-6">
            <span className="section-label">Education</span>
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">B.Tech — Information Technology</h3>
            <p className="text-xs text-[var(--text-tertiary)] font-medium mb-1">Government Engineering College Jagdalpur</p>
            <div className="flex items-center gap-3 mt-2 text-[0.6875rem] text-[var(--text-tertiary)]">
              <span>2019 – 2023</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
              <span>CGPA: 7.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
