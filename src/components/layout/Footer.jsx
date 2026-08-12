import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#242424] bg-[#050505] py-8 text-[#A1A1AA]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#F5F5F5] bg-[#111111] border border-[#242424] px-2 py-0.5 rounded">
            NR
          </span>
          <span className="font-sans text-xs font-semibold text-[#F5F5F5]">
            Nachiketa NR <span className="text-[#71717A] font-normal">| Full Stack Developer</span>
          </span>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs text-[#71717A]">
          <a
            href="https://github.com/Nachi12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F5F5] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/nachiketa12/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F5F5] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:nrnachi34@gmail.com"
            className="hover:text-[#F5F5F5] transition-colors"
          >
            Email
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
