/**
 * Motion Tokens & Ultra-Smooth Easing Curves
 * Inspired by luxury digital experiences (Vercel, Apple, Linear)
 */

// Premium smooth deceleration curve
export const EASE_PREMIUM = [0.16, 1, 0.3, 1]

// Ultra-fluid exponential ease out for instant responsive movement
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

// Smooth cubic in-out for spatial transitions
export const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1]

// Ultra-smooth fluid spring preset for Framer Motion transitions
export const SPRING_GENTLE = {
  type: 'spring',
  stiffness: 220,
  damping: 24,
  mass: 0.5,
}

// Magnetic fluid spring return
export const SPRING_MAGNETIC = {
  type: 'spring',
  stiffness: 180,
  damping: 20,
  mass: 0.15,
}

// Split text word reveal variant
export const splitWordVariant = {
  hidden: {
    opacity: 0,
    y: '100%',
    rotateX: 12,
  },
  show: (i = 0) => ({
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.035,
      ease: EASE_PREMIUM,
    },
  }),
}

// Fade in slide up with scale
export const fadeInUpScale = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay,
      ease: EASE_PREMIUM,
    },
  },
})

// Stagger parent container
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      ease: EASE_PREMIUM,
    },
  },
})

// Stagger item child
export const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
    },
  },
}

// Hero entrance sequence
export const heroSequence = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE_PREMIUM,
      },
    },
  },
}

// Micro-interaction presets
export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
}

export const buttonHover = {
  scale: 1.025,
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
}
