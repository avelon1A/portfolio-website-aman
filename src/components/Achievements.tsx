export default function Achievements() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <span className="section-label">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Recognition & <span className="gtext">leadership</span>
          </h2>
        </div>

        <div className="card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Compose Facilitator</h3>
              <p className="text-xs text-indigo-400 font-medium mb-2">Android Lead — College</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Served as Android lead during college, guiding teams in development projects, 
                coordinating work, and providing technical mentorship to fellow students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
