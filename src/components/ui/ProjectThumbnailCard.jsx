import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { showProjectPreview } from '../../store/slices/previewSlice'
import Badge from './Badge'
import Magnetic from './Magnetic'

export const ProjectThumbnailCard = ({ project, onPreviewClick }) => {
  const dispatch = useDispatch()

  const handlePreview = () => {
    if (project.url) {
      dispatch(showProjectPreview(project.url))
    } else if (onPreviewClick) {
      onPreviewClick(project)
    }
  }

  return (
    <div className="group relative bg-[#0a0a0a] border border-[#242424] hover:border-[#22C55E]/40 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* 16:9 YouTube Widescreen Thumbnail Container */}
      <div 
        className="relative aspect-[16/9] w-full overflow-hidden bg-[#121212] cursor-pointer"
        onClick={handlePreview}
        data-cursor="view"
      >
        {/* Project Thumbnail Image with Zoom Animation */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* HD / Category Tag Top Left */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#22C55E] border border-[#22C55E]/30 px-2 py-0.5 rounded shadow">
            {project.badge || 'FEATURED'}
          </span>
          {project.url && (
            <span className="flex items-center gap-1 font-mono text-[10px] bg-red-600/90 text-white font-bold px-2 py-0.5 rounded shadow animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              LIVE DEMO
            </span>
          )}
        </div>

        {/* Duration / Tech Specs Badge Bottom Right (YouTube Style) */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="font-mono text-[11px] font-semibold bg-black/85 backdrop-blur-md text-[#F5F5F5] border border-white/10 px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            {project.durationTag || project.role}
          </span>
        </div>

        {/* Hover Center Play / Preview Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#22C55E] text-black font-sans font-bold text-xs px-4 py-2.5 rounded-full shadow-2xl tracking-wide uppercase"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>{project.url ? 'Launch Preview' : 'View Architecture'}</span>
          </motion.div>
        </div>

        {/* YouTube Accent Progress Bar Line at Bottom */}
        <div className="absolute bottom-0 left-0 h-1 bg-[#22C55E] w-0 group-hover:w-full transition-all duration-500 ease-out z-30" />
      </div>

      {/* Details Box below thumbnail */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <div className="flex items-center justify-between font-mono text-xs text-[#71717A] mb-1.5">
            <span className="text-[#22C55E] font-bold">{project.number}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-sans text-xl font-bold text-[#F5F5F5] group-hover:text-[#22C55E] transition-colors">
            {project.name}
          </h3>

          <p className="font-mono text-xs text-[#A1A1AA] mt-1 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1e1e1e]">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="muted" size="xs">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="muted" size="xs">
              +{project.stack.length - 4}
            </Badge>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e] font-mono text-xs">
          {project.url ? (
            <button
              type="button"
              onClick={handlePreview}
              className="text-[#22C55E] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Live Demo</span>
              <span>↗</span>
            </button>
          ) : (
            <span className="text-[#71717A] italic text-[11px]">Production SaaS</span>
          )}

          <Magnetic maxDisplacement={5}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#A1A1AA] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  )
}

export default ProjectThumbnailCard
