import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EASE_PREMIUM } from '../../utils/motion'

export const ContinuousSectionWrapper = ({
  id,
  children,
  className = '',
  glowColor = 'emerald',
  stagger = false,
  disableTransform = false,
}) => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  // Continuous Entrance & Exit Transformation
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.2, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [25, 0, 0, -15])

  const glowMap = {
    emerald: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    indigo: 'from-indigo-500/15 via-purple-500/5 to-transparent',
    blue: 'from-sky-500/15 via-indigo-500/5 to-transparent',
    violet: 'from-violet-500/15 via-fuchsia-500/5 to-transparent',
  }

  const containerVariants = {
    hidden: disableTransform ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      ...(disableTransform ? {} : { y: 0 }),
      transition: {
        duration: 0.5,
        ease: EASE_PREMIUM,
        when: 'beforeChildren',
        staggerChildren: stagger ? 0.06 : 0,
      },
    },
  }

  return (
    <motion.section
      id={id}
      ref={targetRef}
      style={disableTransform ? { opacity } : { opacity, y }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-5% 0px -5% 0px' }}
      variants={containerVariants}
      className={`relative py-20 sm:py-28 ${className}`}
    >
      {/* Top glowing ambient divider line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r ${glowMap[glowColor] || glowMap.emerald} opacity-70 pointer-events-none`} />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-emerald-500/5 via-indigo-500/2 to-transparent blur-3xl rounded-full -z-10" />

      {children}
    </motion.section>
  )
}

export default ContinuousSectionWrapper
