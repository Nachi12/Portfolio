import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RecruiterBar from './components/layout/RecruiterBar'
import HeroSection from './components/sections/HeroSection'
import CaseStudies from './components/sections/CaseStudies'
import EngineeringMethodology from './components/sections/EngineeringMethodology'
import EngineeringStack from './components/sections/EngineeringStack'
import Experience from './components/sections/Experience'
import AboutSection from './components/sections/AboutSection'
import InteractiveResume from './components/sections/InteractiveResume'
import ContactSection from './components/sections/ContactSection'
import LivePreviewModal from './components/ui/LivePreviewModal'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#22C55E]/20 selection:text-[#F5F5F5]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Editorial Page Layout */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <CaseStudies />
        <EngineeringMethodology />
        <EngineeringStack />
        <Experience />
        <AboutSection />
        <InteractiveResume />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Quick Action Bar */}
      <RecruiterBar />

      {/* Interactive Modal for Resume & Live Previews */}
      <LivePreviewModal />
    </div>
  )
}

export default App
