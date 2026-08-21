import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { showProjectPreview } from '../../store/slices/previewSlice'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import Badge from '../ui/Badge'
import Tilt3D from '../ui/Tilt3D'
import Magnetic from '../ui/Magnetic'
import ScrollParallax from '../ui/ScrollParallax'
import ProjectThumbnailCard from '../ui/ProjectThumbnailCard'
import { buttonHover, buttonTap } from '../../utils/motion'

const projects = [
  {
    id: 'hirelog',
    number: 'PROJECT 01',
    name: 'HireLog',
    year: '2025',
    tagline: 'Multi-User Job Application Tracker SaaS Platform',
    role: 'Full Stack Engineer',
    category: 'mern',
    badge: 'MERN SaaS',
    durationTag: '5-STAGE KANBAN',
    image: '/assets/projects/hirelog.jpg',
    url: null,
    github: 'https://github.com/Nachi12',
    problem: 'Job seekers struggle to track application stages across dozens of platforms, manage interview dates, and organize candidate metrics.',
    solution: 'Engineered a multi-user 5-stage Kanban SaaS application with 15+ secured REST API endpoints, JWT session cookie verification, CSV exports, and optimistic state updates.',
    decisions: [
      'Implemented optimistic UI state rendering in Redux Toolkit to provide instantaneous drag-and-drop column transitions.',
      'Secured backend REST endpoints with custom JWT cookie authentication middleware and HTTP-only cookie storage.',
      'Designed MongoDB Mongoose schemas with compound indexes to accelerate user-filtered pipeline queries.',
    ],
    architectureDetails: [
      { layer: 'Frontend', tech: 'React.js, Redux Toolkit, Tailwind CSS' },
      { layer: 'Backend API', tech: 'Node.js, Express.js, JWT Cookie Auth' },
      { layer: 'Database', tech: 'MongoDB, Mongoose ODM (Indexed queries)' },
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Redux Toolkit', 'JWT'],
  },
  {
    id: 'connect',
    number: 'PROJECT 02',
    name: 'CONNECT',
    year: '2024',
    tagline: 'Role-Based Mock Interview & Candidate Assessment Platform',
    role: 'Full Stack Engineer',
    category: 'rbac',
    badge: 'RBAC PLATFORM',
    durationTag: 'LIVE DEMO • 20+ ROUTES',
    image: '/assets/projects/connect.jpg',
    url: 'https://connect-frontend1.netlify.app/',
    github: 'https://github.com/Nachi12',
    problem: 'Bootcamps and assessment teams require structured interview scheduling with granular permission levels for Admins, Interviewers, and Candidates.',
    solution: 'Designed and deployed a role-based access control (RBAC) web application securing 20+ Express API endpoints and serving distinct client dashboards.',
    decisions: [
      'Enforced RBAC authorization middleware validating user payload claims before permitting access to sensitive interview feedback routes.',
      'Architected modular API client services managing token refreshes and standardized HTTP error responses.',
      'Deployed frontend on Netlify and backend on Render with strict CORS policy and environment isolation.',
    ],
    architectureDetails: [
      { layer: 'Auth Security', tech: 'RBAC Access Control, JWT, Bcrypt' },
      { layer: 'API Routes', tech: '20+ Express.js controllers with validation' },
      { layer: 'Deployment', tech: 'Netlify (Client) + Render (API Server)' },
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC Security', 'JWT', 'Netlify'],
  },
  {
    id: 'scroll2learn',
    number: 'PROJECT 03',
    name: 'Scroll2Learn',
    year: '2026',
    tagline: 'Interactive Educational Feed & Community Learning Platform',
    role: 'Full Stack Engineer',
    category: 'edtech',
    badge: 'EDTECH PLATFORM',
    durationTag: 'REALTIME • OPENAI + SOCKET.IO',
    image: '/assets/projects/scroll2learn.jpg',
    url: null,
    github: 'https://github.com/Nachi12/Scroll2Learn',
    problem: 'Traditional online learning platforms lack engaging, short-form resource discovery, real-time collaboration, and structured mentor connections.',
    solution: 'Built a full-stack educational ecosystem featuring infinite scroll resource feeds, Socket.io real-time updates, OpenAI semantic search, mentor networks, and community project showcases.',
    decisions: [
      'Integrated OpenAI embeddings + Elasticsearch to deliver fast, context-aware semantic search across learning resources and project showcases.',
      'Implemented Socket.io client & server handlers with Redis + BullMQ background queues for instant notification delivery and live comment streams.',
      'Designed MongoDB Mongoose schemas for Users, Resources, Projects, Mentors, and structured learning roadmaps with admin moderation queues.',
    ],
    architectureDetails: [
      { layer: 'Frontend Client', tech: 'React 19, Vite, TypeScript, Tailwind v4, Framer Motion, Zustand' },
      { layer: 'Backend Server', tech: 'Node.js, Express 5, TypeScript, Socket.io, BullMQ Queue' },
      { layer: 'AI & Database', tech: 'MongoDB Mongoose, Redis, OpenAI Embeddings, Elasticsearch' },
    ],
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express 5', 'MongoDB', 'Socket.io', 'Redis', 'OpenAI', 'Tailwind CSS'],
  },
  {
    id: 'productivityos',
    number: 'PROJECT 04',
    name: 'ProductivityOS Pro',
    year: '2025',
    tagline: 'Enterprise Personal Finance & Bank Statement Analysis SaaS Platform',
    role: 'Lead MERN Architect',
    category: 'finance',
    badge: 'ENTERPRISE MERN',
    durationTag: 'SHA-256 FINGERPRINT • PAISE MATH',
    image: '/assets/projects/productivityos.jpg',
    url: null,
    github: 'https://github.com/Nachi12/-ProductivityOS-Pro',
    problem: 'Financial software frequently suffers from floating-point rounding errors during currency calculations and duplicate transaction imports during bank statement parsing.',
    solution: 'Architected a multi-user enterprise finance platform with integer minor unit (paise) exact money calculations, SHA-256 transaction fingerprinting, and zero-cross-tenant data isolation.',
    decisions: [
      'Stored all monetary figures internally as integer minor units (paise) to prevent floating-point representation drift, formatted using Indian Numbering System.',
      'Engineered an idempotent bank statement parser (CSV/PDF) generating SHA-256 transaction fingerprints for duplicate detection.',
      'Enforced strict session/token authentication and Zod schema request validation across all REST API endpoints with full Vitest test suite coverage.',
    ],
    architectureDetails: [
      { layer: 'Backend REST API', tech: 'Node.js, Express.js, Layered Architecture (Routes/Controllers/Services)' },
      { layer: 'Security & Auth', tech: 'JWT, Bcrypt, Helmet, Express Rate Limit, Zod Schema Validation' },
      { layer: 'Data Engine', tech: 'MongoDB Mongoose (Integer minor unit money, SHA-256 fingerprints)' },
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Zod', 'Vitest', 'JWT', 'Helmet'],
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'MERN SaaS' },
  { id: 'edtech', label: 'EdTech & AI' },
  { id: 'finance', label: 'Enterprise Finance' },
  { id: 'rbac', label: 'RBAC & Auth' },
]

export const CaseStudies = () => {
  const dispatch = useDispatch()
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'editorial'

  const handlePreview = (url) => {
    if (url) {
      dispatch(showProjectPreview(url))
    }
  }

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  )

  return (
    <ContinuousSectionWrapper id="projects" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="01"
        eyebrow="SELECTED WORK"
        title="Featured Engineering Case Studies"
        description="Explore full-stack applications with animated YouTube-style thumbnail previews, system architecture breakdowns, and live demos."
      />

      {/* YouTube Style Navigation Pills & Layout Switcher */}
      <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#242424] pb-5">
        {/* Category Pills (YouTube Video Topic Bar Style) */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#22C55E] text-black shadow-lg shadow-[#22C55E]/20'
                    : 'bg-[#121212] text-[#A1A1AA] hover:text-white border border-[#242424] hover:border-[#333]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#22C55E] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* View Mode Toggle: YouTube Grid vs. Editorial Deep Dive */}
        <div className="flex items-center gap-1 bg-[#121212] p-1 rounded-lg border border-[#242424]">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition-all ${
              viewMode === 'grid'
                ? 'bg-[#242424] text-[#22C55E] font-bold shadow'
                : 'text-[#71717A] hover:text-white'
            }`}
            title="YouTube Thumbnail Grid View"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
            </svg>
            <span>Thumbnail Cards</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('editorial')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition-all ${
              viewMode === 'editorial'
                ? 'bg-[#242424] text-[#22C55E] font-bold shadow'
                : 'text-[#71717A] hover:text-white'
            }`}
            title="Detailed System Architecture View"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
            </svg>
            <span>System Details</span>
          </button>
        </div>
      </div>

      {/* Grid Mode: YouTube Style Widescreen Animated Thumbnail Gallery */}
      {viewMode === 'grid' ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectThumbnailCard
                  project={project}
                  onPreviewClick={(p) => {
                    if (p.url) handlePreview(p.url)
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Editorial Mode: Detailed Cards with YouTube Thumbnail Integrated */
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Tilt3D maxTilt={3} scale={1.01}>
                  <div className="editorial-card rounded-xl p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Info Column */}
                      <div className="lg:w-7/12 space-y-5">
                        <div className="flex items-center justify-between border-b border-[#242424] pb-3">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#22C55E] font-bold">{proj.number}</span>
                            <span className="font-mono text-xs text-[#71717A]">• {proj.year}</span>
                          </div>
                          <Badge variant="muted">{proj.role}</Badge>
                        </div>

                        <div>
                          <h3 className="font-sans text-2xl font-bold text-[#F5F5F5]">{proj.name}</h3>
                          <p className="font-mono text-xs text-[#22C55E] mt-1">{proj.tagline}</p>
                        </div>

                        <div className="space-y-3 font-sans text-xs">
                          <div>
                            <span className="font-mono text-[10px] text-[#71717A] uppercase block">// Problem</span>
                            <p className="text-[#A1A1AA] leading-relaxed mt-1">{proj.problem}</p>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] text-[#22C55E] uppercase block">// Solution</span>
                            <p className="text-[#F5F5F5] leading-relaxed mt-1">{proj.solution}</p>
                          </div>
                        </div>

                        <div>
                          <span className="font-mono text-[10px] text-[#71717A] uppercase block mb-2">// Key Engineering Decisions</span>
                          <ul className="space-y-1.5 font-sans text-xs text-[#A1A1AA]">
                            {proj.decisions.map((d, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-[#22C55E] font-mono">›</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                          <div className="flex flex-wrap gap-1.5">
                            {proj.stack.map((s) => (
                              <Badge key={s} variant="default" size="xs">{s}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            {proj.url && (
                              <Magnetic maxDisplacement={8}>
                                <motion.button
                                  whileHover={buttonHover}
                                  whileTap={buttonTap}
                                  type="button"
                                  onClick={() => handlePreview(proj.url)}
                                  className="text-[#22C55E] hover:underline font-bold"
                                >
                                  Live Demo ↗
                                </motion.button>
                              </Magnetic>
                            )}
                            <Magnetic maxDisplacement={8}>
                              <motion.a
                                whileHover={{ scale: 1.05, x: 2 }}
                                whileTap={buttonTap}
                                href={proj.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#F5F5F5] hover:text-[#22C55E] transition-colors"
                              >
                                GitHub ↗
                              </motion.a>
                            </Magnetic>
                          </div>
                        </div>
                      </div>

                      {/* Right Visual YouTube Thumbnail + Architecture Container */}
                      <div className="lg:w-5/12 space-y-4">
                        {/* Widescreen YouTube Animated Thumbnail Frame */}
                        <div
                          className="group relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#242424] bg-[#050505] cursor-pointer"
                          onClick={() => proj.url && handlePreview(proj.url)}
                        >
                          <img
                            src={proj.image}
                            alt={proj.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                          <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] bg-black/85 border border-white/10 text-[#22C55E] font-bold px-2 py-0.5 rounded">
                            {proj.durationTag}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-[#22C55E] text-black font-bold font-sans text-xs px-3.5 py-1.5 rounded-full uppercase shadow-xl">
                              {proj.url ? 'Preview App' : 'Repository'}
                            </span>
                          </div>
                        </div>

                        {/* System Architecture Box */}
                        <div className="border border-[#242424] bg-[#050505] rounded-lg p-4 font-mono text-xs">
                          <ScrollParallax speed={-0.02}>
                            <div className="flex items-center justify-between border-b border-[#242424] pb-2 mb-3">
                              <span className="text-[#71717A] uppercase text-[10px]">// System Architecture</span>
                              <span className="text-[#22C55E] text-[10px]">{proj.badge}</span>
                            </div>
                            <div className="space-y-2 text-[11px]">
                              {proj.architectureDetails.map((item, idx) => (
                                <div key={idx} className="border-b border-[#111111] pb-2 last:border-b-0">
                                  <span className="text-[#22C55E] text-[10px] block font-bold">{item.layer}</span>
                                  <span className="text-[#A1A1AA] text-xs mt-0.5 block">{item.tech}</span>
                                </div>
                              ))}
                            </div>
                          </ScrollParallax>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </ContinuousSectionWrapper>
  )
}

export default CaseStudies
