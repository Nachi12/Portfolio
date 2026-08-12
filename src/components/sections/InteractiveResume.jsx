import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Tilt3DCard from '../ui/Tilt3DCard'

export const InteractiveResume = () => {
  const dispatch = useDispatch()

  const handlePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <div>
      <SectionHeading
        eyebrow="Interactive Resume"
        title="ATS-Optimized Resume & Credentials"
        description="View complete professional details online or launch the embedded PDF viewer to inspect or download."
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Tilt3DCard maxTilt={4} scale={1.01}>
          <Card className="p-8 lg:p-10 border-slate-800/80 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 transition-colors">
            {/* Header Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-6 translate-z-20">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">NACHIKETA NR</h3>
                  <Badge variant="emerald" size="xs">ATS Verified</Badge>
                </div>
                <p className="mt-1 font-mono text-xs text-indigo-300">Full Stack MERN Developer • Bangalore, Karnataka</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handlePreview}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-200 hover:from-indigo-400 hover:to-violet-500 hover:scale-105 active:scale-95"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Launch PDF Viewer</span>
                </button>

                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/80 px-5 py-2.5 text-xs font-semibold text-slate-200 shadow-sm transition duration-200 hover:border-indigo-500/40 hover:bg-slate-900 hover:text-white hover:scale-105 active:scale-95"
                >
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Structured Resume Content */}
            <div className="mt-8 space-y-8 font-sans text-slate-300 translate-z-10">
              {/* Contact Details Grid */}
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 font-mono text-xs p-4 rounded-xl border border-slate-800/80 bg-slate-950/80 shadow-inner">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Email</span>
                  <span className="text-white font-semibold">nrnachi34@gmail.com</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Phone</span>
                  <span className="text-white font-semibold">+91-9380552034</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Location</span>
                  <span className="text-white font-semibold">Bangalore, KA</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Status</span>
                  <span className="text-emerald-400 font-semibold">Immediate Joiner</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                  // Professional Summary
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  Full Stack Developer with expertise in building SaaS platforms using React.js, Node.js, Express.js, MongoDB, and TypeScript. Experienced in designing REST APIs, implementing JWT authentication, building multi-stage Kanban workflows, and accelerating development velocity with AI tools.
                </p>
              </div>

              {/* Education & Credentials */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 hover:border-indigo-500/40 transition-colors">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                    // Education
                  </h4>
                  <h5 className="font-display text-base font-bold text-white">Bachelor of Computer Applications (BCA)</h5>
                  <p className="mt-1 text-xs text-indigo-300">Vijayanagara College, Karnataka</p>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Oct 2021 – Dec 2024</span>
                    <span className="text-emerald-400 font-semibold">CGPA: 8.3 / 10.0</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 hover:border-indigo-500/40 transition-colors">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                    // Certifications & Fellowship
                  </h4>
                  <h5 className="font-display text-base font-bold text-white">Professional Software Fellowship</h5>
                  <p className="mt-1 text-xs text-indigo-300">AlmaBetter (Software Engineering with AI & DevOps)</p>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Completion: 2026</span>
                    <span className="text-indigo-400 font-semibold">MERN + AI + DevOps</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Tilt3DCard>
      </motion.div>
    </div>
  )
}

export default InteractiveResume
