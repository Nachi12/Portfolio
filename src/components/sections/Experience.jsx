import React, { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import Tilt3D from '../ui/Tilt3D'

const experiences = [
  {
    id: 'shiksha',
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
    id: 'almabetter',
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
    id: 'dave',
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
    id: 'epatrakar',
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
  const [expandedId, setExpandedId] = useState('shiksha')

  return (
    <section id="experience" className="py-16">
      <SectionHeading
        number="04"
        eyebrow="SPATIAL HISTORY"
        title="Experience & Career Nodes"
        description="Professional engineering work, product development leadership, specialized fellowship, and UX design foundation."
      />

      <div className="border-l border-[#242424] pl-6 sm:pl-8 space-y-8 ml-2">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id

          return (
            <div key={exp.id} className="relative">
              {/* Active Spatial Node Indicator */}
              <span
                onClick={() => setExpandedId(exp.id)}
                className={`absolute -left-[31px] sm:-left-[39px] top-4 h-3.5 w-3.5 rounded-full cursor-pointer transition-all duration-300 border-2 ${
                  isExpanded
                    ? 'bg-[#22C55E] border-[#050505] ring-4 ring-[#22C55E]/20 scale-125'
                    : 'bg-[#242424] border-[#050505] hover:bg-[#383838]'
                }`}
              />

              <Tilt3D maxTilt={4} scale={1.01}>
                <div
                  onClick={() => setExpandedId(exp.id)}
                  className={`editorial-card rounded-xl p-5 cursor-pointer transition-colors ${
                    isExpanded ? 'border-[#22C55E]/50 bg-[#0D0D0D]' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#242424] pb-3 translate-z-20">
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

                  <p className="font-sans text-xs leading-relaxed text-[#A1A1AA] mt-3 translate-z-10">
                    {exp.overview}
                  </p>

                  {isExpanded && (
                    <div className="mt-3 space-y-2 border-t border-[#242424] pt-3 font-sans text-xs text-[#A1A1AA] translate-z-10">
                      <span className="font-mono text-[10px] text-[#22C55E] uppercase block font-bold">// Key Contributions</span>
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-[#22C55E] font-mono">›</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-3 font-mono text-[11px] translate-z-20">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant={isExpanded ? 'green' : 'muted'} size="xs">{t}</Badge>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
