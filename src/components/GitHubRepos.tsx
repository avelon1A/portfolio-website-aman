import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";

const languageColors: Record<string, string> = {
  Kotlin: "#A97BFF",
  Java: "#ED8B00",
  Swift: "#F05138",
  Python: "#3572A5",
  JavaScript: "#F1E05A",
  TypeScript: "#3178C6",
  "C#": "#178600",
  C: "#555555",
  HTML: "#E34C26",
  CSS: "#563d7c",
};

export default async function GitHubRepos() {
  const repos = await fetchGitHubRepos("amntoppo");

  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Unable to load repositories at this time.</p>
        <a
          href="https://github.com/amntoppo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-4 inline-flex"
        >
          View on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.slice(0, 12).map((repo: GitHubRepo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl p-6 card-hover group block"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors truncate pr-2">
              {repo.name}
            </h3>
            <svg
              className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>

          <p className="text-sm text-slate-500 mb-4 line-clamp-2 min-h-[2.5rem]">
            {repo.description || "No description available"}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-600">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: languageColors[repo.language] || "#8b949e" }}
                />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25z" />
                </svg>
                {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM2 8.5a6 6 0 1112 0 6 6 0 01-12 0zm16.5 0a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z" />
                </svg>
                {repo.forks_count}
              </span>
            )}
          </div>

          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {repo.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
