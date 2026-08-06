import React from 'react'

export const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono font-medium text-indigo-300 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse-subtle" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
