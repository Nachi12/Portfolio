import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showProjectPreview } from '../../store/slices/previewSlice'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'

const projects = [
  {
    id: 'hirelog',
    number: 'PROJECT 01',
    name: 'HireLog',
    year: '2025',
    tagline: 'Multi-User Job Application Tracker SaaS Platform',
    role: 'Full Stack Engineer',
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
    id: 'cryptotrack',
    number: 'PROJECT 03',
    name: 'CryptoTrack',
    year: '2024',
    tagline: 'Real-Time Cryptocurrency Analytics Dashboard',
    role: 'Frontend Developer',
    url: null,
    github: 'https://github.com/Nachi12',
    problem: 'Digital asset enthusiasts require low-latency market tracking, client-side search filtering, and responsive price visualization across 100+ coins.',
    solution: 'Built a real-time crypto analytics dashboard consuming REST APIs with client-side memoized search and responsive sorting algorithms.',
    decisions: [
      'Implemented debounced search inputs and memoized state filters to prevent unnecessary re-renders during high-frequency API data streams.',
      'Designed a clean dark typography hierarchy with clear indicator tags for market capitalization and price changes.',
    ],
    architectureDetails: [
      { layer: 'Client State', tech: 'React Hooks, Memoized Search Filters' },
      { layer: 'API Layer', tech: 'CoinGecko REST API Integration' },
      { layer: 'Styling', tech: 'Tailwind CSS, Dark High-Contrast Theme' },
    ],
    stack: ['React.js', 'REST API Integration', 'Client-Side Search', 'Tailwind CSS'],
  },
]

