import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'

export const RecruiterBar = () => {
  const dispatch = useDispatch()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nrnachi34@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  return (
    <aside
      className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 transform px-4 w-full max-w-lg"
      aria-label="Quick Actions"
    >
      <div className="flex items-center justify-between gap-3 rounded-lg border border-[#242424] bg-[#0A0A0A]/95 p-2 shadow-xl backdrop-blur-md">
        {/* Availability Badge */}
        <div className="hidden sm:flex items-center gap-2 pl-3 font-mono text-xs text-[#A1A1AA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          <span>Available for Roles</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end font-mono text-xs">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-initial rounded border border-[#242424] bg-[#111111] px-3 py-1.5 text-[#F5F5F5] hover:border-[#383838] transition-colors"
          >
            {copied ? 'Copied! ✓' : 'nrnachi34@gmail.com'}
          </button>

          <button
            type="button"
            onClick={handleResumePreview}
            className="rounded border border-[#242424] bg-[#111111] px-3 py-1.5 text-[#F5F5F5] hover:border-[#383838] transition-colors"
          >
            View Resume
          </button>

          <a
            href={resumeUrl}
            download
            className="rounded bg-[#F5F5F5] px-3 py-1.5 text-[#050505] font-semibold hover:bg-white transition-colors"
          >
            PDF ⬇
          </a>
        </div>
      </div>
    </aside>
  )
}

export default RecruiterBar
