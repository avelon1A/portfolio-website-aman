import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OpenSourcePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-indigo-400 transition-colors mb-8">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="mb-6">
              <span className="section-label">Open Source Library</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Network Logger <span className="gtext">SDK</span>
            </h1>
            <p className="text-slate-500 text-lg mb-2">
              A premium, Chucker-inspired network monitoring tool for Kotlin Multiplatform
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="tag">Kotlin</span>
              <span className="tag tag-cyan">KMP</span>
              <span className="tag tag-violet">Compose Multiplatform</span>
              <span className="tag tag-emerald">MavenCentral</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="https://github.com/avelon1A/network-logger" target="_blank" rel="noopener noreferrer" className="btn-p">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a href="https://central.sonatype.com/search?q=io.github.avelon1a" target="_blank" rel="noopener noreferrer" className="btn-s">
                MavenCentral
              </a>
            </div>

            <div className="card card-featured p-6 md:p-8 mb-10">
              <h2 className="text-lg font-bold text-white mb-4">Installation</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-[0.6875rem] text-slate-600 uppercase tracking-wider font-medium mb-2">Version Catalog</p>
                  <div className="code-block">
                    <span className="cm"># libs.versions.toml</span>{"\n"}
                    <span className="kw">[versions]</span>{"\n"}
                    network-logger = <span className="str">&quot;1.0.0&quot;</span>{"\n"}
                    <span className="kw">[libraries]</span>{"\n"}
                    network-logger = &#123; <span className="fn">module</span> = <span className="str">&quot;io.github.avelon1a:network-logger&quot;</span>, <span className="fn">version.ref</span> = <span className="str">&quot;network-logger&quot;</span> &#125;
                  </div>
                </div>

                <div>
                  <p className="text-[0.6875rem] text-slate-600 uppercase tracking-wider font-medium mb-2">build.gradle.kts</p>
                  <div className="code-block">
                    <span className="fn">dependencies</span> &#123;{"\n"}
                    {"    "}<span className="fn">implementation</span>(libs.network.logger){"\n"}
                    &#125;
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                {
                  icon: "🔔",
                  title: "Quick Access",
                  desc: "Persistent notification with a live request counter for instant access from any screen.",
                },
                {
                  icon: "📊",
                  title: "Advanced Metrics",
                  desc: "Dedicated dashboard with success rate, latency trends (line chart), and traffic density (bar chart).",
                },
                {
                  icon: "🎨",
                  title: "Premium UI",
                  desc: "Modern Indigo/Teal aesthetic with dark mode support and glassmorphism elements.",
                },
                {
                  icon: "🔍",
                  title: "Deep Inspection",
                  desc: "View full request/response headers and bodies with status-colored badges.",
                },
                {
                  icon: "📈",
                  title: "Performance Insights",
                  desc: "Automatically identifies and highlights the slowest endpoints in your application.",
                },
                {
                  icon: "🌐",
                  title: "KMP Ready",
                  desc: "Built for Kotlin Multiplatform — commonMain UI, androidMain hooks, iOS-ready structure.",
                },
              ].map((f) => (
                <div key={f.title} className="card p-5">
                  <div className="text-xl mb-2">{f.icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="card p-6 md:p-8 mb-10">
              <h2 className="text-lg font-bold text-white mb-5">Quick Start</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-indigo-400 font-medium mb-2">1. Initialize the SDK</p>
                  <div className="code-block">
                    <span className="kw">class</span> <span className="type">MyApplication</span> : <span className="type">Application</span>() &#123;{"\n"}
                    {"    "}<span className="kw">override fun</span> <span className="fn">onCreate</span>() &#123;{"\n"}
                    {"        "}<span className="kw">super</span>.<span className="fn">onCreate</span>(){"\n"}
                    {"        "}<span className="type">NetworkLoggerProvider</span>.logger.<span className="fn">initialize</span>(<span className="kw">this</span>){"\n"}
                    {"    "}&#125;{"\n"}
                    &#125;
                  </div>
                </div>

                <div>
                  <p className="text-xs text-indigo-400 font-medium mb-2">2. Install Ktor Interceptor</p>
                  <div className="code-block">
                    <span className="kw">val</span> client = <span className="type">HttpClient</span> &#123;{"\n"}
                    {"    "}<span className="fn">install</span>(<span className="type">NetworkLoggerPlugin</span>) &#123;{"\n"}
                    {"        "}logger = <span className="type">NetworkLoggerProvider</span>.logger{"\n"}
                    {"        "}filter = &#123; request {"\n"}
                    {"            "}!request.url.<span className="fn">toString</span>().<span className="fn">contains</span>(<span className="str">&quot;analytics.com&quot;</span>){"\n"}
                    {"        "}&#125;{"\n"}
                    {"    "}&#125;{"\n"}
                    &#125;
                  </div>
                </div>

                <div>
                  <p className="text-xs text-indigo-400 font-medium mb-2">3. Log WebSocket Activity</p>
                  <div className="code-block">
                    <span className="kw">val</span> wsLogger = <span className="type">WebSocketLogger</span>(<span className="type">NetworkLoggerProvider</span>.logger){"\n"}
                    {"\n"}
                    wsLogger.<span className="fn">logConnected</span>(url){"\n"}
                    wsLogger.<span className="fn">logMessageReceived</span>(url, text){"\n"}
                    wsLogger.<span className="fn">logMessageSent</span>(url, text)
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mb-10">
              <h2 className="text-lg font-bold text-white mb-4">Project Structure</h2>
              <div className="code-block text-xs leading-loose">
                <span className="type">commonMain</span><span className="cm">/</span> — Core logic, data structures, main UI (Compose Multiplatform){"\n"}
                <span className="type">androidMain</span><span className="cm">/</span> — Android initialization, Notification Launcher, Standalone Activity{"\n"}
                <span className="type">iosMain</span><span className="cm">/</span> — iOS-specific hooks (ready for implementation)
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="https://github.com/avelon1A" target="_blank" rel="noopener noreferrer" className="btn-p">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
