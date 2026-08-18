import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { setActiveTab } from '../../store/slices/tabSlice'
import { showResumePreview } from '../../store/slices/previewSlice'
import { useSmoothScroll } from '../ui/SmoothScrollProvider'
import SplitText from '../ui/SplitText'
import ScrollParallax from '../ui/ScrollParallax'
import Magnetic from '../ui/Magnetic'
import SystemArchitecture3D from '../3d/SystemArchitecture3D'
import HeroObject3D from '../3d/HeroObject3D'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'
import { heroSequence, buttonHover, buttonTap } from '../../utils/motion'

const codeSnippets = [
  {
    id: 'component',
    label: 'React Component',
    filename: 'KanbanBoard.tsx',
    code: `import React, { useState } from 'react';
import { useKanbanStore } from '../store/useKanbanStore';

export const KanbanBoard: React.FC = () => {
  const { columns, updateStage } = useKanbanStore();

  const handleDrop = async (id: string, targetStage: string) => {
    updateStage(id, targetStage); // Optimistic UI update
    await api.patch(\`/api/v1/applications/\${id}\`, { stage: targetStage });
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {columns.map(col => <StageColumn key={col.id} column={col} onDrop={handleDrop} />)}
    </div>
  );
};`,
  },
  {
    id: 'backend',
    label: 'Express Middleware',
    filename: 'authMiddleware.ts',
    code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Authentication required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid session token' });
  }
};`,
  },
  {
    id: 'database',
    label: 'Mongoose Schema',
    filename: 'Application.ts',
    code: `import { Schema, model } from 'mongoose';

const ApplicationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  company: { type: String, required: true },
  stage: { type: String, enum: ['Wishlist', 'Applied', 'Interviewing'], default: 'Applied' }
}, { timestamps: true });

export const Application = model('Application', ApplicationSchema);`,
  },
]

export const HeroSection = () => {
  const dispatch = useDispatch()
  const [heroViewMode, setHeroViewMode] = useState('hero3d') // 'hero3d' | 'arch3d' | 'code'
  const [activeCodeTab, setActiveCodeTab] = useState('component')
  const { scrollTo } = useSmoothScroll()

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId))
    scrollTo(`#${tabId}`)
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  const activeSnippet = codeSnippets.find((s) => s.id === activeCodeTab)

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="show"
      variants={heroSequence.container}
      className="pt-10 pb-16 relative"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Confident Editorial Intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Pill */}
          <motion.div variants={heroSequence.item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#242424] bg-[#0A0A0A] px-3.5 py-1.5 font-mono text-xs text-[#A1A1AA] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Available for Full-Time Roles • Bangalore, India</span>
            </div>
          </motion.div>

          {/* Editorial Title with Masked Split Typography Reveal */}
          <motion.div variants={heroSequence.item}>
            <SplitText
              as="h1"
              className="font-sans text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl leading-[1.15]"
              delay={0.1}
            >
              Full Stack Developer building thoughtful web applications from frontend to backend.
            </SplitText>
          </motion.div>

          {/* Narrative Intro */}
          <motion.p
            variants={heroSequence.item}
            className="font-sans text-base leading-relaxed text-[#A1A1AA] max-w-2xl sm:text-lg"
          >
            I am <strong className="text-[#F5F5F5] font-semibold">Nachiketa NR</strong>. I build reliable web products using React, Node.js, Express, and MongoDB. Focused on clean system architecture, REST API security, and intuitive user interfaces.
          </motion.p>

          {/* Actions */}
          <motion.div variants={heroSequence.item} className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
            <Magnetic maxDisplacement={10}>
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={() => handleTabClick('projects')}
                className="rounded-md bg-[#F5F5F5] px-5 py-2.5 font-semibold text-[#050505] hover:bg-white transition-colors shadow-md"
              >
                View Work ↓
              </motion.button>
            </Magnetic>

            <Magnetic maxDisplacement={10}>
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={handleResumePreview}
                className="rounded-md border border-[#242424] bg-[#0A0A0A] px-5 py-2.5 text-[#F5F5F5] hover:border-[#383838] hover:bg-[#111111] transition-colors"
              >
                View Resume
              </motion.button>
            </Magnetic>

            <Magnetic maxDisplacement={8}>
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={() => setHeroViewMode(heroViewMode === 'hero3d' ? 'arch3d' : heroViewMode === 'arch3d' ? 'code' : 'hero3d')}
                className="rounded-md border border-[#242424] bg-[#050505] px-4 py-2.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors"
              >
                {heroViewMode === 'hero3d' ? 'View 3D Arch' : heroViewMode === 'arch3d' ? 'View Code ↗' : 'View 3D Core'}
              </motion.button>
            </Magnetic>

            <Magnetic maxDisplacement={8}>
              <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                href="https://github.com/Nachi12"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#242424] bg-[#050505] px-4 py-2.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors inline-block"
              >
                GitHub ↗
              </motion.a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Hero Object / 3D Architecture / Code Inspector */}
        <motion.div variants={heroSequence.item} className="lg:col-span-5">
          <ScrollParallax speed={-0.05}>
            {heroViewMode === 'hero3d' ? (
              <HeroObject3D />
            ) : heroViewMode === 'arch3d' ? (
              <SystemArchitecture3D />
            ) : (
              <div className="border border-[#242424] rounded-xl bg-[#0A0A0A] overflow-hidden shadow-lg">
                <div className="flex items-center justify-between border-b border-[#242424] bg-[#111111] px-4 py-2.5">
                  <span className="font-mono text-xs text-[#71717A]">{activeSnippet.filename}</span>
                  <button onClick={() => setHeroViewMode('hero3d')} className="font-mono text-[10px] text-[#22C55E] hover:underline">Back to 3D Core</button>
                </div>
                <div className="flex border-b border-[#242424] bg-[#050505] font-mono text-[11px]">
                  {codeSnippets.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveCodeTab(s.id)}
                      className={`flex-1 py-2 text-center border-r border-[#242424] last:border-r-0 transition-colors ${
                        activeCodeTab === s.id ? 'bg-[#0A0A0A] text-[#F5F5F5] font-semibold' : 'text-[#71717A] hover:text-[#A1A1AA]'
                      }`}
                    >
                      {s.id.toUpperCase()}
                    </button>
                  ))}
                </div>
                <pre className="p-4 font-mono text-xs text-slate-300 overflow-x-auto min-h-[260px]">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>
            )}
          </ScrollParallax>
        </motion.div>
      </div>

      {/* Engineering Snapshot Strip */}
      <motion.div
        variants={heroSequence.item}
        className="mt-14 border-y border-[#242424] py-5 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs"
      >
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-ping" />
            Immediate Joiner
          </span>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
