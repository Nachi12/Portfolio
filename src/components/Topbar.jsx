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
  { id: 'home', label: 'index.html' },
  { id: 'about', label: 'about.jsx' },
  { id: 'projects', label: 'projects.js' },
  { id: 'resume', label: 'resume.pdf' },
  { id: 'contact', label: 'contact.json' },
]

const highlights = [
  { value: 'BCA', label: 'CGPA 8.3 / 10.0' },
  { value: 'SaaS', label: 'auth, analytics and APIs' },
  { value: 'AI', label: 'assisted development workflow' },
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
    name: 'CryptoTrack',
    type: 'Cryptocurrency dashboard',
    points: [
      'Built a real-time cryptocurrency dashboard using React.js and external APIs.',
      'Implemented search and filtering capabilities for 100+ cryptocurrencies.',
      'Enhanced user experience through responsive design and frontend optimization.',
    ],
    stack: ['React.js', 'External APIs', 'Responsive UI', 'Search', 'Filtering'],
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

const SectionShell = ({ eyebrow, title, children }) => (
  <section className="min-h-[620px] rounded-[8px] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30 backdrop-blur">
    <div className="flex min-h-[44px] items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-2">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <span className="hidden text-xs text-slate-400 sm:inline">Nachiketa NR - Full Stack Developer</span>
    </div>
    <div className="p-4 sm:p-6 lg:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {children}
    </div>
  </section>
)

const TabButton = ({ id, label, activeTab, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(id)}
    className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition ${
      activeTab === id
        ? 'border-cyan-300 bg-slate-800 text-white'
        : 'border-transparent text-slate-400 hover:bg-slate-800/70 hover:text-slate-100'
    }`}
  >
    {label}
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

  return (
    <div className="relative z-10 w-full">
      <div className="mb-4 overflow-x-auto rounded-[8px] border border-white/10 bg-slate-950/80">
        <nav className="flex min-w-max" aria-label="Portfolio sections">
          {tabs.map((tab) => (
            <TabButton key={tab.id} {...tab} activeTab={activeTab} onClick={handleTabClick} />
          ))}
        </nav>
      </div>

      {activeTab === 'home' && (
        <SectionShell eyebrow="full stack developer | react.js | node.js | typescript" title="Building SaaS applications with clean interfaces, secure APIs, and AI-assisted delivery.">
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I am Nachiketa NR, a Full Stack Developer from Bangalore with hands-on experience
            building SaaS applications using React.js, Node.js, Express.js, MongoDB, and TypeScript.
            I have worked on authentication systems, analytics dashboards, REST APIs, and multi-user
            workflows with end-to-end ownership from implementation to deployment.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-cyan-200">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleTabClick('projects')}
              className="rounded-[8px] bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => handleTabClick('resume')}
              className="rounded-[8px] border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
            >
              Open Resume
            </button>
          </div>
        </SectionShell>
      )}

      {activeTab === 'about' && (
        <SectionShell eyebrow="about me" title="Full-stack ownership with UI polish, backend structure, and practical debugging.">
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4 text-slate-300">
              <p className="leading-8">
                I build complete web products across React interfaces, Node.js APIs, MongoDB schemas,
                authentication flows, and deployment. My strongest work sits in SaaS-style features
                where clean UI, protected routes, analytics, and multi-user workflows need to work together.
              </p>
              <p className="leading-8">
                I am comfortable using AI-assisted development tools such as ChatGPT, Cursor AI,
                and GitHub Copilot to accelerate development while still reviewing, debugging, and
                maintaining code quality.
              </p>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-semibold text-cyan-200">Education</p>
                <p className="mt-2 text-sm text-white">Bachelor of Computer Applications (BCA)</p>
                <p className="mt-1 text-sm text-slate-400">Vijayanagara College, Karnataka | Oct 2021 - Dec 2024 | CGPA: 8.3 / 10.0</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {skills.map(([group, ...items]) => (
                <div key={group} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold text-cyan-200">{group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
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
        <SectionShell eyebrow="selected work" title="Projects that show full-stack thinking and product polish.">
          <div className="mt-7 grid gap-5">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-white">{project.name}</p>
                    <p className="mt-1 text-sm text-cyan-200">{project.type}</p>
                  </div>
                  {project.url && (
                    <button
                      type="button"
                      onClick={() => handleProjectPreview(project.url)}
                      className="w-full rounded-[8px] bg-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200 sm:w-auto"
                    >
                      Preview
                    </button>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {projectPreview.isVisible && (
            <div className="mt-6 overflow-hidden rounded-[8px] border border-white/10 bg-slate-900">
              <div className="border-b border-white/10 px-4 py-3 text-sm text-slate-300">Live preview</div>
              <iframe src={projectPreview.url} title="Project Preview" className="h-[520px] w-full bg-white" />
            </div>
          )}
        </SectionShell>
      )}

      {activeTab === 'resume' && (
        <SectionShell eyebrow="resume" title="Experience, education, certification, and resume PDF in one place.">
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleResumePreview}
              className="rounded-[8px] bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Preview Resume
            </button>
            <a
              href={resumeUrl}
              download
              className="rounded-[8px] border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
            >
              Download PDF
            </a>
          </div>
          <div className="mt-7 grid gap-5">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.role}</p>
                    <p className="text-sm text-cyan-200">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-lg font-semibold text-white">Professional Fellowship in Software Engineering with AI and DevOps</p>
              <p className="mt-1 text-sm text-cyan-200">AlmaBetter | Expected Completion: 2026</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Full Stack Development', 'AI-Assisted Software Engineering', 'DevOps Fundamentals', 'Modern Development Workflows', 'Version Control'].map((item) => (
                  <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
          {resumePreview.isVisible && (
            <div className="mt-6 overflow-hidden rounded-[8px] border border-white/10 bg-slate-900">
              <iframe src={resumePreview.url} title="Resume Preview" className="h-[72vh] min-h-[520px] w-full bg-white" />
            </div>
          )}
        </SectionShell>
      )}

      {activeTab === 'contact' && (
        <SectionShell eyebrow="contact" title="Immediate joiner available for full-time full-stack opportunities.">
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/60 hover:bg-white/[0.07]"
              >
                <p className="text-sm font-semibold text-cyan-200">{contact.label}</p>
                <p className="mt-2 break-words text-sm text-slate-300">{contact.value}</p>
              </a>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300">
            I am ready to discuss React.js frontend engineering, Node.js backend APIs,
            TypeScript development, authentication workflows, testing, debugging, and deployment.
          </p>
        </SectionShell>
      )}
    </div>
  )
}

export default Topbar
