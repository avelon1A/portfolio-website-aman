export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <span>&copy; {new Date().getFullYear()} Aman Toppo</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/avelon1A" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aman-toppo-320917214/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">LinkedIn</a>
          <a href="/open-source" className="hover:text-slate-400 transition-colors">Open Source</a>
        </div>
      </div>
    </footer>
  );
}
