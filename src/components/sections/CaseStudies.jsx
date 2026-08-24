import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { showProjectPreview } from '../../store/slices/previewSlice'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import Badge from '../ui/Badge'
import Magnetic from '../ui/Magnetic'
import ProjectCaseStudyModal from '../ui/ProjectCaseStudyModal'
import { buttonHover, buttonTap } from '../../utils/motion'

const projects = [
  {
    id: 'hirelog',
    number: '01 / 04',
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
    problem: 'Job seekers struggle to track application stages across dozens of platforms, manage interview dates, and organize candidate metrics efficiently.',
    solution: 'Engineered a multi-user 5-stage Kanban SaaS application with 15+ secured REST API endpoints, JWT session cookie verification, CSV exports, and optimistic state updates.',
    decisions: [
      'Implemented optimistic UI state rendering in Redux Toolkit to provide instantaneous drag-and-drop column transitions.',
      'Secured backend REST endpoints with custom JWT cookie authentication middleware and HTTP-only cookie storage.',
      'Designed MongoDB Mongoose schemas with compound indexes to accelerate user-filtered pipeline queries.',
    ],
    architectureDetails: [
      { layer: 'Frontend UI', tech: 'React.js, Redux Toolkit, Tailwind CSS, Drag-and-Drop State' },
      { layer: 'Backend REST API', tech: 'Node.js, Express.js, Custom JWT Cookie Auth Middleware' },
      { layer: 'Database & Schemas', tech: 'MongoDB, Mongoose ODM with Compound User Indexes' },
    ],
    caseStudyDetails: {
      frontend: 'Modular React 19 architecture utilizing Redux Toolkit slices for local Kanban state caching and instant optimistic updates prior to backend network acknowledgement.',
      backend: 'Layered Express.js REST API with custom auth middleware validating signed HTTP-only cookies, preventing XSS and CSRF session exploits.',
      database: 'MongoDB collections with compound indexing on userId + applicationStatus to maintain sub-50ms query response times under high filtering loads.',
      aiTooling: 'Utilized Cursor AI for rapid schema prototyping and boilerplate CRUD route generation, saving manual setup time while focusing on security middleware.',
      result: 'Delivered an intuitive job tracking application supporting full CRUD workflows with immediate user feedback loops.',
    },
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Redux Toolkit', 'JWT'],
  },
  {
    id: 'connect',
    number: '02 / 04',
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
      { layer: 'Auth Security', tech: 'RBAC Access Control, JWT Claims, Bcrypt Hashing' },
      { layer: 'API Services', tech: '20+ Express.js controllers with strict request validation' },
      { layer: 'Cloud Hosting', tech: 'Netlify (Frontend Client) + Render (Node.js API Server)' },
    ],
    caseStudyDetails: {
      frontend: 'Role-specific React view composition dynamically rendering navigation paths and control panels based on authenticated payload permissions.',
      backend: 'Express.js backend equipped with RBAC middleware checking user scope permissions (Admin vs Interviewer vs Candidate) before execution.',
      database: 'MongoDB relational document references linking Candidate assessments, Interview schedules, and Evaluator scores with schema constraints.',
      aiTooling: 'Leveraged prompt engineering to design comprehensive mock interview rubric structures and API error status specifications.',
      result: 'Production-ready candidate assessment portal deployed and accessible live via Netlify and Render.',
    },
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC Security', 'JWT', 'Netlify'],
  },
  {
    id: 'scroll2learn',
    number: '03 / 04',
    name: 'Scroll2Learn',
    year: '2026',
    tagline: 'Interactive Educational Feed & Community Learning Platform',
    role: 'Full Stack Engineer',
    category: 'edtech',
    badge: 'EDTECH & AI',
    durationTag: 'REALTIME • OPENAI + SOCKET.IO',
    image: '/assets/projects/scroll2learn.jpg',
    url: null,
    github: 'https://github.com/Nachi12/Scroll2Learn',
    problem: 'Traditional online learning platforms lack engaging, short-form resource discovery, real-time collaboration, and structured mentor connections.',
    solution: 'Built a full-stack educational ecosystem featuring infinite scroll resource feeds, Socket.io real-time updates, OpenAI semantic search, mentor networks, and community project showcases.',
    decisions: [
      'Integrated OpenAI embeddings + vector search to deliver fast, context-aware semantic search across learning resources and project showcases.',
      'Implemented Socket.io client & server handlers with Redis background queues for instant notification delivery and live comment streams.',
      'Designed MongoDB Mongoose schemas for Users, Resources, Projects, Mentors, and structured learning roadmaps with admin moderation queues.',
    ],
    architectureDetails: [
      { layer: 'Frontend Client', tech: 'React 19, Vite, TypeScript, Tailwind v4, Framer Motion, Zustand' },
      { layer: 'Backend Server', tech: 'Node.js, Express 5, TypeScript, Socket.io, BullMQ Queue' },
      { layer: 'AI & Data Engine', tech: 'MongoDB Mongoose, Redis, OpenAI Embeddings, Vector Search' },
    ],
    caseStudyDetails: {
      frontend: 'React 19 client with virtualized infinite scrolling feed, Zustand global state, and Framer Motion animations for fluid swipe/scroll transitions.',
      backend: 'Express 5 & TypeScript architecture running Socket.io websocket servers alongside Redis event queues for real-time notification streams.',
      database: 'MongoDB schema storing high-dimensional vector embeddings generated via OpenAI API for content similarity recommendations.',
      aiTooling: 'Integrated OpenAI API for automated content tagging, search embedding generation, and automated resource summarization.',
      result: 'Full-stack interactive educational application combining real-time engagement and modern AI content matching.',
    },
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express 5', 'MongoDB', 'Socket.io', 'Redis', 'OpenAI', 'Tailwind CSS'],
  },
  {
    id: 'productivityos',
    number: '04 / 04',
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
    caseStudyDetails: {
      frontend: 'Type-safe React dashboard displaying detailed ledger breakdowns, cash flow analytics, and statement import wizards.',
      backend: 'Strict layered architecture (Routes -> Controllers -> Services -> Repositories) written in TypeScript and thoroughly unit-tested with Vitest.',
      database: 'Mongoose schemas enforcing strict integer data types for currency math and unique SHA-256 index constraints on imported transactions.',
      aiTooling: 'Utilized GitHub Copilot for automated test case generation and edge-case validation in monetary math formulas.',
      result: 'High-precision enterprise financial ledger engine completely eliminating floating-point math drift.',
    },
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Zod', 'Vitest', 'JWT', 'Helmet'],
  },
]

