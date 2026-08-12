import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'

const codeSnippets = [
  {
    id: 'component',
    label: 'React Component (TypeScript)',
    filename: 'KanbanBoard.tsx',
    code: `import React, { useState, useEffect } from 'react';
import { useKanbanStore } from '../store/useKanbanStore';

export const KanbanBoard: React.FC = () => {
  const { columns, updateApplicationStage } = useKanbanStore();
  const [activeDragId, setActiveDragId] = useState<string | null>(null);

  const handleDragEnd = async (id: string, targetStage: string) => {
    // Optimistic UI update before network request
    updateApplicationStage(id, targetStage);
    await api.patch(\`/api/v1/applications/\${id}/stage\`, { stage: targetStage });
  };

  return (
    <div className="grid grid-cols-5 gap-4 font-sans">
      {columns.map(col => (
        <StageColumn key={col.id} column={col} onDrop={handleDragEnd} />
      ))}
    </div>
  );
};`,
  },
  {
    id: 'backend',
    label: 'Node.js REST API (Express)',
    filename: 'authMiddleware.ts',
    code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
};`,
  },
  {
    id: 'database',
    label: 'MongoDB Schema (Mongoose)',
    filename: 'Application.ts',
    code: `import { Schema, model } from 'mongoose';

const ApplicationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  company: { type: String, required: true, trim: true },
  roleTitle: { type: String, required: true },
  stage: { 
    type: String, 
    enum: ['Wishlist', 'Applied', 'Interviewing', 'Offered', 'Rejected'], 
    default: 'Applied' 
  },
  appliedDate: { type: Date, default: Date.now },
}, { timestamps: true });

export const Application = model('Application', ApplicationSchema);`,
  },
]

export const HeroSection = () => {
  const dispatch = useDispatch()
  const [activeCodeTab, setActiveCodeTab] = useState('component')

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId))
    const elem = document.getElementById(tabId)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  const activeSnippet = codeSnippets.find((s) => s.id === activeCodeTab)

  return (
    <section id="home" className="pt-10 pb-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Confident Editorial Intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#242424] bg-[#0A0A0A] px-3 py-1 font-mono text-xs text-[#A1A1AA]">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <span>Available for Full-Time Roles • Bangalore, India</span>
          </div>

          {/* Editorial Title */}
          <h1 className="font-sans text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl leading-[1.15]">
            Full Stack Developer building thoughtful web applications from frontend to backend.
          </h1>

          {/* Narrative Intro */}
          <p className="font-sans text-base leading-relaxed text-[#A1A1AA] max-w-2xl sm:text-lg">
            I am <strong className="text-[#F5F5F5] font-semibold">Nachiketa NR</strong>. I build reliable web products using React, Node.js, Express, and MongoDB. Focused on clean system architecture, REST API security, and intuitive user interfaces.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => handleTabClick('projects')}
              className="rounded-md bg-[#F5F5F5] px-5 py-2.5 font-semibold text-[#050505] hover:bg-white transition-colors"
            >
              View Work ↓
            </button>

            <button
              type="button"
              onClick={handleResumePreview}
              className="rounded-md border border-[#242424] bg-[#0A0A0A] px-5 py-2.5 text-[#F5F5F5] hover:border-[#383838] hover:bg-[#111111] transition-colors"
            >
              View Resume
            </button>

            <a
              href="https://github.com/Nachi12"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#242424] bg-[#050505] px-4 py-2.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nachiketa12/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#242424] bg-[#050505] px-4 py-2.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code Architecture Inspector */}
        <div className="lg:col-span-5 border border-[#242424] rounded-xl bg-[#0A0A0A] overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#242424] bg-[#111111] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
              <span className="ml-2 font-mono text-xs text-[#71717A]">{activeSnippet.filename}</span>
            </div>
            <span className="font-mono text-[10px] text-[#22C55E] uppercase tracking-wider">Architecture</span>
          </div>

          {/* Snippet Switcher Tabs */}
          <div className="flex border-b border-[#242424] bg-[#050505] font-mono text-[11px]">
            {codeSnippets.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveCodeTab(s.id)}
                className={`flex-1 py-2 text-center transition-colors border-r border-[#242424] last:border-r-0 ${
                  activeCodeTab === s.id
                    ? 'bg-[#0A0A0A] text-[#F5F5F5] font-semibold border-b-2 border-b-[#22C55E]'
                    : 'text-[#71717A] hover:text-[#A1A1AA]'
                }`}
              >
                {s.id.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Viewer Container */}
          <div className="p-4 font-mono text-xs leading-relaxed text-[#A1A1AA] overflow-x-auto bg-[#0A0A0A] min-h-[260px]">
            <pre className="text-slate-300">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Engineering Snapshot Strip */}
      <div className="mt-14 border-y border-[#242424] py-5 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
        <div>
          <span className="text-[#71717A] block text-[10px] uppercase tracking-wider">ROLE</span>
          <span className="text-[#F5F5F5] font-semibold">Full Stack Developer</span>
        </div>
        <div>
          <span className="text-[#71717A] block text-[10px] uppercase tracking-wider">PRIMARY STACK</span>
          <span className="text-[#F5F5F5] font-semibold">MERN + TypeScript</span>
        </div>
        <div>
          <span className="text-[#71717A] block text-[10px] uppercase tracking-wider">LOCATION</span>
          <span className="text-[#F5F5F5] font-semibold">Bangalore, India</span>
        </div>
        <div>
          <span className="text-[#71717A] block text-[10px] uppercase tracking-wider">AVAILABILITY</span>
          <span className="text-[#22C55E] font-semibold flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            Immediate Joiner
          </span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
