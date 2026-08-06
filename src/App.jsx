import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RecruiterBar from './components/layout/RecruiterBar'
import HeroSection from './components/sections/HeroSection'
import CaseStudies from './components/sections/CaseStudies'
import EngineeringStack from './components/sections/EngineeringStack'
import Experience from './components/sections/Experience'
import InteractiveResume from './components/sections/InteractiveResume'
import ContactSection from './components/sections/ContactSection'
import LivePreviewModal from './components/ui/LivePreviewModal'
import './App.css'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b1020] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background ambient light mesh */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(99,102,241,0.12),transparent_50%),radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(16,185,129,0.08),transparent_50%),linear-gradient(180deg,#0b1020_0%,#0e1424_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.14] [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <CaseStudies />
        <EngineeringStack />
        <Experience />
        <InteractiveResume />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter 15-Second Conversion Floating Bar */}
      <RecruiterBar />

      {/* Interactive Modal for Resume & Live Previews */}
      <LivePreviewModal />
    </div>
  )
}

export default App
