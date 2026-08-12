import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { setActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Tilt3DCard from '../ui/Tilt3DCard'
import Hero3DCanvas from '../3d/Hero3DCanvas'

const credibilityCards = [
  {
    badge: 'Production SaaS Ownership',
    title: 'HireLog SaaS Platform',
    desc: 'Built 5-stage Kanban job tracker with 15+ secured REST API endpoints, JWT auth, analytics dashboards, and CSV export.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'JWT'],
  },
  {
    badge: 'Role-Based Architecture',
    title: 'CONNECT Interview Platform',
    desc: 'Engineered Admin, Interviewer, and Candidate workflows with role-based access control across 20+ backend routes.',
    tags: ['React.js', 'Express.js', 'REST APIs', 'RBAC', 'MongoDB'],
  },
  {
    badge: 'Software Fellowship',
    title: 'AlmaBetter AI & DevOps',
    desc: 'Professional Fellowship specializing in modern full-stack development, AI-assisted software engineering, and version control.',
    tags: ['Full Stack', 'AI Workflows', 'DevOps', 'System Architecture'],
  },
  {
    badge: 'AI Development Velocity',
    title: 'Accelerated Delivery',
    desc: 'Leverages Cursor AI, GitHub Copilot, and ChatGPT prompt engineering to speed up feature delivery, testing, and debugging.',
    tags: ['Cursor AI', 'Copilot', 'ChatGPT', 'Prompt Engineering'],
  },
]

export const HeroSection = () => {
  const dispatch = useDispatch()

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId))
    const elem = document.getElementById(tabId)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <section id="home" className="relative pt-6 pb-16 overflow-visible">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Hero Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 z-10"
        >
          {/* Eyebrow & Status Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="indigo" size="md">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                Full Stack Engineer • Bangalore, KA
              </span>
            </Badge>
            <span className="text-xs font-mono text-slate-400 border border-slate-800 bg-slate-900/60 px-2.5 py-1 rounded-full">
              Immediate Joiner
            </span>
          </div>

          {/* Main Editorial Title */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
            I build <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">scalable SaaS platforms</span> with clean architecture, secure APIs, and AI-assisted velocity.
          </h1>

          {/* Narrative Subtitle */}
          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl font-sans max-w-2xl">
            I am <strong className="text-white font-semibold">Nachiketa NR</strong>, a Full Stack Engineer dedicated to designing maintainable React interfaces, robust Node.js backend services, and structured MongoDB schemas with end-to-end product ownership.
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <button
              type="button"
              onClick={() => handleTabClick('projects')}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 transition duration-300 hover:from-indigo-400 hover:to-violet-500 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Case Studies</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleResumePreview}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-sm transition duration-300 hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white hover:scale-[1.02] active:scale-95"
            >
              <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Interactive Resume</span>
            </button>

            <a
              href="https://github.com/Nachi12"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3.5 text-sm font-mono text-slate-400 transition duration-300 hover:border-indigo-500/40 hover:text-white hover:scale-[1.02]"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nachiketa12/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3.5 text-sm font-mono text-slate-400 transition duration-300 hover:border-indigo-500/40 hover:text-white hover:scale-[1.02]"
            >
              <span>LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <Hero3DCanvas />
        </motion.div>
      </div>

      {/* Credibility Grid (3D Depth Tilt Cards) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-14"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400/90 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            // Core Engineering Highlights & Credentials
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityCards.map((card) => (
            <Tilt3DCard key={card.title} maxTilt={10} scale={1.03}>
              <Card className="h-full flex flex-col justify-between border-slate-800/80 bg-slate-900/60 backdrop-blur-md hover:border-indigo-500/40 transition-colors">
                <div className="translate-z-20">
                  <Badge variant="indigo" size="xs" className="mb-3">
                    {card.badge}
                  </Badge>
                  <h3 className="font-display text-base font-bold text-white tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 font-sans">{card.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 translate-z-10">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Tilt3DCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
