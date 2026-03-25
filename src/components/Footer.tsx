export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="footer-link">&copy; {new Date().getFullYear()} Aman Toppo</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/avelon1A" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/aman-toppo-320917214/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="/open-source" className="footer-link">Library</a>
        </div>
      </div>
    </footer>
  );
}
