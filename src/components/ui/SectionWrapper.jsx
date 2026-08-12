import React from 'react'
import { motion } from 'framer-motion'

export const SectionWrapper = ({
  id,
  children,
  className = '',
  delay = 0,
  glowColor = 'indigo',
}) => {
  const glowMap = {
    indigo: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    blue: 'from-sky-500/10 via-indigo-500/5 to-transparent',
    emerald: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    violet: 'from-violet-500/10 via-fuchsia-500/5 to-transparent',
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`relative py-16 sm:py-20 ${className}`}
    >
      {/* Top glowing ambient section line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r ${glowMap[glowColor]} opacity-60`} />

      {/* Decorative ambient background orb */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/5 via-purple-500/3 to-transparent blur-3xl rounded-full -z-10" />

      {children}
    </motion.section>
  )
}

export default SectionWrapper
