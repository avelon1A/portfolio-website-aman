"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog/posts";
import Reveal from "@/components/Reveal";

const categoryColors: Record<string, string> = {
  Kotlin: "#7C3AED",
  Compose: "#2563EB",
  KMP: "#059669",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="mb-12">
          <span className="section-label">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] mb-4">
            Android <span className="accent-text">Development</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            In-depth guides, tutorials, and best practices for Android development.
            From Kotlin fundamentals to advanced architecture patterns.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} animation="fade-up" delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <article className="glass h-full p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-2 py-0.5 text-[0.6875rem] font-medium rounded"
                      style={{
                        background: `${categoryColors[post.category] || "#646cff"}20`,
                        color: categoryColors[post.category] || "#646cff",
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[0.6875rem] text-[var(--text-tertiary)]">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                    <time className="text-[0.6875rem] text-[var(--text-tertiary)]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-[0.6875rem] text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-tertiary)]">
            More posts coming soon. Follow me on{" "}
            <a
              href="https://github.com/avelon1A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              GitHub
            </a>{" "}
            for updates.
          </p>
        </div>
      </div>
    </main>
  );
}
