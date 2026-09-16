import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { motion, useScroll, useTransform } from 'framer-motion'
import { showProjectPreview } from '../../store/slices/previewSlice'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import Badge from '../ui/Badge'
import Magnetic from '../ui/Magnetic'
import ProjectCaseStudyModal from '../ui/ProjectCaseStudyModal'
import ProjectImageSlider from '../ui/ProjectImageSlider'
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
    images: [
      {
        src: '/assets/projects/hirelog.jpg',
        title: '5-Stage Kanban Board',
        caption: 'Drag-and-drop pipeline with optimistic state caching & CSV export',
      },
      {
        src: '/assets/projects/hirelog-details.jpg',
        title: 'Candidate Profile & Drawer',
        caption: 'Detailed interview timeline, scorecard metrics & notes',
      },
      {
        src: '/assets/projects/hirelog-analytics.jpg',
        title: 'Hiring Funnel Analytics',
        caption: 'Stage conversion metrics, pass rates & pipeline velocity',
      },
    ],
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
    id: 'agentdesk',
    number: '02 / 04',
    name: 'AgentDesk',
    year: '2025',
    tagline: 'Autonomous AI Agent Orchestration & Live Observability Platform',
    role: 'Lead Architect & Full Stack Engineer',
    category: 'ai-orchestration',
    badge: 'AI AGENTS & DUAL-DB',
    durationTag: 'DUAL-DB • WEBSOCKET STREAMING',
    image: '/assets/projects/agentdesk.jpg',
    images: [
      {
        src: '/assets/projects/agentdesk.jpg',
        title: 'Agent Orchestration Dashboard',
        caption: 'Multi-agent execution overview, real-time Google search tool & token/cost metrics',
      },
      {
        src: '/assets/projects/agentdesk-trace.jpg',
        title: 'Live WebSocket Reasoning Trace',
        caption: 'Low-latency Socket.IO execution step streamer with per-step token/cost calculation',
      },
      {
        src: '/assets/projects/agentdesk-db.jpg',
        title: 'Hybrid Database & Telemetry',
        caption: 'PostgreSQL relational run records alongside MongoDB raw LLM JSON telemetry inspector',
      },
    ],
    url: null,
    github: 'https://github.com/Nachi12/AgentDesk',
    problem: 'Autonomous AI agents frequently operate as opaque black boxes without reliable execution tracing, granular token cost observability, containerized sandbox security, or fail-honest error handling.',
    solution: 'Engineered an enterprise-grade autonomous AI agent orchestration platform featuring dual-store persistence (PostgreSQL + MongoDB), low-latency WebSocket trace streaming, multi-LLM routing (OpenAI & Anthropic), live Google Search tool integration (Serper API), and Docker sandbox isolation.',
    decisions: [
      'Architected a hybrid database strategy: PostgreSQL (Prisma) for relational ACID users, agents, and run steps; MongoDB (Mongoose) for raw high-volume LLM payloads and unstructured telemetry logs.',
      'Implemented low-latency live execution tracing via Socket.IO room subscriptions, streaming reasoning steps, tool queries, and token cost accumulation in real time.',
      'Enforced a strict fail-honest execution engine with zero mock fallbacks, paired with optional Docker container sandboxes (Dockerode) for isolated execution.',
    ],
    architectureDetails: [
      { layer: 'Frontend Client', tech: 'React 18, TypeScript, Redux Toolkit, Tailwind CSS, Socket.IO Client, Vite' },
      { layer: 'Backend Server', tech: 'Node.js, Express 4, TypeScript, Prisma ORM, Socket.IO Hub, Dockerode, PDFKit' },
      { layer: 'Hybrid Data Engine', tech: 'PostgreSQL 16 (Relational Records) + MongoDB 7.0 (Raw LLM & Telemetry)' },
    ],
    caseStudyDetails: {
      frontend: 'React 18 & TypeScript client featuring Redux Toolkit state management, real-time Socket.IO trace listeners, live reasoning step timelines, and one-click PDF/CSV export generation.',
      backend: 'Layered Express.js & TypeScript architecture running the AgentExecutor autonomous reasoning loop, Serper API search tool integration, and centralized per-model token pricing calculators.',
      database: 'Intentional dual-database architecture: PostgreSQL (Prisma) managing relational ACID schemas for Users, Agents, and Runs; MongoDB handling high-throughput raw LLM responses and diagnostic execution logs.',
      aiTooling: 'Multi-LLM provider routing supporting OpenAI (GPT-4o / GPT-4o-mini) and Anthropic (Claude 3.5 Sonnet) with dynamic tool-calling and zero-mock error handling.',
      result: 'Enterprise-ready autonomous agent platform delivering sub-second live execution observability, deterministic token cost tracking, and isolated container execution.',
    },
    stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'MongoDB', 'Socket.IO', 'Docker', 'OpenAI', 'Anthropic'],
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
    images: [
      {
        src: '/assets/projects/scroll2learn.jpg',
        title: 'Short-Form Feed & Roadmap',
        caption: 'Interactive curriculum roadmap and short-form resource stream',
      },
      {
        src: '/assets/projects/scroll2learn-search.jpg',
        title: 'OpenAI Vector Search',
        caption: 'High-dimensional semantic embedding queries & knowledge graph',
      },
      {
        src: '/assets/projects/scroll2learn-collab.jpg',
        title: 'Live Code Room & Chat',
        caption: 'Real-time Socket.io code review with active student discussion',
      },
    ],
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
    images: [
      {
        src: '/assets/projects/productivityos.jpg',
        title: 'Net Cash Flow & Ledger',
        caption: 'Enterprise financial overview with rupee minor-unit precision',
      },
      {
        src: '/assets/projects/productivityos-parser.jpg',
        title: 'Bank Statement Parser',
        caption: 'Idempotent CSV/PDF parser with SHA-256 duplicate fingerprinting',
      },
      {
        src: '/assets/projects/productivityos-reports.jpg',
        title: 'Financial Reports & Analytics',
        caption: 'Expense category distribution & monthly revenue forecast',
      },
    ],
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

