import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-800/80 bg-[#070b16] py-12 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-display text-sm font-bold text-white tracking-tight">
            Nachiketa NR <span className="text-slate-500 font-normal">| Full Stack Engineer</span>
          </p>
          <p className="font-mono text-xs text-slate-500">
            Crafted with React 19, Redux Toolkit, Tailwind CSS, & JetBrains Mono.
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/Nachi12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/nachiketa12/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:nrnachi34@gmail.com"
            className="hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
          <a
            href="tel:+919380552034"
            className="hover:text-indigo-400 transition-colors"
          >
            +91-9380552034
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
