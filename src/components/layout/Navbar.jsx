import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab, selectActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'

const navItems = [
  { id: 'projects', label: 'Work' },
  { id: 'methodology', label: 'Engineering' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(selectActiveTab)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (id) => {
    dispatch(setActiveTab(id))
    setMobileMenuOpen(false)
    const elem = document.getElementById(id)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#242424] bg-[#050505]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <span className="font-mono text-xs font-bold bg-[#111111] border border-[#242424] text-[#F5F5F5] px-2 py-0.5 rounded transition group-hover:border-[#383838]">
              NR
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-sans text-sm font-semibold text-[#F5F5F5] tracking-tight group-hover:text-white">
                Nachiketa NR
              </span>
              <span className="hidden sm:inline text-xs text-[#71717A]">•</span>
              <span className="font-mono text-[11px] text-[#71717A]">Full Stack Developer</span>
            </div>
          </button>
        </div>

        {/* Center/Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs font-medium transition-colors relative py-1 ${
                  isActive ? 'text-[#F5F5F5] font-semibold' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[15px] h-[2px] bg-[#22C55E]" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Action Links: GitHub & LinkedIn */}
        <div className="hidden lg:flex items-center gap-4 border-l border-[#242424] pl-5 font-mono text-xs text-[#A1A1AA]">
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
          <button
            type="button"
            onClick={handleResumePreview}
            className="ml-2 rounded border border-[#242424] bg-[#111111] px-2.5 py-1 text-xs text-[#F5F5F5] hover:border-[#383838] transition-colors"
          >
            Resume PDF
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded border border-[#242424] bg-[#0A0A0A] text-[#A1A1AA] md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#242424] bg-[#050505] px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-sans text-xs py-2 transition-colors border-b border-[#111111] ${
                  activeTab === item.id ? 'text-[#F5F5F5] font-semibold' : 'text-[#A1A1AA]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
              <a href="https://github.com/Nachi12" target="_blank" rel="noreferrer" className="hover:text-white">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/nachiketa12/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn ↗</a>
              <button onClick={handleResumePreview} className="text-[#22C55E]">Resume PDF</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
