import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'

const experiences = [
  {
    role: 'Founder & Full Stack Developer',
    company: 'Shiksha Source',
    period: 'Jan 2025 – Present',
    type: 'Product Leadership',
    location: 'Bangalore, India',
    overview: 'Architected and developed full-stack educational web application with custom REST API infrastructure and responsive client interface.',
    highlights: [
      'Engineered React.js client interface and Express.js server routes supporting course delivery and user profile management.',
      'Designed MongoDB database collections with query indexes and schema validation rules.',
      'Integrated Cursor AI, GitHub Copilot, and prompt engineering to accelerate feature delivery cycles by 40%.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
  },
  {
    role: 'Professional Software Fellow',
    company: 'AlmaBetter Fellowship',
    period: 'Completed: 2026',
    type: 'Specialized Engineering',
    location: 'Remote',
    overview: 'Intensive fellowship specializing in modern full-stack development, AI-assisted software workflows, and system architecture.',
    highlights: [
      'Mastered MERN stack architecture, asynchronous JavaScript, and Redux Toolkit state management.',
      'Practiced version control, defensive code reviews, and cloud deployment pipelines.',
    ],
    tech: ['Full Stack', 'AI Engineering Workflows', 'MERN Architecture', 'Git/GitHub'],
  },
  {
    role: 'UX/UI Designer Intern',
    company: "Dave Brother's Technology",
    period: 'Dec 2023 – Jan 2024',
    type: 'Internship',
    location: 'Bangalore, India',
    overview: 'Designed high-fidelity web screen layouts and collaborated directly with frontend engineers.',
    highlights: [
      'Created wireframes and interactive prototypes in Figma for multi-screen client applications.',
      'Collaborated with frontend developers to ensure accurate layout specs and typography hierarchy.',
    ],
    tech: ['Figma', 'UI Design System', 'Wireframing', 'Responsive Layout'],
  },
  {
    role: 'UX/UI Designer Intern',
    company: 'E-Patrakar',
    period: 'Dec 2023 – Jan 2024',
    type: 'Internship',
    location: 'Remote',
    overview: 'Focused on digital publishing UX improvements, accessibility, and content hierarchy.',
    highlights: [
      'Designed responsive UI screens for digital content publishing applications.',
      'Improved layout navigation flow based on usability feedback.',
    ],
    tech: ['Figma', 'User Experience (UX)', 'Accessibility', 'Typography'],
  },
]

export const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <SectionHeading
        number="04"
        eyebrow="HISTORY"
        title="Experience & Background"
        description="Professional engineering work, product development leadership, specialized fellowship, and UX design foundation."
      />

      <div className="border-l border-[#242424] pl-6 sm:pl-8 space-y-10 ml-2">
        {experiences.map((exp, idx) => (
          <div key={`${exp.role}-${exp.company}`} className="relative space-y-3">
            {/* Minimal left indicator */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#242424] border-2 border-[#050505]" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#242424] pb-2">
              <div>
                <h3 className="font-sans text-base font-bold text-[#F5F5F5]">{exp.role}</h3>
                <p className="font-mono text-xs text-[#22C55E]">{exp.company}</p>
              </div>
              <div className="font-mono text-xs text-[#71717A] flex items-center gap-3">
                <span>{exp.location}</span>
                <span>•</span>
                <span className="text-[#A1A1AA]">{exp.period}</span>
              </div>
            </div>

            <p className="font-sans text-xs leading-relaxed text-[#A1A1AA]">
              {exp.overview}
            </p>

            <ul className="space-y-1 font-sans text-xs text-[#A1A1AA]">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#22C55E] font-mono">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
              {exp.tech.map((t) => (
                <Badge key={t} variant="muted" size="xs">{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
