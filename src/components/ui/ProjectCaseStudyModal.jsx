import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from './Badge'
import Magnetic from './Magnetic'
import ProjectImageSlider from './ProjectImageSlider'
import { buttonHover, buttonTap } from '../../utils/motion'

export const ProjectCaseStudyModal = ({ project, onClose, onLivePreview }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#242424] bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl text-[#F5F5F5] font-sans my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#242424] bg-[#0A0A0A]/95 pb-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#22C55E]">{project.number}</span>
              <span className="font-mono text-xs text-[#71717A]">• {project.year}</span>
              <Badge variant="green" size="xs">{project.badge}</Badge>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#161616] p-2 text-[#A1A1AA] hover:bg-[#242424] hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Project Title & Summary */}
          <div className="mt-6 space-y-3">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">{project.name}</h2>
            <p className="font-mono text-xs text-[#22C55E] font-medium">{project.tagline}</p>
            <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed max-w-3xl">{project.solution}</p>
          </div>

          {/* Quick Links & CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs border-y border-[#242424] py-4">
            {project.url && (
              <Magnetic maxDisplacement={6}>
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  type="button"
                  onClick={() => {
                    onClose()
                    onLivePreview(project.url)
                  }}
                  className="rounded bg-[#22C55E] px-4 py-2 text-black font-bold shadow-lg shadow-[#22C55E]/20 hover:bg-[#1ea34d] transition-colors"
                >
                  Launch Live Demo ↗
                </motion.button>
              </Magnetic>
            )}

            <Magnetic maxDisplacement={6}>
              <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-[#242424] bg-[#111111] px-4 py-2 text-[#F5F5F5] hover:border-[#383838] transition-colors inline-block"
              >
                Inspect Source Code ↗
              </motion.a>
            </Magnetic>

            <span className="ml-auto font-mono text-xs text-[#71717A]">
              Role: <strong className="text-[#F5F5F5]">{project.role}</strong>
            </span>
          </div>

          {/* Application Visual Showcase Gallery */}
          {(project.images || project.image) && (
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider block font-bold">
                  // APPLICATION WORKFLOW & INTERFACE GALLERY
                </span>
                <span className="font-mono text-[10px] text-[#22C55E]">Slide or use arrows to view all screens</span>
              </div>
              <ProjectImageSlider
                images={project.images || [project.image]}
                projectName={project.name}
                durationTag={project.durationTag}
                aspectRatio="aspect-[16/9]"
              />
            </div>
          )}

          {/* Structured Storytelling Journey: Problem -> Approach -> Architecture -> Implementation -> Result */}
          <div className="mt-8 space-y-8">
            {/* 1. Problem */}
            <div className="editorial-card-subtle rounded-xl p-5 space-y-2">
              <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider block font-bold">
                01 // THE PROBLEM STATEMENT
              </span>
              <p className="font-sans text-sm text-[#F5F5F5] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. Engineering Approach */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-[#22C55E] uppercase tracking-wider block font-bold">
                02 // ENGINEERING APPROACH & DECISIONS
              </span>
              <div className="grid gap-3 sm:grid-cols-1">
                {project.decisions.map((d, idx) => (
                  <div key={idx} className="flex gap-3 items-start border-l-2 border-[#22C55E] pl-3 py-1 font-sans text-xs text-[#A1A1AA]">
                    <span className="font-mono text-[#22C55E] font-bold">0{idx + 1}.</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. System Architecture Breakdown */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-[#22C55E] uppercase tracking-wider block font-bold">
                03 // SYSTEM ARCHITECTURE & DATA FLOW
              </span>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.architectureDetails.map((item, idx) => (
                  <div key={idx} className="border border-[#242424] bg-[#111111] rounded-lg p-4 font-mono text-xs">
                    <span className="text-[#22C55E] font-bold block text-[11px] uppercase mb-1">{item.layer}</span>
                    <span className="text-[#A1A1AA] text-xs leading-snug block">{item.tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Deep Technical Implementation Breakdown */}
            {project.caseStudyDetails && (
              <div className="space-y-4 border-t border-[#242424] pt-6">
                <span className="font-mono text-[11px] text-[#22C55E] uppercase tracking-wider block font-bold">
                  04 // DEEP TECHNICAL IMPLEMENTATION
                </span>
                
                <div className="grid gap-4 sm:grid-cols-2 font-sans text-xs">
                  <div className="bg-[#111111] p-4 rounded-lg border border-[#242424] space-y-1">
                    <h4 className="font-mono text-xs font-bold text-[#F5F5F5]">Frontend & State Architecture</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">{project.caseStudyDetails.frontend}</p>
                  </div>

                  <div className="bg-[#111111] p-4 rounded-lg border border-[#242424] space-y-1">
                    <h4 className="font-mono text-xs font-bold text-[#F5F5F5]">Backend, Auth & APIs</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">{project.caseStudyDetails.backend}</p>
                  </div>

                  <div className="bg-[#111111] p-4 rounded-lg border border-[#242424] space-y-1">
                    <h4 className="font-mono text-xs font-bold text-[#F5F5F5]">Database Design & Schemas</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">{project.caseStudyDetails.database}</p>
                  </div>

                  <div className="bg-[#111111] p-4 rounded-lg border border-[#242424] space-y-1">
                    <h4 className="font-mono text-xs font-bold text-[#F5F5F5]">AI & Modern Tooling Integration</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">{project.caseStudyDetails.aiTooling}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Verifiable Result */}
            <div className="editorial-card-subtle rounded-xl p-5 border border-[#22C55E]/30 bg-[#22C55E]/5 space-y-2">
              <span className="font-mono text-[11px] text-[#22C55E] uppercase tracking-wider block font-bold">
                05 // ENGINEERING RESULT & VERIFICATION
              </span>
              <p className="font-sans text-xs text-[#F5F5F5] leading-relaxed">
                {project.caseStudyDetails?.result || 'Fully architected, tested, and validated full-stack product with clean separation of concerns, defensive security middleware, and responsive interface design.'}
              </p>
            </div>

            {/* Stack Tags */}
            <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
              <span className="text-[#71717A] self-center mr-2 text-[11px]">Technologies Used:</span>
              {project.stack.map((tech) => (
                <Badge key={tech} variant="default" size="xs">{tech}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProjectCaseStudyModal
