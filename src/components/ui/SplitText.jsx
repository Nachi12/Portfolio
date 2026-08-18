import React from 'react'
import { motion } from 'framer-motion'
import { EASE_PREMIUM } from '../../utils/motion'

export const SplitText = ({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  stagger = 0.035,
}) => {
  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>
  }

  const words = children.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      rotateX: 15,
    },
    show: {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: EASE_PREMIUM,
      },
    },
  }

  return (
    <Component className={className}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={containerVariants}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
      >
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden py-0.5 leading-none">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  )
}

export default SplitText
