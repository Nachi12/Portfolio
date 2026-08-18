import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const Magnetic = ({
  children,
  className = '',
  maxDisplacement = 12,
  ...props
}) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    // Respect reduced motion & touch devices
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return
    }

    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const x = (distanceX / (width / 2)) * maxDisplacement
    const y = (distanceY / (height / 2)) * maxDisplacement

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 16, mass: 0.2 }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
