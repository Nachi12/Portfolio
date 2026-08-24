import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const GlobalBackgroundScene = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

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

    // Spatial Connected Engineering Grid Particles
    const particleCount = isMobile ? 100 : 250
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x22C55E,
      size: 0.12,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    })

    const particlePoints = new THREE.Points(geometry, particleMaterial)
    scene.add(particlePoints)

    // Floating Engineering Node Polyhedra
    const polyGroup = new THREE.Group()
    const polyGeo = new THREE.IcosahedronGeometry(1.4, 0)
    const polyMat = new THREE.MeshBasicMaterial({
      color: 0x242424,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    })

    for (let i = 0; i < (isMobile ? 3 : 6); i++) {
      const mesh = new THREE.Mesh(polyGeo, polyMat)
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 15
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      polyGroup.add(mesh)
    }

    scene.add(polyGroup)

    // Floating Architecture Connection Lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x22C55E, transparent: true, opacity: 0.15 })
    const lineGeo = new THREE.BufferGeometry()
    const linePositions = new Float32Array([
      -10, 15, -5,  10, 10, -5,
      10, 10, -5,   5, -5, -2,
      5, -5, -2,    -8, -15, -8,
      -8, -15, -8,  8, -25, -5,
    ])
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lineMesh)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Mouse & Scroll Lerping
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop
    }

    window.addEventListener('scroll', handleScroll)

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
        mouseX += (targetMouseX - mouseX) * 0.04
        mouseY += (targetMouseY - mouseY) * 0.04

        const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)

        // Smooth camera traversal through spatial depth
        camera.position.z = 18 - scrollProgress * 6
        camera.position.y = -scrollProgress * 25
        camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 2
        camera.rotation.z = Math.cos(scrollProgress * Math.PI) * 0.04

        // Rotate particles & spatial polyhedra
        particlePoints.rotation.y = mouseX * 0.2 + scrollProgress * 0.4
        particlePoints.rotation.x = mouseY * 0.2

        polyGroup.children.forEach((child, index) => {
          child.rotation.x += 0.003 * (index + 1)
          child.rotation.y += 0.002 * (index + 1)
        })

        lineMesh.rotation.y = scrollProgress * 0.5
      }

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!container) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

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
      lineGeo.dispose()
      lineMat.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}

export default GlobalBackgroundScene
