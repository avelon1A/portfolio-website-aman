export default function Education() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <span className="section-label">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Academic <span className="gtext">background</span>
          </h2>
        </div>

        <div className="card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">B.Tech — Information Technology</h3>
              <p className="text-sm text-cyan-400 font-medium">Government Engineering College Jagdalpur</p>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600">
                <span>2019 – 2023</span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span>CGPA: 7.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
