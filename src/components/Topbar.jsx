import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../store/slices/tabSlice'
import {
  showProjectPreview,
  showResumePreview,
  selectProjectPreview,
  selectResumePreview,
} from '../store/slices/previewSlice'
import resumeUrl from '../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'

const tabs = [
  { id: 'home', label: 'index.html', icon: '🌐' },
  { id: 'about', label: 'about.jsx', icon: '⚛️' },
  { id: 'projects', label: 'projects.js', icon: '⚡' },
  { id: 'resume', label: 'resume.pdf', icon: '📄' },
  { id: 'contact', label: 'contact.json', icon: '📋' },
]

const highlights = [
  { value: '8.3 CGPA', label: 'Bachelor of Computer Applications' },
  { value: 'Full Stack', label: 'React, Node, Mongo & REST APIs' },
  { value: 'AI Workflow', label: 'Prompt engineering & AI debugging' },
]

const skills = [
  ['Frontend', 'React.js', 'TypeScript', 'JavaScript ES6+', 'Redux Toolkit', 'Tailwind CSS'],
  ['Backend', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'Bcrypt', 'Nodemailer'],
  ['Database', 'MongoDB', 'Mongoose', 'CRUD Operations', 'Schema Design', 'SQL Fundamentals'],
  ['AI-Assisted Development', 'ChatGPT', 'Cursor AI', 'GitHub Copilot', 'Prompt Engineering'],
  ['Tools', 'Git', 'GitHub', 'Postman', 'VS Code', 'Netlify', 'Render', 'Figma'],
  ['Concepts', 'MVC Architecture', 'API Integration', 'Testing', 'Debugging', 'OOP', 'DevOps Fundamentals'],
]

