import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import Badge from '../ui/Badge'
import Magnetic from '../ui/Magnetic'
import { staggerItem, buttonHover, buttonTap } from '../../utils/motion'

export const InteractiveResume = () => {
  const dispatch = useDispatch()

  const handlePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <ContinuousSectionWrapper id="resume" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="06"
        eyebrow="CREDENTIALS"
        title="Resume & Qualifications"
        description="Inspect complete professional background online or launch the built-in PDF viewer to verify or download."
      />

      <motion.div variants={staggerItem} className="editorial-card rounded-xl p-6 lg:p-8 space-y-8">
        {/* Header Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#242424] pb-6">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-sans text-2xl font-bold text-[#F5F5F5]">NACHIKETA NR</h3>
              <Badge variant="green" size="xs">ATS Verified</Badge>
            </div>
            <p className="font-mono text-xs text-[#A1A1AA] mt-1">Full Stack Developer • MERN Stack Specialist • Bangalore, KA</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <Magnetic maxDisplacement={8}>
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={handlePreview}
                className="rounded bg-[#F5F5F5] px-4 py-2 text-[#050505] font-semibold hover:bg-white transition-colors"
              >
                Launch PDF Viewer
              </motion.button>
            </Magnetic>

            <Magnetic maxDisplacement={8}>
              <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                href={resumeUrl}
                download
                className="rounded border border-[#242424] bg-[#050505] px-4 py-2 text-[#F5F5F5] hover:border-[#383838] transition-colors inline-block"
              >
                Download PDF ⬇
              </motion.a>
            </Magnetic>
          </div>
        </div>

        {/* Structured Grid */}
        <div className="grid gap-6 md:grid-cols-2 font-sans text-xs">
          {/* Education */}
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="editorial-card-subtle rounded-lg p-5 space-y-2 transition-colors hover:border-[#22C55E]/40"
          >
            <span className="font-mono text-[10px] text-[#22C55E] uppercase font-bold block">// EDUCATION</span>
            <h4 className="font-sans text-sm font-bold text-[#F5F5F5]">Bachelor of Computer Applications (BCA)</h4>
            <p className="font-mono text-xs text-[#A1A1AA]">Vijayanagara College, Karnataka</p>
            <div className="flex justify-between font-mono text-[11px] text-[#71717A] pt-2 border-t border-[#242424]">
              <span>Oct 2021 – Dec 2024</span>
              <span className="text-[#22C55E]">CGPA: 8.3 / 10.0</span>
            </div>
          </motion.div>

          {/* Fellowship & Certification */}
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="editorial-card-subtle rounded-lg p-5 space-y-2 transition-colors hover:border-[#22C55E]/40"
          >
            <span className="font-mono text-[10px] text-[#22C55E] uppercase font-bold block">// FELLOWSHIP & CERTIFICATION</span>
            <h4 className="font-sans text-sm font-bold text-[#F5F5F5]">Professional Software Fellowship</h4>
            <p className="font-mono text-xs text-[#A1A1AA]">AlmaBetter (Software Engineering with AI & DevOps)</p>
            <div className="flex justify-between font-mono text-[11px] text-[#71717A] pt-2 border-t border-[#242424]">
              <span>Completed: 2026</span>
              <span className="text-[#F5F5F5]">Full Stack MERN</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </ContinuousSectionWrapper>
  )
}

export default InteractiveResume
