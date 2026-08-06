import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideProjectPreview,
  hideResumePreview,
  selectProjectPreview,
  selectResumePreview,
} from '../../store/slices/previewSlice'

export const LivePreviewModal = () => {
  const dispatch = useDispatch()
  const projectPreview = useSelector(selectProjectPreview)
  const resumePreview = useSelector(selectResumePreview)

  const isVisible = projectPreview.isVisible || resumePreview.isVisible
  const isResume = resumePreview.isVisible
  const url = isResume ? resumePreview.url : projectPreview.url
  const title = isResume ? 'Interactive Resume PDF' : 'Live Web Application Preview'

  if (!isVisible) return null

  const handleClose = () => {
    if (isResume) {
      dispatch(hideResumePreview())
    } else {
      dispatch(hideProjectPreview())
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
      <div className="relative flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0f172a] shadow-2xl">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#0b0f17] px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleClose}
                className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] hover:opacity-80"
                title="Close"
              />
              <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-300 ml-2">{title}</span>
          </div>

          <div className="flex items-center gap-3">
            {url.startsWith('http') && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Open in new tab</span>
                <span>↗</span>
              </a>
            )}
            <button
              type="button"
              onClick={handleClose}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              Esc / Close
            </button>
          </div>
        </div>

        {/* Modal Iframe Content */}
        <div className="flex-1 bg-white">
          <iframe src={url} title={title} className="h-full w-full border-none" />
        </div>
      </div>
    </div>
  )
}

export default LivePreviewModal
