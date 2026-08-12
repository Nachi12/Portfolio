import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { setActiveTab, selectActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'

const navItems = [
  { id: 'home', label: 'Overview' },
  { id: 'projects', label: 'Case Studies' },
  { id: 'about', label: 'Engineering' },
  { id: 'experience', label: 'Experience' },
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b1020]/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20 transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Nachiketa NR Home"
          >
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0b1020] font-mono text-xs font-bold tracking-tight text-white transition group-hover:bg-opacity-90">
              NR
            </div>
          </button>

          <div className="flex flex-col">
            <span className="font-display text-sm font-bold text-white tracking-tight">Nachiketa NR</span>
            <span className="font-mono text-[11px] text-slate-400">Full Stack Engineer</span>
          </div>

          {/* Available for Opportunities pulse badge */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-mono font-medium text-emerald-400 ml-2 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for Full-Time Roles</span>
          </div>
        </div>

        {/* Desktop Navigation Links with Animated Indicator */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/60 p-1.5 backdrop-blur-md" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition duration-200 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-indigo-600/80 shadow-md shadow-indigo-500/25 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Recruiter CTA Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={handleResumePreview}
            className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-2 font-mono text-xs font-semibold text-indigo-300 transition duration-200 hover:bg-indigo-500/20 hover:text-white active:scale-95 shadow-sm"
          >
            <svg className="h-3.5 w-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Resume</span>
          </button>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 px-3.5 py-2 font-sans text-xs font-semibold text-white shadow-md shadow-indigo-500/25 transition duration-200 hover:from-indigo-400 hover:to-violet-500 active:scale-95"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>PDF</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-slate-800 bg-[#0b1020] px-4 pb-4 pt-2 lg:hidden"
        >
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  activeTab === item.id ? 'bg-indigo-500/20 text-indigo-300 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={handleResumePreview}
                className="flex-1 rounded-xl border border-indigo-500/30 bg-indigo-500/10 py-2.5 text-center text-xs font-semibold text-indigo-300"
              >
                Preview Resume
              </button>
              <a
                href={resumeUrl}
                download
                className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-center text-xs font-semibold text-white"
              >
                Download PDF
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
