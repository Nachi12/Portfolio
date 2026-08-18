import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {},
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

export const SmoothScrollProvider = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState(null)
  const reqIdRef = useRef(null)

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    })

    setLenisInstance(lenis)

    const update = (time) => {
      lenis.raf(time)
      reqIdRef.current = requestAnimationFrame(update)
    }

    reqIdRef.current = requestAnimationFrame(update)

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current)
      lenis.destroy()
      setLenisInstance(null)
    }
  }, [])

  const scrollTo = (target, options = {}) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      })
    } else {
      const elem = typeof target === 'string' ? document.querySelector(target) : target
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export default SmoothScrollProvider
