import React, { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'

const contactMethods = [
  { label: 'Direct Email', value: 'nrnachi34@gmail.com', href: 'mailto:nrnachi34@gmail.com' },
  { label: 'Phone / WhatsApp', value: '+91-9380552034', href: 'tel:+919380552034' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nachiketa12', href: 'https://www.linkedin.com/in/nachiketa12/' },
  { label: 'GitHub', value: 'github.com/Nachi12', href: 'https://github.com/Nachi12' },
]

export const ContactSection = () => {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nrnachi34@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16">
      <SectionHeading
        number="07"
        eyebrow="GET IN TOUCH"
        title="Let's build something useful."
        description="Available for immediate joining on Full Stack (React/Node/TypeScript) roles in Bangalore, remote, or hybrid arrangements."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Contact Links */}
        <div className="lg:col-span-5 space-y-4">
          <div className="editorial-card rounded-xl p-6 space-y-4">
            <h4 className="font-mono text-xs font-bold text-[#22C55E] uppercase tracking-wider">// DIRECT CONTACT</h4>
            
            <div className="space-y-3 font-mono text-xs">
              {contactMethods.map((m) => (
                <div key={m.label} className="border-b border-[#111111] pb-2 last:border-b-0">
                  <span className="text-[#71717A] text-[10px] uppercase block">{m.label}</span>
                  <a
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel={m.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-[#F5F5F5] hover:text-[#22C55E] transition-colors font-semibold mt-0.5 block"
                  >
                    {m.value} ↗
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full rounded border border-[#242424] bg-[#111111] py-2 font-mono text-xs text-[#F5F5F5] hover:border-[#383838] transition-colors"
              >
                {copied ? 'Email Copied to Clipboard! ✓' : 'Copy Email Address'}
              </button>
            </div>
          </div>
        </div>

        {/* Direct Contact Form */}
        <div className="lg:col-span-7 editorial-card rounded-xl p-6 lg:p-8">
          <h4 className="font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider border-b border-[#242424] pb-3 mb-5">
            // SEND DIRECT MESSAGE
          </h4>

          {submitted ? (
            <div className="p-4 rounded border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] font-mono text-xs text-center">
              ✓ Message recorded. I will get back to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div>
                <label htmlFor="name" className="block font-mono text-[11px] text-[#A1A1AA] mb-1.5">
                  YOUR NAME / ROLE
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins (Senior Technical Recruiter)"
                  className="w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans"
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
                  placeholder="sarah@company.com"
                  className="w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans"
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
                  placeholder="We are looking for a Full Stack Engineer for our React & Node.js platform..."
                  className="w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded bg-[#F5F5F5] py-3 font-mono text-xs font-semibold text-[#050505] hover:bg-white transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
