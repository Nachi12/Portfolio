import React from 'react'
import { useDispatch } from 'react-redux'
import { showProjectPreview } from '../../store/slices/previewSlice'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const projects = [
  {
    id: 'hirelog',
    name: 'HireLog',
    tagline: 'Multi-User Job Application Tracker SaaS',
    role: 'Full Stack Engineer',
    url: null,
    github: 'https://github.com/Nachi12',
    problem: 'Job seekers struggle to manage application pipelines across dozens of platforms, track follow-ups, and visualize success metrics.',
    solution: 'Engineered a 5-stage Kanban tracking SaaS platform with 15+ secured REST API endpoints, automated email reminders, CSV analytics exports, and JWT authentication.',
    architecture: [
      'Frontend built with React.js, Redux Toolkit, and Tailwind CSS for responsive drag-and-and-drop state updates.',
      'Node.js & Express.js API layer with modular route controllers and custom authentication middleware.',
      'MongoDB & Mongoose schema design with indexed query optimization for rapid search & filtering.',
    ],
    decisions: [
      'Implemented JWT tokens stored securely in HTTP cookies for session persistence.',
      'Designed 5-stage Kanban workflow with optimistic UI updates for zero-perceived latency.',
      'Added CSV export worker utilities to allow candidates to archive application history.',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'JWT Auth', 'Express.js', 'Redux Toolkit'],
  },
  {
    id: 'connect',
    name: 'CONNECT',
    tagline: 'Role-Based Mock Interview & Candidate Assessment Platform',
    role: 'Full Stack Engineer',
    url: 'https://connect-frontend1.netlify.app/',
    github: 'https://github.com/Nachi12',
    problem: 'Bootcamps and hiring teams require structured interview scheduling with distinct permissions for Admins, Interviewers, and Candidates.',
    solution: 'Designed and deployed a role-based access control (RBAC) web application securing 20+ backend REST API routes and providing clean role-specific dashboards.',
    architecture: [
      'Role-based JWT authentication pipeline validating permissions on protected backend endpoints.',
      'Reusable React component library with dynamic form validation and real-time status indicators.',
      'Deploys on Netlify (Frontend) and Render (Backend) with CORS configuration and environment isolation.',
    ],
    decisions: [
      'Enforced RBAC middleware on Node.js routes to isolate Candidate vs Admin actions.',
      'Created modular API service layers handling token refresh and standard error formatting.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC Security', 'Netlify'],
  },
  {
    id: 'cryptotrack',
    name: 'CryptoTrack',
    tagline: 'Real-Time Cryptocurrency Analytics Dashboard',
    role: 'Frontend Developer',
    url: null,
    github: 'https://github.com/Nachi12',
    problem: 'Crypto enthusiasts need instant price tracking, market trend visualization, and filtering across 100+ digital currencies.',
    solution: 'Built a real-time cryptocurrency dashboard consuming REST APIs with client-side memoized search and responsive sorting algorithms.',
    architecture: [
      'Integrated external REST APIs for live market updates, market cap filtering, and price charts.',
      'Optimized client-side rendering with memoized state filters to handle high-frequency data updates without UI lag.',
    ],
    decisions: [
      'Implemented debounced search input to minimize unnecessary third-party API requests.',
      'Designed dark-mode visual hierarchy with dynamic color indicators for price shifts.',
    ],
    stack: ['React.js', 'REST API Integration', 'Client-Side Search', 'Tailwind CSS', 'State Management'],
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
        eyebrow="Case Studies & Projects"
        title="Featured Full-Stack Architecture & SaaS Systems"
        description="Deep dives into real-world applications demonstrating database design, REST API security, state management, and production ownership."
      />

      <div className="space-y-10">
        {projects.map((project) => (
          <Card key={project.id} className="p-8 lg:p-10 border border-slate-800/80 hover:border-indigo-500/30">
            {/* Header / Meta */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between border-b border-slate-800/80 pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>
                  <Badge variant="indigo" size="sm">
                    {project.role}
                  </Badge>
                </div>
                <p className="mt-1.5 font-sans text-sm font-semibold text-indigo-300">
                  {project.tagline}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {project.url && (
                  <button
                    type="button"
                    onClick={() => handlePreview(project.url)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-4 py-2 text-xs font-mono font-semibold text-emerald-300 transition hover:bg-emerald-500/25 active:scale-95"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Live Preview</span>
                  </button>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-mono font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
                >
                  <span>Repository</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Content Grid */}
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              {/* Problem & Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    // Problem Statement
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300 font-sans">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    // Engineering Solution
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300 font-sans">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Key Decisions */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    // Architecture & Data Flow
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300 font-sans">
                    {project.architecture.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-indigo-400 font-mono">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    // Technical Trade-Offs & Decisions
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300 font-sans">
                    {project.decisions.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
              <span className="font-mono text-xs text-slate-500 mr-2">Technologies:</span>
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-xs text-slate-300 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CaseStudies
