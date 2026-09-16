import React from 'react'
import { motion } from 'framer-motion'
import { EASE_PREMIUM } from '../../utils/motion'

export const SectionWrapper = ({
  id,
  children,
  className = '',
  delay = 0,
  glowColor = 'emerald',
  stagger = false,
}) => {
  const glowMap = {
    emerald: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    indigo: 'from-indigo-500/15 via-purple-500/5 to-transparent',
    blue: 'from-sky-500/15 via-indigo-500/5 to-transparent',
    violet: 'from-violet-500/15 via-fuchsia-500/5 to-transparent',
  }

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.985,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        delay,
        ease: EASE_PREMIUM,
        when: 'beforeChildren',
        staggerChildren: stagger ? 0.08 : 0,
      },
    },
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15% 0px -15% 0px', amount: 0.15 }}
      variants={sectionVariants}
      className={`relative py-16 sm:py-20 ${className}`}
    >
      {/* Top glowing ambient section line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r ${glowMap[glowColor] || glowMap.emerald} opacity-70 pointer-events-none`} />

      {/* Decorative ambient background orb */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-emerald-500/4 via-indigo-500/2 to-transparent blur-3xl rounded-full -z-10" />

      {children}
    </motion.section>
  )
}

export default SectionWrapper
