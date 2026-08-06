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
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transform px-4 w-full max-w-xl"
      aria-label="Recruiter Quick Actions"
    >
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-700/80 bg-[#0f172a]/90 p-2.5 shadow-2xl shadow-black/80 backdrop-blur-xl">
        {/* Availability Badge */}
        <div className="hidden sm:flex items-center gap-2 pl-2 text-xs font-mono text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-semibold text-emerald-400">Open to Roles</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-mono font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-700 active:scale-95"
          >
            <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{copied ? 'Copied Email! ✓' : 'Copy Email'}</span>
          </button>

          <button
            type="button"
            onClick={handleResumePreview}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/15 px-3.5 py-1.5 text-xs font-mono font-semibold text-indigo-300 transition hover:bg-indigo-500/25 active:scale-95"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View Resume</span>
          </button>

          <a
            href={resumeUrl}
            download
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-3.5 py-1.5 text-xs font-sans font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:from-indigo-400 hover:to-violet-500 active:scale-95"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>PDF</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default RecruiterBar
