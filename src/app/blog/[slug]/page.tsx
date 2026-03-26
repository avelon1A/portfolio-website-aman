"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog/posts";
import Reveal from "@/components/Reveal";
import MvvmDiagram from "@/components/MvvmDiagram";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      router.push("/blog");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
    );

    post.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post, router]);

  if (!post) return null;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md sticky top-14 z-40">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-2">
            <Link
              href="/blog"
              className="text-xs text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="px-2 py-0.5 text-[0.6875rem] font-medium rounded"
              style={{
                background: `${
                  post.category === "Kotlin"
                    ? "#7C3AED"
                    : post.category === "Compose"
                      ? "#2563EB"
                      : "#059669"
                }20`,
                color:
                  post.category === "Kotlin"
                    ? "#7C3AED"
                    : post.category === "Compose"
                      ? "#2563EB"
                      : "#059669",
              }}
            >
              {post.category}
            </span>
            <time className="text-[0.6875rem] text-[var(--text-tertiary)]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-[0.6875rem] text-[var(--text-tertiary)]">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] mt-2">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar - Table of Contents */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-[220px]">
            <h3 className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-4">
              On this page
            </h3>
            <nav className="space-y-1">
              {post.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "text-[var(--accent)] bg-[var(--accent-dim)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile TOC Toggle */}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="lg:hidden mb-6 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-2"
          >
            <svg
              className={`w-4 h-4 transition-transform ${tocOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            Table of Contents
          </button>

          {tocOpen && (
            <nav className="lg:hidden mb-8 p-4 glass rounded-lg space-y-1">
              {post.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setTocOpen(false)}
                  className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "text-[var(--accent)] bg-[var(--accent-dim)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          )}

          <article className="prose prose-invert max-w-none">
            {post.sections.map((section, i) => (
              <Reveal key={section.id} animation="fade-up" delay={i * 50}>
                <section id={section.id} className="mb-12 scroll-mt-[220px]">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
                    {section.title}
                  </h2>
                  <div className="text-[var(--text-secondary)] leading-relaxed mb-6 whitespace-pre-line">
                    {section.content}
                  </div>
                  {section.code && (
                    <div className="relative group">
                      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(section.code!);
                          }}
                          className="text-[0.6875rem] text-[var(--text-tertiary)] hover:text-[var(--accent)] px-2 py-1 rounded bg-[var(--bg-raised)]"
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="overflow-x-auto text-sm leading-relaxed p-4 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)]">
                        <code className="text-[var(--text-secondary)]">
                          {section.code}
                        </code>
                      </pre>
                    </div>
                  )}
                  {section.diagram && !section.diagramComponent && (
                    <div className="relative">
                      <div className="mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                        </svg>
                        <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">Architecture Diagram</span>
                      </div>
                      <pre className="overflow-x-auto text-xs leading-relaxed p-4 rounded-lg bg-[var(--bg-raised)] border border-[var(--border)] font-mono">
                        <code className="text-[var(--text-secondary)]">
                          {section.diagram}
                        </code>
                      </pre>
                    </div>
                  )}
                  {section.diagramComponent === "mvvm" && (
                    <MvvmDiagram />
                  )}
                </section>
              </Reveal>
            ))}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <h3 className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="pill text-[0.6875rem]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            {blogPosts.findIndex((p) => p.slug === slug) > 0 && (
              <Link
                href={`/blog/${blogPosts[blogPosts.findIndex((p) => p.slug === slug) - 1].slug}`}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                ← {blogPosts[blogPosts.findIndex((p) => p.slug === slug) - 1].title}
              </Link>
            )}
            {blogPosts.findIndex((p) => p.slug === slug) < blogPosts.length - 1 && (
              <Link
                href={`/blog/${blogPosts[blogPosts.findIndex((p) => p.slug === slug) + 1].slug}`}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors ml-auto"
              >
                {blogPosts[blogPosts.findIndex((p) => p.slug === slug) + 1].title} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
