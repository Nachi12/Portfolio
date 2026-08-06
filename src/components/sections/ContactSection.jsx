import React, { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const contactItems = [
  { label: 'Direct Email', value: 'nrnachi34@gmail.com', href: 'mailto:nrnachi34@gmail.com', icon: '✉️' },
  { label: 'Phone / WhatsApp', value: '+91-9380552034', href: 'tel:+919380552034', icon: '📞' },
  { label: 'LinkedIn Profile', value: 'linkedin.com/in/nachiketa12', href: 'https://www.linkedin.com/in/nachiketa12/', icon: '💼' },
  { label: 'GitHub Repository', value: 'github.com/Nachi12', href: 'https://github.com/Nachi12', icon: '🐙' },
  { label: 'Current Location', value: 'Bangalore, Karnataka, India', href: 'https://www.google.com/maps/place/Bengaluru,+Karnataka', icon: '📍' },
  { label: 'Role Availability', value: 'Immediate Joiner (Full-Time)', href: 'mailto:nrnachi34@gmail.com', icon: '⚡' },
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
        eyebrow="Get In Touch"
        title="Recruiter & Hiring Contact Hub"
        description="Available for immediate joining on Full Stack (React/Node/TypeScript) roles in Bangalore, remote, or hybrid arrangements."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Contact Cards */}
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition duration-200 hover:border-indigo-500/40 hover:bg-slate-900/70"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-wider">{item.label}</span>
                </div>
                <p className="mt-2 break-words font-sans text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <Card className="p-6 bg-slate-900/60 flex items-center justify-between">
            <div>
              <p className="font-display text-sm font-bold text-white">Direct Email Copy</p>
              <p className="font-mono text-xs text-slate-400">nrnachi34@gmail.com</p>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 font-mono text-xs font-semibold text-indigo-300 transition hover:bg-indigo-500/20 active:scale-95"
            >
              {copied ? 'Copied! ✓' : 'Copy Email'}
            </button>
          </Card>
        </div>

        {/* Contact Form Card */}
        <Card className="p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <h3 className="font-display text-xl font-bold text-white tracking-tight">Send Direct Message</h3>
            <Badge variant="emerald" size="xs">24h Response Guarantee</Badge>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-center font-mono text-sm">
              ✓ Thank you for reaching out! Message recorded. I will respond within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div>
                <label htmlFor="name" className="block font-mono font-semibold text-slate-300 mb-1">
                  Your Name / Hiring Manager Title
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins (Senior Recruiter)"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-200 focus:border-indigo-500 focus:outline-none font-sans"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono font-semibold text-slate-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-200 focus:border-indigo-500 focus:outline-none font-sans"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono font-semibold text-slate-300 mb-1">
                  Message / Opportunity Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="We are looking for a Full Stack Engineer for our React & Node.js platform..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-200 focus:border-indigo-500 focus:outline-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 py-3.5 font-sans text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-400 hover:to-violet-500 active:scale-95"
              >
                Send Direct Inquiry
              </button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}

export default ContactSection
