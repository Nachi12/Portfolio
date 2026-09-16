import React from 'react'

export const SectionHeading = ({ number, eyebrow, title, description, className = '' }) => {
  return (
    <div className={`mb-12 border-b border-[#242424] pb-6 ${className}`}>
      <div className="flex items-center gap-3 font-mono text-xs text-[#71717A] tracking-wider uppercase mb-2">
        {number && <span className="text-[#22C55E] font-bold">{number}</span>}
        {eyebrow && <span>// {eyebrow}</span>}
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-sans text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-sm leading-relaxed text-[#A1A1AA] font-sans">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionHeading
