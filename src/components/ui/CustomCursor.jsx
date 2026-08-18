import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false)
  const [cursorType, setCursorType] = useState('default') // 'default' | 'pointer' | 'view' | 'magnetic'

  const cursorX = useSpring(0, { stiffness: 450, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 450, damping: 28 })

  const ringX = useSpring(0, { stiffness: 180, damping: 20 })
  const ringY = useSpring(0, { stiffness: 180, damping: 20 })

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || isReduced) return

    const handleMouseMove = (e) => {
      setVisible(true)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)

      // Detect interactive elements
      const target = e.target
      const interactiveEl = target.closest('a, button, [data-cursor], input, textarea')

      if (interactiveEl) {
        const customMode = interactiveEl.getAttribute('data-cursor')
        if (customMode) {
          setCursorType(customMode)
        } else {
          setCursorType('pointer')
        }
      } else {
        setCursorType('default')
      }
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY, ringX, ringY])

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Cursor Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 0.6 : cursorType === 'view' ? 0.4 : 1,
          backgroundColor: cursorType === 'view' ? '#22C55E' : '#F5F5F5',
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#F5F5F5] mix-blend-difference"
      />

      {/* Spring Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.6 : cursorType === 'view' ? 2.4 : 1,
          borderColor: cursorType === 'view' ? 'rgba(34, 197, 94, 0.6)' : 'rgba(245, 245, 245, 0.3)',
          backgroundColor: cursorType === 'view' ? 'rgba(34, 197, 94, 0.12)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 h-8 w-8 rounded-full border border-white/30"
      >
        {cursorType === 'view' && (
          <span className="flex h-full w-full items-center justify-center font-mono text-[8px] font-bold text-[#22C55E]">
            VIEW
          </span>
        )}
      </motion.div>
    </div>
  )
}

export default CustomCursor
