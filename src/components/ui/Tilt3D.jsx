import React, { useRef, useState } from 'react'

export const Tilt3D = ({
  children,
  className = '',
  maxTilt = 6,
  scale = 1.012,
  perspective = 1000,
  ...props
}) => {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  })

  const handleMouseMove = (e) => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5

    const rotateX = (-yPct * maxTilt).toFixed(2)
    const rotateY = (xPct * maxTilt).toFixed(2)

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative preserve-3d group ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Tilt3D
