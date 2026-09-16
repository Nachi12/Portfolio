import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'

const identityPillars = [
  {
    code: '01',
    title: 'Full-Stack Execution',
    desc: 'Connecting intuitive React interfaces to type-safe Express.js REST APIs and structured MongoDB document schemas.',
  },
  {
    code: '02',
    title: 'Product Engineering',
    desc: 'Focusing on end-user workflow performance, clean state management with Redux Toolkit, and reliable session authentication.',
  },
  {
    code: '03',
    title: 'Clean Architecture',
    desc: 'Structuring backends into modular layers—separating router definitions, request validation, business logic, and database schemas.',
  },
  {
    code: '04',
    title: 'AI-Assisted Efficiency',
    desc: 'Leveraging Cursor AI, GitHub Copilot, and LLM tooling to accelerate repetitive setup, write unit tests, and refactor code rapidly.',
  },
]

const checkmarkItems = [
  'Interface to Production API',
  'Defensive Auth & RBAC Security',
  'Indexed MongoDB Schemas',
  'Accelerated AI Workflows',
]

export const IntroductionSection = () => {
  const sectionRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('reduced-motion') === 'true') {
      setReducedMotion(true)
    }
  }, [])

  // Section Scroll Progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Micro-parallax movements (max 8-12px)
  const rawLeftParallax = useTransform(scrollYProgress, [0.1, 0.9], [10, -10])
  const rawRightParallax = useTransform(scrollYProgress, [0.1, 0.9], [5, -5])
  const leftParallaxY = useSpring(rawLeftParallax, { stiffness: 90, damping: 20 })
  const rightParallaxY = useSpring(rawRightParallax, { stiffness: 90, damping: 20 })

  // Subtle heading drift on scroll
  const rawHeadingY = useTransform(scrollYProgress, [0.2, 0.8], [0, -8])
  const rawHeadingOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 1, 0.92])
  const headingScrollY = useSpring(rawHeadingY, { stiffness: 100, damping: 22 })
  const headingScrollOpacity = useSpring(rawHeadingOpacity, { stiffness: 100, damping: 22 })

  // Large statement scroll emphasis (subtle intensity ramp as section approaches center)
  const statementEmphasis = useTransform(scrollYProgress, [0.2, 0.45, 0.7], [0.85, 1, 0.9])
  const springEmphasis = useSpring(statementEmphasis, { stiffness: 90, damping: 20 })

  // Active card tracker based on scroll progress through the section
  useEffect(() => {
    if (reducedMotion) return
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // Divide section into 4 zones for cards 0, 1, 2, 3
      if (v < 0.35) setActiveCardIndex(0)
      else if (v < 0.50) setActiveCardIndex(1)
      else if (v < 0.65) setActiveCardIndex(2)
      else setActiveCardIndex(3)
    })
    return () => unsubscribe()
  }, [scrollYProgress, reducedMotion])

  // Subtle cursor interaction (max 2-4px)
  const mouseNormX = useMotionValue(0)
  const mouseNormY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseNormX, { stiffness: 80, damping: 20 })
  const smoothMouseY = useSpring(mouseNormY, { stiffness: 80, damping: 20 })

  const textCursorX = useTransform(smoothMouseX, [-1, 1], [-3, 3])
  const textCursorY = useTransform(smoothMouseY, [-1, 1], [-2, 2])
  const cardsCursorX = useTransform(smoothMouseX, [-1, 1], [-2, 2])
  const cardsCursorY = useTransform(smoothMouseY, [-1, 1], [-1.5, 1.5])

  const handleMouseMove = (e) => {
    if (reducedMotion) return
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mouseNormX.set(Math.max(-1, Math.min(1, normX)))
    mouseNormY.set(Math.max(-1, Math.min(1, normY)))
  }

  const handleMouseLeave = () => {
    mouseNormX.set(0)
    mouseNormY.set(0)
  }

  return (
    <ContinuousSectionWrapper id="intro" glowColor="emerald" stagger={false}>
      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {/* Section Heading with Editorial Reveal & Subtle Scroll Tracking */}
        <div className="mb-12 border-b border-[#242424] pb-6">
          {/* Eyebrow and Number */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 font-mono text-xs text-[#71717A] tracking-wider uppercase mb-2"
          >
            <span className="text-[#22C55E] font-bold">01</span>
            <span>// DEVELOPER IDENTITY</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            {/* Main Title with exact line break */}
            <motion.h2
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={
                reducedMotion
                  ? {}
                  : {
                      y: headingScrollY,
                      opacity: headingScrollOpacity,
                    }
              }
              className="font-sans text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl lg:text-4xl will-change-transform"
            >
              Engineering Mindset &<br className="hidden sm:inline" /> Craftsmanship
            </motion.h2>

            {/* Top Description with subtle blur-to-sharp fade */}
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: 'blur(3px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-sm leading-relaxed text-[#A1A1AA] font-sans"
            >
              A concise narrative on how I approach full-stack software development, bridge client design with backend security, and ship reliable web products.
            </motion.p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Narrative Column with Micro-Parallax & Cursor Response */}
          <motion.div
            style={
              reducedMotion
                ? {}
                : {
                    y: leftParallaxY,
                    x: textCursorX,
                  }
            }
            className="lg:col-span-7 space-y-6 font-sans text-sm leading-relaxed text-[#A1A1AA] will-change-transform"
          >
            {/* Large Statement with Progressive Line Reveal & Concept Emphasis */}
            <motion.div
              style={reducedMotion ? {} : { opacity: springEmphasis }}
              className="text-[#F5F5F5] font-semibold text-lg sm:text-xl leading-snug space-y-1"
            >
              {/* Line 1 */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                I build software with a focus on{' '}
                <span className="text-white hover:text-[#22C55E] transition-colors duration-300">
                  usability
                </span>
                ,{' '}
                <span className="text-white hover:text-[#22C55E] transition-colors duration-300">
                  system clarity
                </span>
                , and{' '}
              </motion.div>

              {/* Line 2 */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-white hover:text-[#22C55E] transition-colors duration-300">
                  end-to-end execution
                </span>
                —taking ideas from{' '}
                <span className="text-white hover:text-[#22C55E] transition-colors duration-300">
                  responsive interface design
                </span>
              </motion.div>

              {/* Line 3 */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                to working{' '}
                <span className="text-white hover:text-[#22C55E] transition-colors duration-300">
                  production APIs
                </span>
                .
              </motion.div>
            </motion.div>

            {/* Body Paragraph 1 */}
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              As a Full Stack Developer based in Bangalore, I believe strong software engineering isn't just about rendering components or creating API routes. It requires understanding <strong className="text-[#F5F5F5]">the problem domain</strong>, making thoughtful architectural decisions, and writing code that remains maintainable.
            </motion.p>

            {/* Body Paragraph 2 */}
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Whether engineering an idempotent financial statement parser in <strong className="text-[#F5F5F5]">ProductivityOS Pro</strong> or building a multi-user Kanban pipeline in <strong className="text-[#F5F5F5]">HireLog</strong>, I emphasize defensive validation, JWT session security, and snappy optimistic UI states.
            </motion.p>

            {/* Checkmark List with Sequential Activation */}
            <div className="pt-4 border-t border-[#242424] grid grid-cols-2 gap-4 font-mono text-xs text-[#F5F5F5]">
              {checkmarkItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0.4, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
                    className="text-[#22C55E] font-bold"
                  >
                    ✓
                  </motion.span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Identity Cards with Independent Entrance & Active Depth */}
          <motion.div
            style={
              reducedMotion
                ? {}
                : {
                    y: rightParallaxY,
                    x: cardsCursorX,
                  }
            }
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 will-change-transform"
          >
            {identityPillars.map((pillar, index) => {
              const isActive = activeCardIndex === index

              return (
                <motion.div
                  key={pillar.code}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0.6, y: 20, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  animate={
                    reducedMotion
                      ? {}
                      : {
                          scale: isActive ? 1.0 : 0.99,
                          opacity: isActive ? 1.0 : 0.92,
                          borderColor: isActive ? 'rgba(34, 197, 94, 0.35)' : '#242424',
                        }
                  }
                  className="editorial-card rounded-xl p-5 border bg-[#0A0A0A]/95 space-y-2 hover:border-[#22C55E]/40 transition-colors cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#22C55E]">
                      {pillar.code}
                    </span>
                    <motion.span
                      animate={
                        reducedMotion
                          ? {}
                          : {
                              scale: isActive ? [1, 1.25, 1] : 1,
                              opacity: isActive ? 1 : 0.7,
                            }
                      }
                      transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                      className="h-1.5 w-1.5 rounded-full bg-[#22C55E]"
                    />
                  </div>
                  <h4 className="font-sans text-sm font-bold text-[#F5F5F5]">{pillar.title}</h4>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-normal">{pillar.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </ContinuousSectionWrapper>
  )
}

export default IntroductionSection

