import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const Hero3DCanvas = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Setup Scene, Camera & Renderer
    const scene = new THREE.Scene()
    const width = container.clientWidth || 450
    const height = container.clientHeight || 450

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Create Central 3D Geometries
    const group = new THREE.Group()
    scene.add(group)

    // Outer Torus Knot Ring
    const torusGeometry = new THREE.TorusKnotGeometry(1.2, 0.28, 128, 32)
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      emissive: 0x312e81,
      emissiveIntensity: 0.4,
    })
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial)
    group.add(torusMesh)

    // Inner Glowing Core Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(0.75, 1)
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6,
      ior: 1.5,
    })
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    group.add(coreMesh)

    // Floating Orbital Particles
    const particlesCount = 80
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.2 + Math.random() * 0.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    })
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    group.add(particleSystem)

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x6366f1, 3, 10)
    pointLight1.position.set(4, 4, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x10b981, 2.5, 10)
    pointLight2.position.set(-4, -3, 2)
    scene.add(pointLight2)

    // Mouse Tracking for 3D Parallax & Rotation
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0

    const handleMouseMove = (event) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (event.clientX - left) / width - 0.5
      const y = (event.clientY - top) / height - 0.5
      mouseX = x * 2
      mouseY = y * 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Continuous background rotations
      torusMesh.rotation.x = elapsedTime * 0.25
      torusMesh.rotation.y = elapsedTime * 0.35
      coreMesh.rotation.y = -elapsedTime * 0.4
      particleSystem.rotation.y = elapsedTime * 0.15

      // Smooth mouse interpolation (Damping)
      targetRotationY += (mouseX * 0.8 - targetRotationY) * 0.05
      targetRotationX += (mouseY * 0.8 - targetRotationX) * 0.05

      group.rotation.y = targetRotationY
      group.rotation.x = targetRotationX

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center pointer-events-auto">
      {/* Glow background behind 3D Mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-emerald-500/20 blur-3xl rounded-full animate-pulse-glow" />
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10" />
    </div>
  )
}

export default Hero3DCanvas
