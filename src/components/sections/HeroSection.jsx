import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import { useSmoothScroll } from '../ui/SmoothScrollProvider'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'
import ParallaxDepthLayer from '../ui/ParallaxDepthLayer'
import Magnetic from '../ui/Magnetic'
import { buttonHover, buttonTap } from '../../utils/motion'

const techNodes = [
  { name: 'React 19', pos: 'top-10 left-[10%]', depth: 'foreground', tag: 'UI Library' },
  { name: 'TypeScript', pos: 'top-20 right-[12%]', depth: 'midground', tag: 'Type Safety' },
  { name: 'Node.js', pos: 'bottom-28 left-[15%]', depth: 'midground', tag: 'Runtime' },
  { name: 'MongoDB', pos: 'bottom-20 right-[15%]', depth: 'foreground', tag: 'Database' },
  { name: 'Express.js', pos: 'top-1/2 left-[5%]', depth: 'background', tag: 'REST Server' },
  { name: 'AI Workflows', pos: 'top-1/3 right-[8%]', depth: 'foreground', tag: 'Cursor / Copilot' },
]

export const HeroSection = () => {
  const dispatch = useDispatch()
  const { scrollTo } = useSmoothScroll()
  const { scrollY } = useScroll()

  // Scroll Transformation Values
  const rawTitleScale = useTransform(scrollY, [0, 800], [1, 0.7])
  const rawTitleZ = useTransform(scrollY, [0, 800], [0, -300])
  const rawTitleOpacity = useTransform(scrollY, [0, 500, 800], [1, 0.8, 0.2])
  
  const titleScale = useSpring(rawTitleScale, { stiffness: 100, damping: 25 })
  const titleOpacity = useSpring(rawTitleOpacity, { stiffness: 100, damping: 25 })

  // Tech node separation on scroll
  const rawNodeSpread = useTransform(scrollY, [0, 600], [0, 100])
  const nodeSpread = useSpring(rawNodeSpread, { stiffness: 90, damping: 20 })

  const handleNavClick = (tabId) => {
    dispatch(setActiveTab(tabId))
    scrollTo(`#${tabId}`)
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <section id="home" className="relative min-h-[120vh] flex flex-col justify-between pt-16 pb-20 overflow-hidden">
      {/* 3D Floating Technology Nodes Environment */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {techNodes.map((node, i) => (
          <ParallaxDepthLayer key={node.name} depth={node.depth} className={`absolute ${node.pos}`}>
            <motion.div
              style={{
                x: i % 2 === 0 ? nodeSpread : -nodeSpread,
                opacity: useTransform(scrollY, [0, 200, 700], [0.3, 1, 0]),
              }}
              className="flex items-center gap-2 rounded-full border border-[#242424] bg-[#0A0A0A]/90 px-3.5 py-1.5 font-mono text-xs text-[#22C55E] backdrop-blur-md shadow-lg shadow-black/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span>{node.name}</span>
              <span className="text-[10px] text-[#71717A]">• {node.tag}</span>
            </motion.div>
          </ParallaxDepthLayer>
        ))}
      </div>

      {/* Main Spatial Typography Stage */}
      <motion.div
        style={{ scale: titleScale, opacity: titleOpacity, zIndex: 20 }}
        className="relative mx-auto w-full max-w-6xl text-center space-y-6 pt-12"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#242424] bg-[#0D0D0D]/90 px-4 py-1.5 font-mono text-xs text-[#A1A1AA] backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span>Full Stack Developer • Bangalore, KA, India</span>
        </div>

        {/* Large Spatial Typography */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-[#F5F5F5] uppercase leading-none"
          >
            NACHIKETA NR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-lg sm:text-2xl text-[#22C55E] font-semibold tracking-wide uppercase"
          >
            FULL STACK DEVELOPER
          </motion.p>
        </div>

        {/* Concise Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl font-sans text-base sm:text-xl text-[#A1A1AA] leading-relaxed"
        >
          Building scalable, production-oriented web applications using <strong className="text-[#F5F5F5]">React.js, TypeScript, Node.js, Express, and MongoDB</strong>—combining clean system architecture with AI-assisted software development.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs"
        >
          <Magnetic maxDisplacement={8}>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              type="button"
              onClick={() => handleNavClick('projects')}
              className="rounded-md bg-[#22C55E] px-7 py-3.5 font-bold text-black shadow-lg shadow-[#22C55E]/20 hover:bg-[#1ea34d] transition-colors uppercase tracking-wider"
            >
              Explore Projects ↓
            </motion.button>
          </Magnetic>

          <Magnetic maxDisplacement={8}>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              type="button"
              onClick={() => handleNavClick('contact')}
              className="rounded-md border border-[#242424] bg-[#0A0A0A] px-6 py-3.5 text-[#F5F5F5] hover:border-[#383838] hover:bg-[#111111] transition-colors font-semibold uppercase tracking-wider"
            >
              Contact / Hire Me
            </motion.button>
          </Magnetic>

          <Magnetic maxDisplacement={8}>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              type="button"
              onClick={handleResumePreview}
              className="rounded-md border border-[#242424] bg-[#050505] px-5 py-3.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors font-mono"
            >
              Resume PDF ↗
            </motion.button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Spatial Scroll Indicator Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-20 mx-auto text-center pt-10"
      >
        <button
          type="button"
          onClick={() => handleNavClick('intro')}
          className="inline-flex flex-col items-center gap-2 font-mono text-[11px] text-[#71717A] hover:text-[#22C55E] transition-colors group cursor-pointer"
        >
          <span>SCROLL TO ENTER DIGITAL WORLD</span>
          <span className="h-6 w-3.5 rounded-full border border-[#242424] flex items-start justify-center p-1 group-hover:border-[#22C55E]">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="h-1.5 w-1.5 rounded-full bg-[#22C55E]"
            />
          </span>
        </button>
      </motion.div>
    </section>
  )
}

export default HeroSection
