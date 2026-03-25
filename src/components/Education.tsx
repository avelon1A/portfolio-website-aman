export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 card-hover">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">B.Tech – Information Technology</h3>
              <p className="text-cyan-400 font-medium">Government Engineering College Jagdalpur</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                <span>2019 – 2023</span>
                <span>CGPA: 7.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
