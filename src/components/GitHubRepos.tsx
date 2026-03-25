import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";

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

export default async function GitHubRepos() {
  const repos = await fetchGitHubRepos("avelon1A");
  const filtered = repos.filter((r) => !hiddenRepos.includes(r.name));

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 text-sm">Unable to load repositories.</p>
        <a href="https://github.com/avelon1A" target="_blank" rel="noopener noreferrer" className="btn-s mt-4 inline-flex text-xs">
          View on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {filtered.slice(0, 12).map((repo: GitHubRepo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card p-4 group block"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">
              {repo.name}
            </h3>
            <svg className="w-3.5 h-3.5 text-slate-700 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>

          <p className="text-xs text-slate-600 mb-3 line-clamp-2 min-h-[2rem]">
            {repo.description || "No description"}
          </p>

          <div className="flex items-center gap-3 text-[0.6875rem] text-slate-700">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColors[repo.language] || "#8b949e" }} />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25z" />
                </svg>
                {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
                {repo.forks_count}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
