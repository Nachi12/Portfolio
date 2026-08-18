import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const HeroObject3D = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 450
    const height = container.clientHeight || 380

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
    camera.position.z = 6.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Main 3D Developer Compound Object Group
    const heroGroup = new THREE.Group()
    scene.add(heroGroup)

    // 1. Outer Wireframe Polyhedron
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1)
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x22C55E,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const outerMesh = new THREE.Mesh(outerGeo, outerMat)
    heroGroup.add(outerMesh)

    // 2. Inner Translucent Octahedron Glass Core
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0)
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      emissive: 0x22C55E,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    heroGroup.add(innerMesh)

    // 3. Central Glowing Energy Sphere
    const coreGeo = new THREE.SphereGeometry(0.35, 16, 16)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22C55E,
      wireframe: false,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    heroGroup.add(coreMesh)

    // 4. Orbital Code Rings
    const ringGeo = new THREE.TorusGeometry(2.1, 0.015, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xF5F5F5, transparent: true, opacity: 0.3 })

    const ring1 = new THREE.Mesh(ringGeo, ringMat)
    ring1.rotation.x = Math.PI / 3
    heroGroup.add(ring1)

    const ring2 = new THREE.Mesh(ringGeo, ringMat)
    ring2.rotation.y = Math.PI / 4
    heroGroup.add(ring2)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x22C55E, 2.5, 12)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)

    // Mouse & Touch Lerping Inertia Variables
    let targetX = 0
    let targetY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      targetX = x * 1.5
      targetY = y * 1.5
    }

    // Mobile Touch Drag Support
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const rect = container.getBoundingClientRect()
        targetX = ((touch.clientX - rect.left) / rect.width - 0.5) * 1.5
        targetY = ((touch.clientY - rect.top) / rect.height - 0.5) * 1.5
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('touchmove', handleTouchMove)

    // Animation Loop with IntersectionObserver
    let animationFrameId
    let isVisible = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    let clock = new THREE.Clock()

    const animate = () => {
      if (isVisible) {
        const elapsedTime = clock.getElapsedTime()

        // Physical lerping delayed inertia
        mouseX += (targetX - mouseX) * 0.05
        mouseY += (targetY - mouseY) * 0.05

        heroGroup.rotation.y = elapsedTime * 0.2 + mouseX
        heroGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 - mouseY

        outerMesh.rotation.z = elapsedTime * 0.1
        innerMesh.rotation.y = -elapsedTime * 0.4
        ring1.rotation.z = elapsedTime * 0.3
        ring2.rotation.z = -elapsedTime * 0.25

        renderer.render(scene, camera)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', handleResize)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      outerGeo.dispose()
      outerMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-cursor="EXPLORE"
      className="relative w-full h-[320px] sm:h-[380px] rounded-xl border border-[#242424] bg-[#0A0A0A]/80 overflow-hidden cursor-grab active:cursor-grabbing backdrop-blur-sm shadow-xl"
    >
      <div className="absolute top-3 left-4 flex items-center gap-2 font-mono text-[10px] text-[#71717A] z-10 pointer-events-none">
        <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
        <span>3D Developer Core • Mouse Interactive</span>
      </div>
    </div>
  )
}

export default HeroObject3D
