"use client";

import { useState, useEffect } from "react";
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";
import Reveal from "@/components/Reveal";
import { playHoverSound } from "@/lib/sounds";

const langColors: Record<string, string> = {
  Kotlin: "#A97BFF",
  Java: "#ED8B00",
  Swift: "#F05138",
  Python: "#3572A5",
  JavaScript: "#F1E05A",
  TypeScript: "#3178C6",
  "C++": "#F34B7D",
  "C#": "#178600",
  HTML: "#E34C26",
  MDX: "#FCB32C",
};

const hiddenRepos = ["avelon1A", "important-andorid-dependency", "docs"];

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubRepos("avelon1A").then((data) => {
      setRepos(data.filter((r) => !hiddenRepos.includes(r.name)));
    });
  }, []);

  const handleHover = (id: string) => {
    if (hovered !== id) {
      playHoverSound();
      setHovered(id);
      setTimeout(() => setHovered(null), 150);
    }
  };

  if (repos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-xs text-[var(--text-tertiary)]">Unable to load repositories.</p>
      </div>
    );
  }

  return (
    <div className="bento bento-3">
      {repos.slice(0, 9).map((repo: GitHubRepo, i: number) => (
        <Reveal key={repo.id} animation="fade-up" delay={i * 50}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 group block h-full"
            onMouseEnter={() => handleHover(String(repo.id))}
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h3 className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                {repo.name}
              </h3>
              <svg className="w-3 h-3 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] group-hover:rotate-45 transition-all duration-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

            <p className="text-[0.6875rem] text-[var(--text-tertiary)] mb-2.5 line-clamp-2 min-h-[1.75rem]">
              {repo.description || "No description"}
            </p>

            <div className="flex items-center gap-2.5 text-[0.625rem] text-[var(--text-tertiary)]">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: langColors[repo.language] || "#8b949e" }} />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-0.5">
                  <svg className="w-2.5 h-2.5 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25z" />
                  </svg>
                  {repo.stargazers_count}
                </span>
              )}
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
