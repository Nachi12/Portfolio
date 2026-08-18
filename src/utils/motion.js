/**
 * Motion Tokens & Easing Curves for Thomas Thorstensson-Inspired Motion System
 */

// Premium decel curve
export const EASE_PREMIUM = [0.22, 1, 0.36, 1]

// Exponential ease out for sharp, smooth movement
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

// Smooth cubic in-out for spatial transitions
export const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1]

// Gentle spring physics preset for Framer Motion transitions
export const SPRING_GENTLE = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
  mass: 0.8,
}

// Magnetic spring return
export const SPRING_MAGNETIC = {
  type: 'spring',
  stiffness: 150,
  damping: 15,
  mass: 0.1,
}

// Split text word reveal variant
export const splitWordVariant = {
  hidden: {
    opacity: 0,
    y: '110%',
    rotateX: 18,
  },
  show: (i = 0) => ({
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.04,
      ease: EASE_PREMIUM,
    },
  }),
}

// Fade in slide up with scale
export const fadeInUpScale = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
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
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
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
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: EASE_PREMIUM,
      },
    },
  },
}

// Micro-interaction presets
export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.12, ease: 'easeOut' },
}

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: 'easeOut' },
}