// Deterministic subtle micro-rotations for stacked cards underneath
const DETERMINISTIC_ROTATIONS = [-0.75, 0.65, -0.5, 0.6, -0.4, 0.5]

function getCardTransformRanges(index, total) {
  if (total <= 1 || index === total - 1) {
    return {
      inputRange: [0, 1],
      scaleRange: [1, 1],
      opacityRange: [1, 1],
      rotateRange: [0, 0],
      overlayRange: [0, 0],
    }
  }

  const step = 1 / (total - 1)
  const targetRotation = DETERMINISTIC_ROTATIONS[index % DETERMINISTIC_ROTATIONS.length]

  const points = [0]
  const scale = [1]
  const opacity = [1]
  const rotate = [0]
  const overlay = [0]

  const startT = index * step
  if (startT > 0) {
    points.push(startT)
    scale.push(1)
    opacity.push(1)
    rotate.push(0)
    overlay.push(0)
  }

  // Next card covers this card
  const t1 = Math.min(1, (index + 1) * step)
  points.push(t1)
  scale.push(0.98)
  opacity.push(0.88)
  rotate.push(targetRotation)
  overlay.push(0.18)

  // 2 cards cover this card
  if (index + 2 <= total - 1) {
    const t2 = Math.min(1, (index + 2) * step)
    points.push(t2)
    scale.push(0.96)
    opacity.push(0.76)
    rotate.push(targetRotation)
    overlay.push(0.32)
  }

  // 3 cards cover this card
  if (index + 3 <= total - 1) {
    const t3 = Math.min(1, (index + 3) * step)
    points.push(t3)
    scale.push(0.94)
    opacity.push(0.68)
    rotate.push(targetRotation)
    overlay.push(0.42)
  }

  if (points[points.length - 1] < 1) {
    points.push(1)
    scale.push(scale[scale.length - 1])
    opacity.push(opacity[opacity.length - 1])
    rotate.push(rotate[rotate.length - 1])
    overlay.push(overlay[overlay.length - 1])
  }

  return {
    inputRange: points,
    scaleRange: scale,
    opacityRange: opacity,
    rotateRange: rotate,
    overlayRange: overlay,
  }
}

