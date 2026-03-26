import Link from "next/link";
import Footer from "@/components/Footer";

export default function OpenSourcePage() {
  return (
    <>
      <main className="min-h-screen pt-16">
        <section className="py-16 px-6">
          <div className="max-w-[900px] mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors mb-8">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Portfolio
            </Link>

            <div className="mb-4">
              <span className="section-label">Open Source Library</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] mb-3">
              Network Logger <span className="accent-text">SDK</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-base mb-6 max-w-xl leading-relaxed">
              A premium, Chucker-inspired network monitoring tool for Kotlin Multiplatform.
              Real-time HTTP & WebSocket traffic with advanced metrics.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {["Kotlin", "KMP", "Compose Multiplatform", "MavenCentral"].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              <a href="https://github.com/avelon1A/network-logger" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://central.sonatype.com/search?q=io.github.avelon1a" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                MavenCentral
              </a>
            </div>

            {/* Installation */}
            <div className="glass p-6 mb-6">
              <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Installation</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-[0.625rem] text-[var(--text-tertiary)] uppercase tracking-wider mb-1.5 font-medium">Version Catalog</p>
                  <div className="code-block">
                    <span className="cm"># libs.versions.toml</span>{"\n"}
                    <span className="kw">[versions]</span>{"\n"}
                    network-logger = <span className="str">&quot;1.0.0&quot;</span>{"\n"}
                    <span className="kw">[libraries]</span>{"\n"}
                    network-logger = &#123; <span className="fn">module</span> = <span className="str">&quot;io.github.avelon1a:network-logger&quot;</span>, <span className="fn">version.ref</span> = <span className="str">&quot;network-logger&quot;</span> &#125;
                  </div>
                </div>

                <div>
                  <p className="text-[0.625rem] text-[var(--text-tertiary)] uppercase tracking-wider mb-1.5 font-medium">build.gradle.kts</p>
                  <div className="code-block">
                    <span className="fn">dependencies</span> &#123;{"\n"}
                    {"    "}<span className="fn">implementation</span>(libs.network.logger){"\n"}
                    &#125;
                  </div>
                </div>
              </div>
            </div>

            {/* Features Bento */}
            <div className="bento bento-2 mb-6">
              {[
                { title: "Quick Access", desc: "Persistent notification with live request counter for instant access from any screen." },
                { title: "Advanced Metrics", desc: "Dashboard with success rate, latency trends (line chart), traffic density (bar chart)." },
                { title: "Premium UI", desc: "Modern Indigo/Teal aesthetic with dark mode support and glassmorphism elements." },
                { title: "Deep Inspection", desc: "Full request/response headers and bodies with status-colored badges." },
                { title: "Performance Insights", desc: "Automatically identifies and highlights the slowest endpoints." },
                { title: "KMP Ready", desc: "Built for Kotlin Multiplatform — commonMain, androidMain, iOS-ready." },
              ].map((f) => (
                <div key={f.title} className="glass p-4">
                  <h3 className="text-xs font-semibold text-[var(--text-primary)] mb-1">{f.title}</h3>
                  <p className="text-[0.6875rem] text-[var(--text-tertiary)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Start */}
            <div className="glass p-6 mb-6">
              <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-5">Quick Start</h2>

              <div className="space-y-5">
                <div>
                  <p className="text-[0.6875rem] text-[var(--accent)] font-medium mb-2">1. Initialize</p>
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
                  <p className="text-[0.6875rem] text-[var(--accent)] font-medium mb-2">2. Ktor Interceptor</p>
                  <div className="code-block">
                    <span className="kw">val</span> client = <span className="type">HttpClient</span> &#123;{"\n"}
                    {"    "}<span className="fn">install</span>(<span className="type">NetworkLoggerPlugin</span>) &#123;{"\n"}
                    {"        "}logger = <span className="type">NetworkLoggerProvider</span>.logger{"\n"}
                    {"        "}filter = &#123; req {"\n"}
                    {"            "}!req.url.<span className="fn">toString</span>().<span className="fn">contains</span>(<span className="str">&quot;analytics.com&quot;</span>){"\n"}
                    {"        "}&#125;{"\n"}
                    {"    "}&#125;{"\n"}
                    &#125;
                  </div>
                </div>

                <div>
                  <p className="text-[0.6875rem] text-[var(--accent)] font-medium mb-2">3. WebSocket Logging</p>
                  <div className="code-block">
                    <span className="kw">val</span> ws = <span className="type">WebSocketLogger</span>(<span className="type">NetworkLoggerProvider</span>.logger){"\n"}
                    ws.<span className="fn">logConnected</span>(url){"\n"}
                    ws.<span className="fn">logMessageReceived</span>(url, text){"\n"}
                    ws.<span className="fn">logMessageSent</span>(url, text)
                  </div>
                </div>
              </div>
            </div>

            {/* Project Structure */}
            <div className="glass p-6 mb-8">
              <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Project Structure</h2>
              <div className="code-block text-xs leading-loose">
                <span className="type">commonMain</span><span className="cm">/</span> — Core logic, UI (Compose Multiplatform){"\n"}
                <span className="type">androidMain</span><span className="cm">/</span> — Android init, Notification Launcher, Activity{"\n"}
                <span className="type">iosMain</span><span className="cm">/</span> — iOS hooks (ready for implementation)
              </div>
            </div>

            <div className="text-center">
              <a href="https://github.com/avelon1A" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
