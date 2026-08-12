import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Tilt3DCard from '../ui/Tilt3DCard'

const stackCategories = [
  {
    title: 'Frontend Architecture',
    eyebrow: 'Client-Side Engineering',
    skills: ['React 19', 'TypeScript', 'JavaScript ES6+', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3', 'Component Design', 'Optimistic UI'],
    desc: 'Building responsive, state-driven user interfaces with modular component patterns and smooth state flows.',
  },
  {
    title: 'Backend & REST APIs',
    eyebrow: 'Server & API Pipeline',
    skills: ['Node.js', 'Express.js', 'REST API Architecture', 'JWT Authentication', 'RBAC Middleware', 'Bcrypt Hashing', 'Nodemailer'],
    desc: 'Designing secured REST API routes, token-based session verification, authorization middleware, and request validation.',
  },
  {
    title: 'Databases & Schemas',
    eyebrow: 'Data Layer',
    skills: ['MongoDB', 'Mongoose ODM', 'Schema Validation', 'CRUD Operations', 'Query Indexing', 'SQL Fundamentals'],
    desc: 'Modeling MongoDB collections, defining validation schemas, and optimizing database queries for multi-tenant applications.',
  },
  {
    title: 'AI Engineering Velocity',
    eyebrow: 'AI-Assisted Workflow',
    skills: ['ChatGPT', 'Cursor AI', 'GitHub Copilot', 'Prompt Engineering', 'Rapid Debugging', 'Code Refactoring'],
    desc: 'Leveraging modern AI software tools to accelerate feature delivery, debug complex logic, and write robust unit tests.',
  },
  {
    title: 'Deployment & Tooling',
    eyebrow: 'DevOps & Workflows',
    skills: ['Git', 'GitHub', 'Postman API Testing', 'Netlify', 'Render', 'VS Code Studio', 'Figma UX Design'],
    desc: 'Managing version control, automated build deployments on cloud hosts, and API contract testing via Postman.',
  },
  {
    title: 'Core Software Concepts',
    eyebrow: 'Engineering Standards',
    skills: ['MVC Architecture', 'API Security', 'Clean Code Principles', 'Manual Debugging', 'OOP Principles', 'DevOps Fundamentals'],
    desc: 'Applying established architectural patterns, defensive error handling, and structured code organization.',
  },
]

export const EngineeringStack = () => {
  return (
    <div>
      <SectionHeading
        eyebrow="Engineering Competencies"
        title="Technical Stack & System Capability"
        description="Categorized breakdown of tools, frameworks, database schemas, and AI-assisted workflows used to craft web applications."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Tilt3DCard maxTilt={8} scale={1.03} className="h-full">
              <Card className="flex flex-col justify-between h-full p-6 border-slate-800/80 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 transition-colors">
                <div className="translate-z-20">
                  <Badge variant="indigo" size="xs" className="mb-3">
                    {cat.eyebrow}
                  </Badge>
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">{cat.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 font-sans">{cat.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 translate-z-10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-xs text-slate-300 shadow-sm transition duration-200 hover:border-indigo-500/50 hover:bg-slate-900 hover:text-white hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </Tilt3DCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default EngineeringStack
