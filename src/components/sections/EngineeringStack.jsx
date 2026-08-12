import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'

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
  return (
    <section id="stack" className="py-16">
      <SectionHeading
        number="03"
        eyebrow="TECHNICAL MATRIX"
        title="Engineering Stack & Tooling"
        description="Categorized breakdown of technologies, API security patterns, databases, and development tools."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.category} className="editorial-card rounded-xl p-6">
            <h3 className="font-mono text-xs font-bold text-[#22C55E] uppercase tracking-wider mb-4 border-b border-[#242424] pb-2">
              // {group.category}
            </h3>

            <div className="space-y-3 font-sans text-xs">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between border-b border-[#111111] pb-2 last:border-b-0">
                  <span className="font-semibold text-[#F5F5F5]">{item.name}</span>
                  <span className="font-mono text-[11px] text-[#71717A]">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EngineeringStack
