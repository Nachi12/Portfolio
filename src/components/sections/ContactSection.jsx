import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { showResumePreview } from '../../store/slices/previewSlice'
import resumeUrl from '../../../Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf?url'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import Magnetic from '../ui/Magnetic'
import { buttonHover, buttonTap } from '../../utils/motion'

const contactMethods = [
  { label: 'Direct Email', value: 'nrnachi34@gmail.com', href: 'mailto:nrnachi34@gmail.com' },
  { label: 'Phone / WhatsApp', value: '+91-9380552034', href: 'tel:+919380552034' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nachiketa12', href: 'https://www.linkedin.com/in/nachiketa12/' },
  { label: 'GitHub', value: 'github.com/Nachi12', href: 'https://github.com/Nachi12' },
]

export const ContactSection = () => {
  const dispatch = useDispatch()
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nrnachi34@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleResumePreview = () => {
    dispatch(showResumePreview(resumeUrl))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <ContinuousSectionWrapper id="contact" glowColor="emerald" stagger={true}>
      {/* Ending Scene Dominant Editorial Typography */}
      <div className="py-12 border-b border-[#242424] space-y-4 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs font-bold text-[#22C55E] tracking-widest uppercase block"
        >
          06 // FINAL DESTINATION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#F5F5F5] uppercase leading-none"
        >
          LET'S BUILD SOMETHING USEFUL.
        </motion.h2>

        <p className="mx-auto max-w-2xl font-sans text-sm sm:text-base text-[#A1A1AA] pt-2">
          Available for full-time Full Stack Developer / MERN Developer roles in Bangalore, hybrid setups, or remote engineering teams.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 pt-12 items-start">
        {/* Left Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F5]">Nachiketa NR</h3>
            <p className="font-mono text-xs text-[#22C55E] font-semibold mt-1">Full Stack Developer • React / Node / TypeScript</p>
          </div>

          <div className="space-y-3 font-mono text-xs border-y border-[#242424] py-5">
            {contactMethods.map((m) => (
              <div key={m.label} className="flex items-center justify-between border-b border-[#111111] pb-2.5 last:border-b-0">
                <span className="text-[#71717A] text-[10px] uppercase">{m.label}</span>
                <Magnetic maxDisplacement={6}>
                  <motion.a
                    whileHover={{ x: 2, color: '#22C55E' }}
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel={m.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-[#F5F5F5] transition-colors font-semibold"
                  >
                    {m.value} ↗
                  </motion.a>
                </Magnetic>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Magnetic maxDisplacement={8} className="flex-1">
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={handleCopyEmail}
                className="w-full rounded border border-[#242424] bg-[#0A0A0A] py-3 font-mono text-xs text-[#F5F5F5] hover:border-[#383838] transition-colors"
              >
                {copied ? 'Copied! ✓' : 'Copy Email Address'}
              </motion.button>
            </Magnetic>

            <Magnetic maxDisplacement={8} className="flex-1">
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                type="button"
                onClick={handleResumePreview}
                className="w-full rounded bg-[#22C55E] py-3 font-mono text-xs font-bold text-black hover:bg-[#1ea34d] transition-colors shadow-lg shadow-[#22C55E]/10"
              >
                Inspect Resume PDF ↗
              </motion.button>
            </Magnetic>
          </div>
        </div>

        {/* Right Direct Message Form */}
        <div className="lg:col-span-7 editorial-card rounded-2xl p-6 lg:p-8 border border-[#242424] bg-[#0A0A0A]">
          <h4 className="font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider border-b border-[#242424] pb-3 mb-5">
            // SEND DIRECT MESSAGE
          </h4>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-4 rounded border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] font-mono text-xs text-center"
              >
                ✓ Message received. I will get back to you within 24 hours.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] text-[#A1A1AA] mb-1.5">
                    YOUR NAME / RECRUITER ROLE
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan (Technical Hiring Manager)"
                    className="w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] text-[#A1A1AA] mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] text-[#A1A1AA] mb-1.5">
                    MESSAGE / OPPORTUNITY DETAILS
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="We have an opening for a Full Stack Developer (React / Node / TypeScript) on our team..."
                    className="w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans transition-colors"
                  />
                </div>

                <Magnetic maxDisplacement={8} className="w-full">
                  <motion.button
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    type="submit"
                    className="w-full rounded bg-[#F5F5F5] py-3 font-mono text-xs font-semibold text-[#050505] hover:bg-white transition-colors uppercase tracking-wider"
                  >
                    Send Message
                  </motion.button>
                </Magnetic>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ContinuousSectionWrapper>
  )
}

export default ContactSection
