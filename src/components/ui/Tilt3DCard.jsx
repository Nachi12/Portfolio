import React, { useRef, useState } from 'react'

/**
 * Tilt3DCard Component
 * Wraps content with interactive 3D depth tilt, specular reflection glare, and smooth return physics.
 */
export const Tilt3DCard = ({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  ...props
}) => {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
  })
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate mouse offset from center (-1 to 1)
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5

    // Calculate tilt angles (rotateX depends on yPct, rotateY depends on xPct)
    const rotateX = (-yPct * maxTilt).toFixed(2)
    const rotateY = (xPct * maxTilt).toFixed(2)

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.1, 0.2, 0.1, 1)',
    })

    if (glare) {
      setGlarePosition({
        x: Math.round((mouseX / width) * 100),
        y: Math.round((mouseY / height) * 100),
        opacity: 1,
      })
    }
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
    })
    if (glare) {
      setGlarePosition((prev) => ({ ...prev, opacity: 0 }))
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`card-3d-wrapper relative preserve-3d group ${className}`}
      {...props}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(400px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15), transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
        />
      )}
    </div>
  )
}

export default Tilt3DCard
