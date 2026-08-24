import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * ParallaxDepthLayer component provides subtle 3D spatial parallax depth
 * bounded within the element's viewport passage to prevent section overlap.
 */
export const ParallaxDepthLayer = ({ children, depth = 'midground', className = '', style = {} }) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Controlled, bounded pixel shifts depending on depth layer
  const yRange = depth === 'background' ? [25, -25] : depth === 'foreground' ? [-25, 25] : [-10, 10]
  const scaleRange = depth === 'background' ? [0.97, 1] : depth === 'foreground' ? [1.02, 1] : [1, 1]

  const rawY = useTransform(scrollYProgress, [0, 1], yRange)
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], scaleRange)

  const smoothY = useSpring(rawY, { stiffness: 100, damping: 20 })
  const smoothScale = useSpring(rawScale, { stiffness: 100, damping: 20 })

  return (
    <motion.div
      ref={containerRef}
      style={{
        y: smoothY,
        scale: smoothScale,
        willChange: 'transform',
        ...style,
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxDepthLayer
