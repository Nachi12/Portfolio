import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const experiences = [
  {
    role: 'Founder & Full Stack Developer',
    company: 'Shiksha Source - EdTech Platform',
    period: 'Jan 2025 – Present',
    type: 'Product Leadership',
    location: 'Bangalore, KA',
    overview: 'Architected and built a full-stack educational platform delivering REST APIs, authentication security, and interactive student interfaces.',
    highlights: [
      'Engineered full-stack React.js frontend and Node.js/Express.js backend infrastructure supporting multi-user workflows.',
      'Designed MongoDB schemas for courses, student profiles, and progress tracking with data validation.',
      'Owned full lifecycle execution: manual testing, API debugging, cloud deployment, and responsive UI optimization.',
      'Integrated Cursor AI, GitHub Copilot, and ChatGPT workflows to reduce feature development cycle time by 40%.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'AI Workflows'],
  },
  {
    role: 'Professional Software Fellow',
    company: 'AlmaBetter - Software Engineering Fellowship',
    period: 'Expected Completion: 2026',
    type: 'Specialized Training',
    location: 'Remote',
    overview: 'Intensive fellowship focusing on modern full-stack development, AI-assisted software engineering, system architecture, and DevOps fundamentals.',
    highlights: [
      'Mastered advanced MERN stack architecture, state management with Redux Toolkit, and asynchronous JavaScript.',
      'Practiced AI-assisted debugging, automated testing, version control, and CI/CD deployment concepts.',
      'Collaborated on production-grade project builds under rigorous peer and mentor code reviews.',
    ],
    tech: ['Full Stack Architecture', 'AI Software Engineering', 'DevOps Fundamentals', 'Data Structures', 'Git/GitHub'],
  },
  {
    role: 'UX/UI Designer Intern',
    company: "Dave Brother's Technology",
    period: 'Dec 2023 – Jan 2024',
    type: 'Design Internship',
    location: 'Bangalore, KA',
    overview: 'Collaborated directly with engineering teams to design user-centric interfaces and responsive layout design systems.',
    highlights: [
      'Designed responsive UI wireframes and high-fidelity mockups in Figma for complex multi-screen web apps.',
      'Collaborated with frontend developers to ensure pixel-perfect CSS component implementation and accessibility.',
    ],
    tech: ['Figma', 'UI Design System', 'Wireframing', 'Responsive Design', 'Frontend Collaboration'],
  },
  {
    role: 'UX/UI Designer Intern',
    company: 'E-Patrakar',
    period: 'Dec 2023 – Jan 2024',
    type: 'Remote Internship',
    location: 'Remote',
    overview: 'Focused on digital publishing UX improvements, accessibility enhancement, and layout consistency.',
    highlights: [
      'Created intuitive wireframes and improved mobile readability for digital content publishing screens.',
      'Enhanced navigation flow and visual typography hierarchy based on usability testing feedback.',
    ],
    tech: ['Figma', 'User Experience (UX)', 'Accessibility', 'Content Typography', 'Prototyping'],
  },
]

export const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <SectionHeading
        eyebrow="Experience & Background"
        title="Engineering History & Ownership"
        description="Professional experience, product leadership, specialized software fellowship, and UI/UX design foundation."
      />

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={`${exp.role}-${exp.company}`} className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <Badge variant="indigo" size="xs">
                    {exp.type}
                  </Badge>
                </div>
                <p className="mt-1 font-sans text-sm font-semibold text-indigo-300">{exp.company}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 font-mono text-xs text-slate-400">
                <span>{exp.location}</span>
                <span>•</span>
                <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 font-sans">
              {exp.overview}
            </p>

            <div className="mt-4">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                // Key Contributions & Impact
              </h4>
              <ul className="space-y-2 text-sm text-slate-300 font-sans">
                {exp.highlights.map((point, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="text-indigo-400 font-mono">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {exp.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-0.5 font-mono text-xs text-slate-300 shadow-sm"
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

export default Experience
