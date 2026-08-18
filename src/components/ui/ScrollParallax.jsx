import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export const ScrollParallax = ({
  children,
  className = '',
  speed = 0.1, // Negative for upward counter movement, positive for downward
  smooth = true,
  ...props
}) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Map scroll progress 0 -> 1 to y displacement (pixels)
  const rawY = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
  const y = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.5 })

  return (
    <div ref={containerRef} className={`relative ${className}`} {...props}>
      <motion.div style={{ y: smooth ? y : rawY }} className="gpu-layer">
        {children}
      </motion.div>
    </div>
  )
}

export default ScrollParallax