// Individual Sticky Stacking Card Component
const ProjectStackCard = ({
  proj,
  index,
  total,
  scrollYProgress,
  reducedMotion,
  onSelectCaseStudy,
  onPreview,
}) => {
  const { inputRange, scaleRange, opacityRange, rotateRange, overlayRange } = getCardTransformRanges(index, total)

  const scale = useTransform(scrollYProgress, inputRange, scaleRange)
  const opacity = useTransform(scrollYProgress, inputRange, opacityRange)
  const rotate = useTransform(scrollYProgress, inputRange, rotateRange)
  const overlayOpacity = useTransform(scrollYProgress, inputRange, overlayRange)

  // Top offset calculation:
  // Desktop: base 92px + index * 16px
  // Tablet: base 80px + index * 12px
  // Mobile: base 70px + index * 8px
  const stickyTop = `calc(var(--stack-top-base, 92px) + ${index} * var(--stack-step, 16px))`

  return (
    <motion.div
      key={proj.id}
      id={`project-card-${proj.id}`}
      style={
        reducedMotion
          ? {}
          : {
              position: 'sticky',
              top: stickyTop,
              zIndex: 10 + index,
              scale,
              opacity,
              rotate,
              transformOrigin: 'top center',
              willChange: 'transform, opacity',
            }
      }
      className={`relative w-full rounded-2xl border border-[#242424] bg-[#0A0A0A] p-6 sm:p-10 shadow-2xl shadow-black/90 overflow-hidden ${
        reducedMotion ? 'mb-16' : 'mb-[30vh] sm:mb-[40vh] lg:mb-[48vh] last:mb-0'
      }`}
    >
      {/* Subtle depth darkening overlay for cards underneath */}
      {!reducedMotion && (
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 z-30 bg-black/80 rounded-2xl transition-opacity"
        />
      )}

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
          <div className="pt-4 border-t border-[#242424] flex flex-wrap items-center gap-3 font-mono text-xs relative z-40">
            <Magnetic maxDisplacement={6}>
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={() => onSelectCaseStudy(proj)}
                className="rounded bg-[#22C55E] px-4 py-2 text-black font-bold shadow-lg shadow-[#22C55E]/20 hover:bg-[#1ea34d] transition-colors cursor-pointer"
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
                  onClick={() => onPreview(proj.url)}
                  className="rounded border border-[#242424] bg-[#111111] px-4 py-2 text-[#F5F5F5] hover:border-[#383838] transition-colors font-semibold cursor-pointer"
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
                className="rounded border border-[#242424] bg-[#050505] px-4 py-2 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors cursor-pointer"
              >
                GitHub ↗
              </motion.a>
            </Magnetic>
          </div>
        </div>

        {/* Right Visual Perspective Showcase Frame */}
        <div className="lg:col-span-6 space-y-4">
          <ProjectImageSlider
            images={proj.images || [proj.image]}
            projectName={proj.name}
            durationTag={proj.durationTag}
            onSelectProject={() => onSelectCaseStudy(proj)}
          />

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
}

export const CaseStudies = () => {
  const dispatch = useDispatch()
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const stackContainerRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('reduced-motion') === 'true') {
      setReducedMotion(true)
      return
    }
    // When ?reduced-motion=false or by default, provide the active piling card deck
  }, [])

  const { scrollYProgress } = useScroll({
    target: stackContainerRef,
    offset: ['start 92px', 'end 80%'],
  })

  const handlePreview = (url) => {
    if (url) {
      dispatch(showProjectPreview(url))
    }
  }

  return (
    <ContinuousSectionWrapper id="projects" glowColor="emerald" stagger={false} disableTransform={true}>
      <SectionHeading
        number="03"
        eyebrow="PROJECT GALLERY EXHIBITION"
        title="Spatial Product Journey"
        description="Walk through major full-stack applications. Each product enters from spatial depth—revealing technical decisions, system architecture, and verifiable code."
      />

      {/* Piling Sticky Card Deck Container */}
      <div
        ref={stackContainerRef}
        className="relative py-8 pb-32 [--stack-top-base:70px] [--stack-step:8px] sm:[--stack-top-base:82px] sm:[--stack-step:12px] lg:[--stack-top-base:92px] lg:[--stack-step:16px]"
      >
        {projects.map((proj, index) => (
          <ProjectStackCard
            key={proj.id}
            proj={proj}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
            reducedMotion={reducedMotion}
            onSelectCaseStudy={setSelectedCaseStudy}
            onPreview={handlePreview}
          />
        ))}
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