const projects = [
  {
    name: 'HireLog',
    type: 'Job application tracker SaaS',
    points: [
      'Developed a SaaS job tracking platform using React.js, Node.js, MongoDB, and TypeScript.',
      'Implemented JWT authentication and secured 15+ REST API endpoints for multi-user workflows.',
      'Built a 5-stage Kanban workflow, analytics dashboards, email reminders, and CSV export functionality.',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'JWT'],
  },
  {
    name: 'CONNECT',
    type: 'Role-based mock interview platform',
    url: 'https://connect-frontend1.netlify.app/',
    points: [
      'Developed Admin, Interviewer, and Candidate workflows for a structured interview platform.',
      'Secured 20+ backend routes using JWT authentication and authorization.',
      'Integrated frontend components with backend REST APIs and built responsive reusable UI components.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    name: 'Scroll2Learn',
    type: 'EdTech & real-time learning feed platform',
    github: 'https://github.com/Nachi12/Scroll2Learn',
    points: [
      'Built an interactive educational feed with short-form resources, community project showcases, and mentor networks.',
      'Integrated Socket.io client/server for real-time notifications and OpenAI embeddings for semantic search.',
      'Designed MongoDB schemas for users, resources, projects, and learning roadmaps with BullMQ queue handling.',
    ],
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express 5', 'MongoDB', 'Socket.io', 'OpenAI'],
  },
  {
    name: 'ProductivityOS Pro',
    type: 'Enterprise personal finance SaaS',
    github: 'https://github.com/Nachi12/-ProductivityOS-Pro',
    points: [
      'Architected a multi-user enterprise finance platform with integer minor unit (paise) exact money calculations.',
      'Engineered an idempotent bank statement parser (CSV/PDF) with SHA-256 transaction fingerprints for duplicate detection.',
      'Enforced zero cross-tenant IDOR protection, Helmet HTTP headers, Zod validation, and full Vitest suite coverage.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Zod', 'Vitest'],
  },
]

const experience = [
  {
    role: 'Founder & Full Stack Developer',
    company: 'Shiksha Source - EdTech Platform',
    period: 'Jan 2025 - Present',
    points: [
      'Designed and developed a full-stack EdTech platform using React.js, Node.js, Express.js, and MongoDB.',
      'Built REST APIs supporting authentication and platform workflows.',
      'Owned implementation, testing, debugging, deployment, and responsive interface development.',
      'Used ChatGPT, Cursor AI, and GitHub Copilot to improve debugging efficiency and feature delivery.',
    ],
  },
  {
    role: 'UX/UI Designer Intern',
    company: "Dave Brother's Technology",
    period: 'Dec 2023 - Jan 2024',
    points: [
      'Designed responsive interfaces and collaborated with developers during implementation.',
      'Improved usability and consistency across multiple web application screens.',
    ],
  },
  {
    role: 'UX/UI Designer Intern',
    company: 'E-Patrakar - Remote',
    period: 'Dec 2023 - Jan 2024',
    points: [
      'Contributed to wireframes and usability-focused design improvements.',
      'Enhanced content accessibility and overall user experience.',
    ],
  },
]

const contacts = [
  { label: 'Email', value: 'nrnachi34@gmail.com', href: 'mailto:nrnachi34@gmail.com' },
  { label: 'Phone', value: '+91-9380552034', href: 'tel:+919380552034' },
  { label: 'GitHub', value: 'github.com/Nachi12', href: 'https://github.com/Nachi12' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nachiketa12', href: 'https://www.linkedin.com/in/nachiketa12/' },
  { label: 'Portfolio', value: 'nachiketa-nr-portfolio.netlify.app', href: 'https://nachiketa-nr-portfolio.netlify.app/' },
  { label: 'Location', value: 'Bangalore, Karnataka', href: 'https://www.google.com/maps/place/Bengaluru,+Karnataka' },
]

const SectionShell = ({ eyebrow, title, activeTabLabel, children }) => (
  <section className="min-h-[620px] overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0f172a]/70 shadow-2xl shadow-black/50 backdrop-blur-md">
    {/* Studio Window Header Bar */}
    <div className="flex min-h-[46px] items-center justify-between border-b border-slate-800/80 bg-[#0b0f17]/90 px-4 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80 hover:bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80 hover:bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/80 hover:bg-[#28c840]" />
        </div>
        <div className="hidden items-center gap-1.5 text-xs font-mono text-slate-500 sm:flex">
          <span className="text-slate-600">nachiketa-nr</span>
          <span>/</span>
          <span className="text-slate-400">portfolio</span>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">{activeTabLabel || 'index.html'}</span>
        </div>
      </div>

      {/* Available for work pulse badge */}
      <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-[11px]">Available for Opportunities</span>
      </div>
    </div>

    <div className="p-5 sm:p-8 lg:p-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono font-medium text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {children}
    </div>
  </section>
)

const TabButton = ({ id, label, icon, activeTab, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(id)}
    className={`group relative shrink-0 flex items-center gap-2 px-4 py-3 text-xs font-mono font-medium transition-all ${
      activeTab === id
        ? 'bg-slate-900/90 text-white'
        : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200'
    }`}
  >
    <span className="text-sm">{icon}</span>
    <span>{label}</span>
    {activeTab === id && (
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
    )}
  </button>
)

const Topbar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tab.activeTab)
  const projectPreview = useSelector(selectProjectPreview)
  const resumePreview = useSelector(selectResumePreview)

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId))
  }

  const handleProjectPreview = (url) => {
    dispatch(showProjectPreview(url))
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  const activeTabObj = tabs.find((t) => t.id === activeTab)

  return (
    <div className="relative z-10 w-full">
      {/* Tab Navigation Header */}
      <div className="mb-4 overflow-x-auto rounded-xl border border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-md">
        <nav className="flex min-w-max border-b border-slate-800/50" aria-label="Portfolio sections">
          {tabs.map((tab) => (
            <TabButton key={tab.id} {...tab} activeTab={activeTab} onClick={handleTabClick} />
          ))}
        </nav>
      </div>

      {activeTab === 'home' && (
        <SectionShell
          activeTabLabel={activeTabObj?.label}
          eyebrow="Full Stack Developer • React.js • Node.js • TypeScript"
          title="Building modern SaaS applications with clean interfaces, robust APIs, and AI-assisted velocity."
        >
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I am <strong className="text-white font-semibold">Nachiketa NR</strong>, a Full Stack Developer from Bangalore with hands-on experience
            building SaaS applications using React.js, Node.js, Express.js, MongoDB, and TypeScript.
            I take end-to-end ownership of product engineering — from database schema design and secure REST APIs
            to polished user interfaces.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition duration-300 hover:border-slate-700 hover:bg-slate-900/70">
                <p className="font-display text-2xl font-bold text-white tracking-tight">{item.value}</p>
                <p className="mt-2 text-xs font-medium text-slate-400 font-sans">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => handleTabClick('projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-200 hover:from-indigo-400 hover:to-violet-500 hover:shadow-indigo-500/40 active:scale-95"
            >
              <span>Explore Work & Projects</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('resume')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-sm transition duration-200 hover:border-slate-600 hover:bg-slate-800 hover:text-white active:scale-95"
            >
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Resume</span>
            </button>
          </div>
        </SectionShell>
      )}

      {activeTab === 'about' && (
        <SectionShell
          activeTabLabel={activeTabObj?.label}
          eyebrow="About Me & Tech Skills"
          title="Full-stack ownership with frontend polish, backend architecture, and rapid AI-assisted development."
        >
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                I build complete web products across React interfaces, Node.js APIs, MongoDB schemas,
                authentication flows, and cloud deployments. My strongest focus is on SaaS-style applications
                where clean UI, protected routes, data dashboards, and multi-user workflows come together.
              </p>
              <p className="leading-relaxed">
                I actively leverage modern AI-assisted software tools like Cursor AI, ChatGPT, and GitHub Copilot
                to accelerate delivery while ensuring thorough manual debugging, structural clarity, and code maintainability.
              </p>
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5">
                <p className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">Education</p>
                <p className="mt-2 font-display text-base font-semibold text-white">Bachelor of Computer Applications (BCA)</p>
                <p className="mt-1 text-xs text-slate-400 font-sans">Vijayanagara College, Karnataka | Oct 2021 - Dec 2024 | CGPA: 8.3 / 10.0</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {skills.map(([group, ...items]) => (
                <div key={group} className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition duration-200 hover:border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>{group}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-mono text-slate-300 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      )}

      {activeTab === 'projects' && (
        <SectionShell
          activeTabLabel={activeTabObj?.label}
          eyebrow="Selected Work"
          title="Featured full-stack projects showcasing real-world application architecture."
        >
          <div className="mt-7 grid gap-6">
            {projects.map((project) => (
              <article key={project.name} className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 transition duration-300 hover:border-slate-700 hover:bg-slate-900/70">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-white tracking-tight">{project.name}</h3>
                      <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-indigo-300">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  {project.url && (
                    <button
                      type="button"
                      onClick={() => handleProjectPreview(project.url)}
                      className="inline-flex items-center gap-1.5 self-start rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/25 hover:text-emerald-200"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Live Preview</span>
                    </button>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-mono text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {projectPreview.isVisible && (
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl">
              <div className="border-b border-slate-800 bg-slate-900/90 px-4 py-3 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Interactive Live Preview</span>
                <a href={projectPreview.url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">Open in new tab ↗</a>
              </div>
              <iframe src={projectPreview.url} title="Project Preview" className="h-[540px] w-full bg-white" />
            </div>
          )}
        </SectionShell>
      )}

      {activeTab === 'resume' && (
        <SectionShell
          activeTabLabel={activeTabObj?.label}
          eyebrow="Resume & Experience"
          title="Professional history, certifications, and downloadable resume."
        >
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleResumePreview}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-200 hover:from-indigo-400 hover:to-violet-500 active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Preview Resume PDF</span>
            </button>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-sm transition duration-200 hover:border-slate-600 hover:bg-slate-800 hover:text-white active:scale-95"
            >
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF</span>
            </a>
          </div>
          <div className="mt-8 grid gap-5">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 transition duration-200 hover:border-slate-700">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-sm font-medium text-indigo-400">{item.company}</p>
                  </div>
                  <p className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 self-start">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6">
              <h3 className="font-display text-lg font-bold text-white">Professional Fellowship in Software Engineering with AI and DevOps</h3>
              <p className="mt-1 text-sm font-medium text-indigo-400">AlmaBetter | Expected Completion: 2026</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Full Stack Development', 'AI-Assisted Software Engineering', 'DevOps Fundamentals', 'Version Control'].map((item) => (
                  <span key={item} className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-mono text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
          {resumePreview.isVisible && (
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl">
              <iframe src={resumePreview.url} title="Resume Preview" className="h-[72vh] min-h-[520px] w-full bg-white" />
            </div>
          )}
        </SectionShell>
      )}

      {activeTab === 'contact' && (
        <SectionShell
          activeTabLabel={activeTabObj?.label}
          eyebrow="Get In Touch"
          title="Available for full-time full stack opportunities & collaborative projects."
        >
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition duration-200 hover:border-indigo-500/40 hover:bg-slate-900/70"
              >
                <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">{contact.label}</p>
                <p className="mt-2 break-words text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{contact.value}</p>
              </a>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300">
            Feel free to reach out directly via email or LinkedIn for opportunities in React.js frontend engineering,
            Node.js API development, TypeScript implementation, and full-stack software development.
          </p>
        </SectionShell>
      )}
    </div>
  )
}

export default Topbar
