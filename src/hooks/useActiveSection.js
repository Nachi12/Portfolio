import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../store/slices/tabSlice'

const DEFAULT_SECTIONS = [
  'home',
  'projects',
  'methodology',
  'stack',
  'experience',
  'about',
  'resume',
  'contact',
]

/**
 * Custom Hook: IntersectionObserver that tracks the section currently visible in viewport
 * and dispatches `setActiveTab` to Redux.
 */
export const useActiveSection = (sectionIds = DEFAULT_SECTIONS) => {
  const dispatch = useDispatch()
  const isClickNavigatingRef = useRef(false)

  const triggerNavClickLock = () => {
    isClickNavigatingRef.current = true
    setTimeout(() => {
      isClickNavigatingRef.current = false
    }, 800)
  }

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (isClickNavigatingRef.current) return

      // Find section with greatest visibility ratio
      const visibleEntries = entries.filter((e) => e.isIntersecting)
      if (visibleEntries.length > 0) {
        // Sort by intersectionRatio descending
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const topSectionId = visibleEntries[0].target.id
        if (topSectionId) {
          dispatch(setActiveTab(topSectionId))
        }
      }
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -40% 0px', // Active zone in middle of viewport
      threshold: [0.1, 0.3, 0.5, 0.7],
    })

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [dispatch, sectionIds])

  return { triggerNavClickLock }
}

export default useActiveSection
