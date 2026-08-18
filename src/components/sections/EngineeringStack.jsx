import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import Tilt3D from '../ui/Tilt3D'
import TechEcosystem3D from '../3d/TechEcosystem3D'
import { staggerItem } from '../../utils/motion'

const techDependencyMap = {
  'React 19': ['TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST Architecture'],
  'TypeScript': ['React 19', 'Node.js', 'Mongoose ODM'],
  'Node.js': ['Express.js', 'JWT Auth', 'MongoDB', 'RBAC Security'],
  'Express.js': ['Node.js', 'JWT Auth', 'Bcrypt & Crypto', 'REST Architecture'],
  'MongoDB': ['Mongoose ODM', 'Node.js', 'CRUD Pipelines'],
  'Redux Toolkit': ['React 19', 'TypeScript', 'REST Architecture'],
  'JWT Auth': ['Node.js', 'Express.js', 'RBAC Security'],
  'Tailwind CSS': ['React 19', 'HTML5 & CSS3'],
}

const stackGroups = [
  {
    category: 'Frontend Engineering',
    items: [
      { name: 'React 19', note: 'Hooks, Context, State Slices' },
      { name: 'TypeScript', note: 'Strict Typings, Interfaces' },
      { name: 'JavaScript (ES6+)', note: 'Async/Await, Closures' },
      { name: 'Redux Toolkit', note: 'Global Application State' },
      { name: 'Tailwind CSS', note: 'Responsive Layout Systems' },
      { name: 'HTML5 & CSS3', note: 'Semantic Structure' },
    ],
  },
  {
    category: 'Backend & REST APIs',
    items: [
      { name: 'Node.js', note: 'Asynchronous Event Loop' },
      { name: 'Express.js', note: 'Route Controllers, Middleware' },
      { name: 'REST Architecture', note: 'HTTP Methods, Standard JSON' },
      { name: 'JWT Auth', note: 'Token Verification, Cookies' },
      { name: 'RBAC Security', note: 'Role Authorization Guards' },
      { name: 'Bcrypt & Crypto', note: 'Password Hashing' },
    ],
  },
  {
    category: 'Databases & Schemas',
    items: [
      { name: 'MongoDB', note: 'Document Store, Indexing' },
      { name: 'Mongoose ODM', note: 'Schema Validation, Queries' },
      { name: 'CRUD Pipelines', note: 'Optimized Aggregations' },
      { name: 'SQL Fundamentals', note: 'Relational Model Logic' },
    ],
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git & GitHub', note: 'Branching, Commit History' },
      { name: 'Postman', note: 'API Endpoint Testing' },
      { name: 'Netlify & Render', note: 'Cloud Hosting & Secrets' },
      { name: 'VS Code Studio', note: 'Primary IDE' },
      { name: 'Figma', note: 'UI Layout Specification' },
    ],
  },
]

export const EngineeringStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null)

  const activeDependencies = hoveredTech ? (techDependencyMap[hoveredTech] || []) : []

  return (
    <ContinuousSectionWrapper id="stack" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="03"
        eyebrow="DEPENDENCY MAP"
        title="Interactive Technical Stack & Dependencies"
        description="Hover any core technology to highlight connected architectural dependencies across frontend, backend, and data layers."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Column: 3D Interactive Tech Constellation */}
        <motion.div variants={staggerItem} className="lg:col-span-4">
          <TechEcosystem3D />
        </motion.div>

        {/* Right Column: Stack Category Cards */}
        <div className="lg:col-span-8 grid gap-6 md:grid-cols-2">
          {stackGroups.map((group) => (
            <motion.div key={group.category} variants={staggerItem}>
              <Tilt3D maxTilt={4} scale={1.01}>
                <div className="editorial-card rounded-xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-xs font-bold text-[#22C55E] uppercase tracking-wider mb-4 border-b border-[#242424] pb-2 translate-z-20">
                      // {group.category}
                    </h3>

                    <div className="space-y-3 font-sans text-xs translate-z-10">
                      {group.items.map((item) => {
                        const isHovered = hoveredTech === item.name
                        const isConnected = activeDependencies.includes(item.name)

                        return (
                          <div
                            key={item.name}
                            onMouseEnter={() => setHoveredTech(item.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className={`flex items-center justify-between border-b border-[#111111] pb-2 last:border-b-0 cursor-pointer transition-all duration-200 p-1.5 rounded ${
                              isHovered
                                ? 'bg-[#111111] text-[#22C55E] font-bold border-[#22C55E]/40 translate-x-1'
                                : isConnected
                                ? 'bg-[#22C55E]/10 text-[#F5F5F5] font-semibold border-[#22C55E]/30'
                                : 'text-[#F5F5F5] hover:bg-[#0A0A0A]'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {isConnected && <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />}
                              {item.name}
                            </span>
                            <span className="font-mono text-[11px] text-[#71717A]">{item.note}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </ContinuousSectionWrapper>
  )
}

export default EngineeringStack