export const CaseStudies = () => {
  const dispatch = useDispatch()
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const { scrollYProgress } = useScroll()

  const handlePreview = (url) => {
    if (url) {
      dispatch(showProjectPreview(url))
    }
  }

  return (
    <ContinuousSectionWrapper id="projects" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="03"
        eyebrow="PROJECT GALLERY EXHIBITION"
        title="Spatial Product Journey"
        description="Walk through major full-stack applications. Each product enters from spatial depth—revealing technical decisions, system architecture, and verifiable code."
      />

      {/* Spatial Horizontal / Sequential Product Gallery */}
      <div className="space-y-24 py-8">
        {projects.map((proj, index) => {
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-2xl border border-[#242424] bg-[#0A0A0A] p-6 sm:p-10 shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Top Accent & Project Counter */}
              <div className="flex items-center justify-between border-b border-[#242424] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#22C55E]">{proj.number}</span>
                  <span className="font-mono text-xs text-[#71717A]">• {proj.year}</span>
                  <Badge variant="green" size="xs">{proj.badge}</Badge>
                </div>
                <span className="font-mono text-xs text-[#A1A1AA]">{proj.role}</span>
              </div>

              {/* Main Content Layout */}
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                {/* Left Narrative Column */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <h3 className="font-sans text-3xl font-extrabold text-[#F5F5F5]">{proj.name}</h3>
                    <p className="font-mono text-xs text-[#22C55E] mt-1 font-semibold">{proj.tagline}</p>
                  </div>

                  <div className="space-y-3 font-sans text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-[#71717A] uppercase block">// What I Built</span>
                      <p className="text-[#F5F5F5] leading-relaxed mt-1">{proj.solution}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-[#71717A] uppercase block">// Why I Built It</span>
                      <p className="text-[#A1A1AA] leading-relaxed mt-1">{proj.problem}</p>
                    </div>
                  </div>

                  {/* Decisions */}
                  <div>
                    <span className="font-mono text-[10px] text-[#22C55E] uppercase block mb-2 font-bold">// Key Technical Decisions</span>
                    <ul className="space-y-2 font-sans text-xs text-[#A1A1AA]">
                      {proj.decisions.map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#22C55E] font-mono">›</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#242424] flex flex-wrap items-center gap-3 font-mono text-xs">
                    <Magnetic maxDisplacement={6}>
                      <motion.button
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        type="button"
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="rounded bg-[#22C55E] px-4 py-2 text-black font-bold shadow-lg shadow-[#22C55E]/20 hover:bg-[#1ea34d] transition-colors"
                      >
                        Explore Case Study ↗
                      </motion.button>
                    </Magnetic>

                    {proj.url && (
                      <Magnetic maxDisplacement={6}>
                        <motion.button
                          whileHover={buttonHover}
                          whileTap={buttonTap}
                          type="button"
                          onClick={() => handlePreview(proj.url)}
                          className="rounded border border-[#242424] bg-[#111111] px-4 py-2 text-[#F5F5F5] hover:border-[#383838] transition-colors font-semibold"
                        >
                          Live App Demo ↗
                        </motion.button>
                      </Magnetic>
                    )}

                    <Magnetic maxDisplacement={6}>
                      <motion.a
                        whileHover={buttonHover}
                        whileTap={buttonTap}
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded border border-[#242424] bg-[#050505] px-4 py-2 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors"
                      >
                        GitHub ↗
                      </motion.a>
                    </Magnetic>
                  </div>
                </div>

                {/* Right Visual Perspective Showcase Frame */}
                <div className="lg:col-span-6 space-y-4">
                  <div
                    onClick={() => setSelectedCaseStudy(proj)}
                    className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#242424] bg-[#050505] cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-3 right-3 font-mono text-[10px] bg-black/90 border border-white/10 text-[#22C55E] font-bold px-2.5 py-1 rounded">
                      {proj.durationTag}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-[#22C55E] text-black font-bold font-sans text-xs px-5 py-2.5 rounded-full uppercase shadow-xl tracking-wider">
                        Explore Engineering Breakdown
                      </span>
                    </div>
                  </div>

                  {/* Compact Architecture Spec Box */}
                  <div className="border border-[#242424] bg-[#050505] rounded-xl p-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-[#242424] pb-2 mb-2.5">
                      <span className="text-[#71717A] uppercase text-[10px]">// System Architecture</span>
                      <span className="text-[#22C55E] text-[10px] font-bold">{proj.badge}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                      {proj.architectureDetails.map((item, idx) => (
                        <div key={idx} className="bg-[#0A0A0A] p-2 rounded border border-[#161616]">
                          <span className="text-[#22C55E] text-[10px] block font-bold">{item.layer}</span>
                          <span className="text-[#A1A1AA] text-[10px] leading-tight block mt-0.5">{item.tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Case Study Deep Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onLivePreview={handlePreview}
      />
    </ContinuousSectionWrapper>
  )
}

export default CaseStudies
