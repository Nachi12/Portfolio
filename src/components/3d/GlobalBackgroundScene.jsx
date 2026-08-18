import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const GlobalBackgroundScene = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2))
    container.appendChild(renderer.domElement)

    // Instanced Particle Field
    const particleCount = isMobile ? 80 : 180
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      scales[i] = Math.random() * 0.08 + 0.02
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x22C55E,
      size: 0.12,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    })

    const particlePoints = new THREE.Points(geometry, particleMaterial)
    scene.add(particlePoints)

    // Floating Polyhedra Background Elements
    const polyGroup = new THREE.Group()
    const polyGeo = new THREE.IcosahedronGeometry(1.2, 0)
    const polyMat = new THREE.MeshBasicMaterial({
      color: 0x242424,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })

    for (let i = 0; i < 4; i++) {
      const mesh = new THREE.Mesh(polyGeo, polyMat)
      mesh.position.set(
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 10
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      polyGroup.add(mesh)
    }

    scene.add(polyGroup)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    // Mouse & Scroll Lerping Variables
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Scroll Camera Target
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop
    }

    window.addEventListener('scroll', handleScroll)

    // Animation Loop with IntersectionObserver
    let animationFrameId
    let isVisible = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(container)

    const animate = () => {
      if (isVisible) {
        // Lerp mouse positions
        mouseX += (targetMouseX - mouseX) * 0.04
        mouseY += (targetMouseY - mouseY) * 0.04

        // Scroll-driven camera journey
        const scrollFactor = scrollY * 0.005
        camera.position.y = -scrollFactor * 0.8
        camera.position.x = Math.sin(scrollFactor * 0.5) * 1.5
        camera.rotation.z = Math.cos(scrollFactor * 0.3) * 0.05

        // Rotate particles & polyhedra
        particlePoints.rotation.y = mouseX * 0.3 + scrollFactor * 0.1
        particlePoints.rotation.x = mouseY * 0.3

        polyGroup.children.forEach((child, index) => {
          child.rotation.x += 0.003 * (index + 1)
          child.rotation.y += 0.002 * (index + 1)
        })

        renderer.render(scene, camera)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup Resources
    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)

      geometry.dispose()
      particleMaterial.dispose()
      polyGeo.dispose()
      polyMat.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}

export default GlobalBackgroundScene
