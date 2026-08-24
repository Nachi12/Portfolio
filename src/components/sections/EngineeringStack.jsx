import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import ParallaxDepthLayer from '../ui/ParallaxDepthLayer'

const technologyNetwork = [
  {
    domain: 'FRONTEND',
    color: '#22C55E',
    depth: 'foreground',
    nodes: [
      { name: 'React 19', detail: 'Virtual DOM, Hooks, Component Trees' },
      { name: 'TypeScript', detail: 'Strict Generics, Interfaces, Types' },
      { name: 'Redux Toolkit', detail: 'Global Slice Caching & Optimistic UI' },
      { name: 'Tailwind CSS', detail: 'Utility-first Layout Systems' },
      { name: 'JavaScript (ES6+)', detail: 'Async/Await, Promises, Closures' },
    ],
  },
  {
    domain: 'BACKEND & APIs',
    color: '#22C55E',
    depth: 'midground',
    nodes: [
      { name: 'Node.js', detail: 'Asynchronous Event Loop Engine' },
      { name: 'Express.js', detail: 'Route Controllers & Middleware' },
      { name: 'REST Architecture', detail: 'HTTP Methods, Standard JSON Schema' },
      { name: 'JWT Session Auth', detail: 'HTTP-Only Cookies, Signed Tokens' },
      { name: 'Bcrypt', detail: 'Password Hashing & Salt Security' },
    ],
  },
  {
    domain: 'DATABASE & DATA',
    color: '#38BDF8',
    depth: 'background',
    nodes: [
      { name: 'MongoDB', detail: 'NoSQL Document Store, Aggregations' },
      { name: 'Mongoose ODM', detail: 'Schema Validation, Compound Indexes' },
      { name: 'MySQL', detail: 'Relational Database Queries & Joins' },
    ],
  },
  {
    domain: 'TOOLS & DEPLOYMENT',
    color: '#A855F7',
    depth: 'midground',
    nodes: [
      { name: 'Git & GitHub', detail: 'Branching, PRs, Version Control' },
      { name: 'Postman', detail: 'API Endpoint Validation & Testing' },
      { name: 'Vite', detail: 'Module Bundling & HMR Server' },
      { name: 'Netlify & Render', detail: 'Cloud Hosting & CORS Isolation' },
    ],
  },
  {
    domain: 'AI-ASSISTED DEV',
    color: '#F59E0B',
    depth: 'foreground',
    nodes: [
      { name: 'Cursor AI', detail: 'Rapid Prototyping & Boilerplate Generation' },
      { name: 'GitHub Copilot', detail: 'Automated Test Case & Function Drafting' },
      { name: 'Prompt Engineering', detail: 'Structured Context & Schema Prompts' },
    ],
  },
]

export const EngineeringStack = () => {
  const [activeDomain, setActiveDomain] = useState('FRONTEND')

  return (
    <ContinuousSectionWrapper id="capabilities" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="02"
        eyebrow="TECHNOLOGY LANDSCAPE"
        title="Interactive Spatial Capability Network"
        description="Explore my technical stack as a connected spatial network. Select or hover any domain node to bring its technologies forward."
      />

      <div className="relative py-8 flex flex-col items-center justify-center">
        {/* Central Hub Badge */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="z-30 rounded-2xl border border-[#22C55E] bg-[#0A0A0A] px-8 py-3.5 font-mono text-sm sm:text-base font-bold text-[#F5F5F5] shadow-xl shadow-[#22C55E]/10 text-center cursor-pointer mb-8"
        >
          <span className="text-[#22C55E] block text-xs tracking-wider font-mono">// CORE HUB</span>
          <span>FULL STACK DEVELOPMENT</span>
        </motion.div>

        {/* Domain Selector Pills */}
        <div className="z-30 flex flex-wrap justify-center gap-2.5 mb-8 font-mono text-xs">
          {technologyNetwork.map((group) => {
            const isActive = activeDomain === group.domain
            return (
              <button
                key={group.domain}
                type="button"
                onClick={() => setActiveDomain(group.domain)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-[#22C55E] bg-[#22C55E] text-black font-bold shadow-lg shadow-[#22C55E]/20'
                    : 'border-[#242424] bg-[#0A0A0A] text-[#A1A1AA] hover:text-white hover:border-[#383838]'
                }`}
              >
                {group.domain}
              </button>
            )
          })}
        </div>

        {/* Perfectly Aligned Clean Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {technologyNetwork.map((group) => {
            const isSelected = activeDomain === group.domain

            return (
              <ParallaxDepthLayer key={group.domain} depth={group.depth} className="h-full">
                <motion.div
                  animate={{
                    borderColor: isSelected ? '#22C55E' : '#242424',
                    scale: isSelected ? 1.02 : 1,
                    opacity: isSelected ? 1 : 0.75,
                  }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveDomain(group.domain)}
                  className={`editorial-card rounded-2xl p-6 border cursor-pointer transition-all duration-300 h-full flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0D0D0D] shadow-xl shadow-[#22C55E]/10'
                      : 'bg-[#0A0A0A]/90 hover:border-[#383838]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#242424] pb-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#22C55E] tracking-wider">
                        // {group.domain}
                      </span>
                      <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-[#22C55E] animate-pulse' : 'bg-[#383838]'}`} />
                    </div>

                    <div className="space-y-3 font-sans text-xs">
                      {group.nodes.map((node) => (
                        <div key={node.name} className="border-b border-[#111111] pb-2 last:border-b-0">
                          <span className="font-bold text-[#F5F5F5] block text-xs">{node.name}</span>
                          <span className="font-mono text-[11px] text-[#A1A1AA] mt-0.5 block">{node.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ParallaxDepthLayer>
            )
          })}
        </div>
      </div>
    </ContinuousSectionWrapper>
  )
}

export default EngineeringStack
