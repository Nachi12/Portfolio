import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export const ProjectImageSlider = ({
  images = [],
  projectName = 'Project Showcase',
  durationTag = '',
  onSelectProject,
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  // Normalize images array to support both strings and objects { src, title, caption }
  const normalizedImages = (images && images.length > 0 ? images : []).map((img, idx) => {
    if (typeof img === 'string') {
      return {
        src: img,
        title: `Screen ${idx + 1}`,
        caption: '',
      }
    }
    return img
  })

  const [[page, direction], setPage] = useState([0, 0])

  if (normalizedImages.length === 0) {
    return null
  }

  const imageIndex = ((page % normalizedImages.length) + normalizedImages.length) % normalizedImages.length
  const currentImage = normalizedImages[imageIndex]

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const goToSlide = (idx) => {
    const dir = idx > imageIndex ? 1 : -1
    setPage([idx, dir])
  }

  return (
    <div
      onClick={onSelectProject}
      className={`group relative ${aspectRatio} w-full overflow-hidden rounded-xl border border-[#242424] bg-[#050505] cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Slide Image with AnimatePresence */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 320, damping: 32 },
              opacity: { duration: 0.28 },
              scale: { duration: 0.28 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImage.src}
              alt={`${projectName} - ${currentImage.title || 'Preview'}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Gradient & Title Badge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10 flex items-start justify-between p-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] bg-black/80 border border-[#22C55E]/40 text-[#22C55E] font-bold px-2 py-0.5 rounded shadow">
            {String(imageIndex + 1).padStart(2, '0')} / {String(normalizedImages.length).padStart(2, '0')}
          </span>
          <span className="font-mono text-[10px] text-[#F5F5F5] font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm truncate max-w-[200px] sm:max-w-[280px]">
            {currentImage.title}
          </span>
        </div>

        {durationTag && (
          <span className="font-mono text-[10px] bg-black/90 border border-white/10 text-[#22C55E] font-bold px-2.5 py-1 rounded shadow">
            {durationTag}
          </span>
        )}
      </div>

      {/* Bottom Gradient & Interactive Slide Controls */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 flex items-end justify-between p-3 pointer-events-none">
        {/* Caption */}
        <p className="font-sans text-[11px] text-[#A1A1AA] truncate max-w-[65%] hidden sm:block">
          {currentImage.caption}
        </p>

        {/* Slide Pagination Dots */}
        {normalizedImages.length > 1 && (
          <div className="pointer-events-auto flex items-center gap-1.5 ml-auto bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {normalizedImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(idx)
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === imageIndex
                    ? 'w-5 h-1.5 bg-[#22C55E]'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Arrows (visible on hover and permanent on touch) */}
      {normalizedImages.length > 1 && (
        <>
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              paginate(-1)
            }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/75 text-white hover:text-[#22C55E] border border-white/10 hover:border-[#22C55E]/50 backdrop-blur-md shadow-xl transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer active:scale-95"
            aria-label="Previous photo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              paginate(1)
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/75 text-white hover:text-[#22C55E] border border-white/10 hover:border-[#22C55E]/50 backdrop-blur-md shadow-xl transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer active:scale-95"
            aria-label="Next photo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Center "Explore Engineering Breakdown" Overlay on Card Hover */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <span className="bg-[#22C55E] text-black font-bold font-sans text-xs px-4 py-2 rounded-full uppercase shadow-2xl tracking-wider pointer-events-none">
          Explore Case Study ↗
        </span>
      </div>
    </div>
  )
}

export default ProjectImageSlider
