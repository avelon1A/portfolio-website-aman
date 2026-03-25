export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Aman Toppo. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/amntoppo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-400 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://in.linkedin.com/in/aman-toppo-b54a43305"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-400 transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="/open-source"
            className="text-slate-600 hover:text-slate-400 transition-colors text-sm"
          >
            Open Source
          </a>
        </div>
      </div>
    </footer>
  );
}