export const CaseStudies = () => {
  const dispatch = useDispatch()

  const handlePreview = (url) => {
    if (url) {
      dispatch(showProjectPreview(url))
    }
  }

  return (
    <section id="projects" className="py-16">
      <SectionHeading
        number="01"
        eyebrow="SELECTED WORK"
        title="Featured Engineering Case Studies"
        description="A selection of full-stack applications and systems demonstrating database design, REST API security, and state management."
      />

      <div className="space-y-16">
        {/* Project 01: HireLog */}
        <div className="editorial-card rounded-xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Info Column */}
            <div className="lg:w-7/12 space-y-5">
              <div className="flex items-center justify-between border-b border-[#242424] pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#22C55E] font-bold">{projects[0].number}</span>
                  <span className="font-mono text-xs text-[#71717A]">• {projects[0].year}</span>
                </div>
                <Badge variant="muted">{projects[0].role}</Badge>
              </div>

              <div>
                <h3 className="font-sans text-2xl font-bold text-[#F5F5F5]">{projects[0].name}</h3>
                <p className="font-mono text-xs text-[#22C55E] mt-1">{projects[0].tagline}</p>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#71717A] uppercase block">// Problem</span>
                  <p className="text-[#A1A1AA] leading-relaxed mt-1">{projects[0].problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#22C55E] uppercase block">// Solution</span>
                  <p className="text-[#F5F5F5] leading-relaxed mt-1">{projects[0].solution}</p>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#71717A] uppercase block mb-2">// Engineering Decisions</span>
                <ul className="space-y-1.5 font-sans text-xs text-[#A1A1AA]">
                  {projects[0].decisions.map((d, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#22C55E] font-mono">›</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {projects[0].stack.map((s) => (
                    <Badge key={s} variant="default" size="xs">{s}</Badge>
                  ))}
                </div>
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F5F5F5] hover:text-[#22C55E] transition-colors"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>

            {/* Right Architectural Diagram Box */}
            <div className="lg:w-5/12 border border-[#242424] bg-[#050505] rounded-lg p-5 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#242424] pb-3 mb-4">
                  <span className="text-[#71717A] uppercase text-[10px]">// System Architecture</span>
                  <span className="text-[#22C55E] text-[10px]">REST + Kanban</span>
                </div>
                <div className="space-y-3">
                  {projects[0].architectureDetails.map((item, idx) => (
                    <div key={idx} className="border-b border-[#111111] pb-2.5 last:border-b-0">
                      <span className="text-[#22C55E] text-[10px] block font-bold">{item.layer}</span>
                      <span className="text-[#A1A1AA] text-xs mt-0.5 block">{item.tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#242424] text-[11px] text-[#71717A]">
                Status: Production Ready • Local Tested
              </div>
            </div>
          </div>
        </div>

        {/* Project 02: CONNECT */}
        <div className="editorial-card rounded-xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Right Info Column */}
            <div className="lg:w-7/12 space-y-5">
              <div className="flex items-center justify-between border-b border-[#242424] pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#22C55E] font-bold">{projects[1].number}</span>
                  <span className="font-mono text-xs text-[#71717A]">• {projects[1].year}</span>
                </div>
                <Badge variant="muted">{projects[1].role}</Badge>
              </div>

              <div>
                <h3 className="font-sans text-2xl font-bold text-[#F5F5F5]">{projects[1].name}</h3>
                <p className="font-mono text-xs text-[#22C55E] mt-1">{projects[1].tagline}</p>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#71717A] uppercase block">// Problem</span>
                  <p className="text-[#A1A1AA] leading-relaxed mt-1">{projects[1].problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#22C55E] uppercase block">// Solution</span>
                  <p className="text-[#F5F5F5] leading-relaxed mt-1">{projects[1].solution}</p>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#71717A] uppercase block mb-2">// Key Decisions</span>
                <ul className="space-y-1.5 font-sans text-xs text-[#A1A1AA]">
                  {projects[1].decisions.map((d, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#22C55E] font-mono">›</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {projects[1].stack.map((s) => (
                    <Badge key={s} variant="default" size="xs">{s}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handlePreview(projects[1].url)}
                    className="text-[#22C55E] hover:underline font-bold"
                  >
                    Live Demo ↗
                  </button>
                  <a
                    href={projects[1].github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#F5F5F5] hover:text-[#22C55E] transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Left RBAC Architecture Visual */}
            <div className="lg:w-5/12 border border-[#242424] bg-[#050505] rounded-lg p-5 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#242424] pb-3 mb-4">
                  <span className="text-[#71717A] uppercase text-[10px]">// Role Security Architecture</span>
                  <span className="text-[#22C55E] text-[10px]">RBAC + JWT</span>
                </div>
                <div className="space-y-2.5 text-[11px]">
                  <div className="p-2 border border-[#242424] bg-[#0A0A0A] rounded">
                    <span className="text-[#F5F5F5] font-bold block">ADMIN ROLE</span>
                    <span className="text-[#71717A] text-[10px]">Full system access, interviewer assignment</span>
                  </div>
                  <div className="p-2 border border-[#242424] bg-[#0A0A0A] rounded">
                    <span className="text-[#F5F5F5] font-bold block">INTERVIEWER ROLE</span>
                    <span className="text-[#71717A] text-[10px]">Candidate evaluation, score submission</span>
                  </div>
                  <div className="p-2 border border-[#242424] bg-[#0A0A0A] rounded">
                    <span className="text-[#F5F5F5] font-bold block">CANDIDATE ROLE</span>
                    <span className="text-[#71717A] text-[10px]">Slot booking, feedback review</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#242424] text-[10px] text-[#71717A]">
                Deployed on Netlify (Client) & Render (API)
              </div>
            </div>
          </div>
        </div>

        {/* Project 03: CryptoTrack */}
        <div className="editorial-card rounded-xl p-6 lg:p-8">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#242424] pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#22C55E] font-bold">{projects[2].number}</span>
                <span className="font-mono text-xs text-[#71717A]">• {projects[2].year}</span>
              </div>
              <Badge variant="muted">{projects[2].role}</Badge>
            </div>

            <div>
              <h3 className="font-sans text-2xl font-bold text-[#F5F5F5]">{projects[2].name}</h3>
              <p className="font-mono text-xs text-[#22C55E] mt-1">{projects[2].tagline}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 font-sans text-xs">
              <div>
                <span className="font-mono text-[10px] text-[#71717A] uppercase block">// Problem</span>
                <p className="text-[#A1A1AA] leading-relaxed mt-1">{projects[2].problem}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#22C55E] uppercase block">// Solution</span>
                <p className="text-[#F5F5F5] leading-relaxed mt-1">{projects[2].solution}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex flex-wrap gap-1.5">
                {projects[2].stack.map((s) => (
                  <Badge key={s} variant="default" size="xs">{s}</Badge>
                ))}
              </div>
              <a
                href={projects[2].github}
                target="_blank"
                rel="noreferrer"
                className="text-[#F5F5F5] hover:text-[#22C55E] transition-colors"
              >
                GitHub Repository ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
