export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Recognition & <span className="gradient-text">Leadership</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 card-hover">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Compose Facilitator</h3>
              <p className="text-indigo-400 font-medium mb-3">Android Lead — College</p>
              <p className="text-slate-400 leading-relaxed">
                Served as an Android lead during college, guiding teams in Android 
                development projects, coordinating work, and providing technical mentorship 
                to fellow students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
