import React, { useState, useEffect, useRef, useId } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
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

// Interactive individual letter component for "NACHIKETA NR"
const InteractiveLetter = ({ char, reducedMotion }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 350, damping: 22 })
  const springY = useSpring(y, { stiffness: 350, damping: 22 })
  const [isHovered, setIsHovered] = useState(false)

  const handlePointerMove = (e) => {
    if (reducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - (rect.left + rect.width / 2)
    const offsetY = e.clientY - (rect.top + rect.height / 2)
    
    // Subtle deflection: max ±3px horizontal, -4px vertical lift
    x.set(Math.max(-3, Math.min(3, offsetX * 0.2)))
    y.set(Math.max(-5, Math.min(2, offsetY * 0.25 - 2.5)))
    setIsHovered(true)
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.span
      style={{
        x: reducedMotion ? 0 : springX,
        y: reducedMotion ? 0 : springY,
        display: 'inline-block',
        willChange: 'transform',
      }}
      animate={{
        color: isHovered && !reducedMotion ? '#FFFFFF' : '#F5F5F5',
        filter: isHovered && !reducedMotion ? 'brightness(1.18)' : 'brightness(1.0)',
      }}
      transition={{ duration: 0.2 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="cursor-default select-none"
    >
      {char}
    </motion.span>
  )
}

export const HeroSection = () => {
  const dispatch = useDispatch()
  const { scrollTo } = useSmoothScroll()
  const { scrollY } = useScroll()
  const heroRef = useRef(null)

  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('reduced-motion') === 'true') {
      setReducedMotion(true)
    }
  }, [])

  // Refined subtle scroll response as requested:
  // Scroll 0%: scale 1.0, opacity 1.0, y 0px
  // Scroll 50% (approx 400px): scale ~0.985, opacity ~0.90, y -18px
  // Scroll 100% (approx 800px): scale ~0.97, opacity ~0.72, y -36px
  const rawTitleScale = useTransform(scrollY, [0, 400, 800], [1, 0.985, 0.97])
  const rawTitleOpacity = useTransform(scrollY, [0, 400, 800], [1, 0.90, 0.72])
  const rawTitleY = useTransform(scrollY, [0, 800], [0, -36])

  const titleScale = useSpring(rawTitleScale, { stiffness: 120, damping: 25 })
  const titleOpacity = useSpring(rawTitleOpacity, { stiffness: 120, damping: 25 })
  const titleY = useSpring(rawTitleY, { stiffness: 120, damping: 25 })

  // Cursor-based 3D depth for the typography
  const mouseNormX = useMotionValue(0)
  const mouseNormY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseNormX, { stiffness: 90, damping: 20 })
  const smoothMouseY = useSpring(mouseNormY, { stiffness: 90, damping: 20 })

  // Subtle name shifts & tilts (max 6px x, 4px y, ±1.5° tilt)
  const nameParallaxX = useTransform(smoothMouseX, [-1, 1], [-6, 6])
  const nameParallaxY = useTransform(smoothMouseY, [-1, 1], [-4, 4])
  const nameRotateX = useTransform(smoothMouseY, [-1, 1], [1.5, -1.5])
  const nameRotateY = useTransform(smoothMouseX, [-1, 1], [-2, 2])

  // Subtle subtitle and paragraph shifts (max ±2-3px)
  const subtitleParallaxX = useTransform(smoothMouseX, [-1, 1], [-3, 3])
  const subtitleParallaxY = useTransform(smoothMouseY, [-1, 1], [-2, 2])
  const descParallaxX = useTransform(smoothMouseX, [-1, 1], [-2, 2])
  const descParallaxY = useTransform(smoothMouseY, [-1, 1], [-1.5, 1.5])

  const handleMouseMove = (e) => {
    if (reducedMotion) return
    const width = window.innerWidth
    const height = window.innerHeight
    // Normalized to -1 .. 1 from center
    const normX = (e.clientX / width) * 2 - 1
    const normY = (e.clientY / height) * 2 - 1
    mouseNormX.set(Math.max(-1, Math.min(1, normX)))
    mouseNormY.set(Math.max(-1, Math.min(1, normY)))
  }

  const handleMouseLeave = () => {
    mouseNormX.set(0)
    mouseNormY.set(0)
  }

  // Tech node separation on scroll (existing)
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
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[120vh] flex flex-col justify-between pt-16 pb-20 overflow-hidden"
    >
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
        style={
          reducedMotion
            ? { zIndex: 20 }
            : {
                scale: titleScale,
                opacity: titleOpacity,
                y: titleY,
                zIndex: 20,
              }
        }
        className="relative mx-auto w-full max-w-6xl text-center space-y-6 pt-12"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-[#242424] bg-[#0D0D0D]/90 px-4 py-1.5 font-mono text-xs text-[#A1A1AA] backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span>Full Stack Developer • Bangalore, KA, India</span>
        </motion.div>

        {/* Large Spatial Typography */}
        <div className="space-y-2 [perspective:1000px]">
          {/* Step 1 in Reveal: NACHIKETA NR */}
          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={
              reducedMotion
                ? {}
                : {
                    x: nameParallaxX,
                    y: nameParallaxY,
                    rotateX: nameRotateX,
                    rotateY: nameRotateY,
                    transformStyle: 'preserve-3d',
                  }
            }
            className="font-sans text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-[#F5F5F5] uppercase leading-none will-change-transform"
          >
            {/* Word 1: NACHIKETA */}
            <span className="inline-block whitespace-nowrap">
              {'NACHIKETA'.split('').map((char, i) => (
                <InteractiveLetter key={`n-${i}`} char={char} reducedMotion={reducedMotion} />
              ))}
            </span>
            {' '}
            {/* Word 2: NR */}
            <span className="inline-block whitespace-nowrap">
              {'NR'.split('').map((char, i) => (
                <InteractiveLetter key={`nr-${i}`} char={char} reducedMotion={reducedMotion} />
              ))}
            </span>
          </motion.h1>

          {/* Step 2 in Reveal: FULL STACK DEVELOPER */}
          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: 'blur(4px)' }}
            animate={
              reducedMotion
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }
            }
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={
              reducedMotion
                ? {}
                : {
                    x: subtitleParallaxX,
                    y: subtitleParallaxY,
                  }
            }
            className="font-mono text-lg sm:text-2xl text-[#22C55E] font-semibold tracking-wide uppercase will-change-transform"
          >
            <motion.span
              animate={
                reducedMotion
                  ? {}
                  : {
                      filter: [
                        'brightness(1)',
                        'brightness(1)',
                        'brightness(1.22)',
                        'brightness(1)',
                      ],
                    }
              }
              transition={{
                repeat: Infinity,
                duration: 6,
                times: [0, 0.6, 0.75, 1],
                ease: 'easeInOut',
              }}
              className="inline-block"
            >
              FULL STACK DEVELOPER
            </motion.span>
          </motion.p>
        </div>

        {/* Step 3 in Reveal: Concise Value Proposition */}
        <motion.p
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={
            reducedMotion
              ? {}
              : {
                  x: descParallaxX,
                  y: descParallaxY,
                }
          }
          className="mx-auto max-w-2xl font-sans text-base sm:text-xl text-[#A1A1AA] leading-relaxed will-change-transform"
        >
          Building scalable, production-oriented web applications using <strong className="text-[#F5F5F5]">React.js, TypeScript, Node.js, Express, and MongoDB</strong>—combining clean system architecture with AI-assisted software development.
        </motion.p>

        {/* Step 4 in Reveal: Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs"
        >
          <Magnetic maxDisplacement={8}>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              type="button"
              onClick={() => handleNavClick('projects')}
              className="rounded-md bg-[#22C55E] px-7 py-3.5 font-bold text-black shadow-lg shadow-[#22C55E]/20 hover:bg-[#1ea34d] transition-colors uppercase tracking-wider cursor-pointer"
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
              className="rounded-md border border-[#242424] bg-[#0A0A0A] px-6 py-3.5 text-[#F5F5F5] hover:border-[#383838] hover:bg-[#111111] transition-colors font-semibold uppercase tracking-wider cursor-pointer"
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
              className="rounded-md border border-[#242424] bg-[#050505] px-5 py-3.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors font-mono cursor-pointer"
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

