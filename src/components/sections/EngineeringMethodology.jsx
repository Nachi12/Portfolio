import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import ScrollParallax from '../ui/ScrollParallax'
import { staggerItem } from '../../utils/motion'

const methodologySteps = [
  {
    num: '01',
    title: 'Understand & Model Requirements',
    desc: 'Clarify product constraints, user workflows, and data relationships before writing code. Define normalized MongoDB collections and TypeScript interfaces.',
  },
  {
    num: '02',
    title: 'Design API & State Architecture',
    desc: 'Establish RESTful endpoint conventions, request payloads, error statuses, and frontend global state slices (Redux Toolkit) for clean data flow.',
  },
  {
    num: '03',
    title: 'Build Modular MERN Components',
    desc: 'Develop reusable React interfaces with Tailwind CSS and modular Node.js/Express route controllers enforcing clear separation of concerns.',
  },
  {
    num: '04',
    title: 'Test & Secure Middleware Layer',
    desc: 'Enforce JWT authentication, role-based access control (RBAC), bcrypt password hashing, and input validation to eliminate API vulnerabilities.',
  },
  {
    num: '05',
    title: 'Deploy & Monitor Performance',
    desc: 'Deploy frontend assets to Netlify and backend services to Render/Vercel with isolated environment secrets, CORS security, and Postman API verification.',
  },
]

export const EngineeringMethodology = () => {
  return (
    <ContinuousSectionWrapper id="methodology" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="02"
        eyebrow="ENGINEERING PROCESS"
        title="How I Build Software"
        description="A structured, defensive approach to engineering reliable web applications from data modeling to production deployment."
      />

      <div className="grid gap-6 md:grid-cols-5">
        {methodologySteps.map((step, index) => (
          <motion.div
            key={step.num}
            variants={staggerItem}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="editorial-card rounded-xl p-5 flex flex-col justify-between group transition-colors hover:border-[#22C55E]/40"
          >
            <ScrollParallax speed={index % 2 === 0 ? -0.02 : 0.02}>
              <div>
                <span className="font-mono text-sm font-bold text-[#22C55E] block mb-3 group-hover:scale-110 origin-left transition-transform">
                  {step.num}
                </span>
                <h3 className="font-sans text-sm font-bold text-[#F5F5F5] mb-2 leading-snug group-hover:text-white">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollParallax>
          </motion.div>
        ))}
      </div>
    </ContinuousSectionWrapper>
  )
}

export default EngineeringMethodology
