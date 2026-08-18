import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ContinuousSectionWrapper from '../ui/ContinuousSectionWrapper'
import ScrollParallax from '../ui/ScrollParallax'
import Tilt3D from '../ui/Tilt3D'
import { staggerItem } from '../../utils/motion'

export const AboutSection = () => {
  return (
    <ContinuousSectionWrapper id="about" glowColor="emerald" stagger={true}>
      <SectionHeading
        number="05"
        eyebrow="PERSPECTIVE"
        title="About & Engineering Philosophy"
        description="A quick overview of my background, developer focus, and what drives my software craftsmanship."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Narrative Column */}
        <motion.div variants={staggerItem} className="lg:col-span-8 space-y-5 font-sans text-sm leading-relaxed text-[#A1A1AA]">
          <p className="text-[#F5F5F5] font-semibold text-base">
            I am a Full Stack Developer based in Bangalore, India with a background in Computer Applications (BCA) and specialized fellowship training in modern web engineering.
          </p>

          <p>
            I enjoy building software that solves practical problems. Whether it's a multi-stage Kanban application tracker like <strong className="text-[#F5F5F5]">HireLog</strong> or a role-based assessment portal like <strong className="text-[#F5F5F5]">CONNECT</strong>, my goal is to craft systems that are reliable, maintainable, and straightforward for users.
          </p>

          <p>
            My engineering philosophy centers on <strong className="text-[#F5F5F5]">precision and defensive design</strong>:
          </p>

          <ul className="space-y-2.5 border-l border-[#242424] pl-4 font-mono text-xs text-[#F5F5F5]">
            <li className="flex gap-2 items-center">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Explicit REST API request & response payload schemas</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Robust session & JWT authorization middleware</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Indexed database queries for instant filtering</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span>Modular React component trees with Redux Toolkit</span>
            </li>
          </ul>

          <p>
            Currently, I am expanding my backend architecture depth and TypeScript design patterns while actively seeking full-time Full Stack / MERN Developer roles in Bangalore or remote software teams.
          </p>
        </motion.div>

        {/* Right Info Box with Scroll Parallax */}
        <motion.div variants={staggerItem} className="lg:col-span-4">
          <ScrollParallax speed={-0.04}>
            <Tilt3D maxTilt={4} scale={1.01}>
              <div className="editorial-card rounded-xl p-6 font-mono text-xs space-y-4">
                <h4 className="text-[#22C55E] font-bold uppercase tracking-wider border-b border-[#242424] pb-2">// QUICK FACTS</h4>
                
                <div>
                  <span className="text-[#71717A] block text-[10px] uppercase">Degree</span>
                  <span className="text-[#F5F5F5]">BCA (CGPA: 8.3 / 10.0)</span>
                </div>

                <div>
                  <span className="text-[#71717A] block text-[10px] uppercase">College</span>
                  <span className="text-[#F5F5F5]">Vijayanagara College</span>
                </div>

                <div>
                  <span className="text-[#71717A] block text-[10px] uppercase">Fellowship</span>
                  <span className="text-[#F5F5F5]">AlmaBetter Full Stack</span>
                </div>

                <div>
                  <span className="text-[#71717A] block text-[10px] uppercase">Open To</span>
                  <span className="text-[#22C55E]">Full-Time / MERN / React / Node</span>
                </div>
              </div>
            </Tilt3D>
          </ScrollParallax>
        </motion.div>
      </div>
    </ContinuousSectionWrapper>
  )
}

export default AboutSection
