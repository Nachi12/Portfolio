import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'

const identityPillars = [
  {
    code: '01',
    title: 'Full-Stack Execution',
    desc: 'Connecting intuitive React interfaces to type-safe Express.js REST APIs and structured MongoDB document schemas.',
  },
  {
    code: '02',
    title: 'Product Engineering',
    desc: 'Focusing on end-user workflow performance, clean state management with Redux Toolkit, and reliable session authentication.',
  },
  {
    code: '03',
    title: 'Clean Architecture',
    desc: 'Structuring backends into modular layers—separating router definitions, request validation, business logic, and database schemas.',
  },
  {
    code: '04',
    title: 'AI-Assisted Efficiency',
    desc: 'Leveraging Cursor AI, GitHub Copilot, and LLM tooling to accelerate repetitive setup, write unit tests, and refactor code rapidly.',
  },
]

export const IntroductionSection = () => {
  return (
    <ContinuousSectionWrapper id="intro" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="01"
        eyebrow="DEVELOPER IDENTITY"
        title="Engineering Mindset & Craftsmanship"
        description="A concise narrative on how I approach full-stack software development, bridge client design with backend security, and ship reliable web products."
      />

      <div className="grid gap-10 lg:grid-cols-12 items-center">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 space-y-6 font-sans text-sm leading-relaxed text-[#A1A1AA]">
          <p className="text-[#F5F5F5] font-semibold text-lg sm:text-xl leading-snug">
            I build software with a focus on usability, system clarity, and end-to-end execution—taking ideas from responsive interface design to working production APIs.
          </p>

          <p>
            As a Full Stack Developer based in Bangalore, I believe strong software engineering isn't just about rendering components or creating API routes. It requires understanding <strong className="text-[#F5F5F5]">the problem domain</strong>, making thoughtful architectural decisions, and writing code that remains maintainable.
          </p>

          <p>
            Whether engineering an idempotent financial statement parser in <strong className="text-[#F5F5F5]">ProductivityOS Pro</strong> or building a multi-user Kanban pipeline in <strong className="text-[#F5F5F5]">HireLog</strong>, I emphasize defensive validation, JWT session security, and snappy optimistic UI states.
          </p>

          {/* System Metrics */}
          <div className="pt-4 border-t border-[#242424] grid grid-cols-2 gap-4 font-mono text-xs text-[#F5F5F5]">
            <div className="flex items-center gap-2">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Interface to Production API</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Defensive Auth & RBAC Security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Indexed MongoDB Schemas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Accelerated AI Workflows</span>
            </div>
          </div>
        </div>

        {/* Right Identity Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {identityPillars.map((pillar) => (
            <div
              key={pillar.code}
              className="editorial-card rounded-xl p-5 border border-[#242424] bg-[#0A0A0A]/95 space-y-2 hover:border-[#22C55E]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#22C55E]">{pillar.code}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              </div>
              <h4 className="font-sans text-sm font-bold text-[#F5F5F5]">{pillar.title}</h4>
              <p className="font-sans text-xs text-[#A1A1AA] leading-normal">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ContinuousSectionWrapper>
  )
}

export default IntroductionSection
