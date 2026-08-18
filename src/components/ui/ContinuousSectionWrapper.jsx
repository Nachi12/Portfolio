import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EASE_PREMIUM } from '../../utils/motion'

export const ContinuousSectionWrapper = ({
  id,
  children,
  className = '',
  glowColor = 'emerald',
  stagger = false,
}) => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  // Continuous Entrance & Exit Transformation
  // 0.0 -> Entering (start below viewport)
  // 0.25 -> Fully in view
  // 0.75 -> Beginning exit
  // 1.0 -> Fully exited above viewport
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.15, 1, 1, 0.45])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -25])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.985])

  const glowMap = {
    emerald: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    indigo: 'from-indigo-500/15 via-purple-500/5 to-transparent',
    blue: 'from-sky-500/15 via-indigo-500/5 to-transparent',
    violet: 'from-violet-500/15 via-fuchsia-500/5 to-transparent',
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: EASE_PREMIUM,
        when: 'beforeChildren',
        staggerChildren: stagger ? 0.08 : 0,
      },
    },
  }

  return (
    <motion.section
      id={id}
      ref={targetRef}
      style={{ opacity, y, scale }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={containerVariants}
      className={`relative py-16 sm:py-20 gpu-layer ${className}`}
    >
      {/* Top glowing ambient line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r ${glowMap[glowColor] || glowMap.emerald} opacity-70 pointer-events-none`} />

      {/* Ambient glowing orb */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-emerald-500/4 via-indigo-500/2 to-transparent blur-3xl rounded-full -z-10" />

      {children}
    </motion.section>
  )
}

export default ContinuousSectionWrapper
