import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'

const typographicStatements = [
  { step: '01', line: "I DON'T START WITH CODE.", highlight: "I START WITH THE PROBLEM." },
  { step: '02', line: 'THEN THE SYSTEM ARCHITECTURE.', highlight: 'DATA SCHEMAS & API CONTRACTS.' },
  { step: '03', line: 'THEN THE INTERACTION DESIGN.', highlight: 'RESPONSIVE & OPTIMISTIC UI.' },
  { step: '04', line: 'THEN THE DEFENSIVE IMPLEMENTATION.', highlight: 'SECURED, TESTED & DEPLOYED.' },
]

const engineeringPrinciples = [
  {
    num: '01',
    title: 'Understand the problem before writing code',
    desc: 'Map out user workflows, API payload boundaries, and database entity relationships on paper or Figma before starting implementation.',
  },
  {
    num: '02',
    title: 'Build reusable systems & clean components',
    desc: 'Design modular React components, clean Express middleware functions, and standardized HTTP response utilities to eliminate code repetition.',
  },
  {
    num: '03',
    title: 'Prioritize maintainability & defensive design',
    desc: 'Enforce strict schema validation, type-safe API contracts, and explicit error status codes to prevent runtime bugs and silent failures.',
  },
  {
    num: '04',
    title: 'Design for real users & performance',
    desc: 'Optimize frontend rendering with optimistic UI updates and instant loading states, keeping key UI actions responsive across devices.',
  },
  {
    num: '05',
    title: 'Validate through continuous iteration',
    desc: 'Verify endpoint security in Postman, test edge cases locally with Vitest, and iterate on user feedback before shipping to production.',
  },
  {
    num: '06',
    title: 'Use AI tools intelligently as leverage',
    desc: 'Use Cursor AI and GitHub Copilot to accelerate setup, generate unit tests, and write boilerplate while keeping engineering judgment in command.',
  },
]

export const EngineeringMethodology = () => {
  return (
    <ContinuousSectionWrapper id="approach" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="04"
        eyebrow="ENGINEERING MINDSET"
        title="How I Think When Building Software"
        description="A scroll-driven typographic narrative reflecting my engineering mindset from problem modeling to production deployment."
      />

      {/* Typographic Motion Sequence */}
      <div className="py-12 border-y border-[#242424] space-y-12">
        {typographicStatements.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-[#22C55E]">
              <span>// STAGE {item.step}</span>
              <span className="h-px w-12 bg-[#22C55E]/40" />
            </div>
            <h3 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#71717A] uppercase tracking-tight">
              {item.line}
            </h3>
            <p className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#22C55E] uppercase tracking-tight">
              {item.highlight}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Perfectly Aligned Practical Engineering Principles Grid */}
      <div className="pt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {engineeringPrinciples.map((principle) => (
          <div
            key={principle.num}
            className="editorial-card rounded-xl p-6 border border-[#242424] bg-[#0A0A0A]/95 hover:border-[#22C55E]/40 transition-colors h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm font-bold text-[#22C55E]">{principle.num}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              </div>
              <h4 className="font-sans text-sm font-bold text-[#F5F5F5] leading-snug">{principle.title}</h4>
              <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed mt-2">{principle.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </ContinuousSectionWrapper>
  )
}

export default EngineeringMethodology
