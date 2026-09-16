import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { setActiveTab, selectActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useSmoothScroll } from '../ui/SmoothScrollProvider'
import Magnetic from '../ui/Magnetic'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'

const navStages = [
  { id: 'intro', num: '01', label: 'Identity' },
  { id: 'capabilities', num: '02', label: 'Capabilities' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'contact', num: '05', label: 'Contact' },
]

export const Navbar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(selectActiveTab)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { triggerNavClickLock } = useActiveSection()
  const { scrollTo } = useSmoothScroll()
  const { scrollYProgress } = useScroll()

  const handleNavClick = (id) => {
    triggerNavClickLock()
    dispatch(setActiveTab(id))
    setMobileMenuOpen(false)
    scrollTo(`#${id}`)
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#242424] bg-[#050505]/90 backdrop-blur-md transition-all duration-300">
      {/* Scroll Progress Bar Top Accent */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#22C55E] origin-left z-50"
      />

      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <Magnetic maxDisplacement={6}>
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <span className="font-mono text-xs font-bold bg-[#111111] border border-[#242424] text-[#22C55E] px-2 py-0.5 rounded transition-colors group-hover:border-[#22C55E]">
                NR
              </span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-semibold text-[#F5F5F5] tracking-tight group-hover:text-white transition-colors">
                  Nachiketa NR
                </span>
                <span className="hidden sm:inline text-xs text-[#71717A]">•</span>
                <span className="font-mono text-[11px] text-[#22C55E] hidden sm:inline">Full Stack Developer</span>
              </div>
            </button>
          </Magnetic>
        </div>

        {/* Minimal 5-Stage Spatial Navigation */}
        <nav className="hidden md:flex items-center gap-5" aria-label="Main Navigation">
          {navStages.map((stage) => {
            const isActive = activeTab === stage.id

            return (
              <Magnetic key={stage.id} maxDisplacement={5}>
                <button
                  type="button"
                  onClick={() => handleNavClick(stage.id)}
                  className={`font-mono text-xs transition-colors relative py-1 focus:outline-none flex items-center gap-1.5 cursor-pointer ${
                    isActive ? 'text-[#22C55E] font-bold' : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                  }`}
                >
                  <span className="text-[10px] text-[#71717A]">{stage.num}</span>
                  <span>{stage.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-0 -bottom-[15px] h-[2px] bg-[#22C55E] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </Magnetic>
            )
          })}
        </nav>

        {/* Quick Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 border-l border-[#242424] pl-5 font-mono text-xs text-[#A1A1AA]">
          <Magnetic maxDisplacement={6}>
            <motion.a
              whileHover={{ y: -1, color: '#22C55E' }}
              href="https://github.com/Nachi12"
              target="_blank"
              rel="noreferrer"
              className="transition-colors inline-block"
            >
              GitHub ↗
            </motion.a>
          </Magnetic>

          <Magnetic maxDisplacement={6}>
            <motion.a
              whileHover={{ y: -1, color: '#22C55E' }}
              href="https://www.linkedin.com/in/nachiketa12/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors inline-block"
            >
              LinkedIn ↗
            </motion.a>
          </Magnetic>

          <Magnetic maxDisplacement={8}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={handleResumePreview}
              className="ml-2 rounded border border-[#242424] bg-[#111111] px-3 py-1 text-xs text-[#F5F5F5] hover:border-[#383838] transition-colors"
            >
              Resume PDF
            </motion.button>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
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
        </motion.button>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-[#242424] bg-[#050505] px-4 pb-4 pt-2 md:hidden"
          >
            <nav className="flex flex-col space-y-2 font-mono text-xs">
              {navStages.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleNavClick(stage.id)}
                  className={`text-left py-2 transition-colors border-b border-[#111111] flex items-center justify-between ${
                    activeTab === stage.id ? 'text-[#22C55E] font-semibold' : 'text-[#A1A1AA]'
                  }`}
                >
                  <span>{stage.num} {stage.label}</span>
                  {activeTab === stage.id && <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />}
                </button>
              ))}
              <div className="pt-2 flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
                <a href="https://github.com/Nachi12" target="_blank" rel="noreferrer" className="hover:text-white">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/nachiketa12/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn ↗</a>
                <button onClick={handleResumePreview} className="text-[#22C55E] font-bold">Resume PDF</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
