import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RecruiterBar from './components/layout/RecruiterBar'
import HeroSection from './components/sections/HeroSection'
import IntroductionSection from './components/sections/IntroductionSection'
import EngineeringStack from './components/sections/EngineeringStack'
import CaseStudies from './components/sections/CaseStudies'
import EngineeringMethodology from './components/sections/EngineeringMethodology'
import Experience from './components/sections/Experience'
import InteractiveResume from './components/sections/InteractiveResume'
import ContactSection from './components/sections/ContactSection'
import LivePreviewModal from './components/ui/LivePreviewModal'
import SmoothScrollProvider from './components/ui/SmoothScrollProvider'
import CustomCursor from './components/ui/CustomCursor'
import Preloader from './components/ui/Preloader'
import GlobalBackgroundScene from './components/3d/GlobalBackgroundScene'
import './App.css'

function App() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <CustomCursor />
      <GlobalBackgroundScene />

      <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#22C55E]/20 selection:text-[#F5F5F5] relative overflow-x-clip">
        {/* Navigation Bar & Progress Indicator */}
        <Navbar />

        {/* Continuous Spatial Exhibition Layout */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-32">
          {/* 1. ARRIVAL & IDENTITY */}
          <HeroSection />

          {/* 2. DIGITAL WORLD & DEVELOPER IDENTITY */}
          <IntroductionSection />

          {/* 3. TECHNOLOGY CAPABILITIES LANDSCAPE */}
          <EngineeringStack />

          {/* 4. SPATIAL PRODUCT JOURNEY (PROJECTS) */}
          <CaseStudies />

          {/* 5. TYPOGRAPHIC MOTION & ENGINEERING MINDSET */}
          <EngineeringMethodology />

          {/* 6. CAREER JOURNEY TIMELINE */}
          <Experience />

          {/* 7. CREDENTIALS & RESUME PDF */}
          <InteractiveResume />

          {/* 8. CONTACT / EXIT DESTINATION */}
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />

        {/* Floating Recruiter Quick Action Bar */}
        <RecruiterBar />

        {/* Interactive Modal for Live App Previews & Resume PDF */}
        <LivePreviewModal />
      </div>
    </SmoothScrollProvider>
  )
}

export default App
