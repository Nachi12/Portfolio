import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE_PREMIUM } from '../../utils/motion'

export const Preloader = () => {
  const [count, setCount] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    // Check if preloader has already run in current session
    if (sessionStorage.getItem('preloader_done')) {
      setComplete(true)
      return
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setComplete(true)
            sessionStorage.setItem('preloader_done', 'true')
          }, 200)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 8
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.75, ease: EASE_PREMIUM }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#050505] p-8 text-[#F5F5F5] font-mono"
        >
          <div className="w-full flex justify-between text-xs text-[#71717A]">
            <span>NACHIKETA NR</span>
            <span>FULL STACK DEVELOPER</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              className="font-mono text-2xl font-bold bg-[#111111] border border-[#242424] px-4 py-2 rounded text-[#22C55E]"
            >
              NR
            </motion.div>
            <div className="text-4xl font-extrabold text-[#F5F5F5] tracking-tighter">
              {Math.min(count, 100)}%
            </div>
          </div>

          <div className="w-full max-w-xs bg-[#111111] h-[2px] rounded-full overflow-hidden">
            <motion.div
              className="bg-[#22C55E] h-full"
              style={{ width: `${Math.min(count, 100)}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
